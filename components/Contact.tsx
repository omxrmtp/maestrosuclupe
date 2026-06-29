"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

type Status = "idle" | "sending" | "success" | "error";
type FieldKey = "name" | "phone" | "email" | "message";

const validators: Record<FieldKey, (v: string) => string | null> = {
  name: (v) => (v.trim().length < 2 ? "Ingresa tu nombre completo" : null),
  phone: (v) => (v.trim().length < 6 ? "Ingresa un número válido" : null),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? null : "Email inválido"),
  message: (v) => (v.trim().length < 10 ? "Cuéntame un poco más (mín. 10 caracteres)" : null),
};

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (touched[name as FieldKey]) {
      const err = validators[name as FieldKey](value);
      setErrors((er) => ({ ...er, [name]: err ?? undefined }));
    }
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((er) => ({ ...er, [name]: validators[name as FieldKey](value) ?? undefined }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allTouched: Partial<Record<FieldKey, boolean>> = {
      name: true, phone: true, email: true, message: true,
    };
    setTouched(allTouched);

    const newErrors: Partial<Record<FieldKey, string>> = {};
    for (const k of Object.keys(validators) as FieldKey[]) {
      const err = validators[k](form[k]);
      if (err) newErrors[k] = err;
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al enviar el mensaje");
      setStatus("success");
      setForm({ name: "", phone: "", email: "", message: "" });
      setTouched({});
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error desconocido");
    }
  };

  return (
    <section
      id="contacto"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle at 50% 50%, #1a0129 0%, #000000 100%)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal>
          <h2
            className="text-4xl md:text-5xl font-heading text-center mb-3 drop-shadow-md"
            style={{ color: "var(--accent-color)" }}
          >
            Contáctame
          </h2>
          <div className="section-divider" />
          <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
            Si tienes dudas o deseas agendar una consulta, escríbeme. Te respondo personalmente.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto">
          <Reveal>
            <div className="space-y-8 h-full flex flex-col justify-center">
              <div>
                <h3 className="text-white font-heading font-bold mb-2 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5" style={{ color: "var(--accent-color)" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  WhatsApp
                </h3>
                <a
                  href={`https://wa.me/${SITE.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold hover:underline"
                  style={{ color: "var(--accent-color)" }}
                >
                  {SITE.whatsapp}
                </a>
                <p className="text-muted text-sm mt-1">Respuesta rápida, todos los días</p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-sm text-muted">
                  ¿Prefieres llamarme?
                </p>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="text-white font-semibold hover:text-accent transition-colors text-lg"
                >
                  {SITE.whatsapp}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form onSubmit={onSubmit} className="space-y-4" noValidate>
              {(["name", "phone", "email", "message"] as const).map((field) => {
                const isTextarea = field === "message";
                const err = errors[field];
                const showErr = touched[field] && err;
                return (
                  <div key={field}>
                    <label htmlFor={field} className="sr-only">
                      {labelFor(field)}
                    </label>
                    {isTextarea ? (
                      <textarea
                        id={field}
                        name={field}
                        rows={5}
                        placeholder={labelFor(field)}
                        value={form[field]}
                        onChange={onChange}
                        onBlur={onBlur}
                        aria-invalid={Boolean(showErr)}
                        aria-describedby={showErr ? `${field}-err` : undefined}
                        className={`input-mystic resize-vertical ${showErr ? "is-invalid" : ""}`}
                      />
                    ) : (
                      <input
                        id={field}
                        name={field}
                        type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                        autoComplete={
                          field === "email" ? "email" : field === "phone" ? "tel" : "name"
                        }
                        placeholder={labelFor(field)}
                        value={form[field]}
                        onChange={onChange}
                        onBlur={onBlur}
                        aria-invalid={Boolean(showErr)}
                        aria-describedby={showErr ? `${field}-err` : undefined}
                        className={`input-mystic ${showErr ? "is-invalid" : ""}`}
                      />
                    )}
                    {showErr ? (
                      <p id={`${field}-err`} className="mt-1.5 text-xs text-red-400" role="alert">
                        {err}
                      </p>
                    ) : null}
                  </div>
                );
              })}

              {status === "success" ? (
                <div
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300 text-sm"
                  role="status"
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  ¡Mensaje enviado! Te contactaré pronto.
                </div>
              ) : null}
              {status === "error" ? (
                <div
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm"
                  role="alert"
                >
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {errorMsg}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full"
              >
                {status === "sending" ? (
                  <>
                    <span
                      className="inline-block w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin-slow"
                      aria-hidden="true"
                    />
                    Enviando…
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-xs text-muted text-center pt-2">
                Al enviar aceptas que te contactemos por los medios proporcionados.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function labelFor(field: FieldKey): string {
  return {
    name: "Nombre completo",
    phone: "Número de contacto",
    email: "Correo electrónico",
    message: "Cuéntame tu situación",
  }[field];
}
