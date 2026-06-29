import { NextResponse } from "next/server";
import { z } from "zod";
import { getMailer } from "@/lib/mailer";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().trim().min(2, "El nombre es muy corto").max(120),
  phone: z.string().trim().min(6, "Teléfono inválido").max(40),
  email: z.string().trim().email("Email inválido").max(160),
  message: z.string().trim().min(10, "El mensaje es muy corto").max(4000),
});

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Datos inválidos" },
      { status: 400 },
    );
  }

  const { name, phone, email, message } = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;

  if (!to) {
    return NextResponse.json(
      { error: "No hay destinatario configurado (CONTACT_TO_EMAIL)" },
      { status: 500 },
    );
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #190015; color: #fff; padding: 24px; border-radius: 12px;">
      <h2 style="color: #ff2e6d; font-family: Georgia, serif; margin-top: 0;">Nuevo mensaje de contacto</h2>
      <table style="width: 100%; border-collapse: collapse; color: #fff;">
        <tr><td style="padding: 8px 0; color: #9ca3af;">Nombre</td><td style="padding: 8px 0;"><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding: 8px 0; color: #9ca3af;">Teléfono</td><td style="padding: 8px 0;">${escapeHtml(phone)}</td></tr>
        <tr><td style="padding: 8px 0; color: #9ca3af;">Email</td><td style="padding: 8px 0;">${escapeHtml(email)}</td></tr>
      </table>
      <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 16px 0;" />
      <h3 style="color: #ff2e6d; font-family: Georgia, serif;">Mensaje</h3>
      <p style="white-space: pre-wrap; line-height: 1.6; color: #e5e7eb;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const mailer = await getMailer();
    await mailer.sendMail({
      from: `"Maestro Suclupe Web" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `Nuevo contacto web: ${name}`,
      html,
    });
  } catch (err) {
    const detail = err instanceof Error ? err.message : "Error desconocido";
    return NextResponse.json(
      { error: `No se pudo enviar el email: ${detail}` },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
