"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight, FileSpreadsheet, FileText, Folder, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { programmeWeeks } from "@/data/programme-weeks";

type Workstream = {
  id: string;
  folder: string;
  weeks: number[];
};

const workstreams: Workstream[] = [
  { id: "thesis", folder: "01_Thesis", weeks: [1, 2, 3] },
  { id: "diligence", folder: "02_Diligence", weeks: [4, 5, 6] },
  { id: "structure", folder: "03_Structure", weeks: [7, 8, 9] },
  { id: "ic", folder: "04_IC_and_Completion", weeks: [10, 11, 12] },
];

const files: Record<number, { name: string; kind: "pdf" | "xlsx" }> = {
  1: { name: "01_Investment_Thesis.pdf", kind: "pdf" },
  2: { name: "02_Target_Universe.xlsx", kind: "xlsx" },
  3: { name: "03_Screen_and_Kill_Reasons.pdf", kind: "pdf" },
  4: { name: "04_Pipeline_Review.xlsx", kind: "xlsx" },
  5: { name: "05_Owner_Call_Plan.pdf", kind: "pdf" },
  6: { name: "06_Diligence_Request_List.pdf", kind: "pdf" },
  7: { name: "07_Debt_Capacity.xlsx", kind: "xlsx" },
  8: { name: "08_Structure_and_Entry_Price.xlsx", kind: "xlsx" },
  9: { name: "09_IM_Draft_v1.pdf", kind: "pdf" },
  10: { name: "10_IM_Final.pdf", kind: "pdf" },
  11: { name: "11_IC_Pack.pdf", kind: "pdf" },
  12: { name: "12_Hundred_Day_Plan.pdf", kind: "pdf" },
};

export default function CurriculumTimeline() {
  const [week, setWeek] = useState(1);
  const [open, setOpen] = useState<Record<string, boolean>>({
    thesis: true,
    diligence: true,
    structure: true,
    ic: true,
  });

  const selected = programmeWeeks.find((row) => row.week === week) ?? programmeWeeks[0];
  const file = files[selected.week];
  const stream = workstreams.find((item) => item.weeks.includes(selected.week)) ?? workstreams[0];

  const breadcrumb = useMemo(
    () => `PGP_Cohort / ${stream.folder} / ${file.name}`,
    [stream.folder, file.name]
  );

  return (
    <div className="border border-zinc-300 bg-white overflow-hidden shadow-sm">
      <div className="flex items-center justify-between gap-3 px-3 py-2 bg-zinc-100 border-b border-zinc-300">
        <div className="flex items-center gap-2 min-w-0">
          <Lock className="h-3.5 w-3.5 text-zinc-500 shrink-0" aria-hidden />
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-600 truncate">
            Virtual data room · PGP twelve week pack
          </p>
        </div>
        <p className="hidden sm:block text-[10px] font-mono uppercase tracking-wide text-zinc-400">
          Confidential
        </p>
      </div>

      <div className="grid md:grid-cols-[240px_1fr] min-h-[420px]">
        <aside className="border-b md:border-b-0 md:border-r border-zinc-200 bg-[#f7f8fa] text-[12px]">
          <p className="px-3 py-2 border-b border-zinc-200 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
            Index
          </p>
          <div className="p-2 space-y-1">
            {workstreams.map((item) => {
              const isOpen = open[item.id];
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    onClick={() => setOpen((current) => ({ ...current, [item.id]: !current[item.id] }))}
                    className="flex w-full items-center gap-1 px-1 py-1 text-left text-zinc-800 font-medium hover:bg-zinc-200/70 rounded"
                  >
                    {isOpen ? (
                      <ChevronDown className="h-3 w-3 text-zinc-500 shrink-0" aria-hidden />
                    ) : (
                      <ChevronRight className="h-3 w-3 text-zinc-500 shrink-0" aria-hidden />
                    )}
                    <Folder className="h-3.5 w-3.5 text-amber-700 shrink-0" aria-hidden />
                    <span className="truncate">{item.folder}</span>
                  </button>
                  {isOpen ? (
                    <ul className="ml-3 mt-0.5 mb-1 space-y-0.5 border-l border-zinc-200 pl-2">
                      {item.weeks.map((weekNumber) => {
                        const entry = files[weekNumber];
                        const selectedFile = weekNumber === week;
                        const isSheet = entry.kind === "xlsx";
                        return (
                          <li key={weekNumber}>
                            <button
                              type="button"
                              onClick={() => setWeek(weekNumber)}
                              className={cn(
                                "flex w-full items-center gap-1.5 rounded px-1.5 py-1 text-left transition-colors",
                                selectedFile
                                  ? "bg-black text-white"
                                  : "text-zinc-600 hover:bg-zinc-200/80"
                              )}
                            >
                              {isSheet ? (
                                <FileSpreadsheet
                                  className={cn("h-3 w-3 shrink-0", selectedFile ? "text-white" : "text-emerald-700")}
                                  aria-hidden
                                />
                              ) : (
                                <FileText
                                  className={cn("h-3 w-3 shrink-0", selectedFile ? "text-white" : "text-red-700/80")}
                                  aria-hidden
                                />
                              )}
                              <span className="truncate">{entry.name}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </div>
              );
            })}
          </div>
        </aside>

        <div className="bg-white flex flex-col min-h-[280px]">
          <div className="px-4 py-2 border-b border-zinc-200 bg-zinc-50">
            <p className="font-mono text-[11px] text-zinc-500 truncate">{breadcrumb}</p>
          </div>
          <div className="p-5 md:p-7 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="border border-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em]">
                Week {selected.week}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                {stream.folder.replace(/_/g, " ")}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-black mb-2">
              {selected.session}
            </h3>
            <p className="text-sm text-zinc-600 mb-8">
              Open the file. Session first, written deliverable due before the next one.
            </p>
            <dl className="grid sm:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
              <div className="bg-white p-4">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400 mb-1">
                  Document
                </dt>
                <dd className="text-sm font-medium text-black break-all">{file.name}</dd>
              </div>
              <div className="bg-white p-4">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400 mb-1">
                  Type
                </dt>
                <dd className="text-sm font-medium text-black">
                  {file.kind === "xlsx" ? "Workbook" : "Memorandum"}
                </dd>
              </div>
              <div className="bg-white p-4 sm:col-span-2">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400 mb-1">
                  Deliverable due
                </dt>
                <dd className="text-sm text-zinc-800 leading-relaxed">{selected.deliverable}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
