"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Briefcase, TrendingUp, CheckCircle2, Calendar } from "lucide-react";

const testimonials = [
  {
    name: "Rahul M.",
    background: "B.Tech, no MBA",
    quote: "I'd tried expensive courses before. This was different. Real feedback, real connections. Got my first PE interview within 3 months.",
    before: "No PE network, generic resume",
    after: "Final round at mid-market PE firm",
    timeline: "3 months",
    highlight: "First PE interview",
    icon: Briefcase,
  },
  {
    name: "Priya S.",
    background: "CA pivoting to PE",
    quote: "The cold email system worked. 8 responses from 20 emails. Two interviews scheduled. This actually works.",
    before: "Zero responses from cold outreach",
    after: "2 PE interviews scheduled",
    timeline: "6 weeks",
    highlight: "40% response rate",
    icon: TrendingUp,
  },
  {
    name: "Arjun K.",
    background: "Consultant to PE",
    quote: "The deal tracker changed everything. I could talk confidently about my pipeline in interviews. Landed a VC role.",
    before: "No proof of deal sourcing",
    after: "VC analyst role landed",
    timeline: "4 months",
    highlight: "Full-time role secured",
    icon: CheckCircle2,
  },
];

export default function Testimonials() {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Real Results from Real People
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Not promises. Not theory. Actual outcomes from people who completed the program.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all bg-white/5 border-white/10 hover:border-white/20 group">
                  <CardContent className="p-6">
                    {/* Quote Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <Quote className="h-8 w-8 text-white/40" />
                      <div className="flex items-center gap-2 text-xs text-white/50">
                        <Calendar className="h-3 w-3" />
                        <span>{testimonial.timeline}</span>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-white mb-6 leading-relaxed">"{testimonial.quote}"</p>

                    {/* Before/After */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Before</p>
                          <p className="text-sm text-white/70">{testimonial.before}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-xs text-white/50 uppercase tracking-wider mb-1">After</p>
                          <p className="text-sm text-white font-semibold">{testimonial.after}</p>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-white/10 rounded group-hover:bg-white/20 transition-colors">
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                          <p className="text-xs text-white/60">{testimonial.background}</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <p className="text-xs text-white/50 mb-1">Key Achievement</p>
                        <p className="text-sm text-white font-medium">{testimonial.highlight}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
