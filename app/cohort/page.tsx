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
  ClipboardList,
  PenLine,
  Phone,
  ChevronRight,
  Award,
} from "lucide-react";
import Link from "next/link";
import { calculateDaysUntil } from "@/lib/utils";

// ... existing curriculum and programTiers data ...
// 12-Week GCPE Curriculum
const fullCurriculum = [
  {
    phase: "PHASE 1: FOUNDATIONS",
    weeks: "Weeks 1-3",
    color: "bg-blue-50 border-blue-200",
    icon: BookOpen,
    weeksDetail: [
      {
        week: "Week 1: Lower-Middle Market Buyout Architecture",
        sessions: [
          "Live Session 1: Welcome + Program Overview (90 min)",
          "Pre-work: Watch 'LBO Basics' video (30 min)",
          "Assignment: Analyze 1 public company for PE suitability",
          "Live Session 2: LBO Modeling Workshop Part 1 (120 min)",
        ],
      },
      {
        week: "Week 2: Forensic 3-Statement LBO Modeling",
        sessions: [
          "Pre-work: Build basic LBO model (template provided)",
          "Live Session 1: LBO Modeling Workshop Part 2 (120 min)",
          "Assignment: Complete full LBO model for given case",
          "Live Session 2: Model review + feedback (90 min)",
        ],
      },
      {
        week: "Week 3: Commercial Due Diligence & Cohort Analysis",
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
        week: "Week 4: The Raw VDR Sprint",
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
          "Instructor provides feedback on your work",
          "You see instructor's analysis of the same deals",
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
    phase: "PHASE 3: ADVANCED STRUCTURING",
    weeks: "Weeks 9-11",
    color: "bg-purple-50 border-purple-200",
    icon: Target,
    weeksDetail: [
      {
        week: "Week 9: Capital Layering & Debt Syndication",
        sessions: [
          "Live Session: Capital layering in sponsor-backed buyouts",
          "Assignment: Build debt stack cases across senior, mezzanine, and equity",
          "Workshop: Lender lens on covenant and risk transfer",
          "Case review: Debt syndication pathways in UK mid-market deals",
        ],
      },
      {
        week: "Week 10: The SPA & Locked-Box Mechanisms",
        sessions: [
          "Live Session: SPA architecture and risk allocation",
          "Workshop: Locked-box versus completion accounts in live processes",
          "Assignment: Mark up key SPA clauses from a sample draft",
          "Case debrief: Value leakage and purchase price adjustments",
        ],
      },
      {
        week: "Week 11: Value Creation & Post-Acquisition Integration",
        sessions: [
          "Live Session: Value creation planning from day 1 post-close",
          "Assignment: Build a 100-day integration and value creation plan",
          "Workshop: KPI architecture for portfolio company governance",
          "Case review: Operating model shifts after acquisition",
        ],
      },
    ],
  },
  {
    phase: "PHASE 4: CERTIFICATION",
    weeks: "Week 12",
    color: "bg-yellow-50 border-yellow-200",
    icon: GraduationCap,
    weeksDetail: [
      {
        week: "Week 12: Final Graduate Certificate Examination",
        sessions: [
          "Written examination on buyout mechanics and deal structuring",
          "Timed technical case under IC-style constraints",
          "Oral defense of investment recommendation",
          "GCPE award decision and performance briefing",
        ],
      },
    ],
  },
];

const deliverables = [
  "Real deal analysis from Norland pipeline",
  "LBO model on actual company (not case study)",
  "Investment memo reviewed by PE partner",
  "IC presentation experience (live feedback)",
  "See how partners filter 100+ deals to 3",
  "Mock interviews with real PE feedback",
  "Portfolio showcasing actual deal work",
  "Network with 300+ aspiring PE professionals",
];

const gcpeProgram = {
  name: "12-Week GCPE",
  duration: "12 weeks",
  description:
    "Full Graduate Certificate track. Work on 4-5 deals, complete advanced structuring modules, and pass the final GCPE examination.",
  spots: "10 spots only",
  foundingPrice: "£400 (approx. ₹52,000)",
  standardPrice: "£1,000",
  features: [
    "Work on 4-5 real deals end-to-end",
    "Full due diligence experience",
    "Watch IC committee decisions live",
    "See deal sourcing to close process",
    "Extended partner mentorship",
    "Mock interviews with real PE feedback",
    "Advanced structuring and transaction mechanics",
    "Direct access to Swapnil",
    "Final GCPE examination and certification outcome",
    "Lifetime community access",
  ],
  curriculum: fullCurriculum,
  paymentLink: "[RAZORPAY_LINK_COHORT_12WEEK]",
};

// Rolling Cohort System - Fully Automated
// Base date: First cohort start (April 6, 2026)
// New cohort every 6 weeks (42 days)
const COHORT_BASE_DATE = new Date("2026-04-06");
const COHORT_CYCLE_DAYS = 42; // 6 weeks
const EARLY_ENROLLMENT_CYCLE_DAYS = 15; // Rolling 15-day urgency

// Total spots per cohort (GCPE only)
const TOTAL_SPOTS_GCPE = 10;

// Calculate the next cohort start date (rolling every 6 weeks)
function getNextCohortDate(): Date {
  const now = new Date();
  const baseTime = COHORT_BASE_DATE.getTime();
  const nowTime = now.getTime();
  
  // If we're before the first cohort, return the base date
  if (nowTime < baseTime) {
    return new Date(COHORT_BASE_DATE);
  }
  
  // Calculate how many cycles have passed
  const daysSinceBase = Math.floor((nowTime - baseTime) / (1000 * 60 * 60 * 24));
  const cyclesPassed = Math.floor(daysSinceBase / COHORT_CYCLE_DAYS);
  
  // Next cohort is the upcoming cycle
  const nextCycleNumber = cyclesPassed + 1;
  const nextCohortDate = new Date(baseTime + (nextCycleNumber * COHORT_CYCLE_DAYS * 24 * 60 * 60 * 1000));
  
  return nextCohortDate;
}

// Calculate dynamic spots filled based on day of the 15-day cycle
// More spots fill up as the cycle progresses (creates urgency)
function getDynamicSpotsFilled(): number {
  const now = new Date();
  const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));

  const dayInCycle = (dayOfYear % EARLY_ENROLLMENT_CYCLE_DAYS) + 1;
  const progress = dayInCycle / EARLY_ENROLLMENT_CYCLE_DAYS;

  const minFilled = 4;
  const maxFilled = 8;
  return Math.floor(minFilled + progress * (maxFilled - minFilled));
}

// Calculate rolling early enrollment days (always 1-15, creates perpetual urgency)
function getEarlyEnrollmentDaysLeft(): number {
  const now = new Date();
  const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  
  // Rolling 15-day cycle - always shows between 1 and 15 days
  const daysInCycle = ((EARLY_ENROLLMENT_CYCLE_DAYS - (dayOfYear % EARLY_ENROLLMENT_CYCLE_DAYS)) % EARLY_ENROLLMENT_CYCLE_DAYS);
  
  // Never show 0, minimum is 1 day
  return daysInCycle === 0 ? EARLY_ENROLLMENT_CYCLE_DAYS : daysInCycle;
}

// Get cohort number based on date
function getCohortNumber(): number {
  const now = new Date();
  const baseTime = COHORT_BASE_DATE.getTime();
  const nowTime = now.getTime();
  
  if (nowTime < baseTime) return 1;
  
  const daysSinceBase = Math.floor((nowTime - baseTime) / (1000 * 60 * 60 * 24));
  const cyclesPassed = Math.floor(daysSinceBase / COHORT_CYCLE_DAYS);
  
  return cyclesPassed + 2; // +2 because Cohort 1 (Jan) was before base date
}

// Format cohort date for display
function formatCohortDate(date: Date): string {
  return date.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

// Format short date
function formatShortDate(date: Date): string {
  return date.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}

export default function CohortPage() {
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(15);
  const [nextCohortDate, setNextCohortDate] = useState<Date>(new Date());
  const [cohortNumber, setCohortNumber] = useState(2);
  const [spotsFilled, setSpotsFilled] = useState(4);

  // Handle #apply anchor - open dialog when URL has #apply
  useEffect(() => {
    if (window.location.hash === "#apply") {
      setApplicationOpen(true);
      // Remove hash from URL after opening
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);
  
  // Rolling dates & dynamic spots - fully automated
  useEffect(() => {
    const updateAll = () => {
      setNextCohortDate(getNextCohortDate());
      setDaysRemaining(getEarlyEnrollmentDaysLeft());
      setCohortNumber(getCohortNumber());
      setSpotsFilled(getDynamicSpotsFilled());
    };
    
    updateAll();
    // Update hourly to catch changes
    const interval = setInterval(updateAll, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

  const totalSpots = TOTAL_SPOTS_GCPE;
  const spotsRemaining = totalSpots - spotsFilled;
  const fillPercentage = (spotsFilled / totalSpots) * 100;
  
  // Early enrollment is always active (perpetual urgency)
  const isEarlyBirdActive = true;
  
  // Formatted dates for display
  const cohortStartDisplay = formatCohortDate(nextCohortDate);
  const cohortStartShort = formatShortDate(nextCohortDate);

  return (
    <div>
      {/* Hero Section - Program Availability */}
      <section className="min-h-screen flex items-center pt-28 pb-20 bg-white text-black border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-black font-semibold mb-4">GCPE</p>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.02] mb-6 text-black">
                Graduate Certificate in
                <br />
                Private Equity
              </h1>
              <p className="text-base text-gray-800 leading-relaxed mb-4 max-w-3xl">
                A 12-week technical sprint built around real deal execution. You work through pipeline transactions,
                model outcomes, and defend recommendations under partner-level review.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4 max-w-3xl">
                This programme is designed for candidates who need proof of execution discipline, not just conceptual
                fluency. Every week is structured around institutional standards and decision quality.
              </p>
              <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
                Next cohort begins {cohortStartDisplay}. Applications are reviewed on a rolling basis with selective
                admission.
              </p>
            </div>

            <div className="lg:justify-self-end lg:w-full lg:max-w-md lg:border-l lg:border-gray-300 lg:pl-8 lg:mt-14">
              <p className="text-xs tracking-[0.18em] uppercase text-gray-500 mb-4">GCPE Cohort Snapshot</p>
              <div className="space-y-3 py-1">
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Early Enrollment</span>
                  <span className="font-semibold text-black">{isEarlyBirdActive ? "Active" : "Closed"}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Days Remaining</span>
                  <span className="font-semibold text-black">{daysRemaining}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Cohort Capacity</span>
                  <span className="font-semibold text-black">
                    {spotsFilled}/{totalSpots}
                  </span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Spots Remaining</span>
                  <span className="font-semibold text-black">{spotsRemaining}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-500">Next Start</span>
                  <span className="font-semibold text-black">{cohortStartShort}</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-5 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${fillPercentage}%` }}
                  transition={{ duration: 0.9 }}
                  className="bg-black h-2 rounded-full"
                />
              </div>
              <Button
                variant="default"
                size="lg"
                className="w-full bg-black text-white hover:bg-gray-900 font-bold"
                onClick={() => setApplicationOpen(true)}
              >
                Apply for GCPE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full mt-3 border-black text-black hover:bg-gray-100"
                asChild
              >
                <Link href="#programs">View GCPE Programme</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Scholarship - Institutional Grade Design */}
      <section className="py-12 md:py-24 bg-gray-50 border-b border-gray-200" id="tuition">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-16"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2 md:mb-4">
              Investment
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-black mb-4 md:mb-6">
              Tuition & Founding Cohort
            </h2>
            <div className="w-12 md:w-16 h-px bg-black mx-auto"></div>
          </motion.div>

          {/* Investment Card - Mobile Optimized */}
          <div className="max-w-2xl mx-auto px-2 md:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-10 lg:p-12 text-center">
                {/* Tuition - Smaller on mobile */}
                <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-2 md:mb-3">
                  Tuition Fee
                </p>
                <div className="text-2xl md:text-4xl text-gray-400 font-heading font-bold mb-1 line-through">
                  £1,000
                </div>
                
                <div className="my-4 md:my-6">
                  <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-black uppercase mb-2 md:mb-3">
                    Founding cohort tuition
                  </p>
                  <div className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-black">
                    £400
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Approx. ₹52,000</p>
                </div>
                
                <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 max-w-md mx-auto">
                  Scholarship-adjusted GCPE tuition is £400 (approx. ₹52,000). Standard tuition is £1,000.
                </p>
                
                {/* CTA Button - Full width on mobile */}
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-black text-white hover:bg-gray-800 font-semibold px-8 md:px-10 py-5 md:py-6 text-sm md:text-base"
                  onClick={() => setApplicationOpen(true)}
                >
                  Apply for GCPE
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
                
                <p className="text-[10px] md:text-xs text-gray-400 mt-4 md:mt-6">
                  10 places • Starts {cohortStartShort} • No refunds
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Tracks - Simplified */}
      <section className="py-12 md:py-20 bg-white border-b border-gray-200" id="programs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2 md:mb-4">
              Programme Structure
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-black mb-2 md:mb-4">
              The GCPE Programme
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              One 12-week Graduate Certificate cohort. Live deal work, advanced structuring, final examination.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="border border-gray-200 overflow-hidden bg-black text-white">
              <CardContent className="p-5 md:p-8 flex flex-col">
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-1 text-white/60">
                      {gcpeProgram.duration}
                    </p>
                    <CardTitle className="text-xl font-heading text-white">{gcpeProgram.name}</CardTitle>
                    <p className="text-xs text-white/50 mt-1">{gcpeProgram.spots}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm line-through text-white/40">{gcpeProgram.standardPrice}</span>
                    <p className="text-[10px] uppercase tracking-wider mt-1 text-white/60">Founding cohort</p>
                    <span className="text-2xl font-heading font-bold text-white">{gcpeProgram.foundingPrice}</span>
                  </div>
                </div>

                <CardDescription className="text-sm mb-4 leading-relaxed text-white/70">
                  {gcpeProgram.description}
                </CardDescription>
                <ul className="space-y-2 mb-6 flex-1">
                  {gcpeProgram.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-white/80" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-2 mt-auto">
                  <Button
                    size="lg"
                    className="w-full font-semibold bg-white text-black hover:bg-gray-100"
                    onClick={() => setApplicationOpen(true)}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-xs text-white/60 hover:text-white hover:bg-white/10"
                    asChild
                  >
                    <a
                      href="#curriculum-gcpe"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("curriculum-gcpe")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      View Full Curriculum
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum-gcpe" className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3 text-black">
              {gcpeProgram.name} - Detailed Curriculum
            </h2>
            <p className="text-base max-w-2xl mx-auto text-gray-600">
              {gcpeProgram.duration} of structured learning, live deal work, and certification assessment
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {gcpeProgram.curriculum.map((phase, phaseIndex) => {
              const PhaseIcon = phase.icon;
              return (
                <motion.div
                  key={phaseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: phaseIndex * 0.1 }}
                >
                  <Card className={`border-2 ${phase.color}`}>
                    <CardHeader className="p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <PhaseIcon className="h-5 w-5 text-black" />
                        <div>
                          <CardTitle className="text-lg font-semibold text-black">{phase.phase}</CardTitle>
                          <CardDescription className="text-sm text-gray-600">{phase.weeks}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-5 pt-3">
                      <Accordion type="single" collapsible className="w-full">
                        {phase.weeksDetail.map((weekDetail, weekIndex) => (
                          <AccordionItem key={weekIndex} value={`phase-${phaseIndex}-week-${weekIndex}`}>
                            <AccordionTrigger className="text-sm py-3 w-full text-black hover:text-gray-700">
                              <div className="flex items-center gap-2 w-full">
                                <Calendar className="h-4 w-4 shrink-0 text-gray-600" />
                                <span className="font-semibold truncate">{weekDetail.week}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 mt-3">
                                {weekDetail.sessions.map((session, sessionIndex) => (
                                  <li
                                    key={sessionIndex}
                                    className="flex items-start gap-2 text-sm text-gray-700"
                                  >
                                    <Clock className="h-4 w-4 flex-shrink-0 mt-0.5 text-gray-500" />
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

      {/* Admissions Process */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-200" id="admissions">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-2">
              Selection Process
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-black mb-2">
              Admissions Process
            </h2>
            <p className="text-sm text-gray-600 max-w-lg mx-auto">
              Our selective process ensures committed professionals.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* 3-Step Process */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
              {/* Connecting Line - Desktop */}
              <div className="hidden md:block absolute top-6 left-[20%] right-[20%] h-px bg-gray-200 z-0"></div>
              
              {/* Step 1: Application */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative z-10 flex md:flex-col items-center md:text-center gap-4 md:gap-0"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 md:mx-auto md:mb-4">
                  <ClipboardList className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-heading font-bold text-black mb-1 md:mb-2">Application</h3>
                  <p className="text-sm text-gray-600">
                    Submit your profile and cover letter.
                  </p>
                </div>
              </motion.div>

              {/* Step 2: Assignment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10 flex md:flex-col items-center md:text-center gap-4 md:gap-0"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 md:mx-auto md:mb-4">
                  <PenLine className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-heading font-bold text-black mb-1 md:mb-2">Assignment</h3>
                  <p className="text-sm text-gray-600">
                    Brief deal screening task.
                  </p>
                </div>
              </motion.div>

              {/* Step 3: Partner Call */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative z-10 flex md:flex-col items-center md:text-center gap-4 md:gap-0"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 md:mx-auto md:mb-4">
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-heading font-bold text-black mb-1 md:mb-2">Partner Call</h3>
                  <p className="text-sm text-gray-600">
                    Final fit conversation with Swapnil.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Timeline + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
            >
              <div className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>5-7 days to decision</span>
              </div>
              <Button
                className="w-full sm:w-auto bg-black text-white hover:bg-gray-900 font-semibold"
                onClick={() => setApplicationOpen(true)}
              >
                Start Application
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA After Admissions */}
      <section className="py-12 md:py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-3 md:mb-4">
                Ready to Start Your PE Journey?
              </h2>
              <p className="text-sm md:text-lg text-white/80 mb-6 md:mb-8">
                Join our next cohort and get personalised mentorship from a PE founder
              </p>
              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 text-base md:text-lg font-bold px-6 md:px-8 py-5 md:py-6 uppercase tracking-wide"
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
            <DialogTitle>Apply for GCPE</DialogTitle>
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
                <a href="mailto:admissions@norlandacademy.com" className="text-black underline">
                  admissions@norlandacademy.com
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
                  question: "What is the admissions process?",
                  answer:
                    "Our admissions process has three steps: (1) Submit your application with profile and cover letter, (2) Complete a brief deal screening assignment to demonstrate your analytical thinking, and (3) Have a final fit conversation with Swapnil, our PE Partner and programme instructor. The typical timeline is 5-7 days from application to decision.",
                },
                {
                  question: "Do I need prior finance experience?",
                  answer:
                    "No prior finance experience is required. The programme is designed for ambitious professionals breaking into PE from non-traditional backgrounds. However, basic Excel skills and a willingness to learn are essential.",
                },
                {
                  question: "What is the programme fee?",
                  answer:
                    "GCPE tuition is £1,000 before scholarship and £400 (approx. ₹52,000) after scholarship. PGP tuition is £3,000 before scholarship and £2,000 after scholarship, plus taxes as per government rules.",
                },
                {
                  question: "What if I miss a live session?",
                  answer:
                    "All live sessions are recorded and available for replay. You'll have lifetime access to all session recordings, so you can catch up at your own pace.",
                },
                {
                  question: "What's the time commitment per week?",
                  answer:
                    "For the GCPE programme, expect 8-10 hours per week including live sessions, assignments, and practice. Try the free Day One Simulator first if you want to test execution before you apply.",
                },
                {
                  question: "What's your refund policy?",
                  answer:
                    "For the GCPE programme, all payments are final and non-refundable once enrolment is confirmed, due to limited spots and resources allocated per participant. Please ensure you can commit before applying.",
                },
                {
                  question: "Do you guarantee job placement?",
                  answer:
                    "We don't guarantee placement, but we guarantee something better: real deal experience that IB analysts have. You'll walk away with actual deal work in your portfolio - not case studies from 2015. Our track record: 3 mentees in PE interview processes, 2 landed internships, 1 VC role.",
                },
                {
                  question: "What is the difference between GCPE and PGP?",
                  answer:
                    "GCPE is the 12-week technical sprint with live deal work and the graduate certificate examination. PGP is the 48-week institutional track that embeds the full GCPE in Term 1, then extends into debt syndication, legal engineering, portfolio value creation, and networking immersion. Enquire on the PGP page if you need the full lifecycle.",
                },
                {
                  question: "Can I join from outside the UK?",
                  answer:
                    "Yes! Our programmes are open to professionals globally. Live sessions are scheduled to accommodate UK, Europe, and US time zones, and all materials are delivered digitally.",
                },
                {
                  question: "How many cohorts per year?",
                  answer:
                    "We run 2-3 cohorts per year, roughly every 3-4 months. The next cohort starts in " + cohortStartDisplay + ". Spots are limited to 10 per cohort to ensure quality mentorship.",
                },
                {
                  question: "Why is the GCPE cohort limited to 10 spots?",
                  answer:
                    "The Graduate Certificate includes extended 1-on-1 mentorship time and priority feedback from the Partner. We limit each cohort to 10 spots to ensure each participant gets the attention they need.",
                },
                {
                  question: "What happens after I complete GCPE?",
                  answer:
                    "You retain lifetime alumni community access, materials, and recordings. Many participants progress to PGP or use their portfolio in interview processes.",
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
