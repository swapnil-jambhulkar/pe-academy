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
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">The gap</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-10">What is missing</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {gaps.map((gap) => (
              <article key={gap.title} className="border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-heading font-semibold text-black mb-2">{gap.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{gap.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
