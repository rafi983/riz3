// filepath: app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

// Basic input validation
const isValidEmail = (email: string) => /.+@.+\..+/.test(email);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);

    const to = process.env.CONTACT_TO_EMAIL || "rafiirfan211@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL || smtpUser || "no-reply@example.com";

    if (smtpHost && smtpUser && smtpPass) {
      // Prefer SMTP via Nodemailer if configured
      try {
        // @ts-ignore - nodemailer types are shimmed or may not be present at build time
        const nodemailer = (await import("nodemailer")) as any;
        const transporter = nodemailer.default
          ? nodemailer.default.createTransport({ host: smtpHost, port: smtpPort, secure: smtpPort === 465, auth: { user: smtpUser, pass: smtpPass } })
          : nodemailer.createTransport({ host: smtpHost, port: smtpPort, secure: smtpPort === 465, auth: { user: smtpUser, pass: smtpPass } });

        const subject = `New message from ${name}`;
        const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
        const html = `
          <div style="font-family: Arial, sans-serif; line-height:1.6;">
            <h2>New contact message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <pre style="white-space: pre-wrap; background:#f6f8fa; padding:12px; border-radius:6px;">${message}</pre>
          </div>
        `;

        await transporter.sendMail({ from, to, subject, text, html, replyTo: email });
        return NextResponse.json({ ok: true });
      } catch (smtpErr: any) {
        console.error("SMTP send failed, falling back to Resend if available", smtpErr);
        // fall through to Resend fallback
      }
    }

    // Fallback to Resend HTTP API
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured on server" },
        { status: 500 }
      );
    }

    const subject = `New message from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.6;">
        <h2>New contact message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space: pre-wrap; background:#f6f8fa; padding:12px; border-radius:6px;">${message}</pre>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({ from: from || "onboarding@resend.dev", to, subject, text, html, reply_to: email }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      console.error("Resend error", data);
      return NextResponse.json({ error: data?.message || "Failed to send message" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("/api/contact error", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
