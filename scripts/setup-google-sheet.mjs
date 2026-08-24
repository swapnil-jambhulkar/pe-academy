/**
 * One-time setup: creates the Norland submissions Google Sheet with all tabs and headers.
 *
 * Requires env vars (same as production):
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL
 *   GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
 *
 * Usage:
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL=... GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="..." node scripts/setup-google-sheet.mjs
 *
 * Then add the printed GOOGLE_SPREADSHEET_ID to Vercel and redeploy.
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

  if (!clientEmail || !privateKeyRaw) {
    throw new Error("Set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.");
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

  return { accessToken: json.access_token, clientEmail };
}

async function main() {
  const { accessToken, clientEmail } = await getAccessToken();

  const response = await fetch("https://sheets.googleapis.com/v4/spreadsheets", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      properties: { title: "Norland Academy Submissions" },
      sheets: Object.entries(SUBMISSION_SHEETS).map(([title, headers]) => ({
        properties: { title },
        data: [
          {
            startRow: 0,
            startColumn: 0,
            rowData: [
              {
                values: headers.map((header) => ({
                  userEnteredValue: { stringValue: header },
                  userEnteredFormat: { textFormat: { bold: true } },
                })),
              },
            ],
          },
        ],
      })),
    }),
  });

  const json = await response.json();
  if (!response.ok || !json.spreadsheetId) {
    throw new Error(JSON.stringify(json).slice(0, 500));
  }

  const url = json.spreadsheetUrl ?? `https://docs.google.com/spreadsheets/d/${json.spreadsheetId}/edit`;

  console.log("\nNorland submissions spreadsheet created.\n");
  console.log(`URL: ${url}`);
  console.log(`\nAdd to Vercel environment variables:\n`);
  console.log(`GOOGLE_SPREADSHEET_ID=${json.spreadsheetId}`);
  console.log(`GOOGLE_SERVICE_ACCOUNT_EMAIL=${clientEmail}`);
  console.log(`GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=<same key you used here>`);
  console.log("\nOpen the sheet URL above and share it with your service account as Editor if needed.");
  console.log("Then redeploy on Vercel and test /apply.\n");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
