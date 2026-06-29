import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="sobre-mi" className="py-16 md:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle at 50% 30%, #1a0129 0%, #000000 100%)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="eyebrow">Sobre mí</span>
            <h2
              className="text-3xl md:text-5xl font-heading font-bold mb-3 drop-shadow-md"
              style={{ color: "var(--accent-color)" }}
            >
              Experto en amarres de amor con 30 años de experiencia
            </h2>
            <div className="section-divider" />
          </Reveal>

          <Reveal delay={120}>
            <div className="rich-text text-gray-200 text-base md:text-lg leading-relaxed space-y-5 text-left max-w-3xl mx-auto mt-8">
              <p>
                El Maestro Suclupe es un ritualista reconocido por su gran trayectoria y resultados
                efectivos en amarres de amor.
              </p>
              <p>
                He ayudado a hombres y mujeres a recuperar el amor, fortalecer sus relaciones y
                eliminar cualquier interferencia negativa que afecte su felicidad sentimental. Mi
                conocimiento se basa en prácticas espirituales serias, respetadas y realizadas con
                total discreción.
              </p>
              <p>
                Si la persona que amas se ha alejado, sientes que ya no te presta atención o existe
                la influencia de terceros, puedo ayudarte a restaurar el vínculo emocional y
                espiritual. Cada trabajo es personalizado, enfocado en tu situación específica,
                para lograr resultados reales y duraderos.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-accent/10 border border-accent/30">
              <svg className="w-5 h-5" style={{ color: "var(--accent-color)" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              <span className="text-white font-semibold text-sm tracking-wide">
                Resultados reales, rápidos y seguros
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
