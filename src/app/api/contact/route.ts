import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, honeypot } = body;

    // Honeypot anti-spam check: bots usually fill hidden honeypot fields
    if (honeypot) {
      return NextResponse.json(
        { success: true, message: "Message received." },
        { status: 200 }
      );
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY?.trim().replace(/^["']|["']$/g, "");
    const recipientEmail = (process.env.CONTACT_RECEIVER_EMAIL || "rafay.shhh@gmail.com").trim().replace(/^["']|["']$/g, "");
    const fromEmail = (process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>").trim().replace(/^["']|["']$/g, "");

    // If Resend API key is not yet configured, log and return dev success so UI works during dev
    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.warn(
        "RESEND_API_KEY is not configured in .env.local. Simulating email dispatch for development:",
        { name, email, subject, message }
      );
      return NextResponse.json(
        {
          success: true,
          message: "Message received! (Dev mode: RESEND_API_KEY not configured yet)",
          simulated: true,
        },
        { status: 200 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `[Portfolio Inquiry] ${subject || "New message from " + name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0b0b0e; color: #f4f4f5; border: 1px solid #272733; border-radius: 12px;">
          <h2 style="color: #ef4444; margin-top: 0; border-bottom: 1px solid #272733; padding-bottom: 12px;">New Contact Message from RafayShhh Portfolio</h2>
          <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject || "General Inquiry")}</p>
          <div style="background: #14141a; padding: 16px; border-radius: 8px; border-left: 3px solid #ef4444; margin: 20px 0;">
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
          </div>
          <p style="color: #71717a; font-size: 12px; margin-bottom: 0;">Sent via rafayshhh.site contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
      id: data?.id,
    });
  } catch (err: unknown) {
    console.error("Contact route error:", err);
    const message = err instanceof Error ? err.message : "An unexpected error occurred while processing your request.";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
