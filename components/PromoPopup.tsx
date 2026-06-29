"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const STORAGE_KEY = "yani-popup-dismissed";
const SHOW_DELAY_MS = 1500;

const POPUP_TEXTS = [
  "Recupera el amor que creías perdido",
  "Retorno de pareja en días, no meses",
  "Trabajos serios, confidenciales y efectivos",
];

export function PromoPopup() {
  const [show, setShow] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(STORAGE_KEY) === "1") return;
    const t = setTimeout(() => setShow(true), SHOW_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!show) return;
    const id = window.setInterval(() => {
      setTextIndex((i) => (i + 1) % POPUP_TEXTS.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [show]);

  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab") {
        const focusables = document.querySelectorAll<HTMLElement>(
          "#promo-popup button, #promo-popup a, #promo-popup [tabindex]:not([tabindex='-1'])",
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [show]);

  const close = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    }
    setShow(false);
  };

  if (!show) return null;

  const whatsappText = encodeURIComponent(
    "Hola Maestro Suclupe, deseo más información sobre sus servicios.",
  );

  return (
    <div
      id="promo-popup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 popup-overlay-enter"
    >
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={close}
        aria-hidden="true"
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, #ff2e6d 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #2a0438 0%, transparent 70%)" }}
        />
      </div>

      <div
        id="popup-content"
        className="relative z-10 w-full max-w-md sm:max-w-lg popup-enter"
      >
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
          style={{
            background: "linear-gradient(180deg, #190015 0%, #0f000d 100%)",
          }}
        >
          <div
            className="absolute inset-x-0 top-0 h-1 shimmer"
            aria-hidden="true"
          />

          <button
            ref={closeRef}
            onClick={close}
            aria-label="Cerrar promoción"
            className="absolute right-3 top-3 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-accent"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="px-6 pt-8 pb-4 sm:px-8 sm:pt-10 text-center">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 mb-4"
            >
              <span
                className="relative flex h-2 w-2"
                aria-hidden="true"
              >
                <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ backgroundColor: "var(--accent-color)" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "var(--accent-color)" }} />
              </span>
              <span
                className="text-xs font-heading tracking-widest uppercase"
                style={{ color: "var(--accent-color)" }}
              >
                Consulta confidencial
              </span>
            </div>

            <h2
              id="popup-title"
              className="text-2xl sm:text-3xl font-heading font-bold leading-tight mb-3 min-h-[2.6em] flex items-center justify-center"
              style={{ color: "var(--accent-color)" }}
            >
              <span key={textIndex} className="popup-text-enter inline-block">
                {POPUP_TEXTS[textIndex]}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-sm mx-auto">
              Con <strong className="text-white">Maestro Suclupe</strong> y más de 30 años de experiencia. Resultados reales, rápidos y seguros.
            </p>

            <div className="flex items-center justify-center gap-3 mt-5 text-xs text-muted">
              <span className="inline-flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                4.9
              </span>
              <span aria-hidden="true">·</span>
              <span>+500 trabajos</span>
              <span aria-hidden="true">·</span>
              <span>30+ años</span>
            </div>
          </div>

          <div className="px-6 pb-6 sm:px-8 sm:pb-8 space-y-3">
            <a
              href={`https://wa.me/${SITE.whatsappRaw}?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="group flex items-center justify-between w-full px-5 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#25D366]/30"
            >
              <span className="flex items-center gap-3">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-30 animate-ping" aria-hidden="true" />
                  <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </span>
                <span className="text-left">
                  <span className="block text-sm">WhatsApp</span>
                  <span className="block text-xs opacity-80">Respuesta inmediata</span>
                </span>
              </span>
              <span className="text-xs opacity-80 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </a>

            <a
              href={`tel:${SITE.phoneRaw}`}
              onClick={close}
              className="group flex items-center justify-between w-full px-5 py-4 rounded-2xl border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                </span>
                <span className="text-left">
                  <span className="block text-sm">Llamar ahora</span>
                  <span className="block text-xs opacity-70">{SITE.whatsapp}</span>
                </span>
              </span>
              <span className="text-xs opacity-70 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </a>

            <Link
              href="/#contacto"
              onClick={close}
              className="group flex items-center justify-between w-full px-5 py-4 rounded-2xl border-2 hover:border-accent bg-black/40 hover:bg-accent/10 text-white font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ borderColor: "var(--accent-color)" }}
            >
              <span className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(255, 46, 109, 0.2)" }}
                >
                  <svg className="w-5 h-5" style={{ color: "var(--accent-color)" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                  </svg>
                </span>
                <span className="text-left">
                  <span className="block text-sm">Enviar mensaje</span>
                  <span className="block text-xs opacity-70">Formulario completo</span>
                </span>
              </span>
              <span
                className="text-xs opacity-70 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>

          <div className="px-6 sm:px-8 pb-4">
            <p className="text-center text-xs text-muted">
              🔒 100% confidencial · Sin compromiso
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
