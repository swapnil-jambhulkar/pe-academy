// Fixed pricing per currency (not conversion-based)
export type Currency = "INR" | "USD" | "GBP" | "EUR";

export interface CurrencyInfo {
  code: Currency;
  symbol: string;
  name: string;
}

export const CURRENCIES: Record<Currency, CurrencyInfo> = {
  INR: { code: "INR", symbol: "₹", name: "Indian Rupee" },
  USD: { code: "USD", symbol: "$", name: "US Dollar" },
  GBP: { code: "GBP", symbol: "£", name: "British Pound" },
  EUR: { code: "EUR", symbol: "€", name: "Euro" },
};

// Fixed prices per currency
export const PRICING: Record<Currency, {
  starterKit: number;
  starterKitEarlyBird: number;
  cohort6Week: number;
  cohort12Week: number;
  cohort6WeekEarlyBird: number;
  cohort12WeekEarlyBird: number;
  // Tuition & Scholarship pricing (UK-focused)
  cohortStandardTuition: number;
  cohortScholarshipTuition: number;
  individualResource: number;
  resourceBundle: number;
}> = {
  INR: {
    starterKit: 7999,
    starterKitEarlyBird: 2999,
    cohort6Week: 30000,
    cohort12Week: 50000,
    cohort6WeekEarlyBird: 24999,
    cohort12WeekEarlyBird: 41999,
    cohortStandardTuition: 100000,
    cohortScholarshipTuition: 50000,
    individualResource: 999,
    resourceBundle: 2999,
  },
  USD: {
    starterKit: 99,
    starterKitEarlyBird: 49,
    cohort6Week: 399,
    cohort12Week: 599,
    cohort6WeekEarlyBird: 349,
    cohort12WeekEarlyBird: 499,
    cohortStandardTuition: 1200,
    cohortScholarshipTuition: 600,
    individualResource: 12,
    resourceBundle: 39,
  },
  GBP: {
    starterKit: 79,
    starterKitEarlyBird: 39,
    cohort6Week: 299,
    cohort12Week: 499,
    cohort6WeekEarlyBird: 249,
    cohort12WeekEarlyBird: 399,
    cohortStandardTuition: 1000,
    cohortScholarshipTuition: 500,
    individualResource: 10,
    resourceBundle: 29,
  },
  EUR: {
    starterKit: 99,
    starterKitEarlyBird: 49,
    cohort6Week: 299,
    cohort12Week: 499,
    cohort6WeekEarlyBird: 249,
    cohort12WeekEarlyBird: 399,
    cohortStandardTuition: 1100,
    cohortScholarshipTuition: 550,
    individualResource: 12,
    resourceBundle: 39,
  },
};

// Direct payment links - Razorpay for all (handles international payments)
export const PAYMENT_LINKS: Record<Currency, {
  starterKit: string;
  individualResource: string;
}> = {
  INR: {
    starterKit: "https://rzp.io/rzp/yMC89rS", // Razorpay ₹2,999
    individualResource: "https://rzp.io/rzp/LpMQ5cX", // Razorpay ₹999
  },
  USD: {
    starterKit: "https://rzp.io/rzp/yMC89rS", // Razorpay (auto-converts)
    individualResource: "https://rzp.io/rzp/LpMQ5cX", // Razorpay (auto-converts)
  },
  GBP: {
    starterKit: "https://rzp.io/rzp/yMC89rS", // Razorpay (auto-converts)
    individualResource: "https://rzp.io/rzp/LpMQ5cX", // Razorpay (auto-converts)
  },
  EUR: {
    starterKit: "https://rzp.io/rzp/yMC89rS", // Razorpay (auto-converts)
    individualResource: "https://rzp.io/rzp/LpMQ5cX", // Razorpay (auto-converts)
  },
};

// Detect currency based on timezone/country (auto-detection only, no manual selection)
export function detectCurrency(): Currency {
  if (typeof window === "undefined") return "INR";

  // Auto-detect based on timezone (no localStorage check - always auto-detect)
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // USA timezones
  if (
    timezone.includes("America/New_York") ||
    timezone.includes("America/Chicago") ||
    timezone.includes("America/Denver") ||
    timezone.includes("America/Los_Angeles") ||
    timezone.includes("America/Phoenix")
  ) {
    return "USD";
  }

  // UK timezone
  if (timezone.includes("Europe/London")) {
    return "GBP";
  }

  // Europe timezones
  if (
    timezone.includes("Europe/") &&
    !timezone.includes("Europe/London")
  ) {
    return "EUR";
  }

  // Default to INR
  return "INR";
}

// Get price for a product in current currency
export function getPrice(currency: Currency, product: "starterKit" | "starterKitEarlyBird" | "cohort6Week" | "cohort12Week" | "cohort6WeekEarlyBird" | "cohort12WeekEarlyBird" | "cohortStandardTuition" | "cohortScholarshipTuition" | "individualResource" | "resourceBundle"): number {
  return PRICING[currency][product];
}

// Format price with currency symbol
export function formatPrice(amount: number, currency: Currency = "INR"): string {
  const currencyInfo = CURRENCIES[currency];

  // Format based on currency
  if (currency === "INR") {
    return `${currencyInfo.symbol}${amount.toLocaleString("en-IN")}`;
  } else if (currency === "USD" || currency === "EUR") {
    return `${currencyInfo.symbol}${amount.toLocaleString("en-US")}`;
  } else if (currency === "GBP") {
    return `${currencyInfo.symbol}${amount.toLocaleString("en-GB")}`;
  }

  return `${currencyInfo.symbol}${amount.toLocaleString()}`;
}

// Get direct payment link for Starter Kit
export function getStarterKitPaymentLink(currency: Currency): string {
  return PAYMENT_LINKS[currency].starterKit;
}

// Get direct payment link for Individual Resource
export function getIndividualResourcePaymentLink(currency: Currency): string {
  return PAYMENT_LINKS[currency].individualResource;
}

// Note: Currency is now auto-detected only, no manual selection
// Users see prices based on their location automatically
