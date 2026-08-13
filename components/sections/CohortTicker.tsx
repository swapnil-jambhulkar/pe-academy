import Image from "next/image";
import { cn } from "@/lib/utils";
import type { CohortFirm } from "@/data/cohort-firms";
import { bigFourFirms, bulgeBracketFirms, peFirms } from "@/data/cohort-firms";

type RowProps = {
  items: readonly CohortFirm[];
  reverse?: boolean;
  duration?: string;
};

function FirmMark({ firm }: { firm: CohortFirm }) {
  if (firm.logo) {
    return (
      <Image
        src={firm.logo}
        alt={firm.name}
        width={180}
        height={40}
        className="h-7 md:h-8 w-auto max-w-[160px] object-contain brightness-0"
        unoptimized
      />
    );
  }

  return (
    <span className="font-heading text-lg md:text-xl font-semibold tracking-tight text-black whitespace-nowrap">
      {firm.name}
    </span>
  );
}

function TickerRow({ items, reverse = false, duration = "50s" }: RowProps) {
  const padded = items.length < 8 ? [...items, ...items] : [...items];
  const loop = [...padded, ...padded];

  return (
    <div className="campus-ticker">
      <div
        className={cn("campus-ticker-track", reverse && "campus-ticker-track--reverse")}
        style={{ animationDuration: duration }}
      >
        {loop.map((firm, index) => (
          <div key={`${firm.id}-${index}`} className="campus-ticker-item px-4 md:px-6">
            <FirmMark firm={firm} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CohortTicker() {
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

      <div className="space-y-0">
        <div className="relative overflow-hidden py-4 md:py-5">
          <EdgeFades />
          <TickerRow items={bigFourFirms} duration="36s" />
        </div>
        <div className="relative overflow-hidden py-4 md:py-5 border-y border-gray-200 bg-white">
          <EdgeFades surface="white" />
          <TickerRow items={bulgeBracketFirms} reverse duration="52s" />
        </div>
        <div className="relative overflow-hidden py-4 md:py-5">
          <EdgeFades />
          <TickerRow items={peFirms} duration="44s" />
        </div>
      </div>
    </section>
  );
}

function EdgeFades({ surface = "gray" }: { surface?: "gray" | "white" }) {
  return (
    <>
      <div
        className={
          surface === "white"
            ? "pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-24 bg-gradient-to-r from-white to-transparent"
            : "pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-24 bg-gradient-to-r from-gray-50 to-transparent"
        }
        aria-hidden
      />
      <div
        className={
          surface === "white"
            ? "pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-24 bg-gradient-to-l from-white to-transparent"
            : "pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-24 bg-gradient-to-l from-gray-50 to-transparent"
        }
        aria-hidden
      />
    </>
  );
}
