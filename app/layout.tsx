import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/scroll-to-top";

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
    default: "Norland Academy | Work on Real PE Deals",
    template: "%s | Norland Academy",
  },
  description:
    "Work on real PE deals from Norland Capital's pipeline. Get partner-level feedback. Build proof you can do the job. No IB required. No Ivy League required.",
  keywords: [
    "private equity career",
    "break into PE",
    "PE without MBA",
    "PE without IB",
    "private equity course",
    "LBO modeling",
    "PE interview prep",
    "investment banking alternative",
    "PE apprenticeship",
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
    title: "Norland Academy | Work on Real PE Deals",
    description:
      "Work on real PE deals from Norland Capital's pipeline. Get partner-level feedback. Build proof you can do the job.",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}

