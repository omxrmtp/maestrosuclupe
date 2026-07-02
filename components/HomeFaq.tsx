import { FaqJsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/ui/Reveal";

const HOME_FAQS = [
  {
    question: "¿Quién es el Maestro Suclupe?",
    answer:
      "El Maestro Virgilio Suclupe es un ritualista espiritual con más de 30 años de experiencia especializado en amarres de amor, retorno de pareja, limpieza espiritual, destrucción de maleficios y rituales en el cementerio. Atiende en Av. Abancay 1164, Cercado de Lima, Perú, y también realiza trabajos a distancia.",
  },
  {
    question: "¿Qué servicios ofrece el Maestro Suclupe?",
    answer:
      "Ofrece 5 servicios especializados: (1) Amarres de amor, rituales para unir o reconciliar a parejas distanciadas; (2) Retorno de pareja, para hacer que la persona amada vuelva con amor; (3) Basta de sufrir, para liberarte del dolor emocional y cortar lazos tóxicos; (4) Destruyo al enemigo, justicia espiritual para neutralizar rivales y romper maleficios; (5) Rituales en el cementerio, trabajos de máxima potencia reservados para casos extremos.",
  },
  {
    question: "¿Cuánto tarda en hacer efecto un amarre de amor?",
    answer:
      "Los primeros resultados de un amarre de amor del Maestro Suclupe suelen manifestarse entre 24 horas y 21 días, dependiendo de la complejidad del caso. Casos sencillos muestran señales en 1-3 días; casos con terceros o maleficios pueden requerir 1-3 semanas. Cada trabajo incluye seguimiento posterior para verificar resultados.",
  },
  {
    question: "¿Los trabajos del Maestro Suclupe funcionan a distancia?",
    answer:
      "Sí, la mayoría de trabajos espirituales del Maestro Suclupe funcionan a distancia sin importar la separación geográfica. La energía espiritual no tiene limitaciones físicas. Personas en otros países y ciudades han recuperado a sus parejas, eliminado bloqueos emocionales y resuelto situaciones de terceros con los trabajos a distancia del Maestro.",
  },
  {
    question: "¿Cómo puedo consultar al Maestro Suclupe?",
    answer:
      "Puedes consultar al Maestro Suclupe de tres formas: (1) WhatsApp al +51 922 159 268 con respuesta inmediata; (2) Llamada directa al mismo número; (3) Formulario de contacto en el sitio web en la sección Contacto. Todas las consultas son 100% confidenciales y sin compromiso.",
  },
  {
    question: "¿Cuánto cuesta un trabajo espiritual con el Maestro Suclupe?",
    answer:
      "La consulta inicial con el Maestro Suclupe es gratuita y sin compromiso. El costo del trabajo espiritual varía según el tipo de servicio y la complejidad del caso. Los precios se confirman por WhatsApp después de una evaluación personalizada de tu situación. Se aceptan múltiples métodos de pago.",
  },
];

export function HomeFaq() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <FaqJsonLd faqs={HOME_FAQS} />
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(26,1,41,1) 0%, rgba(0,0,0,0.6) 100%)" }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl">
        <Reveal>
          <h2
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-3"
            style={{ color: "var(--accent-color)" }}
          >
            Preguntas frecuentes
          </h2>
          <div className="section-divider" />
          <p className="text-center text-muted mb-10 max-w-xl mx-auto">
            Respuestas a las consultas más comunes sobre los trabajos espirituales del Maestro Suclupe.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-3">
            {HOME_FAQS.map((f, i) => (
              <details
                key={i}
                className="card-mystic p-5 group cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-4 font-heading font-semibold text-white text-base list-none">
                  <span>{f.question}</span>
                  <svg
                    className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180"
                    style={{ color: "var(--accent-color)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
