import crypto from "node:crypto";

const TOKEN_URL = "https://oauth2.googleapis.com/token";

type ServiceAccountConfig = {
  clientEmail: string;
  privateKey: string;
};

function base64UrlEncode(value: string | Buffer): string {
  return Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function createSignedJwt(clientEmail: string, privateKey: string, scopes: string[]): string {
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

export function getGoogleServiceAccountConfig(): ServiceAccountConfig | null {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKeyRaw = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.trim();

  if (!clientEmail || !privateKeyRaw) {
    return null;
  }

  const privateKey = privateKeyRaw.replace(/\\n/g, "\n");
  return { clientEmail, privateKey };
}

export function isGoogleApiConfigured(): boolean {
  const account = getGoogleServiceAccountConfig();
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID?.trim();
  return Boolean(account && spreadsheetId);
}

export async function getGoogleAccessToken(scopes: string[]): Promise<string> {
  const account = getGoogleServiceAccountConfig();
  if (!account) {
    throw new Error("Google service account is not configured.");
  }

  const assertion = createSignedJwt(account.clientEmail, account.privateKey, scopes);
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion,
  });

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const json = (await response.json()) as { access_token?: string; error?: string; error_description?: string };

  if (!response.ok || !json.access_token) {
    throw new Error(json.error_description || json.error || "Failed to obtain Google access token.");
  }

  return json.access_token;
}
