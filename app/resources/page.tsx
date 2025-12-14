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
  Database,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useCurrency } from "@/hooks/useCurrency";
import { formatPrice, getPrice, getStarterKitPaymentLink, getIndividualResourcePaymentLink, type Currency } from "@/lib/currency";

const resources = [
  {
    id: "roadmap-ib-to-pe",
    title: "IB to PE Roadmap",
    description: "Month-by-month action plan for transitioning from IB. Skill mapping, networking playbook, interview prep - all from someone who did it.",
    icon: Map,
    category: "Roadmap",
  },
  {
    id: "roadmap-vc-to-pe",
    title: "VC to PE Roadmap",
    description: "Complete transition guide from VC to PE. How to translate deal experience, close skill gaps, and position yourself effectively.",
    icon: Map,
    category: "Roadmap",
  },
  {
    id: "roadmap-non-mba",
    title: "NON-MBA Path to PE",
    description: "Proven strategies for breaking in without an MBA. Real examples and actionable steps from someone who did it without the traditional path.",
    icon: Map,
    category: "Roadmap",
  },
  {
    id: "linkedin-outreach",
    title: "LinkedIn Outreach Playbook",
    description: "Our exact scripts with 42% response rate. How to connect with PE professionals, get warm introductions, and follow up effectively.",
    icon: Mail,
    category: "Playbook",
  },
  {
    id: "deal-sourcing-tool",
    title: "Deal Sourcing Tool",
    description: "The same Excel tracker we use at Norland. Track companies, outreach status, pipeline value - organize your sourcing like a pro.",
    icon: Database,
    category: "Tool",
  },
  {
    id: "lbo-templates",
    title: "LBO Model Templates",
    description: "Ready-to-use Excel templates with video walkthroughs. Build portfolio-ready models, not just learn theory.",
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
      <section className="relative pt-24 pb-16 bg-black text-white overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -right-32 w-72 h-72 bg-white/[0.03] rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -60, 0],
              y: [0, 40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl"
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
                <span className="text-white/80 text-sm font-semibold">Real Tools from Norland</span>
              </motion.div>

              <h1 className="text-3xl font-heading font-bold text-white mb-4">
                <span className="relative inline-block">
                  Roadmaps & Playbooks
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-white/60 to-white/20 rounded-full"
                  />
                </span>
              </h1>
              
              <p className="text-lg text-white/80 mb-3">
                Career Paths. Outreach Scripts. Deal Sourcing.
              </p>
              
              <p className="text-sm text-white/50 mb-8">
                The same tools and frameworks we use at Norland Capital. {resources.length} resources with 42% response rate on cold outreach.
              </p>

              {/* CTA */}
              <div className="space-y-3">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-white text-black hover:bg-gray-100 font-bold py-5 text-base shadow-xl shadow-white/10"
                  onClick={() => {
                    window.open("/samples/pe-academy-all-samples.pdf", "_blank");
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Samples
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full border-white/30 text-white hover:bg-white/10 font-medium py-5 text-base"
                >
                  <Link href="/starter-kit">
                    Get Full Access
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
                <span className="text-white/80 text-sm font-semibold">Real Tools from Norland</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
                <span className="relative inline-block">
                  Roadmaps & Playbooks
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-white/60 to-white/20 rounded-full"
                  />
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-4">
                Career Paths. Outreach Scripts. Deal Sourcing Systems.
              </p>
              
              <p className="text-base text-white/50 max-w-2xl mx-auto mb-10">
                The same tools and frameworks we use at Norland Capital. Career roadmaps, outreach playbooks with 42% response rate, and deal sourcing systems.
              </p>

              {/* Stats */}
              <div className="flex items-center justify-center gap-8 max-w-xl mx-auto pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-white">{resources.length}</div>
                  <div className="text-xs text-white/50 mt-1">Resources</div>
                </div>
                <div className="h-8 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-white">3</div>
                  <div className="text-xs text-white/50 mt-1">Roadmaps</div>
                </div>
                <div className="h-8 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-white">42%</div>
                  <div className="text-xs text-white/50 mt-1">Response Rate</div>
                </div>
              </div>
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
      <section className="py-8 md:py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Mobile: Premium Bundle Card */}
              <div className="md:hidden">
                <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/20 rounded-2xl p-5 relative overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                  
                  <div className="relative">
                    {/* Badge */}
                    <div className="flex justify-center mb-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-full">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span className="text-xs font-bold uppercase tracking-wide">Full Playground Access</span>
                      </div>
                    </div>

                    {/* Title & Price */}
                    <div className="text-center mb-5">
                      <h2 className="text-2xl font-heading font-bold text-white mb-3">
                        Get Everything + Community
                      </h2>
                      <div className="flex items-baseline justify-center gap-2 mb-1">
                        <span className="text-4xl font-heading font-bold text-white">
                          {formatPrice(bundlePrice, currency)}
                        </span>
                        <span className="text-xl text-white/40 line-through">
                          {formatPrice(individualPrice * resources.length, currency)}
                        </span>
                      </div>
                      <p className="text-sm text-green-400 font-medium">
                        Save {formatPrice(individualPrice * resources.length - bundlePrice, currency)}
                      </p>
                    </div>

                    {/* Includes - Compact Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-white">Real Deal Challenges</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-white">Partner Feedback</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-white">300+ Community</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-xs text-white">All {resources.length} Resources</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full bg-white text-black hover:bg-gray-100 font-bold py-4 text-base shadow-xl"
                      onClick={handleBuyBundle}
                    >
                      Get Playground Access
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    {/* Trust */}
                    <p className="text-center text-xs text-white/50 mt-3">
                      ✓ 3-day refund guarantee
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop: Full Bundle Card */}
              <Card className="hidden md:block border-2 border-white/20 shadow-2xl bg-white/5">
                <CardHeader className="text-center pb-6">
                  <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-4 border border-white/20">
                    <Sparkles className="h-5 w-5 text-white inline mr-2" />
                    <span className="text-white text-sm font-bold uppercase tracking-wide">Full Playground Access</span>
                  </div>
                  <CardTitle className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">
                    Resources + Community + Challenges
                  </CardTitle>
                  <CardDescription className="text-lg text-white/80">
                    All resources plus real deal challenges, partner feedback, and 300+ member community
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
                      Save {formatPrice(individualPrice * resources.length - bundlePrice, currency)} • Lifetime access
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-lg p-6 mb-6 border border-white/20">
                    <h3 className="text-white font-bold mb-4 text-center">What You Get</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm font-medium">Monthly real deal challenges from Norland</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm font-medium">Partner feedback on your work</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm font-medium">2 tracks: Analyst & Associate paths</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm font-medium">300+ member community</span>
                      </div>
                      {resources.map((resource) => (
                        <div key={resource.id} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
                          <span className="text-white text-sm font-medium">{resource.title}</span>
                        </div>
                      ))}
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
                    Get Full Access
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>

                  <div className="flex items-center gap-2 justify-center text-sm text-white/80 bg-white/10 rounded-lg p-3 border border-white/20">
                    <Check className="h-4 w-4 text-white" />
                    <span className="font-medium">3-day refund guarantee • No questions asked</span>
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
                How to Get Started
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Download Samples",
                  description: "See the actual roadmaps, playbooks, and tools. Make sure it's what you need before buying.",
                },
                {
                  step: "2",
                  title: "Choose Your Path",
                  description: `Buy individual resources (${formatPrice(individualPrice, currency)} each) or get full playground access with challenges and community.`,
                },
                {
                  step: "3",
                  title: "Start Building",
                  description: "Use the tools, join the community, participate in monthly challenges, get partner feedback on your work.",
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

