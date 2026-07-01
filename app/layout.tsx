import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";

// Using Inter for all text - clean, professional, matches corporate PE firm aesthetic
// Optimized: Only loading weights we actually use (400, 500, 600, 700)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://norlandacademy.com"),
  title: {
    default: "Norland Academy | GCPE, PGP & Day One PE Training",
    template: "%s | Norland Academy",
  },
  description:
    "Graduate Certificate in Private Equity (GCPE), 48-week PGP, and the Day One Analyst Simulator. Live deal execution from the Norland Capital pipeline.",
  keywords: [
    "graduate certificate private equity",
    "GCPE private equity",
    "PGP private equity programme",
    "private equity training",
    "LBO modeling course",
    "day one analyst PE",
    "private equity simulator",
    "break into private equity",
    "Norland Academy",
    "real deal experience",
  ],
  authors: [{ name: "Norland Academy", url: "https://norlandacademy.com" }],
  creator: "Norland Capital",
  publisher: "Norland Academy",
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
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Norland Academy | GCPE, PGP & Day One PE Training",
    description:
      "GCPE technical sprint, 48-week PGP institutional track, and free Day One Analyst Simulator. Training on live Norland Capital transactions.",
    type: "website",
    url: "https://norlandacademy.com",
    siteName: "Norland Academy",
    locale: "en_US",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Norland Academy - Work on Real PE Deals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Norland Academy | Work on Real PE Deals",
    description:
      "Work on real PE deals from Norland Capital's pipeline. Get partner-level feedback. No IB required.",
    images: ["/og-image.svg"],
    creator: "@norlandcapital",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="flex flex-col min-h-screen">
        <SiteChrome>{children}</SiteChrome>
        <Analytics />
      </body>
    </html>
  );
}

