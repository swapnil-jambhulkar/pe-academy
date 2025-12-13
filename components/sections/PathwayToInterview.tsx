"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Briefcase, Users, FileCheck, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pathwaySteps = [
  {
    step: 1,
    icon: FileCheck,
    title: "Build Portfolio",
    description: "Complete LBO model, investment memo, and deal tracker. These aren't templates. They're reviewed and refined with real feedback.",
    outcome: "Portfolio-ready work to show in interviews",
  },
  {
    step: 2,
    icon: Users,
    title: "Get Peer Review",
    description: "Your work is reviewed by cohort peers and instructor. Get specific feedback on what PE firms actually look for.",
    outcome: "Interview-ready deliverables",
  },
  {
    step: 3,
    icon: Briefcase,
    title: "Access PE Network",
    description: "Direct introductions to PE professionals. Not just LinkedIn. Actual warm introductions from our network.",
    outcome: "5-10 warm connections in PE",
  },
  {
    step: 4,
    icon: Target,
    title: "Land Interviews",
    description: "With portfolio + network + proven process, you get shortlisted. We help you prepare for each interview.",
    outcome: "PE interview opportunities",
  },
];

export default function PathwayToInterview() {
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-black mb-3">
            How This Gets You to Interviews
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            A proven system that gets you shortlisted. Here's how it works.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Pathway Steps */}
          <div className="space-y-4 mb-6">
            {pathwaySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < pathwaySteps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-full bg-gray-300"></div>
                  )}
                  
                  <div className="flex gap-6 items-start">
                    {/* Step Number & Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center border-4 border-white shadow-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold border-2 border-white">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <Card className="border-2 border-gray-200 hover:border-black transition-all">
                        <CardContent className="p-4">
                          <h3 className="text-xl font-heading font-bold text-black mb-3">
                            {step.title}
                          </h3>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            {step.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm font-semibold text-black bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                            <TrendingUp className="h-4 w-4 text-black" />
                            <span>{step.outcome}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

