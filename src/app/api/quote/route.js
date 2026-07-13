import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Basic server-side validation + email sending for quote requests.
// SMTP settings come from environment variables (see .env.example).
// If SMTP is not configured, the lead is logged and the request still
// succeeds with delivered:false, so the site works before creds are set.

const BRAND = "#2b4562";
const GOLD = "#4c7fe1";

function esc(v = "") {
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function row(label, value) {
  if (!value) return "";
  return `<tr>
    <td style="padding:10px;border:1px solid #e6ebf1;font-weight:bold;background:#f5f7fa;color:${BRAND};width:38%;font-size:14px;">${label}</td>
    <td style="padding:10px;border:1px solid #e6ebf1;color:#334155;font-size:14px;">${esc(value)}</td>
  </tr>`;
}

export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const {
    name,
    company,
    email,
    phone,
    country,
    industry,
    product,
    quantity,
    message,
  } = data || {};

  // Minimal validation.
  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid name and email." },
      { status: 422 }
    );
  }

  const subjectItem = product || industry || "Custom Quote";

  const adminHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
      <div style="background:${BRAND};border-radius:10px 10px 0 0;padding:22px 28px;color:#fff;">
        <div style="border-top:2px solid ${GOLD};width:40px;margin-bottom:12px;"></div>
        <h2 style="margin:0;font-size:18px;">New Quote Request</h2>
        <p style="margin:6px 0 0;color:#cbd5e1;font-size:13px;">${esc(subjectItem)}</p>
      </div>
      <div style="border:1px solid #e6ebf1;border-top:none;border-radius:0 0 10px 10px;padding:24px 28px;">
        <table style="width:100%;border-collapse:collapse;">
          ${row("Name", name)}
          ${row("Company", company)}
          ${row("Email", email)}
          ${row("Phone", phone)}
          ${row("Country", country)}
          ${row("Industry", industry)}
          ${row("Product", product)}
          ${row("Quantity", quantity)}
        </table>
        ${
          message
            ? `<p style="margin:18px 0 6px;font-weight:bold;color:${BRAND};font-size:14px;">Project details</p>
               <div style="padding:14px;background:#f5f7fa;border:1px solid #e6ebf1;border-radius:8px;font-size:14px;color:#334155;">${esc(
                 message
               )}</div>`
            : ""
        }
      </div>
    </div>`;

  const customerHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
      <div style="background:${BRAND};border-radius:10px 10px 0 0;padding:24px 28px;color:#fff;">
        <div style="border-top:2px solid ${GOLD};width:40px;margin-bottom:12px;"></div>
        <h1 style="margin:0;font-size:20px;">KANE<span style="color:${GOLD};">IMPEX</span></h1>
      </div>
      <div style="border:1px solid #e6ebf1;border-top:none;border-radius:0 0 10px 10px;padding:28px;">
        <p style="font-size:15px;color:#1e293b;">Hi ${esc(name)},</p>
        <p style="font-size:14px;color:#475569;line-height:1.6;">
          Thank you for your interest in <strong>${esc(
            subjectItem
          )}</strong>. We've received your request and our team is reviewing it now.
          You'll hear back within <strong>1 business day</strong> with a tailored quote.
        </p>
        <p style="font-size:14px;color:${BRAND};font-weight:bold;margin-top:22px;">What happens next</p>
        <p style="font-size:14px;color:#475569;margin:6px 0;"><strong style="color:${GOLD};">01.</strong> Quote review &amp; custom pricing</p>
        <p style="font-size:14px;color:#475569;margin:6px 0;"><strong style="color:${GOLD};">02.</strong> Samples &amp; artwork approval</p>
        <p style="font-size:14px;color:#475569;margin:6px 0;"><strong style="color:${GOLD};">03.</strong> Production &amp; worldwide delivery</p>
        <p style="font-size:14px;color:#475569;margin-top:24px;">Best regards,<br/><strong style="color:${BRAND};">The Kaneimpex Team</strong></p>
      </div>
      <p style="text-align:center;font-size:12px;color:#94a3b8;margin-top:16px;">© ${new Date().getFullYear()} Kaneimpex</p>
    </div>`;

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  // No SMTP configured yet — log the lead and report un-delivered success.
  if (!host || !user || !pass) {
    console.warn("[quote] SMTP not configured — lead logged only:", {
      name,
      email,
      company,
      industry,
      product,
      quantity,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE !== "false",
      auth: { user, pass },
    });

    const from = process.env.QUOTE_FROM || `"Kaneimpex Website" <${user}>`;
    const to = process.env.QUOTE_TO || user;

    await Promise.all([
      transporter.sendMail({
        from,
        to,
        replyTo: email,
        subject: `New Quote: ${subjectItem} — ${name}`,
        html: adminHtml,
      }),
      transporter.sendMail({
        from,
        to: email,
        subject: `Your Kaneimpex quote request — ${subjectItem}`,
        html: customerHtml,
      }),
    ]);

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[quote] send failed:", err);
    return NextResponse.json(
      { error: "Could not send your request. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
