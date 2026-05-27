/** Rich VDR content for dwell time - all fictional / educational. */

export interface VdrFileRecord {
  /** Stable id: "folderName/fileName" */
  id: string;
  folder: string;
  fileName: string;
  /** Shown in preview header */
  headline: string;
  /** Long body - plain text */
  body: string;
}

const joinId = (folder: string, file: string) => `${folder}/${file}`;

export const VDR_FILES: VdrFileRecord[] = [
  {
    id: joinId("01_Teaser_&_Process", "Project_Apex_Teaser_May2026.pdf"),
    folder: "01_Teaser_&_Process",
    fileName: "Project_Apex_Teaser_May2026.pdf",
    headline: "Executive summary - Project Apex (UK healthcare services)",
    body: `CONFIDENTIAL - NOT FOR DISTRIBUTION

The Company is a lower-middle market operator of outpatient clinics and allied healthcare services across the UK, with a bias toward recurring NHS-referred volumes and private pay mix in two regional hubs.

Investment highlights (seller narrative):
• “Sticky” referral relationships with regional NHS trusts.
• Management-reported adjusted EBITDA of £6.5m for the last twelve months (LTM).
• “Operational resilience” through pandemic-era cost programmes.

Risk factors (lightly disclosed in teaser footnotes):
• Revenue concentration in top two clinic clusters.
• Integration of three bolt-ons still running on separate billing systems.
• Wage inflation and agency nurse usage elevated vs. FY22 baseline.

Process: IOI requested by Friday COB. Management presentation slots are oversubscribed - book early via process agent.

This document is marketing material. Nothing herein is warranted as to accuracy or completeness. You are expected to triangulate every number against primary evidence in the data room.`,
  },
  {
    id: joinId("01_Teaser_&_Process", "Process_Letter_Draft.docx"),
    folder: "01_Teaser_&_Process",
    fileName: "Process_Letter_Draft.docx",
    headline: "Process letter (draft v0.3 - internal)",
    body: `INTERNAL DRAFT - DO NOT SEND

Key dates (indicative):
• VDR opens: T+0
• Management Q&A: T+5
• IOI: T+4 (compressed - seller wants early heat)

Seller counsel has flagged that any buyer proposing aggressive leverage overlays in the IOI without lender letters will be dropped from round-2.

Norland desk note: align any public leverage language with what clearing banks will actually underwrite in this rate environment.`,
  },
  {
    id: joinId("02_Financials", "EBITDA_Bridge_ProjectApex.xlsx"),
    folder: "02_Financials",
    fileName: "EBITDA_Bridge_ProjectApex.xlsx",
    headline: "Workbook notes - EBITDA bridge (management)",
    body: `Tab: "Mgmt bridge" - key rows

Reported EBITDA (audited FY base) trails the £6.5m headline. Management layers a run-rate cost save programme and a line labelled "Normalized pandemic-related efficiency gains" (£1.2m).

Analyst discipline:
• Trace each add-back to supporting workpapers (payroll, agency spend, clinic-level P&Ls).
• Flag anything that is non-recurring, non-operating, or policy-driven (temporary staffing mix, one-off grants, accounting reclasses).
• Remember: every £1m of fake run-rate at 8x entry is £8m of enterprise value - before synergies, fees, or multiple expansion fantasies.

If you cannot defend the add-back in a partner meeting in 60 seconds, it does not belong in the base case.`,
  },
  {
    id: joinId("02_Financials", "Management_Accounts_FY24.pdf"),
    folder: "02_Financials",
    fileName: "Management_Accounts_FY24.pdf",
    headline: "Management accounts FY24 - scan notes",
    body: `Opex walk:
• Payroll +32% vs FY22 driven by agency hours in Q3–Q4.
• Rent roll stable - a positive if leases are inflation-linked (check covenants).

Capex:
• Maintenance capex appears under-accrued in Q4 - watch for year-end true-ups in QoE.

Working capital:
• Creditor stretch visible in DPO extension - not inherently fatal, but model cash properly through close.

Cross-check any "efficiency" claims against agency spend and hours worked - not against management slides alone.`,
  },
  {
    id: joinId("03_QoE_&_VDD", "Vendor_QoE_Executive_Summary.pdf"),
    folder: "03_QoE_&_VDD",
    fileName: "Vendor_QoE_Executive_Summary.pdf",
    headline: "Vendor QoE - executive summary (sell-side)",
    body: `This is a sell-side report - read for omissions, not conclusions.

Typical pattern: normalised EBITDA is presented on a "policy-adjusted" basis with limited clinic-level reconciliation.

Your job is not to believe the executive summary. Your job is to build the bridge from reported numbers → IC base case → downside case, each with explicit evidence anchors.

If the vendor QoE disagrees with management's bridge, document the delta and escalate before you burn partner attention.`,
  },
  {
    id: joinId("04_Capital_Structure", "Broker_Leverage_Commentary.pdf"),
    folder: "04_Capital_Structure",
    fileName: "Broker_Leverage_Commentary.pdf",
    headline: "Debt advisor commentary - leverage (sell-side)",
    body: `Narrative: "UK mid-market healthcare continues to clear at up to 5.5x senior leverage in competitive processes."

Reality check:
• Clearing banks have tightened guidance on healthcare services exposure.
• Liquidity for sponsor-style leverage is bifurcated: high-quality recurring cash streams vs. everything else.

Any IC pack that shows 5.5x senior without a credible bank term sheet is a fiction until proven otherwise.

Model both: (i) bankable base case at lender cap, and (ii) sponsor "aspirational" case - but never confuse the two in the headline equity check.`,
  },
  {
    id: joinId("05_Commercial", "customer_accounts.csv"),
    folder: "05_Commercial",
    fileName: "customer_accounts.csv",
    headline: "customer_accounts.csv - data room export",
    body: `Plaintext export (truncated preview). Row-level revenue by clinic cluster.

Observation that matters immediately:
• Top two clusters combine for ~48% of LTM revenue.

Before you touch revenue growth assumptions in the model, you need cohort retention and referral concentration - ideally by payer and by clinician headcount.

If someone asks you "what's the commercial diligence view?" in the partner meeting, the answer is not a growth rate. The answer is concentration and evidence.`,
  },
];

export function getVdrFileById(id: string | null): VdrFileRecord | undefined {
  if (!id) return undefined;
  return VDR_FILES.find((f) => f.id === id);
}

export const VDR_FOLDER_ORDER = [
  "01_Teaser_&_Process",
  "02_Financials",
  "03_QoE_&_VDD",
  "04_Capital_Structure",
  "05_Commercial",
] as const;

export function filesInFolder(folder: string): VdrFileRecord[] {
  return VDR_FILES.filter((f) => f.folder === folder);
}
