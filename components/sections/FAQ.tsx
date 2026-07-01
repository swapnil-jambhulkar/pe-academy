"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need prior finance experience?",
    answer:
      "No prior finance experience is required. GCPE and PGP are designed for ambitious professionals breaking into PE from non-traditional backgrounds. Basic Excel skills and a willingness to learn are essential.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "All live sessions are recorded and available for replay. You will have lifetime access to session recordings for your cohort.",
  },
  {
    question: "What's the time commitment per week?",
    answer:
      "For GCPE, expect 8-10 hours per week including live sessions, assignments, and practice. PGP requires a sustained commitment across 48 weeks. The Day One Simulator is free and self-paced.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "GCPE and PGP enrolment is confirmed after offer acceptance. Cohort places are limited. Review programme details before you apply.",
  },
  {
    question: "Do you guarantee job placement?",
    answer:
      "We do not guarantee placement. You will leave with real deal work in your portfolio, partner-level feedback, and execution proof institutions recognise.",
  },
  {
    question: "What is the difference between GCPE and PGP?",
    answer:
      "GCPE is the 12-week technical sprint with live deal work and the graduate certificate examination. PGP is the 48-week institutional track that embeds GCPE in Term 1, then extends into deal engineering, portfolio work, and networking immersion.",
  },
  {
    question: "Can I join from outside the UK?",
    answer:
      "Yes. Programmes are open globally. Live sessions are scheduled for UK, Europe, and US time zones where possible. Materials are delivered digitally.",
  },
  {
    question: "How many cohorts per year?",
    answer:
      "We run rolling GCPE cohorts roughly every six weeks, limited to 10 places per cohort. PGP starts are announced selectively. Contact admissions for the next PGP intake.",
  },
  {
    question: "What happens after I complete GCPE?",
    answer:
      "You retain lifetime alumni community access, materials, and recordings. Many participants continue to PGP or use their GCPE portfolio in interview processes.",
  },
];

type FAQProps = {
  showHeader?: boolean;
};

export default function FAQ({ showHeader = true }: FAQProps) {
  return (
    <section className={`pb-20 bg-gray-50 ${showHeader ? "pt-24" : "pt-12"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our programmes.
            </p>
          </motion.div>
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
