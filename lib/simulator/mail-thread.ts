import { BRIEFING_EMAIL, SCENARIOS } from "./scenarios";
import type { SimulatorState } from "./types";

export interface ThreadMessage {
  id: string;
  fromName: string;
  fromEmail: string;
  subject: string;
  body: string;
  time: string;
  unread: boolean;
  importance?: boolean;
}

/**
 * Builds the Outlook thread for the current simulator state (briefing + scenario intros + coaching replies).
 */
export function buildMailThread(state: SimulatorState): ThreadMessage[] {
  const messages: ThreadMessage[] = [];

  if (state.phase === "welcome") {
    return messages;
  }

  messages.push({
    id: "briefing",
    fromName: BRIEFING_EMAIL.fromName,
    fromEmail: BRIEFING_EMAIL.fromEmail,
    subject: BRIEFING_EMAIL.subject,
    body: BRIEFING_EMAIL.body,
    time: "08:41",
    unread: state.phase === "desktop_inbox",
    importance: true,
  });

  if (state.phase === "desktop_inbox" || state.phase === "desktop_email") {
    return messages;
  }

  for (let i = 0; i < SCENARIOS.length; i++) {
    if (state.phase === "scenario" && i > state.scenarioIndex) {
      break;
    }

    const scenario = SCENARIOS[i];
    if (!scenario) continue;

    const introUnread =
      state.phase === "scenario" &&
      i === state.scenarioIndex &&
      state.scenarioDeskPhase === "intro_mail";

    messages.push({
      id: `intro-${i}`,
      fromName: BRIEFING_EMAIL.fromName,
      fromEmail: BRIEFING_EMAIL.fromEmail,
      subject: scenario.introEmail.subject,
      body: scenario.introEmail.body,
      time: `${9 + i}:02`,
      unread: introUnread,
      importance: true,
    });

    const ans = state.answers[i];
    const showCoach =
      ans !== null &&
      (state.phase === "post_mortem" ||
        i < state.scenarioIndex ||
        (i === state.scenarioIndex && state.scenarioDeskPhase === "coach_mail"));

    if (showCoach && ans) {
      const follow = ans.correct ? scenario.followUpCorrect : scenario.followUpWrong;
      const coachUnread =
        state.phase === "scenario" &&
        i === state.scenarioIndex &&
        state.scenarioDeskPhase === "coach_mail";

      messages.push({
        id: `coach-${i}`,
        fromName: BRIEFING_EMAIL.fromName,
        fromEmail: BRIEFING_EMAIL.fromEmail,
        subject: follow.subject,
        body: follow.body,
        time: `${9 + i}:17`,
        unread: coachUnread && state.phase !== "post_mortem",
        importance: !ans.correct,
      });
    }
  }

  return messages;
}
