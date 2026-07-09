import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GuildSection } from "@/components/guild/GuildSection";
import { guildHeading, guildKicker, guildLead } from "@/components/guild/guild-ui";
import { GUILD, GUILD_APPLY_FORM_URL } from "@/lib/guild";

export default function GuildApply() {
  return (
    <GuildSection id="apply" className="bg-gray-50 scroll-mt-28">
      <div className="text-center mb-10 md:mb-12">
        <p className={guildKicker}>Membership</p>
        <h2 className={`${guildHeading} mb-4`}>Apply to join the {GUILD.shortName}</h2>
        <p className={`${guildLead} max-w-2xl mx-auto`}>
          Free membership in the forum and community. Every application reviewed within 72 hours.
        </p>
        <div className="w-12 md:w-16 h-px bg-black mx-auto mt-6" />
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-black border border-black rounded-2xl p-10 md:p-14 text-center">
          <p className="text-sm md:text-base text-white/70 mb-8 max-w-md mx-auto leading-relaxed">
            Free membership. Every application reviewed within 72 hours.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 font-semibold px-8"
            asChild
          >
            <Link href={GUILD_APPLY_FORM_URL} target="_blank" rel="noopener noreferrer">
              Apply to join the {GUILD.shortName}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6 max-w-md mx-auto leading-relaxed">
          Your information is held by Norland Academy for community administration. See our{" "}
          <Link href="/privacy-policy" className="underline text-black">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </GuildSection>
  );
}
