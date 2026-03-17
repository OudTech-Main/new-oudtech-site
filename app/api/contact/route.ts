import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.RESEND_FROM_EMAIL ?? "noreply@oudtechnologies.com";
const TO_TEAM =
  process.env.CONTACT_RECIPIENT_EMAIL ?? "info@oudtechnologies.com";

/* ── Shared header / footer snippets ──────────────────────────── */
const emailHeader = `
  <div style="background:#0f1010;padding:28px 40px;border-radius:16px 16px 0 0;text-align:center">
    <img
      src="https://oudtechnologies.com/logo-white.png"
      alt="OudTechnologies"
      height="32"
      style="display:inline-block"
    />
    <p style="margin:6px 0 0;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#ffffff80;font-family:sans-serif">
      Technology · Innovation · Trust
    </p>
  </div>
`;

const emailFooter = `
  <div style="background:#f5f5f5;padding:24px 40px;border-radius:0 0 16px 16px;text-align:center;border:1px solid #e5e7eb;border-top:none">
    <p style="margin:0 0 12px;font-size:12px;color:#9ca3af;font-family:sans-serif">Follow us</p>
    <div style="margin-bottom:20px">
      <a href="https://instagram.com/oudtechnologies" style="display:inline-block;margin:0 6px;color:#0f1010;font-size:12px;text-decoration:none;font-family:sans-serif">Instagram</a>
      <a href="https://x.com/oudtechnologies" style="display:inline-block;margin:0 6px;color:#0f1010;font-size:12px;text-decoration:none;font-family:sans-serif">X</a>
      <a href="https://www.facebook.com/share/1DhN9k4mPm/" style="display:inline-block;margin:0 6px;color:#0f1010;font-size:12px;text-decoration:none;font-family:sans-serif">Facebook</a>
      <a href="https://www.youtube.com/@OudTechnologies" style="display:inline-block;margin:0 6px;color:#0f1010;font-size:12px;text-decoration:none;font-family:sans-serif">YouTube</a>
    </div>
    <p style="margin:0;font-size:11px;color:#b0b5bc;font-family:sans-serif;line-height:1.6">
      OudTechnologies · Port Harcourt, Nigeria<br/>
      <a href="mailto:info@oudtechnologies.com" style="color:#0f1010">info@oudtechnologies.com</a> &nbsp;·&nbsp; +234 805 295 2194
    </p>
  </div>
`;

/* ── Team notification email ───────────────────────────────────── */
function teamEmailHtml(
  fullName: string,
  email: string,
  phone: string,
  country: string,
  message: string,
) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <body style="margin:0;padding:32px 0;background:#f0f0f0">
      <div style="max-width:600px;margin:0 auto">
        ${emailHeader}
        <div style="background:#ffffff;padding:40px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb">

          <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#9ca3af;font-family:sans-serif">New Submission</p>
          <h1 style="margin:0 0 32px;font-size:26px;font-weight:700;color:#0f1010;font-family:sans-serif;line-height:1.2">
            You've got a new enquiry
          </h1>

          <div style="background:#f9f9f9;border-radius:12px;padding:24px;margin-bottom:28px">
            <table style="width:100%;border-collapse:collapse;font-size:14px;font-family:sans-serif">
              <tr>
                <td style="padding:10px 0;color:#9ca3af;width:100px;vertical-align:top;border-bottom:1px solid #efefef">Name</td>
                <td style="padding:10px 0;font-weight:600;color:#0f1010;border-bottom:1px solid #efefef">${fullName}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#9ca3af;vertical-align:top;border-bottom:1px solid #efefef">Email</td>
                <td style="padding:10px 0;border-bottom:1px solid #efefef">
                  <a href="mailto:${email}" style="color:#0f1010;font-weight:600">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#9ca3af;vertical-align:top;border-bottom:1px solid #efefef">Phone</td>
                <td style="padding:10px 0;color:#0f1010;border-bottom:1px solid #efefef">${phone || "—"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#9ca3af;vertical-align:top">Country</td>
                <td style="padding:10px 0;color:#0f1010">${country || "—"}</td>
              </tr>
            </table>
          </div>

          <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;font-family:sans-serif">Message</p>
          <div style="background:#f9f9f9;border-left:3px solid #0f1010;padding:16px 20px;border-radius:0 8px 8px 0">
            <p style="margin:0;font-size:15px;line-height:1.8;color:#0f1010;font-family:sans-serif;white-space:pre-wrap">${message}</p>
          </div>

          <div style="margin-top:32px;text-align:center">
            <a href="mailto:${email}"
               style="display:inline-block;background:#0f1010;color:#ffffff;padding:14px 36px;border-radius:999px;font-size:14px;font-weight:600;text-decoration:none;font-family:sans-serif;letter-spacing:0.02em">
              Reply to ${fullName.split(" ")[0]}
            </a>
          </div>

        </div>
        ${emailFooter}
      </div>
    </body>
    </html>
  `;
}

/* ── Client confirmation email ─────────────────────────────────── */
function clientEmailHtml(firstName: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <body style="margin:0;padding:32px 0;background:#f0f0f0">
      <div style="max-width:600px;margin:0 auto">
        ${emailHeader}
        <div style="background:#ffffff;padding:48px 40px;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;text-align:center">

          <div style="display:inline-block;background:#0f1010;border-radius:50%;width:56px;height:56px;line-height:56px;text-align:center;font-size:24px;margin-bottom:24px">
            ✓
          </div>

          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#9ca3af;font-family:sans-serif">Message received</p>
          <h1 style="margin:0 0 16px;font-size:28px;font-weight:700;color:#0f1010;font-family:sans-serif;line-height:1.2">
            Hi ${firstName}, we got your message!
          </h1>
          <p style="margin:0 0 32px;font-size:15px;line-height:1.8;color:#6b7280;font-family:sans-serif;max-width:400px;margin-left:auto;margin-right:auto">
            Thank you for reaching out to OudTechnologies. Our team will review your enquiry and get back to you within <strong style="color:#0f1010">24–48 hours</strong>.
          </p>

          <div style="background:#f9f9f9;border-radius:12px;padding:24px 32px;margin-bottom:36px;text-align:left">
            <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;font-family:sans-serif">While you wait</p>
            <p style="margin:0;font-size:14px;line-height:1.8;color:#6b7280;font-family:sans-serif">
              Explore our services, check out the OudTech Academy, or follow us on social media to see what we're building.
            </p>
          </div>

          <a href="https://oudtechnologies.com/services"
             style="display:inline-block;background:#0f1010;color:#ffffff;padding:14px 40px;border-radius:999px;font-size:14px;font-weight:600;text-decoration:none;font-family:sans-serif;letter-spacing:0.02em">
            Explore Our Services
          </a>

        </div>
        ${emailFooter}
      </div>
    </body>
    </html>
  `;
}

/* ── Route handler ─────────────────────────────────────────────── */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, country, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "firstName, email, and message are required." },
        { status: 400 },
      );
    }

    const fullName = `${firstName} ${lastName}`.trim();

    const results = await Promise.allSettled([
      resend.emails.send({
        from: `OudTechnologies <${FROM}>`,
        to: TO_TEAM,
        replyTo: email,
        subject: `New enquiry from ${fullName}`,
        html: teamEmailHtml(fullName, email, phone, country, message),
      }),
      resend.emails.send({
        from: `OudTechnologies <${FROM}>`,
        to: email,
        subject: "We received your message — OudTechnologies",
        html: clientEmailHtml(firstName),
      }),
    ]);

    results.forEach((result, index) => {
      if (result.status === "rejected") {
        console.error(
          `Email ${index === 0 ? "to Team" : "to Client"} failed:`,
          result.reason,
        );
      }
    });

    if (!results.some((r) => r.status === "fulfilled")) {
      throw new Error("All email attempts failed.");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] critical error:", err);
    return NextResponse.json(
      { error: "Failed to process request. Please try again later." },
      { status: 500 },
    );
  }
}
