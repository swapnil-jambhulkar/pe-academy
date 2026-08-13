import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROGRAMME, PAID_PROGRAMME_NOTE } from "@/lib/programmes";
import { programmeWeeks } from "@/data/programme-weeks";
import { committee } from "@/data/committee";
import { faculty } from "@/data/faculty";
import { CommitteeCards, FacultyCards } from "@/components/programme/SeatCards";
import Reveal from "@/components/ui/reveal";

const pageLinks = [
  { href: "#format", label: "Format" },
  { href: "#curriculum", label: "Schedule" },
  { href: "#admissions", label: "Admissions" },
  { href: "#committee", label: "Committee" },
];

const formatDetails = [
  { label: "Duration", value: "Twelve weeks" },
  { label: "Seats", value: "Five per cohort" },
  { label: "Admissions", value: "By application only" },
  { label: "Live sessions", value: "Weekly, with written deliverables due before each session" },
  { label: "Commitment", value: "Ten to twelve hours per week including preparation" },
  { label: "Tuition", value: PAID_PROGRAMME_NOTE },
];

const cohortRules = [
  "You choose the sector and build the target universe yourself",
  "Week eleven is a live investment committee. Recommendations can be and are rejected",
  "Guest practitioners join for diligence, debt capacity, and completion mechanics",
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
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-8 max-w-3xl">
              The prospectus for {PROGRAMME.name}. Week by week schedule, format, admissions bar, and the committee
              that votes. The homepage explains why the programme exists. This page is how it runs.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Button className="bg-black text-white hover:bg-gray-900" asChild>
                <Link href={PROGRAMME.applySlug}>
                  Apply
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-gray-100" asChild>
                <Link href="#curriculum">Read the schedule</Link>
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

      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200" id="format">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Format</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-10">How the cohort runs</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {formatDetails.map((item) => (
                <div key={item.label} className="border border-gray-200 p-5 bg-white">
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{item.label}</p>
                  <p className="text-base font-medium text-black">{item.value}</p>
                </div>
              ))}
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
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">Twelve week schedule</h2>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-10">
              Each week has one live session and one written deliverable due before it. You work on a sector and target
              universe you chose, not a case study handed to you.
            </p>
            <div className="overflow-x-auto border border-gray-200 bg-white">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-4 py-3 font-semibold text-black w-16">Week</th>
                    <th className="px-4 py-3 font-semibold text-black">Session</th>
                    <th className="px-4 py-3 font-semibold text-black">Deliverable</th>
                  </tr>
                </thead>
                <tbody>
                  {programmeWeeks.map((row) => (
                    <tr key={row.week} className="border-b border-gray-100 last:border-b-0">
                      <td className="px-4 py-3 text-gray-500 font-medium tabular-nums">{row.week}</td>
                      <td className="px-4 py-3 text-gray-800">{row.session}</td>
                      <td className="px-4 py-3 text-gray-700">{row.deliverable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
            <div className="mt-16">
              <h3 className="text-2xl font-heading font-bold text-black mb-4">Guest faculty</h3>
              <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-8">
                Practitioners join for weeks six, seven, and twelve. Names are published as they are confirmed.
              </p>
              <FacultyCards members={faculty} />
            </div>
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
