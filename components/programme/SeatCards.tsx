type Seat = {
  seat: string;
  profile: string;
  name: string | null;
  title?: string | null;
  firm?: string | null;
};

function SeatCard({ member, week }: { member: Seat; week?: number }) {
  return (
    <article className="border border-gray-200 bg-white p-6 h-full">
      <p className="text-xs font-semibold tracking-[0.16em] uppercase text-gray-500 mb-3">
        {week ? `Week ${week} · ${member.seat}` : member.seat}
      </p>
      {member.name ? (
        <>
          <h3 className="text-xl font-heading font-bold text-black mb-1">{member.name}</h3>
          {member.title ? <p className="text-sm text-gray-700">{member.title}</p> : null}
          {member.firm ? <p className="text-sm text-gray-500">{member.firm}</p> : null}
        </>
      ) : (
        <>
          <p className="text-base text-gray-800 leading-relaxed mb-3">{member.profile}</p>
          <p className="text-xs uppercase tracking-wide text-gray-400">To be announced</p>
        </>
      )}
    </article>
  );
}

export function CommitteeCards({ members }: { members: Seat[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-4 md:gap-6">
      {members.map((member) => (
        <SeatCard key={member.seat} member={member} />
      ))}
    </div>
  );
}

export function FacultyCards({ members }: { members: Array<Seat & { week: number }> }) {
  return (
    <div className="grid md:grid-cols-3 gap-4 md:gap-6">
      {members.map((member) => (
        <SeatCard key={`${member.week}-${member.seat}`} member={member} week={member.week} />
      ))}
    </div>
  );
}
