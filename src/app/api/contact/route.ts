import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactSubmissionPayload {
  formSource?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  service?: string;
  message?: string;
  notes?: string;
  projectType?: string;
  budgetRange?: string;
  projectScope?: string;
  poolStyle?: string;
  selectedFeatures?: string[];
  budgetTier?: string;
  timeline?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactSubmissionPayload;

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const address = (body.address || "").trim();
    const service = (body.service || "").trim();
    const message = (body.message || body.notes || "").trim();
    const formSource = (body.formSource || "Website Inquiry Form").trim();
    const projectType = (body.projectType || "").trim();
    const budgetRange = (body.budgetRange || body.budgetTier || "").trim();
    const projectScope = (body.projectScope || "").trim();
    const poolStyle = (body.poolStyle || "").trim();
    const timeline = (body.timeline || "").trim();
    const selectedFeatures = Array.isArray(body.selectedFeatures)
      ? body.selectedFeatures.filter(Boolean)
      : [];

    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email, and phone number are required.",
        },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.zoho.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpSecure =
      process.env.SMTP_SECURE !== undefined
        ? process.env.SMTP_SECURE === "true"
        : smtpPort === 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromName = process.env.SMTP_FROM_NAME || "Pools By Elio Website";
    const fromEmail = process.env.SMTP_FROM_EMAIL || smtpUser;
    const recipientEmail =
      process.env.LEAD_RECIPIENT_EMAIL || smtpUser || "jack@stellrit.com";

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          success: false,
          error: "Email server credentials are not configured.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const submittedAt = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "America/Chicago",
    }).format(new Date());

    const subjectTopic =
      service || projectScope || projectType || "General Project Inquiry";
    const subject = `New Lead (${formSource}): ${name} — ${subjectTopic}`;

    const detailRows: Array<{ label: string; value: string }> = [
      { label: "Form Source", value: formSource },
      { label: "Client Name", value: name },
      { label: "Email Address", value: email },
      { label: "Phone Number", value: phone },
    ];

    if (address) {
      detailRows.push({ label: "Property / Project Address", value: address });
    }
    if (service) {
      detailRows.push({ label: "Requested Service", value: service });
    }
    if (projectType) {
      detailRows.push({ label: "Project Category", value: projectType });
    }
    if (projectScope) {
      detailRows.push({ label: "Project Scope", value: projectScope });
    }
    if (poolStyle) {
      detailRows.push({ label: "Architectural Pool Style", value: poolStyle });
    }
    if (budgetRange) {
      detailRows.push({ label: "Target Budget Range", value: budgetRange });
    }
    if (timeline) {
      detailRows.push({ label: "Desired Start Timeline", value: timeline });
    }

    const textLines = [
      `NEW LEAD SUBMISSION — POOLS BY ELIO (https://poolsbyelio.net)`,
      `============================================================`,
      ...detailRows.map((row) => `${row.label}: ${row.value}`),
    ];

    if (selectedFeatures.length > 0) {
      textLines.push(
        `\nSelected Luxury Amenities (${selectedFeatures.length}):`,
        ...selectedFeatures.map((feat) => `  - ${feat}`)
      );
    }

    if (message) {
      textLines.push(`\nClient Message / Project Notes:\n${message}`);
    }

    textLines.push(`\nSubmitted At (Central Time): ${submittedAt}`);

    const htmlRows = detailRows
      .map(
        (row) => `
        <tr>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #00285c; width: 38%; font-size: 14px;">
            ${escapeHtml(row.label)}
          </td>
          <td style="padding: 10px 14px; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">
            ${
              row.label === "Email Address"
                ? `<a href="mailto:${escapeHtml(row.value)}" style="color: #00509e; text-decoration: underline;">${escapeHtml(row.value)}</a>`
                : row.label === "Phone Number"
                  ? `<a href="tel:${escapeHtml(row.value)}" style="color: #00509e; font-weight: 700; text-decoration: none;">${escapeHtml(row.value)}</a>`
                  : escapeHtml(row.value)
            }
          </td>
        </tr>`
      )
      .join("");

    const featuresHtml =
      selectedFeatures.length > 0
        ? `
      <div style="margin-top: 20px; padding: 16px; background-color: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px;">
        <h3 style="margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #003870;">
          Selected Luxury Amenities &amp; Features (${selectedFeatures.length})
        </h3>
        <ul style="margin: 0; padding-left: 20px; color: #0f172a; font-size: 14px; line-height: 1.6;">
          ${selectedFeatures.map((feat) => `<li>${escapeHtml(feat)}</li>`).join("")}
        </ul>
      </div>`
        : "";

    const messageHtml = message
      ? `
      <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #00509e; border-radius: 6px;">
        <h3 style="margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #00285c;">
          Client Message / Project Notes
        </h3>
        <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>`
      : "";

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
        </head>
        <body style="margin: 0; padding: 24px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); border: 1px solid #cbd5e1;">
            <div style="background: linear-gradient(135deg, #00285c 0%, #00509e 100%); padding: 24px; color: #ffffff;">
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #67e8f9; margin-bottom: 6px;">
                Pools By Elio • Website Lead Notification
              </div>
              <h1 style="margin: 0; font-size: 20px; font-weight: 800; line-height: 1.3;">
                ${escapeHtml(name)} — ${escapeHtml(subjectTopic)}
              </h1>
              <div style="margin-top: 6px; font-size: 12px; color: #bae6fd;">
                Source: ${escapeHtml(formSource)} • ${escapeHtml(submittedAt)}
              </div>
            </div>

            <div style="padding: 24px;">
              <table style="width: 100%; border-collapse: collapse; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
                <tbody>
                  ${htmlRows}
                </tbody>
              </table>

              ${featuresHtml}
              ${messageHtml}

              <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; display: flex; justify-content: space-between;">
                <span>Pools By Elio • 412 Ezell pike Nashville TN 37217 • (615) 568-3154</span>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: recipientEmail,
      replyTo: `"${name}" <${email}>`,
      subject,
      text: textLines.join("\n"),
      html,
    });

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been delivered.",
    });
  } catch (error) {
    console.error("Failed to send form email:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to send your request right now. Please call us directly at (615) 568-3154.",
      },
      { status: 500 }
    );
  }
}
