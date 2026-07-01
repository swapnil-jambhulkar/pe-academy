import { isGoogleApiConfigured } from "@/lib/google/auth";
import { uploadResumeToDrive } from "@/lib/google/drive";
import { appendSheetRow, contactSubmissionExists } from "@/lib/google/sheets";

export type StorageResult = {
  ok: boolean;
  method: "google-api" | "apps-script-webhook" | "none";
  error: string;
  details?: string;
  duplicate?: boolean;
};

type SheetWebhookResult = {
  ok: boolean;
  error: string;
  details?: string;
  duplicate?: boolean;
};

async function postToAppsScriptWebhook(
  webhookUrl: string,
  payload: Record<string, unknown>
): Promise<SheetWebhookResult> {
  const requestBody = {
    ...payload,
    secret: process.env.GOOGLE_SHEETS_SHARED_SECRET ?? "",
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  });

  const responseText = await response.text();

  if (!response.ok) {
    return {
      ok: false,
      error: `Webhook failed with status ${response.status}.`,
      details: responseText.slice(0, 500),
    };
  }

  try {
    const parsed = JSON.parse(responseText) as {
      ok?: boolean;
      error?: string;
      details?: string;
      duplicate?: boolean;
    };
    if (parsed.ok === false) {
      return {
        ok: false,
        error: parsed.error || "Webhook returned an error.",
        details: parsed.details || responseText.slice(0, 500),
      };
    }
    return { ok: true, error: "", duplicate: parsed.duplicate };
  } catch {
    return {
      ok: false,
      error: "Webhook returned non-JSON. Use the Google API service account instead.",
      details: responseText.slice(0, 500),
    };
  }
}

export async function saveContactSubmission(payload: {
  submittedAt: string;
  submissionId: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<StorageResult> {
  if (isGoogleApiConfigured()) {
    try {
      const duplicate = await contactSubmissionExists("CONTACT_SUBMISSIONS", payload.submissionId);
      if (duplicate) {
        return { ok: true, method: "google-api", error: "", duplicate: true };
      }

      await appendSheetRow("CONTACT_SUBMISSIONS", [
        payload.submittedAt,
        payload.submissionId,
        payload.name,
        payload.email,
        payload.subject,
        payload.message,
      ]);

      return { ok: true, method: "google-api", error: "", duplicate: false };
    } catch (error) {
      return {
        ok: false,
        method: "google-api",
        error: error instanceof Error ? error.message : "Google Sheets save failed.",
      };
    }
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_CONTACT_WEBHOOK_URL?.trim();
  if (webhookUrl) {
    const result = await postToAppsScriptWebhook(webhookUrl, {
      ...payload,
      source: "contact-form",
    });
    return {
      ok: result.ok,
      method: "apps-script-webhook",
      error: result.error,
      details: result.details,
      duplicate: result.duplicate,
    };
  }

  return {
    ok: false,
    method: "none",
    error: "No Google storage configured. Set service account env vars or a webhook URL.",
  };
}

export async function saveSimulatorSubmission(payload: {
  submittedAt: string;
  submissionId: string;
  fullName: string;
  email: string;
  phone: string;
  linkedIn: string;
  currentRole: string;
  organization: string;
  experienceLevel: string;
  peGoal: string;
  resumeFileName: string;
  resumeMimeType: string;
  resumeSize: number;
  resumeBytes: Buffer;
}): Promise<StorageResult & { resumeUrl?: string }> {
  if (isGoogleApiConfigured()) {
    try {
      let resumeUrl = "";
      let driveError = "";

      try {
        resumeUrl = await uploadResumeToDrive(
          payload.resumeFileName,
          payload.resumeMimeType,
          payload.resumeBytes
        );
      } catch (error) {
        driveError = error instanceof Error ? error.message : "Resume upload failed.";
      }

      await appendSheetRow("SIMULATOR_SUBMISSIONS", [
        payload.submittedAt,
        payload.submissionId,
        payload.fullName,
        payload.email,
        payload.phone,
        payload.linkedIn,
        payload.currentRole,
        payload.organization,
        payload.experienceLevel,
        payload.peGoal,
        payload.resumeFileName,
        payload.resumeMimeType,
        payload.resumeSize,
        resumeUrl,
        driveError,
      ]);

      if (driveError) {
        return {
          ok: false,
          method: "google-api",
          error: driveError,
          details: "Simulator row saved to the sheet, but resume upload to Drive failed.",
          resumeUrl,
        };
      }

      return { ok: true, method: "google-api", error: "", resumeUrl };
    } catch (error) {
      return {
        ok: false,
        method: "google-api",
        error: error instanceof Error ? error.message : "Google simulator save failed.",
      };
    }
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_SIMULATOR_WEBHOOK_URL?.trim();
  if (webhookUrl) {
    const result = await postToAppsScriptWebhook(webhookUrl, {
      submittedAt: payload.submittedAt,
      submissionId: payload.submissionId,
      fullName: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      linkedIn: payload.linkedIn,
      currentRole: payload.currentRole,
      organization: payload.organization,
      experienceLevel: payload.experienceLevel,
      peGoal: payload.peGoal,
      resumeFileName: payload.resumeFileName,
      resumeMimeType: payload.resumeMimeType,
      resumeSize: payload.resumeSize,
      resumeBase64: payload.resumeBytes.toString("base64"),
      source: "simulator-registration",
    });

    return {
      ok: result.ok,
      method: "apps-script-webhook",
      error: result.error,
      details: result.details,
    };
  }

  return {
    ok: false,
    method: "none",
    error: "No Google storage configured. Set service account env vars or a webhook URL.",
  };
}
