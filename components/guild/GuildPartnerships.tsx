import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  guildPartnershipAudience,
  guildPartnershipOfferings,
} from "@/lib/guild";
import GuildCampusTicker from "@/components/guild/GuildCampusTicker";
import GuildSectionHeader, { GuildSection } from "@/components/guild/GuildSection";
import { guildCard } from "@/components/guild/guild-ui";

const offeringIcons = [GraduationCap, Users, Building2] as const;

export default function GuildPartnerships() {
  return (
    <GuildSection id="partnerships" className="bg-white scroll-mt-28">
      <GuildSectionHeader
        kicker="Campus & university partnerships"
        title="Bring the forum to your campus"
        description="Norland Academy partners with universities, finance societies, and careers teams to give serious students access to a practitioner-led private equity forum. No paid course requirement. Application still required."
      />

      <GuildCampusTicker />

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {guildPartnershipOfferings.map((item, index) => {
          const Icon = offeringIcons[index] ?? GraduationCap;
          return (
            <article key={item.title} className={guildCard}>
              <div className="h-10 w-10 rounded-lg bg-black flex items-center justify-center mb-5">
                <Icon className="h-5 w-5 text-white" aria-hidden />
              </div>
              <h3 className="text-xl font-heading font-bold text-black leading-tight mb-3">{item.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
            </article>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
        <article className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-4">Who we partner with</p>
          <ul className="space-y-3">
            {guildPartnershipAudience.map((item) => (
              <li key={item} className="text-sm text-gray-700 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-black bg-black text-white p-6 md:p-8 flex flex-col justify-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase mb-3">Partnership enquiries</p>
          <h3 className="text-xl md:text-2xl font-heading font-bold leading-tight mb-3">
            Discuss a campus or university partnership
          </h3>
          <p className="text-sm text-white/75 leading-relaxed mb-6">
            Tell us your institution, society, or careers team. We will respond with chapter format options and next
            steps.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 font-semibold w-full sm:w-auto" asChild>
            <Link href="/contact">
              Contact partnerships
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </article>
      </div>
    </GuildSection>
  );
}
