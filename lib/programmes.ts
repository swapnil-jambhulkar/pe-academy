/** Shared programme definitions for marketing pages and homepage. */

export const PAID_PROGRAMME_NOTE =
  "GCPE and PGP are paid programmes. Tuition is confirmed at offer stage after application review.";

export const FREE_VS_PAID_NOTE =
  "The Day One Simulator is free. GCPE and PGP are paid programmes admitted by application.";

export const GCPE = {
  id: "gcpe",
  slug: "/cohort",
  shortName: "GCPE",
  name: "Graduate Certificate in Private Equity",
  duration: "12 weeks",
  tagline: "The Technical Sprint",
  audience: "Junior analysts, investment bankers, and chartered accountants who need day-one execution capability.",
  narrative:
    "A localized, live-fire deal desk experience. You enter a real data room from the Stator pipeline, build the LBO, and present your investment memo. You leave with raw execution capability.",
  admissionsNote: "Paid programme · Application-based cohort",
  features: [
    "Live VDR work on Stator pipeline deals",
    "Forensic LBO and quality-of-earnings judgment",
    "Investment Committee presentation experience",
    "Partner-level feedback on every workstream",
    "GCPE examination and graduate certificate outcome",
  ],
} as const;

export const PGP = {
  id: "pgp",
  slug: "/pgp",
  shortName: "PGP",
  name: "Post Graduate Programme in Private Equity & Deal Engineering",
  duration: "48 weeks",
  tagline: "The Institutional Track",
  audience:
    "Mid-level professionals, elite graduates, and high-potential transactors who want to command fund economics and structure cross-border deals.",
  narrative:
    "The complete lifecycle of a private equity professional. Includes the full GCPE technical sprint, plus debt syndication, legal engineering, portfolio value creation, domestic networking immersion, and structured preparation for global charter examinations.",
  includesGcpe: true,
  features: [
    "Full 12-week GCPE embedded in Term 1",
    "Capital layering, SPA markups, and close mechanics",
    "Portfolio value creation and post-acquisition integration",
    "Domestic and BKC networking immersion",
    "Principal-level deal engineering modules",
    "Dedicated cohort director and partner office hours",
  ],
  admissionsNote: "Paid programme · Application-based cohort",
  applyNote: "Applications reviewed selectively. Offers issued after application and fit review.",
} as const;

export const SIMULATOR = {
  slug: "/simulator",
  name: "Day One Analyst Simulator",
  tagline: "Prove execution before you apply",
  body: "A mock secure workstation: Outlook, VDR, and live deal judgment calls from the Stator desk. Built for juniors who know the theory but fear getting exposed on day one.",
} as const;
