export type CohortFirm = {
  id: string;
  name: string;
  logo?: string;
};

export const bigFourFirms: CohortFirm[] = [
  { id: "deloitte", name: "Deloitte" },
  { id: "pwc", name: "PwC" },
  { id: "ey", name: "EY" },
  { id: "kpmg", name: "KPMG" },
];

export const bulgeBracketFirms: CohortFirm[] = [
  { id: "goldman", name: "Goldman Sachs" },
  { id: "ms", name: "Morgan Stanley" },
  { id: "jpm", name: "J.P. Morgan" },
  { id: "bofa", name: "BofA Securities" },
  { id: "citi", name: "Citi" },
  { id: "barclays", name: "Barclays" },
  { id: "ubs", name: "UBS" },
  { id: "db", name: "Deutsche Bank" },
];

export const peFirms: CohortFirm[] = [
  { id: "blackstone", name: "Blackstone", logo: "/partners/pe/blackstone.svg" },
  { id: "kkr", name: "KKR", logo: "/partners/pe/kkr.svg" },
  { id: "carlyle", name: "The Carlyle Group", logo: "/partners/pe/carlyle.svg" },
  { id: "apollo", name: "Apollo", logo: "/partners/pe/apollo.svg" },
  { id: "brookfield", name: "Brookfield", logo: "/partners/pe/brookfield.svg" },
  { id: "tpg", name: "TPG", logo: "/partners/pe/tpg.svg" },
  { id: "cvc", name: "CVC", logo: "/partners/pe/cvc.svg" },
  { id: "eqt", name: "EQT", logo: "/partners/pe/eqt.svg" },
  { id: "warburg", name: "Warburg Pincus", logo: "/partners/pe/warburg-pincus.svg" },
  { id: "ga", name: "General Atlantic", logo: "/partners/pe/general-atlantic.svg" },
];
