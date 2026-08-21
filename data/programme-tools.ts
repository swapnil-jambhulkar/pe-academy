export type ProgrammeToolPhase = "Origination" | "Diligence" | "Structure" | "Defence" | "All";

export type ProgrammeTool = {
  id: string;
  name: string;
  logo: string;
  phases: ProgrammeToolPhase[];
  use: string;
};

/**
 * Desk tools used across the twelve-week PGP workflow.
 * These are nominative tool labels for the curriculum desk, not claims of exclusive vendor partnership.
 * Formal seat access is confirmed at offer stage.
 */
export const programmeTools: ProgrammeTool[] = [
  {
    id: "companies-house",
    name: "Companies House",
    logo: "/partners/tools/companies-house.svg",
    phases: ["Origination"],
    use: "Filings, officers, and ownership checks for the proprietary universe",
  },
  {
    id: "beauhurst",
    name: "Beauhurst",
    logo: "/partners/tools/beauhurst.svg",
    phases: ["Origination"],
    use: "UK private-company signals for owner-managed mid-market targets",
  },
  {
    id: "pitchbook",
    name: "PitchBook",
    logo: "/partners/tools/pitchbook.svg",
    phases: ["Origination", "Structure"],
    use: "Comps, deal context, and market framing for the thesis",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    logo: "/partners/tools/linkedin.svg",
    phases: ["Origination"],
    use: "Owner and adviser mapping for the outreach sprint",
  },
  {
    id: "dealcloud",
    name: "DealCloud",
    logo: "/partners/tools/dealcloud.svg",
    phases: ["Origination", "Diligence"],
    use: "Pipeline, outreach log, and workstream tracking",
  },
  {
    id: "datasite",
    name: "Datasite",
    logo: "/partners/tools/datasite.svg",
    phases: ["Diligence"],
    use: "Virtual data room for diligence packs and Q and A",
  },
  {
    id: "excel",
    name: "Excel",
    logo: "/partners/tools/excel.svg",
    phases: ["Structure", "Defence", "All"],
    use: "LBO, sources and uses, and returns cases",
  },
  {
    id: "outlook",
    name: "Outlook",
    logo: "/partners/tools/outlook.svg",
    phases: ["Diligence", "Defence", "All"],
    use: "Deal correspondence and committee paper circulation",
  },
  {
    id: "zoom",
    name: "Zoom",
    logo: "/partners/tools/zoom.svg",
    phases: ["Defence", "All"],
    use: "Live sessions, guest lectures, and the IC defence",
  },
];

export const programmeToolPhases: { id: ProgrammeToolPhase; label: string }[] = [
  { id: "Origination", label: "Origination" },
  { id: "Diligence", label: "Diligence / VDR" },
  { id: "Structure", label: "Structure" },
  { id: "Defence", label: "Defence / IC" },
];
