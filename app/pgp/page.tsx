import type { Metadata } from "next";
import ProgrammeContent from "@/components/programme/ProgrammeContent";

export const metadata: Metadata = {
  title: "PGP · The Principal Programme",
  description:
    "Twelve weeks. Five seats. Source your own acquisition target, price it, structure it, and defend the recommendation to an investment committee that votes.",
  alternates: { canonical: "/pgp" },
  openGraph: {
    title: "PGP · The Principal Programme | Norland Academy",
    description:
      "A twelve week cohort for mid career deal professionals who have executed transactions and never owned one.",
    url: "/pgp",
    type: "website",
  },
};

export default function PgpPage() {
  return <ProgrammeContent />;
}
