import type { Metadata } from "next";
import FAQ from "@/components/sections/FAQ";
import { programmeFaqs } from "@/data/programme-faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Admissions, format, time commitment, and placement policy for The Principal Programme and the Day One Simulator.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Norland Academy",
    description:
      "Answers on who should apply, weekly hours, the investment committee, and whether the programme places candidates.",
    url: "/faq",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: programmeFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <div>
      <section className="pt-24 pb-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-3">Support</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-black mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Admissions, format, and expectations for The Principal Programme and the Day One Simulator.
          </p>
        </div>
      </section>
      <FAQ showHeader={false} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
}
