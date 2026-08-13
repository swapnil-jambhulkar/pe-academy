export type ProgrammeWeek = {
  week: number;
  session: string;
  deliverable: string;
};

export const programmeWeeks: ProgrammeWeek[] = [
  { week: 1, session: "Thesis and sector selection", deliverable: "Written investment thesis and screen criteria" },
  { week: 2, session: "Building the universe, first approaches", deliverable: "Forty name target universe" },
  { week: 3, session: "The ninety minute screen, run live and unrehearsed", deliverable: "Ten screened to three, with written kill reasons" },
  { week: 4, session: "Reading owner managed accounts", deliverable: "Pipeline review" },
  { week: 5, session: "The owner conversation", deliverable: "Call plan per target" },
  { week: 6, session: "Scoping diligence as a principal (guest practitioner)", deliverable: "Diligence plan and information request list" },
  { week: 7, session: "Debt capacity (guest practitioner)", deliverable: "Indicative debt structure" },
  { week: 8, session: "Price, structure and rolled equity", deliverable: "Structure with a defended entry price" },
  { week: 9, session: "The memorandum", deliverable: "First draft, four pages" },
  { week: 10, session: "Teardown, two memoranda dissected live", deliverable: "Final memorandum" },
  { week: 11, session: "Investment Committee", deliverable: "Live defence and vote" },
  { week: 12, session: "Completion mechanics (guest practitioner)", deliverable: "Hundred day plan" },
];
