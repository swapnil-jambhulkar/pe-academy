"use client";

import type { ScenarioDefinition } from "@/lib/simulator/types";

interface ExcelAttachmentFrameProps {
  attachment: NonNullable<ScenarioDefinition["attachment"]>;
}

/** Institutional Excel-adjacent grid (not a spreadsheet engine; visual fidelity only). */
export default function ExcelAttachmentFrame({ attachment }: ExcelAttachmentFrameProps) {
  return (
    <div className="rounded-md border border-[#217346] shadow-[0_1px_3px_rgba(0,0,0,0.12)] overflow-hidden bg-white text-[11px] leading-tight font-sans">
      {/* Excel green title bar */}
      <div className="flex items-center gap-2 px-2 py-1.5 bg-[#217346] text-white">
        <span className="font-semibold tracking-tight truncate">{attachment.title}</span>
        <span className="ml-auto text-[10px] opacity-90 font-normal">Protected View - Enable Editing</span>
      </div>
      {/* Column headers */}
      <div className="grid grid-cols-[minmax(0,1fr)_88px] bg-[#f3f3f3] border-b border-[#d4d4d4] text-[10px] text-zinc-600 font-mono">
        <div className="px-2 py-1 border-r border-[#d4d4d4]">A</div>
        <div className="px-2 py-1 text-center">B (£)</div>
      </div>
      <div className="divide-y divide-[#e0e0e0]">
        {attachment.rows.map((row) => (
          <div
            key={row.label}
            className={`grid grid-cols-[minmax(0,1fr)_88px] min-h-[26px] items-stretch ${
              row.highlight ? "bg-[#fff8e1] ring-1 ring-inset ring-amber-200/80" : "bg-white"
            }`}
          >
            <div className="px-2 py-1.5 border-r border-[#f0f0f0] text-zinc-800 flex items-center">{row.label}</div>
            <div className="px-2 py-1.5 text-right font-mono tabular-nums text-zinc-900 font-medium flex items-center justify-end">
              {row.value}
            </div>
          </div>
        ))}
      </div>
      <div className="px-2 py-1 bg-[#f3f3f3] border-t border-[#d4d4d4] text-[9px] text-zinc-500 font-mono">
        Sheet: Management_Adjustments · File origin: VDR (external)
      </div>
    </div>
  );
}
