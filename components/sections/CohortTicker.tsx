import Image from "next/image";
import { cohortFirms } from "@/data/cohort-firms";

export default function CohortTicker() {
  const loop = [...cohortFirms, ...cohortFirms];

  return (
    <section
      id="cohort"
      className="bg-gray-50 border-b border-gray-200 py-12 md:py-16 scroll-mt-24"
      aria-labelledby="cohort-ticker-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-8 md:mb-10">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3 text-center">
          Previous cohort
        </p>
        <h2
          id="cohort-ticker-heading"
          className="text-2xl sm:text-3xl font-heading font-bold text-black text-center mb-3"
        >
          Professionals from Big 4, bulge bracket banks, and private equity
        </h2>
        <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
          Representative sending backgrounds. Firm marks are not partnerships, endorsements, or
          placement claims.
        </p>
      </div>

      <div className="relative overflow-hidden py-6 md:py-8 border-y border-gray-200 bg-white">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-24 bg-gradient-to-r from-white to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-24 bg-gradient-to-l from-white to-transparent"
          aria-hidden
        />
        <div className="campus-ticker">
          <div className="campus-ticker-track" style={{ animationDuration: "55s" }}>
            {loop.map((firm, index) => (
              <div key={`${firm.id}-${index}`} className="campus-ticker-item px-5 md:px-8">
                <Image
                  src={firm.logo}
                  alt={firm.name}
                  width={200}
                  height={48}
                  className="h-8 md:h-10 w-auto max-w-[180px] object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
