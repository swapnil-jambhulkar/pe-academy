import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROGRAMME } from "@/lib/programmes";

export default function AboutPage() {
  return (
    <div>
      <section className="pt-28 pb-16 bg-white text-black border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">About</p>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-black mb-6">
            About Norland Academy
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            By Stator Capital
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-6 text-gray-800 leading-relaxed">
          <p>
            Norland Academy trains mid career deal professionals to think and act as principals. Not as analysts
            supporting somebody else&apos;s thesis, but as the person who sources the target, prices it, structures it, and
            defends the recommendation in a room that votes.
          </p>
          <p>
            The Principal Programme is the core offering: twelve weeks, five seats, by application. Participants build a
            proprietary target universe among {PROGRAMME.dealUniverse}, run real owner outreach, write an investment
            memorandum, and face an external investment committee of people who invest for a living.
          </p>
          <p>
            The curriculum is benchmarked to lower mid-market and independent-sponsor process: {PROGRAMME.dealUniverseDetail}
          </p>
          <p>
            Norland Academy is operated by Stator Capital, a UK holding company acquiring owner managed businesses in the
            lower middle market. Stator is working towards its first completion. The programme does not rest on a record
            of closed transactions and does not claim one. It rests on participants doing real work on real companies,
            judged by an external committee.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-black mb-6">What we offer</h2>
          <ul className="space-y-4 text-gray-800 leading-relaxed list-disc pl-5">
            <li>
              <span className="font-semibold text-black">The Principal Programme</span>: a selective twelve week cohort
              for professionals who have executed deals and never owned one
            </li>
            <li>
              <span className="font-semibold text-black">Day One Analyst Simulator</span>: a free mock secure workstation
              to test deal judgment before you apply
            </li>
            <li>
              <span className="font-semibold text-black">The Forum</span>: a community for deal professionals working
              through sourcing, screening, and structuring questions
            </li>
          </ul>
          <p className="mt-8 text-sm text-gray-500">
            We do not place anyone, do not guarantee outcomes, and do not claim placement rates.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6">
            Read the programme or apply
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="bg-white text-black hover:bg-gray-100" asChild>
              <Link href="/pgp">
                Read the PGP
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
              <Link href="/apply">Apply</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
