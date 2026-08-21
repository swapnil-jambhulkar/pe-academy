import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const name = typeof body.name === "string" ? body.name.trim() : "";

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      console.log("Waitlist Signup:", {
        name: name || null,
        email,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        {
          success: true,
          message: "Thank you. We will notify you when applications open in January 2027.",
        },
        { status: 200 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: "Norland Academy <onboarding@resend.dev>",
        to: [email],
        subject: "You're on the PGP waitlist",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
              PGP waitlist
            </h2>
            <div style="margin-top: 20px;">
              <p>${name ? `Hi ${name},` : "Hello,"}</p>
              <p>You are on the waitlist for The Principal Programme. Applications open January 2027.</p>
              <p style="margin-top: 15px;">In the meantime, try the <a href="https://norlandacademy.com/simulator" style="color: #000; text-decoration: underline;">Day One Analyst Simulator</a> or join <a href="https://norlandacademy.com/guild" style="color: #000; text-decoration: underline;">The Private Equity Forum</a>.</p>
            </div>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
              Norland Academy
            </p>
          </div>
        `,
      });

      await resend.emails.send({
        from: "Norland Academy <onboarding@resend.dev>",
        to: ["contact@norlandcapital.co.uk"],
        subject: "New PGP waitlist signup",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
              New PGP waitlist signup
            </h2>
            <div style="margin-top: 20px;">
              ${name ? `<p><strong>Name:</strong> ${name}</p>` : ""}
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
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
        message: "Thank you. We will notify you when applications open in January 2027.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist. Please try again later." },
      { status: 500 }
    );
  }
}
