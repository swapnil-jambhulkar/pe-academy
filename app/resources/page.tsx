"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Mail,
  Map,
  Download,
  ShoppingCart,
  Check,
  ArrowRight,
  Sparkles,
  Database,
} from "lucide-react";
import { useCurrency } from "@/hooks/useCurrency";
import { formatPrice, getPrice, getStarterKitPaymentLink, getIndividualResourcePaymentLink, type Currency } from "@/lib/currency";

const resources = [
  {
    id: "roadmap-ib-to-pe",
    title: "IB to PE Roadmap",
    description: "Step-by-step guide for transitioning from Investment Banking to Private Equity. Includes skill mapping, networking strategies, and interview prep.",
    icon: Map,
    category: "Roadmap",
  },
  {
    id: "roadmap-vc-to-pe",
    title: "VC to PE Roadmap",
    description: "Comprehensive guide for moving from Venture Capital to Private Equity. Covers deal experience translation, skill gaps, and transition strategies.",
    icon: Map,
    category: "Roadmap",
  },
  {
    id: "roadmap-non-mba",
    title: "NON-MBA Path to PE",
    description: "Proven strategies for breaking into PE without an MBA. Real examples and actionable steps from someone who did it.",
    icon: Map,
    category: "Roadmap",
  },
  {
    id: "linkedin-outreach",
    title: "LinkedIn Outreach Templates",
    description: "Proven LinkedIn outreach scripts with 42% response rate. Includes templates for connecting with PE professionals and following up.",
    icon: Mail,
    category: "Outreach",
  },
  {
    id: "deal-sourcing-tool",
    title: "Deal Sourcing Tool",
    description: "Excel-based tracker to organize your deal sourcing efforts. Track companies, outreach status, and follow-ups all in one place.",
    icon: Database,
    category: "Tool",
  },
  {
    id: "lbo-templates",
    title: "LBO Model Templates",
    description: "Ready-to-use Excel templates for building LBO models. Includes step-by-step instructions and example calculations.",
    icon: FileText,
    category: "Templates",
  },
];

export default function ResourcesPage() {
  const { currency } = useCurrency();
  const individualPrice = getPrice(currency, "individualResource");
  const bundlePrice = getPrice(currency, "resourceBundle");

  const handleBuyResource = (resourceId: string) => {
    // Redirect directly to payment link
    const paymentLink = getIndividualResourcePaymentLink(currency);
    if (paymentLink && !paymentLink.includes("[")) {
      window.open(paymentLink, "_blank");
    } else {
      // Fallback if link not set up yet
      alert("Payment link is being set up. Please contact us at contact@norlandcapital.co.uk");
    }
  };

  const handleBuyBundle = () => {
    // Redirect to Starter Kit payment link (same as bundle)
    window.open(getStarterKitPaymentLink(currency), "_blank");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Resources
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Download samples, explore our resources, and choose what you need. Build your PE portfolio one resource at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download All Samples Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-black mb-4">
                Download All Samples
              </h2>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Try before you buy. Download our combined sample PDF with demo versions of all resources to explore what you'll get.
              </p>
              <Button
                variant="default"
                size="lg"
                className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-bold"
                onClick={() => {
                  // Download combined sample PDF
                  window.open("/samples/pe-academy-all-samples.pdf", "_blank");
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download All Samples (One PDF)
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">
                Individual Resources
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Each resource is {formatPrice(individualPrice, currency)}. Buy individually or get the full bundle.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col hover:shadow-xl transition-shadow border-2 border-gray-200">
                      <CardHeader className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div className="p-3 bg-black rounded-lg">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded">
                            {resource.category}
                          </span>
                        </div>
                        <CardTitle className="text-xl text-black mb-2">
                          {resource.title}
                        </CardTitle>
                        <CardDescription className="text-gray-700">
                          {resource.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <Button
                          variant="default"
                          className="w-full bg-black text-white hover:bg-gray-800 py-6 text-base font-bold"
                          onClick={() => handleBuyResource(resource.id)}
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Buy Now - {formatPrice(individualPrice, currency)}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Full Bundle Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 border-white/20 shadow-2xl bg-white/5">
                <CardHeader className="text-center pb-6">
                  <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-4 border border-white/20">
                    <Sparkles className="h-5 w-5 text-white inline mr-2" />
                    <span className="text-white text-sm font-bold uppercase tracking-wide">Best Value</span>
                  </div>
                  <CardTitle className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">
                    Full Starter Kit Bundle
                  </CardTitle>
                  <CardDescription className="text-lg text-white/80">
                    Get all resources plus community access, monthly challenges, and office hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-5xl font-heading font-bold text-white">
                        {formatPrice(bundlePrice, currency)}
                      </span>
                      <span className="text-2xl text-white/40 line-through">
                        {formatPrice(individualPrice * resources.length, currency)}
                      </span>
                    </div>
                    <p className="text-sm text-white/70">
                      Save {formatPrice(individualPrice * resources.length - bundlePrice, currency)} when you buy the bundle
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6 mb-6 border border-white/20">
                    <h3 className="text-white font-bold mb-4 text-center">What's Included</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {resources.map((resource) => (
                        <div key={resource.id} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
                          <span className="text-white text-sm font-medium">{resource.title}</span>
                        </div>
                      ))}
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm font-medium">Private Discord Community (300+ members)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm font-medium">Monthly Challenges (Analyst & Associate routes)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm font-medium">Monthly Office Hours</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="default"
                    size="lg"
                    className="w-full bg-white text-black hover:bg-gray-100 text-xl font-bold mb-4 shadow-2xl hover:shadow-white/50 transition-all duration-300 py-6 uppercase tracking-wide"
                    onClick={handleBuyBundle}
                  >
                    Buy Full Bundle
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>

                  <div className="flex items-center gap-2 justify-center text-sm text-white/80 bg-white/10 rounded-lg p-3 border border-white/20">
                    <Check className="h-4 w-4 text-white" />
                    <span className="font-medium">3-day refund guarantee, no questions asked</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">
                How It Works
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Browse Resources",
                  description: "Explore our collection of roadmaps, templates, and outreach scripts. Each resource has a detailed description.",
                },
                {
                  step: "2",
                  title: "Download Sample",
                  description: "Try before you buy. Download our combined sample PDF with demo versions of all resources to see what you'll get.",
                },
                {
                  step: "3",
                  title: "Buy What You Need",
                  description: `Purchase individual resources at ${formatPrice(individualPrice, currency)} each, or get the full bundle at ${formatPrice(bundlePrice, currency)}.`,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

