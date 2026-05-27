/**
 * Day One Analyst Simulator - structural types for the 3-stage conversion flow.
 * Stage 1: briefing (mock desktop + email). Stage 2: sequential scenarios (intro mail → desk + reply → coach mail).
 * Stage 3: post-mortem.
 */

export const SIMULATOR_SCENARIO_COUNT = 3 as const;

export type ScenarioIndex = 0 | 1 | 2;

/** Stable ids for analytics / persistence */
export type ScenarioId = "ebitda-trap" | "debt-sizing" | "cdd-triage";

export type SimulatorPhase =
  | "welcome"
  | "desktop_inbox"
  | "desktop_email"
  | "scenario"
  | "post_mortem";

/** When phase === "scenario", controls intro → desk reply → Swapnil coaching email */
export type ScenarioDeskPhase = "idle" | "intro_mail" | "desk_reply" | "coach_mail";

export interface SimulatorState {
  phase: SimulatorPhase;
  scenarioIndex: ScenarioIndex;
  scenarioDeskPhase: ScenarioDeskPhase;
  answers: (SelectedAnswer | null)[];
}

export interface SelectedAnswer {
  optionId: string;
  correct: boolean;
}

export type SimulatorAction =
  | { type: "START_SIMULATION" }
  | { type: "OPEN_EMAIL" }
  | { type: "BEGIN_SCENARIOS" }
  /** After reading scenario intro + VDR context */
  | { type: "ACK_SCENARIO_INTRO" }
  /** User sends one of the reply drafts (maps to former MCQ) */
  | { type: "SELECT_OPTION"; optionId: string }
  /** After reading Swapnil's coaching / praise email */
  | { type: "CONTINUE_AFTER_FEEDBACK" }
  | { type: "RESET" };

export interface BriefingEmail {
  fromName: string;
  fromEmail: string;
  subject: string;
  body: string;
}

export interface ScenarioEmail {
  subject: string;
  body: string;
}

export interface ScenarioOption {
  id: string;
  letter: "A" | "B" | "C";
  /** Full judgment (used in post-mortem / logic) */
  label: string;
  /** Short line shown as the user's email reply */
  replyDraft: string;
  isCorrect: boolean;
  wrongFeedback?: {
    headline: string;
    body: string;
    severity: "high" | "medium" | "low";
  };
}

export interface ScenarioDefinition {
  id: ScenarioId;
  title: string;
  /** Short desk card - full narrative lives in introEmail */
  deskTask: string;
  context?: string;
  introEmail: ScenarioEmail;
  followUpCorrect: ScenarioEmail;
  followUpWrong: ScenarioEmail;
  attachment?: {
    title: string;
    rows: { label: string; value: string; highlight?: boolean }[];
  };
  options: [ScenarioOption, ScenarioOption, ScenarioOption];
}

export interface PerformanceRating {
  title: string;
  /** 0–100 */
  scorePercent: number;
  correctCount: number;
}
