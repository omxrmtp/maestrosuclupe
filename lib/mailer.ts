import nodemailer from "nodemailer";

type Mailer = {
  sendMail: (opts: {
    from: string;
    to: string;
    replyTo: string;
    subject: string;
    html: string;
  }) => Promise<{ messageId: string }>;
};

let cached: Mailer | null = null;

export async function getMailer(): Promise<Mailer> {
  if (cached) return cached;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "Configuración SMTP incompleta. Define SMTP_HOST, SMTP_USER y SMTP_PASS en .env.local",
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  cached = {
    sendMail: (opts) => transporter.sendMail(opts),
  };

  return cached;
}
