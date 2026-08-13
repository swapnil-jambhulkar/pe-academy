"use client";

import { motion } from "framer-motion";

const outcomes = [
  "A proprietary target universe in a sector you chose, forty names",
  "Three screened targets with written kill reasons",
  "One investment memorandum, defended live and voted on",
  "A structure and a defended entry price",
  "A hundred day plan",
  "Three investors who have watched you think for three hours",
];

export default function WhatYouLeaveWith() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Deliverables</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-10">What you leave with</h2>
          <ol className="space-y-4 text-gray-800 leading-relaxed list-decimal pl-6 max-w-3xl">
            {outcomes.map((item) => (
              <li key={item} className="pl-1">{item}</li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
