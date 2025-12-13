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

export default function Instructor() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
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
                "I can't mentor everyone 1-on-1. But I can give you the exact system that worked for me."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
