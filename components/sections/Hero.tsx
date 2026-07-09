"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FREE_VS_PAID_NOTE } from "@/lib/programmes";
import { GUILD, GUILD_APPLY_FORM_URL } from "@/lib/guild";

const guildApplyHref = GUILD_APPLY_FORM_URL;
const guildApplyExternal = true;

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-28 pb-20 bg-white text-black border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold mb-4">Norland Academy</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.02] mb-6">
              Graduate private equity
              <br />
              programmes for
              <br />
              execution roles
            </h1>
            <p className="text-base text-gray-800 leading-relaxed mb-4 max-w-3xl">
              Norland Academy trains candidates on institutional private equity work. GCPE builds technical execution in
              12 weeks. PGP extends that into a 48-week full-cycle track.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-3xl">
              The Day One Simulator remains the fastest way to benchmark readiness before application. Every pathway is
              designed around real transaction judgement, not generic classroom content.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-3xl">
              {FREE_VS_PAID_NOTE}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-black text-white hover:bg-gray-900" asChild>
                <Link href="/simulator">
                  Try Day One Simulator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-gray-100" asChild>
                <Link href="/cohort">Apply for GCPE</Link>
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-gray-100" asChild>
                <Link href="/pgp">Explore PGP</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:justify-self-end lg:w-full lg:max-w-md lg:border-l lg:border-gray-300 lg:pl-8 lg:mt-14"
          >
            <p className="text-xs tracking-[0.18em] uppercase text-gray-500 mb-4">Programme at a glance</p>
            <div className="space-y-3 py-1">
              <div className="flex justify-between text-sm border-b border-gray-200 pb-2"><span className="text-gray-500">GCPE</span><span className="font-semibold">12 weeks</span></div>
              <div className="flex justify-between text-sm border-b border-gray-200 pb-2"><span className="text-gray-500">PGP</span><span className="font-semibold">48 weeks</span></div>
              <div className="flex justify-between text-sm border-b border-gray-200 pb-2"><span className="text-gray-500">Forum</span><span className="font-semibold">Free community</span></div>
              <div className="flex justify-between text-sm border-b border-gray-200 pb-2"><span className="text-gray-500">Simulator</span><span className="font-semibold">Free</span></div>
              <div className="flex justify-between text-sm border-b border-gray-200 pb-2"><span className="text-gray-500">GCPE / PGP</span><span className="font-semibold">Paid programmes</span></div>
            </div>
            <Button className="w-full mt-6 bg-black text-white hover:bg-gray-900" asChild>
              <Link href="/cohort">
                Start with GCPE
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-full mt-3 border-black text-black hover:bg-gray-100"
              asChild
            >
              <Link
                href={guildApplyHref}
                {...(guildApplyExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                Apply to the {GUILD.shortName}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
