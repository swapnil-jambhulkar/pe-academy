import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights Library",
  description:
    "Norland Academy private equity insights library covering industry LBO execution guides and a deal mechanics glossary.",
  alternates: {
    canonical: "/insights",
  },
};

export default function InsightsPage() {
  return (
    <main className="pt-28 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-3">Insights</p>
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-black mb-4">Private equity execution library</h1>
        <p className="text-gray-700 mb-8">
          Browse the LBO industry pages and the deal mechanics glossary. Each page is structured for direct-answer
          readability and analyst-level execution context.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/insights/lbo" className="border border-gray-200 rounded-lg p-5 bg-white hover:border-black transition-colors shadow-sm">
            <h2 className="text-xl font-heading font-bold text-black mb-2">LBO industry library</h2>
            <p className="text-sm text-gray-600">Region and sector-specific underwriting and modeling guides.</p>
          </Link>
          <Link
            href="/glossary/private-equity-deal-mechanics"
            className="border border-gray-200 rounded-lg p-5 bg-white hover:border-black transition-colors shadow-sm"
          >
            <h2 className="text-xl font-heading font-bold text-black mb-2">Deal mechanics glossary</h2>
            <p className="text-sm text-gray-600">Direct-answer technical explanations for PE transactions.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
