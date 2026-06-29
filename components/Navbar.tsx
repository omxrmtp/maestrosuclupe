"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(15, 0, 13, 0.92)" : "var(--bg-color)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.4)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid transparent",
      }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center py-3 md:py-4">
        <Link
          href="/#inicio"
          className="flex items-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
          onClick={closeMobile}
          aria-label={`${SITE.name} - Inicio`}
        >
          <Image
            src="/img/identity/logonuevo.jpg"
            alt={SITE.name}
            width={200}
            height={64}
            className="h-12 md:h-16 w-auto object-contain"
            priority
          />
        </Link>

        <ul className="hidden md:flex space-x-7 items-center font-heading text-sm tracking-wide">
          {NAV_LINKS.map((link) => {
            if ("children" in link && link.children) {
              return (
                <li key={link.label} className="relative group">
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-accent transition-colors duration-200 py-2 inline-flex items-center gap-1"
                  >
                    {link.label}
                    <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <ul
                    className="absolute left-0 top-full pt-2 w-64 opacity-0 -translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 z-50"
                  >
                    <div className="bg-black/95 border border-white/10 rounded-lg shadow-2xl py-2 backdrop-blur-md">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-300 hover:text-accent hover:bg-white/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                </li>
              );
            }
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white/90 hover:text-accent transition-colors duration-200 py-2"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          id="mobile-menu-btn"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden text-white p-2 -mr-2 rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors"
        >
          {mobileOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-[68px] bottom-0 bg-black/95 backdrop-blur-md overflow-y-auto menu-slide-enter"
        >
          <ul className="flex flex-col py-6 px-6 font-heading space-y-1">
            {NAV_LINKS.map((link) => {
              if ("children" in link && link.children) {
                return (
                  <li key={link.label} className="border-b border-white/5">
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      className="w-full text-white hover:text-accent transition-colors py-4 flex items-center justify-between"
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesOpen ? (
                      <ul className="flex flex-col pb-3 space-y-1">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={closeMobile}
                              className="block text-gray-300 hover:text-accent text-sm py-2 pl-4"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              }
              return (
                <li key={link.label} className="border-b border-white/5">
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className="block text-white hover:text-accent transition-colors py-4"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}
