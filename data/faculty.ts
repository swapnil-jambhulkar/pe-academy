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
    seat: "Diligence",
    profile: "Guest practitioner on scoping diligence as a principal",
    name: null,
  },
  {
    week: 7,
    seat: "Debt",
    profile: "Guest practitioner on debt capacity and capital structure",
    name: null,
  },
  {
    week: 12,
    seat: "Completion",
    profile: "Guest practitioner on completion mechanics and the hundred day plan",
    name: null,
  },
];
