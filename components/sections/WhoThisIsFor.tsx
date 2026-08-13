"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";

type Persona = {
  id: string;
  seat: string;
  role: string;
  years: string;
  hook: string;
  already: string;
  missing: string;
  fit: string;
};

const personas: Persona[] = [
  {
    id: "tas",
    seat: "01",
    role: "Transaction services",
    years: "3 to 8 years",
    hook: "You have written the quality of earnings. Someone else signed the letter.",
    already: "You can take a CIM apart in a day and build the model without a template.",
    missing: "The partner still owns the client. You have never chosen the company.",
    fit: "PGP is for the person who can execute and has never originated.",
  },
  {
    id: "ib",
    seat: "02",
    role: "Investment banking",
    years: "Associate to VP",
    hook: "You have closed deals that arrived on the screen. You have never found one.",
    already: "Live processes, management meetings, a model that holds up in a room.",
    missing: "The MD brought the mandate. You have never sat opposite an owner selling what they built.",
    fit: "PGP is for the banker who has executed and never owned the recommendation.",
  },
  {
    id: "corpdev",
    seat: "03",
    role: "Corporate development",
    years: "Mid career",
    hook: "You run process on businesses the CEO already wants.",
    already: "You can diligence a target once it is on the list and brief the board cleanly.",
    missing: "You do not pick the name. You have never built a proprietary universe.",
    fit: "PGP is for the corp dev lead who wants to decide what deserves ninety hours.",
  },
  {
    id: "diligence",
    seat: "04",
    role: "Commercial diligence",
    years: "Strategy or TAS adjacent",
    hook: "You have been in the VDR. You have never sat on the side that writes the cheque.",
    already: "Concentration, payer mix, kill arguments. You can brief a partner in ninety minutes.",
    missing: "Nobody has ever voted no on your work as the person accountable for the deal.",
    fit: "PGP is for the diligence professional who wants to defend a live investment committee.",
  },
];

const notForYou = [
  {
    seat: "A",
    role: "Student or recent graduate",
    line: "This is not an entry programme. Come back when you have executed live work.",
  },
  {
    seat: "B",
    role: "Need modelling taught from scratch",
    line: "You must be able to build a leveraged buyout model unaided before you apply.",
  },
  {
    seat: "C",
    role: "Asking about placement rates",
    line: "We do not place anyone and we do not claim to. If that is the first question, this is not for you.",
  },
];

export default function WhoThisIsFor() {
  const [activeId, setActiveId] = useState(personas[0].id);
  const active = personas.find((p) => p.id === activeId) ?? personas[0];

  return (
    <section id="audience" className="py-16 md:py-24 bg-gray-50 border-b border-gray-200 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Audience</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-3">Who this is for</h2>
          <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-10">
            Select the seat that looks like yours.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {personas.map((persona) => {
            const selected = persona.id === activeId;
            return (
              <button
                key={persona.id}
                type="button"
                onClick={() => setActiveId(persona.id)}
                aria-pressed={selected}
                className={cn(
                  "text-left border p-5 transition-all duration-300 bg-white",
                  selected
                    ? "border-black shadow-[4px_4px_0_0_#000] -translate-y-0.5"
                    : "border-gray-200 hover:border-black"
                )}
              >
                <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-gray-400 mb-3">
                  {persona.seat} · {persona.years}
                </p>
                <h3 className="text-lg font-heading font-semibold text-black leading-snug">
                  {persona.role}
                </h3>
              </button>
            );
          })}
        </div>

        <div
          key={active.id}
          className="border border-black bg-white p-6 md:p-8 mb-10"
          aria-live="polite"
        >
          <p className="text-xl md:text-2xl font-heading font-semibold text-black leading-snug mb-6 max-w-3xl">
            {active.hook}
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-gray-400 mb-2">
                You already
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">{active.already}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-gray-400 mb-2">
                What is missing
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">{active.missing}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-gray-400 mb-2">
                Fit
              </p>
              <p className="text-sm text-gray-800 leading-relaxed mb-4">{active.fit}</p>
              <Button size="sm" className="bg-black text-white hover:bg-gray-900" asChild>
                <Link href="/apply">Apply</Link>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-4">
            This is not for you if
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            {notForYou.map((item) => (
              <article key={item.seat} className="border border-gray-200 bg-white p-5">
                <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-gray-400 mb-2">
                  {item.seat}
                </p>
                <h3 className="text-base font-heading font-semibold text-black mb-2">{item.role}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.line}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
