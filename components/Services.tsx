import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle at 50% 50%, #1a0129 0%, #000000 100%)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal>
          <SectionHeader
            title="Mis Servicios"
            subtitle="Trabajos personalizados según tu situación. Cada ritual es único, discreto y enfocado en resultados reales."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-[1400px] mx-auto">
          {SERVICES.slice(0, 4).map((service, i) => (
            <Reveal key={service.slug} delay={i * 80}>
              <Link
                href={`/servicios/${service.slug}`}
                aria-label={`Ver detalles de ${service.title}`}
                className="group relative aspect-[5/6] overflow-hidden rounded-2xl bg-black border border-white/10 block focus-visible:ring-0"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.04)" }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110 group-active:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                  <div className="w-full">
                    <span
                      className="inline-block text-[0.65rem] sm:text-xs font-heading tracking-[0.25em] uppercase mb-1.5"
                      style={{ color: "var(--accent-color)" }}
                    >
                      Servicio
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-heading text-white font-bold leading-tight">
                      {service.title}
                    </h3>
                    <span
                      className="inline-flex items-center gap-1 mt-2 text-xs sm:text-sm text-white/80 group-hover:text-white transition-colors"
                    >
                      Ver detalles
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="text-center mt-10">
            <Link href="/servicios" className="btn-ghost text-base px-6 py-3 inline-flex">
              Ver todos los servicios
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
