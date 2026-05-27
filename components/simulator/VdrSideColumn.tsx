"use client";

import { getVdrFileById } from "@/lib/simulator/vdr-artifacts";
import VdrTreePanel from "./VdrTreePanel";

interface VdrSideColumnProps {
  selectedFileId: string | null;
  onSelectFile: (fileId: string) => void;
  highlightFile?: string;
}

export default function VdrSideColumn({
  selectedFileId,
  onSelectFile,
  highlightFile,
}: VdrSideColumnProps) {
  const preview = getVdrFileById(selectedFileId);

  return (
    <div className="flex flex-1 min-h-0 flex-col md:flex-row min-w-0 border-b md:border-b-0 md:border-r border-zinc-200/80 bg-[#f7f8fa]">
      <VdrTreePanel
        selectedFileId={selectedFileId}
        onSelectFile={onSelectFile}
        highlightFile={highlightFile}
      />
      <div className="flex flex-1 flex-col min-w-0 border-t md:border-t-0 md:border-l border-zinc-200 bg-white">
        <div className="flex w-full items-center justify-between gap-3 px-3 py-2.5 border-b border-zinc-200 bg-zinc-50 shrink-0">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-600">Document preview</p>
            <p className="text-[11px] text-zinc-500 truncate max-w-[200px] md:max-w-none">
              {preview ? preview.fileName : "Select a file from VDR"}
            </p>
          </div>
        </div>

        <div className="overflow-y-auto p-3 md:p-4 text-[12px] text-zinc-800 leading-relaxed min-h-[180px] md:min-h-0 md:flex-1">
          {preview ? (
            <div>
              <p className="font-heading font-bold text-zinc-900 text-sm mb-2">{preview.headline}</p>
              <pre className="whitespace-pre-wrap font-sans text-[11px] text-zinc-700">{preview.body}</pre>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center text-zinc-500 text-sm px-4 py-10 min-h-[180px]">
              <p>Select a file in the folder tree to load the preview.</p>
              <p className="text-xs text-zinc-400 mt-3 max-w-sm">
                Preview opens side by side, so you can read source context while answering.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
