import { guildHowItWorks } from "@/lib/guild";
import GuildSectionHeader, { GuildSection } from "@/components/guild/GuildSection";
import { guildCardWhite } from "@/components/guild/guild-ui";

export default function GuildHowItWorks() {
  return (
    <GuildSection id="how-it-works" className="bg-white scroll-mt-28">
      <GuildSectionHeader
        kicker="Membership process"
        title="How it works"
        description="Three steps from application to your city chapter. Free membership in the forum and community. Every application reviewed within 72 hours."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {guildHowItWorks.map((step, index) => (
          <article key={step.title} className={guildCardWhite}>
            <p className="text-3xl font-heading font-bold text-gray-300 tabular-nums leading-none mb-4">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-black leading-tight mb-3">
              {step.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{step.body}</p>
          </article>
        ))}
      </div>
    </GuildSection>
  );
}
