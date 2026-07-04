import { SITE } from "@/lib/constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://maestrosuclupe.com";

/**
 * Organization + LocalBusiness + WebSite JSON-LD
 * Inyectado en el layout raíz para que cada página herede la entidad.
 */
export function OrganizationJsonLd() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${siteUrl}#organization`,
    name: SITE.name,
    alternateName: "Maestro Virgilio Suclupe",
    description: SITE.description,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/img/identity/logonuevo.jpg`,
      width: 388,
      height: 387,
    },
    image: `${siteUrl}/img/identity/logonuevo.jpg`,
    telephone: SITE.whatsapp,
    email: "contacto@maestrosuclupe.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Abancay 1164",
      addressLocality: "Lima",
      addressRegion: "Cercado de Lima",
      postalCode: "15001",
      addressCountry: "PE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -12.0574916,
      longitude: -77.0309788,
    },
    areaServed: [
      { "@type": "Country", name: "Peru" },
      { "@type": "Country", name: "Spain" },
      { "@type": "Country", name: "United States" },
      { "@type": "AdministrativeArea", name: "Lima" },
      { "@type": "AdministrativeArea", name: "Madrid" },
      { "@type": "AdministrativeArea", name: "Florida" },
    ],
    knowsAbout: [
      "Amarres de amor",
      "Retorno de pareja",
      "Limpieza espiritual",
      "Rituales en cementerio",
      "Neutralización de enemigos",
      "Endulzamientos",
      "Armonización de parejas",
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      `https://wa.me/${SITE.whatsappRaw}`,
    ],
    foundingDate: "1995-01-01",
    founder: {
      "@type": "Person",
      name: "Maestro Virgilio Suclupe",
      jobTitle: "Ritualista Espiritual",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const siteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    name: SITE.name,
    description: SITE.description,
    url: siteUrl,
    inLanguage: ["es-PE", "es-ES", "es-US"],
    publisher: {
      "@id": `${siteUrl}#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }}
    />
  );
}

type ServiceJsonLdProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  benefits?: string[];
};

export function ServiceJsonLd({ slug, title, description, image, benefits }: ServiceJsonLdProps) {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/servicios/${slug}#service`,
    name: title,
    description: description,
    url: `${siteUrl}/servicios/${slug}`,
    image: `${siteUrl}${image}`,
    provider: {
      "@id": `${siteUrl}#organization`,
    },
    areaServed: [
      { "@type": "Country", name: "Peru" },
      { "@type": "Country", name: "Spain" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: "Spiritual Consultation",
    category: "Spiritual & Ritual Services",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "PEN",
      price: "0",
      priceRange: "$$",
      availabilityStarts: "2025-01-01T00:00",
      url: `${siteUrl}/servicios/${slug}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    ...(benefits && benefits.length > 0
      ? { hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Beneficios de ${title}`,
          itemListElement: benefits.map((b) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              description: b,
            },
          })),
        }}
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
    />
  );
}

type FaqJsonLdProps = {
  faqs: { question: string; answer: string }[];
};

export function FaqJsonLd({ faqs }: FaqJsonLdProps) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
    />
  );
}

type BreadcrumbJsonLdProps = {
  items: { name: string; url: string }[];
};

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
