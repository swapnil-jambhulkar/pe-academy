"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GuildFoundation from "@/components/guild/GuildFoundation";
import GuildApply from "@/components/guild/GuildApply";
import GuildChapters from "@/components/guild/GuildChapters";
import GuildFaqSection from "@/components/guild/GuildFaqSection";
import GuildHero from "@/components/guild/GuildHero";
import GuildHowItWorks from "@/components/guild/GuildHowItWorks";
import GuildMemberBenefits from "@/components/guild/GuildMemberBenefits";
import GuildWhoItsFor from "@/components/guild/GuildWhoItsFor";
import {
  GUILD_AIRTABLE_FORM_URL,
} from "@/lib/guild";

function applyHref(): string {
  return GUILD_AIRTABLE_FORM_URL || "#apply";
}

function ApplyButton({ className }: { className?: string }) {
  const href = applyHref();
  const external = Boolean(GUILD_AIRTABLE_FORM_URL);

  return (
    <Button className={className} asChild>
      <Link href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        Apply to join
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  );
}

export default function GuildPageContent() {
  return (
    <div className="bg-white text-black">
      <GuildHero applyButton={<ApplyButton className="bg-black text-white hover:bg-gray-900" />} />

      <GuildFoundation />

      {/* What members get */}
      <GuildMemberBenefits />

      {/* Chapters */}
      <GuildChapters />

      <GuildHowItWorks />

      <GuildWhoItsFor />

      <GuildApply />

      <GuildFaqSection />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            The room is being built now
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Founding members shape the chapters, the events, and the committee.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold px-8" asChild>
            <Link
              href={applyHref()}
              {...(GUILD_AIRTABLE_FORM_URL ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              Apply to join
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
