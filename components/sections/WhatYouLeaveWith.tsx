"use client";

import { useState } from "react";
import { FileSpreadsheet, FileText, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/reveal";

type Artifact = {
  id: string;
  exhibit: string;
  title: string;
  format: "Workbook" | "Memorandum" | "Live";
  kind: "xlsx" | "pdf" | "live";
  file: string;
  pages: string;
  body: string;
};

const artifacts: Artifact[] = [
  {
    id: "universe",
    exhibit: "A",
    title: "Proprietary target universe",
    format: "Workbook",
    kind: "xlsx",
    file: "Exhibit_A_Target_Universe.xlsx",
    pages: "Forty names. Sector you chose.",
    body: "A screened universe you built, not a list handed down. Each name has a source, a first cut, and a reason it is still on the page.",
  },
  {
    id: "kills",
    exhibit: "B",
    title: "Three targets, written kill reasons",
    format: "Memorandum",
    kind: "pdf",
    file: "Exhibit_B_Screen_and_Kills.pdf",
    pages: "Ten to three. Ninety minutes each.",
    body: "The names you did not take forward, with the commercial reason written down. Kill discipline is part of the pack, not a footnote.",
  },
  {
    id: "im",
    exhibit: "C",
    title: "Investment memorandum",
    format: "Memorandum",
    kind: "pdf",
    file: "Exhibit_C_Investment_Memorandum.pdf",
    pages: "Four pages. Defended live.",
    body: "One recommendation, priced and structured, taken into a room that has already read it. The committee votes. Rejection is possible.",
  },
  {
    id: "structure",
    exhibit: "D",
    title: "Structure and entry price",
    format: "Workbook",
    kind: "xlsx",
    file: "Exhibit_D_Structure_Waterfall.xlsx",
    pages: "Sources, uses, rolled equity.",
    body: "A waterfall you designed, not copied from a precedent deck. Entry price defended against a downside case.",
  },
  {
    id: "hundred",
    exhibit: "E",
    title: "Hundred day plan",
    format: "Memorandum",
    kind: "pdf",
    file: "Exhibit_E_Hundred_Day_Plan.pdf",
    pages: "Monday morning after signing.",
    body: "What happens in the first hundred days if the vote is yes. Ownership does not end at the IC.",
  },
  {
    id: "committee",
    exhibit: "F",
    title: "Three hours in front of investors",
    format: "Live",
    kind: "live",
    file: "IC_Session · Week 11",
    pages: "Three chairs. One vote each.",
    body: "External members, currently investing. They question the work. You leave with people who have watched you think under pressure.",
  },
];

function ArtifactIcon({ kind, selected }: { kind: Artifact["kind"]; selected: boolean }) {
  const className = cn("h-4 w-4 shrink-0", selected ? "text-white" : kind === "xlsx" ? "text-emerald-700" : kind === "live" ? "text-black" : "text-red-700/80");
  if (kind === "xlsx") return <FileSpreadsheet className={className} aria-hidden />;
  if (kind === "live") return <Users className={className} aria-hidden />;
  return <FileText className={className} aria-hidden />;
}

export default function WhatYouLeaveWith() {
  const [activeId, setActiveId] = useState(artifacts[0].id);
  const active = artifacts.find((item) => item.id === activeId) ?? artifacts[0];

  return (
    <section id="outcomes" className="py-16 md:py-24 bg-gray-50 border-b border-gray-200 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Deliverables</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-3">What you leave with</h2>
          <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-10">
            A closing pack. Six exhibits. Open one.
          </p>
        </Reveal>

        <div className="border border-zinc-300 bg-white overflow-hidden shadow-sm">
          <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-zinc-100 border-b border-zinc-300">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-600">
              Participant closing pack
            </p>
            <p className="hidden sm:block text-[10px] font-mono uppercase tracking-wide text-zinc-400">
              Six exhibits · Not a certificate
            </p>
          </div>

          <div className="grid md:grid-cols-[1.05fr_0.95fr]">
            <ol className="divide-y divide-zinc-200 border-b md:border-b-0 md:border-r border-zinc-200">
              {artifacts.map((item) => {
                const selected = item.id === activeId;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      className={cn(
                        "w-full text-left px-4 py-4 flex items-start gap-3 transition-colors",
                        selected ? "bg-black text-white" : "bg-white hover:bg-zinc-50"
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-[11px] tabular-nums mt-0.5 w-8",
                          selected ? "text-white/60" : "text-zinc-400"
                        )}
                      >
                        {item.exhibit}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="flex items-center gap-2 mb-1">
                          <ArtifactIcon kind={item.kind} selected={selected} />
                          <span className="text-sm font-heading font-semibold leading-snug">
                            {item.title}
                          </span>
                        </span>
                        <span className={cn("text-[11px] font-mono", selected ? "text-white/55" : "text-zinc-400")}>
                          {item.file}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="p-6 md:p-8 bg-[#f7f8fa]" aria-live="polite">
              <div className="bg-white border border-zinc-200 p-6 min-h-[280px] flex flex-col">
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-200">
                  <span className="border border-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em]">
                    Exhibit {active.exhibit}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                    {active.format}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-black mb-2">{active.title}</h3>
                <p className="text-sm text-zinc-500 mb-5">{active.pages}</p>
                <p className="text-sm text-zinc-800 leading-relaxed flex-1">{active.body}</p>
                <p className="mt-6 pt-4 border-t border-zinc-200 font-mono text-[11px] text-zinc-400 truncate">
                  {active.file}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
