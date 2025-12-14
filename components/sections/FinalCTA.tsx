"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="flex items-center bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:hidden"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-sm font-semibold">Start Today</span>
            </div>

            <h2 className="text-2xl font-heading font-bold text-white mb-4">
              Ready to Get Real Access?
            </h2>
            
            <p className="text-base text-white/70 mb-4">
              Work on real deals. Get partner feedback. Build proof you can do the job.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-white/60 text-xs mb-8">
              <AlertCircle className="h-3 w-3" />
              <span>No IB required • No Ivy League required</span>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <Button
                variant="default"
                size="lg"
                asChild
                className="w-full bg-white text-black hover:bg-gray-100 font-bold py-5 text-base"
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

          {/* Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-sm font-semibold">Start Today</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Get Real Access?
            </h2>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-4">
              Work on real deals from our pipeline. Get partner-level feedback. Build proof you can do the job.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-10">
              <AlertCircle className="h-4 w-4" />
              <span>No IB background required • No Ivy League required</span>
            </div>

            {/* CTAs */}
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

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 max-w-xl mx-auto pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-white">Real</div>
                <div className="text-xs text-white/50 mt-1">Deal Access</div>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
