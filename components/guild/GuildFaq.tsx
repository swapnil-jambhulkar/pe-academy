"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { guildFaqs } from "@/lib/guild";

export default function GuildFaq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {guildFaqs.map((faq, index) => (
        <AccordionItem key={faq.question} value={`guild-faq-${index}`}>
          <AccordionTrigger className="text-left font-semibold text-black">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
