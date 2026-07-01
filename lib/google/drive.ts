import { getGoogleAccessToken } from "@/lib/google/auth";

const DRIVE_SCOPE = "https://www.googleapis.com/auth/drive.file";

export async function uploadResumeToDrive(
  fileName: string,
  mimeType: string,
  fileBytes: Buffer
): Promise<string> {
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID?.trim();
  if (!folderId) {
    throw new Error("GOOGLE_DRIVE_FOLDER_ID is not set.");
  }

  const accessToken = await getGoogleAccessToken([DRIVE_SCOPE]);
  const safeName = fileName.replace(/[^\w.\-() ]+/g, "_");

  const createResponse = await fetch(
    "https://www.googleapis.com/drive/v3/files?fields=id,webViewLink",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: safeName,
        parents: [folderId],
      }),
    }
  );

  const created = (await createResponse.json()) as {
    id?: string;
    error?: { message?: string };
  };

  if (!createResponse.ok || !created.id) {
    throw new Error(created.error?.message || "Failed to create Drive file metadata.");
  }

  const uploadResponse = await fetch(
    `https://www.googleapis.com/upload/drive/v3/files/${created.id}?uploadType=media&fields=webViewLink,id`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": mimeType || "application/octet-stream",
      },
      body: new Uint8Array(fileBytes),
    }
  );

  const uploaded = (await uploadResponse.json()) as {
    webViewLink?: string;
    id?: string;
    error?: { message?: string };
  };

  if (!uploadResponse.ok) {
    throw new Error(uploaded.error?.message || "Failed to upload resume bytes to Drive.");
  }

  if (uploaded.webViewLink) {
    return uploaded.webViewLink;
  }

  if (uploaded.id) {
    return `https://drive.google.com/file/d/${uploaded.id}/view`;
  }

  return `https://drive.google.com/file/d/${created.id}/view`;
}
