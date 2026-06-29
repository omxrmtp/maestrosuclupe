import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWidget } from "@/components/FloatingWidget";
import { PromoPopup } from "@/components/PromoPopup";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES, SITE } from "@/lib/constants";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
    openGraph: {
      title: `${service.title} | ${SITE.name}`,
      description: service.metaDescription,
      type: "article",
      locale: "es_PE",
      images: [{ url: service.image, alt: service.title }],
    },
  };
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== slug);
  const whatsappLink = `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(
    `Hola Maestro Suclupe, deseo más información sobre el servicio de ${service.title}.`,
  )}`;

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

          <div className="container mx-auto px-4 md:px-6 relative z-10 pt-8 pb-12 md:pb-16">
            <Reveal>
              <nav aria-label="Breadcrumb" className="text-sm text-muted mb-6 flex items-center gap-2 flex-wrap">
                <Link href="/" className="hover:text-accent transition-colors">
                  Inicio
                </Link>
                <span aria-hidden="true">/</span>
                <Link href="/servicios" className="hover:text-accent transition-colors">
                  Servicios
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-white">{service.title}</span>
              </nav>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <Reveal>
                <div>
                  <span className="eyebrow">Servicio especializado</span>
                  <h1
                    className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-[1.05] mb-4 drop-shadow-2xl"
                    style={{ color: "var(--accent-color)" }}
                  >
                    {service.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                    {service.heroSubtitle}
                  </p>
                  <p className="text-base text-muted leading-relaxed mb-8">{service.shortDesc}</p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-base px-6 py-4"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      Consultar ahora
                    </a>
                    <Link href="/servicios" className="btn-ghost text-base px-6 py-4">
                      Ver todos los servicios
                    </Link>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="relative aspect-[5/6] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{ background: "radial-gradient(circle at 50% 50%, #1a0129 0%, #000000 100%)" }}
            aria-hidden="true"
          />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
            <Reveal>
              <h2
                className="text-3xl md:text-4xl font-heading font-bold text-center mb-3"
                style={{ color: "var(--accent-color)" }}
              >
                ¿En qué consiste este trabajo?
              </h2>
              <div className="section-divider" />
            </Reveal>
            <Reveal delay={100}>
              <div className="rich-text text-gray-200 text-base md:text-lg leading-relaxed space-y-5 mt-8">
                {service.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-20 relative overflow-hidden bg-black/10">
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
            <Reveal>
              <h2
                className="text-3xl md:text-4xl font-heading font-bold text-center mb-3"
                style={{ color: "var(--accent-color)" }}
              >
                Beneficios
              </h2>
              <div className="section-divider" />
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="card-mystic p-5 flex items-start gap-3"
                  >
                    <span
                      className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: "var(--accent-color)" }}
                      aria-hidden="true"
                    >
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-200 text-base leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{ background: "radial-gradient(circle at 50% 50%, #1a0129 0%, #000000 100%)" }}
            aria-hidden="true"
          />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
            <Reveal>
              <h2
                className="text-3xl md:text-4xl font-heading font-bold text-center mb-3"
                style={{ color: "var(--accent-color)" }}
              >
                ¿Cómo es el proceso?
              </h2>
              <div className="section-divider" />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-10 space-y-4">
                {service.process.map((step, i) => (
                  <div
                    key={i}
                    className="card-mystic p-6 flex items-start gap-5"
                  >
                    <span
                      className="shrink-0 w-12 h-12 rounded-full font-heading font-bold text-xl flex items-center justify-center"
                      style={{ backgroundColor: "var(--accent-color)", color: "#000" }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-base leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 text-center">
                <p className="text-muted mb-2">Tiempo estimado de resultados</p>
                <p
                  className="text-2xl font-heading font-bold"
                  style={{ color: "var(--accent-color)" }}
                >
                  {service.duration}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
            <Reveal>
              <h2
                className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-tight"
                style={{ color: "var(--accent-color)" }}
              >
                ¿Listo para empezar tu trabajo espiritual?
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
                Escríbeme por WhatsApp de forma confidencial. Te respondo personalmente y resolvemos todas tus dudas.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4 animate-float-y"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Consultar por {service.title}
              </a>
            </Reveal>
          </div>
        </section>

        <section className="py-16 md:py-20 relative overflow-hidden bg-black/10">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <Reveal>
              <h2
                className="text-3xl md:text-4xl font-heading font-bold text-center mb-3"
                style={{ color: "var(--accent-color)" }}
              >
                Otros servicios
              </h2>
              <div className="section-divider" />
            </Reveal>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {otherServices.map((s, i) => (
                <Reveal key={s.slug} delay={i * 60}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="group block card-mystic overflow-hidden focus-visible:ring-0"
                  >
                    <div className="relative aspect-[5/6] overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-heading font-bold text-white">{s.title}</h3>
                      <p className="text-sm text-muted mt-1 line-clamp-2">{s.shortDesc}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWidget />
      <PromoPopup />
    </>
  );
}
