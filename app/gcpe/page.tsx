import type { Metadata } from "next";
import { GcpeContent } from "@/components/programme/GcpeContent";
import { NEXT_COHORT_START } from "@/lib/programmes";

export const metadata: Metadata = {
  title: "GCPE | Graduate Certificate in Private Equity",
  description:
    `Graduate Certificate in Private Equity: a twelve-week technical sprint on forensic LBO modelling, commercial diligence, and VDR work on live deals. Ten seats. Next cohort ${NEXT_COHORT_START}.`,
  alternates: { canonical: "/gcpe" },
  openGraph: {
    title: "GCPE | Graduate Certificate in Private Equity",
    description:
      "Twelve-week live-fire sprint. Structure lower-middle-market buyouts and defend investment memoranda to a voting investment committee.",
    url: "/gcpe",
    type: "website",
  },
};

export default function GcpePage() {
  return <GcpeContent />;
}
