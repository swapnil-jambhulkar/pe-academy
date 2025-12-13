"use client";

import { motion } from "framer-motion";
import { FileText, Briefcase, Users, Mail, Video, Globe, Network, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const outcomes = [
  {
    icon: FileText,
    title: "1 complete LBO model",
    description: "Portfolio-ready, reviewed by PE founder",
  },
  {
    icon: Briefcase,
    title: "1 investment memo",
    description: "Show in interviews - real deal analysis",
  },
  {
    icon: Briefcase,
    title: "20 companies tracked",
    description: "Proof of process and deal sourcing",
  },
  {
    icon: Users,
    title: "5-10 warm connections",
    description: "From our PE network, not cold emails",
  },
  {
    icon: Video,
    title: "Mock interview experience",
    description: "Video recorded, feedback provided",
  },
  {
    icon: Globe,
    title: "Public portfolio",
    description: "LinkedIn + personal site showcase",
  },
  {
    icon: Network,
    title: "PE network access",
    description: "Ongoing introductions to professionals",
  },
  {
    icon: Target,
    title: "Interview preparation",
    description: "Mock interviews + career coaching",
  },
];

export default function Outcomes() {
  return (
    <section className="hidden md:block min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-black mb-4">
            What You'll Walk Away With
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Not just templates. Not just theory. Real portfolio pieces, network connections, and interview-ready skills that get you shortlisted.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 h-full hover:border-black hover:shadow-lg transition-all group">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-black rounded group-hover:bg-gray-800 transition-colors">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-black text-base leading-tight">
                          {outcome.title}
                        </h3>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4 mt-auto">
                      <p className="text-sm text-gray-700">{outcome.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
