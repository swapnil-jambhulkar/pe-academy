"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  TrendingDown,
  ArrowRight,
  Briefcase,
  BookOpen,
  Target,
  FileQuestion,
  Network,
} from "lucide-react";
import FrustrationHeatmap from "@/components/ui/frustration-heatmap";

const marketData = {
  title: "What IB Analysts Have That You Don't",
  subtitle: "The 4 things that get people hired in PE",
  keyFindings: [
    {
      metric: "Real Deals",
      label: "In Their Portfolio",
      description: "They've worked on actual transactions, not case studies",
    },
    {
      metric: "Partner",
      label: "Recommendations",
      description: "MDs and Partners vouch for them directly",
    },
    {
      metric: "Inside",
      label: "Network Access",
      description: "They know people at every fund who can refer them",
    },
    {
      metric: "Proof",
      label: "Of Real Work",
      description: "They can show their deal work in interviews",
    },
  ],
  barriers: [
    {
      title: "What They Have",
      items: [
        "Real deal experience on actual transactions",
        "Partners and MDs who make introductions",
        "Network of people already in PE",
        "Portfolio of real work to show in interviews",
      ],
    },
    {
      title: "What You're Missing",
      items: [
        "No real deals to show (just case studies)",
        "No one to vouch for your work",
        "No inside network at PE firms",
        "No way to prove you can do the job",
      ],
    },
  ],
};

const painPoints = [
  {
    icon: Briefcase,
    title: "They Have Real Deals",
    description: "IB analysts work on live transactions. You have case studies that don't count.",
    percentage: "72%",
    statLabel: "say this is the biggest gap",
    category: "Deal Experience",
  },
  {
    icon: Users,
    title: "They Have Partner Access",
    description: "IB analysts have MDs who make calls. You're sending cold emails into the void.",
    percentage: "68%",
    statLabel: "say this is holding them back",
    category: "Access Gap",
  },
  {
    icon: Network,
    title: "They Have Inside Networks",
    description: "IB analysts know people at every fund. You're competing without connections.",
    percentage: "65%",
    statLabel: "say this matters most",
    category: "Network Gap",
  },
  {
    icon: FileQuestion,
    title: "They Have Proof of Work",
    description: "IB analysts show actual deals in interviews. You have nothing to demonstrate.",
    percentage: "61%",
    statLabel: "say this blocks them",
    category: "Credibility Gap",
  },
  {
    icon: BookOpen,
    title: "They Have a Clear Path",
    description: "IB analysts have a pipeline to PE. You're figuring it out alone.",
    percentage: "58%",
    statLabel: "cite this frustration",
    category: "Roadmap Gap",
  },
  {
    icon: Target,
    title: "They Have Pedigree",
    description: "IB analysts have the Tier-1 brand. You need to prove yourself differently.",
    percentage: "54%",
    statLabel: "cite this frustration",
    category: "Credential Gap",
  },
];

export default function Problem() {
  return (
    <section className="flex items-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Mobile Header - Compact */}
          <div className="md:hidden mb-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-full mb-3">
              <BarChart3 className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">The Problem</span>
            </div>
            <h2 className="text-xl font-heading font-bold text-black mb-2">
              What IB Analysts Have
            </h2>
            <p className="text-sm text-gray-600">That you don't... yet</p>
          </div>

          {/* Desktop Header - Full Report Style */}
          <div className="hidden md:block mb-12 border-b border-gray-200 pb-8">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="h-6 w-6 text-black" />
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-black tracking-tight">
                {marketData.title}
              </h2>
            </div>
            <p className="text-sm text-gray-600 uppercase tracking-wider font-medium">
              {marketData.subtitle}
            </p>
          </div>

          {/* Mobile: Compact Key Metrics - 2x2 Grid */}
          <div className="md:hidden grid grid-cols-2 gap-2 mb-6">
            {marketData.keyFindings.map((finding, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-center"
              >
                <div className="text-xl font-heading font-bold text-black mb-0.5 leading-tight">
                  {finding.metric}
                </div>
                <div className="text-[9px] font-semibold text-gray-500 uppercase tracking-wide leading-tight truncate px-1">
                  {finding.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Key Metrics Grid - Full Corporate Style */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {marketData.keyFindings.map((finding, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-6"
              >
                <div className="text-4xl font-heading font-bold text-black mb-2">
                  {finding.metric}
                </div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {finding.label}
                </div>
                <div className="text-sm text-gray-700 leading-relaxed">
                  {finding.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Barriers Section - Hidden on mobile, shown on desktop */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 mb-12">
            {marketData.barriers.map((barrier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-gray-200 p-8"
              >
                <h3 className="text-lg font-heading font-bold text-black mb-6 uppercase tracking-wide">
                  {barrier.title}
                </h3>
                <ul className="space-y-4">
                  {barrier.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Survey Insights - Mobile: Condensed Cards, Desktop: Full Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            {/* Desktop only header */}
            <div className="hidden md:block border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-lg font-heading font-bold text-black uppercase tracking-wide">
                What's Stopping You (Survey: 700+ Responses)
              </h3>
              <p className="text-sm text-gray-600 mt-1">Every gap below is something IB analysts already have</p>
            </div>
            
            {/* Mobile: Interactive Heatmap Visualization (has its own header) */}
            <div className="md:hidden">
              <FrustrationHeatmap
                data={painPoints.map((point) => {
                  const Icon = point.icon;
                  return {
                    label: point.title,
                    percentage: parseFloat(point.percentage),
                    description: point.description,
                    category: point.category,
                    icon: Icon,
                  };
                })}
              />
            </div>

            {/* Desktop: Full table */}
            <div className="hidden md:block bg-white border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="text-left py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Issue
                      </th>
                      <th className="text-right py-4 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Response Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {painPoints.map((point, index) => {
                      const Icon = point.icon;
                      return (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-black">
                                <Icon className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-sm text-gray-700 font-medium">
                                {point.category}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div>
                              <div className="text-sm font-semibold text-black mb-1">
                                {point.title}
                              </div>
                              <div className="text-xs text-gray-600 leading-relaxed">
                                {point.description}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <span className="text-2xl font-heading font-bold text-black">
                                {point.percentage}
                              </span>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {point.statLabel}
                            </div>
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Data Source Note */}
            <div className="mt-4 md:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-3 w-3" />
                <span>700+ aspiring PE professionals surveyed</span>
              </div>
              <a 
                href="https://docs.google.com/spreadsheets/d/1zCwtjR4dk_iPsgL2lodY4aRWxPlMfUuMLOnxphXLyNE/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black underline hover:text-gray-700 flex items-center gap-1"
              >
                View full data
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
