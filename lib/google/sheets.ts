import { getGoogleAccessToken } from "@/lib/google/auth";

const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

export async function appendSheetRow(sheetName: string, values: (string | number)[]): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID?.trim();
  if (!spreadsheetId) {
    throw new Error("GOOGLE_SPREADSHEET_ID is not set.");
  }

  const accessToken = await getGoogleAccessToken([SHEETS_SCOPE]);
  const range = encodeURIComponent(`${sheetName}!A1`);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values: [values] }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google Sheets append failed (${response.status}): ${errorText.slice(0, 300)}`);
  }
}

export async function contactSubmissionExists(sheetName: string, submissionId: string): Promise<boolean> {
  if (!submissionId) return false;

  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID?.trim();
  if (!spreadsheetId) return false;

  const accessToken = await getGoogleAccessToken([SHEETS_SCOPE]);
  const range = encodeURIComponent(`${sheetName}!B2:B5000`);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`;

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) {
    return false;
  }

  const json = (await response.json()) as { values?: string[][] };
  const rows = json.values ?? [];
  return rows.some((row) => row[0] === submissionId);
}
