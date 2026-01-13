"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Mail,
  Database,
  Map,
  MessageSquare,
  Calendar,
  Check,
  Shield,
  ArrowRight,
  Users,
  Star,
  Trophy,
  Image as ImageIcon,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { useCurrency } from "@/hooks/useCurrency";
import { formatPrice, getPrice, getStarterKitPaymentLink, type Currency } from "@/lib/currency";

const features = [
  {
    title: "Real Deal Challenges",
    description:
      "Monthly challenges on actual deals from Norland pipeline. Not case studies from textbooks - real opportunities we're evaluating.",
    icon: Trophy,
  },
  {
    title: "Two Challenge Tracks",
    description:
      "Analyst Path (fundamentals, screening, basic modeling) and Associate Path (deep dives, full LBOs, IC memos). Progress at your level.",
    icon: Map,
  },
  {
    title: "Partner Reviews",
    description:
      "Submit your work and get feedback from a PE partner. Learn how deals are actually evaluated - not theory, real decisions.",
    icon: Users,
  },
  {
    title: "Deal Sourcing Playbook",
    description:
      "Our proven system: LinkedIn outreach scripts, cold email templates (42% response rate), target research framework.",
    icon: Mail,
  },
  {
    title: "Career Roadmaps",
    description:
      "Interactive guides for VC→PE, IB→PE, and Non-MBA→PE paths. Month-by-month action plans based on your starting point.",
    icon: Map,
  },
  {
    title: "300+ Member Community",
    description:
      "Private Discord with likeminded people. Share work, get peer feedback, network with others on the same journey.",
    icon: MessageSquare,
  },
  {
    title: "LBO & Screening Tools",
    description:
      "Ready-to-use Excel templates with video walkthroughs. Build portfolio-ready models, not just learn theory.",
    icon: FileText,
  },
  {
    title: "Monthly Office Hours",
    description:
      "Live Q&A with Swapnil. Ask anything - deal analysis, career questions, networking strategy. Real answers, not generic advice.",
    icon: Calendar,
  },
];

export default function StarterKitPage() {
  const { currency } = useCurrency();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-black text-white overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"
          />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Mobile Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:hidden"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-sm font-semibold">Monthly Real Deal Challenges</span>
              </motion.div>

              <h1 className="text-3xl font-heading font-bold text-white mb-4">
                <span className="relative inline-block">
                  Your PE Playground
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-white/60 to-white/20 rounded-full"
                  />
                </span>
              </h1>
              
              <p className="text-lg text-white/80 mb-3">
                Solve Real Challenges. Get Partner Feedback.
              </p>
              
              <p className="text-sm text-white/50 mb-4">
                Monthly challenges on live deals from Norland pipeline. Two tracks for Analyst and Associate level. 300+ community.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-white/60 text-xs mb-8">
                <AlertCircle className="h-3 w-3" />
                <span>Lifetime access • 3-day money-back guarantee</span>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <Button
                  variant="default"
                  size="lg"
                  asChild
                  className="w-full bg-white text-black hover:bg-gray-100 font-bold py-5 text-base shadow-xl shadow-white/10"
                >
                  <a href={getStarterKitPaymentLink(currency)} target="_blank" rel="noopener noreferrer">
                    Get Access - {formatPrice(getPrice(currency, "starterKitEarlyBird"), currency)}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full border-white/30 text-white hover:bg-white/10 font-medium py-5 text-base"
                >
                  <Link href="/cohort">
                    Want Live Deal Access?
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Desktop Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden md:block"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-sm font-semibold">Monthly Real Deal Challenges</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
                <span className="relative inline-block">
                  Your PE Playground
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-white/60 to-white/20 rounded-full"
                  />
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-4">
                Solve Real Challenges. Get Partner Feedback.
              </p>
              
              <p className="text-base text-white/50 max-w-2xl mx-auto mb-4">
                Monthly challenges on live deals from Norland pipeline. Two tracks for Analyst and Associate level. Build with 300+ likeminded people working towards PE.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-10">
                <AlertCircle className="h-4 w-4" />
                <span>Lifetime access • One-time payment • 3-day money-back guarantee</span>
              </div>

              {/* CTA */}
              <div className="flex flex-row gap-4 justify-center items-center mb-12">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 text-base font-semibold px-8 py-6"
                  asChild
                >
                  <a href={getStarterKitPaymentLink(currency)} target="_blank" rel="noopener noreferrer">
                    Get Access - {formatPrice(getPrice(currency, "starterKitEarlyBird"), currency)}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="text-base border border-white/40 text-white hover:bg-white/10 hover:border-white/50 font-medium px-8 py-6"
                >
                  <Link href="/cohort">
                    Want Live Deal Access?
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Stats - matching Homepage style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center justify-center gap-8 max-w-2xl mx-auto pt-8 border-t border-white/10"
              >
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-white">Real</div>
                  <div className="text-xs text-white/50 mt-1">Deal Challenges</div>
                </div>
                <div className="h-8 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-white">Partner</div>
                  <div className="text-xs text-white/50 mt-1">Feedback</div>
                </div>
                <div className="h-8 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-white">300+</div>
                  <div className="text-xs text-white/50 mt-1">Community</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sneak Peek Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">
              Sneak Peek Inside the Kit
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              See what you'll get access to immediately after purchase
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
            {/* LBO Model Template */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <Card className="border border-gray-200 hover:border-black transition-all h-full bg-white">
                <CardContent className="p-6">
                  <div className="bg-gray-100 rounded-lg h-48 overflow-hidden mb-4 relative flex items-center justify-center">
                    <img
                      src="/images/lbo-model-sample.png"
                      alt="LBO Model Template Sample"
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-black mb-2">
                    LBO Model Template
                  </h3>
                  <p className="text-sm text-gray-600">
                    Professional Excel template with formulas, formatting, and step-by-step guide
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Deal Sourcing Tool */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card className="border border-gray-200 hover:border-black transition-all h-full bg-white">
                <CardContent className="p-6">
                  <div className="bg-gray-100 rounded-lg h-48 overflow-hidden mb-4 relative flex items-center justify-center">
                    <img
                      src="/images/deal-sourcing-tool.png"
                      alt="Deal Sourcing Tool Dashboard"
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-black mb-2">
                    Deal Sourcing Tool
                  </h3>
                  <p className="text-sm text-gray-600">
                    Excel-based dashboard to track deals, pipeline value, conversion funnel, and deal sources
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* NON-MBA Path to PE Guide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <Card className="border border-gray-200 hover:border-black transition-all h-full bg-white">
                <CardContent className="p-6">
                  <div className="bg-gray-100 rounded-lg h-48 overflow-hidden mb-4 relative flex items-center justify-center">
                    <img
                      src="/images/non-mba-path-guide.png"
                      alt="NON-MBA Path to Private Equity Guide"
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-black mb-2">
                    NON-MBA Path to PE Guide
                  </h3>
                  <p className="text-sm text-gray-600">
                    Complete roadmap covering skills, 12-month plan, networking, interviews, and more
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed What's Inside Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">
                Your Toolkit & Playbooks
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                The templates, frameworks, and guides to get you started
              </p>
            </motion.div>

            <div className="space-y-3">
              {/* MODULE 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <Card className="border border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading font-bold text-black">
                      MODULE 1: The 2 Financial Models (Core Value)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-700">Basic LBO Model (Excel + </span>
                        <span className="text-black font-semibold">15-min video</span>
                        <span className="text-gray-700">)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-700">Deal Screening Tool (Excel + </span>
                        <span className="text-black font-semibold">10-min video</span>
                        <span className="text-gray-700">)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-700">How to use: 1-page </span>
                        <span className="text-black font-semibold">quick start guide</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* MODULE 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Card className="border border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading font-bold text-black">
                      MODULE 2: Deal Sourcing Starter Kit
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-700">15 email templates (focused, not 50)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-700">LinkedIn outreach scripts (</span>
                        <span className="text-black font-semibold">5 versions</span>
                        <span className="text-gray-700">)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-700">Target research framework (Notion template)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-700">How to use: </span>
                        <span className="text-black font-semibold">12-min video walkthrough</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* MODULE 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <Card className="border border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading font-bold text-black">
                      MODULE 3: Two Career Paths (Interactive PDFs)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-700">VC→PE Transition (</span>
                        <span className="text-black font-semibold">12-page interactive PDF</span>
                        <span className="text-gray-700">)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-700">Non-MBA Path to PE (</span>
                        <span className="text-black font-semibold">12-page interactive PDF</span>
                        <span className="text-gray-700">)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-700">Both include: month-by-month action plans</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* MODULE 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Card className="border border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading font-bold text-black">
                      MODULE 4: Quick Start System
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-700">"Your First </span>
                        <span className="text-black font-semibold">7 Days</span>
                        <span className="text-gray-700">" checklist</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-700">Week 1 action plan</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-700">Progress tracker (Notion)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* BONUS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <Card className="border border-black bg-black text-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading font-bold text-white">
                      BONUS
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white/90">CV templates (</span>
                        <span className="text-white font-semibold">2 versions</span>
                        <span className="text-white/90">)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white/90">Private Discord community access (</span>
                        <span className="text-white font-semibold">all buyers</span>
                        <span className="text-white/90">)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white/90">First-look at Deal Room launch (</span>
                        <span className="text-white font-semibold">discount</span>
                        <span className="text-white/90">)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-center"
            >
              <Button
                variant="default"
                size="lg"
                className="bg-black text-white hover:bg-gray-900 text-lg font-bold px-8 py-6 uppercase tracking-wide"
                asChild
              >
                <a href={getStarterKitPaymentLink(currency)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full mb-4">
                <Users className="h-4 w-4" />
                <span className="text-sm font-semibold">LIKEMINDED COMMUNITY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">
                You're Not Doing This Alone
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                300+ professionals from engineering, consulting, CA, and non-traditional backgrounds. All working towards PE.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-heading font-bold text-black mb-6">
                    What Happens in the Community
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="p-2 bg-black rounded-lg flex-shrink-0">
                        <Trophy className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-black">Challenge Discussions</p>
                        <p className="text-sm text-gray-600">Share approaches, debate analysis, learn from each other</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-2 bg-black rounded-lg flex-shrink-0">
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-black">Peer Reviews</p>
                        <p className="text-sm text-gray-600">Get feedback on your models, memos, and analysis</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-2 bg-black rounded-lg flex-shrink-0">
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-black">Networking & Job Leads</p>
                        <p className="text-sm text-gray-600">Members share opportunities, make introductions</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-2 bg-black rounded-lg flex-shrink-0">
                        <Calendar className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-black">Monthly Office Hours</p>
                        <p className="text-sm text-gray-600">Live Q&A with Swapnil - ask anything</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-100 border-2 border-gray-200 rounded-lg p-4"
              >
                <div className="rounded-lg overflow-hidden bg-gray-900 relative">
                  <img
                    src="/images/discord-community.png"
                    alt="PE Builders Hub Discord Community Preview"
                    className="w-full h-auto block rounded-lg"
                    style={{ maxHeight: '600px', objectFit: 'contain' }}
                  />
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 text-gray-600 text-xs">
                  <Users className="h-4 w-4" />
                  <span>Active daily discussions</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section - THE CORE VALUE */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-4">
              <Trophy className="h-4 w-4 text-yellow-400" />
              <span className="text-white text-sm font-semibold">THE REAL VALUE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Monthly Real Deal Challenges
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Not textbook cases. Real deals from Norland pipeline. Two tracks based on your level.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
            {/* Analyst Track */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-white/5 border-2 border-white/20 h-full">
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full border border-blue-400/50 mb-4">
                    <span className="text-blue-300 text-xs font-semibold uppercase">Analyst Track</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-4">
                    Building Foundations
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">Deal screening on real companies from pipeline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">Basic LBO modeling challenges</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">Industry research & market sizing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">Partner feedback on submissions</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <p className="text-white/60 text-sm">Perfect for: Career changers, early professionals</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Associate Track */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white/5 border-2 border-white/20 h-full">
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-green-500/20 rounded-full border border-green-400/50 mb-4">
                    <span className="text-green-300 text-xs font-semibold uppercase">Associate Track</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-4">
                    Advanced Deep Dives
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">Full LBO models on actual opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">Investment memo writing (IC-ready)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">Due diligence frameworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">Partner feedback on submissions</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <p className="text-white/60 text-sm">Perfect for: IB analysts, VC associates, experienced professionals</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* How it works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">How Monthly Challenges Work</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">1st</div>
                  <div className="text-xs text-white/60">Challenge drops</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">15th</div>
                  <div className="text-xs text-white/60">Submit work</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">20th</div>
                  <div className="text-xs text-white/60">Partner feedback</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews & Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">
              What Members Are Saying
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Real feedback from our Starter Kit community
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="border-2 border-gray-200 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "The LBO template saved me hours. I was able to build a portfolio-ready model in a weekend. The Discord community feedback was incredibly helpful."
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=RahulK&backgroundColor=b6e3f4"
                      alt="Rahul K."
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div>
                      <p className="font-semibold text-black">Rahul K.</p>
                      <p className="text-sm text-gray-600">Engineering Background</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-2 border-gray-200 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "The cold email scripts actually work! Got 3 responses in my first week. The community is super supportive and always ready to help."
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaS&backgroundColor=ffd5dc"
                      alt="Priya S."
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div>
                      <p className="font-semibold text-black">Priya S.</p>
                      <p className="text-sm text-gray-600">CA Background</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="border-2 border-gray-200 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "Best investment I've made. The templates are professional and the monthly challenges keep me motivated. Highly recommend!"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=AmitR&backgroundColor=c7d2fe"
                      alt="Amit R."
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div>
                      <p className="font-semibold text-black">Amit R.</p>
                      <p className="text-sm text-gray-600">Consulting Background</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-2 border-gray-200 h-full">
                <CardContent className="p-6">
                  <div className="bg-gray-100 rounded-lg h-64 overflow-hidden mb-4 relative flex items-center justify-center">
                    <img
                      src="/images/challenge-review.png"
                      alt="Member work samples and reviews"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    Member work samples and reviews
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Mobile: Full-Width Professional Card */}
            <div className="md:hidden">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-black rounded-full mb-3">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Best Value</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-white mb-2">
                  Get Everything
                </h2>
                <p className="text-sm text-white/70">
                  Real deals. Partner feedback. Community. All included.
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className="text-4xl font-heading font-bold text-white">
                    {formatPrice(getPrice(currency, "starterKitEarlyBird"), currency)}
                  </span>
                  <span className="text-xl text-white/40 line-through">
                    {formatPrice(getPrice(currency, "starterKit"), currency)}
                  </span>
                </div>
                <p className="text-white/60 text-sm">One-time payment • Lifetime access</p>
              </div>

              {/* What You Get */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                <div className="space-y-3">
                  {[
                    "Monthly real deal challenges",
                    "Partner feedback on your work", 
                    "300+ member community",
                    "2 tracks: Analyst & Associate",
                    "Deal sourcing playbooks",
                    "Career roadmaps (VC/IB/Non-MBA)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button
                variant="default"
                size="lg"
                className="w-full bg-white text-black hover:bg-gray-50 font-bold py-5 text-lg shadow-2xl mb-4"
                asChild
              >
                <a href={getStarterKitPaymentLink(currency)} target="_blank" rel="noopener noreferrer">
                  Get Access Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              {/* Trust */}
              <div className="flex items-center justify-center gap-2 text-sm text-white/60">
                <Shield className="h-4 w-4" />
                <span>3-day refund guarantee</span>
              </div>

              {/* Cohort Link */}
              <div className="mt-6 pt-6 border-t border-white/20 text-center">
                <p className="text-white/50 text-xs mb-2">Want live deal access with direct partner mentorship?</p>
                <Link href="/cohort" className="text-white font-medium text-sm underline">
                  Explore the Cohort Program →
                </Link>
              </div>
            </div>

            {/* Desktop: Full Card */}
            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                  All This for Less Than a Textbook
                </h2>
                <p className="text-lg text-white/80">
                  Real deals. Partner feedback. Community. Roadmaps. One price, lifetime access.
                </p>
              </motion.div>

              <Card className="bg-black border-2 border-white/20 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1.5 bg-green-500/20 rounded-full border border-green-400/50 mb-3">
                        <span className="text-green-200 text-xs font-semibold uppercase tracking-wide">Playground Access</span>
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <div className="text-5xl font-heading font-bold text-white">
                          {formatPrice(getPrice(currency, "starterKitEarlyBird"), currency)}
                        </div>
                        <div className="text-3xl font-heading font-bold text-white/40 line-through">
                          {formatPrice(getPrice(currency, "starterKit"), currency)}
                        </div>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm mb-3">One-time payment • Lifetime access • All future updates</p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4 mb-6 border border-white/20">
                    <h3 className="text-white font-bold mb-3 text-center text-base">What You Get</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm">Monthly real deal challenges</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm">2 tracks (Analyst + Associate)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm">Partner feedback on work</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm">300+ member community</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm">Deal sourcing playbook</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm">Career roadmaps (VC/IB/Non-MBA)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm">LBO & screening templates</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm">Monthly office hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full bg-white text-black hover:bg-gray-50 font-bold shadow-xl py-4 uppercase tracking-wide"
                      asChild
                    >
                      <a href={getStarterKitPaymentLink(currency)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        Get Access Now
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4"
                      asChild
                    >
                      <Link href="/cohort" className="flex items-center justify-center gap-2">
                        Want Live Deal Access?
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="flex items-center gap-2 justify-center text-xs text-white bg-white/10 rounded-lg p-2.5 border border-white/20">
                    <Shield className="h-3.5 w-3.5 text-white" />
                    <span className="font-medium">3-day refund guarantee • No questions asked</span>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-black mb-4">
              Everything in the Playground
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Real challenges. Real feedback. Real community. All for one price.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-black transition-all bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-black rounded-lg flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-heading font-bold text-black mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {feature.description}
                          </p>
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

    </div>
  );
}
