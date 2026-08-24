/** Shared programme definitions for marketing pages and homepage. */

export const PAID_PROGRAMME_NOTE = "Tuition is confirmed at offer stage.";

/** Official PGP application form (Google Forms). Responses collect in the linked sheet. */
export const APPLY_FORM_URL = "https://forms.gle/TAnLstv7bMcbSVHs8";

export const PROGRAMME = {
  id: "pgp",
  slug: "/pgp",
  applySlug: "/apply",
  shortName: "PGP",
  name: "The Principal Programme",
  fullName: "PGP · The Principal Programme",
  duration: "Twelve weeks",
  seats: 5,
  tagline: "You have executed deals and never owned one.",
  admissionsNote: "Five seats. By application.",
  dealUniverse: "£5 to £30 million owner-managed UK businesses",
  dealUniverseDetail:
    "No CIM. No banker book. Proprietary outreach to owner-managers. Lower mid-market and independent-sponsor process, not mega-fund auctions.",
} as const;

export const SIMULATOR = {
  slug: "/simulator",
  name: "Day One Analyst Simulator",
  tagline: "Prove execution before you apply",
  body: "A mock secure workstation: Outlook, VDR, and live deal judgment calls. Test how you decide under time pressure before you apply.",
} as const;
