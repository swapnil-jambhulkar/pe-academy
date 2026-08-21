"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stages = [
  {
    id: "execute",
    label: "Execute",
    detail: "Models, memos, diligence packs under someone else's mandate.",
  },
  {
    id: "source",
    label: "Source",
    detail: "Find owner-managed businesses nobody assigned you. Build a proprietary universe. No CIM.",
  },
  {
    id: "decide",
    label: "Decide",
    detail: "Kill or pursue in ninety minutes. Own the screen.",
  },
  {
    id: "structure",
    label: "Structure",
    detail: "Price, rolled equity, debt capacity. Design the waterfall.",
  },
  {
    id: "defend",
    label: "Defend",
    detail: "Live IC. External voters. Recommendations can be rejected.",
  },
];

export default function DealArcChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(0);

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
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="border border-gray-200 bg-white p-5 md:p-8">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-2">
          Programme arc
        </p>
        <h3 className="text-xl font-heading font-bold text-black mb-2">
          From execution to ownership
        </h3>
        <p className="text-sm text-gray-600 max-w-2xl leading-relaxed">
          PGP is sequenced as five judgements. Each week compounds into the live investment committee.
        </p>
      </div>

      <svg viewBox="0 0 640 160" className="w-full h-auto mb-8" role="img" aria-label="Deal ownership arc">
        <line x1="40" y1="90" x2="600" y2="90" stroke="#E5E7EB" strokeWidth="2" />
        <path
          d="M40 110 C 160 110, 200 40, 320 40 S 480 110, 600 70"
          fill="none"
          stroke="#000"
          strokeWidth="2.5"
          strokeDasharray="720"
          strokeDashoffset={active ? 0 : 720}
          className="transition-all duration-1000 ease-out"
        />
        {stages.map((stage, index) => {
          const x = 40 + index * 140;
          const y = index === 0 ? 110 : index === 1 ? 78 : index === 2 ? 40 : index === 3 ? 72 : 70;
          const isSelected = selected === index;
          return (
            <g
              key={stage.id}
              className="cursor-pointer"
              onClick={() => setSelected(index)}
              onMouseEnter={() => setSelected(index)}
            >
              <circle
                cx={x}
                cy={y}
                r={isSelected ? 10 : 7}
                fill={isSelected ? "#000" : "#fff"}
                stroke="#000"
                strokeWidth="2"
                className="transition-all duration-300"
                style={{
                  opacity: active ? 1 : 0,
                  transitionDelay: `${index * 120}ms`,
                }}
              />
              <text
                x={x}
                y={y + 28}
                textAnchor="middle"
                className="fill-black"
                style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em" }}
              >
                {String(index + 1).padStart(2, "0")}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="grid sm:grid-cols-5 gap-2 mb-6">
        {stages.map((stage, index) => (
          <button
            key={stage.id}
            type="button"
            onClick={() => setSelected(index)}
            className={cn(
              "border px-3 py-3 text-left transition-all duration-300",
              selected === index
                ? "border-black bg-black text-white"
                : "border-gray-200 bg-white text-black hover:border-black"
            )}
          >
            <p className="text-[10px] uppercase tracking-[0.16em] font-semibold mb-1 opacity-70">
              Stage {index + 1}
            </p>
            <p className="text-sm font-heading font-semibold">{stage.label}</p>
          </button>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-5 min-h-[72px]">
        <p className="text-base text-gray-800 leading-relaxed">{stages[selected].detail}</p>
      </div>
    </div>
  );
}
