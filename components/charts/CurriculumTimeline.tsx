"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { programmeWeeks } from "@/data/programme-weeks";

const phases = [
  { label: "Thesis", weeks: [1, 2, 3], tone: "bg-gray-200" },
  { label: "Diligence", weeks: [4, 5, 6], tone: "bg-gray-300" },
  { label: "Structure", weeks: [7, 8, 9], tone: "bg-gray-400" },
  { label: "IC", weeks: [10, 11, 12], tone: "bg-black" },
];

export default function CurriculumTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [week, setWeek] = useState(1);
  const selected = programmeWeeks.find((w) => w.week === week) ?? programmeWeeks[0];

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="border border-gray-200 bg-white p-5 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-2">
            Twelve weeks
          </p>
          <h3 className="text-xl font-heading font-bold text-black">Curriculum intensity</h3>
        </div>
        <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
          Hover or select a week. Live session plus a written deliverable due before it.
        </p>
      </div>

      <div className="mb-6 grid grid-cols-4 gap-2">
        {phases.map((phase) => (
          <div key={phase.label} className="text-center">
            <div
              className={cn(
                "h-2 mb-2 transition-transform duration-500",
                phase.tone,
                active ? "scale-x-100" : "scale-x-0",
                "origin-left"
              )}
            />
            <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-gray-500">
              {phase.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-end gap-1.5 sm:gap-2 h-36 mb-6">
        {programmeWeeks.map((row) => {
          const height = 28 + row.week * 5.5;
          const isSelected = week === row.week;
          const isIc = row.week === 11;
          return (
            <button
              key={row.week}
              type="button"
              onClick={() => setWeek(row.week)}
              onMouseEnter={() => setWeek(row.week)}
              className="flex-1 h-full flex flex-col justify-end items-center gap-2 group"
              aria-label={`Week ${row.week}: ${row.session}`}
              aria-pressed={isSelected}
            >
              <div
                className={cn(
                  "w-full transition-all duration-500 ease-out border",
                  isSelected || isIc
                    ? "bg-black border-black"
                    : "bg-gray-200 border-transparent group-hover:bg-gray-400",
                  active ? "opacity-100" : "opacity-0"
                )}
                style={{
                  height: active ? `${height}%` : "0%",
                  transitionDelay: `${row.week * 40}ms`,
                }}
              />
              <span
                className={cn(
                  "font-mono text-[10px] tabular-nums",
                  isSelected ? "text-black font-bold" : "text-gray-400"
                )}
              >
                {row.week}
              </span>
            </button>
          );
        })}
      </div>

      <div className="border border-gray-200 bg-gray-50 p-5 min-h-[120px]">
        <div className="flex items-center gap-3 mb-2">
          <span className="border border-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em]">
            Week {selected.week}
          </span>
          {selected.week === 11 ? (
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-500">
              Investment committee
            </span>
          ) : null}
        </div>
        <p className="text-base font-heading font-semibold text-black mb-1">{selected.session}</p>
        <p className="text-sm text-gray-600 leading-relaxed">
          Deliverable: {selected.deliverable}
        </p>
      </div>
    </div>
  );
}
