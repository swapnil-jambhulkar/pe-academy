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
  PGP,
} from "@/lib/programmes";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to Norland Academy. Choose GCPE (12-week sprint) or PGP (48-week full-cycle track). Live deal desks, not academic courses. Next cohort June 2026.",
  alternates: { canonical: "/apply" },
  openGraph: {
    title: "Apply | Norland Academy",
    description:
      "Two pathways: GCPE twelve-week sprint and PGP forty-eight-week full-cycle track. Live pipeline deals. Next cohort June 2026.",
    url: "/apply",
    type: "website",
  },
};

const tracks = [
  {
    programme: GCPE,
    capacity: `${GCPE.seats} seats. High-touch, partner-level feedback.`,
  },
  {
    programme: PGP,
    capacity: "Selective intake. Full-cycle deal ownership across the year.",
  },
] as const;

export default function ApplyPage() {
  return (
    <div>
      <section className="pt-28 pb-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Admissions</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-black mb-5">
            Apply to Norland Academy
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">{ACADEMY_SHARED.intro}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <span>Next cohort: {NEXT_COHORT_START}</span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span>{PAID_PROGRAMME_NOTE}</span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Choose your track</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-black mb-8">Two pathways</h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {tracks.map(({ programme, capacity }) => (
              <article key={programme.id} className="border border-gray-200 bg-white p-6 md:p-8 h-full">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-gray-500 mb-2">
                  {programme.shortName}
                </p>
                <h3 className="font-heading text-2xl font-bold text-black mb-1">{programme.name}</h3>
                <p className="text-sm font-medium text-black mb-5">{programme.formatLabel}</p>

                <dl className="space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500 mb-1">
                      Focus
                    </dt>
                    <dd className="text-gray-700">{programme.focus}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500 mb-1">
                      Outcome
                    </dt>
                    <dd className="text-gray-700">{programme.outcome}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500 mb-1">
                      Capacity
                    </dt>
                    <dd className="text-gray-700">{capacity}</dd>
                  </div>
                </dl>
                <Link
                  href={programme.slug}
                  className="mt-6 inline-flex items-center text-sm font-medium text-black underline-offset-4 hover:underline"
                >
                  Read {programme.shortName}
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">
            Across both programmes
          </p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-black mb-8">What you get</h2>
          <ul className="space-y-4">
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

      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-3">Next step</p>
          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white mb-4">
            Open the application form
          </h2>
          <p className="text-white/75 leading-relaxed mb-3 max-w-xl mx-auto">
            Select GCPE or PGP on the form. Applications are reviewed individually. Most are declined. Next cohort
            starts {NEXT_COHORT_START}.
          </p>
          <p className="text-sm text-white/55 mb-8">{PAID_PROGRAMME_NOTE}</p>
          <Button className="bg-white text-black hover:bg-gray-100" asChild>
            <a href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">
              Apply now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
