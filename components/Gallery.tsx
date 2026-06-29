"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/Lightbox";

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-16 md:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle at 50% 50%, #1a0129 0%, #000000 100%)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal>
          <SectionHeader
            title="Mis trabajos no fallan"
            subtitle="Cada ritual es único, serio y enfocado en resultados reales. Mira algunos de mis trabajos."
          />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 w-full max-w-[1400px] mx-auto">
          {GALLERY.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                aria-label={`Ver ${item.title}`}
                className="group relative aspect-square w-full overflow-hidden rounded-2xl bg-black/50 border border-white/10 cursor-pointer"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.04)" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex items-end justify-between gap-2">
                  <span className="text-xs sm:text-sm md:text-base font-heading text-white leading-tight">
                    {item.title}
                  </span>
                  <span
                    className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-accent flex items-center justify-center transition-all"
                    aria-hidden="true"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        items={GALLERY}
        open={lightboxIndex !== null}
        startIndex={lightboxIndex ?? 0}
        onClose={() => setLightboxIndex(null)}
      />
    </section>
  );
}
