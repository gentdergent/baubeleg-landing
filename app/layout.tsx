import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://baubeleg.surfingtigon.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "BauBeleg — Baudokumentation für Subunternehmer",
  description:
    "Nachträge, Behinderungsanzeigen und Stundenlohnzettel in unter einer Minute — entwickelt für VOB/B-Prozesse, direkt auf der Baustelle.",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    title: "BauBeleg — Baudokumentation für Subunternehmer",
    description:
      "Nachträge, Behinderungsanzeigen und Stundenlohnzettel in unter einer Minute — entwickelt für VOB/B-Prozesse.",
    siteName: "BauBeleg",
  },
  twitter: {
    card: "summary_large_image",
    title: "BauBeleg — Baudokumentation für Subunternehmer",
    description:
      "Nachträge, Behinderungsanzeigen und Stundenlohnzettel in unter einer Minute.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const ORG_JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tigon Automation Muratovic & Cungu GbR",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-badge-white.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gartenstraße 50",
    postalCode: "70563",
    addressLocality: "Stuttgart",
    addressCountry: "DE",
  },
  email: "kontakt@tigonautomation.de",
});

const APP_JSONLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BauBeleg",
  description:
    "Baudokumentation für Subunternehmer: Nachträge, Behinderungsanzeigen, Stundenlohnzettel — entwickelt für VOB/B-Prozesse.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://app.baubeleg.de",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Kostenlose Beta-Phase",
  },
  publisher: {
    "@type": "Organization",
    name: "Tigon Automation Muratovic & Cungu GbR",
  },
});

// JSON-LD source is fully static and serialized via JSON.stringify — XSS-safe by construction.
// dangerouslySetInnerHTML is the canonical Next.js pattern for type="application/ld+json".
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ORG_JSONLD }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: APP_JSONLD }}
        />
        {children}
      </body>
    </html>
  );
}
