import { GUILD, guildMemberBenefits } from "@/lib/guild";
import GuildSectionHeader, { GuildSection } from "@/components/guild/GuildSection";
import { guildCard } from "@/components/guild/guild-ui";

export default function GuildMemberBenefits() {
  return (
    <GuildSection className="bg-gray-50">
      <GuildSectionHeader
        kicker="Member access"
        title="What members get"
        description={`${GUILD.name} is a private equity forum and community for people serious about buyout finance. Not a course catalogue. A practitioner group with a monthly cadence and a membership bar.`}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {guildMemberBenefits.map((item) => (
          <article key={item.title} className={guildCard}>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-black leading-tight mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
          </article>
        ))}
      </div>
    </GuildSection>
  );
}
