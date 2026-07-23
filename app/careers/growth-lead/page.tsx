import type { Metadata } from "next";
import GrowthLead from "@/components/careers/GrowthLead";

export const metadata: Metadata = {
  title: "Growth Lead",
  description:
    "Full-time Growth Lead role at Norland Academy (Remote, India). Own enrollment funnel, acquisition, and conversion. Video introduction required. This role is currently closed.",
  alternates: {
    canonical: "/careers/growth-lead",
  },
  openGraph: {
    title: "Growth Lead | Norland Academy",
    description:
      "Own growth across Norland Academy cohorts and products. Full-time, Remote India. This role is currently closed.",
    url: "/careers/growth-lead",
    type: "website",
  },
};

export default function GrowthLeadPage() {
  return <GrowthLead />;
}
