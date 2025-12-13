"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Calendar, TrendingUp } from "lucide-react";
import { calculateDaysUntil } from "@/lib/utils";

const earlyBirdDeadline = new Date("2026-01-01");
const totalSpots = 30;
const filledSpots = 12;
const spots6Week = 20;
const spots12Week = 10;
const filled6Week = 8;
const filled12Week = 4;

export default function Urgency() {
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    setDaysRemaining(calculateDaysUntil(earlyBirdDeadline));
    const interval = setInterval(() => {
      setDaysRemaining(calculateDaysUntil(earlyBirdDeadline));
    }, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(interval);
  }, []);

  const spotsRemaining = totalSpots - filledSpots;
  const fillPercentage = (filledSpots / totalSpots) * 100;
  const fillPercentage6Week = (filled6Week / spots6Week) * 100;
  const fillPercentage12Week = (filled12Week / spots12Week) * 100;

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Program Availability
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Limited enrollment ensures personalized attention and quality learning experience
            </p>
          </motion.div>

          {/* Main Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Early Bird Deadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/70 uppercase tracking-wider">Early Enrollment</p>
                  <p className="text-xs text-white/50">Ends in</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="text-5xl font-heading font-bold text-white mb-1">
                  {daysRemaining}
                </div>
                <p className="text-sm text-white/60">Days Remaining</p>
              </div>
            </motion.div>

            {/* 6-Week Program */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/70 uppercase tracking-wider">6-Week Program</p>
                  <p className="text-xs text-white/50">Enrollment Status</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-baseline gap-2 mb-3">
                  <div className="text-3xl font-heading font-bold text-white">
                    {filled6Week}
                  </div>
                  <span className="text-white/50">/</span>
                  <div className="text-xl text-white/70">{spots6Week}</div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${fillPercentage6Week}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="bg-white h-1.5 rounded-full"
                  />
                </div>
                <p className="text-xs text-white/60">
                  {spots6Week - filled6Week} spots available
                </p>
              </div>
            </motion.div>

            {/* 12-Week Program */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 border-2 border-white/20 rounded-lg p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white uppercase tracking-wider font-semibold">
                    12-Week Program
                  </p>
                  <p className="text-xs text-white/60">Premium Track</p>
                </div>
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="flex items-baseline gap-2 mb-3">
                  <div className="text-3xl font-heading font-bold text-white">
                    {filled12Week}
                  </div>
                  <span className="text-white/50">/</span>
                  <div className="text-xl text-white/70">{spots12Week}</div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1.5 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${fillPercentage12Week}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="bg-white h-1.5 rounded-full"
                  />
                </div>
                <p className="text-xs text-white/70 font-medium">
                  {spots12Week - filled12Week} spots remaining
                </p>
              </div>
            </motion.div>
          </div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-white/60 text-sm mt-8"
          >
            Next cohort begins April 2026. Applications reviewed on a rolling basis.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
