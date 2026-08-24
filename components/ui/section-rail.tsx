"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Start" },
  { id: "cohort", label: "Cohort" },
  { id: "audience", label: "Audience" },
  { id: "gap", label: "The gap" },
  { id: "arc", label: "The arc" },
  { id: "outcomes", label: "Outcomes" },
  { id: "committee", label: "Committee" },
  { id: "free", label: "Free tools" },
  { id: "faculty", label: "Faculty" },
  { id: "apply", label: "Apply" },
];

export default function SectionRail() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => Boolean(n));

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3"
    >
      {sections.map((section) => {
        const isActive = active === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group flex items-center justify-end gap-3"
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={cn(
                "text-[10px] uppercase tracking-[0.16em] font-semibold transition-all duration-300",
                isActive
                  ? "opacity-100 text-black translate-x-0"
                  : "opacity-0 translate-x-2 group-hover:opacity-70 group-hover:translate-x-0 text-gray-500"
              )}
            >
              {section.label}
            </span>
            <span
              className={cn(
                "block rounded-none transition-all duration-300 border border-black",
                isActive ? "h-6 w-[3px] bg-black" : "h-2 w-2 bg-white group-hover:bg-gray-300"
              )}
            />
          </a>
        );
      })}
    </nav>
  );
}
