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
    question: "What is The Principal Programme?",
    answer:
      "A twelve week cohort for mid career deal professionals. You source your own acquisition target in a sector you choose, price it, structure it, write an investment memorandum, and defend the recommendation to an external investment committee that votes. Five seats per cohort. By application.",
  },
  {
    question: "Is the programme free?",
    answer:
      "No. The Principal Programme is a paid programme. Tuition is confirmed at offer stage after your application is reviewed. The Day One Simulator and Forum resources are free.",
  },
  {
    question: "Who should apply?",
    answer:
      "Professionals with three to eight years in transaction services, investment banking, corporate development, or strategy consulting who can build an LBO model unaided and have never owned a deal end to end. This is not for students, recent graduates, or anyone who needs modelling taught from first principles.",
  },
  {
    question: "What is the admissions process?",
    answer:
      "Submit the application form with your sector thesis and a reflection on a transaction you worked on. We review every application individually. If your profile fits, we invite you to a fit conversation before any offer is made. Most applications are declined.",
  },
  {
    question: "What is the weekly time commitment?",
    answer:
      "Ten to twelve hours per week including live sessions, preparation, and written deliverables due before each session. You must confirm this commitment on the application form.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "Sessions are recorded. Participants retain access to recordings and materials after the programme. Deliverables are still due on schedule.",
  },
  {
    question: "Do you guarantee job placement?",
    answer:
      "No. We do not place anyone and we do not claim to. You leave with work product you chose and defended: a target universe, screened names, a memorandum, a structure, and a hundred day plan.",
  },
  {
    question: "Can I join from outside the UK?",
    answer:
      "Yes. Live sessions are scheduled to accommodate UK, European, and Gulf time zones where possible. Materials are delivered digitally.",
  },
  {
    question: "How is the investment committee structured?",
    answer:
      "Three external members who invest for a living and are not employees of the programme. They read memoranda in advance, question participants for three hours in week eleven, and vote. Recommendations can be and are rejected.",
  },
  {
    question: "Should I try the simulator before applying?",
    answer:
      "Yes, if you want to test deal judgment under time pressure before committing to an application. The Day One Analyst Simulator is free and available on the site.",
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
              Admissions, format, and expectations for The Principal Programme.
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
