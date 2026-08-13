import Reveal from "@/components/ui/reveal";

const outcomes = [
  "A proprietary target universe in a sector you chose, forty names",
  "Three screened targets with written kill reasons",
  "One investment memorandum, defended live and voted on",
  "A structure and a defended entry price",
  "A hundred day plan",
  "Three investors who have watched you think for three hours",
];

export default function WhatYouLeaveWith() {
  return (
    <section id="outcomes" className="py-16 md:py-24 bg-gray-50 border-b border-gray-200 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Deliverables</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-10">What you leave with</h2>
          <ol className="border border-gray-200 bg-white divide-y divide-gray-200 max-w-3xl">
            {outcomes.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 p-4 md:p-5 hover:bg-black hover:text-white transition-colors duration-300 group"
              >
                <span className="font-mono text-sm text-gray-400 group-hover:text-white/60 tabular-nums w-8">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
