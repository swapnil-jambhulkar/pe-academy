"use client";

import { useEffect, useState, useCallback } from "react";
import { Wifi, Battery, RotateCcw, Shield } from "lucide-react";

function formatMmSs(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

interface WorkstationFrameProps {
  children: React.ReactNode;
  activeWindowTitle: string;
  onReset: () => void;
  timerActive: boolean;
  statusLabel?: string;
}

export default function WorkstationFrame({
  children,
  activeWindowTitle,
  onReset,
  timerActive,
  statusLabel,
}: WorkstationFrameProps) {
  const [secondsLeft, setSecondsLeft] = useState(47 * 60 + 12);

  useEffect(() => {
    document.body.dataset.simulatorImmersive = "true";
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      delete document.body.dataset.simulatorImmersive;
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  const tick = useCallback(() => {
    setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
  }, []);

  useEffect(() => {
    if (!timerActive) return;
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [timerActive, tick]);

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col font-sans text-zinc-900"
      role="application"
      aria-label="Day one analyst workstation simulation"
    >
      <div className="absolute inset-0 bg-[#e9edf1]" aria-hidden />

      <header className="relative z-10 flex h-9 shrink-0 items-center justify-between px-3 text-[11px] text-zinc-700 bg-zinc-100/95 border-b border-zinc-300">
        <div className="flex items-center gap-2 min-w-0">
          <Shield className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden />
          <span className="truncate font-medium tracking-tight">Norland Capital · Secure workstation</span>
        </div>
        <div className="flex items-center gap-3 shrink-0 tabular-nums">
          {timerActive && (
            <span className="hidden sm:inline text-amber-700 font-mono text-[10px] uppercase tracking-wider">
              Partner sync in <span className="text-amber-800 font-semibold">{formatMmSs(secondsLeft)}</span>
            </span>
          )}
          <span className="flex items-center gap-1.5 text-zinc-500">
            <Wifi className="h-3 w-3" aria-hidden />
            <Battery className="h-3 w-3" aria-hidden />
          </span>
          <span className="text-zinc-500 font-mono hidden md:inline">Wed 14 May · 08:42</span>
        </div>
      </header>

      <div className="relative z-10 mx-2 mt-2 rounded-t-lg border border-zinc-300 border-b-0 bg-zinc-200 shadow-sm">
        <div className="flex h-9 items-center gap-2 px-3 border-b border-zinc-300">
          <div className="text-[10px] uppercase tracking-[0.14em] text-zinc-500 shrink-0">
            Analyst assessment
          </div>
          <div className="flex-1 min-w-0 text-center px-2">
            <p className="text-[11px] text-zinc-700 font-medium truncate">{activeWindowTitle}</p>
            {statusLabel ? <p className="text-[10px] text-zinc-500 truncate">{statusLabel}</p> : null}
          </div>
          <button
            type="button"
            onClick={onReset}
            className="shrink-0 flex items-center gap-1 rounded px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-600 hover:text-black hover:bg-zinc-300 transition-colors"
          >
            <RotateCcw className="h-3 w-3" />
            Exit sim
          </button>
        </div>
      </div>

      <div className="relative z-10 flex-1 min-h-0 mx-2 mb-0 rounded-b-lg border border-t-0 border-zinc-300 bg-[#f3f4f6] overflow-hidden flex flex-col">
        <div className="flex-1 min-h-0 overflow-auto bg-[#f3f4f6]">{children}</div>
      </div>
    </div>
  );
}
