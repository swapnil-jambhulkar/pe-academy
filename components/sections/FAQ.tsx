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
      "No prior finance experience is required. The Starter Kit and Cohort are designed for people breaking into PE from non-traditional backgrounds. However, basic Excel skills and a willingness to learn are essential.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "All live sessions are recorded and available for replay. You'll have lifetime access to all session recordings, so you can catch up at your own pace.",
  },
  {
    question: "What's the time commitment per week?",
    answer:
      "For the Cohort program, expect 8-10 hours per week including live sessions, assignments, and practice. The Starter Kit is self-paced, so you can work at your own speed.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "We offer a 3-day money-back guarantee for the Starter Kit, no questions asked. For the Cohort, refunds are available up to 7 days before the program starts.",
  },
  {
    question: "Do you guarantee job placement?",
    answer:
      "We don't guarantee job placement, but we guarantee you'll have a portfolio-ready LBO model, investment memo, and the skills to land interviews. Our track record shows 3 mentees in PE interview processes, 2 landed internships, and 1 VC role.",
  },
  {
    question: "What's the difference between Starter Kit and Cohort?",
    answer:
      "The Starter Kit is self-paced with templates, scripts, and community access. The Cohort is a 6-week live program with 1-on-1 feedback, live sessions, and structured curriculum. Choose based on your learning style and timeline.",
  },
  {
    question: "Can I join from outside India?",
    answer:
      "Yes! Our programs are open to anyone globally. Live sessions are scheduled to accommodate multiple time zones, and all materials are delivered digitally.",
  },
  {
    question: "How many cohorts per year?",
    answer:
      "We run 2-3 cohorts per year. Cohort 1 starts January 6, 2026. Cohort 2 is planned for April 2026. Spots are limited to 30 per cohort to ensure quality.",
  },
  {
    question: "Why is VIP limited to 10 spots?",
    answer:
      "VIP includes additional 1-on-1 mentorship time and priority feedback. We limit it to 10 spots to ensure each VIP participant gets the attention they need.",
  },
  {
    question: "What happens after I complete the Cohort?",
    answer:
      "You'll have lifetime access to the community, all materials, and session recordings. Many alumni continue to network and support each other in their job search.",
  },
];

export default function FAQ() {
  return (
    <section className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            Everything you need to know about our programs.
          </p>
        </motion.div>

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

