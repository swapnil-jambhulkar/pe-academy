import Reveal from "@/components/ui/reveal";
import DealArcChart from "@/components/charts/DealArcChart";
import CurriculumTimeline from "@/components/charts/CurriculumTimeline";

export default function ProgrammeArc() {
  return (
    <section id="arc" className="py-16 md:py-24 bg-gray-50 border-b border-gray-200 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">
            How PGP works
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">
            The twelve week pack
          </h2>
          <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-10">
            Same structure as a live deal room. Open a workstream, then a file. Thesis, diligence, structure,
            then the IC pack.
          </p>
        </Reveal>

        <div className="space-y-6">
          <Reveal delayMs={80}>
            <DealArcChart />
          </Reveal>
          <Reveal delayMs={120}>
            <CurriculumTimeline />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
