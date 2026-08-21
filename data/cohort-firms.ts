export type CohortFirm = {
  id: string;
  name: string;
  logo: string;
};

/** Target feeder firms: bulge-bracket IB, Big Four, and MBB consulting. */
export const cohortFirms: CohortFirm[] = [
  { id: "goldman", name: "Goldman Sachs", logo: "/partners/ib/goldman-sachs.svg" },
  { id: "deloitte", name: "Deloitte", logo: "/partners/big4/deloitte.svg" },
  { id: "mckinsey", name: "McKinsey", logo: "/partners/consulting/mckinsey.svg" },
  { id: "morgan-stanley", name: "Morgan Stanley", logo: "/partners/ib/morgan-stanley.svg" },
  { id: "pwc", name: "PwC", logo: "/partners/big4/pwc.svg" },
  { id: "bcg", name: "BCG", logo: "/partners/consulting/bcg.svg" },
  { id: "jpmorgan", name: "J.P. Morgan", logo: "/partners/ib/jpmorgan.svg" },
  { id: "ey", name: "EY", logo: "/partners/big4/ey.svg" },
  { id: "bain", name: "Bain", logo: "/partners/consulting/bain.svg" },
  { id: "bofa", name: "Bank of America", logo: "/partners/ib/bank-of-america.svg" },
  { id: "kpmg", name: "KPMG", logo: "/partners/big4/kpmg.svg" },
  { id: "citi", name: "Citi", logo: "/partners/ib/citi.svg" },
  { id: "barclays", name: "Barclays", logo: "/partners/ib/barclays.svg" },
  { id: "ubs", name: "UBS", logo: "/partners/ib/ubs.svg" },
  { id: "deutsche", name: "Deutsche Bank", logo: "/partners/ib/deutsche-bank.svg" },
];
