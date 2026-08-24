"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PROGRAMME, SIMULATOR } from "@/lib/programmes";

const keyDifferences = [
  { feature: "Live deal judgment scenarios", simulator: true, programme: false },
  { feature: "Own target universe and sector choice", simulator: false, programme: true },
  { feature: "Written deliverables every week", simulator: false, programme: true },
  { feature: "External investment committee vote", simulator: false, programme: true },
];

const sharedFeatures = [
  "Deal mechanics orientation",
  "Screening and diligence framing",
  "Structure and pricing concepts",
  "Self-assessment before applying",
];

export default function Comparison() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-black mb-3">
            Simulator or programme
          </h2>
          <p className="text-base text-gray-700">
            The simulator tests judgment in an hour. The programme builds a full acquisition case over twelve weeks.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold mb-4 text-center">
              Shared focus
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {sharedFeatures.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="border-2 border-gray-200 rounded-lg overflow-hidden mb-6">
            <div className="grid grid-cols-3 gap-0 bg-gray-50 border-b-2 border-gray-300">
              <div className="p-4">
                <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Feature</p>
              </div>
              <div className="p-4 text-center border-l border-gray-300">
                <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Simulator</p>
                <p className="text-xs text-gray-400 mt-1">Free · Self-paced</p>
              </div>
              <div className="p-4 text-center border-l border-gray-300 bg-black text-white">
                <p className="text-sm text-white uppercase tracking-wider font-semibold">Principal Programme</p>
                <p className="text-xs text-white/70 mt-1">Paid · Five seats</p>
              </div>
            </div>
            {keyDifferences.map((item, index) => (
              <div
                key={item.feature}
                className={`grid grid-cols-3 gap-0 py-4 px-4 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } ${index < keyDifferences.length - 1 ? "border-b border-gray-200" : ""}`}
              >
                <div className="flex items-center">
                  <span className="text-black text-sm font-medium">{item.feature}</span>
                </div>
                <div className="flex items-center justify-center border-l border-gray-200">
                  {item.simulator ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <X className="h-4 w-4 text-gray-300" />
                  )}
                </div>
                <div className="flex items-center justify-center border-l border-gray-200 bg-gray-50">
                  {item.programme ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <X className="h-4 w-4 text-gray-300" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-2 border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-heading font-bold text-black mb-3">Start with the simulator if:</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "You want to test deal judgment before applying",
                  "You have an hour, not twelve weeks, today",
                  "You are unsure whether you meet entry requirements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full border-2 border-black text-black hover:bg-black hover:text-white"
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
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-2 border-black rounded-lg p-6 bg-black text-white"
            >
              <h3 className="text-lg font-heading font-bold text-white mb-3">Apply for the programme if:</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "You have three to eight years in a deal role",
                  "You can build an LBO model unaided",
                  "You can commit ten to twelve hours per week",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white">
                    <span className="text-white/70 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="default" className="w-full bg-white text-black hover:bg-gray-100" asChild>
                <Link href={PROGRAMME.applySlug}>
                  Apply
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
