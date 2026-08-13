import type { Metadata } from "next";
import OpenRole from "@/components/careers/OpenRole";

export const metadata: Metadata = {
  title: "Founding Partner & Head of Global Admissions",
  description:
    "Founding open role at Norland Academy: own admissions conversion for The Principal Programme and build with founding equity upside.",
  alternates: {
    canonical: "/careers/founding-partner-head-of-global-admissions",
  },
  openGraph: {
    title: "Founding Partner & Head of Global Admissions | Norland Academy",
    description:
      "Own admissions conversion for The Principal Programme at Norland Academy. Founding role with equity upside.",
    url: "/careers/founding-partner-head-of-global-admissions",
    type: "website",
  },
};

export default function FoundingPartnerAdmissionsRolePage() {
  return <OpenRole />;
}
