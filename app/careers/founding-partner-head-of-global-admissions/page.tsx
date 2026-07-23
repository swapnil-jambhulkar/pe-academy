import type { Metadata } from "next";
import OpenRole from "@/components/careers/OpenRole";

export const metadata: Metadata = {
  title: "Founding Partner & Head of Global Admissions",
  description:
    "Partner-track open role at Norland Academy: own candidate conversion, scale global cohort enrollment, and build with founding equity upside.",
  alternates: {
    canonical: "/careers/founding-partner-head-of-global-admissions",
  },
  openGraph: {
    title: "Founding Partner & Head of Global Admissions | Norland Academy",
    description:
      "Own admissions conversion for Norland Academy PGP and short-course cohorts. Partner-track role with founding equity.",
    url: "/careers/founding-partner-head-of-global-admissions",
    type: "website",
  },
};

export default function FoundingPartnerAdmissionsRolePage() {
  return <OpenRole />;
}
