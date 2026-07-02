import type { Metadata, Viewport } from "next";
import { Cinzel, Lato } from "next/font/google";
import { SITE } from "@/lib/constants";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://maestrosuclupe.com";

export const viewport: Viewport = {
  themeColor: "#0f000d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "amarres de amor",
    "maestro suclupe",
    "virgilio suclupe",
    "rituales de amor",
    "retorno de pareja",
    "limpieza espiritual",
    "amarres efectivos",
    "peru",
    "amarres de amor en lima",
    "retorno de pareja lima",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { telephone: true, address: true, email: true },
  other: {
    // === Geo meta tags (IETF geo meta) ===
    "geo.region": "PE-LIM",
    "geo.placename": "Lima, Peru",
    "geo.position": "-12.0574916;-77.0309788",
    ICBM: "-12.0574916, -77.0309788",
    // === Distribution & geo content signals ===
    distribution: "global",
    "content-language": "es-PE",
    rating: "general",
    "revisit-after": "7 days",
    // === AI usage signals (IETF Content Signals draft) ===
    "content-signal": "ai-train=yes, search=yes, ai-retrieval=yes",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    url: siteUrl,
    countryName: "Peru",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Spiritual Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-PE"
      className={`${cinzel.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-link">
          Saltar al contenido principal
        </a>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        {children}
      </body>
    </html>
  );
}
