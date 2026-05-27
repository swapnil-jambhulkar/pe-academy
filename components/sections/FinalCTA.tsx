"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle } from "lucide-react";

function CtaBlock({ mobile }: { mobile: boolean }) {
  return (
    <>
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span className="text-white/80 text-sm font-semibold">Founding cohort open</span>
      </div>

      <h2 className={`font-heading font-bold text-white mb-4 ${mobile ? "text-2xl" : "text-4xl md:text-5xl"}`}>
        Ready for institutional PE training?
      </h2>

      <p className={`text-white/70 mb-4 ${mobile ? "text-base" : "text-xl max-w-2xl mx-auto"}`}>
        Start with the Day One Simulator, then apply for the 12-week GCPE or enquire about the 48-week PGP.
      </p>

      <div
        className={`flex items-center justify-center gap-2 text-white/60 mb-8 ${
          mobile ? "text-xs" : "text-sm mb-10"
        }`}
      >
        <AlertCircle className={mobile ? "h-3 w-3" : "h-4 w-4"} />
        <span>GCPE tuition £400 (approx. ₹52,000) · Standard £1,000</span>
      </div>

      <div className={mobile ? "space-y-3" : "flex flex-row flex-wrap gap-4 justify-center items-center mb-12"}>
        <Button
          variant="default"
          size="lg"
          asChild
          className={
            mobile
              ? "w-full bg-white text-black hover:bg-gray-100 font-bold py-5"
              : "bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6"
          }
        >
          <Link href="/simulator">
            Start simulator
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          variant="default"
          size="lg"
          asChild
          className={
            mobile
              ? "w-full border border-white/40 text-white hover:bg-white/10 font-bold py-5"
              : "border border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-6"
          }
        >
          <Link href="/cohort">
            Apply for GCPE
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          asChild
          className={
            mobile
              ? "w-full border-white/30 text-white hover:bg-white/10 py-5"
              : "border border-white/40 text-white hover:bg-white/10 px-8 py-6"
          }
        >
          <Link href="/pgp">Enquire PGP</Link>
        </Button>
      </div>
    </>
  );
}

export default function FinalCTA() {
  return (
    <section className="flex items-center bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:hidden"
          >
            <CtaBlock mobile />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <CtaBlock mobile={false} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
