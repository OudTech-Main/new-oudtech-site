import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.RESEND_FROM_EMAIL ?? "noreply@oudtechnologies.com";
const TO_TEAM = process.env.CONTACT_RECIPIENT_EMAIL ?? "info@oudtechnologies.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, country, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "firstName, email, and message are required." },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`.trim();

    // ── 1. Notify the Oudtech team ──────────────────────────────────────
    await resend.emails.send({
      from: `Oudtech Contact Form <${FROM}>`,
      to: TO_TEAM,
      replyTo: email,
      subject: `New enquiry from ${fullName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0f1010">
          <div style="background:#064ADF;padding:24px 32px;border-radius:12px 12px 0 0">
            <img src="https://oudtechnologies.com/logo.png" alt="Oudtech" height="36" style="display:block"/>
          </div>
          <div style="background:#f9f9f9;padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
            <h2 style="margin:0 0 24px;font-size:20px">New Contact Form Submission</h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#696f77;width:120px">Name</td><td style="padding:8px 0;font-weight:600">${fullName}</td></tr>
              <tr><td style="padding:8px 0;color:#696f77">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#064ADF">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#696f77">Phone</td><td style="padding:8px 0">${phone || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#696f77">Country</td><td style="padding:8px 0">${country || "—"}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0"/>
            <p style="margin:0 0 8px;color:#696f77;font-size:13px;text-transform:uppercase;letter-spacing:.05em">Message</p>
            <p style="margin:0;font-size:15px;line-height:1.7;white-space:pre-wrap">${message}</p>
            <div style="margin-top:32px;padding-top:24px;border-top:1px solid #e5e7eb;font-size:12px;color:#b0b5bc">
              Submitted via the contact form on oudtechnologies.com
            </div>
          </div>
        </div>
      `,
    });

    // ── 2. Confirmation email to the sender ─────────────────────────────
    await resend.emails.send({
      from: `Oudtech <${FROM}>`,
      to: email,
      subject: "We received your message — Oudtech",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0f1010">
          <div style="background:#064ADF;padding:24px 32px;border-radius:12px 12px 0 0">
            <img src="https://oudtechnologies.com/logo.png" alt="Oudtech" height="36" style="display:block"/>
          </div>
          <div style="background:#ffffff;padding:40px 32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
            <h1 style="margin:0 0 16px;font-size:24px;font-weight:700">Hi ${firstName}, we got your message!</h1>
            <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#696f77">
              Thank you for reaching out to Oud-Technologies. We've received your enquiry and
              our team will get back to you within <strong style="color:#0f1010">24–48 hours</strong>.
            </p>
            <p style="margin:0 0 32px;font-size:15px;line-height:1.7;color:#696f77">
              In the meantime, feel free to explore our services or follow us on social media.
            </p>
            <a href="https://oudtechnologies.com/services"
               style="display:inline-block;background:#064ADF;color:#fff;padding:12px 28px;border-radius:999px;font-size:14px;font-weight:600;text-decoration:none">
              View Our Services
            </a>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:40px 0 24px"/>
            <p style="margin:0;font-size:12px;color:#b0b5bc;line-height:1.6">
              Oud-Technologies · Lagos, Nigeria<br/>
              <a href="mailto:info@oudtechnologies.com" style="color:#064ADF">info@oudtechnologies.com</a> · +234 916 324 9133
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] email error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
