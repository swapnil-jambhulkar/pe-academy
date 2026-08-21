import Reveal from "@/components/ui/reveal";
import CapabilityBars from "@/components/charts/CapabilityBars";
import { PROGRAMME } from "@/lib/programmes";

const gaps = [
  {
    title: "Origination",
    body: "You have only ever seen deals that arrived. Broker processes, or a target handed down by an MD. Owner-managed businesses do not come with a CIM.",
  },
  {
    title: "The screen",
    body: "You can analyse a company once told to. You have never decided in ninety minutes whether one deserves ninety hours.",
  },
  {
    title: "The owner",
    body: "You have never sat opposite someone selling the business they built, without an adviser in the room.",
  },
  {
    title: "The verdict",
    body: "Nobody has ever voted no on your work in a room where you owned the recommendation.",
  },
  {
    title: "The structure",
    body: "You can model a waterfall. You have never designed one against what a mid-market lender will actually underwrite.",
  },
  {
    title: "Monday morning",
    body: "You disappear at signing. You have never written the hundred day plan the owner will run.",
  },
];

export default function WhatIsMissing() {
  return (
    <section id="gap" className="py-16 md:py-24 bg-white border-b border-gray-200 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">The gap</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">What is missing</h2>
          <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-10">
            Strong operators are often missing the judgements that sit with the person who owns a proprietary deal.
            The programme is built for that gap on {PROGRAMME.dealUniverse}, not mega-fund auction process.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 mb-10">
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-4 h-full">
              {gaps.map((gap, index) => (
                <article
                  key={gap.title}
                  className="group border border-gray-200 bg-white p-5 hover:border-black hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-heading font-semibold text-black">{gap.title}</h3>
                    <span className="font-mono text-xs text-gray-300 group-hover:text-black transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{gap.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <CapabilityBars />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
