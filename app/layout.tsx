import React from "react"
import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default:
      "Mensskydd for arbetsplatsen & hemmet | Ekologiska mensskydd | Menssäkrad",
    template: "%s | Menssäkrad",
  },
  description:
    "Sveriges ledande leverantör av ekologiska mensskydd. Prenumeration för privatpersoner och kompletta lösningar för skolor och arbetsplatser. Hållbart, bekvämt och alltid nära till hands.",
  keywords: [
    "mensskydd",
    "ekologiska mensskydd",
    "tamponger",
    "bindor",
    "trosskydd",
    "prenumeration mensskydd",
    "mensskydd arbetsplats",
    "mensskydd skola",
    "hållbara mensskydd",
    "ekologisk bomull",
  ],
  authors: [{ name: "Menssäkrad" }],
  creator: "Menssäkrad",
  publisher: "Menssäkrad",
  metadataBase: new URL("https://www.menssakrad.se"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Menssäkrad | Ekologiska mensskydd för alla",
    description:
      "Sveriges bredaste sortiment av ekologiska mensskydd. Prenumeration och B2B-lösningar för arbetsplatser och skolor.",
    url: "https://www.menssakrad.se",
    siteName: "Menssäkrad",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menssäkrad | Ekologiska mensskydd för alla",
    description:
      "Sveriges bredaste sortiment av ekologiska mensskydd. Prenumeration och B2B-lösningar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
};

export const viewport: Viewport = {
  themeColor: "#c24b78",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg focus:outline-none"
        >
          Hoppa till huvudinnehall
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
