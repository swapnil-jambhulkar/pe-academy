"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
import { useCurrency } from "@/hooks/useCurrency";
import { formatPrice, getPrice } from "@/lib/currency";

const starterKitFeatures = [
  "Monthly real deal challenges",
  "Partner feedback on work",
  "300+ member community",
  "Career roadmaps & playbooks",
];

const cohortFeatures = [
  "Work on live deals from pipeline",
  "Direct partner mentorship",
  "IC committee presentations",
  "Portfolio with real deal work",
];

export default function Solution() {
  const { currency } = useCurrency();

  return (
    <section id="solution" className="bg-black text-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-sm font-semibold">Two Paths to Real Access</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Choose Your Path
            </h2>
            
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Both give you real deal experience. Choose based on your timeline and goals.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Starter Kit Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/20 rounded-2xl p-6 md:p-8 hover:border-white/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1.5 bg-white/10 text-white/80 text-xs font-semibold rounded-full border border-white/20">
                  Self-Paced
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl md:text-3xl font-heading font-bold text-white">
                    {formatPrice(getPrice(currency, "starterKitEarlyBird"), currency)}
                  </span>
                  <span className="text-sm text-white/40 line-through">
                    {formatPrice(getPrice(currency, "starterKit"), currency)}
                  </span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
                Starter Kit
              </h3>
              
              <p className="text-white/60 text-sm mb-6">
                Monthly challenges on real deals. Build at your own pace.
              </p>

              <div className="space-y-3 mb-6">
                {starterKitFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
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
                <Link href="/starter-kit">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Cohort Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white text-black rounded-2xl p-6 md:p-8 border-2 border-white"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1.5 bg-black text-white text-xs font-semibold rounded-full">
                  Live + Mentored
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                  Application Required
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-heading font-bold text-black mb-2">
                Cohort Program
              </h3>
              
              <p className="text-gray-600 text-sm mb-6">
                Work directly on our pipeline deals. Get partner mentorship.
              </p>

              <div className="space-y-3 mb-6">
                {cohortFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-black flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="default"
                className="w-full bg-black text-white hover:bg-gray-800 py-5"
                asChild
              >
                <Link href="/cohort">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-10"
          >
            <div className="flex items-center justify-center gap-2 text-white/50 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>Not sure? Start with Starter Kit. Upgrade to Cohort anytime.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
