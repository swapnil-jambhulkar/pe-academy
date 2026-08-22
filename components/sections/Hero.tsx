import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PROGRAMME } from "@/lib/programmes";
import HeroVideo from "@/components/sections/HeroVideo";

const HERO_VIDEO = "/videos/hero-ic-committee.mp4";
const HERO_POSTER = "/videos/hero-ic-committee.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] border-b border-gray-200 overflow-hidden scroll-mt-24 bg-white text-black"
    >
      <link rel="preload" as="image" href={HERO_POSTER} fetchPriority="high" />
      <link rel="preload" as="video" href={HERO_VIDEO} type="video/mp4" fetchPriority="high" />

      <div className="grid min-h-[85vh] lg:grid-cols-2">
        <div className="relative flex items-center pt-28 pb-16 lg:pb-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div aria-hidden className="pointer-events-none absolute left-0 top-28 bottom-16 lg:bottom-20 w-1 bg-black" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 max-w-2xl relative">
            <div className="inline-flex flex-wrap items-center gap-3 mb-6">
              <span className="border border-black bg-black text-white px-3 py-1 text-xs font-bold tracking-[0.2em] uppercase">
                {PROGRAMME.shortName}
              </span>
              <span className="text-xs tracking-[0.16em] uppercase text-gray-500 font-semibold">
                {PROGRAMME.name}
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6 text-balance">
              You have executed deals and never owned one.
            </h1>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-8 max-w-xl">
              Source a proprietary £5 to £30 million UK target, structure the deal, and defend it to a voting
              investment committee.
            </p>
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
          </div>
        </div>

        <div className="relative min-h-[42vh] lg:min-h-full border-t lg:border-t-0 lg:border-l border-gray-200">
          <HeroVideo
            src={HERO_VIDEO}
            poster={HERO_POSTER}
            label="Investment committee reviewing charts and papers around a boardroom table"
          />
        </div>
      </div>
    </section>
  );
}

