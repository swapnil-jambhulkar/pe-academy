export type SessionKind = "lecture" | "live-drill" | "guest-lecture" | "committee";

export type CurriculumPhase = "Origination" | "Diligence" | "Structure" | "Defence";

export type GuestSeat = "TS" | "Debt" | "Counsel";

export type ProgrammeWeek = {
  week: number;
  phase: CurriculumPhase;
  kind: SessionKind;
  session: string;
  lecture: string;
  deliverable: string;
  guestSeat?: GuestSeat;
};

export const sessionKindLabel: Record<SessionKind, string> = {
  lecture: "Lecture",
  "live-drill": "Live session",
  "guest-lecture": "Guest lecture",
  committee: "Investment committee",
};

export const DEAL_UNIVERSE =
  "£5 to £30 million enterprise value, owner-managed UK businesses. No CIM. No banker book. Proprietary outreach.";

export const programmeWeeks: ProgrammeWeek[] = [
  {
    week: 1,
    phase: "Origination",
    kind: "lecture",
    session: "Thesis and sector selection",
    lecture:
      "Pick a sector you can underwrite from your own pattern recognition. Frame it for owner-managed UK targets in the £5 to £30 million range, not mega-fund auction processes.",
    deliverable: "Written investment thesis and screen criteria",
  },
  {
    week: 2,
    phase: "Origination",
    kind: "lecture",
    session: "Building the proprietary universe",
    lecture:
      "Construct a forty-name universe from filings, registries, and trade sources. No teaser, no CIM, no banker list. This is the start of the origination sprint.",
    deliverable: "Forty name target universe",
  },
  {
    week: 3,
    phase: "Origination",
    kind: "lecture",
    session: "Owner outreach sprint",
    lecture:
      "Real outbound to owner-managers. You write as a learner on the programme, not as an authorised adviser and not as someone making an offer. Template language, confidentiality, and what you must not say.",
    deliverable: "Outreach log: twenty approaches with status and next step",
  },
  {
    week: 4,
    phase: "Origination",
    kind: "live-drill",
    session: "Gate-1 screen, run live and unrehearsed",
    lecture:
      "First deliberate practice cycle on screening judgement. Ten names to three in the room. Kill reasons written while the clock runs.",
    deliverable: "Ten screened to three, with written kill reasons",
  },
  {
    week: 5,
    phase: "Diligence",
    kind: "lecture",
    session: "The owner conversation",
    lecture:
      "What you ask when you are the buyer, not the adviser. Call structure for an owner-managed business, information you need, and what you do not promise.",
    deliverable: "Call plan per live target",
  },
  {
    week: 6,
    phase: "Diligence",
    kind: "guest-lecture",
    guestSeat: "TS",
    session: "Scoping financial diligence as a principal",
    lecture:
      "Guest faculty from transaction services. Workstream order, the information request list, normalisations on owner-managed accounts, and what a principal does not outsource.",
    deliverable: "Diligence plan and information request list",
  },
  {
    week: 7,
    phase: "Structure",
    kind: "guest-lecture",
    guestSeat: "Debt",
    session: "Debt capacity and lender reality",
    lecture:
      "Guest faculty from lending. What clearing banks will underwrite on a mid-market UK deal in this rate environment, and how that binds entry price.",
    deliverable: "Indicative debt structure",
  },
  {
    week: 8,
    phase: "Structure",
    kind: "lecture",
    session: "First-round LBO, price and structure",
    lecture:
      "First deliberate practice cycle on the returns view. Sources and uses, operating case, entry and exit, debt quantum, IRR and MOIC. A structure the committee can vote on.",
    deliverable: "First-round LBO with a defended entry price",
  },
  {
    week: 9,
    phase: "Defence",
    kind: "lecture",
    session: "The investment memorandum, draft one",
    lecture:
      "Four pages. Recommendation on page one, headline returns, and top risks. What belongs in the paper and what an IC will not read twice.",
    deliverable: "Investment memorandum, draft one",
  },
  {
    week: 10,
    phase: "Defence",
    kind: "live-drill",
    session: "Memo teardown and redraft",
    lecture:
      "Second deliberate practice cycle. Two papers taken apart in the room. Returns cases stressed again. Redraft before the live committee.",
    deliverable: "Final investment memorandum",
  },
  {
    week: 11,
    phase: "Defence",
    kind: "committee",
    session: "Investment Committee",
    lecture:
      "Three external investors, currently investing, not employees of the programme. They have read the papers. Three hours of questions. A vote. Recommendations can be rejected.",
    deliverable: "Live defence and vote",
  },
  {
    week: 12,
    phase: "Defence",
    kind: "guest-lecture",
    guestSeat: "Counsel",
    session: "Completion mechanics",
    lecture:
      "Guest faculty from corporate law. Locked box versus completion accounts, cash-free debt-free, working-capital pegs, and leakage. Then the hundred day plan the owner will actually run.",
    deliverable: "Hundred day plan",
  },
];

export const curriculumPhases: { id: CurriculumPhase; summary: string }[] = [
  {
    id: "Origination",
    summary:
      "Weeks 1 to 4. Thesis, proprietary universe, real owner outreach, then a live gate-1 screen.",
  },
  {
    id: "Diligence",
    summary: "Weeks 5 to 6. Owner conversation, then a guest lecture from transaction services.",
  },
  {
    id: "Structure",
    summary: "Weeks 7 to 8. Guest lecture from lending, then the first-round LBO and entry price.",
  },
  {
    id: "Defence",
    summary:
      "Weeks 9 to 12. Memorandum draft, live teardown and redraft, external IC vote, then completion mechanics.",
  },
];
