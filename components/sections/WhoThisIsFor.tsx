"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/reveal";

const forYou = [
  "You are three to eight years into transaction services, investment banking, corporate development, or strategy consulting with commercial diligence exposure",
  "You can build a leveraged buyout model unaided",
  "Every recommendation you have made had somebody senior standing behind it",
  "You have never found a company nobody else was looking at",
];

const notForYou = [
  "You are a student or recent graduate",
  "You need leveraged buyout modelling taught from first principles",
  "Your first question is what percentage of graduates get placed",
];

type Tab = "for" | "not";

export default function WhoThisIsFor() {
  const [tab, setTab] = useState<Tab>("for");
  const items = tab === "for" ? forYou : notForYou;

  return (
    <section id="audience" className="py-16 md:py-24 bg-gray-50 border-b border-gray-200 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Audience</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-8">Who this is for</h2>

          <div
            role="tablist"
            aria-label="Audience fit"
            className="inline-flex border border-black mb-8"
          >
            <button
              type="button"
              role="tab"
              aria-selected={tab === "for"}
              className={cn(
                "px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors",
                tab === "for" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
              )}
              onClick={() => setTab("for")}
            >
              For you
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "not"}
              className={cn(
                "px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors border-l border-black",
                tab === "not" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
              )}
              onClick={() => setTab("not")}
            >
              Not for you
            </button>
          </div>

          <div role="tabpanel" className="bg-white border border-gray-200 p-6 md:p-8 min-h-[220px]">
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              {items.map((item, index) => (
                <li key={item} className="flex gap-4 items-start">
                  <span className="font-mono text-xs text-gray-400 mt-1 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-sm text-gray-500">We do not place anyone and we do not claim to.</p>
        </Reveal>
      </div>
    </section>
  );
}
