import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SIMULATOR } from "@/lib/programmes";
import { GUILD } from "@/lib/guild";
import Reveal from "@/components/ui/reveal";

export default function FreeBeforeYouApply() {
  return (
    <section id="free" className="py-16 md:py-24 bg-gray-50 border-b border-gray-200 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Before you apply</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-10">Free before you apply</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="group border border-gray-200 bg-white p-6 md:p-8 flex flex-col hover:border-black hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all duration-300">
              <h3 className="text-xl font-heading font-bold text-black mb-2">{SIMULATOR.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{SIMULATOR.tagline}</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-1">{SIMULATOR.body}</p>
              <Button variant="outline" className="w-full sm:w-auto border-black group-hover:bg-black group-hover:text-white" asChild>
                <Link href={SIMULATOR.slug}>
                  Open the simulator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </article>
            <article className="group border border-gray-200 bg-white p-6 md:p-8 flex flex-col hover:border-black hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all duration-300">
              <h3 className="text-xl font-heading font-bold text-black mb-2">{GUILD.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{GUILD.tagline}</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-1">{GUILD.body}</p>
              <Button variant="outline" className="w-full sm:w-auto border-black group-hover:bg-black group-hover:text-white" asChild>
                <Link href={GUILD.slug}>
                  Visit the Forum
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
