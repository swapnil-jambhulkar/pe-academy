import GuildLogoTicker from "@/components/guild/GuildLogoTicker";
import { guildMbaCampuses } from "@/lib/guild";

export default function GuildCampusTicker() {
  return (
    <GuildLogoTicker
      items={guildMbaCampuses}
      label="Representative MBA campuses"
      labelId="campus-ticker-label"
      className="mb-10 md:mb-12"
      surface="gray"
    />
  );
}
