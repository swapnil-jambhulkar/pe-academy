import { Check, X } from "lucide-react";
import { GUILD, guildForList, guildNotForList } from "@/lib/guild";
import GuildSectionHeader, { GuildSection } from "@/components/guild/GuildSection";
import { guildCardWhite } from "@/components/guild/guild-ui";

export default function GuildWhoItsFor() {
  return (
    <GuildSection className="bg-gray-50">
      <GuildSectionHeader
        kicker="Membership fit"
        title="Who the forum is for"
        description={`${GUILD.name} is selective, not exclusive. We review for seriousness, not pedigree. If you are building toward buyout finance, you likely belong in this community.`}
      />

      <div className="grid lg:grid-cols-2 gap-6">
        <article className={guildCardWhite}>
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">For</p>
          <h3 className="text-xl md:text-2xl font-heading font-bold text-black leading-tight mb-6">
            Practitioners and serious candidates
          </h3>
          <ul className="space-y-3">
            {guildForList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                <Check className="h-4 w-4 shrink-0 mt-0.5 text-black" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-black bg-black text-white p-6 md:p-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase mb-4">Not for</p>
          <h3 className="text-xl md:text-2xl font-heading font-bold text-white leading-tight mb-6">
            Misaligned expectations
          </h3>
          <ul className="space-y-3">
            {guildNotForList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/85 leading-relaxed">
                <X className="h-4 w-4 shrink-0 mt-0.5 text-white/50" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </GuildSection>
  );
}
