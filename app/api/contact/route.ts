import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { saveContactSubmission } from "@/lib/google/submissions";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, submissionId } = body as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
      submissionId?: string;
    };

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const submittedAt = new Date().toISOString();
    const resolvedSubmissionId =
      submissionId || `${email.trim().toLowerCase()}-${submittedAt}`;

    const storageResult = await saveContactSubmission({
      submittedAt,
      submissionId: resolvedSubmissionId,
      name,
      email,
      subject,
      message,
    });

    if (!storageResult.ok) {
      return NextResponse.json(
        {
          error: storageResult.error || "Contact could not be saved.",
          details: storageResult.details,
        },
        { status: 502 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.log("Contact Form Submission:", {
        name,
        email,
        subject,
        submissionId: resolvedSubmissionId,
        submittedAt,
        storage: storageResult.method,
      });
      return NextResponse.json(
        {
          success: true,
          message: "Thank you! Your message has been received. We'll get back to you soon.",
        },
        { status: 200 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: "Norland Academy <onboarding@resend.dev>",
        to: ["contact@norlandcapital.co.uk"],
        replyTo: email,
        subject: `Contact Form: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="margin-top: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Subject:</strong> ${subject}</p>
              <div style="margin-top: 20px;">
                <strong>Message:</strong>
                <div style="background: #f5f5f5; padding: 15px; margin-top: 10px; border-left: 3px solid #000;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
              </div>
            </div>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
              Sent from Norland Academy contact form
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Resend email error:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent. We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
