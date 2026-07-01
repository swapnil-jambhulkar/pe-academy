import FAQ from "@/components/sections/FAQ";

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
            Programme structure and admissions for GCPE, PGP, and the Day One Simulator.
          </p>
        </div>
      </section>
      <FAQ showHeader={false} />
    </div>
  );
}

