"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black pt-16 md:pt-20 overflow-hidden">
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
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/[0.02] to-transparent rounded-full blur-2xl"
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
              <span className="text-white/80 text-sm font-semibold">From Norland Capital Pipeline</span>
            </motion.div>

            <h1 className="text-3xl font-heading font-bold text-white mb-4">
              <span className="relative inline-block">
                Work on Real Deals
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-white/60 to-white/20 rounded-full"
                />
              </span>
            </h1>
            
            <p className="text-lg text-white/80 mb-3">
              Get Partner-Level Feedback.
            </p>
            
            <p className="text-sm text-white/50 mb-4">
              Access live opportunities from our PE fund's pipeline. Build proof you can do the job. Not case studies, real deals.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-white/60 text-xs mb-8">
              <AlertCircle className="h-3 w-3" />
              <span>No IB required • No Ivy League required</span>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <Button
                variant="default"
                size="lg"
                asChild
                className="w-full bg-white text-black hover:bg-gray-100 font-bold py-5 text-base shadow-xl shadow-white/10"
              >
                <Link href="/cohort">
                  Apply for Cohort
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full border-white/30 text-white hover:bg-white/10 font-medium py-5 text-base"
              >
                <Link href="/starter-kit">
                  Start with Starter Kit
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
              <span className="text-white/80 text-sm font-semibold">Live Deals from Norland Capital Pipeline</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
              <span className="relative inline-block">
                Work on Real Deals
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-white/60 to-white/20 rounded-full"
                />
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-4">
              Get Partner-Level Feedback. Build Your Portfolio.
            </p>
            
            <p className="text-base text-white/50 max-w-2xl mx-auto mb-4">
              Access live opportunities we're evaluating at Norland Capital. See how partners make decisions. 
              Get the real deal experience that IB analysts have. Without the IB.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-10">
              <AlertCircle className="h-4 w-4" />
              <span>No IB background required • No Ivy League required</span>
            </div>

            {/* CTA */}
            <div className="flex flex-row gap-4 justify-center items-center mb-12">
              <Button
                variant="default"
                size="lg"
                asChild
                className="text-base bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6"
              >
                <Link href="/cohort">
                  Apply for Cohort
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-base border border-white/40 text-white hover:bg-white/10 hover:border-white/50 font-medium px-8 py-6"
              >
                <Link href="/starter-kit">
                  Start with Starter Kit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-8 max-w-2xl mx-auto pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-white">Real</div>
                <div className="text-xs text-white/50 mt-1">Deal Experience</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-white">Partner</div>
                <div className="text-xs text-white/50 mt-1">Level Feedback</div>
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
  );
}
