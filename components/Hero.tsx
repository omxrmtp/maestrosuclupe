import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle at 50% 30%, #2a0438 0%, #12001a 45%, #000000 100%)" }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 pointer-events-none -z-10 opacity-[0.07]" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <picture className="block w-full relative">
        <Image
          src="/img/hero/desktop.png"
          alt="Maestro Virgilio Suclupe – Amarres de Amor"
          width={3608}
          height={1152}
          className="block w-full h-auto"
          priority
        />
      </picture>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-12 md:pt-16 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="eyebrow">30 años de experiencia</span>
          </Reveal>

          <Reveal delay={80}>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] mb-6 drop-shadow-2xl"
              style={{ color: "var(--accent-color)" }}
            >
              Recupera el amor que creías perdido
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto mb-3">
              Amarres de amor efectivos, discretos y personalizados con el
              <strong className="text-white"> Maestro Suclupe</strong>.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-10">
              Retorno de pareja, alejamiento del rival, limpieza espiritual y rituales que
              unen corazones. Sin importar la distancia ni el tiempo.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                href={`https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent("Hola Maestro Suclupe, deseo más información sobre sus servicios.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-6 py-4 animate-float-y"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Escríbeme por WhatsApp
              </Link>
              <Link href="#servicios" className="btn-ghost text-base px-6 py-4">
                Ver servicios
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <ul className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {[
                "30+ años",
                "Resultados reales",
                "Total discreción",
                "Sin importar la distancia",
              ].map((item) => (
                <li
                  key={item}
                  className="card-mystic px-3 py-3 text-xs sm:text-sm text-gray-200 text-center"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
