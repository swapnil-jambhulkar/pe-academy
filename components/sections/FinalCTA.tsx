"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Check, Rocket } from "lucide-react";

const finalPoints = [
  "No IB/MBA required",
  "Proven system",
  "Portfolio-ready work",
  "Lifetime access",
];

export default function FinalCTA() {
  return (
    <section className="flex items-center bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-16">
        {/* Mobile: Compact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:hidden"
        >
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-black rounded-full mb-3">
              <Rocket className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Get Started</span>
            </div>
            <h2 className="text-xl font-heading font-bold text-white">
              Begin Your PE Journey
            </h2>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            <div className="bg-white/10 rounded-lg p-3 text-center border border-white/20">
              <div className="text-lg font-bold text-white">300+</div>
              <div className="text-[10px] text-white/60 uppercase">Members</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center border border-white/20">
              <div className="text-lg font-bold text-white">6</div>
              <div className="text-[10px] text-white/60 uppercase">Spots Left</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center border border-white/20">
              <div className="text-lg font-bold text-white">42%</div>
              <div className="text-[10px] text-white/60 uppercase">Response</div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {finalPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 rounded-lg p-3 border border-white/20">
                <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-xs text-white font-medium">{point}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="space-y-3 mb-6">
            <Button
              variant="default"
              size="lg"
              asChild
              className="w-full bg-white text-black hover:bg-gray-100 font-semibold py-4"
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
              className="w-full border-2 border-white/40 text-white hover:bg-white/10 py-4"
            >
              <Link href="/starter-kit">
                View Curriculum
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Contact */}
          <p className="text-white/60 text-center text-xs">
            Questions? <a href="mailto:contact@norlandcapital.co.uk" className="text-white underline">contact@norlandcapital.co.uk</a>
          </p>
        </motion.div>

        {/* Desktop: Full CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block max-w-3xl mx-auto text-center w-full"
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

          {/* Bullet Points */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-2xl mx-auto mb-10">
            {["No IB/MBA required. Merit-based access", "Proven system with real results", "Portfolio-ready deliverables", "Lifetime community access"].map((point, index) => (
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
