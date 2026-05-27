"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  ArrowRight,
  Paperclip,
  ChevronDown,
  Send,
} from "lucide-react";
import type { ScenarioDefinition } from "@/lib/simulator/types";
import type { ThreadMessage } from "@/lib/simulator";
import type { SimulatorAction, SimulatorState } from "@/lib/simulator/types";
import ExcelAttachmentFrame from "./ExcelAttachmentFrame";
import VdrSideColumn from "./VdrSideColumn";
import { playNotificationChime } from "@/lib/simulator/sound";

function vdrHighlightFileName(scenarioId: string | undefined): string | undefined {
  if (scenarioId === "ebitda-trap") return "EBITDA_Bridge_ProjectApex.xlsx";
  if (scenarioId === "debt-sizing") return "Broker_Leverage_Commentary.pdf";
  if (scenarioId === "cdd-triage") return "customer_accounts.csv";
  return undefined;
}

interface ScenarioSimulationPanelProps {
  state: SimulatorState;
  dispatch: React.Dispatch<SimulatorAction>;
  currentScenario: ScenarioDefinition;
  messages: ThreadMessage[];
  selectedMailId: string;
  onSelectMail: (id: string) => void;
  vdrSelectedId: string | null;
  onSelectVdrFile: (id: string) => void;
  vdrWidthPercent: number;
  mailboxWidthPx: number;
  onVdrWidthChange: (next: number) => void;
  onMailboxWidthChange: (next: number) => void;
}

export default function ScenarioSimulationPanel({
  state,
  dispatch,
  currentScenario,
  messages,
  selectedMailId,
  onSelectMail,
  vdrSelectedId,
  onSelectVdrFile,
  vdrWidthPercent,
  mailboxWidthPx,
  onVdrWidthChange,
  onMailboxWidthChange,
}: ScenarioSimulationPanelProps) {
  const selected = messages.find((m) => m.id === selectedMailId) ?? messages[messages.length - 1];
  const lastCoach = useRef<string | null>(null);

  const selectedAnswer = state.answers[state.scenarioIndex];
  const chosenOption =
    selectedAnswer && currentScenario.options.find((o) => o.id === selectedAnswer.optionId);

  const flashHigh =
    state.scenarioDeskPhase === "coach_mail" &&
    chosenOption &&
    !chosenOption.isCorrect &&
    chosenOption.wrongFeedback?.severity === "high";

  useEffect(() => {
    if (state.scenarioDeskPhase !== "coach_mail") return;
    const key = `coach-${state.scenarioIndex}`;
    if (lastCoach.current === key) return;
    lastCoach.current = key;
    playNotificationChime();
  }, [state.scenarioDeskPhase, state.scenarioIndex]);

  const unreadCount = messages.filter((m) => m.unread).length;
  const stageLabel =
    state.scenarioDeskPhase === "intro_mail"
      ? "Brief"
      : state.scenarioDeskPhase === "desk_reply"
        ? "Decision"
        : "Feedback";

  return (
    <motion.div
      key={`scenario-${currentScenario.id}`}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className={`flex flex-col lg:flex-row min-h-[min(100vh-9rem,720px)] h-full bg-[#f3f4f6] transition-shadow duration-300 ${
        flashHigh && selected?.id.startsWith("coach-")
          ? "ring-2 ring-red-500 ring-inset shadow-[inset_0_0_32px_rgba(220,38,38,0.1)]"
          : ""
      }`}
    >
      <div
        className="w-full min-h-0 shrink-0 border-b lg:border-b-0 lg:border-r border-zinc-200/80"
        style={{ width: `clamp(320px, ${vdrWidthPercent}%, 58%)`, maxWidth: "100%" }}
      >
        <VdrSideColumn
          selectedFileId={vdrSelectedId}
          onSelectFile={onSelectVdrFile}
          highlightFile={vdrHighlightFileName(currentScenario.id)}
        />
      </div>

      <div className="flex flex-1 flex-col min-w-0 min-h-0 min-h-[50vh] lg:min-h-0 lg:flex-1">
        <div className="shrink-0 border-b border-zinc-300 bg-[#f5f6f8] px-2 py-1.5 flex flex-wrap items-center gap-1 text-[10px] text-zinc-700">
          <span className="px-2 py-0.5 rounded-sm bg-white border border-zinc-200 shadow-sm font-semibold">File</span>
          <span className="px-2 py-0.5 rounded-sm hover:bg-zinc-200/80">Home</span>
          <span className="px-2 py-0.5 rounded-sm hover:bg-zinc-200/80">Send / Receive</span>
          <span className="ml-2 rounded bg-black text-white px-2 py-0.5 uppercase tracking-wide">{stageLabel}</span>
          <div className="hidden xl:flex items-center gap-2 ml-3 text-[10px] text-zinc-600">
            <span className="uppercase tracking-wide">VDR</span>
            <input
              type="range"
              min={28}
              max={55}
              value={vdrWidthPercent}
              onChange={(e) => onVdrWidthChange(Number(e.target.value))}
              className="w-20 accent-black"
              aria-label="Adjust VDR width"
            />
          </div>
          <div className="hidden xl:flex items-center gap-2 text-[10px] text-zinc-600">
            <span className="uppercase tracking-wide">Mailbox</span>
            <input
              type="range"
              min={180}
              max={360}
              step={10}
              value={mailboxWidthPx}
              onChange={(e) => onMailboxWidthChange(Number(e.target.value))}
              className="w-20 accent-black"
              aria-label="Adjust mailbox list width"
            />
          </div>
          <span className="ml-auto flex items-center gap-1 text-zinc-500">
            <Paperclip className="h-3 w-3" aria-hidden />
            Inbox · {unreadCount} unread
          </span>
        </div>

        <div className="flex flex-1 min-h-0 flex-col md:flex-row md:min-h-[min(70vh,720px)]">
          <aside
            className="w-full shrink-0 border-b md:border-b-0 md:border-r border-zinc-200 bg-white flex flex-col min-h-[220px] md:min-h-0 md:max-h-none"
            style={{ width: `${mailboxWidthPx}px`, maxWidth: "100%" }}
          >
            <div className="px-2 py-1.5 border-b border-zinc-100 text-[10px] text-zinc-500 flex items-center gap-1 shrink-0">
              <span className="font-semibold text-zinc-800">Today</span>
              <ChevronDown className="h-3 w-3" aria-hidden />
            </div>
            <div className="flex-1 overflow-y-auto">
              {messages.map((msg) => (
                <button
                  key={msg.id}
                  type="button"
                  onClick={() => onSelectMail(msg.id)}
                  className={`w-full text-left px-2 py-2 border-b border-zinc-100 flex gap-2 transition-colors ${
                    selectedMailId === msg.id ? "bg-blue-50/90" : "hover:bg-zinc-50"
                  }`}
                >
                  <Mail className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" aria-hidden />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-zinc-900 text-[11px] truncate">{msg.fromName}</span>
                      {msg.unread && <span className="shrink-0 h-2 w-2 rounded-full bg-blue-600" title="Unread" />}
                    </div>
                    <div className="text-[10px] text-zinc-600 line-clamp-2 leading-snug">{msg.subject}</div>
                    <div className="text-[9px] text-zinc-400 mt-0.5">{msg.time}</div>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          <main className="flex-1 min-w-0 flex flex-col bg-white min-h-0 md:min-h-[320px]">
            {selected && (
              <>
                <div className="shrink-0 border-b border-zinc-200 px-3 py-2 text-zinc-600 bg-zinc-50">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">Workstream {state.scenarioIndex + 1}</p>
                </div>
                <div className="flex-1 min-h-0 overflow-auto p-4 md:p-5 text-[13px] leading-relaxed text-zinc-800">
                  <div className="space-y-4">
                  <div className="space-y-1 text-[11px] text-zinc-600 border-b border-zinc-100 pb-3 shrink-0">
                    <p>
                      <span className="text-zinc-500">From:</span>{" "}
                      <span className="font-medium text-zinc-900">{selected.fromName}</span>{" "}
                      <span className="text-zinc-500">&lt;{selected.fromEmail}&gt;</span>
                    </p>
                    <p>
                      <span className="text-zinc-500">To:</span> You · Deal Team (London)
                    </p>
                    <p>
                      <span className="text-zinc-500">Subject:</span>{" "}
                      <span className="font-semibold text-zinc-900">{selected.subject}</span>
                    </p>
                  </div>
                  <p className="whitespace-pre-wrap">{selected.body}</p>

                  {state.scenarioDeskPhase === "intro_mail" && selected.id === `intro-${state.scenarioIndex}` && (
                    <div className="pt-4 border-t border-zinc-100">
                      <Button
                        type="button"
                        className="bg-[#217346] hover:bg-[#1a5c38] text-white font-semibold text-sm"
                        onClick={() => dispatch({ type: "ACK_SCENARIO_INTRO" })}
                      >
                        I&apos;ve reviewed the VDR context - open reply composer
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}

                  {state.scenarioDeskPhase === "coach_mail" && selected.id === `coach-${state.scenarioIndex}` && (
                    <div className="pt-4 border-t border-zinc-100">
                      <Button
                        type="button"
                        className="bg-[#263238] text-white hover:bg-black font-semibold"
                        onClick={() => dispatch({ type: "CONTINUE_AFTER_FEEDBACK" })}
                      >
                        {state.scenarioIndex >= 2 ? "Open post-mortem summary" : "Continue to next workstream"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}
                    {state.scenarioDeskPhase === "desk_reply" && (
                      <section className="max-w-4xl mx-auto mt-8 border-2 border-zinc-300 bg-zinc-50 rounded-xl p-5 md:p-7 space-y-4 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600 text-center">
                          Decision box
                        </p>
                        <div className="flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-zinc-600">
                          <Send className="h-3.5 w-3.5" aria-hidden />
                          Reply to Swapnil
                        </div>
                    <p className="text-[11px] text-zinc-700 leading-snug border-l-2 border-zinc-300 pl-2">
                      <span className="font-semibold text-zinc-900">Desk task:</span> {currentScenario.deskTask}
                    </p>
                    {currentScenario.id === "debt-sizing" && (
                      <div className="rounded-md border border-zinc-300 bg-white p-2 font-mono text-[10px] text-zinc-800">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded bg-zinc-50 border border-zinc-200 p-2">
                            <div className="text-zinc-500 text-[9px]">Senior cap (banks)</div>
                            <div className="text-base font-semibold tabular-nums">3.5x</div>
                          </div>
                          <div className="rounded bg-amber-50/80 border border-amber-200 p-2">
                            <div className="text-amber-900/80 text-[9px]">Broker pitch</div>
                            <div className="text-base font-semibold tabular-nums text-amber-950">5.5x</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {currentScenario.attachment && (
                      <div className="max-w-md">
                        <ExcelAttachmentFrame attachment={currentScenario.attachment} />
                      </div>
                    )}
                    <div>
                      <label className="text-[10px] text-zinc-500 uppercase tracking-wide">Your message (tap a line to send)</label>
                      <div className="mt-1 rounded border border-zinc-300 bg-white px-2 py-2 text-[11px] text-zinc-500 min-h-[52px] font-mono">
                        Select one of the reply drafts below. It will be sent as your email.
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {currentScenario.options.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => dispatch({ type: "SELECT_OPTION", optionId: opt.id })}
                          className="text-left rounded-md border border-zinc-300 bg-white hover:border-blue-400 hover:bg-blue-50/40 p-3 transition-all text-[12px] text-zinc-900"
                        >
                          <span className="text-[10px] font-mono text-zinc-500">{opt.letter}.</span>{" "}
                          <span className="italic text-zinc-800">&ldquo;{opt.replyDraft}&rdquo;</span>
                        </button>
                      ))}
                    </div>
                      </section>
                    )}
                  </div>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </motion.div>
  );
}
