import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ACADEMY_SHARED,
  APPLY_FORM_URL,
  GCPE,
  NEXT_COHORT_START,
  PAID_PROGRAMME_NOTE,
} from "@/lib/programmes";

export const metadata: Metadata = {
  title: "GCPE",
  description:
    "Graduate Certificate in Private Equity: a twelve-week sprint on forensic LBO modelling, commercial diligence, and VDR work on live deals. Ten seats. Next cohort June 2026.",
  alternates: { canonical: "/gcpe" },
  openGraph: {
    title: "GCPE | Graduate Certificate in Private Equity",
    description:
      "Twelve-week live-fire sprint. Structure lower-middle-market buyouts and defend investment memoranda to a voting investment committee.",
    url: "/gcpe",
    type: "website",
  },
};

const formatFacts = [
  { label: "Duration", value: GCPE.duration },
  { label: "Format", value: GCPE.formatLabel },
  { label: "Seats", value: String(GCPE.seats) },
  { label: "Next cohort", value: NEXT_COHORT_START },
  { label: "Admissions", value: "By application" },
  { label: "Tuition", value: "Confirmed at offer" },
] as const;

const weeks = [
  {
    title: "Modelling",
    body: "Forensic three-statement LBO modelling under time pressure. Build the model you will take into diligence and IC.",
  },
  {
    title: "Commercial diligence",
    body: "Concentration, retention, and kill arguments. Decide what deserves more hours before you sink them.",
  },
  {
    title: "VDR sprints",
    body: "Raw virtual data room work on live pipeline materials. Triage evidence, not textbook cases.",
  },
  {
    title: "IC defence",
    body: "Write the memorandum and defend it to a live investment committee that can vote no.",
  },
] as const;

export default function GcpePage() {
  return (
    <div>
      <section className="pt-28 pb-14 bg-white text-black border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">{GCPE.fullName}</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-5 max-w-4xl">
            {GCPE.formatLabel}. Ten seats. Live IC defence.
          </h1>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-3 max-w-2xl">{GCPE.tagline}</p>
          <p className="text-sm text-gray-600 mb-8 max-w-2xl">
            {GCPE.focus} {GCPE.outcome}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-black text-white hover:bg-gray-900" asChild>
              <a href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">
                Apply for {GCPE.shortName}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-gray-100" asChild>
              <Link href="/pgp">Compare with PGP</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-3 border border-gray-200 bg-gray-200 gap-px">
            {formatFacts.map((item) => (
              <div key={item.label} className="bg-white px-4 py-3 sm:px-5 sm:py-4">
                <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-gray-500 mb-1">{item.label}</p>
                <p className="text-sm font-medium text-black leading-snug tabular-nums">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">{PAID_PROGRAMME_NOTE}</p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">How the sprint runs</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-8">Four pressures</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {weeks.map((item, index) => (
              <article key={item.title} className="border border-gray-200 bg-white p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold text-black">{item.title}</h3>
                  <span className="font-mono text-xs text-gray-400">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Across the Academy</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-8">What you get</h2>
          <ul className="max-w-2xl space-y-4">
            {ACADEMY_SHARED.outcomes.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <Check className="h-4 w-4 shrink-0 mt-1 text-black" aria-hidden />
                <div>
                  <p className="font-heading text-lg font-semibold text-black">{item.title}</p>
                  <p className="text-sm text-gray-700 leading-relaxed mt-0.5">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-3">Next cohort</p>
          <h2 className="font-heading font-bold text-white text-2xl sm:text-4xl mb-4">
            Apply for {GCPE.shortName} · {NEXT_COHORT_START}
          </h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto leading-relaxed">
            Ten seats. Select GCPE on the application form. Applications are reviewed individually and most are
            declined.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="bg-white text-black hover:bg-gray-100" asChild>
              <a href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">
                Open application form
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              asChild
            >
              <Link href="/apply">See both tracks</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
