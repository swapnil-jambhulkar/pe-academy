import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { saveContactSubmission } from "@/lib/google/submissions";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ApplyBody = {
  name?: string;
  email?: string;
  linkedIn?: string;
  currentRole?: string;
  firm?: string;
  yearsInDealRole?: string;
  location?: string;
  sectorWhy?: string;
  transactionReflection?: string;
  weeklyCommitment?: string;
  submissionId?: string;
};

function buildApplicationMessage(body: ApplyBody): string {
  return [
    `LinkedIn: ${body.linkedIn ?? ""}`,
    `Current role: ${body.currentRole ?? ""}`,
    `Firm: ${body.firm ?? ""}`,
    `Years in deal role: ${body.yearsInDealRole ?? ""}`,
    `Location: ${body.location ?? ""}`,
    `Weekly commitment (10-12 hrs): ${body.weeklyCommitment ?? ""}`,
    "",
    "Sector and why:",
    body.sectorWhy ?? "",
    "",
    "Transaction reflection:",
    body.transactionReflection ?? "",
  ].join("\n");
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ApplyBody;
    const {
      name,
      email,
      linkedIn,
      currentRole,
      firm,
      yearsInDealRole,
      location,
      sectorWhy,
      transactionReflection,
      weeklyCommitment,
      submissionId,
    } = body;

    if (
      !name ||
      !email ||
      !linkedIn ||
      !currentRole ||
      !firm ||
      !yearsInDealRole ||
      !location ||
      !sectorWhy ||
      !transactionReflection ||
      !weeklyCommitment
    ) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (weeklyCommitment !== "yes" && weeklyCommitment !== "no") {
      return NextResponse.json({ error: "Invalid weekly commitment answer" }, { status: 400 });
    }

    const submittedAt = new Date().toISOString();
    const resolvedSubmissionId =
      submissionId || `${email.trim().toLowerCase()}-principal-${submittedAt}`;

    const message = buildApplicationMessage(body);

    const storageResult = await saveContactSubmission({
      submittedAt,
      submissionId: resolvedSubmissionId,
      name,
      email,
      subject: "Principal Programme Application",
      message,
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
      console.log("Principal Programme Application:", {
        name,
        email,
        submissionId: resolvedSubmissionId,
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
        replyTo: email,
        subject: `Principal Programme Application: ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
              New Principal Programme Application
            </h2>
            <div style="margin-top: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <div style="background: #f5f5f5; padding: 15px; margin-top: 10px; border-left: 3px solid #000; white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</div>
            </div>
          </div>
        `,
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
