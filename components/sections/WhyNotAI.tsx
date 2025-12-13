"use client";

import { motion } from "framer-motion";
import { X, Check, Users, MessageSquare, Briefcase, Target, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const aiLimitations = [
  {
    icon: X,
    title: "ChatGPT Can't Review Your Work",
    description: "AI gives you templates, but who reviews your LBO model? Who tells you what PE firms actually look for?",
    ourSolution: "Your work is reviewed by PE founder + cohort peers. Get specific feedback on what works.",
  },
  {
    icon: X,
    title: "AI Can't Make Introductions",
    description: "You can get email templates from ChatGPT, but it can't introduce you to actual PE professionals.",
    ourSolution: "We make warm introductions to PE professionals in our network. Real connections, not templates.",
  },
  {
    icon: X,
    title: "AI Can't Give You Real Deal Experience",
    description: "ChatGPT can explain LBO modeling, but it can't give you experience working on actual live deals.",
    ourSolution: "Work on real deals with our cohort. See how PE firms actually evaluate companies.",
  },
  {
    icon: X,
    title: "AI Can't Build Your Network",
    description: "You're alone with ChatGPT. No peer review, no community, no one to learn from or connect with.",
    ourSolution: "Join a cohort of ambitious professionals. Review each other's work. Build connections that last.",
  },
];

const whatYouGet = [
  {
    icon: Users,
    title: "Human Mentorship",
    description: "1-on-1 feedback from PE founder who broke in without IB/MBA",
  },
  {
    icon: MessageSquare,
    title: "Peer Review",
    description: "Your cohort reviews your work. Get multiple perspectives.",
  },
  {
    icon: Briefcase,
    title: "Real Deal Experience",
    description: "Work on live deals, not just theoretical case studies",
  },
  {
    icon: Target,
    title: "Network Access",
    description: "Warm introductions to PE professionals, not cold emails",
  },
];

export default function WhyNotAI() {
  return (
    <section className="min-h-screen flex items-center bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-3">
            Why Not Just Use ChatGPT?
          </h2>
          <p className="text-base text-white/80 max-w-2xl mx-auto">
            Here's what AI can't give you and why that matters.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* AI Limitations */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {aiLimitations.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white/5 border-white/10 hover:border-white/20 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-red-500/20 rounded-lg border border-red-500/30">
                          <Icon className="h-6 w-6 text-red-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-heading font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-white/70 text-sm mb-4">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className="border-t border-white/10 pt-4">
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-1" />
                          <p className="text-white/90 text-sm font-medium">
                            {item.ourSolution}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* What You Get Instead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 border-2 border-white/20 rounded-lg p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
              What You Get Instead
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatYouGet.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex p-4 bg-white/10 rounded-lg mb-4 border border-white/20">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-heading font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-white/70 text-sm">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

