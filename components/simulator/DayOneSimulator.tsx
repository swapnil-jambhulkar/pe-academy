"use client";

import { useReducer, useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Inbox,
  ArrowRight,
  Paperclip,
  ChevronDown,
} from "lucide-react";
import {
  SCENARIOS,
  initialSimulatorState,
  simulatorReducer,
  getPerformanceRating,
  postMortemHardTruth,
  CONVERSION_WALL_COPY,
  POSITIVE_CLOSE_COPY,
  playNotificationChime,
  buildMailThread,
} from "@/lib/simulator";
import WorkstationFrame from "./WorkstationFrame";
import ScenarioSimulationPanel from "./ScenarioSimulationPanel";
import VdrSideColumn from "./VdrSideColumn";
import SimulatorAccessGate from "./SimulatorAccessGate";

export default function DayOneSimulator() {
  const [state, dispatch] = useReducer(simulatorReducer, initialSimulatorState);
  const [mailSelected, setMailSelected] = useState("briefing");
  const [vdrSelectedId, setVdrSelectedId] = useState<string | null>(null);
  const [postMortemFormCompleted, setPostMortemFormCompleted] = useState(false);
  const [vdrWidthPercent, setVdrWidthPercent] = useState(42);
  const [mailboxWidthPx, setMailboxWidthPx] = useState(240);

  const thread = useMemo(() => buildMailThread(state), [state]);
  const selectedMail = thread.find((m) => m.id === mailSelected) ?? thread[0];

  const currentScenario = state.phase === "scenario" ? SCENARIOS[state.scenarioIndex] : null;
  const rating = useMemo(() => getPerformanceRating(state.answers), [state.answers]);
  const stageLabel = useMemo(() => {
    if (state.phase === "desktop_inbox") return "Briefing inbox";
    if (state.phase === "desktop_email") return "Read partner email";
    if (state.phase === "scenario") {
      if (state.scenarioDeskPhase === "intro_mail") return `Workstream ${state.scenarioIndex + 1} · Brief`;
      if (state.scenarioDeskPhase === "desk_reply") return `Workstream ${state.scenarioIndex + 1} · Decision`;
      return `Workstream ${state.scenarioIndex + 1} · Feedback`;
    }
    if (state.phase === "post_mortem") return "Final assessment";
    return "";
  }, [state.phase, state.scenarioDeskPhase, state.scenarioIndex]);
  const showMidpointNudge = state.phase === "scenario" && state.scenarioIndex === 1 && state.scenarioDeskPhase === "intro_mail";
  const ctaCopy = useMemo(() => {
    if (rating.scorePercent >= 80) {
      return {
        title: "You are operating at a strong analyst baseline.",
        body: "You are a fit for the PGP interview track. Submit your profile for partner review.",
        primaryHref: "/contact",
        primaryLabel: "Apply for PGP interview",
        secondaryHref: "/cohort#admissions",
        secondaryLabel: "Use GCPE as technical prep",
      };
    }
    if (rating.scorePercent >= 55) {
      return {
        title: "You are close to analyst-ready, with gaps to close.",
        body: "GCPE is the fastest path to tighten execution quality before PGP evaluation.",
        primaryHref: "/cohort#admissions",
        primaryLabel: "Apply for GCPE",
        secondaryHref: "/contact",
        secondaryLabel: "Discuss PGP suitability",
      };
    }
    return {
      title: "You need stronger execution reps before interview track.",
      body: "Start with GCPE fundamentals, then return to this assessment for PGP progression.",
      primaryHref: "/cohort#admissions",
      primaryLabel: "Start with GCPE",
      secondaryHref: "/simulator",
      secondaryLabel: "Retake simulator later",
    };
  }, [rating.scorePercent]);

  const immersive = state.phase !== "welcome";

  const activeWindowTitle = useMemo(() => {
    if (state.phase === "desktop_inbox" || state.phase === "desktop_email" || state.phase === "scenario") {
      return "Outlook - sjambhulkar@norlandcapital.co.uk";
    }
    if (state.phase === "post_mortem") {
      return "Adobe Acrobat - Deal_Execution_PostMortem_ProjectApex.pdf";
    }
    return "";
  }, [state.phase]);

  const timerActive =
    state.phase === "desktop_inbox" ||
    state.phase === "desktop_email" ||
    state.phase === "scenario";

  const handleStart = () => {
    playNotificationChime();
    dispatch({ type: "START_SIMULATION" });
    setMailSelected("briefing");
    setVdrSelectedId(null);
  };

  useEffect(() => {
    if (state.phase === "welcome") {
      setMailSelected("briefing");
      setVdrSelectedId(null);
    }
  }, [state.phase]);

  useEffect(() => {
    if (state.phase === "scenario" && state.scenarioDeskPhase === "intro_mail") {
      setMailSelected(`intro-${state.scenarioIndex}`);
    }
  }, [state.phase, state.scenarioIndex, state.scenarioDeskPhase]);

  useEffect(() => {
    if (state.phase === "scenario" && state.scenarioDeskPhase === "coach_mail") {
      setMailSelected(`coach-${state.scenarioIndex}`);
    }
  }, [state.phase, state.scenarioIndex, state.scenarioDeskPhase]);

  const unreadCount = thread.filter((m) => m.unread).length;

  const core = (
    <AnimatePresence mode="wait">
      {state.phase === "welcome" && (
        <motion.div
          key="welcome"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="w-full max-w-xl mx-auto rounded-xl border border-zinc-200 bg-white p-8 shadow-sm"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
            Norland Academy · Day One Analyst Simulator
          </p>
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-black tracking-tight">
            Live deal judgment, not textbook drills
          </h1>
          <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
            This is a longer desk simulation: you will move through the VDR, read Swapnil&apos;s thread like a real inbox,
            and send email replies (structured drafts) after each workstream. Wrong answers get a coaching note back;
            right answers get a crisp nod and the next assignment.
          </p>
          <p className="text-sm text-zinc-600 mt-3 leading-relaxed">
            The Career Matrix tests whether you deserve the interview. This tests whether you can survive{" "}
            <span className="font-semibold text-black">day one</span> on execution.
          </p>
          <Button
            type="button"
            size="lg"
            className="mt-8 bg-black text-white hover:bg-zinc-800 font-semibold"
            onClick={handleStart}
          >
            Start Simulation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      )}

      {(state.phase === "desktop_inbox" || state.phase === "desktop_email") && (
        <motion.div
          key="desktop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col xl:flex-row min-h-0 flex-1 h-full bg-[#f3f4f6]"
        >
          <div
            className="flex flex-col min-h-0 xl:shrink-0 border-b xl:border-b-0 xl:border-r border-zinc-200/80"
            style={{ width: `clamp(320px, ${vdrWidthPercent}%, 58%)`, maxWidth: "100%" }}
          >
            <VdrSideColumn
              selectedFileId={vdrSelectedId}
              onSelectFile={setVdrSelectedId}
              highlightFile="EBITDA_Bridge_ProjectApex.xlsx"
            />
          </div>

          <div className="flex flex-1 flex-col min-w-0 min-h-[52vh] xl:min-h-0">
            <div className="shrink-0 border-b border-zinc-300 bg-[#f5f6f8] px-2 py-1.5 flex flex-wrap items-center gap-1 text-[10px] text-zinc-700">
              <span className="px-2 py-0.5 rounded-sm bg-white border border-zinc-200 shadow-sm font-semibold">File</span>
              <span className="px-2 py-0.5 rounded-sm hover:bg-zinc-200/80">Home</span>
              <span className="px-2 py-0.5 rounded-sm hover:bg-zinc-200/80">Send / Receive</span>
              <div className="hidden xl:flex items-center gap-2 ml-3 text-[10px] text-zinc-600">
                <span className="uppercase tracking-wide">VDR</span>
                <input
                  type="range"
                  min={28}
                  max={55}
                  value={vdrWidthPercent}
                  onChange={(e) => setVdrWidthPercent(Number(e.target.value))}
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
                  onChange={(e) => setMailboxWidthPx(Number(e.target.value))}
                  className="w-20 accent-black"
                  aria-label="Adjust mailbox list width"
                />
              </div>
              <span className="ml-auto flex items-center gap-1 text-zinc-500">
                <Paperclip className="h-3 w-3" aria-hidden />
                Inbox · {unreadCount} unread
              </span>
            </div>

            <div className="flex flex-1 min-h-0 flex-col md:flex-row md:min-h-[min(70vh,640px)]">
              <div
                className="w-full shrink-0 border-b md:border-b-0 md:border-r border-zinc-200 bg-white flex flex-col min-h-[220px] md:min-h-0"
                style={{ width: `${mailboxWidthPx}px`, maxWidth: "100%" }}
              >
                <div className="px-2 py-1.5 border-b border-zinc-100 text-[10px] text-zinc-500 flex items-center gap-1 shrink-0">
                  <span className="font-semibold text-zinc-800">Today</span>
                  <ChevronDown className="h-3 w-3" aria-hidden />
                </div>
                <div className="flex-1 overflow-y-auto">
                  {thread.map((msg) => (
                    <button
                      key={msg.id}
                      type="button"
                      onClick={() => {
                        setMailSelected(msg.id);
                        if (msg.id === "briefing" && state.phase === "desktop_inbox") {
                          dispatch({ type: "OPEN_EMAIL" });
                        }
                      }}
                      className={`w-full text-left px-2 py-2 border-b border-zinc-100 flex gap-2 transition-colors ${
                        mailSelected === msg.id ? "bg-blue-50/90" : "hover:bg-zinc-50"
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
              </div>

              <main className="flex-1 min-w-0 flex flex-col bg-white overflow-hidden min-h-[280px] md:min-h-0 md:flex-1">
                {state.phase === "desktop_inbox" ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-zinc-500 text-sm p-8 text-center">
                    <Inbox className="h-10 w-10 text-zinc-300 mb-3" aria-hidden />
                    <p>Select the briefing from Swapnil to open it.</p>
                    <p className="text-xs text-zinc-400 mt-2 max-w-xs">
                      Explore the VDR on the left while you are here. The teaser and financials contain long-form notes.
                    </p>
                  </div>
                ) : (
                  selectedMail && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col flex-1 min-h-0">
                      <div className="shrink-0 border-b border-zinc-200 px-4 py-2 bg-zinc-50 text-zinc-600">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">Briefing</p>
                      </div>
                      <div className="p-4 md:p-6 space-y-4 text-[13px] leading-relaxed text-zinc-800 flex-1 overflow-auto pb-24">
                        <div className="space-y-1 text-[11px] text-zinc-600 border-b border-zinc-100 pb-3">
                          <p>
                            <span className="text-zinc-500">From:</span>{" "}
                            <span className="font-medium text-zinc-900">{selectedMail.fromName}</span>{" "}
                            <span className="text-zinc-500">&lt;{selectedMail.fromEmail}&gt;</span>
                          </p>
                          <p>
                            <span className="text-zinc-500">To:</span> You · Deal Team (London)
                          </p>
                          <p>
                            <span className="text-zinc-500">Cc:</span> ops-deal-room@norlandcapital.co.uk
                          </p>
                          <p>
                            <span className="text-zinc-500">Subject:</span>{" "}
                            <span className="font-semibold text-zinc-900">{selectedMail.subject}</span>
                          </p>
                          <div className="flex items-center gap-2 pt-2 text-[10px] text-amber-800 bg-amber-50 border border-amber-200/80 rounded px-2 py-1.5 w-fit">
                            <Paperclip className="h-3 w-3 shrink-0" aria-hidden />
                            <span>
                              Attachments indexed in VDR: <strong>02_Financials</strong> / <strong>05_Commercial</strong>
                            </span>
                          </div>
                        </div>
                        <p className="whitespace-pre-wrap">{selectedMail.body}</p>
                        <div className="rounded border border-zinc-200 bg-zinc-50 px-3 py-2 text-[11px] text-zinc-600">
                          <strong className="text-zinc-800">Disclaimer:</strong> This message may contain confidential
                          information intended solely for the addressee. If you received this in error, notify IT and delete.
                        </div>
                        <div className="pt-2 sticky bottom-0 bg-white">
                          <Button
                            type="button"
                            className="bg-[#217346] hover:bg-[#1a5c38] text-white font-semibold text-sm shadow-sm"
                            onClick={() => dispatch({ type: "BEGIN_SCENARIOS" })}
                          >
                            <Paperclip className="mr-2 h-4 w-4" />
                            Open attachments & begin desk review
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </main>
            </div>
          </div>
        </motion.div>
      )}

      {state.phase === "scenario" && currentScenario && (
        <>
          {showMidpointNudge ? (
            <div className="absolute top-14 left-1/2 -translate-x-1/2 z-20 rounded border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs text-blue-900">
              Halfway checkpoint. Complete all workstreams to unlock your full analyst score.
            </div>
          ) : null}
          <ScenarioSimulationPanel
            key={`sc-${state.scenarioIndex}-${state.scenarioDeskPhase}`}
            state={state}
            dispatch={dispatch}
            currentScenario={currentScenario}
            messages={thread}
            selectedMailId={mailSelected}
            onSelectMail={setMailSelected}
            vdrSelectedId={vdrSelectedId}
            onSelectVdrFile={setVdrSelectedId}
            vdrWidthPercent={vdrWidthPercent}
            mailboxWidthPx={mailboxWidthPx}
            onVdrWidthChange={setVdrWidthPercent}
            onMailboxWidthChange={setMailboxWidthPx}
          />
        </>
      )}

      {state.phase === "post_mortem" && (
        <motion.div
          key="post-mortem"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-[min(100vh-12rem,720px)] h-full flex items-start justify-center p-4 md:p-8 bg-[#d4d0c7] overflow-auto"
        >
          {!postMortemFormCompleted ? (
            <div className="w-full max-w-xl">
              <SimulatorAccessGate
                onComplete={() => setPostMortemFormCompleted(true)}
                title="Unlock your post-mortem report"
                description="Submit your details and CV to view the full deal execution report and recommended programme path."
                submitLabel="View post-mortem report"
              />
            </div>
          ) : (
            <div className="w-full max-w-2xl bg-[#fefefe] shadow-[0_12px_40px_rgba(0,0,0,0.18)] border border-zinc-300/80 rounded-sm overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-800" aria-hidden />
              <div className="px-8 pt-8 pb-2 border-b border-zinc-200">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">Norland Capital · Deal execution</p>
                <h2 className="text-2xl font-heading font-bold text-zinc-900 mt-2">Post-Mortem Report</h2>
                <p className="text-sm text-zinc-600 mt-1">Project Apex - preliminary desk review</p>
              </div>
              <div className="px-8 py-8 space-y-6 text-sm text-zinc-800 leading-relaxed">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-100 pb-6">
                  <div>
                    <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-wide">Performance rating</p>
                    <p className="text-2xl font-heading font-bold text-zinc-900 mt-1">{rating.title}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-wide">Live deal score</p>
                    <p className="text-3xl font-mono font-bold text-zinc-900 tabular-nums">{rating.scorePercent}%</p>
                    <p className="text-xs text-zinc-500">
                      {rating.correctCount}/{SCENARIOS.length} workstreams
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-heading font-bold text-zinc-900 uppercase tracking-widest">The hard truth</h3>
                  <p className="mt-2">{postMortemHardTruth(rating)}</p>
                </div>

                {rating.correctCount === SCENARIOS.length && (
                  <p className="text-zinc-700 border-l-2 border-emerald-600 pl-4">{POSITIVE_CLOSE_COPY}</p>
                )}

                <div className="rounded-sm bg-zinc-50 border border-zinc-200 p-5">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 mb-2">Recommended path</p>
                  <h3 className="font-heading text-2xl text-zinc-900 mb-2">{ctaCopy.title}</h3>
                  <p className="text-zinc-800 leading-relaxed">{ctaCopy.body}</p>
                  <div className="mt-5">
                    <Button asChild size="lg" className="w-full sm:w-auto bg-black text-white hover:bg-zinc-800 font-semibold">
                      <Link href={ctaCopy.primaryHref}>
                        {ctaCopy.primaryLabel}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="mt-3 w-full sm:w-auto sm:ml-3">
                      <Link href={ctaCopy.secondaryHref}>{ctaCopy.secondaryLabel}</Link>
                    </Button>
                  </div>
                  <p className="text-xs text-zinc-500 mt-4">{CONVERSION_WALL_COPY}</p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div
      className={`min-h-[calc(100vh-5rem)] bg-zinc-100 font-sans text-zinc-900 ${
        immersive ? "pb-0" : "flex flex-col items-center justify-center px-4 py-12 pb-16"
      }`}
    >
      {immersive ? (
        <WorkstationFrame
          activeWindowTitle={activeWindowTitle}
          onReset={() => {
            dispatch({ type: "RESET" });
            setPostMortemFormCompleted(false);
          }}
          timerActive={timerActive}
          statusLabel={stageLabel}
        >
          {core}
        </WorkstationFrame>
      ) : (
        <>
          <div className="w-full max-w-4xl mx-auto flex justify-center">{core}</div>
          <p className="text-xs text-zinc-500 max-w-md text-center mt-6">
            Full-screen workstation unlocks after you start. The first click also enables the desk notification chime in
            strict browsers.
          </p>
        </>
      )}
    </div>
  );
}
