"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Linkedin, Check } from "lucide-react";

const credentials = [
  "Founded Norland Capital (mid-market PE, Europe focus)",
  "Broke into PE in 2023-24 from VC background without IB/MBA",
  "Built 12 models, sent 100+ cold emails, 42% response rate",
  "Mentored 20+ people (3 in PE interviews, 2 landed internships, 1 VC role)",
  "Currently: Sourcing deals, building portfolio companies",
];

// Shorter credentials for mobile
const mobileCredentials = [
  "Founded Norland Capital (PE, Europe)",
  "Broke into PE without IB/MBA",
  "42% cold email response rate",
  "Mentored 20+ people into PE",
];

export default function Instructor() {
  return (
    <section className="flex items-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-16">
        {/* Mobile: Full-width Layout (matching Market Analysis style) */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Header - matching Market Analysis style */}
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-full mb-3">
                <Linkedin className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Your Mentor</span>
              </div>
              <h2 className="text-xl font-heading font-bold text-black">
                Learn From Someone Who Did It
              </h2>
            </div>

            {/* Profile Card */}
            <div className="bg-black text-white rounded-lg p-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src="/images/swapnil.jpg"
                    alt="Swapnil - Founder of Norland Capital"
                    width={80}
                    height={80}
                    className="w-full h-full rounded-full object-cover border-2 border-white/30"
                    priority={false}
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-white">
                    Swapnil Jambhulakar
                  </h3>
                  <p className="text-sm text-white/70 mb-2">
                    Founder, Norland Capital
                  </p>
                  <a
                    href="https://www.linkedin.com/in/swapniljambhulkar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs bg-white/20 text-white px-3 py-1.5 rounded-full"
                  >
                    <Linkedin className="h-3 w-3" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Credentials - Full width bars like heatmap */}
            <div className="space-y-2 mb-4">
              {mobileCredentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center gap-3"
                >
                  <Check className="h-5 w-5 text-black flex-shrink-0" />
                  <span className="text-sm text-gray-800 font-medium">{credential}</span>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-gray-100 border-l-4 border-black p-4 rounded-r-lg">
              <p className="text-sm text-gray-700 italic">
                "I'll share our actual deals with you. You'll see how we evaluate opportunities - not theory, real decisions."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Desktop: Full Layout */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-black mb-4">
              Learn From Someone Who Did It
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative flex justify-center"
              >
                <div className="relative w-full max-w-sm">
                  <Image
                    src="/images/swapnil.jpg"
                    alt="Swapnil - Founder of Norland Capital"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-lg object-contain"
                    style={{
                      filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.25))',
                      display: 'block'
                    }}
                    priority={false}
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-heading font-bold text-black mb-2">
                    Swapnil Jambhulakar
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Founder, Norland Capital
                  </p>
                </div>

                <ul className="space-y-3">
                  {credentials.map((credential, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                      <span className="text-black">{credential}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button variant="outline" asChild>
                  <a
                    href="https://www.linkedin.com/in/swapniljambhulkar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-5 w-5" />
                    View LinkedIn Profile
                  </a>
                </Button>

                <blockquote className="border-l-4 border-black pl-4 py-2 italic text-gray-600">
                  "I'll share our actual deals with you. You'll see how we evaluate opportunities - not theory, real decisions."
                </blockquote>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
