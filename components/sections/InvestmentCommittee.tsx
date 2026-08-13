import { committee } from "@/data/committee";
import { faculty } from "@/data/faculty";
import { CommitteeCards, FacultyCards } from "@/components/programme/SeatCards";

export default function InvestmentCommittee() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Judgement</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">The investment committee</h2>
          <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-10">
            Three external members, currently investing, not employees of the programme. They read the memoranda in
            advance, question the participants for three hours, and vote. Recommendations can be and are rejected.
          </p>
          <CommitteeCards members={committee} />
          <div className="mt-16">
            <h3 className="text-2xl font-heading font-bold text-black mb-4">Guest faculty</h3>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-8">
              Practitioners join for diligence, debt capacity, and completion mechanics. Names are published as they are
              confirmed.
            </p>
            <FacultyCards members={faculty} />
          </div>
        </div>
      </div>
    </section>
  );
}
