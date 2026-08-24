import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { saveApplySubmission } from "@/lib/google/submissions";
import { validateApplySubmission } from "@/lib/schemas/apply";

type ApplyBody = {
  submissionId?: string;
} & Record<string, unknown>;

function buildApplicationEmailHtml(data: {
  name: string;
  email: string;
  linkedIn: string;
  currentRole: string;
  firm: string;
  yearsInDealRole: string;
  location: string;
  sectorWhy: string;
  transactionReflection: string;
  weeklyCommitment: string;
}): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
      <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
        New Principal Programme Application
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
        <tr><td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Name</td><td>${data.name}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Email</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold; vertical-align: top;">LinkedIn</td><td><a href="${data.linkedIn}">${data.linkedIn}</a></td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Current role</td><td>${data.currentRole}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Firm</td><td>${data.firm}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Years in deal role</td><td>${data.yearsInDealRole}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Location</td><td>${data.location}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Weekly commitment</td><td>${data.weeklyCommitment}</td></tr>
      </table>
      <h3 style="margin-top: 20px; margin-bottom: 8px;">Sector and why</h3>
      <div style="background: #f5f5f5; padding: 12px; white-space: pre-wrap;">${data.sectorWhy}</div>
      <h3 style="margin-top: 20px; margin-bottom: 8px;">Transaction reflection</h3>
      <div style="background: #f5f5f5; padding: 12px; white-space: pre-wrap;">${data.transactionReflection}</div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ApplyBody;
    const validation = validateApplySubmission(body);

    if (!validation.ok) {
      return NextResponse.json({ error: validation.error, field: validation.field }, { status: 400 });
    }

    const data = validation.data;
    const submittedAt = new Date().toISOString();
    const submissionId =
      typeof body.submissionId === "string" && body.submissionId.trim()
        ? body.submissionId.trim()
        : `${data.email}-apply-${Date.now()}`;

    const storageResult = await saveApplySubmission({
      submittedAt,
      submissionId,
      ...data,
    });

    if (!storageResult.ok) {
      return NextResponse.json(
        {
          error: storageResult.error || "Application could not be saved.",
          details: storageResult.details,
        },
        { status: 502 }
      );
    }

    if (storageResult.duplicate) {
      return NextResponse.json(
        {
          success: true,
          message: "We already have your application on file. We will be in touch if your profile fits.",
        },
        { status: 200 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.log("Principal Programme Application saved:", {
        submissionId,
        email: data.email,
        submittedAt,
        storage: storageResult.method,
      });
      return NextResponse.json(
        {
          success: true,
          message: "Thank you. Your application has been received.",
        },
        { status: 200 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: "Norland Academy <onboarding@resend.dev>",
        to: ["admissions@norlandacademy.com"],
        replyTo: data.email,
        subject: `Principal Programme Application: ${data.name}`,
        html: buildApplicationEmailHtml(data),
      });
    } catch (emailError) {
      console.error("Resend email error:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you. Your application has been received.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Apply form error:", error);
    return NextResponse.json({ error: "Failed to submit application. Please try again later." }, { status: 500 });
  }
}
