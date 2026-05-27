import type { Metadata } from "next";
import DayOneSimulator from "@/components/simulator/DayOneSimulator";

export const metadata: Metadata = {
  title: "Day One Analyst Simulator",
  description:
    "Three live-deal judgment scenarios from the Norland Capital desk. Test execution instincts before day one, then apply for the 12-week GCPE or enquire about PGP.",
};

export default function SimulatorPage() {
  return <DayOneSimulator />;
}
