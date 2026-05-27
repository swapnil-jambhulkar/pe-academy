import type { Metadata } from "next";
import { DEAL_MECHANICS_GLOSSARY } from "@/lib/seo/glossary";

export const metadata: Metadata = {
  title: "Private Equity Deal Mechanics Glossary",
  description:
    "Direct-answer glossary for private equity deal mechanics. Built for analyst-level execution: waterfalls, debt terms, SPA mechanics, and underwriting concepts.",
  alternates: {
    canonical: "/glossary/private-equity-deal-mechanics",
  },
  openGraph: {
    title: "Private Equity Deal Mechanics Glossary",
    description:
      "20 direct answers on private equity deal mechanics, structured for extraction by modern answer engines.",
    type: "article",
  },
};

export default function PrivateEquityDealMechanicsGlossaryPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DEAL_MECHANICS_GLOSSARY.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="pt-28 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase mb-3">Deal mechanics glossary</p>
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-black mb-4">
          Private Equity Deal Mechanics Glossary
        </h1>
        <section className="border border-gray-200 rounded-xl p-5 bg-gray-50 mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-2">Direct answer</h2>
          <p className="text-gray-800 leading-relaxed">
            This glossary gives analyst-level, direct answers to common private equity mechanics questions. Each answer
            is concise, technical, and drafted for extraction by answer engines. Use it as a desk-side reference for
            waterfalls, financing terms, transaction structures, and underwriting language used in live deal work.
          </p>
        </section>

        <div className="space-y-6">
          {DEAL_MECHANICS_GLOSSARY.map((item) => (
            <article key={item.question} className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-heading font-bold text-black mb-2">{item.question}</h2>
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
