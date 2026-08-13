"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
import { PAID_PROGRAMME_NOTE, PROGRAMME, SIMULATOR } from "@/lib/programmes";

const programmeFeatures = [
  "Source your own acquisition target in a sector you choose",
  "Written deliverables every week with live session defence",
  "External investment committee that reads, questions, and votes",
  "Investment memorandum, structure, and hundred day plan",
];

const simulatorFeatures = [
  "Three live deal judgment scenarios",
  "Mock secure workstation: Outlook and VDR",
  "Free, self-paced, before you apply",
  "Tests execution under time pressure",
];

export default function Solution() {
  return (
    <section id="solution" className="bg-black text-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-sm font-semibold">Programme and simulator</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Choose your entry point
            </h2>

            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Try the free simulator first, or read the full programme if you are ready to apply.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/20 rounded-2xl p-6 md:p-8 hover:border-white/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1.5 bg-white/10 text-white/80 text-xs font-semibold rounded-full border border-white/20">
                  Free
                </span>
                <span className="px-3 py-1.5 bg-white/10 text-white/80 text-xs font-semibold rounded-full border border-white/20">
                  Self-paced
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
                {SIMULATOR.name}
              </h3>

              <p className="text-white/60 text-sm mb-6">{SIMULATOR.tagline}</p>

              <div className="space-y-3 mb-6">
                {simulatorFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-white/60 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 py-5"
                asChild
              >
                <Link href={SIMULATOR.slug}>
                  Open the simulator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white text-black rounded-2xl p-6 md:p-8 border-2 border-white"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1.5 bg-black text-white text-xs font-semibold rounded-full">
                  Twelve weeks
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                  Five seats · By application
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-heading font-bold text-black mb-2">
                {PROGRAMME.name}
              </h3>

              <p className="text-gray-600 text-sm mb-2">{PROGRAMME.tagline}</p>
              <p className="text-xs text-gray-500 mb-6">{PAID_PROGRAMME_NOTE}</p>

              <div className="space-y-3 mb-6">
                {programmeFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-black flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <Button variant="default" className="w-full bg-black text-white hover:bg-gray-800 py-5" asChild>
                  <Link href={PROGRAMME.applySlug}>
                    Apply
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="w-full text-xs text-gray-600 hover:text-black" asChild>
                  <Link href={PROGRAMME.slug}>Read the programme</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-10"
          >
            <div className="flex items-center justify-center gap-2 text-white/50 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>The Principal Programme is paid. The Day One Simulator is free. Most applications are declined.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
