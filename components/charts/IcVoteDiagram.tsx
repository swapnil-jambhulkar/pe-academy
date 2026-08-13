"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const chairs = [
  { seat: "Chair A", stance: "Challenge", note: "Commercial diligence and concentration risk" },
  { seat: "Chair B", stance: "Challenge", note: "Debt capacity and downside cases" },
  { seat: "Chair C", stance: "Vote", note: "Structure, price, and Monday morning plan" },
];

export default function IcVoteDiagram() {
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
    <div ref={ref} className="border border-gray-200 bg-white p-5 md:p-8 mb-10">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-2">
            Room dynamics
          </p>
          <h3 className="text-xl font-heading font-bold text-black mb-3">
            Three chairs. One vote each.
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-lg">
            External members read memoranda in advance. They question for three hours. They vote.
            Pass is not assumed.
          </p>

          <svg viewBox="0 0 420 220" className="w-full max-w-md h-auto" role="img" aria-label="Investment committee room diagram">
            <rect x="110" y="150" width="200" height="14" fill="#111" />
            <text x="210" y="190" textAnchor="middle" style={{ fontSize: 11, fill: "#6B7280" }}>
              Participant · live defence
            </text>

            {chairs.map((chair, index) => {
              const x = 70 + index * 140;
              const isSelected = selected === index;
              return (
                <g
                  key={chair.seat}
                  className="cursor-pointer"
                  onClick={() => setSelected(index)}
                  onMouseEnter={() => setSelected(index)}
                >
                  <rect
                    x={x - 36}
                    y={36}
                    width="72"
                    height="48"
                    fill={isSelected ? "#000" : "#fff"}
                    stroke="#000"
                    strokeWidth="2"
                    className="transition-all duration-300"
                    style={{
                      opacity: active ? 1 : 0,
                      transform: active ? "translateY(0)" : "translateY(-8px)",
                      transitionDelay: `${index * 140}ms`,
                    }}
                  />
                  <text
                    x={x}
                    y={64}
                    textAnchor="middle"
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      fill: isSelected ? "#fff" : "#000",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {chair.seat.toUpperCase()}
                  </text>
                  <line
                    x1={x}
                    y1={84}
                    x2={210}
                    y2={150}
                    stroke={isSelected ? "#000" : "#D1D5DB"}
                    strokeWidth={isSelected ? 2 : 1}
                    className="transition-all duration-300"
                  />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="space-y-3">
          {chairs.map((chair, index) => (
            <button
              key={chair.seat}
              type="button"
              onClick={() => setSelected(index)}
              className={cn(
                "w-full text-left border p-4 transition-all duration-300",
                selected === index
                  ? "border-black bg-black text-white shadow-[4px_4px_0_0_#000]"
                  : "border-gray-200 bg-white hover:border-black"
              )}
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-heading font-semibold">{chair.seat}</p>
                <span className="text-[10px] uppercase tracking-[0.16em] font-bold opacity-70">
                  {chair.stance}
                </span>
              </div>
              <p className={cn("text-sm leading-relaxed", selected === index ? "text-white/80" : "text-gray-600")}>
                {chair.note}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
