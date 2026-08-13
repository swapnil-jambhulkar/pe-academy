import Reveal from "@/components/ui/reveal";

const gaps = [
  { title: "Origination", body: "You have only ever seen deals that arrived. Broker processes, or a target handed down by an MD." },
  { title: "The screen", body: "You can analyse a company once told to. You have never decided in ninety minutes whether one deserves ninety hours." },
  { title: "The owner", body: "You have never sat opposite someone selling the business they built." },
  { title: "The verdict", body: "Nobody has ever voted no on your work in a room." },
  { title: "The structure", body: "You can model a waterfall. You have never designed one." },
  { title: "Monday morning", body: "You disappear at signing. You have never had to answer what happens next." },
];

export default function WhatIsMissing() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">The gap</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-10">What is missing</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {gaps.map((gap, index) => (
              <article
                key={gap.title}
                className="group border border-gray-200 bg-white p-6 hover:border-black hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all duration-300 cursor-default"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-heading font-semibold text-black">{gap.title}</h3>
                  <span className="font-mono text-xs text-gray-300 group-hover:text-black transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{gap.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
