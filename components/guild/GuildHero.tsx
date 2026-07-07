"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GUILD, guildEventImages, type GuildChapterFilter } from "@/lib/guild";

const ROTATE_MS = 5500;

const chapterFilters: GuildChapterFilter[] = ["All", "Mumbai", "London"];

type GuildHeroProps = {
  applyButton: React.ReactNode;
};

export default function GuildHero({ applyButton }: GuildHeroProps) {
  const [activeFilter, setActiveFilter] = useState<GuildChapterFilter>("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const filteredEvents = useMemo(() => {
    if (activeFilter === "All") return [...guildEventImages];
    return guildEventImages.filter((event) => event.chapter === activeFilter);
  }, [activeFilter]);

  const activeEvent = filteredEvents[activeIndex] ?? filteredEvents[0];

  const selectEvent = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const selectFilter = useCallback((filter: GuildChapterFilter) => {
    setActiveFilter(filter);
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    if (paused || filteredEvents.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % filteredEvents.length);
    }, ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [paused, filteredEvents.length, activeFilter]);

  return (
    <section
      id="guild-hero"
      className="min-h-screen flex items-center pt-28 pb-20 bg-white text-black border-b border-gray-200 scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-4">{GUILD.kicker}</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.02] mb-6 text-black">
              {GUILD.heroTitle}
            </h1>
            <p className="text-base text-gray-800 leading-relaxed mb-4 max-w-3xl">{GUILD.heroLead}</p>
            <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-3xl">{GUILD.heroDetail}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { label: "Private equity forum", icon: Users },
                { label: "Free community", icon: MapPin },
                { label: "Member group", icon: Calendar },
              ].map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700"
                >
                  <Icon className="h-3.5 w-3.5 text-gray-500" />
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-4">
              {applyButton}
              <Button variant="outline" className="border-black text-black hover:bg-gray-100" asChild>
                <Link href="#how-it-works">
                  See how it works
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500">{GUILD.badge}. Every application is reviewed within 72 hours.</p>
          </div>

          <div
            className="lg:justify-self-end lg:w-full lg:max-w-md lg:border-l lg:border-gray-300 lg:pl-8 lg:mt-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className="flex items-center justify-between gap-3 mb-4">
              <p className="text-xs tracking-[0.18em] uppercase text-gray-500">Upcoming chapter events</p>
              <div className="flex gap-1.5" role="tablist" aria-label="Filter events by chapter">
                {chapterFilters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={activeFilter === filter}
                    onClick={() => selectFilter(filter)}
                    className={cn(
                      "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide transition-colors",
                      activeFilter === filter
                        ? "bg-black text-white"
                        : "border border-gray-300 bg-white text-gray-600 hover:border-black hover:text-black"
                    )}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-300 bg-gray-100">
              <AnimatePresence mode="wait">
                {activeEvent ? (
                  <motion.div
                    key={activeEvent.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeEvent.src}
                      alt={activeEvent.alt}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
                      sizes="(max-width: 1024px) 100vw, 420px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 mb-1">
                        {activeEvent.location}
                      </p>
                      <p className="font-heading text-xl font-bold leading-tight">{activeEvent.title}</p>
                      <p className="text-sm text-white/80 mt-1">{activeEvent.date}</p>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <div className="grid grid-cols-4 gap-2 mt-3">
              {filteredEvents.map((event, index) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => selectEvent(index)}
                  aria-label={`Show ${event.title}`}
                  aria-pressed={activeIndex === index}
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-lg border transition-all",
                    activeIndex === index
                      ? "border-black ring-2 ring-black ring-offset-2"
                      : "border-gray-200 opacity-80 hover:opacity-100 hover:border-gray-400"
                  )}
                >
                  <Image src={event.src} alt="" fill className="object-cover grayscale" sizes="100px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
