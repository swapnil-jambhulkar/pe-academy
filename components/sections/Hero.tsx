import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { PROGRAMME } from "@/lib/programmes";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-28 pb-20 bg-white text-black border-b border-gray-200 overflow-hidden scroll-mt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute left-0 top-28 bottom-20 w-1 bg-black" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative">
        <Reveal>
          <div className="inline-flex flex-wrap items-center gap-3 mb-6">
            <span className="border border-black bg-black text-white px-3 py-1 text-xs font-bold tracking-[0.2em] uppercase">
              {PROGRAMME.shortName}
            </span>
            <span className="text-xs tracking-[0.16em] uppercase text-gray-500 font-semibold">
              {PROGRAMME.name}
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 max-w-4xl text-balance">
            You have executed deals and never owned one.
          </h1>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-4 max-w-3xl">
            {PROGRAMME.fullName} is a twelve week cohort for mid career deal professionals. You source a proprietary
            acquisition target among {PROGRAMME.dealUniverse}, price it, structure it, and defend the recommendation to
            an investment committee that votes.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-3xl">{PROGRAMME.dealUniverseDetail}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 mb-8">
            <span>{PROGRAMME.duration}</span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span>{PROGRAMME.seats} seats</span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span>By application</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              className="bg-black text-white hover:bg-gray-900 transition-transform hover:-translate-y-0.5"
              asChild
            >
              <Link href={PROGRAMME.slug}>
                Read the PGP
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-gray-100" asChild>
              <Link href="/simulator">Try the Day One Simulator</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
