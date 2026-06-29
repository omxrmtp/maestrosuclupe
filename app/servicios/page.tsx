import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWidget } from "@/components/FloatingWidget";
import { PromoPopup } from "@/components/PromoPopup";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Todos los servicios espirituales del Maestro Suclupe: amarres de amor, retorno de pareja, basta de sufrir, destruyo al enemigo y rituales en el cementerio. Más de 30 años de experiencia.",
  openGraph: {
    title: `Servicios | ${SITE.name}`,
    description:
      "Servicios espirituales especializados del Maestro Suclupe. Amarre de amor, retorno de pareja, limpieza espiritual y más.",
    type: "website",
    locale: "es_PE",
  },
};

export default function ServicesIndexPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <section
          className="relative pt-[100px] overflow-hidden"
          style={{ backgroundColor: "var(--bg-color)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{ background: "radial-gradient(circle at 50% 30%, #2a0438 0%, #12001a 45%, #000000 100%)" }}
            aria-hidden="true"
          />
          <div className="container mx-auto px-4 md:px-6 relative z-10 pt-8 pb-12 md:pb-16 text-center">
            <Reveal>
              <nav aria-label="Breadcrumb" className="text-sm text-muted mb-6 flex items-center justify-center gap-2 flex-wrap">
                <Link href="/" className="hover:text-accent transition-colors">
                  Inicio
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-white">Servicios</span>
              </nav>
            </Reveal>
            <Reveal delay={80}>
              <span className="eyebrow">Servicios especializados</span>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-[1.05] mb-4 drop-shadow-2xl"
                style={{ color: "var(--accent-color)" }}
              >
                Trabajos espirituales personalizados
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                Cada servicio es único, serio y enfocado en darte resultados reales. Selecciona el que mejor se adapte a tu situación.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-12 md:py-16 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{ background: "radial-gradient(circle at 50% 50%, #1a0129 0%, #000000 100%)" }}
            aria-hidden="true"
          />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
              {SERVICES.map((service, i) => (
                <Reveal key={service.slug} delay={i * 60}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="group block card-mystic overflow-hidden h-full focus-visible:ring-0"
                  >
                    <div className="relative aspect-[5/6] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className="inline-block text-[0.65rem] sm:text-xs font-heading tracking-[0.25em] uppercase px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10"
                          style={{ color: "var(--accent-color)" }}
                        >
                          Servicio
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h2 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
                        {service.title}
                      </h2>
                      <p className="text-sm text-muted leading-relaxed line-clamp-3">
                        {service.shortDesc}
                      </p>
                      <span
                        className="inline-flex items-center gap-1 mt-4 text-sm font-semibold"
                        style={{ color: "var(--accent-color)" }}
                      >
                        Ver detalles
                        <svg
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
            <Reveal>
              <h2
                className="text-3xl md:text-5xl font-heading font-bold mb-4"
                style={{ color: "var(--accent-color)" }}
              >
                ¿No encuentras lo que buscas?
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                Escríbeme por WhatsApp y cuéntame tu situación. Con 30+ años de experiencia puedo ayudarte con cualquier problema amoroso.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4 animate-float-y"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Consultar ahora
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWidget />
      <PromoPopup />
    </>
  );
}
