"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Folder, FileSpreadsheet, FileText, Lock } from "lucide-react";
import { VDR_FOLDER_ORDER, filesInFolder } from "@/lib/simulator/vdr-artifacts";

interface VdrTreePanelProps {
  selectedFileId: string | null;
  onSelectFile: (fileId: string) => void;
  /** Soft highlight for current workstream hint */
  highlightFile?: string;
}

export default function VdrTreePanel({ selectedFileId, onSelectFile, highlightFile }: VdrTreePanelProps) {
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(VDR_FOLDER_ORDER.map((f) => [f, true]))
  );

  return (
    <aside className="w-full md:w-[170px] lg:w-[185px] shrink-0 border-r border-zinc-200 bg-[#f7f8fa] flex flex-col text-[11px] min-h-0 md:min-h-[200px]">
      <div className="px-2 py-2 border-b border-zinc-200/80 flex items-center gap-1.5 text-zinc-600 font-semibold uppercase tracking-wide text-[10px] shrink-0">
        <Lock className="h-3 w-3" aria-hidden />
        Virtual Data Room
      </div>
      <div className="p-2 space-y-1 overflow-y-auto flex-1 min-h-0">
        {VDR_FOLDER_ORDER.map((folderName) => {
          const files = filesInFolder(folderName);
          const isOpen = open[folderName] ?? true;
          return (
            <div key={folderName}>
              <button
                type="button"
                onClick={() => setOpen((o) => ({ ...o, [folderName]: !isOpen }))}
                className="flex w-full items-center gap-0.5 text-zinc-800 font-medium py-0.5 text-left hover:bg-zinc-200/60 rounded px-0.5"
              >
                {isOpen ? (
                  <ChevronDown className="h-3 w-3 text-zinc-500 shrink-0" aria-hidden />
                ) : (
                  <ChevronRight className="h-3 w-3 text-zinc-500 shrink-0" aria-hidden />
                )}
                <Folder className="h-3.5 w-3.5 text-amber-600/90 shrink-0" aria-hidden />
                <span className="truncate">{folderName}</span>
              </button>
              {isOpen && (
                <ul className="ml-2 mt-0.5 space-y-0.5 border-l border-zinc-200 pl-2">
                  {files.map((f) => {
                    const isXlsx = f.fileName.endsWith(".xlsx") || f.fileName.endsWith(".csv");
                    const selected = f.id === selectedFileId;
                    const pulse = highlightFile && f.fileName === highlightFile;
                    return (
                      <li key={f.id}>
                        <button
                          type="button"
                          onClick={() => onSelectFile(f.id)}
                          className={`flex w-full items-center gap-1 py-0.5 rounded px-1 text-left transition-colors ${
                            selected
                              ? "bg-blue-100 text-blue-950 font-medium ring-1 ring-blue-200"
                              : pulse
                                ? "bg-amber-50 text-amber-950 ring-1 ring-amber-200/80"
                                : "text-zinc-600 hover:bg-zinc-100"
                          }`}
                        >
                          {isXlsx ? (
                            <FileSpreadsheet className="h-3 w-3 text-emerald-700 shrink-0" aria-hidden />
                          ) : (
                            <FileText className="h-3 w-3 text-red-600/80 shrink-0" aria-hidden />
                          )}
                          <span className="truncate">{f.fileName}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
