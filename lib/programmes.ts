/** Shared programme definitions for marketing pages and homepage. */

export const PAID_PROGRAMME_NOTE = "Tuition is confirmed at offer stage.";

export const PROGRAMME = {
  id: "principal",
  slug: "/programme",
  applySlug: "/apply",
  shortName: "Principal Programme",
  name: "The Principal Programme",
  duration: "Twelve weeks",
  seats: 5,
  tagline: "You have executed deals and never owned one.",
  admissionsNote: "Five seats. By application.",
} as const;

export const SIMULATOR = {
  slug: "/simulator",
  name: "Day One Analyst Simulator",
  tagline: "Prove execution before you apply",
  body: "A mock secure workstation: Outlook, VDR, and live deal judgment calls. Test how you decide under time pressure before you apply.",
} as const;
