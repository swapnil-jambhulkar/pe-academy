/** Shared programme definitions for marketing pages and homepage. */

export const PAID_PROGRAMME_NOTE = "Tuition is confirmed at offer stage.";

/** Official Academy application form (Google Forms). Responses collect in the linked sheet. */
export const APPLY_FORM_URL = "https://forms.gle/TAnLstv7bMcbSVHs8";

export const NEXT_COHORT_START = "June 2026";

export const ACADEMY_SHARED = {
  intro:
    "Join a selective group of professionals mastering institutional private equity execution. Training is structured as two intensive pathways. Neither is an academic course. Both are live-fire deal desks based on actual pipeline transactions.",
  outcomes: [
    {
      title: "Real deals, not case studies",
      body: "Work directly on live pipeline transactions.",
    },
    {
      title: "Partner-level review",
      body: "Direct feedback on your models and memoranda.",
    },
    {
      title: "Proof of real work",
      body: "A tangible portfolio of deal execution for interviews.",
    },
    {
      title: "Inside access",
      body: "Office hours, mock interviews, and direct mentorship.",
    },
  ],
} as const;

/** GCPE: 12-week technical sprint. */
export const GCPE = {
  id: "gcpe",
  slug: "/gcpe",
  applySlug: "/apply",
  shortName: "GCPE",
  name: "Graduate Certificate in Private Equity",
  fullName: "GCPE · Graduate Certificate in Private Equity",
  duration: "Twelve weeks",
  formatLabel: "12-Week Sprint",
  seats: 10,
  tagline: "Forensic modelling, diligence, and VDR sprints on live deals.",
  admissionsNote: "Ten seats. By application.",
  focus:
    "Forensic three-statement LBO modelling, commercial due diligence, and raw virtual data room sprints.",
  outcome:
    "Structure lower-middle-market buyouts and defend your investment memoranda in front of a live investment committee.",
} as const;

/**
 * PGP: 48-week full-cycle track.
 * Site pages that still say "Principal Programme" map to this offering over time.
 */
export const PGP = {
  id: "pgp",
  slug: "/pgp",
  applySlug: "/apply",
  shortName: "PGP",
  name: "Post-Graduate Programme",
  fullName: "PGP · Post-Graduate Programme",
  duration: "Forty-eight weeks",
  formatLabel: "48-Week Full-Cycle Track",
  seats: null as number | null,
  tagline: "The complete lifecycle of an acquisition.",
  admissionsNote: "By application.",
  focus: "The complete lifecycle of an acquisition.",
  outcome:
    "Run four to five real transactions end to end: initial deal sourcing, capital layering, locked-box mechanisms, and post-acquisition value creation.",
} as const;

/**
 * Compatibility export for existing marketing pages.
 * Prefer GCPE or PGP for new copy. This remains the primary paid cohort reference until pages are migrated.
 */
export const PROGRAMME = {
  id: "pgp",
  slug: "/pgp",
  applySlug: "/apply",
  shortName: "PGP",
  name: "The Principal Programme",
  fullName: "PGP · The Principal Programme",
  duration: "Forty-eight weeks",
  seats: 5,
  tagline: "You have executed deals and never owned one.",
  admissionsNote: "By application.",
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
