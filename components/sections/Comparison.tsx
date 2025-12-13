"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/hooks/useCurrency";
import { formatPrice, getPrice } from "@/lib/currency";

const keyDifferences = [
  { feature: "Live Sessions", starterKit: false, cohort: true },
  { feature: "1-on-1 Feedback", starterKit: false, cohort: true },
  { feature: "Real Deal Experience", starterKit: false, cohort: true },
  { feature: "Personalized Mentorship", starterKit: false, cohort: true },
];

const sharedFeatures = [
  "LBO Model Templates",
  "Investment Memo Structures",
  "Cold Email Scripts",
  "Deal Sourcing Tracker",
  "Career Roadmaps",
  "Private Discord Community",
  "Monthly Office Hours",
];

export default function Comparison() {
  const { currency } = useCurrency();

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
            Which Program is Right for You?
          </h2>
          <p className="text-base text-gray-700">
            Both include core resources. The difference is support and structure.
          </p>
        </motion.div>

        {/* Compact Comparison */}
        <div className="max-w-4xl mx-auto">
          {/* Shared Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold mb-4 text-center">
              Included in Both Programs
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {sharedFeatures.map((feature, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Key Differences Table */}
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden mb-6">
            <div className="grid grid-cols-3 gap-0 bg-gray-50 border-b-2 border-gray-300">
              <div className="p-4">
                <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Feature</p>
              </div>
              <div className="p-4 text-center border-l border-gray-300">
                <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Starter Kit</p>
                <p className="text-xs text-gray-400 mt-1">{formatPrice(getPrice(currency, "starterKit"), currency)}</p>
              </div>
              <div className="p-4 text-center border-l border-gray-300 bg-black text-white">
                <p className="text-sm text-white uppercase tracking-wider font-semibold">Cohort</p>
                <p className="text-xs text-white/70 mt-1">{formatPrice(getPrice(currency, "cohort6Week"), currency)}+</p>
              </div>
            </div>
            {keyDifferences.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-0 py-4 px-4 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } ${index < keyDifferences.length - 1 ? "border-b border-gray-200" : ""}`}
              >
                <div className="flex items-center">
                  <span className="text-black text-sm font-medium">{item.feature}</span>
                </div>
                <div className="flex items-center justify-center border-l border-gray-200">
                  {item.starterKit ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <X className="h-4 w-4 text-gray-300" />
                  )}
                </div>
                <div className="flex items-center justify-center border-l border-gray-200 bg-gray-50">
                  {item.cohort ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <X className="h-4 w-4 text-gray-300" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Decision Helper Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-2 border-gray-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-heading font-bold text-black mb-3">Choose Starter Kit If:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>You prefer self-paced learning</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>You have a limited budget ({formatPrice(getPrice(currency, "starterKit"), currency)})</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>You can work independently</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>You want all templates and resources</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full border-2 border-black text-black hover:bg-black hover:text-white"
                asChild
              >
                <Link href="/starter-kit">
                  View Starter Kit
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
              <h3 className="text-lg font-heading font-bold text-white mb-3">Choose Cohort If:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-white">
                  <span className="text-white/70 mt-1">•</span>
                  <span>You want live mentorship and feedback</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-white">
                  <span className="text-white/70 mt-1">•</span>
                  <span>You need structured learning (6 or 12 weeks)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-white">
                  <span className="text-white/70 mt-1">•</span>
                  <span>You want real-world deal experience</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-white">
                  <span className="text-white/70 mt-1">•</span>
                  <span>You need 1-on-1 guidance and mock interviews</span>
                </li>
              </ul>
              <Button
                variant="default"
                className="w-full bg-white text-black hover:bg-gray-100"
                asChild
              >
                <Link href="/cohort#apply">
                  Apply to Cohort
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
