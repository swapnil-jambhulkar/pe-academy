"use client";

import {
  curriculumPhases,
  programmeWeeks,
  sessionKindLabel,
  type ProgrammeWeek,
  type SessionKind,
} from "@/data/programme-weeks";
import { faculty } from "@/data/faculty";
import { FacultyCards } from "@/components/programme/SeatCards";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

function KindBadge({ kind, tone }: { kind: SessionKind; tone: "light" | "dark" }) {
  const label = sessionKindLabel[kind];

  if (tone === "dark") {
    return (
      <span className="inline-flex items-center border border-white/80 bg-transparent px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
        {label}
      </span>
    );
  }

  if (kind === "guest-lecture" || kind === "committee") {
    return (
      <span className="inline-flex items-center border border-black bg-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
        {label}
      </span>
    );
  }

  if (kind === "live-drill") {
    return (
      <span className="inline-flex items-center border border-black bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-black">
        {label}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center border border-gray-300 bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-700">
      {label}
    </span>
  );
}

function GuestFacultyStrip() {
  return (
    <div id="guest-faculty" className="mb-14 scroll-mt-28">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Guest faculty</p>
      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-black mb-3">
        Three guest lectures. Practitioners, not staff.
      </h3>
      <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-8">
        Transaction services, lending, and corporate counsel. Names and photos are published as each seat is confirmed.
        Until then, seats show as to be announced.
      </p>
      <FacultyCards members={faculty} />
    </div>
  );
}

function WeekRow({ row }: { row: ProgrammeWeek }) {
  const isEmphasis = row.kind === "guest-lecture" || row.kind === "committee";
  const liveLabel = row.kind === "committee" ? "Live IC" : "Guest lecture";

  return (
    <article
      id={`week-${row.week}`}
      className={cn(
        "scroll-mt-28 grid gap-5 border md:grid-cols-[5.5rem_1fr] md:gap-0",
        isEmphasis
          ? "pgp-live-card border-black bg-black text-white"
          : "border-gray-200 bg-white text-black"
      )}
    >
      <div
        className={cn(
          "flex items-start justify-between gap-3 px-5 pt-5 md:flex-col md:justify-start md:border-r md:px-5 md:py-6",
          isEmphasis ? "md:border-white/20" : "md:border-gray-200"
        )}
      >
        <div>
          <p
            className={cn(
              "text-[10px] font-semibold uppercase tracking-[0.18em]",
              isEmphasis ? "text-white/55" : "text-gray-400"
            )}
          >
            Week
          </p>
          <p
            className={cn(
              "font-heading text-4xl font-bold tabular-nums leading-none mt-1",
              isEmphasis ? "text-white" : "text-black"
            )}
          >
            {String(row.week).padStart(2, "0")}
          </p>
        </div>
        <div className="md:mt-5 space-y-2">
          <KindBadge kind={row.kind} tone={isEmphasis ? "dark" : "light"} />
          {isEmphasis ? (
            <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
              <span className="pgp-live-dot h-2 w-2 rounded-full bg-white" aria-hidden />
              {liveLabel}
            </p>
          ) : null}
        </div>
      </div>

      <div className="px-5 pb-5 md:px-7 md:py-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
          <h4 className={cn("font-heading text-xl sm:text-2xl font-bold", isEmphasis ? "text-white" : "text-black")}>
            {row.session}
          </h4>
          {row.guestSeat ? (
            <span
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.16em]",
                isEmphasis ? "text-white/70" : "text-gray-500"
              )}
            >
              {row.guestSeat} faculty
            </span>
          ) : null}
        </div>

        <p className={cn("text-sm sm:text-base leading-relaxed max-w-3xl", isEmphasis ? "text-white/80" : "text-gray-700")}>
          {row.lecture}
        </p>

        <div className={cn("mt-5 border-t pt-4", isEmphasis ? "border-white/20" : "border-gray-200")}>
          <div className="flex gap-3">
            <span className={cn("mt-1 h-8 w-1 shrink-0", isEmphasis ? "bg-white" : "bg-black")} aria-hidden />
            <div>
              <p
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-[0.16em] mb-1",
                  isEmphasis ? "text-white/55" : "text-gray-400"
                )}
              >
                Written deliverable
              </p>
              <p className={cn("text-sm font-medium leading-relaxed", isEmphasis ? "text-white" : "text-black")}>
                {row.deliverable}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function phaseWeekSpan(weeks: ProgrammeWeek[]) {
  if (!weeks.length) return "";
  const first = weeks[0].week;
  const last = weeks[weeks.length - 1].week;
  if (first === last) return `Week ${first}`;
  return `Weeks ${first} to ${last}`;
}

export default function CurriculumSchedule() {
  return (
    <div>
      <GuestFacultyStrip />

      <Accordion type="multiple" defaultValue={[]} className="space-y-3 border-0">
        {curriculumPhases.map((phase, index) => {
          const weeks = programmeWeeks.filter((row) => row.phase === phase.id);
          const span = phaseWeekSpan(weeks);

          return (
            <AccordionItem
              key={phase.id}
              value={phase.id}
              className="border border-gray-200 bg-white data-[state=open]:border-black data-[state=open]:bg-gray-50"
            >
              <AccordionTrigger
                className={cn(
                  "group px-5 py-5 md:px-6 md:py-6 hover:no-underline text-left items-start gap-4",
                  "[&>svg]:hidden"
                )}
              >
                <span className="flex min-w-0 flex-1 items-start gap-4 md:gap-6">
                  <span className="mt-1 text-xs font-bold tabular-nums tracking-[0.16em] text-gray-400 group-data-[state=open]:text-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-heading text-2xl sm:text-3xl font-bold text-black">{phase.id}</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 tabular-nums">
                        {span} · {weeks.length} {weeks.length === 1 ? "week" : "weeks"}
                      </span>
                    </span>
                    <span className="mt-2 block text-sm text-gray-600 leading-relaxed font-normal">{phase.summary}</span>
                  </span>
                </span>
                <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center border border-black bg-white text-black transition-colors group-data-[state=open]:bg-black group-data-[state=open]:text-white">
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden />
                  <span className="sr-only">Toggle {phase.id}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 md:px-5 md:pb-5 pt-0">
                <div className="space-y-3 border-t border-gray-200 pt-4">
                  {weeks.map((row) => (
                    <WeekRow key={row.week} row={row} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      <p className="mt-8 text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-2">Twelve week arc</p>
      <p className="text-sm text-gray-600 max-w-2xl leading-relaxed">
        Open a phase to read its weeks, sessions, and written deliverables. Open more than one at a time if you want to
        compare.
      </p>
    </div>
  );
}
