/**
 * Add submission tabs and headers to an existing Google Sheet you own.
 * Share that sheet with your service account email as Editor first.
 *
 * Usage:
 *   GOOGLE_SPREADSHEET_ID=... GOOGLE_SERVICE_ACCOUNT_EMAIL=... GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="..." node scripts/init-sheet-tabs.mjs
 */

import crypto from "node:crypto";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

const SUBMISSION_SHEETS = {
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
};

function base64UrlEncode(value) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function createSignedJwt(clientEmail, privateKey, scopes) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: clientEmail,
    scope: scopes.join(" "),
    aud: TOKEN_URL,
    exp: now + 3600,
    iat: now,
  };
  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signingInput = `${encodedHeader}.${encodedPayload}`;
  const signature = crypto.sign("RSA-SHA256", Buffer.from(signingInput), privateKey);
  return `${signingInput}.${base64UrlEncode(signature)}`;
}

async function getAccessToken() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKeyRaw = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.trim();
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID?.trim();

  if (!clientEmail || !privateKeyRaw) {
    throw new Error("Set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.");
  }
  if (!spreadsheetId) {
    throw new Error("Set GOOGLE_SPREADSHEET_ID to an existing sheet you shared with the service account.");
  }

  const privateKey = privateKeyRaw.replace(/\\n/g, "\n");
  const assertion = createSignedJwt(clientEmail, privateKey, [SHEETS_SCOPE]);
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion,
  });

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const json = await response.json();
  if (!response.ok || !json.access_token) {
    throw new Error(json.error_description || json.error || "Failed to obtain Google access token.");
  }

  return { accessToken: json.access_token, spreadsheetId, clientEmail };
}

async function main() {
  const { accessToken, spreadsheetId, clientEmail } = await getAccessToken();

  const metaResponse = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=sheets.properties.title`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
  const meta = await metaResponse.json();
  if (!metaResponse.ok) {
    throw new Error(
      `Cannot open spreadsheet (${metaResponse.status}). Share it with ${clientEmail} as Editor. ${JSON.stringify(meta).slice(0, 300)}`
    );
  }

  const existing = new Set((meta.sheets ?? []).map((sheet) => sheet.properties?.title).filter(Boolean));
  const requests = [];

  for (const [title, headers] of Object.entries(SUBMISSION_SHEETS)) {
    if (existing.has(title)) {
      console.log(`Tab exists: ${title}`);
      continue;
    }

    requests.push({
      addSheet: {
        properties: { title },
      },
    });
  }

  if (requests.length > 0) {
    const batchResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ requests }),
      }
    );
    const batchJson = await batchResponse.json();
    if (!batchResponse.ok) {
      throw new Error(JSON.stringify(batchJson).slice(0, 500));
    }
    console.log(`Created tabs: ${requests.map((r) => r.addSheet.properties.title).join(", ")}`);
  }

  for (const [title, headers] of Object.entries(SUBMISSION_SHEETS)) {
    const range = encodeURIComponent(`${title}!A1`);
    const headerResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?valueInputOption=USER_ENTERED`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values: [headers] }),
      }
    );
    if (!headerResponse.ok) {
      const text = await headerResponse.text();
      throw new Error(`Header write failed for ${title}: ${text.slice(0, 300)}`);
    }
    console.log(`Headers set: ${title}`);
  }

  console.log(`\nReady: https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
