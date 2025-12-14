"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, FileText, Mail, Database, Map, MessageSquare, Calendar, Briefcase, Network } from "lucide-react";
import { useCurrency } from "@/hooks/useCurrency";
import { formatPrice, getPrice } from "@/lib/currency";

const starterKitFeatures = [
  { icon: FileText, text: "LBO Model Templates" },
  { icon: Map, text: "Career Roadmaps (IB/VC/Non-MBA routes)" },
  { icon: Mail, text: "Cold Email Scripts" },
  { icon: Database, text: "Deal Sourcing Tracker" },
  { icon: MessageSquare, text: "Private Discord Community" },
];

const cohortFeatures = [
  { icon: Users, text: "Personalized mentorship from PE founder" },
  { icon: Briefcase, text: "Real-world deal experience (live deals)" },
  { icon: Network, text: "Direct access to PE professionals" },
  { icon: FileText, text: "1-on-1 feedback on your work" },
  { icon: Calendar, text: "Mock interviews & career prep" },
];

export default function Solution() {
  const { currency } = useCurrency();

  return (
    <section id="solution" className="flex items-center bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-16">
        {/* Mobile Header - matching style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:hidden text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-black rounded-full mb-3">
            <BookOpen className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Programs</span>
          </div>
          <h2 className="text-xl font-heading font-bold text-white">
            Two Paths to Break In
          </h2>
        </motion.div>

        {/* Desktop Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden md:block text-center mb-10 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-3">
            Two Paths to Break In
          </h2>
          <p className="text-base text-white/80 max-w-2xl mx-auto mb-4">
            Built from 300+ survey responses. Addresses every frustration.
          </p>
          
          {/* Social Proof Badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="px-4 py-2 bg-white/10 rounded-full border border-white/20">
              <span className="text-white/90 text-sm font-medium">
                Join <span className="text-white font-semibold">300+</span> professionals building their PE careers
              </span>
            </div>
          </div>
        </motion.div>

        {/* Mobile: Stacked full-width cards */}
        <div className="md:hidden space-y-4">
          {/* Starter Kit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white/10 border border-white/20 rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-1 bg-red-500/20 text-red-200 text-xs font-semibold rounded-full border border-red-400/50">
                Early Bird
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-heading font-bold text-white">{formatPrice(getPrice(currency, "starterKitEarlyBird"), currency)}</span>
                <span className="text-sm text-white/50 line-through">{formatPrice(getPrice(currency, "starterKit"), currency)}</span>
              </div>
            </div>
            <h3 className="text-lg font-heading font-bold text-white mb-2">Starter Kit</h3>
            <p className="text-sm text-white/70 mb-3">Templates, models, scripts & community access</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {starterKitFeatures.slice(0, 4).map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-xs text-white/80">
                    <Icon className="h-3 w-3 flex-shrink-0" />
                    <span className="truncate">{feature.text.split(' ')[0]} {feature.text.split(' ')[1]}</span>
                  </div>
                );
              })}
            </div>
            <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/starter-kit">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Cohort */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white text-black rounded-lg p-4 border-2 border-white"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-1 bg-black text-white text-xs font-semibold rounded-full">
                Live + Mentored
              </span>
              <div className="text-right">
                <span className="text-2xl font-heading font-bold text-black">{formatPrice(getPrice(currency, "cohort6Week"), currency)}</span>
                <p className="text-xs text-gray-500">Starting from</p>
              </div>
            </div>
            <h3 className="text-lg font-heading font-bold text-black mb-2">Cohort Program</h3>
            <p className="text-sm text-gray-600 mb-3">Real mentorship, live deals & networking</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {cohortFeatures.slice(0, 4).map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-xs text-gray-700">
                    <Icon className="h-3 w-3 flex-shrink-0" />
                    <span className="truncate">{feature.text.split(' ').slice(0, 2).join(' ')}</span>
                  </div>
                );
              })}
            </div>
            <Button variant="default" className="w-full bg-black text-white hover:bg-gray-800" asChild>
              <Link href="/cohort#apply">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Desktop: Side by side cards */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Starter Kit Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow bg-white/5 border-white/10">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-red-500/20 text-red-200 text-xs font-semibold rounded-full border border-red-400/50">
                    Early Bird
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-heading font-bold text-white">{formatPrice(getPrice(currency, "starterKitEarlyBird"), currency)}</span>
                    <span className="text-lg font-heading font-bold text-white/50 line-through">{formatPrice(getPrice(currency, "starterKit"), currency)}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl mt-4 text-white">Starter Kit</CardTitle>
                <CardDescription className="text-base mt-2 text-white/80">
                  Templates, models, scripts, and community access to get started on your own timeline.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {starterKitFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-white/70 flex-shrink-0" />
                        <span className="text-white">{feature.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 hover:border-white/50" asChild>
                  <Link href="/starter-kit">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Cohort Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-2 border-white hover:shadow-xl transition-shadow bg-white/5">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-white text-black text-xs font-semibold rounded-full">
                    Live + Mentored
                  </span>
                  <div className="text-right">
                    <span className="text-3xl font-heading font-bold text-white">{formatPrice(getPrice(currency, "cohort6Week"), currency)}</span>
                    <p className="text-xs text-white/70">Starting from</p>
                  </div>
                </div>
                <CardTitle className="text-2xl mt-4 text-white">Cohort Program</CardTitle>
                <CardDescription className="text-base mt-2 text-white/80">
                  Addresses all top frustrations: Real mentorship, live deals, networking, clear roadmap, and merit-based access.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {cohortFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-white/70 flex-shrink-0" />
                        <span className="text-white">{feature.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="default" className="w-full bg-white text-black hover:bg-gray-100" asChild>
                  <Link href="/cohort#apply">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

