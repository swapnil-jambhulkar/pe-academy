"use client";

import { motion } from "framer-motion";
import { Shield, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Guarantee() {
  return (
    <section className="min-h-screen flex items-center bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8 md:p-12 text-center"
          >
            <div className="inline-flex p-4 bg-black rounded-full mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">
              Our Commitment to You
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              We're not here to sell you another course. We're here to help you break into PE. Here's our promise:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-black mb-1">Portfolio-Ready Work</p>
                  <p className="text-sm text-gray-700">You'll complete interview-ready deliverables. If you don't, we'll work with you until you do.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-black mb-1">Real Network Access</p>
                  <p className="text-sm text-gray-700">We'll introduce you to PE professionals. Not just email templates. Actual warm introductions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-black mb-1">Ongoing Support</p>
                  <p className="text-sm text-gray-700">Lifetime community access. We're here for your journey, not just the program duration.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-black mb-1">Proven System</p>
                  <p className="text-sm text-gray-700">3 mentees in PE interviews, 2 internships, 1 VC role. This system works.</p>
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
