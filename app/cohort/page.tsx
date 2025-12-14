"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Calendar,
  Clock,
  Users,
  FileText,
  Check,
  ArrowRight,
  Mail,
  BookOpen,
  Briefcase,
  Target,
  GraduationCap,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { calculateDaysUntil } from "@/lib/utils";
import { useCurrency } from "@/hooks/useCurrency";
import { formatPrice, getPrice } from "@/lib/currency";

// ... existing curriculum and programTiers data ...
// 12-Week Full Curriculum
const fullCurriculum = [
  {
    phase: "PHASE 1: FOUNDATIONS",
    weeks: "Weeks 1-3",
    color: "bg-blue-50 border-blue-200",
    icon: BookOpen,
    weeksDetail: [
      {
        week: "Week 1: PE Fundamentals & Mindset Shift",
        sessions: [
          "Live Session 1: Welcome + Program Overview (90 min)",
          "Pre-work: Watch 'LBO Basics' video (30 min)",
          "Assignment: Analyze 1 public company for PE suitability",
          "Live Session 2: LBO Modeling Workshop Part 1 (120 min)",
        ],
      },
      {
        week: "Week 2: Financial Modeling Deep-Dive",
        sessions: [
          "Pre-work: Build basic LBO model (template provided)",
          "Live Session 1: LBO Modeling Workshop Part 2 (120 min)",
          "Assignment: Complete full LBO model for given case",
          "Live Session 2: Model review + feedback (90 min)",
        ],
      },
      {
        week: "Week 3: Industry Research & Deal Thesis",
        sessions: [
          "Pre-work: Research one industry for PE opportunities",
          "Live Session 1: How to identify attractive sectors (90 min)",
          "Assignment: Write 3-page industry thesis",
          "Live Session 2: Industry thesis review + deal sourcing workshop (90 min)",
        ],
      },
    ],
  },
  {
    phase: "PHASE 2: REAL DEAL WORK",
    weeks: "Weeks 4-8",
    color: "bg-green-50 border-green-200",
    icon: Briefcase,
    weeksDetail: [
      {
        week: "Week 4: Introduction to Live Deals",
        sessions: [
          "Assign students to 3-4 real opportunities from pipeline",
          "Form teams of 3-4 students per deal",
          "Live Session 1: Deal background + research kickoff",
          "Assignment: Initial screening memo (1-2 pages)",
        ],
      },
      {
        week: "Weeks 5-7: Active Due Diligence",
        sessions: [
          "Each team works on their assigned deal:",
          "Financial analysis",
          "Industry research",
          "Competitive positioning",
          "Management assessment",
          "Weekly check-ins (90 min each)",
          "You provide feedback on their work",
          "They see YOUR analysis of the same deals",
        ],
      },
      {
        week: "Week 8: Investment Committee Presentations",
        sessions: [
          "Each team presents their deal recommendation",
          "30-min presentation + 15-min Q&A per team",
          "Instructor shares actual decision on each deal",
          "Lessons learned session",
        ],
      },
    ],
  },
  {
    phase: "PHASE 3: CAREER BUILDING",
    weeks: "Weeks 9-11",
    color: "bg-purple-50 border-purple-200",
    icon: Target,
    weeksDetail: [
      {
        week: "Week 9: Portfolio & Resume Optimization",
        sessions: [
          "Live Session: How to showcase PE work on resume",
          "Assignment: Optimize resume with PE experience",
          "1-on-1 feedback session on your resume",
          "LinkedIn profile optimization workshop",
        ],
      },
      {
        week: "Week 10: Mock Interviews & Feedback",
        sessions: [
          "Live Session: PE interview prep (technical + behavioral)",
          "Mock interview #1 (video recorded)",
          "Detailed feedback session",
          "Mock interview #2 (video recorded)",
        ],
      },
      {
        week: "Week 11: Networking & Outreach Strategy",
        sessions: [
          "Live Session: Cold email system (42% response rate)",
          "Assignment: Send 10 cold emails using templates",
          "Track responses and optimize approach",
          "Live Session: Advanced networking strategies + portfolio showcase (90 min)",
        ],
      },
    ],
  },
  {
    phase: "PHASE 4: GRADUATION",
    weeks: "Week 12",
    color: "bg-yellow-50 border-yellow-200",
    icon: GraduationCap,
    weeksDetail: [
      {
        week: "Week 12: Final Presentations & Next Steps",
        sessions: [
          "Final portfolio presentations",
          "Roadmap for next 90 days",
          "Graduation ceremony",
          "Post-program mentorship kickoff",
        ],
      },
    ],
  },
];

// 6-Week Condensed Curriculum
const condensedCurriculum = [
  {
    phase: "PHASE 1: FOUNDATIONS",
    weeks: "Weeks 1-3",
    color: "bg-blue-50 border-blue-200",
    icon: BookOpen,
    weeksDetail: [
      {
        week: "Week 1: PE Fundamentals & Mindset Shift",
        sessions: [
          "Live Session 1: Welcome + Program Overview (90 min)",
          "Pre-work: Watch 'LBO Basics' video (30 min)",
          "Assignment: Analyze 1 public company for PE suitability",
          "Live Session 2: LBO Modeling Workshop Part 1 (120 min)",
        ],
      },
      {
        week: "Week 2: Financial Modeling Deep-Dive",
        sessions: [
          "Pre-work: Build basic LBO model (template provided)",
          "Live Session 1: LBO Modeling Workshop Part 2 (120 min)",
          "Assignment: Complete full LBO model for given case",
          "Live Session 2: Model review + feedback (90 min)",
        ],
      },
      {
        week: "Week 3: Industry Research & Deal Thesis",
        sessions: [
          "Pre-work: Research one industry for PE opportunities",
          "Live Session 1: How to identify attractive sectors (90 min)",
          "Assignment: Write 3-page industry thesis",
          "Live Session 2: Industry thesis review + deal sourcing workshop (90 min)",
        ],
      },
    ],
  },
  {
    phase: "PHASE 2: REAL DEAL WORK",
    weeks: "Weeks 4-6",
    color: "bg-green-50 border-green-200",
    icon: Briefcase,
    weeksDetail: [
      {
        week: "Week 4: Introduction to Live Deals",
        sessions: [
          "Assign students to 3-4 real opportunities from pipeline",
          "Form teams of 3-4 students per deal",
          "Live Session 1: Deal background + research kickoff",
          "Assignment: Initial screening memo (1-2 pages)",
        ],
      },
      {
        week: "Week 5: Active Due Diligence",
        sessions: [
          "Each team works on their assigned deal:",
          "Financial analysis",
          "Industry research",
          "Competitive positioning",
          "Management assessment",
          "Weekly check-in (90 min)",
          "Instructor provides feedback on work",
          "Students see instructor's analysis of same deals",
        ],
      },
      {
        week: "Week 6: Investment Committee Presentations & Graduation",
        sessions: [
          "Each team presents their deal recommendation",
          "30-min presentation + 15-min Q&A per team",
          "Instructor shares actual decision on each deal",
          "Lessons learned session",
          "Final wrap-up and next steps roadmap",
        ],
      },
    ],
  },
];

const deliverables = [
  "1 complete LBO model (portfolio-ready)",
  "1 investment memo (show in interviews)",
  "Real deal analysis experience",
  "20+ companies tracked (proof of process)",
  "5+ warm connections (from cold outreach)",
  "Mock interview experience (video recorded)",
  "Optimized resume & LinkedIn profile",
  "Public portfolio (LinkedIn + personal site)",
];

const programTiers = [
  {
    name: "6-Week Program",
    duration: "6 weeks",
    description: "Focused program covering foundations and real deal work. Perfect for those who want core PE skills without the extended commitment.",
    spots: "20 spots",
    earlyBird: { price: 25000, label: "Early Bird" },
    regular: { price: 30000, label: "Regular" },
    features: [
      "6 weeks of focused learning",
      "6 live sessions (12 hours)",
      "3 office hours",
      "1-on-1 feedback (2 sessions)",
      "Real deal work experience",
      "Investment committee presentations",
      "Lifetime community access",
      "All materials & recordings",
      "Note: Career building modules exclusive to 12-week program",
    ],
    curriculum: condensedCurriculum,
    paymentLink: "[RAZORPAY_LINK_COHORT_6WEEK]",
  },
  {
    name: "12-Week Program",
    duration: "12 weeks",
    description: "Comprehensive program with full curriculum including advanced career building",
    spots: "10 spots only",
    earlyBird: { price: 42000, label: "Early Bird" },
    regular: { price: 50000, label: "Regular" },
    features: [
      "12 weeks of comprehensive training",
      "12 live sessions (24 hours)",
      "6 office hours",
      "1-on-1 feedback (4 sessions)",
      "Real deal work with full due diligence",
      "Extended mock interviews (2 sessions)",
      "Advanced career building modules",
      "Direct access to Swapnil",
      "Post-program mentorship (1 month)",
      "Lifetime community access",
      "All materials & recordings",
    ],
    curriculum: fullCurriculum,
    paymentLink: "[RAZORPAY_LINK_COHORT_12WEEK]",
    limited: true,
    highlighted: true,
  },
];

// Urgency data
const earlyBirdDeadline = new Date("2026-01-01");
const spots6Week = 20;
const spots12Week = 10;
const filled6Week = 8;
const filled12Week = 4;

export default function CohortPage() {
  const [applicationOpen, setApplicationOpen] = useState(false);

  // Handle #apply anchor - open dialog when URL has #apply
  useEffect(() => {
    if (window.location.hash === "#apply") {
      setApplicationOpen(true);
      // Remove hash from URL after opening
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);
  const [selectedTier, setSelectedTier] = useState<"6week" | "12week">("12week");
  const [daysRemaining, setDaysRemaining] = useState(0);
  const { currency } = useCurrency();

  useEffect(() => {
    setDaysRemaining(calculateDaysUntil(earlyBirdDeadline));
    const interval = setInterval(() => {
      setDaysRemaining(calculateDaysUntil(earlyBirdDeadline));
    }, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

  const fillPercentage6Week = (filled6Week / spots6Week) * 100;
  const fillPercentage12Week = (filled12Week / spots12Week) * 100;
  
  // Check if early bird pricing is active
  const isEarlyBirdActive = daysRemaining > 0;
  
  // Get pricing (early bird if active, otherwise regular)
  const price6Week = isEarlyBirdActive 
    ? getPrice(currency, "cohort6WeekEarlyBird")
    : getPrice(currency, "cohort6Week");
  const price12Week = isEarlyBirdActive 
    ? getPrice(currency, "cohort12WeekEarlyBird")
    : getPrice(currency, "cohort12Week");
  
  // Calculate savings for early bird
  const regularPrice6Week = getPrice(currency, "cohort6Week");
  const regularPrice12Week = getPrice(currency, "cohort12Week");
  const savings6Week = regularPrice6Week - price6Week;
  const savings12Week = regularPrice12Week - price12Week;
  const savingsAmount = Math.max(savings6Week, savings12Week);

  return (
    <div>
      {/* Hero Section - Program Availability */}
      <section className="min-h-screen flex items-center bg-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-full mb-6 inline-block border border-white/20">
                Live + Mentored Program
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
                PE Breakthrough Cohort
              </h1>
              <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-4">
                Limited Enrollment. Personalized Attention. Real Results.
              </p>
              <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>Only 30 spots total across both programs</span>
              </div>
            </motion.div>

            {/* Urgency Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Early Bird Deadline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/5 border-2 border-white/20 rounded-lg p-8 hover:border-white/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 uppercase tracking-wider font-semibold">Early Enrollment</p>
                    <p className="text-xs text-white/50">Ends in</p>
                  </div>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <div className="text-6xl font-heading font-bold text-white mb-2">
                    {daysRemaining}
                  </div>
                  <p className="text-sm text-white/70 font-medium">Days Remaining</p>
                  <p className="text-xs text-white/50 mt-2">
                    {isEarlyBirdActive 
                      ? `Save up to ${formatPrice(savingsAmount, currency)} with Early Bird pricing`
                      : "Early Bird pricing has ended"
                    }
                  </p>
                </div>
              </motion.div>

              {/* 6-Week Program */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 border-2 border-white/10 rounded-lg p-8 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 uppercase tracking-wider font-semibold">6-Week Program</p>
                    <p className="text-xs text-white/50">Focused Track</p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <div className="text-4xl font-heading font-bold text-white">
                      {filled6Week}
                    </div>
                    <span className="text-white/40 text-xl">/</span>
                    <div className="text-2xl text-white/60">{spots6Week}</div>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${fillPercentage6Week}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-white h-2 rounded-full"
                    />
                  </div>
                  <p className="text-sm text-white/70 font-medium">
                    {spots6Week - filled6Week} spots available
                  </p>
                </div>
              </motion.div>

              {/* 12-Week Program */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 border-2 border-white/30 rounded-lg p-8 hover:border-white/40 transition-all relative"
              >
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-white text-black text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white uppercase tracking-wider font-bold">
                      12-Week Program
                    </p>
                    <p className="text-xs text-white/70">Premium Track</p>
                  </div>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <div className="text-4xl font-heading font-bold text-white">
                      {filled12Week}
                    </div>
                    <span className="text-white/40 text-xl">/</span>
                    <div className="text-2xl text-white/70">{spots12Week}</div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mb-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${fillPercentage12Week}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-white h-2 rounded-full"
                    />
                  </div>
                  <p className="text-sm text-white font-semibold">
                    {spots12Week - filled12Week} spots remaining
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Footer Note with Waitlist */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center max-w-2xl mx-auto"
            >
              <p className="text-white/60 text-sm mb-4">
                Next cohort begins April 2026. Applications reviewed on a rolling basis.
              </p>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const email = formData.get("email") as string;
                  
                  try {
                    const response = await fetch("/api/waitlist", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ email }),
                    });

                    const result = await response.json();

                    if (response.ok) {
                      alert(result.message || "Thank you! We'll notify you when applications open.");
                      (e.target as HTMLFormElement).reset();
                    } else {
                      alert(result.error || "Failed to join waitlist. Please try again.");
                    }
                  } catch (error) {
                    console.error("Error joining waitlist:", error);
                    alert("Failed to join waitlist. Please try again later.");
                  }
                }}
                className="flex flex-col sm:flex-row gap-3 mb-6"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email to join waitlist"
                  required
                  className="flex-1 px-4 py-2.5 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus:bg-white/15"
                />
                <Button
                  type="submit"
                  variant="default"
                  className="bg-white text-black hover:bg-gray-100 font-semibold px-6"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Join Waitlist
                </Button>
              </form>
              <Button
                variant="default"
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-lg px-8"
                asChild
              >
                <Link href="#programs">
                  Choose Your Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Selection - Single Card */}
      <section className="py-20 bg-white" id="programs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">
              Choose Your Program
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Select the program that fits your timeline and goals
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {programTiers.map((tier, index) => {
                    const Icon = tier.curriculum[0]?.icon || BookOpen;
                    return (
                      <div
                        key={index}
                        className={`p-8 flex flex-col h-full ${
                          tier.highlighted
                            ? "bg-black text-white border-l-2 border-white"
                            : "bg-white text-black border-r-2 border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Icon className={`h-6 w-6 ${tier.highlighted ? "text-white" : "text-black"}`} />
                            <CardTitle className={`text-2xl ${tier.highlighted ? "text-white" : "text-black"}`}>
                              {tier.name}
                            </CardTitle>
                          </div>
                          {tier.limited && (
                            <span className={`px-3 py-1 ${tier.highlighted ? "bg-white text-black" : "bg-black text-white"} text-xs font-semibold rounded-full`}>
                              Limited
                            </span>
                          )}
                        </div>
                        <CardDescription className={`text-base mb-6 ${tier.highlighted ? "text-white/80" : "text-gray-600"}`}>
                          {tier.description}
                        </CardDescription>
                        <div className="mb-6">
                          {isEarlyBirdActive ? (
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`px-2 py-1 bg-green-500 text-white text-xs font-bold rounded ${tier.highlighted ? "" : ""}`}>
                                  EARLY BIRD
                                </span>
                                <span className={`text-xs ${tier.highlighted ? "text-white/70" : "text-gray-600"}`}>
                                  {daysRemaining} days left
                                </span>
                              </div>
                              <div className="flex items-baseline gap-3 mb-1">
                                <span className={`text-4xl font-heading font-bold ${tier.highlighted ? "text-white" : "text-black"}`}>
                                  {formatPrice(
                                    tier.name === "6-Week Program" ? price6Week : price12Week,
                                    currency
                                  )}
                                </span>
                                <span className={`text-xl line-through ${tier.highlighted ? "text-white/40" : "text-gray-400"}`}>
                                  {formatPrice(
                                    tier.name === "6-Week Program" ? regularPrice6Week : regularPrice12Week,
                                    currency
                                  )}
                                </span>
                              </div>
                              <p className={`text-sm font-semibold ${tier.highlighted ? "text-green-400" : "text-green-600"}`}>
                                Save {formatPrice(tier.name === "6-Week Program" ? savings6Week : savings12Week, currency)}
                              </p>
                            </div>
                          ) : (
                            <div className="flex items-baseline gap-2 mb-2">
                              <span className={`text-4xl font-heading font-bold ${tier.highlighted ? "text-white" : "text-black"}`}>
                                {formatPrice(
                                  tier.name === "6-Week Program" ? price6Week : price12Week,
                                  currency
                                )}
                              </span>
                              <span className={`text-sm ${tier.highlighted ? "text-white/70" : "text-gray-600"}`}>
                                Starting from
                              </span>
                            </div>
                          )}
                          <p className={`text-sm mt-2 ${tier.highlighted ? "text-white/60" : "text-gray-600"}`}>
                            {tier.spots}
                          </p>
                        </div>
                        <ul className="space-y-2 mb-6 flex-1">
                          {tier.features.slice(0, 5).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${tier.highlighted ? "text-white" : "text-black"}`} />
                              <span className={`text-sm ${tier.highlighted ? "text-white/90" : "text-gray-700"}`}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="space-y-3 mt-auto">
                          <Button
                            variant={tier.highlighted ? "default" : "outline"}
                            size="lg"
                            className={`w-full font-bold ${
                              tier.highlighted
                                ? "bg-white text-black hover:bg-gray-100"
                                : "border-2 border-black text-black hover:bg-black hover:text-white"
                            }`}
                            onClick={() => setApplicationOpen(true)}
                          >
                            APPLY NOW
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full text-sm"
                            asChild
                          >
                            <a
                              href={`#curriculum-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                              onClick={(e) => {
                                e.preventDefault();
                                document
                                  .getElementById(`curriculum-${tier.name.toLowerCase().replace(/\s+/g, "-")}`)
                                  ?.scrollIntoView({ behavior: "smooth" });
                              }}
                            >
                              View Curriculum
                            </a>
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Sections */}
      {programTiers.map((tier, tierIndex) => (
        <section
          key={tierIndex}
          id={`curriculum-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
          className={`py-20 ${tierIndex % 2 === 0 ? "bg-white" : "bg-black text-white"}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2
                className={`text-2xl sm:text-3xl font-heading font-bold mb-3 ${
                  tierIndex % 2 === 0 ? "text-black" : "text-white"
                }`}
              >
                {tier.name} - Detailed Curriculum
              </h2>
              <p
                className={`text-base max-w-2xl mx-auto ${
                  tierIndex % 2 === 0 ? "text-gray-600" : "text-white/70"
                }`}
              >
                {tier.duration} of structured learning and real-world application
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-6">
              {tier.curriculum.map((phase, phaseIndex) => {
                const PhaseIcon = phase.icon;
                return (
                  <motion.div
                    key={phaseIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: phaseIndex * 0.1 }}
                  >
                    <Card
                      className={`border-2 ${
                        tierIndex % 2 === 0
                          ? phase.color
                          : "bg-white/5 border-white/20"
                      }`}
                    >
                      <CardHeader className="p-5">
                        <div className="flex items-center gap-3 mb-2">
                          <PhaseIcon
                            className={`h-5 w-5 ${
                              tierIndex % 2 === 0 ? "text-black" : "text-white"
                            }`}
                          />
                          <div>
                            <CardTitle
                              className={`text-lg font-semibold ${
                                tierIndex % 2 === 0 ? "text-black" : "text-white"
                              }`}
                            >
                              {phase.phase}
                            </CardTitle>
                            <CardDescription
                              className={`text-sm ${tierIndex % 2 === 0 ? "text-gray-600" : "text-white/70"}`}
                            >
                              {phase.weeks}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-5 pt-3">
                        <Accordion type="single" collapsible className="w-full">
                          {phase.weeksDetail.map((weekDetail, weekIndex) => (
                            <AccordionItem
                              key={weekIndex}
                              value={`phase-${phaseIndex}-week-${weekIndex}`}
                            >
                              <AccordionTrigger
                                className={`text-sm py-3 ${
                                  tierIndex % 2 === 0
                                    ? "text-black hover:text-gray-700"
                                    : "text-white hover:text-white/80"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <Calendar
                                    className={`h-4 w-4 ${
                                      tierIndex % 2 === 0 ? "text-gray-600" : "text-white/70"
                                    }`}
                                  />
                                  <span className="font-semibold">{weekDetail.week}</span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                <ul className="space-y-2 mt-3">
                                  {weekDetail.sessions.map((session, sessionIndex) => (
                                    <li
                                      key={sessionIndex}
                                      className={`flex items-start gap-2 text-sm ${
                                        tierIndex % 2 === 0 ? "text-gray-700" : "text-white/80"
                                      }`}
                                    >
                                      <Clock
                                        className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                                          tierIndex % 2 === 0 ? "text-gray-500" : "text-white/60"
                                        }`}
                                      />
                                      <span>{session}</span>
                                    </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA After Curriculum */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                Ready to Start Your PE Journey?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Join our next cohort and get personalized mentorship from a PE founder
              </p>
              <Button
                variant="default"
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-lg font-bold px-8 py-6 uppercase tracking-wide"
                onClick={() => setApplicationOpen(true)}
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Dialog */}
      <Dialog open={applicationOpen} onOpenChange={setApplicationOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Apply to Cohort Program</DialogTitle>
            <DialogDescription>
              Fill out the application form to apply. We'll review your application and get back to you within 48 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="text-center space-y-4">
              <p className="text-gray-700 text-base">
                Click the button below to open the application form. It will open in a new tab.
              </p>
              <Button
                variant="default"
                size="lg"
                className="w-full bg-black text-white hover:bg-gray-800 text-lg font-bold px-8 py-6"
                onClick={() => {
                  window.open("https://forms.gle/Uu7hpPegA17TCh7TA", "_blank", "noopener,noreferrer");
                }}
              >
                Open Application Form
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="pt-2">
                <p className="text-xs text-gray-500 mb-2">Or copy this link:</p>
                <div className="flex items-center gap-2 bg-gray-50 p-3 rounded border">
                  <code className="text-xs text-gray-700 flex-1 break-all">
                    https://forms.gle/Uu7hpPegA17TCh7TA
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs"
                    onClick={() => {
                      navigator.clipboard.writeText("https://forms.gle/Uu7hpPegA17TCh7TA");
                      alert("Link copied to clipboard!");
                    }}
                  >
                    Copy
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-t pt-4">
              <p className="text-sm text-gray-500 text-center">
                Having trouble? Contact us at{" "}
                <a href="mailto:contact@norlandcapital.co.uk" className="text-black underline">
                  contact@norlandcapital.co.uk
                </a>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* FAQ Section */}
      <section id="faq" className="pt-24 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our programs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "Do I need prior finance experience?",
                  answer:
                    "No prior finance experience is required. The Starter Kit and Cohort are designed for people breaking into PE from non-traditional backgrounds. However, basic Excel skills and a willingness to learn are essential.",
                },
                {
                  question: "What if I miss a live session?",
                  answer:
                    "All live sessions are recorded and available for replay. You'll have lifetime access to all session recordings, so you can catch up at your own pace.",
                },
                {
                  question: "What's the time commitment per week?",
                  answer:
                    "For the Cohort program, expect 8-10 hours per week including live sessions, assignments, and practice. The Starter Kit is self-paced, so you can work at your own speed.",
                },
                {
                  question: "What's your refund policy?",
                  answer:
                    "We offer a 3-day money-back guarantee for the Starter Kit, no questions asked. For the Cohort, refunds are available up to 7 days before the program starts.",
                },
                {
                  question: "Do you guarantee job placement?",
                  answer:
                    "We don't guarantee job placement, but we guarantee you'll have a portfolio-ready LBO model, investment memo, and the skills to land interviews. Our track record shows 3 mentees in PE interview processes, 2 landed internships, and 1 VC role.",
                },
                {
                  question: "What's the difference between Starter Kit and Cohort?",
                  answer:
                    "The Starter Kit is self-paced with templates, scripts, and community access. The Cohort is a 6-week live program with 1-on-1 feedback, live sessions, and structured curriculum. Choose based on your learning style and timeline.",
                },
                {
                  question: "Can I join from outside India?",
                  answer:
                    "Yes! Our programs are open to anyone globally. Live sessions are scheduled to accommodate multiple time zones, and all materials are delivered digitally.",
                },
                {
                  question: "How many cohorts per year?",
                  answer:
                    "We run 2-3 cohorts per year. Cohort 1 starts January 6, 2026. Cohort 2 is planned for April 2026. Spots are limited to 30 per cohort to ensure quality.",
                },
                {
                  question: "Why is VIP limited to 10 spots?",
                  answer:
                    "VIP includes additional 1-on-1 mentorship time and priority feedback. We limit it to 10 spots to ensure each VIP participant gets the attention they need.",
                },
                {
                  question: "What happens after I complete the Cohort?",
                  answer:
                    "You'll have lifetime access to the community, all materials, and session recordings. Many alumni continue to network and support each other in their job search.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
