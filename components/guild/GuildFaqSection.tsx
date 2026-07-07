import GuildFaq from "@/components/guild/GuildFaq";
import GuildSectionHeader, { GuildSection } from "@/components/guild/GuildSection";

export default function GuildFaqSection() {
  return (
    <GuildSection className="bg-gray-50">
      <GuildSectionHeader kicker="Questions" title="Frequently asked questions" />
      <div className="max-w-3xl">
        <GuildFaq />
      </div>
    </GuildSection>
  );
}
