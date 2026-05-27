"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Term = {
  id: string;
  label: string;
  title: string;
  intro: string;
  modules: string[];
};

const terms: Term[] = [
  {
    id: "term-1",
    label: "Term 1 · WK 1-12",
    title: "Foundation and technical execution",
    intro: "Build the base layer for institutional deal work.",
    modules: [
      "LBO architecture and forensic three-statement model builds",
      "Commercial due diligence and sector thesis construction",
      "Deal screening memos and IC recommendation framing",
      "GCPE examination pathway and technical audit",
    ],
  },
  {
    id: "term-2",
    label: "Term 2 · WK 13-24",
    title: "Structuring and transaction engineering",
    intro: "Translate analysis into executable transaction structures.",
    modules: [
      "Debt stack design across senior, mezzanine, and sponsor equity",
      "SPA logic, locked-box mechanisms, and value leakage controls",
      "Cross-border structure design and legal workstream mapping",
      "Negotiation labs with lender and seller counterparty cases",
    ],
  },
  {
    id: "term-3",
    label: "Term 3 · WK 25-36",
    title: "Portfolio value creation and governance",
    intro: "Control performance after signing and close.",
    modules: [
      "100-day value creation planning and operating rhythm",
      "Portfolio KPI architecture and board reporting packs",
      "Margin expansion and working capital control playbooks",
      "Post-close intervention scenarios and downside response",
    ],
  },
  {
    id: "term-4",
    label: "Term 4 · WK 37-48",
    title: "Institutional readiness and capstone",
    intro: "Present full-cycle capability at principal standard.",
    modules: [
      "Partner office hours and cohort transaction reviews",
      "Institutional communication and stakeholder discipline",
      "Fund economics, carry mechanics, and role transition planning",
      "Capstone buyout memo with oral defence",
    ],
  },
];

const audience = [
  "IB and Big-4 analysts moving to private equity",
  "Chartered accountants seeking buy-side execution depth",
  "Consultants transitioning into sponsor-backed transactions",
  "Operators preparing for portfolio and value-creation roles",
];

const scholars = {
  current: { cohort: "Class of 2026-27", count: "32 scholars" },
  past: [
    { cohort: "Class of 2025-26", count: "26 scholars" },
    { cohort: "Class of 2024-25", count: "21 scholars" },
  ],
};

const calendarRows = [
  { code: "T-02", event: "Priority application window", date: "15 June 2026" },
  { code: "T-01", event: "Application deadline", date: "30 June 2026" },
  { code: "T+00", event: "Programme begins", date: "20 July 2026" },
  { code: "T+01", event: "Workshop I", date: "12-14 Sept 2026" },
  { code: "T+02", event: "Workshop II", date: "24-26 Oct 2026" },
  { code: "T+03", event: "Workshop III", date: "13-15 Feb 2027" },
  { code: "T+04", event: "Capstone review week", date: "23-27 May 2027" },
];

const workshopImages = [
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
];

export default function PgpPage() {
  const [activeTerm, setActiveTerm] = useState(terms[0]);

  return (
    <main className="bg-white text-black">
      <section className="min-h-screen flex items-center pt-28 pb-20 bg-white text-black border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-black font-semibold mb-4">PGP</p>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.02] mb-6 text-black">
                Post Graduate Programme in
                <br />
                Private Equity
                <br />
                and Deal Engineering
              </h1>
              <p className="text-base text-gray-800 leading-relaxed mb-4 max-w-3xl">
                The Post Graduate Programme is a comprehensive 48-week private equity track designed for candidates who
                need full-cycle transaction capability across underwriting, structuring, governance, and portfolio value
                creation.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4 max-w-3xl">
                The programme combines live technical sessions, applied workstreams, and partner-guided execution drills.
                Participants finish with a capstone that demonstrates institutional buyout judgement.
              </p>
              <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
                This is not a generic finance classroom. It is a structured deal-engineering path for professionals who
                need to think, write, and defend investment decisions at an institutional standard.
              </p>
            </div>

            <div className="lg:justify-self-end lg:w-full lg:max-w-md lg:border-l lg:border-gray-300 lg:pl-8 lg:mt-14">
              <p className="text-xs tracking-[0.18em] uppercase text-gray-500 mb-4">PGP Cohort 3</p>
              <div className="space-y-3 py-1">
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2"><span className="text-gray-500">Format</span><span className="font-semibold text-black">48 weeks · live</span></div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2"><span className="text-gray-500">Cadence</span><span className="font-semibold text-black">Weekend + weekday practice</span></div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2"><span className="text-gray-500">Workshops</span><span className="font-semibold text-black">3 in-person convenings</span></div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2"><span className="text-gray-500">Apply by</span><span className="font-semibold text-black">30 June 2026</span></div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2"><span className="text-gray-500">Begins</span><span className="font-semibold text-black">20 July 2026</span></div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2"><span className="text-gray-500">Fee (before scholarship)</span><span className="font-semibold text-black">£3,000 + taxes</span></div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2"><span className="text-gray-500">Fee (after scholarship)</span><span className="font-semibold text-black">£2,000 + taxes</span></div>
              </div>
              <Button className="w-full mt-6 bg-black text-white hover:bg-gray-900" asChild>
                <Link href="/contact">
                  Begin application <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-gray-200 bg-gray-50 text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="font-heading text-4xl mb-8">How it works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-gray-300 bg-white">
            {[
              ["Four terms over 48 weeks", "Structured progression from technical underwriting to full-cycle sponsor execution."],
              ["Concepts, frameworks, skills", "Build decision quality for IC memos, transaction structuring, and post-close governance."],
              ["Live webinars and masterclasses", "Weekly live technical sessions with practitioner breakdowns and implementation drills."],
              ["Three in-person workshops", "In-person convenings focused on negotiation, committee defence, and case debrief."],
              ["Capstone project", "A full buyout case with model, investment memo, and oral defence before reviewers."],
              ["Certificate and alumni network", "Completion certificate and long-term access to the Norland professional network."],
            ].map(([title, body]) => (
              <div key={title} className="p-6 border-b md:border-b-0 md:border-r border-gray-200 last:border-r-0">
                <h3 className="font-heading text-2xl mb-2">{title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-white/15 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <h2 className="font-heading text-4xl mb-8 text-white">Who this programme is for</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {audience.map((item) => (
              <div key={item} className="border border-white/25 p-5 text-white/90 bg-white/[0.02]">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-gray-200 bg-white text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="font-heading text-4xl mb-2">Curriculum</h2>
          <p className="text-sm text-gray-700 mb-8">
            Four terms with dedicated modules that mirror real private equity execution flow.
          </p>
          <div className="border border-gray-300 bg-white">
            <div className="grid md:grid-cols-[1fr_1.35fr]">
              <div className="border-r border-gray-200">
                {terms.map((term) => (
                  <button
                    key={term.id}
                    type="button"
                    onClick={() => setActiveTerm(term)}
                    className={`w-full text-left px-5 py-4 border-b border-gray-200 ${
                      activeTerm.id === term.id ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    <p className="text-[11px] uppercase tracking-[0.16em] opacity-80">{term.label}</p>
                    <p className="text-base font-medium mt-1">{term.title}</p>
                  </button>
                ))}
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-gray-500 mb-2">{activeTerm.label}</p>
                <h3 className="font-heading text-3xl mb-2">{activeTerm.title}</h3>
                <p className="text-sm text-gray-700 mb-5">{activeTerm.intro}</p>
                <ul className="space-y-2 text-sm text-gray-800">
                  {activeTerm.modules.map((module) => (
                    <li key={module} className="border-b border-gray-100 pb-2">{module}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-white/15 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <h2 className="font-heading text-4xl mb-8 text-white">PGP scholars and alumni</h2>
          <div className="space-y-5">
            <div className="border border-white p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-white/60 mb-2">Current cohort</p>
              <p className="font-heading text-3xl">{scholars.current.cohort}</p>
              <p className="text-sm text-white/75 mt-1">{scholars.current.count}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {scholars.past.map((s) => (
                <div key={s.cohort} className="border border-white/25 p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/60 mb-2">Alumni</p>
                  <p className="font-heading text-3xl">{s.cohort}</p>
                  <p className="text-sm text-white/75 mt-1">{s.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-gray-200 bg-gray-50 text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
            <div>
              <h2 className="font-heading text-4xl mb-2">Workshops</h2>
              <p className="font-heading text-5xl leading-[1.02] mb-5">Three in-person convenings</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                PGP includes three in-person workshops distributed across the programme. Each workshop is designed as an
                execution lab with role-play, peer review, and partner feedback.
              </p>
              <p className="text-xs text-gray-500">
                Travel and accommodation costs are not included. Workshops are expected unless case-specific exemptions
                are approved.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {workshopImages.map((src, idx) => (
                <div key={src} className="relative aspect-[4/3] border border-gray-300 overflow-hidden">
                  <Image src={src} alt={`PGP workshop ${idx + 1}`} fill className="object-cover grayscale" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-b border-white/15 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
            <div>
              <h2 className="font-heading text-5xl leading-[1.02] mb-5 text-white">Application process and fees</h2>
              <div className="border-t border-white/25 pt-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/60 mb-2">Programme fee</p>
                <p className="font-heading text-5xl text-white">£2,000 + taxes</p>
                <p className="text-xs text-white/60 mt-3">
                  Standard fee is £3,000 + taxes before scholarship. Scholarship-adjusted fee is £2,000 + taxes.
                  Fees are non-refundable once enrolled. Deferrals may be reviewed on documented grounds.
                </p>
              </div>
            </div>
            <div className="border border-white/25 bg-white text-black">
              {[
                ["Eligibility", "Undergraduate degree in any field. Prior transaction exposure is preferred but not mandatory."],
                ["Scholarships", "Merit scholarships are considered for high-potential applicants in limited numbers."],
                ["Corporate sponsorship", "Employer-sponsored seats are available for institutions developing analyst pipelines."],
                ["More questions", "For profile fit, timelines, and sponsorship details, contact admissions directly."],
              ].map(([title, copy]) => (
                <div key={title} className="p-5 border-b border-gray-200 last:border-b-0">
                  <h3 className="font-heading text-2xl mb-1">{title}</h3>
                  <p className="text-sm text-gray-700">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-black border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
            <div>
              <h2 className="font-heading text-5xl mb-3">Cohort 3 calendar</h2>
              <p className="text-sm text-gray-700 mb-6">
                48 weeks across four terms, with workshops and capstone milestones.
              </p>
              <Button className="bg-black text-white hover:bg-gray-900" asChild>
                <Link href="/contact">
                  Apply now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="border border-gray-300">
              {calendarRows.map((row) => (
                <div key={row.code} className="grid grid-cols-[70px_1fr_auto] gap-3 px-4 py-3 border-b border-gray-200 last:border-b-0 text-sm">
                  <span className="text-gray-500">{row.code}</span>
                  <span>{row.event}</span>
                  <span className="text-gray-700">{row.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-heading text-5xl mb-4 text-white">Ready to apply for PGP - PEDE?</h2>
          <p className="text-white/75 mb-7">
            Submit your profile for the next admissions review cycle. If you prefer to start with technical preparation,
            apply for GCPE first.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button className="bg-white text-black hover:bg-gray-200" asChild>
              <Link href="/contact">
                Apply now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
              <Link href="/cohort">View GCPE</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
