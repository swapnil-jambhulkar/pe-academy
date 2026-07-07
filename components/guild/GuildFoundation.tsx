import { guildInsiderPillars } from "@/lib/guild";
import GuildSectionHeader, { GuildSection } from "@/components/guild/GuildSection";
import { guildCard } from "@/components/guild/guild-ui";

export default function GuildFoundation() {
  return (
    <GuildSection className="bg-white">
      <GuildSectionHeader
        kicker="The forum standard"
        title="A practitioner forum, built for access"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {guildInsiderPillars.map((pillar) => (
          <article key={pillar.title} className={guildCard}>
            <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase tabular-nums mb-4">
              {pillar.index}
            </p>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-black leading-tight mb-3">
              {pillar.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{pillar.body}</p>
          </article>
        ))}
      </div>
    </GuildSection>
  );
}
