export type GlossaryItem = {
  question: string;
  answer: string;
};

export const DEAL_MECHANICS_GLOSSARY: GlossaryItem[] = [
  {
    question: "What is a GP catch-up in a private equity waterfall?",
    answer:
      "A GP catch-up is a waterfall stage where the General Partner receives most or all incremental distributions after LP preferred return is met, until carried interest economics are aligned with the agreed split, often 80/20. It accelerates GP economics before the final pro-rata sharing phase starts.",
  },
  {
    question: "What is the difference between a locked-box and completion accounts mechanism?",
    answer:
      "Locked-box pricing sets enterprise value at a historical balance sheet date and protects value leakage through covenants. Completion accounts adjust price at close using actual net debt and working capital. Locked-box gives certainty and speed, while completion accounts give precision at the expense of post-close negotiation risk.",
  },
  {
    question: "What does QoE mean in a buyout process?",
    answer:
      "Quality of Earnings validates how much reported EBITDA is recurring, cash-convertible, and sustainable after adjustments. It removes one-offs, normalizes owner effects, and tests revenue recognition or cost deferrals. In underwriting, QoE drives the entry multiple confidence level, debt sizing, and downside covenant headroom assumptions.",
  },
  {
    question: "What is a debt covenant in sponsor-backed financing?",
    answer:
      "A debt covenant is a contractual test lenders use to monitor borrower risk after closing, such as leverage ratio, fixed-charge coverage, or minimum liquidity. Breaches can trigger waivers, repricing, or default remedies. Sponsors model covenant headroom quarterly across base and downside cases before signing commitments.",
  },
  {
    question: "What is rollover equity in a management buyout?",
    answer:
      "Rollover equity is the portion of seller or management ownership reinvested into the new capital structure at close rather than sold for cash. It aligns incentives with sponsor value creation plans, reduces upfront cash outflow, and influences post-money ownership, governance rights, and management retention economics.",
  },
  {
    question: "What is a management incentive plan (MIP)?",
    answer:
      "A management incentive plan grants equity or equity-like value to key operators based on return thresholds and time-based vesting. In buyouts, MIPs align management with sponsor value creation targets and retention needs. Design focuses on dilution, leaver provisions, vesting triggers, and tax-efficient payout structures.",
  },
  {
    question: "What is a stapled financing package?",
    answer:
      "Stapled financing is a pre-arranged debt package offered by a sell-side adviser to potential buyers during an auction. It can speed execution and signal financing capacity, but buyers still diligence terms and may raise alternatives. Sponsors evaluate flexibility, covenants, and certainty before relying on stapled debt.",
  },
  {
    question: "What is unitranche debt in private equity deals?",
    answer:
      "Unitranche debt combines senior and subordinated risk into a single facility, usually from direct lenders, with one blended interest rate and covenant set. It simplifies documentation and execution, but often costs more than pure bank senior debt. Sponsors use it when speed and certainty are priorities.",
  },
  {
    question: "What is an earn-out in M&A?",
    answer:
      "An earn-out is deferred purchase consideration paid only if the business meets agreed post-close performance metrics, such as EBITDA or revenue targets. It bridges valuation gaps between buyer and seller. Key drafting points include accounting definitions, control rights, dispute mechanics, and anti-manipulation protections.",
  },
  {
    question: "What is a no-shop clause?",
    answer:
      "A no-shop clause restricts the seller from soliciting or negotiating alternative offers after signing, subject to fiduciary carve-outs where relevant. It protects buyer deal certainty. Sponsors assess no-shop scope, matching rights, and breakup fee terms together because these provisions drive interloper risk before close.",
  },
  {
    question: "What is a break fee in private equity transactions?",
    answer:
      "A break fee is a pre-agreed payment triggered when specified events terminate a signed transaction, such as seller acceptance of a superior bid or financing failure. It compensates process costs and certainty loss. Amount and triggers are negotiated to balance deterrence with enforceability and auction competitiveness.",
  },
  {
    question: "What is working capital peg adjustment?",
    answer:
      "A working capital peg is the normalized level of net working capital embedded in purchase price assumptions. At completion, actual working capital is compared to the peg and price is adjusted up or down. Sponsors focus on seasonal normalization and accounting consistency to avoid value transfer.",
  },
  {
    question: "What does equity cure mean in leveraged finance?",
    answer:
      "An equity cure lets sponsors inject equity after a covenant breach period to restore compliance, usually by reducing net debt metrics through deemed EBITDA or debt paydown treatment. Cure rights are limited in frequency and amount. Lenders assess whether cures preserve credit quality or defer restructuring risk.",
  },
  {
    question: "What is a delayed-draw term loan?",
    answer:
      "A delayed-draw term loan commits lender capital at signing but allows staged borrowing over time, often for acquisitions or capex plans. Borrowers pay commitment fees on undrawn amounts. In buyouts, it preserves flexibility for bolt-ons while reducing immediate interest burden versus fully drawn structures.",
  },
  {
    question: "What is margin ratchet in debt documentation?",
    answer:
      "A margin ratchet links loan pricing to leverage or performance metrics so interest margin decreases as credit risk improves, and sometimes increases when leverage rises. It aligns lender compensation with risk trajectory. Sponsors model ratchet scenarios because small spread changes materially affect equity returns over hold periods.",
  },
  {
    question: "What is a PIK toggle feature?",
    answer:
      "A PIK toggle allows interest to be paid in kind, adding accrued interest to principal instead of cash for defined periods. It protects liquidity during stress, but increases leverage and refinancing risk. Sponsors treat PIK as a contingency tool and model compounding impact on exit deleveraging paths.",
  },
  {
    question: "What is vendor due diligence (VDD)?",
    answer:
      "Vendor due diligence is diligence commissioned by the seller before launch, typically across financials, tax, and legal workstreams, then shared with bidders. It improves process speed and reduces asymmetry, but buyers still run confirmatory checks. Sponsors compare VDD conclusions against independent downside hypotheses before binding bids.",
  },
  {
    question: "What is an independent sponsor model?",
    answer:
      "An independent sponsor sources and structures deals before having a committed blind-pool fund, then raises equity for each transaction from aligned capital partners. It can offer flexibility and sector focus, but depends heavily on relationship-based execution and certainty. Underwriting discipline must compensate for capital assembly risk.",
  },
  {
    question: "What is continuation fund transaction?",
    answer:
      "A continuation fund moves one or more portfolio assets from an existing fund into a new vehicle, allowing current LPs to exit or roll while extending sponsor ownership. It provides liquidity and hold-period flexibility. Governance and fairness hinge on valuation process, conflicts management, and LP election mechanics.",
  },
  {
    question: "What is a take-private in private equity?",
    answer:
      "A take-private is an acquisition where a public company is delisted and becomes privately owned, usually with leverage and sponsor equity. It requires public-market process compliance, financing certainty, and a clear post-close value plan. Execution risk includes shareholder approval, regulatory review, and disclosure obligations.",
  },
];
