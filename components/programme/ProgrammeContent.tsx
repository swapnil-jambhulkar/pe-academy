import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROGRAMME, PAID_PROGRAMME_NOTE } from "@/lib/programmes";
import { committee } from "@/data/committee";
import { CommitteeCards } from "@/components/programme/SeatCards";
import CurriculumSchedule from "@/components/programme/CurriculumSchedule";
import Reveal from "@/components/ui/reveal";

const pageLinks = [
  { href: "#pillars", label: "Signature" },
  { href: "#format", label: "Format" },
  { href: "#guest-faculty", label: "Guest lectures" },
  { href: "#curriculum", label: "Schedule" },
  { href: "#admissions", label: "Admissions" },
  { href: "#committee", label: "Committee" },
];

const formatDetails = [
  { label: "Duration", value: "Twelve weeks" },
  { label: "Seats", value: "Five per cohort" },
  { label: "Deal universe", value: PROGRAMME.dealUniverse },
  { label: "Live sessions", value: "Weekly, with written deliverables due before each session" },
  { label: "Commitment", value: "Ten to twelve hours per week including preparation" },
  { label: "Guest lectures", value: "Weeks 6, 7, and 12. TS, lending, and corporate counsel." },
  { label: "Tuition", value: PAID_PROGRAMME_NOTE },
];

const pillars = [
  {
    id: "origination",
    title: "Real owner outreach",
    body: "You build a proprietary universe and run live outreach to owner-managers. No CIM. No banker book. You write as a learner on the programme, not as an authorised adviser.",
  },
  {
    id: "ic",
    title: "External IC that votes",
    body: "Three practising investors, not programme staff. They read your memorandum in advance, question you for three hours, and vote. Recommendations can be rejected.",
  },
];

const cohortRules = [
  "Benchmarked to lower mid-market and independent-sponsor process, not mega-fund auctions",
  "Origination sprint across weeks 1 to 4, including real owner outreach",
  "Deliberate practice: live screen, LBO, then memorandum draft and redraft before the IC",
  "Guest practitioners for transaction services, lending, and corporate counsel",
  "Sessions are recorded. Materials remain available to participants after the programme",
];

const entryForYou = [
  "Three to eight years in transaction services, investment banking, corporate development, or strategy consulting with commercial diligence exposure",
  "You can build a leveraged buyout model unaided",
  "Every recommendation you have made had somebody senior standing behind it",
  "You have never found a company nobody else was looking at",
];

const entryNotForYou = [
  "You are a student or recent graduate",
  "You need leveraged buyout modelling taught from first principles",
  "Your first question is what percentage of graduates get placed",
];

export default function ProgrammeContent() {
  return (
    <div>
      <section className="pt-28 pb-16 bg-white text-black border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">
              {PROGRAMME.fullName}
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6 max-w-4xl">
              Twelve weeks. Five seats. One live defence.
            </h1>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-4 max-w-3xl">
              A mid-career cohort for professionals who can execute and have never owned the recommendation. You source
              a proprietary acquisition target in the {PROGRAMME.dealUniverse} range, price it, structure it, and defend
              it to an external investment committee that votes.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-3xl">{PROGRAMME.dealUniverseDetail}</p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Button className="bg-black text-white hover:bg-gray-900" asChild>
                <Link href={PROGRAMME.applySlug}>
                  Apply
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-gray-100" asChild>
                <Link href="#pillars">Signature features</Link>
              </Button>
            </div>
            <nav aria-label="Programme sections" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {pageLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-black underline-offset-4 hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black text-white border-b border-white/10" id="pillars">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-3">Signature</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Two features nobody else offers commercially
            </h2>
            <p className="text-base text-white/70 leading-relaxed max-w-3xl mb-10">
              Protect these. Everything else in the curriculum exists to make them real.
            </p>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {pillars.map((pillar) => (
                <article key={pillar.id} className="border border-white/20 bg-white/5 p-6 md:p-8">
                  <h3 className="text-2xl font-heading font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{pillar.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200" id="format">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Format</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-10">How the cohort runs</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {formatDetails.map((item) => {
                const isGuest = item.label === "Guest lectures";
                const isUniverse = item.label === "Deal universe";
                const emphasize = isGuest || isUniverse;
                return (
                  <div
                    key={item.label}
                    className={
                      emphasize
                        ? "border border-black bg-black text-white p-5"
                        : "border border-gray-200 p-5 bg-white"
                    }
                  >
                    <p
                      className={
                        emphasize
                          ? "text-xs uppercase tracking-wide text-white/60 mb-1 font-bold"
                          : "text-xs uppercase tracking-wide text-gray-500 mb-1"
                      }
                    >
                      {item.label}
                    </p>
                    <p className={emphasize ? "text-base font-bold text-white" : "text-base font-medium text-black"}>
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
            <ul className="mt-10 space-y-3 max-w-3xl">
              {cohortRules.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <Check className="h-4 w-4 flex-shrink-0 mt-1 text-black" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-b border-gray-200" id="curriculum">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Curriculum</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">
              Origination, diligence, structure, defence
            </h2>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-10">
              Four phases. Open each one for the week-by-week sessions and written deliverables. Guest lectures sit in
              weeks 6, 7, and 12. Week 11 is the investment committee.
            </p>
            <CurriculumSchedule />
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200" id="admissions">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Admissions</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-10">The bar to apply</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <h3 className="text-lg font-heading font-semibold text-black mb-4">Required</h3>
                <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-5">
                  {entryForYou.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <h3 className="text-lg font-heading font-semibold text-black mb-4">Decline without review</h3>
                <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-5">
                  {entryNotForYou.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-10 text-sm text-gray-500">
              Applications require a sector thesis and a reflection on a transaction you worked on. We do not place
              anyone and we do not claim to.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-b border-gray-200" id="committee">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Judgement</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">Committee seats</h2>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-10">
              Three external members, currently investing, not employees of the programme. They read the memoranda in
              advance, question the participants for three hours, and vote. Names are published as they are confirmed.
            </p>
            <CommitteeCards members={committee} />
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black text-white" id="apply">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <Reveal>
            <h2 className="font-heading font-bold text-white text-2xl sm:text-4xl mb-6">
              Submit a sector thesis. Most applications are declined.
            </h2>
            <p className="text-white/75 mb-8 max-w-2xl mx-auto leading-relaxed">
              If your profile fits, we invite you to a fit conversation before any offer is made. Tuition is confirmed
              at offer stage.
            </p>
            <Button size="lg" asChild className="bg-white text-black hover:bg-gray-100 font-semibold">
              <Link href={PROGRAMME.applySlug}>
                Apply for PGP
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
