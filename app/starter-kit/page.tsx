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
} from "lucide-react";
import Link from "next/link";
import { useCurrency } from "@/hooks/useCurrency";
import { formatPrice, getPrice, getStarterKitPaymentLink, type Currency } from "@/lib/currency";

const features = [
  {
    title: "LBO Model Templates",
    description:
      "Ready-to-use Excel templates for building LBO models. Includes step-by-step instructions and example calculations.",
    icon: FileText,
  },
  {
    title: "Investment Memo Structures",
    description:
      "Professional templates for writing investment memos that PE firms actually use. Includes sections for deal thesis, financial analysis, and risk assessment.",
    icon: FileText,
  },
  {
    title: "Cold Email Scripts",
    description:
      "Proven email templates with a 42% response rate. Includes scripts for reaching out to PE professionals, asking for informational interviews, and following up.",
    icon: Mail,
  },
  {
    title: "Deal Sourcing Tracker",
    description:
      "Excel-based tracker to organize your deal sourcing efforts. Track companies, outreach status, and follow-ups all in one place.",
    icon: Database,
  },
  {
    title: "Career Roadmaps",
    description:
      "Step-by-step guides for breaking into PE from different backgrounds (engineering, consulting, CA, etc.). Customized paths based on your starting point.",
    icon: Map,
  },
  {
    title: "Private Discord Community",
    description:
      "Join 300+ active members. Get feedback on your work, ask questions, and network with others on the same journey.",
    icon: MessageSquare,
  },
  {
    title: "Monthly Office Hours",
    description:
      "Live Q&A sessions with Swapnil and guest speakers from the PE industry. Get your questions answered and learn from real experiences.",
    icon: Calendar,
  },
  {
    title: "Monthly Challenges",
    description:
      "Structured challenges with two paths: Analyst Route and Associate Route. Build skills progressively and get feedback on your work.",
    icon: Trophy,
  },
];

export default function StarterKitPage() {
  const { currency } = useCurrency();

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-red-500/20 rounded-full border border-red-400/50 mb-4">
                <span className="text-red-200 text-sm font-semibold uppercase tracking-wide">Early Bird</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Starter Kit
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Everything you need to start building proof you can do PE work. Templates, models, scripts, and community access.
              </p>
              <div className="mb-4">
                <div className="flex items-center gap-4 justify-center">
                  <span className="text-5xl font-heading font-bold text-white">{formatPrice(getPrice(currency, "starterKitEarlyBird"), currency)}</span>
                  <span className="text-3xl font-heading font-bold text-white line-through">{formatPrice(getPrice(currency, "starterKit"), currency)}</span>
                </div>
              </div>
              <p className="text-white/70 mb-8">One-time payment, lifetime access</p>
              <Button
                variant="default"
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-lg px-8"
                asChild
              >
                <a href={getStarterKitPaymentLink(currency)} target="_blank" rel="noopener noreferrer">
                  Buy Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sneak Peek Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">
              Sneak Peek Inside the Kit
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              See what you'll get access to immediately after purchase
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
            {/* LBO Model Template */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="border-2 border-gray-200 hover:border-black transition-all h-full">
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
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-2 border-gray-200 hover:border-black transition-all h-full">
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
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="border-2 border-gray-200 hover:border-black transition-all h-full">
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
      <section className="pt-12 pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">
                What's Inside (Simplified)
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Everything you need to build a portfolio and break into PE
              </p>
            </motion.div>

            <div className="space-y-8">
              {/* MODULE 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="border-2 border-gray-200">
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
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-2 border-gray-200">
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
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="border-2 border-gray-200">
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
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="border-2 border-gray-200">
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
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="border-2 border-black bg-black text-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading font-bold text-white">
                      BONUS
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white/90">Resume templates (</span>
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
              className="mt-10 text-center"
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

      {/* Discord Community Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                Join Our Private Discord Community
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Connect with 300+ active members. Get feedback, share wins, and build your network.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white/5 border-2 border-white/20 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="h-6 w-6 text-white" />
                    <h3 className="text-xl font-heading font-bold text-white">
                      What You Get
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">Dedicated channels for LBO models, memos, and deal analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">Peer review and feedback on your work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">Job opportunities and networking threads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">Monthly office hours announcements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">Exclusive resources and updates</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 border-2 border-white/20 rounded-lg p-4"
              >
                <div className="rounded-lg overflow-hidden bg-gray-900 relative">
                  <img
                    src="/images/discord-community.png"
                    alt="PE Builders Hub Discord Community Preview"
                    className="w-full h-auto block rounded-lg"
                    style={{ maxHeight: '600px', objectFit: 'contain' }}
                  />
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 text-white/50 text-xs">
                  <Users className="h-4 w-4" />
                  <span>300+ active members</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="h-8 w-8 text-black" />
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black">
                Monthly Challenges
              </h2>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Test your skills and get feedback from the community
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="border-2 border-gray-200 hover:border-black transition-all h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-black rounded-lg">
                      <Trophy className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-black">
                      LBO Modeling Challenge
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 flex-1">
                    Build an LBO model for a given company. Submit your work for peer review and instructor feedback.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-auto">
                    <Calendar className="h-4 w-4" />
                    <span>Monthly challenge</span>
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
              <Card className="border-2 border-gray-200 hover:border-black transition-all h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-black rounded-lg">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-black">
                      Investment Memo Challenge
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 flex-1">
                    Write an investment memo for a real company. Get detailed feedback on structure, analysis, and presentation.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-auto">
                    <Calendar className="h-4 w-4" />
                    <span>Monthly challenge</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews & Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
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
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                Get Started Today
              </h2>
              <p className="text-lg text-white/80">
                Join 300+ active members building their portfolios
              </p>
            </motion.div>

            <Card className="bg-black border-2 border-white/20 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-10">
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-red-500/20 rounded-full border border-red-400/50 mb-4">
                      <span className="text-red-200 text-sm font-semibold uppercase tracking-wide">Early Bird</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-6xl font-heading font-bold text-white">
                        {formatPrice(getPrice(currency, "starterKitEarlyBird"), currency)}
                      </div>
                      <div className="text-3xl font-heading font-bold text-white line-through">
                        {formatPrice(getPrice(currency, "starterKit"), currency)}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 text-base mb-4">One-time payment, lifetime access</p>
                  <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
                    <Users className="h-4 w-4" />
                    <span>Join 300+ active members</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-6 mb-8 border border-white/20">
                  <h3 className="text-white font-bold mb-4 text-center text-lg">What's Included</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
                          <span className="text-white text-sm font-medium">{feature.title}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Cohort CTA inside bundle card */}
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="text-center">
                      <p className="text-white/90 text-sm mb-3 font-medium">Want Live Mentorship?</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-2 border-white/50 text-white hover:bg-white hover:text-black text-sm font-semibold transition-all duration-300"
                        asChild
                      >
                        <Link href="/cohort#apply" className="flex items-center justify-center gap-2">
                          Explore Cohort Program
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-white text-black hover:bg-gray-50 text-base sm:text-xl font-bold mb-4 shadow-2xl hover:shadow-white/50 transition-all duration-300 py-4 sm:py-6 px-4 uppercase tracking-wide break-words"
                  asChild
                >
                  <a href={getStarterKitPaymentLink(currency)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-center">
                    <span className="whitespace-normal">Buy Now</span>
                    <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                  </a>
                </Button>

                <div className="flex items-center gap-2 justify-center text-sm text-white bg-white/10 rounded-lg p-3 border border-white/20 mb-6">
                  <Shield className="h-4 w-4 text-white" />
                  <span className="font-medium">3-day refund guarantee, no questions asked</span>
                </div>

                {/* Cohort CTA */}
                <div className="border-2 border-white/30 rounded-lg p-6 bg-white/5">
                  <h3 className="text-white font-bold text-lg mb-2 text-center">Want Live Mentorship?</h3>
                  <p className="text-white/80 text-sm mb-4 text-center">Join our 6-week Cohort Program with 1-on-1 feedback</p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-black text-base sm:text-lg font-bold py-4 sm:py-6 transition-all duration-300"
                    asChild
                  >
                    <Link href="/cohort#apply" className="flex items-center justify-center gap-2">
                      Explore Cohort Program
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-black mb-4">
              What's Included
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Professional resources to help you build a portfolio and break into PE
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
                  <Card className="h-full border-2 border-gray-200 hover:border-black transition-all">
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
