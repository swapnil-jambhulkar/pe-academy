"use client";

import { useState, useEffect } from "react";
import { Currency, detectCurrency } from "@/lib/currency";

export function useCurrency() {
  const [currency, setCurrency] = useState<Currency>("INR");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Auto-detect currency based on location (timezone)
    const detected = detectCurrency();
    setCurrency(detected);
    setIsLoading(false);
  }, []);

  // Currency is auto-detected only, no manual selection
  return {
    currency,
    isLoading,
  };
}

