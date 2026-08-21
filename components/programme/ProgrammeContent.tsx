import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROGRAMME, DISCORD_INVITE_URL } from "@/lib/programmes";
import { GUILD } from "@/lib/guild";
import { committee } from "@/data/committee";
import { CommitteeCards } from "@/components/programme/SeatCards";
import CurriculumSchedule from "@/components/programme/CurriculumSchedule";
import ProgrammeTools from "@/components/programme/ProgrammeTools";
import Reveal from "@/components/ui/reveal";
import WaitlistForm from "@/components/forms/WaitlistForm";

const pageLinks = [
  { href: "#pillars", label: "Signature" },
  { href: "#format", label: "Format" },
  { href: "#tools", label: "Tools" },
  { href: "#guest-faculty", label: "Guest lectures" },
  { href: "#curriculum", label: "Schedule" },
  { href: "#admissions", label: "Admissions" },
  { href: "#committee", label: "Committee" },
  { href: "#waitlist", label: "Waitlist" },
];

const formatFacts = [
  { label: "Duration", value: "Twelve weeks" },
  { label: "Seats", value: "Five" },
  { label: "Hours / week", value: "10 to 12" },
  { label: "Applications", value: `Open ${PROGRAMME.applicationsOpenLabel}` },
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

const communityHref = DISCORD_INVITE_URL ?? GUILD.slug;
const communityLabel = DISCORD_INVITE_URL ? "Join Discord" : "Join the Forum";
const communityIsExternal = Boolean(DISCORD_INVITE_URL);

export default function ProgrammeContent() {
  return (
    <div>
      <section className="pt-28 pb-14 bg-white text-black border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">
              {PROGRAMME.fullName}
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-5 max-w-4xl">
              Twelve weeks. Five seats. One live defence.
            </h1>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-3 max-w-2xl">
              Source a proprietary £5 to £30 million UK target, structure the deal, and defend it to a voting investment
              committee.
            </p>
            <p className="text-sm text-gray-600 mb-8 max-w-2xl">
              Applications open {PROGRAMME.applicationsOpenLabel}. Join the waitlist now, or learn with the community
              while seats and faculty are confirmed.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Button className="bg-black text-white hover:bg-gray-900" asChild>
                <Link href="#waitlist">
                  Join the waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-gray-100" asChild>
                {communityIsExternal ? (
                  <a href={communityHref} target="_blank" rel="noopener noreferrer">
                    {communityLabel}
                  </a>
                ) : (
                  <Link href={communityHref}>{communityLabel}</Link>
                )}
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

      <ProgrammeTools />

      <section className="py-14 md:py-20 bg-white border-b border-gray-200" id="curriculum">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Curriculum</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-3">
              Origination, diligence, structure, defence
            </h2>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-8">
              Four phases. Open each one for the week-by-week sessions and written deliverables. Guest lectures and the
              investment committee are marked live. That is what tuition buys.
            </p>
            <CurriculumSchedule />
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-gray-50 border-b border-gray-200" id="admissions">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Admissions</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-8">The bar to join</h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
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
            <p className="mt-8 text-sm text-gray-500">
              When applications open, you will submit a sector thesis and a reflection on a transaction you worked on.
              We do not place anyone and we do not claim to.
            </p>
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

      <section className="py-14 md:py-20 bg-black text-white" id="waitlist">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-3 text-center">
              Next step
            </p>
            <h2 className="font-heading font-bold text-white text-2xl sm:text-4xl mb-4 text-center">
              Waitlist for {PROGRAMME.applicationsOpenLabel}
            </h2>
            <p className="text-white/75 mb-8 max-w-2xl mx-auto leading-relaxed text-center">
              Applications are not open yet. Join the waitlist for PGP, or join the community to stay close to the
              curriculum while guest faculty and committee seats are confirmed.
            </p>
            <WaitlistForm tone="dark" className="max-w-xl mx-auto mb-8" />
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                asChild
              >
                {communityIsExternal ? (
                  <a href={communityHref} target="_blank" rel="noopener noreferrer">
                    {communityLabel}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                ) : (
                  <Link href={communityHref}>
                    {communityLabel}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
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
