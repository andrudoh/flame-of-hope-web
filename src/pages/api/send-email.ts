import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type FormField = {
  label: string;
  value: string;
};

const buildTransporter = () => {
  if (!process.env.EMAIL_HOST) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: Boolean(process.env.EMAIL_SECURE || false),
    auth: process.env.EMAIL_USER
      ? {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      : undefined,
  });
};

const transporter = buildTransporter();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { subject, fields } = req.body as {
    subject?: string;
    fields?: FormField[];
  };

  if (!fields || !Array.isArray(fields)) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  const recipient =
    process.env.CONTACT_RECIPIENT_EMAIL || "flameofhopen@gmail.com";

  const text = fields
    .map((field) => `${field.label}: ${field.value}`)
    .join("\n");

  const html =
    "<ul>" +
    fields
      .map(
        (field) =>
          `<li><strong>${field.label}:</strong> ${field.value
            .toString()
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")}</li>`
      )
      .join("") +
    "</ul>";

  if (!transporter) {
    console.warn(
      "Email transporter is not configured. Message contents:",
      text
    );
    return res.status(200).json({ delivered: false });
  }

  try {
    await transporter.sendMail({
      from:
        process.env.EMAIL_FROM ||
        process.env.EMAIL_USER ||
        "no-reply@flameofhope.org",
      to: recipient,
      subject: subject || "New Form Submission",
      text,
      html,
    });

    return res.status(200).json({ delivered: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
