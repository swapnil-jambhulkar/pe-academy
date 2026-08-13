import Image from "next/image";
import Reveal from "@/components/ui/reveal";

export default function WhoRunsIt() {
  return (
    <section id="faculty" className="py-16 md:py-24 bg-white border-b border-gray-200 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Faculty</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-10">Who runs it</h2>
          <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-start">
            <div className="relative overflow-hidden border border-gray-200 group">
              <Image
                src="/images/swapnil.jpg"
                alt="Swapnil Jambhulkar, founder of Norland Academy and Stator Capital"
                width={220}
                height={264}
                className="w-40 md:w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p>
                Swapnil Jambhulkar founded Norland Academy and Stator Capital, a UK holding company acquiring owner
                managed businesses in the lower middle market.
              </p>
              <p>
                Stator is working towards its first completion. The programme does not rest on a record of closed
                transactions and does not claim one. It rests on participants doing real work on real companies, judged
                by an external committee of people who invest for a living.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
