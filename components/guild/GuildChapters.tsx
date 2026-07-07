"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  getChapterEvents,
  getGuildEventById,
  guildChapters,
  type GuildChapterFilter,
} from "@/lib/guild";
import GuildSectionHeader, { GuildSection } from "@/components/guild/GuildSection";
import { guildCardWhite } from "@/components/guild/guild-ui";

type ChapterCity = Extract<GuildChapterFilter, "Mumbai" | "London">;

function ChapterCard({
  city,
  status,
  detail,
  featuredEventId,
}: (typeof guildChapters)[number]) {
  const chapterEvents = useMemo(() => getChapterEvents(city as ChapterCity), [city]);
  const featuredIndex = Math.max(
    0,
    chapterEvents.findIndex((event) => event.id === featuredEventId)
  );
  const [activeIndex, setActiveIndex] = useState(featuredIndex);
  const activeEvent = chapterEvents[activeIndex] ?? getGuildEventById(featuredEventId) ?? chapterEvents[0];

  return (
    <article className={cn(guildCardWhite, "group overflow-hidden p-0 hover:border-black")}>
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        {activeEvent ? (
          <Image
            key={activeEvent.id}
            src={activeEvent.src}
            alt={activeEvent.alt}
            fill
            className="object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-1.5 text-white/90 text-xs font-medium">
            <MapPin className="h-3.5 w-3.5" />
            {city} chapter
          </div>
          <span className="shrink-0 px-2 py-1 bg-black text-white text-[10px] font-semibold uppercase rounded border border-black">
            {status}
          </span>
        </div>
        {activeEvent ? (
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="font-heading text-xl font-bold leading-tight">{activeEvent.title}</p>
            <p className="flex items-center gap-1.5 text-sm text-white/80 mt-1">
              <Calendar className="h-3.5 w-3.5" />
              {activeEvent.date}
            </p>
          </div>
        ) : null}
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-heading font-bold text-black mb-2">{city}</h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-5">{detail}</p>

        {chapterEvents.length > 1 ? (
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2">
              Chapter event format
            </p>
            <div className="flex gap-2">
              {chapterEvents.map((event, index) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${event.title}`}
                  aria-pressed={activeIndex === index}
                  className={cn(
                    "relative h-14 w-20 overflow-hidden rounded-lg border transition-all",
                    activeIndex === index
                      ? "border-black ring-2 ring-black ring-offset-2"
                      : "border-gray-200 opacity-75 hover:opacity-100 hover:border-gray-400"
                  )}
                >
                  <Image src={event.src} alt="" fill className="object-cover grayscale" sizes="80px" />
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function GuildChapters() {
  return (
    <GuildSection className="bg-white">
      <GuildSectionHeader
        kicker="City chapters"
        title="Chapters"
        description="Monthly in-person forum events in each city. Deal teardowns, practitioner speakers, and a filtered community of peers."
      />

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {guildChapters.map((chapter) => (
          <ChapterCard key={chapter.city} {...chapter} />
        ))}
      </div>

      <p className="text-sm text-gray-500">
        Delhi NCR and Bengaluru open based on member demand. Tell us your city in the application.
      </p>
    </GuildSection>
  );
}
