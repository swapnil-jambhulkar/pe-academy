import Link from "next/link";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import { PROGRAMME } from "@/lib/programmes";

export default function FinalCTA() {
  return (
    <section id="apply" className="relative bg-black text-white py-16 md:py-24 overflow-hidden scroll-mt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">
            {PROGRAMME.shortName}
          </p>
          <h2 className="font-heading font-bold text-white text-2xl sm:text-4xl md:text-5xl mb-8">
            Five seats. Applications are reviewed individually and most are declined.
          </h2>
          <Button
            size="lg"
            asChild
            className="bg-white text-black hover:bg-gray-100 font-semibold transition-transform hover:-translate-y-0.5"
          >
            <Link href="/apply">Apply for PGP</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
