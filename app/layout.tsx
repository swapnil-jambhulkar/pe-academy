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
    default: "Norland Academy | PGP · The Principal Programme",
    template: "%s | Norland Academy",
  },
  description:
    "PGP · The Principal Programme: twelve weeks, five seats, by application. Source your own acquisition target and defend it to an investment committee. Free Day One Simulator.",
  keywords: [
    "PGP private equity",
    "principal programme private equity",
    "private equity training",
    "LBO modelling course",
    "day one analyst PE",
    "private equity simulator",
    "mid career private equity",
    "Norland Academy",
    "deal training",
    "investment committee",
  ],
  authors: [{ name: "Norland Academy", url: "https://norlandacademy.com" }],
  creator: "Norland Academy",
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
    title: "Norland Academy | PGP · The Principal Programme",
    description:
      "Twelve weeks. Five seats. Source your own acquisition target, price it, structure it, and defend the recommendation to an investment committee that votes.",
    type: "website",
    url: "https://norlandacademy.com",
    siteName: "Norland Academy",
    locale: "en_GB",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Norland Academy - PGP · The Principal Programme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Norland Academy | PGP · The Principal Programme",
    description:
      "You have executed deals and never owned one. Twelve week cohort for mid career deal professionals.",
    images: ["/og-image.svg"],
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

