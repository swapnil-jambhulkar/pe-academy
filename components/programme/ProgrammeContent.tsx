import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROGRAMME } from "@/lib/programmes";
import { committee } from "@/data/committee";
import { CommitteeCards } from "@/components/programme/SeatCards";
import CurriculumSchedule from "@/components/programme/CurriculumSchedule";
import Reveal from "@/components/ui/reveal";

const pageLinks = [
  { href: "#pillars", label: "Signature" },
  { href: "#format", label: "Format" },
  { href: "#curriculum", label: "Schedule" },
  { href: "#admissions", label: "Admissions" },
  { href: "#committee", label: "Committee" },
  { href: "#apply", label: "Apply" },
];

const formatFacts = [
  { label: "Duration", value: "Twelve weeks" },
  { label: "Seats", value: "Five" },
  { label: "Hours / week", value: "10 to 12" },
  { label: "Applications", value: "Open now" },
  { label: "Deal universe", value: "£5 to £30m UK owner-managed" },
  { label: "Sessions", value: "Weekly + written deliverable" },
  { label: "Guests", value: "TS, Debt, Counsel" },
  { label: "Tuition", value: "Confirmed at offer" },
];

const cohortRules = [
  "Lower mid-market process, not mega-fund auctions",
  "Weeks 1 to 4: proprietary owner outreach",
  "Live screen, LBO, memo draft and redraft before IC",
  "Guest practitioners for TS, lending, and counsel",
  "Recorded sessions. Materials stay with participants",
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

const entryRequired = [
  {
    title: "Deal seat",
    body: "Three to eight years in transaction services, investment banking, corporate development, or strategy consulting with commercial diligence exposure.",
  },
  {
    title: "Modelling",
    body: "You can build a leveraged buyout model unaided. We do not teach LBO from first principles.",
  },
  {
    title: "Judgement gap",
    body: "Every recommendation you have made had somebody senior standing behind it. You have never owned the call end to end.",
  },
  {
    title: "Origination hunger",
    body: "You have never found a company nobody else was looking at, and that is the gap you are here to close.",
  },
] as const;

const entryDecline = [
  "You are a student or recent graduate",
  "You need leveraged buyout modelling taught from first principles",
  "Your first question is what percentage of graduates get placed",
] as const;

const admissionsSteps = [
  { step: "01", title: "Application", body: "Sector thesis and a reflection on a transaction you worked on." },
  { step: "02", title: "Review", body: "Every file is read individually. Most applications are declined." },
  { step: "03", title: "Fit conversation", body: "If the profile fits, a short call before any offer is made." },
  { step: "04", title: "Offer", body: "Tuition confirmed at offer stage. Five seats per cohort." },
] as const;

export default function ProgrammeContent() {
  return (
    <div>
      <section className="pt-28 pb-14 bg-white text-black border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">
              {PROGRAMME.fullName}
            </p>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-4xl">
                Twelve weeks. Five seats. One live defence.
              </h1>
            </div>
            <div className="mb-5 inline-flex items-center gap-2 border border-gray-300 bg-gray-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-black">
              <span className="pgp-live-dot h-1.5 w-1.5 shrink-0 rounded-full bg-black" aria-hidden />
              Live cohort
            </div>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-3 max-w-2xl">
              Source a proprietary £5 to £30 million UK target, structure the deal, and defend it to a voting
              investment committee.
            </p>
            <p className="text-sm text-gray-600 mb-8 max-w-2xl">
              The programme is running. Apply for the current intake, or speak to admissions about seats.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Button className="bg-black text-white hover:bg-gray-900" asChild>
                <Link href={PROGRAMME.applySlug}>
                  Apply for {PROGRAMME.shortName}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-gray-100" asChild>
                <a href="#curriculum">View curriculum</a>
              </Button>
            </div>
            <nav aria-label="Programme sections" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
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

      <section className="py-14 md:py-20 bg-black text-white border-b border-white/10" id="pillars">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-3">Signature</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">
              Two features nobody else offers commercially
            </h2>
            <p className="text-base text-white/70 leading-relaxed max-w-3xl mb-8">
              Protect these. Everything else in the curriculum exists to make them real.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
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

      <section className="py-10 md:py-12 bg-gray-50 border-b border-gray-200" id="format">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-2">Format</p>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-black">How the cohort runs</h2>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 border border-gray-200 bg-gray-200 gap-px">
              {formatFacts.map((item) => (
                <div key={item.label} className="bg-white px-4 py-3 sm:px-5 sm:py-4">
                  <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-gray-500 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-black leading-snug">{item.value}</p>
                </div>
              ))}
            </div>

            <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {cohortRules.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700 leading-snug">
                  <Check className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-black" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white border-b border-gray-200" id="curriculum">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Curriculum</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-3">
              Origination, diligence, structure, defence
            </h2>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-8">
              Four phases. Open each one for the week-by-week sessions and written deliverables. Guest lectures and the
              investment committee are marked live while the cohort is in session.
            </p>
            <CurriculumSchedule />
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-gray-50 border-b border-gray-200" id="admissions">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Admissions</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-3">The bar to join</h2>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-10">
              Five seats. Built for mid-career deal professionals who can already execute and want to own the next
              recommendation. We do not place anyone and we do not claim to.
            </p>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
              <div className="lg:col-span-7">
                <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-gray-500 mb-4">Required</h3>
                <ol className="border-t border-gray-200">
                  {entryRequired.map((item, index) => (
                    <li
                      key={item.title}
                      className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-gray-200 py-4 sm:grid-cols-[3rem_1fr] sm:gap-5"
                    >
                      <span className="font-heading text-lg font-bold tabular-nums text-black/35 sm:text-xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-heading text-lg font-semibold text-black sm:text-xl">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-gray-700 sm:text-[15px]">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="lg:col-span-5">
                <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-gray-500 mb-4">
                  Decline without review
                </h3>
                <ul className="space-y-3 border border-gray-200 bg-white p-5 sm:p-6">
                  {entryDecline.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  If that describes you, try the Day One Simulator first. It is free and tests judgment under time
                  pressure.
                </p>
                <Link
                  href="/simulator"
                  className="mt-3 inline-flex items-center text-sm font-medium text-black underline-offset-4 hover:underline"
                >
                  Open the simulator
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
            </div>

            <div className="mt-12 border-t border-gray-200 pt-10">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-gray-500 mb-2">Process</h3>
                  <p className="font-heading text-2xl font-bold text-black sm:text-3xl">How applications move</p>
                </div>
                <Button className="bg-black text-white hover:bg-gray-900" asChild>
                  <Link href={PROGRAMME.applySlug}>
                    Apply for {PROGRAMME.shortName}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <ol className="grid gap-px overflow-hidden border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
                {admissionsSteps.map((item) => (
                  <li key={item.step} className="bg-white px-4 py-4 sm:px-5 sm:py-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">{item.step}</p>
                    <p className="mt-2 font-heading text-lg font-semibold text-black">{item.title}</p>
                    <p className="mt-1.5 text-sm leading-snug text-gray-700">{item.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white border-b border-gray-200" id="committee">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Judgement</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-3">Committee seats</h2>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-8">
              Three external members, currently investing, not employees of the programme. They read the memoranda in
              advance, question the participants for three hours, and vote. Faces and names are published as each seat
              is confirmed.
            </p>
            <CommitteeCards members={committee} />
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-black text-white" id="apply">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <Reveal>
            <div className="mb-3 inline-flex items-center gap-2 border border-white/25 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
              <span className="pgp-live-dot h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden />
              Programme live
            </div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-3">Next step</p>
            <h2 className="font-heading font-bold text-white text-2xl sm:text-4xl mb-4">
              Apply for the current {PROGRAMME.shortName} cohort
            </h2>
            <p className="text-white/75 mb-8 max-w-2xl mx-auto leading-relaxed">
              The programme is running. Apply now, or speak to admissions if you want to understand fit before you
              submit.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button className="bg-white text-black hover:bg-gray-100" asChild>
                <Link href={PROGRAMME.applySlug}>
                  Apply now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                asChild
              >
                <Link href="/contact">Speak to admissions</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white/40 text-white/80 hover:bg-white/10 hover:text-white bg-transparent"
                asChild
              >
                <Link href="/simulator">Try the Day One Simulator</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
