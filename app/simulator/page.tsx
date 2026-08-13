import type { Metadata } from "next";
import DayOneSimulator from "@/components/simulator/DayOneSimulator";

export const metadata: Metadata = {
  title: "Day One Analyst Simulator",
  description:
    "Three live deal judgment scenarios in a mock secure workstation. Test how you decide under time pressure before you apply for The Principal Programme.",
  alternates: { canonical: "/simulator" },
  openGraph: {
    title: "Day One Analyst Simulator | Norland Academy",
    description:
      "Three live deal judgment scenarios in a mock secure workstation. Test how you decide under time pressure before you apply.",
    url: "/simulator",
    type: "website",
  },
};

export default function SimulatorPage() {
  return <DayOneSimulator />;
}
