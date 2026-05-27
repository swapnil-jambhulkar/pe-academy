export type IndustryPage = {
  slug: string;
  industry: string;
  region: string;
  riskFactors: string[];
  baselineMetric: string;
  modellingFocus: string;
};

type IndustrySeed = Omit<IndustryPage, "slug">;

function toSlug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const INDUSTRY_SEEDS: IndustrySeed[] = [
  { industry: "Healthcare", region: "UK", riskFactors: ["Tariff reimbursement revisions", "Nursing vacancy rates", "Bed occupancy volatility"], baselineMetric: "EBITDA per bed day", modellingFocus: "Occupancy and staffing sensitivity stack" },
  { industry: "Care Homes", region: "UK", riskFactors: ["Local authority fee resets", "Agency labor reliance", "CQC compliance interventions"], baselineMetric: "Resident week margin by facility", modellingFocus: "Fee reset and staffing cost bridge" },
  { industry: "Pharma Services", region: "UK", riskFactors: ["Client trial delays", "Regulatory audit findings", "Concentrated biotech exposure"], baselineMetric: "Billable scientist utilization", modellingFocus: "Project timing and cancellation downside" },
  { industry: "Medical Devices", region: "Europe", riskFactors: ["Procurement tender losses", "Product recall risk", "Distributor concentration"], baselineMetric: "Gross profit per installed unit", modellingFocus: "Tender win rate and recall reserve scenarios" },
  { industry: "B2B SaaS", region: "Europe", riskFactors: ["Net revenue retention erosion", "SMB churn spikes", "Discounting pressure"], baselineMetric: "Net revenue retention and burn multiple", modellingFocus: "Cohort retention and churn waterfall" },
  { industry: "Cybersecurity", region: "Europe", riskFactors: ["Vendor consolidation pressure", "Renewal compression", "Cloud workload shifts"], baselineMetric: "Renewal ARR conversion", modellingFocus: "Renewal quality and pricing bridge" },
  { industry: "Vertical Software", region: "UK", riskFactors: ["Platform migration delays", "Legacy contract churn", "Implementation cost overruns"], baselineMetric: "ARR growth net of churn", modellingFocus: "Migration pace and margin trajectory" },
  { industry: "IT Services", region: "Europe", riskFactors: ["Bench inflation", "Rate card pressure", "Top account concentration"], baselineMetric: "Gross profit per delivery FTE", modellingFocus: "Utilization and rate realization cases" },
  { industry: "Data Centers", region: "Europe", riskFactors: ["Power cost pass-through lag", "Fit-out capex overruns", "Hyperscaler concentration"], baselineMetric: "Revenue per MW contracted", modellingFocus: "Utilization ramp and power spread stress test" },
  { industry: "Semiconductor Equipment", region: "Europe", riskFactors: ["Order cycle volatility", "Export control restrictions", "Service attach variability"], baselineMetric: "Backlog to revenue conversion", modellingFocus: "Cyclical demand and backlog quality grid" },
  { industry: "Logistics", region: "UK", riskFactors: ["Fuel surcharge lag", "Route density imbalance", "Key account churn"], baselineMetric: "Contribution margin per lane", modellingFocus: "Volume and fuel pass-through scenarios" },
  { industry: "Freight Forwarding", region: "Europe", riskFactors: ["Spot rate compression", "Capacity disruptions", "Carrier dependency"], baselineMetric: "Gross profit per shipment", modellingFocus: "Rate cycle and volume downside" },
  { industry: "Warehousing", region: "UK", riskFactors: ["Lease escalation exposure", "Labor absenteeism", "Automation uptime risk"], baselineMetric: "Gross margin per pallet moved", modellingFocus: "Utilization and lease cost leverage test" },
  { industry: "Last Mile Delivery", region: "UK", riskFactors: ["Parcel mix shift", "Rider retention volatility", "Service penalty deductions"], baselineMetric: "Contribution margin per drop", modellingFocus: "Density and failed delivery sensitivity" },
  { industry: "Ports and Terminals", region: "Europe", riskFactors: ["Throughput cyclicality", "Labor stoppage events", "Concession renegotiation"], baselineMetric: "EBITDA per TEU handled", modellingFocus: "Volume stress and concession cost assumptions" },
  { industry: "Industrial Services", region: "Europe", riskFactors: ["Project delay penalties", "Subcontractor cost inflation", "Working capital swings"], baselineMetric: "Backlog quality to EBITDA conversion", modellingFocus: "Backlog run-off and cash conversion scenarios" },
  { industry: "Engineering Services", region: "UK", riskFactors: ["Utilization dilution", "Fixed price bid losses", "Design rework exposure"], baselineMetric: "Net fee income per engineer", modellingFocus: "Utilization and project margin bridge" },
  { industry: "Environmental Services", region: "UK", riskFactors: ["Regulatory permit revisions", "Disposal cost inflation", "Municipal contract rebids"], baselineMetric: "Margin per ton processed", modellingFocus: "Volume and disposal price stack" },
  { industry: "Testing Inspection Certification", region: "Europe", riskFactors: ["Audit cycle extension", "Price competition", "Client concentration"], baselineMetric: "Revenue per auditor day", modellingFocus: "Audit throughput and price reset downside" },
  { industry: "Industrial Automation", region: "Europe", riskFactors: ["Component lead-time shocks", "Project slippage", "Aftermarket attach variance"], baselineMetric: "Gross margin per installed system", modellingFocus: "Install pace and aftermarket mix cases" },
  { industry: "Education", region: "UK", riskFactors: ["Enrollment variability", "Student visa changes", "Completion shortfalls"], baselineMetric: "Revenue per active learner", modellingFocus: "Enrollment funnel and completion sensitivity" },
  { industry: "Training Providers", region: "UK", riskFactors: ["Corporate budget cuts", "Instructor utilization dips", "Certification pass-rate decline"], baselineMetric: "Contribution per cohort seat", modellingFocus: "Cohort fill and pricing scenarios" },
  { industry: "EdTech Platforms", region: "Europe", riskFactors: ["CAC inflation", "Learner churn", "Course completion drop-off"], baselineMetric: "LTV to CAC by segment", modellingFocus: "Retention cohorts and CAC payback stress" },
  { industry: "Language Schools", region: "UK", riskFactors: ["Seasonal intake concentration", "Visa processing delays", "Host city occupancy pressure"], baselineMetric: "Gross profit per student week", modellingFocus: "Seasonality and occupancy stress test" },
  { industry: "Professional Certification", region: "Global", riskFactors: ["Exam cycle deferrals", "Brand trust erosion", "Partner channel dependency"], baselineMetric: "Revenue per registered candidate", modellingFocus: "Registration and completion conversion" },
  { industry: "Business Services", region: "UK", riskFactors: ["Contract repricing gaps", "Labor inflation", "Scope creep"], baselineMetric: "Gross margin by service line", modellingFocus: "Pricing reset and labor pass-through analysis" },
  { industry: "HR Services", region: "Europe", riskFactors: ["Placement cycle downturn", "Client concentration", "Compliance liabilities"], baselineMetric: "Net fee income per consultant", modellingFocus: "Placement volume and fee sensitivity" },
  { industry: "Compliance Services", region: "UK", riskFactors: ["Regulatory framework shifts", "Audit finding liabilities", "Renewal churn"], baselineMetric: "Recurring contract margin", modellingFocus: "Renewal and remediation cost scenarios" },
  { industry: "Legal Process Outsourcing", region: "Europe", riskFactors: ["Labor arbitrage compression", "Client insourcing", "Data security incidents"], baselineMetric: "Billable margin per file handled", modellingFocus: "Rate card and productivity bridge" },
  { industry: "Facilities Management", region: "UK", riskFactors: ["Contract mobilization overruns", "Wage indexation lag", "Penalty deductions"], baselineMetric: "Site-level EBITDA margin", modellingFocus: "Contract mix and mobilization downside" },
  { industry: "Food Manufacturing", region: "Europe", riskFactors: ["Input commodity shocks", "Retailer margin pressure", "Private label mix drift"], baselineMetric: "Gross margin net of commodity lag", modellingFocus: "Commodity and pricing scenario matrix" },
  { industry: "Consumer Packaged Goods", region: "UK", riskFactors: ["Promotional intensity", "Retail shelf displacement", "Raw material inflation"], baselineMetric: "Contribution margin per SKU", modellingFocus: "Mix shift and promo efficiency waterfall" },
  { industry: "Beverages", region: "Europe", riskFactors: ["Excise duty changes", "On-trade demand swings", "Packaging cost spikes"], baselineMetric: "Gross profit per hectoliter", modellingFocus: "Channel mix and excise sensitivity" },
  { industry: "Specialty Chemicals", region: "Europe", riskFactors: ["Feedstock volatility", "Environmental compliance capex", "Customer qualification delays"], baselineMetric: "Gross margin by product family", modellingFocus: "Feedstock pass-through timing" },
  { industry: "Packaging", region: "UK", riskFactors: ["Resin and paper cost inflation", "Customer contract renegotiation", "Capacity utilization drift"], baselineMetric: "EBITDA per ton shipped", modellingFocus: "Input cost and volume stress tests" },
  { industry: "Specialty Retail", region: "UK", riskFactors: ["Like-for-like traffic declines", "Markdown pressure", "Lease step-ups"], baselineMetric: "Store contribution after markdowns", modellingFocus: "Traffic basket and markdown waterfall" },
  { industry: "Ecommerce", region: "Europe", riskFactors: ["Paid media inflation", "Return rate escalation", "Fulfilment cost creep"], baselineMetric: "Contribution margin per order", modellingFocus: "CAC, returns, and logistics sensitivity" },
  { industry: "Omnichannel Retail", region: "UK", riskFactors: ["Store cannibalization", "Inventory obsolescence", "Promo over-reliance"], baselineMetric: "Gross margin return on inventory", modellingFocus: "Channel mix and inventory aging analysis" },
  { industry: "Luxury Goods", region: "Europe", riskFactors: ["Tourism demand swings", "Grey market leakage", "Wholesale inventory corrections"], baselineMetric: "Gross margin by channel", modellingFocus: "Geography mix and markdown risk" },
  { industry: "Beauty and Personal Care", region: "Global", riskFactors: ["Influencer channel volatility", "Product launch miss risk", "Retailer delisting"], baselineMetric: "Repeat purchase rate by cohort", modellingFocus: "Launch hit-rate and retention cases" },
  { industry: "Energy Services", region: "UK", riskFactors: ["Commodity price whiplash", "Project cancellation exposure", "Counterparty credit stress"], baselineMetric: "EBITDA per active rig or contract", modellingFocus: "Utilization and day-rate scenarios" },
  { industry: "Renewables O and M", region: "Europe", riskFactors: ["Wind resource variability", "Component failure rates", "Contract repricing"], baselineMetric: "Availability-adjusted service margin", modellingFocus: "Availability and maintenance cost downside" },
  { industry: "Utilities Infrastructure", region: "UK", riskFactors: ["Regulated return reset", "Capex timing slippage", "Penalty regimes"], baselineMetric: "Regulated asset base return spread", modellingFocus: "Allowed return and capex phasing" },
  { industry: "Telecom Infrastructure", region: "Europe", riskFactors: ["Anchor tenant churn", "Lease renegotiation pressure", "Site power cost inflation"], baselineMetric: "Tenancy ratio and EBITDA per site", modellingFocus: "Colocation ramp and churn scenarios" },
  { industry: "Aviation Services", region: "Europe", riskFactors: ["Passenger volume shocks", "Slot disruption events", "Fuel passthrough lags"], baselineMetric: "Gross margin per aircraft turnaround", modellingFocus: "Volume and operating leverage stress" },
  { industry: "Automotive Components", region: "Europe", riskFactors: ["OEM production cuts", "Warranty claim spikes", "Raw material pass-through lag"], baselineMetric: "Contribution margin per platform", modellingFocus: "Production volume and warranty cases" },
  { industry: "Real Estate Services", region: "UK", riskFactors: ["Transaction cycle slowdown", "Fee compression", "Pipeline conversion delays"], baselineMetric: "Net fee income to pipeline conversion", modellingFocus: "Conversion timing and fee-rate grid" },
  { industry: "PropTech", region: "Europe", riskFactors: ["Adoption curve uncertainty", "Partner dependency", "Churn in smaller landlords"], baselineMetric: "ARR per managed unit", modellingFocus: "Adoption and churn sensitivity" },
  { industry: "Hospitality Services", region: "UK", riskFactors: ["RevPAR volatility", "Wage inflation", "Energy cost shocks"], baselineMetric: "GOP margin by site", modellingFocus: "Occupancy and ADR downside cases" },
  { industry: "Travel Services", region: "Global", riskFactors: ["Demand shock events", "Supplier insolvency exposure", "Refund liabilities"], baselineMetric: "Gross booking value take rate", modellingFocus: "Booking mix and cancellation risk" },
  { industry: "Agritech", region: "Europe", riskFactors: ["Weather dependency", "Input cost volatility", "Subsidy framework changes"], baselineMetric: "Gross profit per hectare served", modellingFocus: "Yield and input cost sensitivity" },
];

export const INDUSTRY_PAGES: IndustryPage[] = INDUSTRY_SEEDS.map((seed) => ({
  ...seed,
  slug: `${toSlug(seed.region)}-${toSlug(seed.industry)}`,
}));

export function getIndustryPageBySlug(slug: string): IndustryPage | undefined {
  return INDUSTRY_PAGES.find((page) => page.slug === slug);
}
