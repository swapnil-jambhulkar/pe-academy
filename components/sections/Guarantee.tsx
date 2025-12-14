"use client";

import { motion } from "framer-motion";
import { Shield, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const guarantees = [
  { title: "Real Deal Experience", desc: "Work on actual deals from our pipeline" },
  { title: "Partner Feedback", desc: "Direct feedback on your work" },
  { title: "Portfolio You Can Show", desc: "Actual deal analysis, not coursework" },
  { title: "Track Record", desc: "3 in PE interviews, 2 internships" },
];

export default function Guarantee() {
  return (
    <section className="flex items-center bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-16">
        <div className="max-w-4xl mx-auto w-full">
          {/* Mobile: Full-width Layout (matching Market Analysis style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:hidden"
          >
            {/* Header - matching Market Analysis style */}
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-full mb-3">
                <Shield className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Our Promise</span>
              </div>
              <h2 className="text-xl font-heading font-bold text-black">
                Our Commitment to You
              </h2>
            </div>

            {/* Guarantees - Full width bars like heatmap */}
            <div className="space-y-2 mb-6">
              {guarantees.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-start gap-3"
                >
                  <div className="p-1.5 bg-green-100 rounded-full flex-shrink-0">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">{item.title}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Button
              variant="default"
              size="lg"
              asChild
              className="w-full bg-black text-white hover:bg-gray-800 py-4"
            >
              <Link href="/cohort">
                See How It Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Desktop: Full Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block bg-gray-50 border-2 border-gray-200 rounded-lg p-8 md:p-12 text-center"
          >
            <div className="inline-flex p-4 bg-black rounded-full mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">
              Our Commitment to You
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              We're not selling a course. We're giving you access to real deals and real feedback. Here's our promise:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-black mb-1">Real Deal Experience</p>
                  <p className="text-sm text-gray-700">You'll work on actual deals from our pipeline. Not case studies. Real opportunities we're evaluating.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-black mb-1">Partner-Level Feedback</p>
                  <p className="text-sm text-gray-700">Direct feedback from a PE partner on your work. See how we think about opportunities.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-black mb-1">Portfolio You Can Show</p>
                  <p className="text-sm text-gray-700">Walk away with actual deal work in your portfolio. Not coursework. Real analysis.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-black mb-1">Track Record</p>
                  <p className="text-sm text-gray-700">3 mentees in PE interviews, 2 internships, 1 VC role. This access works.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-700 mb-6">
                <strong className="text-black">What if it doesn't work?</strong> If you complete the program and don't feel you've gained the skills and network to pursue PE opportunities, we'll work with you to ensure you get value. We're committed to your success.
              </p>
              <Button
                variant="default"
                size="lg"
                asChild
                className="bg-black text-white hover:bg-gray-800"
              >
                <Link href="/cohort#apply">
                  See How It Works
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
