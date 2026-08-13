"use client";

import { motion } from "framer-motion";

const forYou = [
  "You are three to eight years into transaction services, investment banking, corporate development, or strategy consulting with commercial diligence exposure",
  "You can build a leveraged buyout model unaided",
  "Every recommendation you have made had somebody senior standing behind it",
  "You have never found a company nobody else was looking at",
];

const notForYou = [
  "You are a student or recent graduate",
  "You need leveraged buyout modelling taught from first principles",
  "Your first question is what percentage of graduates get placed",
];

export default function WhoThisIsFor() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">Audience</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-10">Who this is for</h2>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="text-lg font-heading font-semibold text-black mb-4">This is for you if</h3>
              <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-5">
                {forYou.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-black mb-4">This is not for you if</h3>
              <ul className="space-y-3 text-gray-700 leading-relaxed list-disc pl-5">
                {notForYou.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-10 text-sm text-gray-500">We do not place anyone and we do not claim to.</p>
        </motion.div>
      </div>
    </section>
  );
}
