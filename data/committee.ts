export type CommitteeMember = {
  seat: string;
  profile: string;
  name: string | null;
  title?: string | null;
  firm?: string | null;
};

export const committee: CommitteeMember[] = [
  {
    seat: "Investment",
    profile: "Investment Director or Principal, UK lower mid market buyout",
    name: null,
  },
  {
    seat: "Credit",
    profile: "Investment Director, private credit or leveraged finance",
    name: null,
  },
  {
    seat: "Capital",
    profile: "Direct investment lead, family office or former PE principal",
    name: null,
  },
];
