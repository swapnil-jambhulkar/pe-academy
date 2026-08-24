import { getGoogleAccessToken } from "@/lib/google/auth";
import {
  DEFAULT_SPREADSHEET_TITLE,
  SUBMISSION_SHEETS,
  type SubmissionSheetName,
} from "@/lib/google/sheet-config";

const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";

export function getSpreadsheetId(): string {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID?.trim();
  if (!spreadsheetId) {
    throw new Error("GOOGLE_SPREADSHEET_ID is not set.");
  }
  return spreadsheetId;
}

export async function createNorlandSubmissionsSpreadsheet(): Promise<{ spreadsheetId: string; url: string }> {
  const accessToken = await getGoogleAccessToken([SHEETS_SCOPE]);

  const response = await fetch("https://sheets.googleapis.com/v4/spreadsheets", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      properties: { title: DEFAULT_SPREADSHEET_TITLE },
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
                  userEnteredFormat: {
                    textFormat: { bold: true },
                  },
                })),
              },
            ],
          },
        ],
      })),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google Sheets create failed (${response.status}): ${errorText.slice(0, 400)}`);
  }

  const json = (await response.json()) as { spreadsheetId?: string; spreadsheetUrl?: string };
  if (!json.spreadsheetId) {
    throw new Error("Google Sheets create did not return a spreadsheetId.");
  }

  return {
    spreadsheetId: json.spreadsheetId,
    url: json.spreadsheetUrl ?? `https://docs.google.com/spreadsheets/d/${json.spreadsheetId}/edit`,
  };
}

export async function appendSheetRow(sheetName: SubmissionSheetName, values: (string | number)[]): Promise<void> {
  const spreadsheetId = getSpreadsheetId();
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

export async function contactSubmissionExists(sheetName: SubmissionSheetName, submissionId: string): Promise<boolean> {
  if (!submissionId) return false;

  const spreadsheetId = getSpreadsheetId();
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
