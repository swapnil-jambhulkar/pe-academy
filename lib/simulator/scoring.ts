import { SIMULATOR_SCENARIO_COUNT } from "./types";
import type { PerformanceRating, SelectedAnswer } from "./types";

export function countCorrect(answers: (SelectedAnswer | null)[]): number {
  return answers.filter((a) => a?.correct).length;
}

export function scorePercent(correctCount: number): number {
  return Math.round((correctCount / SIMULATOR_SCENARIO_COUNT) * 100);
}

/**
 * Three-band titles aligned to conversion copy (strict tiers).
 */
export function getPerformanceRating(answers: (SelectedAnswer | null)[]): PerformanceRating {
  const correctCount = countCorrect(answers);
  const pct = scorePercent(correctCount);

  if (correctCount === SIMULATOR_SCENARIO_COUNT) {
    return { title: "Execution Ready", scorePercent: pct, correctCount };
  }
  if (correctCount === 2) {
    return { title: "Textbook Analyst", scorePercent: pct, correctCount };
  }
  return { title: "Unvetted Intern", scorePercent: pct, correctCount };
}

export function postMortemHardTruth(rating: PerformanceRating): string {
  return `You scored ${rating.scorePercent}% on live deal metrics. In a committed private equity fund, missing an aggressive EBITDA add-back or miscalculating debt capacity means the deal collapses during confirmatory due diligence, losing the firm hundreds of thousands in broken-deal expenses.`;
}

export const CONVERSION_WALL_COPY =
  "Textbooks teach you formulas. The Principal Programme teaches you to source, price, structure, and defend a deal as the person accountable for the recommendation. If you have executed transactions and never owned one, apply for the twelve week cohort.";

export const POSITIVE_CLOSE_COPY =
  "Strong instincts on live deal judgment calls. The gap between theory and principal-level execution is exactly what the programme is built to close.";
