import GuildLogoTicker from "@/components/guild/GuildLogoTicker";
import GuildTextTicker from "@/components/guild/GuildTextTicker";
import { guildHeroProfessions, guildPeFirms } from "@/lib/guild";

export default function GuildHeroTickers() {
  return (
    <div className="mt-16 md:mt-20 -mx-4 sm:-mx-6 lg:-mx-8">
      <GuildLogoTicker
        items={guildPeFirms}
        label="Representative global private equity firms"
        labelId="pe-firms-ticker-label"
        surface="white"
      />
      <GuildTextTicker
        items={guildHeroProfessions}
        label="Who is in the room"
        labelId="hero-professions-ticker-label"
      />
    </div>
  );
}
