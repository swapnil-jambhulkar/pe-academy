import Image from "next/image";
import { programmeToolPhases, programmeTools, type ProgrammeToolPhase } from "@/data/programme-tools";

function toolsForPhase(phase: ProgrammeToolPhase) {
  return programmeTools.filter(
    (tool) => tool.phases.includes(phase) || tool.phases.includes("All")
  );
}

export default function ProgrammeTools() {
  return (
    <section className="py-10 md:py-12 bg-white border-b border-gray-200" id="tools">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-2">Desk stack</p>
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-black mb-2">
          Tools across the twelve weeks
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mb-6">
          Origination databases, VDR, modelling, and live defence. Seat access is confirmed at offer stage. Logos identify
          the tools used on the desk, not exclusive vendor partnerships.
        </p>

        <div className="space-y-5">
          {programmeToolPhases.map((phase) => {
            const tools = toolsForPhase(phase.id);
            return (
              <div key={phase.id} className="border border-gray-200">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 bg-gray-50 px-4 py-2.5">
                  <h3 className="text-sm font-heading font-semibold text-black">{phase.label}</h3>
                  <p className="text-[10px] uppercase tracking-[0.14em] font-semibold text-gray-500 tabular-nums">
                    {tools.length} tools
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-gray-200">
                  {tools.map((tool) => (
                    <li key={`${phase.id}-${tool.id}`} className="bg-white px-3 py-4 flex flex-col items-start gap-2">
                      <Image
                        src={tool.logo}
                        alt={tool.name}
                        width={140}
                        height={32}
                        className="h-6 w-auto max-w-[130px] object-contain object-left opacity-90"
                        unoptimized
                      />
                      <p className="text-[11px] text-gray-600 leading-snug">{tool.use}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
