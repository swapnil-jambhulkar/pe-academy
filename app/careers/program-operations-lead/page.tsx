import type { Metadata } from "next";
import ProgramOperationsLead from "@/components/careers/ProgramOperationsLead";

export const metadata: Metadata = {
  title: "Program Operations Lead",
  description:
    "Full-time remote Program Operations Lead at Norland Academy. Own cohort logistics, student communications, and operational systems. Video introduction required.",
  alternates: {
    canonical: "/careers/program-operations-lead",
  },
  openGraph: {
    title: "Program Operations Lead | Norland Academy",
    description:
      "Own the operational backbone of every Norland Academy cohort. Full-time, remote. Video introduction required.",
    url: "/careers/program-operations-lead",
    type: "website",
  },
};

export default function ProgramOperationsLeadPage() {
  return <ProgramOperationsLead />;
}
