import Image from "next/image";
import { cohortFirms } from "@/data/cohort-firms";

export default function CohortTicker() {
  const loop = [...cohortFirms, ...cohortFirms];

  return (
    <section
      id="cohort"
      className="bg-white border-b border-gray-200 scroll-mt-24"
      aria-labelledby="cohort-ticker-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl pt-10 md:pt-12 pb-4">
        <p
          id="cohort-ticker-heading"
          className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 text-center"
        >
          Previous cohorts
        </p>
        <p className="mt-2 text-sm text-gray-600 text-center">
          People in the last three cohorts came from these firms.
        </p>
      </div>

      <div className="relative overflow-hidden py-6 md:py-8">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-24 bg-gradient-to-r from-white to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-24 bg-gradient-to-l from-white to-transparent"
          aria-hidden
        />
        <div className="campus-ticker">
          <div className="campus-ticker-track" style={{ animationDuration: "50s" }}>
            {loop.map((firm, index) => (
              <div key={`${firm.id}-${index}`} className="campus-ticker-item px-5 md:px-8">
                <Image
                  src={firm.logo}
                  alt={firm.name}
                  width={200}
                  height={48}
                  className="h-8 md:h-10 w-auto max-w-[240px] object-contain"
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
