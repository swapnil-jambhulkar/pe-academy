import type { Metadata } from "next";
import ProgrammeContent from "@/components/programme/ProgrammeContent";

export const metadata: Metadata = {
  alternates: { canonical: "/pgp" },
};

export default function ProgrammePage() {
  return <ProgrammeContent />;
}
