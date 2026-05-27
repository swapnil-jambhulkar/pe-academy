import { SCENARIOS } from "./scenarios";
import type {
  ScenarioIndex,
  SelectedAnswer,
  SimulatorAction,
  SimulatorState,
} from "./types";

export const initialSimulatorState: SimulatorState = {
  phase: "welcome",
  scenarioIndex: 0,
  scenarioDeskPhase: "idle",
  answers: [null, null, null],
};

function isScenarioIndex(n: number): n is ScenarioIndex {
  return n === 0 || n === 1 || n === 2;
}

export function simulatorReducer(state: SimulatorState, action: SimulatorAction): SimulatorState {
  switch (action.type) {
    case "START_SIMULATION":
      if (state.phase !== "welcome") return state;
      return {
        ...initialSimulatorState,
        phase: "desktop_inbox",
        answers: [null, null, null],
        scenarioDeskPhase: "idle",
      };

    case "OPEN_EMAIL":
      if (state.phase !== "desktop_inbox") return state;
      return { ...state, phase: "desktop_email" };

    case "BEGIN_SCENARIOS":
      if (state.phase !== "desktop_email") return state;
      return {
        ...state,
        phase: "scenario",
        scenarioIndex: 0,
        scenarioDeskPhase: "intro_mail",
        answers: [null, null, null],
      };

    case "ACK_SCENARIO_INTRO": {
      if (state.phase !== "scenario" || state.scenarioDeskPhase !== "intro_mail") return state;
      return {
        ...state,
        scenarioDeskPhase: "desk_reply",
      };
    }

    case "SELECT_OPTION": {
      if (state.phase !== "scenario" || state.scenarioDeskPhase !== "desk_reply") return state;
      const idx = state.scenarioIndex;
      const scenario = SCENARIOS[idx];
      if (!scenario) return state;
      const chosen = scenario.options.find((o) => o.id === action.optionId);
      if (!chosen) return state;

      const nextAnswers = [...state.answers] as (SelectedAnswer | null)[];
      nextAnswers[idx] = { optionId: chosen.id, correct: chosen.isCorrect };

      return {
        ...state,
        answers: nextAnswers,
        scenarioDeskPhase: "coach_mail",
      };
    }

    case "CONTINUE_AFTER_FEEDBACK": {
      if (state.phase !== "scenario" || state.scenarioDeskPhase !== "coach_mail") return state;
      const nextIndex = state.scenarioIndex + 1;
      if (nextIndex >= SCENARIOS.length) {
        return {
          ...state,
          phase: "post_mortem",
          scenarioDeskPhase: "idle",
        };
      }
      if (!isScenarioIndex(nextIndex)) return state;
      return {
        ...state,
        scenarioIndex: nextIndex,
        scenarioDeskPhase: "intro_mail",
      };
    }

    case "RESET":
      return initialSimulatorState;

    default:
      return state;
  }
}
