import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRY_PAGES } from "@/lib/seo/industry-pages";

export const metadata: Metadata = {
  title: "Industry LBO Execution Library",
  description:
    "Sector and region-specific LBO execution pages for private equity analysts. Browse industry risk factors, baseline metrics, and modeling focus points.",
  alternates: {
    canonical: "/insights/lbo",
  },
  openGraph: {
    title: "Industry LBO Execution Library",
    description:
      "Browse Norland Academy industry-specific LBO pages across UK, Europe, and global sectors.",
    type: "website",
  },
};

export default function IndustryLboIndexPage() {
  return (
    <main className="pt-28 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase mb-3">LBO execution library</p>
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-black mb-4">
          Industry-specific LBO execution pages
        </h1>
        <p className="text-gray-700 max-w-3xl mb-10">
          This index groups targeted LBO pages built for analyst-level underwriting work. Each page includes a direct
          answer block, core risk factors, and a baseline metric used to frame downside, base, and control-upside
          cases.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRY_PAGES.map((entry) => (
            <Link
              key={entry.slug}
              href={`/insights/lbo/${entry.slug}`}
              className="border border-gray-200 rounded-lg p-4 hover:border-black transition-colors"
            >
              <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">{entry.region}</p>
              <h2 className="font-heading font-bold text-black text-lg mb-2">{entry.industry}</h2>
              <p className="text-sm text-gray-600">{entry.baselineMetric}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
