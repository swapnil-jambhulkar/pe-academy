/**
 * Google Apps Script webhook for Norland submissions.
 *
 * Handles:
 * - Contact form payloads from app/api/contact/route.ts
 * - Simulator registration payloads from app/api/simulator/register/route.ts
 *
 * Setup:
 * 1) Create a Google Sheet with tabs:
 *    - CONTACT_SUBMISSIONS
 *    - SIMULATOR_SUBMISSIONS
 * 2) Open Extensions > Apps Script and paste this file (bound to that sheet).
 * 3) In Apps Script Project Settings > Script properties, add:
 *    - SHARED_SECRET=<same as GOOGLE_SHEETS_SHARED_SECRET>
 *    - DRIVE_FOLDER_ID=<folder id for resumes>
 * 4) Deploy as Web app:
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5) Use deployment URL ending in /exec for both webhook env vars.
 */

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ ok: false, error: "Missing body" }, 400);
    }

    var payload = JSON.parse(e.postData.contents);
    var source = String(payload.source || "");
    var incomingSecret = String(payload.secret || "");
    var expectedSecret = String(PropertiesService.getScriptProperties().getProperty("SHARED_SECRET") || "");

    if (expectedSecret && incomingSecret !== expectedSecret) {
      return jsonResponse({ ok: false, error: "Invalid secret" }, 401);
    }

    if (source === "contact-form") {
      var contactResult = writeContactRow(payload);
      return jsonResponse({ ok: true, source: source, duplicate: contactResult.duplicate });
    }

    if (source === "simulator-registration") {
      var simulatorResult = handleSimulatorRegistration_(payload);
      if (!simulatorResult.ok) {
        return jsonResponse(
          {
            ok: false,
            source: source,
            error: simulatorResult.error,
            details: simulatorResult.details,
            rowWritten: simulatorResult.rowWritten,
          },
          500
        );
      }
      return jsonResponse({
        ok: true,
        source: source,
        resumeUrl: simulatorResult.resumeUrl,
        rowWritten: true,
      });
    }

    return jsonResponse({ ok: false, error: "Unsupported source" }, 400);
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) }, 500);
  }
}

function doGet() {
  return jsonResponse({
    ok: true,
    message: "Webhook is live. Use POST with JSON payload.",
    sources: ["contact-form", "simulator-registration"],
    driveFolderConfigured: Boolean(
      PropertiesService.getScriptProperties().getProperty("DRIVE_FOLDER_ID")
    ),
    secretConfigured: Boolean(PropertiesService.getScriptProperties().getProperty("SHARED_SECRET")),
  });
}

function handleSimulatorRegistration_(payload) {
  var resumeUrl = "";
  var driveError = "";

  try {
    resumeUrl = saveResumeToDrive(payload);
  } catch (err) {
    driveError = String(err);
  }

  writeSimulatorRow(payload, resumeUrl, driveError);

  if (driveError) {
    return {
      ok: false,
      error: driveError,
      details: "Simulator row was saved, but resume upload to Drive failed.",
      rowWritten: true,
      resumeUrl: "",
    };
  }

  return { ok: true, error: "", details: "", rowWritten: true, resumeUrl: resumeUrl };
}

function writeContactRow(payload) {
  var submissionId = String(payload.submissionId || "");
  var sheet = getOrCreateSheet_("CONTACT_SUBMISSIONS", [
    "submittedAt",
    "submissionId",
    "name",
    "email",
    "subject",
    "message",
  ]);

  if (submissionId && contactSubmissionExists_(sheet, submissionId)) {
    return { duplicate: true };
  }

  sheet.appendRow([
    String(payload.submittedAt || new Date().toISOString()),
    submissionId,
    String(payload.name || ""),
    String(payload.email || ""),
    String(payload.subject || ""),
    String(payload.message || ""),
  ]);

  return { duplicate: false };
}

function contactSubmissionExists_(sheet, submissionId) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return false;
  }

  var ids = sheet.getRange(2, 2, lastRow, 2).getValues();
  for (var i = 0; i < ids.length; i++) {
    if (String(ids[i][0]) === submissionId) {
      return true;
    }
  }
  return false;
}

function writeSimulatorRow(payload, resumeUrl, driveError) {
  var sheet = getOrCreateSheet_("SIMULATOR_SUBMISSIONS", [
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
  ]);

  sheet.appendRow([
    String(payload.submittedAt || new Date().toISOString()),
    String(payload.submissionId || ""),
    String(payload.fullName || ""),
    String(payload.email || ""),
    String(payload.phone || ""),
    String(payload.linkedIn || ""),
    String(payload.currentRole || ""),
    String(payload.organization || ""),
    String(payload.experienceLevel || ""),
    String(payload.peGoal || ""),
    String(payload.resumeFileName || ""),
    String(payload.resumeMimeType || ""),
    Number(payload.resumeSize || 0),
    String(resumeUrl || ""),
    String(driveError || ""),
  ]);
}

function saveResumeToDrive(payload) {
  var folderId = String(PropertiesService.getScriptProperties().getProperty("DRIVE_FOLDER_ID") || "");
  if (!folderId) {
    throw new Error("Missing DRIVE_FOLDER_ID script property.");
  }

  var base64 = String(payload.resumeBase64 || "");
  if (!base64) {
    throw new Error("Missing resumeBase64 in payload.");
  }

  var contentType = String(payload.resumeMimeType || "application/octet-stream");
  var fileName = sanitizeFilename_(String(payload.resumeFileName || "resume-upload.bin"));
  var bytes = Utilities.base64Decode(base64);
  var blob = Utilities.newBlob(bytes, contentType, fileName);

  var folder;
  try {
    folder = DriveApp.getFolderById(folderId);
  } catch (folderErr) {
    throw new Error("Cannot open Drive folder. Check DRIVE_FOLDER_ID and folder sharing.");
  }

  var file = folder.createFile(blob);
  return file.getUrl();
}

function getOrCreateSheet_(name, headers) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    throw new Error("No active spreadsheet. Deploy this script from Extensions > Apps Script on your sheet.");
  }

  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }

  return sheet;
}

function sanitizeFilename_(name) {
  return name.replace(/[^\w.\-() ]+/g, "_");
}

function jsonResponse(obj, statusCode) {
  if (statusCode) {
    obj.statusCode = statusCode;
  }
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
