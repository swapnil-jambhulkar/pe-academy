import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { saveSimulatorSubmission } from "@/lib/google/submissions";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getString(formData: FormData, key: string): string {
  const value = formData.get(key);
  if (typeof value !== "string") return "";
  return value.trim();
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const fullName = getString(formData, "fullName");
    const email = getString(formData, "email");
    const phone = getString(formData, "phone");
    const linkedIn = getString(formData, "linkedIn");
    const currentRole = getString(formData, "currentRole");
    const organization = getString(formData, "organization");
    const experienceLevel = getString(formData, "experienceLevel");
    const peGoal = getString(formData, "peGoal");
    const submissionId = getString(formData, "submissionId");

    const resume = formData.get("resume");

    if (!fullName || !email || !currentRole || !experienceLevel) {
      return NextResponse.json(
        { error: "Name, email, current role, and experience level are required." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json({ error: "Resume upload is required." }, { status: 400 });
    }

    if (resume.size > MAX_RESUME_BYTES) {
      return NextResponse.json({ error: "Resume must be 5 MB or smaller." }, { status: 400 });
    }

    if (!ALLOWED_RESUME_TYPES.has(resume.type)) {
      return NextResponse.json(
        { error: "Resume must be a PDF or Word document (.pdf, .doc, .docx)." },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toISOString();
    const safeName = escapeHtml(fullName);

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());
    const resolvedSubmissionId =
      submissionId || `${email.trim().toLowerCase()}-sim-${Date.now()}`;

    const storageResult = await saveSimulatorSubmission({
      submittedAt,
      submissionId: resolvedSubmissionId,
      fullName,
      email,
      phone,
      linkedIn,
      currentRole,
      organization,
      experienceLevel,
      peGoal,
      resumeFileName: resume.name,
      resumeMimeType: resume.type,
      resumeSize: resume.size,
      resumeBytes: resumeBuffer,
    });

    if (!storageResult.ok) {
      return NextResponse.json(
        {
          error: storageResult.error || "Simulator submission could not be saved.",
          details: storageResult.details,
        },
        { status: 502 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.log("Simulator registration:", {
        fullName,
        email,
        submittedAt,
        storage: storageResult.method,
        resumeUrl: storageResult.resumeUrl,
      });
      return NextResponse.json(
        {
          success: true,
          message: "Registration received. You may begin the simulation.",
        },
        { status: 200 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const adminTo = process.env.SIMULATOR_ADMIN_EMAIL ?? "contact@norlandcapital.co.uk";

    const detailRows = [
      ["Name", fullName],
      ["Email", email],
      ["Phone", phone || "Not provided"],
      ["LinkedIn", linkedIn || "Not provided"],
      ["Current role", currentRole],
      ["Organization", organization || "Not provided"],
      ["Experience", experienceLevel],
      ["PE goal", peGoal || "Not provided"],
      ["Submitted", submittedAt],
      ["Resume", storageResult.resumeUrl || "Uploaded to Drive"],
    ]
      .map(
        ([label, value]) =>
          `<tr><td style="padding:8px 12px;border:1px solid #e5e5e5;font-weight:600;">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #e5e5e5;">${escapeHtml(value)}</td></tr>`
      )
      .join("");

    try {
      await resend.emails.send({
        from: "Norland Academy <onboarding@resend.dev>",
        to: [adminTo],
        replyTo: email,
        subject: `Simulator access: ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
            <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
              Day One Simulator registration
            </h2>
            <p style="margin-top: 16px; color: #333;">A candidate completed the pre-simulation form and uploaded a resume.</p>
            <table style="width:100%; border-collapse: collapse; margin-top: 20px; font-size: 14px;">${detailRows}</table>
          </div>
        `,
        attachments: [
          {
            filename: resume.name.replace(/[^\w.\-()+ ]/g, "_"),
            content: resumeBuffer,
          },
        ],
      });

      await resend.emails.send({
        from: "Norland Academy <onboarding@resend.dev>",
        to: [email],
        subject: "Your Day One Simulator access is confirmed",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
              You are cleared to begin
            </h2>
            <p style="margin-top: 16px; color: #333;">Hi ${safeName},</p>
            <p style="color: #333;">Thank you for registering. Return to the simulator to start the desk exercise:</p>
            <p style="margin-top: 16px;">
              <a href="https://norlandacademy.com/simulator" style="color: #000; font-weight: 600;">Open Day One Simulator</a>
            </p>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">Norland Academy</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Simulator registration email error:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Registration complete. You may begin the simulation.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Simulator registration error:", error);
    return NextResponse.json({ error: "Registration failed. Please try again." }, { status: 500 });
  }
}
