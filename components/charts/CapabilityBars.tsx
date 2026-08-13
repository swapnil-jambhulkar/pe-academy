"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Skill = {
  label: string;
  analyst: number;
  principal: number;
};

/** Conceptual skill map for mid-career deal professionals. Relative emphasis only. Not survey data. */
const skills: Skill[] = [
  { label: "Modelling", analyst: 92, principal: 70 },
  { label: "Diligence", analyst: 85, principal: 78 },
  { label: "Origination", analyst: 18, principal: 94 },
  { label: "Owner dialogue", analyst: 22, principal: 90 },
  { label: "Structure design", analyst: 40, principal: 88 },
  { label: "Live judgement", analyst: 28, principal: 96 },
];

export default function CapabilityBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState<string | null>(null);

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
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="border border-gray-200 bg-white p-5 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-2">
            Skill map
          </p>
          <h3 className="text-xl font-heading font-bold text-black">
            Where analyst strength stops helping
          </h3>
        </div>
        <div className="flex items-center gap-4 text-xs uppercase tracking-wide font-semibold">
          <span className="flex items-center gap-2 text-gray-500">
            <span className="inline-block h-2 w-6 bg-gray-300" /> Analyst seat
          </span>
          <span className="flex items-center gap-2 text-black">
            <span className="inline-block h-2 w-6 bg-black" /> Principal seat
          </span>
        </div>
      </div>

      <div className="space-y-5">
        {skills.map((skill) => {
          const isHover = hover === skill.label;
          return (
            <button
              key={skill.label}
              type="button"
              className="w-full text-left group"
              onMouseEnter={() => setHover(skill.label)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(skill.label)}
              onBlur={() => setHover(null)}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isHover ? "text-black" : "text-gray-700"
                  )}
                >
                  {skill.label}
                </span>
                <span className="font-mono text-[11px] text-gray-400 tabular-nums">
                  {skill.analyst} / {skill.principal}
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="h-2 bg-gray-100 overflow-hidden">
                  <div
                    className="h-full bg-gray-300 transition-all duration-700 ease-out"
                    style={{ width: active ? `${skill.analyst}%` : "0%" }}
                  />
                </div>
                <div className="h-2 bg-gray-100 overflow-hidden">
                  <div
                    className="h-full bg-black transition-all duration-1000 ease-out"
                    style={{
                      width: active ? `${skill.principal}%` : "0%",
                      transitionDelay: active ? "120ms" : "0ms",
                    }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-xs text-gray-500 leading-relaxed max-w-2xl">
        Illustrative framework for mid-career deal roles. Relative emphasis only. Not survey data or
        placement statistics.
      </p>
    </div>
  );
}
