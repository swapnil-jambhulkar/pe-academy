"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center pt-28 pb-20 bg-white text-black border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-4">Norland Academy</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
            You have executed deals and never owned one.
          </h1>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-4 max-w-3xl">
            The Principal Programme is a twelve week cohort for mid career deal professionals. You source your own
            acquisition target, price it, structure it, and defend the recommendation to an investment committee that
            votes.
          </p>
          <p className="text-sm text-gray-500 mb-8">Twelve weeks. Five seats. By application.</p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-black text-white hover:bg-gray-900" asChild>
              <Link href="/programme">
                Read the programme
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-gray-100" asChild>
              <Link href="/simulator">Try the Day One Simulator</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
