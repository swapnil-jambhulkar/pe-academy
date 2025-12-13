"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                About Norland Capital
              </h1>
              <p className="text-xl text-white/80">
                Norland Academy
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Norland Academy was founded to democratize access to Private Equity careers.
                We believe that breaking into PE shouldn't require a ₹50L+ MBA or years in investment banking.
                With the right system, templates, and mentorship, anyone with the drive can build proof they can do PE work.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold text-black mb-4">
                    What We Do
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Provide proven templates and systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Offer live mentorship and feedback</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Build a community of aspiring PE professionals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Help you create a portfolio that gets interviews</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold text-black mb-4">
                    Why We Exist
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The traditional path to PE (IB to MBA to PE) is expensive, time-consuming, and exclusive.
                    But the skills needed for PE work can be learned and demonstrated without that path.
                  </p>
                  <p className="text-gray-700">
                    We've proven it works. Our founder broke into PE without IB/MBA, and we've helped
                    mentees land interviews, internships, and roles. Now we're scaling that system.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                By The Numbers
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="text-center bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="text-4xl font-heading font-bold text-white mb-2">300+</div>
                  <div className="text-white/70">Aspiring PE professionals</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="text-4xl font-heading font-bold text-white mb-2">20+</div>
                  <div className="text-white/70">Mentees helped</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="text-4xl font-heading font-bold text-white mb-2">42%</div>
                  <div className="text-white/70">Cold email response rate</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Join hundreds of others breaking into PE without the traditional path.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" className="bg-black text-white hover:bg-gray-800" asChild>
                  <Link href="/cohort#apply">
                    Join Cohort
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-black text-black hover:bg-black hover:text-white" asChild>
                  <Link href="/starter-kit">
                    Get Starter Kit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
