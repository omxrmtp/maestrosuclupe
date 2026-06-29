import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section id="testimonios" className="py-16 md:py-24 relative overflow-hidden bg-black/10">
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(26,1,41,1) 0%, rgba(0,0,0,0.4) 100%)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Reveal>
          <SectionHeader
            title="Lo que dicen mis clientes"
            subtitle="Historias reales de personas que recuperaron su amor, su tranquilidad y su felicidad."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <article
                className="card-mystic p-6 md:p-8 h-full flex flex-col"
              >
                <header className="flex items-center gap-4 mb-5">
                  <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full overflow-hidden ring-2 ring-white/10">
                    <Image src={t.image} alt={t.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className="text-base md:text-lg font-heading font-bold leading-tight truncate"
                      style={{ color: "var(--accent-color)" }}
                    >
                      {t.name}
                    </h3>
                    <p className="text-xs text-muted">{t.city}</p>
                    <div className="text-yellow-400 text-sm mt-0.5" aria-label="5 estrellas">
                      ★★★★★
                    </div>
                  </div>
                </header>

                <blockquote
                  className="relative italic text-gray-200 text-sm md:text-[0.95rem] leading-relaxed pl-5 flex-1"
                >
                  <span
                    className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                    style={{ backgroundColor: "var(--accent-color)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="absolute -top-1 -left-0.5 text-3xl font-heading leading-none opacity-50 select-none"
                    style={{ color: "var(--accent-color)" }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  {t.quote}
                </blockquote>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
