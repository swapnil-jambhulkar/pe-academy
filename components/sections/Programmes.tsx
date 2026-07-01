"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, GraduationCap, Layers, MonitorPlay } from "lucide-react";
import { GCPE, PGP, SIMULATOR } from "@/lib/programmes";

export default function Programmes() {
  return (
    <section id="programmes" className="bg-white text-black py-16 md:py-24 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-3">
              Graduate programmes
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black mb-4">
              Institutional tracks. Live deal execution.
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Norland Academy trains private equity professionals on real transactions, not classroom case studies.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            {/* GCPE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white text-black rounded-2xl p-6 md:p-8 border-2 border-white flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {GCPE.duration}
                  </span>
                </div>
                <span className="px-2 py-1 bg-black text-white text-[10px] font-semibold uppercase rounded border border-black">
                  Application-based cohort
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1">{GCPE.tagline}</p>
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">{GCPE.shortName}</h3>
              <p className="text-sm text-gray-600 mb-1 font-medium">{GCPE.name}</p>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{GCPE.narrative}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {GCPE.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-black text-white hover:bg-gray-800 py-5">
                <Link href={GCPE.slug}>
                  Apply for GCPE
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* PGP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="bg-gray-50 border border-gray-300 rounded-2xl p-6 md:p-8 flex flex-col hover:border-black transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Layers className="h-5 w-5 shrink-0 text-black" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {PGP.duration}
                  </span>
                </div>
                <span className="px-2 py-1 bg-black text-white text-[10px] font-semibold uppercase rounded border border-black">
                  Applications open
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1">{PGP.tagline}</p>
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">{PGP.shortName}</h3>
              <p className="text-sm text-gray-700 mb-1 font-medium">{PGP.name}</p>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{PGP.narrative}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {PGP.features.slice(0, 5).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 shrink-0 mt-0.5 text-black" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="outline"
                className="w-full border-black text-black hover:bg-gray-100 py-5"
              >
                <Link href={PGP.slug}>
                  Enquire about PGP
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Simulator strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8 max-w-3xl mx-auto"
          >
            <div className="relative flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left gap-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-black flex items-center justify-center shrink-0">
                  <MonitorPlay className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    Free · Day one execution test
                  </p>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-black mb-2">
                    {SIMULATOR.name}
                  </h3>
                  <p className="text-sm text-gray-700 max-w-xl leading-relaxed">{SIMULATOR.body}</p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="shrink-0 bg-black hover:bg-gray-900 text-white font-semibold w-full md:w-auto"
              >
                <Link href="/simulator">
                  Start simulation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
