import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://maestrosuclupe.com";

const languages = {
  "es-PE": siteUrl,
  "es-ES": siteUrl,
  "es-US": siteUrl,
  "x-default": siteUrl,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${siteUrl}/servicios`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "es-PE": `${siteUrl}/servicios`,
          "es-ES": `${siteUrl}/servicios`,
          "es-US": `${siteUrl}/servicios`,
          "x-default": `${siteUrl}/servicios`,
        },
      },
    },
    ...SERVICES.map((s) => {
      const pageUrl = `${siteUrl}/servicios/${s.slug}`;
      return {
        url: pageUrl,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: {
          languages: {
            "es-PE": pageUrl,
            "es-ES": pageUrl,
            "es-US": pageUrl,
            "x-default": pageUrl,
          },
        },
      };
    }),
  ];
}
