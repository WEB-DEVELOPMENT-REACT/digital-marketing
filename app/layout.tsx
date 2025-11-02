import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://birdmarketing.es";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bird | Marketing, Automatización e IA",
    template: "%s | Bird",
  },
  description:
    "Bird diseña y ejecuta estrategias de marketing, automatización e inteligencia artificial para escalar marcas digitales con sprints medibles.",
  keywords: [
    "marketing digital",
    "automatización",
    "inteligencia artificial",
    "growth marketing",
    "valencia",
    "paid media",
    "crm",
    "bird",
  ],
  authors: [{ name: "Bird" }],
  creator: "Bird",
  publisher: "Bird",
  category: "Marketing",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    title: "Bird | Marketing, Automatización e IA",
    description:
      "Sprints de marketing, automatización e IA para acelerar adquisición, contenidos y reporting sin fricción.",
    siteName: "Bird",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Bird logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bird | Marketing, Automatización e IA",
    description:
      "Automatizamos, creamos y mejoramos tu operación de marketing con inteligencia artificial.",
    images: [
      {
        url: "/favicon.png",
        alt: "Bird logo",
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
