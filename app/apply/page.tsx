import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APPLY_FORM_URL, PAID_PROGRAMME_NOTE, PROGRAMME } from "@/lib/programmes";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply for The Principal Programme. Five seats per cohort. Submit your profile, sector thesis, and transaction reflection for review.",
  alternates: { canonical: "/apply" },
  openGraph: {
    title: "Apply | The Principal Programme",
    description: "Five seats. By application. Submit your Principal Programme application.",
    url: "/apply",
    type: "website",
  },
};

export default function ApplyPage() {
  return (
    <div>
      <section className="pt-28 pb-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Admissions</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-black mb-4">
            Apply for {PROGRAMME.name}
          </h1>
          <p className="text-base text-gray-700 leading-relaxed mb-2">
            Five seats per cohort. Applications are reviewed individually and most are declined. Complete every field
            on the application form. Short or generic answers will not be considered.
          </p>
          <p className="text-sm text-gray-500">{PAID_PROGRAMME_NOTE}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="bg-white border border-gray-200 p-6 md:p-10 text-center">
            <h2 className="font-heading text-2xl font-bold text-black mb-3">Application form</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-8 max-w-lg mx-auto">
              Continue to the official application form. You will answer the same admissions questions there, including
              your sector thesis and transaction reflection.
            </p>
            <Button className="bg-black text-white hover:bg-gray-900" asChild>
              <a href={APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">
                Open application form
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="mt-6 text-xs text-gray-500 break-all">
              Form link: {APPLY_FORM_URL}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
