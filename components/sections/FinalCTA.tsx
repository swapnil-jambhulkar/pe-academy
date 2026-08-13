"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="bg-black text-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading font-bold text-white text-2xl sm:text-4xl md:text-5xl mb-8">
            Five seats. Applications are reviewed individually and most are declined.
          </h2>
          <Button size="lg" asChild className="bg-white text-black hover:bg-gray-100 font-semibold">
            <Link href="/apply">Apply</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
