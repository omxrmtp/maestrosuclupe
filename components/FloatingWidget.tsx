"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export function FloatingWidget() {
  const [open, setOpen] = useState(false);
  const [arrived, setArrived] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setArrived(true), 600);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const actions = [
    {
      href: `https://wa.me/${SITE.whatsappRaw}`,
      label: "WhatsApp",
      bg: "#25D366",
      icon: (
        <svg className="w-7 h-7 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
    },
    {
      href: `tel:${SITE.phoneRaw}`,
      label: "Llamar",
      bg: "#3b82f6",
      icon: (
        <svg className="w-6 h-6 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
        </svg>
      ),
    },
    {
      href: "/#contacto",
      label: "Mensaje",
      bg: "var(--accent-color)",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
        </svg>
      ),
      onClick: () => setOpen(false),
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <div
        className="flex flex-col items-end gap-3 transition-all duration-300"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(8px) scale(0.95)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {actions.map((a) => (
          <div key={a.label} className="group relative flex items-center">
            <span
              className="mr-3 px-3 py-1.5 rounded-md bg-black/80 text-white text-xs font-medium backdrop-blur-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap"
            >
              {a.label}
            </span>
            <Link
              href={a.href}
              target={a.href.startsWith("http") ? "_blank" : undefined}
              rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={a.onClick}
              aria-label={a.label}
              className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
              style={{ backgroundColor: a.bg }}
            >
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping-slow"
                style={{ backgroundColor: a.bg }}
                aria-hidden="true"
              />
              {a.icon}
            </Link>
          </div>
        ))}
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar opciones de contacto" : "Abrir opciones de contacto"}
        aria-expanded={open}
        className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
        style={{ backgroundColor: "var(--accent-color)" }}
      >
        {!arrived ? (
          <span
            className="absolute inline-flex h-full w-full rounded-full opacity-70 animate-ping-slow"
            style={{ backgroundColor: "var(--accent-color)" }}
            aria-hidden="true"
          />
        ) : null}
        {!open && arrived ? (
          <span
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-black"
            aria-hidden="true"
          />
        ) : null}
        <span
          className="transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}
          aria-hidden="true"
        >
          {open ? (
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
