type Seat = {
  seat: string;
  profile: string;
  name: string | null;
  title?: string | null;
  firm?: string | null;
};

function SeatAvatar({ name, dark }: { name: string | null; dark?: boolean }) {
  const initials = name
    ? name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? "")
        .join("")
    : null;

  return (
    <div
      className={
        dark
          ? "flex h-14 w-14 shrink-0 items-center justify-center border border-white/30 bg-white/10"
          : "flex h-14 w-14 shrink-0 items-center justify-center border border-gray-300 bg-gray-100"
      }
      aria-hidden
    >
      {initials ? (
        <span className={`font-heading text-lg font-bold ${dark ? "text-white" : "text-black"}`}>{initials}</span>
      ) : (
        <svg viewBox="0 0 48 48" className={`h-8 w-8 ${dark ? "text-white/55" : "text-gray-400"}`} fill="currentColor">
          <circle cx="24" cy="16" r="8" />
          <path d="M8 42c0-9.941 7.163-18 16-18s16 8.059 16 18" />
        </svg>
      )}
    </div>
  );
}

function SeatCard({ member, week, dark }: { member: Seat; week?: number; dark?: boolean }) {
  return (
    <article
      className={
        dark
          ? "border border-white/20 bg-white/5 p-6 h-full"
          : "border border-gray-200 bg-white p-6 h-full hover:border-black hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all duration-300"
      }
    >
      <div className="flex items-start gap-4 mb-4">
        <SeatAvatar name={member.name} dark={dark} />
        <div className="min-w-0">
          <p
            className={
              dark
                ? "text-xs font-semibold tracking-[0.16em] uppercase text-white/55 mb-2"
                : "text-xs font-semibold tracking-[0.16em] uppercase text-gray-500 mb-2"
            }
          >
            {week ? `Week ${week} · ${member.seat}` : member.seat}
          </p>
          {member.name ? (
            <>
              <h3 className={`text-xl font-heading font-bold ${dark ? "text-white" : "text-black"}`}>{member.name}</h3>
              {member.title ? (
                <p className={`text-sm ${dark ? "text-white/75" : "text-gray-700"}`}>{member.title}</p>
              ) : null}
              {member.firm ? (
                <p className={`text-sm ${dark ? "text-white/55" : "text-gray-500"}`}>{member.firm}</p>
              ) : null}
            </>
          ) : (
            <p className={`text-xs uppercase tracking-[0.16em] font-semibold ${dark ? "text-white/70" : "text-gray-500"}`}>
              To be announced
            </p>
          )}
        </div>
      </div>
      <p className={`text-sm leading-relaxed ${dark ? "text-white/75" : "text-gray-700"}`}>{member.profile}</p>
    </article>
  );
}

export function CommitteeCards({ members }: { members: Seat[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {members.map((member) => (
        <SeatCard key={member.seat} member={member} />
      ))}
    </div>
  );
}

export function FacultyCards({
  members,
  dark,
}: {
  members: Array<Seat & { week: number }>;
  dark?: boolean;
}) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {members.map((member) => (
        <SeatCard key={`${member.week}-${member.seat}`} member={member} week={member.week} dark={dark} />
      ))}
    </div>
  );
}
