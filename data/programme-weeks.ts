export type SessionKind = "lecture" | "live-drill" | "guest-lecture" | "committee";

export type CurriculumPhase = "Thesis" | "Diligence" | "Structure" | "Defence";

export type ProgrammeWeek = {
  week: number;
  phase: CurriculumPhase;
  kind: SessionKind;
  session: string;
  lecture: string;
  deliverable: string;
  guestSeat?: "Diligence" | "Debt" | "Completion";
};

export const sessionKindLabel: Record<SessionKind, string> = {
  lecture: "Lecture",
  "live-drill": "Live session",
  "guest-lecture": "Guest lecture",
  committee: "Investment committee",
};

export const programmeWeeks: ProgrammeWeek[] = [
  {
    week: 1,
    phase: "Thesis",
    kind: "lecture",
    session: "Thesis and sector selection",
    lecture:
      "How to pick a sector you can underwrite from your own pattern recognition, then write screen criteria that kill names fast.",
    deliverable: "Written investment thesis and screen criteria",
  },
  {
    week: 2,
    phase: "Thesis",
    kind: "lecture",
    session: "Building the universe, first approaches",
    lecture:
      "Constructing a forty-name universe from filings, registries, and direct approaches. No banker book.",
    deliverable: "Forty name target universe",
  },
  {
    week: 3,
    phase: "Thesis",
    kind: "live-drill",
    session: "The ninety minute screen, run live and unrehearsed",
    lecture:
      "Ten names to three in the room. Kill reasons written while the clock runs. No rehearsal.",
    deliverable: "Ten screened to three, with written kill reasons",
  },
  {
    week: 4,
    phase: "Diligence",
    kind: "lecture",
    session: "Reading owner managed accounts",
    lecture:
      "Normalisations, add-backs, and what owner-managed accounts will not tell you. Quality of earnings without a QoE pack.",
    deliverable: "Pipeline review",
  },
  {
    week: 5,
    phase: "Diligence",
    kind: "lecture",
    session: "The owner conversation",
    lecture:
      "What you ask when you are the buyer, not the adviser. Call structure, information you need, and what you do not promise.",
    deliverable: "Call plan per target",
  },
  {
    week: 6,
    phase: "Diligence",
    kind: "guest-lecture",
    guestSeat: "Diligence",
    session: "Scoping diligence as a principal",
    lecture:
      "Workstream order, the information request list, and what a principal does not outsource.",
    deliverable: "Diligence plan and information request list",
  },
  {
    week: 7,
    phase: "Structure",
    kind: "guest-lecture",
    guestSeat: "Debt",
    session: "Debt capacity",
    lecture:
      "What clearing banks will underwrite in this rate environment, and how that binds entry price.",
    deliverable: "Indicative debt structure",
  },
  {
    week: 8,
    phase: "Structure",
    kind: "lecture",
    session: "Price, structure and rolled equity",
    lecture:
      "Building a structure the committee can vote on. Entry price, rolled equity, and what you will not pay.",
    deliverable: "Structure with a defended entry price",
  },
  {
    week: 9,
    phase: "Structure",
    kind: "lecture",
    session: "The memorandum",
    lecture:
      "Four pages. What belongs in the paper, what belongs in the appendix, and what an IC will not read twice.",
    deliverable: "First draft, four pages",
  },
  {
    week: 10,
    phase: "Defence",
    kind: "live-drill",
    session: "Teardown, two memoranda dissected live",
    lecture:
      "Two papers taken apart in the room. What survives an IC read and what gets sent back.",
    deliverable: "Final memorandum",
  },
  {
    week: 11,
    phase: "Defence",
    kind: "committee",
    session: "Investment Committee",
    lecture:
      "Three external chairs. They have read the papers. Three hours of questions. A vote. Recommendations can be rejected.",
    deliverable: "Live defence and vote",
  },
  {
    week: 12,
    phase: "Defence",
    kind: "guest-lecture",
    guestSeat: "Completion",
    session: "Completion mechanics",
    lecture:
      "From a voted recommendation to a closeable path, and the hundred day plan the owner will actually run.",
    deliverable: "Hundred day plan",
  },
];

export const curriculumPhases: { id: CurriculumPhase; summary: string }[] = [
  {
    id: "Thesis",
    summary: "Weeks 1 to 3. Choose the sector, build the universe, screen live.",
  },
  {
    id: "Diligence",
    summary: "Weeks 4 to 6. Accounts, the owner conversation, then a guest lecture on scoping diligence.",
  },
  {
    id: "Structure",
    summary: "Weeks 7 to 9. Guest lecture on debt capacity, then price, structure, and the first memorandum.",
  },
  {
    id: "Defence",
    summary: "Weeks 10 to 12. Teardown, live investment committee, guest lecture on completion.",
  },
];
