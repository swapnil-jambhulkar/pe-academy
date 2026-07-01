# Google Sheets + Drive (service account)

Use this instead of Apps Script webhooks. Your Next.js API talks directly to Google Sheets and Drive. No `/exec` URL to open in a browser.

## 1. Google Cloud project

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a project (or pick an existing one).
3. Enable APIs:
   - **Google Sheets API**
   - **Google Drive API**

## 2. Service account

1. **IAM & Admin → Service accounts → Create service account**
2. Name it e.g. `norland-form-writer`
3. **Keys → Add key → JSON** and download the file.

From the JSON file you need:

- `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `private_key` → `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` (paste into Vercel; keep `\n` as literal two characters or use real line breaks)

## 3. Share your sheet and Drive folder

Copy the service account email (looks like `norland-form-writer@....iam.gserviceaccount.com`).

1. Open your **Google Sheet** → Share → add that email as **Editor**
2. Open your **resume Drive folder** → Share → add the same email as **Editor** (or Content manager)

## 4. Spreadsheet ID

From the sheet URL:

`https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`

Set `GOOGLE_SPREADSHEET_ID=SPREADSHEET_ID`

Create tabs named exactly:

- `CONTACT_SUBMISSIONS`
- `SIMULATOR_SUBMISSIONS`

Header row (row 1) is optional; new rows append below existing data.

### Suggested columns

**CONTACT_SUBMISSIONS:** submittedAt, submissionId, name, email, subject, message

**SIMULATOR_SUBMISSIONS:** submittedAt, submissionId, fullName, email, phone, linkedIn, currentRole, organization, experienceLevel, peGoal, resumeFileName, resumeMimeType, resumeSizeBytes, resumeDriveUrl, driveError

## 5. Vercel environment variables

```bash
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-sa@project.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_DRIVE_FOLDER_ID=1AlUfYVw43ebg8qNuwqqBmd-huO0hWzJ6
```

When these four are set, the site **prefers the Google API** and ignores Apps Script webhook URLs.

You can remove (or leave unused):

- `GOOGLE_SHEETS_CONTACT_WEBHOOK_URL`
- `GOOGLE_SHEETS_SIMULATOR_WEBHOOK_URL`
- `GOOGLE_SHEETS_SHARED_SECRET`

## 6. Redeploy

Redeploy on Vercel after saving env vars, then test contact and simulator forms on production.

## About the Apps Script `/exec` URL

- Opening `https://script.google.com/macros/s/.../exec` in a browser sometimes shows **"Sorry, unable to open the file"**. That is a Google Drive/Script UI message, not proof the integration is broken.
- A healthy deployment returns JSON on GET, for example: `driveFolderConfigured: true`
- Server POST from your API is what matters; the service account path avoids that entirely.
