import type { Metadata } from "next";
import ApplyForm from "@/components/forms/ApplyForm";
import { PAID_PROGRAMME_NOTE, PROGRAMME } from "@/lib/programmes";

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
            below. Short or generic answers will not be considered. Successful submissions are saved to the admissions
            spreadsheet with one column per answer.
          </p>
          <p className="text-sm text-gray-500">{PAID_PROGRAMME_NOTE}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="bg-white border border-gray-200 p-6 md:p-10">
            <ApplyForm />
          </div>
        </div>
      </section>
    </div>
  );
}
