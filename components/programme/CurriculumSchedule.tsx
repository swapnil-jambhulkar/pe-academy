import {
  curriculumPhases,
  programmeWeeks,
  sessionKindLabel,
  type ProgrammeWeek,
  type SessionKind,
} from "@/data/programme-weeks";
import { faculty } from "@/data/faculty";
import { cn } from "@/lib/utils";

function kindClass(kind: SessionKind) {
  if (kind === "guest-lecture") return "bg-black text-white border-black";
  if (kind === "committee") return "bg-black text-white border-black";
  if (kind === "live-drill") return "bg-white text-black border-black";
  return "bg-gray-100 text-black border-gray-300";
}

function KindBadge({ kind, onDark }: { kind: SessionKind; onDark?: boolean }) {
  if (onDark) {
    return (
      <span className="inline-flex items-center border border-white bg-white text-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em]">
        {sessionKindLabel[kind]}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em]",
        kindClass(kind)
      )}
    >
      {sessionKindLabel[kind]}
    </span>
  );
}

function GuestFacultyStrip() {
  const guestWeeks = programmeWeeks.filter((row) => row.kind === "guest-lecture");

  return (
    <div id="guest-faculty" className="mb-14 scroll-mt-28">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Guest faculty</p>
      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-black mb-3">
        Three guest lectures. Practitioners, not staff.
      </h3>
      <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-8">
        Diligence, debt, and completion are taught by people who do that work for a living. Names are published as they
        are confirmed.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {guestWeeks.map((row) => {
          const seat = faculty.find((member) => member.week === row.week);
          return (
            <a
              key={row.week}
              href={`#week-${row.week}`}
              className="group block bg-black text-white p-6 hover:bg-gray-900 transition-colors"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 mb-3">
                Week {row.week} · Guest lecture
              </p>
              <p className="text-xl font-heading font-bold mb-2">{row.guestSeat ?? row.session}</p>
              <p className="text-sm text-white/80 leading-relaxed mb-4">{row.session}</p>
              <p className="text-xs uppercase tracking-wide text-white/50">
                {seat?.name ?? "Faculty to be announced"}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/60 group-hover:text-white">
                Read week {row.week}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

function WeekRow({ row }: { row: ProgrammeWeek }) {
  const isEmphasis = row.kind === "guest-lecture" || row.kind === "committee";

  return (
    <article
      id={`week-${row.week}`}
      className={cn(
        "scroll-mt-28 border p-5 md:p-6",
        isEmphasis ? "bg-black text-white border-black" : "bg-white text-black border-gray-200"
      )}
    >
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span
          className={cn(
            "text-sm font-bold tabular-nums",
            isEmphasis ? "text-white" : "text-black"
          )}
        >
          Week {String(row.week).padStart(2, "0")}
        </span>
        <KindBadge kind={row.kind} onDark={isEmphasis} />
        {row.guestSeat ? (
          <span
            className={cn(
              "text-[10px] font-bold uppercase tracking-[0.16em]",
              isEmphasis ? "text-white" : "text-black"
            )}
          >
            {row.guestSeat} faculty
          </span>
        ) : null}
      </div>
      <h4 className={cn("text-xl font-heading font-bold mb-2", isEmphasis ? "text-white" : "text-black")}>
        {row.session}
      </h4>
      <p className={cn("text-sm leading-relaxed mb-4", isEmphasis ? "text-white/80" : "text-gray-700")}>
        {row.lecture}
      </p>
      <p className={cn("text-xs uppercase tracking-[0.14em] font-semibold mb-1", isEmphasis ? "text-white/50" : "text-gray-400")}>
        Written deliverable
      </p>
      <p className={cn("text-sm", isEmphasis ? "text-white" : "text-gray-800")}>{row.deliverable}</p>
    </article>
  );
}

export default function CurriculumSchedule() {
  return (
    <div>
      <GuestFacultyStrip />

      <div className="space-y-12">
        {curriculumPhases.map((phase) => {
          const weeks = programmeWeeks.filter((row) => row.phase === phase.id);
          return (
            <div key={phase.id}>
              <div className="mb-4 pb-3 border-b border-gray-200">
                <h3 className="text-2xl font-heading font-bold text-black">{phase.id}</h3>
                <p className="text-sm text-gray-600 mt-1">{phase.summary}</p>
              </div>
              <div className="space-y-3">
                {weeks.map((row) => (
                  <WeekRow key={row.week} row={row} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
