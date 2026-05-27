import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INDUSTRY_PAGES, getIndustryPageBySlug } from "@/lib/seo/industry-pages";

type PageProps = {
  params: Promise<{ industry: string }>;
};

export async function generateStaticParams() {
  return INDUSTRY_PAGES.map((page) => ({ industry: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params;
  const entry = getIndustryPageBySlug(industry);

  if (!entry) {
    return {
      title: "Industry LBO Guide",
    };
  }

  const title = `How to model an LBO for ${entry.region} ${entry.industry} assets`;
  const description = `Execution guide for ${entry.region} ${entry.industry} LBO cases. Includes risk factors, baseline metrics, and modelling focus areas used in Norland Academy training.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    alternates: {
      canonical: `/insights/lbo/${entry.slug}`,
    },
  };
}

export default async function IndustryLboPage({ params }: PageProps) {
  const { industry } = await params;
  const entry = getIndustryPageBySlug(industry);

  if (!entry) {
    notFound();
  }

  const directAnswer = `For ${entry.region} ${entry.industry} buyouts, the LBO model should anchor on ${entry.baselineMetric.toLowerCase()} and explicitly stress ${entry.riskFactors
    .slice(0, 2)
    .join(" plus ")
    .toLowerCase()}. Underwriting quality comes from converting operating assumptions into cash conversion cases, then testing debt service under downside, base, and control-upside scenarios.`;

  return (
    <main className="pt-28 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase mb-3">Industry LBO execution</p>
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-black mb-4">
          How to model an LBO for {entry.region} {entry.industry} assets
        </h1>

        <section className="border border-gray-200 rounded-xl p-5 bg-gray-50 mb-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-2">Direct answer</h2>
          <p className="text-gray-800 leading-relaxed">{directAnswer}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading font-bold text-black mb-3">Core risk factors</h2>
          <ul className="space-y-2 text-gray-700">
            {entry.riskFactors.map((factor) => (
              <li key={factor} className="list-disc ml-5">
                {factor}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading font-bold text-black mb-3">Execution baseline</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-black">Metric to anchor underwriting:</span> {entry.baselineMetric}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-black">Modelling focus:</span> {entry.modellingFocus}
          </p>
        </section>

        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-heading font-bold text-black mb-3">Move from theory to execution</h2>
          <p className="text-gray-700 mb-4">
            This guide is an orientation layer. The GCPE programme runs these judgments inside live data-room workflows
            with partner-level feedback.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/cohort" className="px-5 py-3 bg-black text-white rounded-md text-sm font-semibold">
              Apply for GCPE
            </Link>
            <Link href="/simulator" className="px-5 py-3 border border-black text-black rounded-md text-sm font-semibold">
              Try Day One Simulator
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
