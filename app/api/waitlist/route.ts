import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      // Fallback: log to console if API key is missing
      console.log("Waitlist Signup:", {
        email,
        timestamp: new Date().toISOString(),
      });
      
      return NextResponse.json(
        { 
          success: true, 
          message: "Thank you! We'll notify you when applications open." 
        },
        { status: 200 }
      );
    }

    // Initialize Resend only when needed (not at module level)
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send emails using Resend
    try {
      // Send confirmation to user
      await resend.emails.send({
        from: "PE Academy <onboarding@resend.dev>", // Change to your verified domain
        to: [email],
        subject: "You're on the PE Academy Waitlist!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
              Welcome to the PE Academy Waitlist
            </h2>
            <div style="margin-top: 20px;">
              <p>Thank you for joining! We'll notify you when the next cohort opens for applications.</p>
              <p style="margin-top: 15px;">In the meantime, check out our <a href="https://yourdomain.com/starter-kit" style="color: #000; text-decoration: underline;">Starter Kit</a> to get started building your PE portfolio.</p>
            </div>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">
              PE Academy by Norland Capital
            </p>
          </div>
        `,
      });

      // Notify admin
      await resend.emails.send({
        from: "PE Academy <onboarding@resend.dev>", // Change to your verified domain
        to: ["contact@norlandcapital.co.uk"],
        subject: "New Waitlist Signup",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
              New Waitlist Signup
            </h2>
            <div style="margin-top: 20px;">
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Resend email error:", emailError);
      // Still return success to user, but log the error
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you! We'll notify you when applications open." 
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

