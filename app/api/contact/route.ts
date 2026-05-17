import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, service, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const serviceLabels: Record<string, string> = {
      "air-cargo": "Air Cargo",
      surface: "Surface Transport",
      rail: "Rail Cargo",
      express: "Express Delivery",
      document: "Document Delivery",
      warehousing: "Warehousing",
      other: "Other / Custom",
    };

    const htmlContent = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e2e8f0;border-radius:12px;">
        <div style="background:linear-gradient(135deg,#0a1628,#0d1f3c);padding:20px 24px;border-radius:8px 8px 0 0;margin:-24px -24px 24px;">
          <h2 style="color:#fff;margin:0;font-size:20px;">New Contact Form Submission</h2>
          <p style="color:rgba(255,255,255,0.5);margin:4px 0 0;font-size:13px;">RD Trade Network Website</p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;width:140px;font-weight:600;">Full Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0a1628;">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-weight:600;">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0a1628;"><a href="mailto:${email}" style="color:#f97316;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-weight:600;">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0a1628;"><a href="tel:${phone}" style="color:#f97316;">${phone}</a></td>
          </tr>
          ${
            company
              ? `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-weight:600;">Company</td>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0a1628;">${company}</td>
          </tr>`
              : ""
          }
          ${
            service
              ? `<tr>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-weight:600;">Service</td>
            <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#0a1628;">${serviceLabels[service] ?? service}</td>
          </tr>`
              : ""
          }
          <tr>
            <td style="padding:10px 0;color:#64748b;font-weight:600;vertical-align:top;">Message</td>
            <td style="padding:10px 0;color:#0a1628;white-space:pre-wrap;">${message}</td>
          </tr>
        </table>
        <p style="margin:24px 0 0;font-size:12px;color:#94a3b8;text-align:center;">
          Sent from the contact form at rdtradenetwork.in
        </p>
      </div>
    `;

    const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: { name: "RD Trade Network Website", email: "no-reply@rdtradenetwork.in" },
        to: [{ email: "rakeshsinghchandigarh@gmail.com", name: "RD Trade Network" }],
        replyTo: { email, name },
        subject: `New Enquiry from ${name} – RD Trade Network`,
        htmlContent,
      }),
    });

    if (!brevoRes.ok) {
      const errBody = await brevoRes.json().catch(() => ({}));
      console.error("Brevo error:", errBody);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
