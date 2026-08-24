export const APPLY_LOCATIONS = ["London", "Dubai", "Mumbai", "Other"] as const;

export type ApplyLocation = (typeof APPLY_LOCATIONS)[number];

export type ApplySubmission = {
  name: string;
  email: string;
  linkedIn: string;
  currentRole: string;
  firm: string;
  yearsInDealRole: string;
  location: ApplyLocation;
  sectorWhy: string;
  transactionReflection: string;
  weeklyCommitment: "yes";
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LINKEDIN_REGEX = /^https?:\/\/(www\.)?linkedin\.com\/in\/[\w%-]+\/?$/i;

function trim(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export type ApplyValidationResult =
  | { ok: true; data: ApplySubmission }
  | { ok: false; error: string; field?: string };

export function validateApplySubmission(body: Record<string, unknown>): ApplyValidationResult {
  const name = trim(body.name);
  const email = trim(body.email).toLowerCase();
  const linkedIn = trim(body.linkedIn);
  const currentRole = trim(body.currentRole);
  const firm = trim(body.firm);
  const yearsInDealRole = trim(body.yearsInDealRole);
  const location = trim(body.location);
  const sectorWhy = trim(body.sectorWhy);
  const transactionReflection = trim(body.transactionReflection);
  const weeklyCommitment = trim(body.weeklyCommitment);

  if (!name) return { ok: false, error: "Full name is required.", field: "name" };
  if (!email) return { ok: false, error: "Email is required.", field: "email" };
  if (!EMAIL_REGEX.test(email)) return { ok: false, error: "Enter a valid email address.", field: "email" };
  if (!linkedIn) return { ok: false, error: "LinkedIn profile URL is required.", field: "linkedIn" };
  if (!LINKEDIN_REGEX.test(linkedIn)) {
    return {
      ok: false,
      error: "Enter a valid LinkedIn profile URL (https://linkedin.com/in/your-name).",
      field: "linkedIn",
    };
  }
  if (!currentRole) return { ok: false, error: "Current role is required.", field: "currentRole" };
  if (!firm) return { ok: false, error: "Firm is required.", field: "firm" };
  if (!yearsInDealRole) {
    return { ok: false, error: "Years in a deal role is required.", field: "yearsInDealRole" };
  }
  if (!/^\d{1,2}(\.\d)?$/.test(yearsInDealRole)) {
    return { ok: false, error: "Enter years in a deal role as a number (e.g. 5).", field: "yearsInDealRole" };
  }
  if (!location || !APPLY_LOCATIONS.includes(location as ApplyLocation)) {
    return { ok: false, error: "Select a location.", field: "location" };
  }
  if (!sectorWhy) return { ok: false, error: "Sector thesis is required.", field: "sectorWhy" };
  if (sectorWhy.length < 50) {
    return { ok: false, error: "Sector thesis must be at least 50 characters.", field: "sectorWhy" };
  }
  if (!transactionReflection) {
    return { ok: false, error: "Transaction reflection is required.", field: "transactionReflection" };
  }
  if (transactionReflection.length < 100) {
    return {
      ok: false,
      error: "Transaction reflection must be at least 100 characters.",
      field: "transactionReflection",
    };
  }
  if (weeklyCommitment !== "yes") {
    return {
      ok: false,
      error: "You must be able to commit ten to twelve hours per week to apply.",
      field: "weeklyCommitment",
    };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      linkedIn,
      currentRole,
      firm,
      yearsInDealRole,
      location: location as ApplyLocation,
      sectorWhy,
      transactionReflection,
      weeklyCommitment: "yes",
    },
  };
}
