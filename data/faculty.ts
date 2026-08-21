export type FacultyMember = {
  week: 6 | 7 | 12;
  seat: string;
  profile: string;
  name: string | null;
  title?: string | null;
  firm?: string | null;
};

export const faculty: FacultyMember[] = [
  {
    week: 6,
    seat: "TS",
    profile: "Guest practitioner from transaction services on scoping financial diligence as a principal",
    name: null,
  },
  {
    week: 7,
    seat: "Debt",
    profile: "Guest practitioner from lending on debt capacity and mid-market underwriting",
    name: null,
  },
  {
    week: 12,
    seat: "Counsel",
    profile: "Guest practitioner from corporate law on locked box, completion accounts, and SPA mechanics",
    name: null,
  },
];
