/** Tab names and header rows for Norland form submissions. */

export const SUBMISSION_SHEETS = {
  CONTACT_SUBMISSIONS: [
    "submittedAt",
    "submissionId",
    "name",
    "email",
    "subject",
    "message",
  ],
  SIMULATOR_SUBMISSIONS: [
    "submittedAt",
    "submissionId",
    "fullName",
    "email",
    "phone",
    "linkedIn",
    "currentRole",
    "organization",
    "experienceLevel",
    "peGoal",
    "resumeFileName",
    "resumeMimeType",
    "resumeSizeBytes",
    "resumeDriveUrl",
    "driveError",
  ],
  APPLY_SUBMISSIONS: [
    "submittedAt",
    "submissionId",
    "name",
    "email",
    "linkedIn",
    "currentRole",
    "firm",
    "yearsInDealRole",
    "location",
    "sectorWhy",
    "transactionReflection",
    "weeklyCommitment",
  ],
} as const;

export type SubmissionSheetName = keyof typeof SUBMISSION_SHEETS;

export const DEFAULT_SPREADSHEET_TITLE = "Norland Academy Submissions";
