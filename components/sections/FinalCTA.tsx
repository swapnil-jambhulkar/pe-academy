"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Check } from "lucide-react";

const finalPoints = [
  "No IB/MBA required. Merit-based access",
  "Proven system with real results",
  "Portfolio-ready deliverables",
  "Lifetime community access",
];

export default function FinalCTA() {
  return (
    <section className="min-h-screen flex items-center bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center w-full"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Begin Your Private Equity Journey
          </h2>
          <p className="text-lg text-white/80 mb-4 max-w-2xl mx-auto">
            Join our professional training programs and build the expertise needed to succeed in Private Equity.
          </p>
          
          {/* Urgency & Social Proof */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
              <span className="text-white font-semibold">300+</span>
              <span className="text-white/80">Professionals</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
              <span className="text-white font-semibold">Only 6</span>
              <span className="text-white/80">Spots Left</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
              <span className="text-white font-semibold">42%</span>
              <span className="text-white/80">Response Rate</span>
            </div>
          </div>

          {/* Bullet Points - Perfectly Aligned 2x2 Grid */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-2xl mx-auto mb-10">
            {finalPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3 text-white text-sm">
                <Check className="h-4 w-4 text-white/80 flex-shrink-0" />
                <span className="text-left">{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button
              variant="default"
              size="lg"
              asChild
              className="w-full sm:w-auto text-lg bg-white text-black hover:bg-gray-100 font-semibold"
            >
              <Link href="/cohort#apply">
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto text-lg border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/50"
            >
              <Link href="/starter-kit">
                View Curriculum
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <p className="text-white/70 flex items-center justify-center gap-2 text-sm">
            <Mail className="h-4 w-4" />
            Questions? Contact us at{" "}
            <a
              href="mailto:contact@norlandcapital.co.uk"
              className="text-white hover:underline"
            >
              contact@norlandcapital.co.uk
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
