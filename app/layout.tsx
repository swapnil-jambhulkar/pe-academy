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
  title: "Break Into PE Without MBA | Norland Academy",
  description:
    "Join 300+ aspiring PE professionals. Build proof with our Starter Kit (₹2,999) or 6-week live Cohort (₹25K). Learn from founder who did it.",
  keywords:
    "private equity career, break into PE, PE without MBA, PE course India, investment banking alternative, LBO model training",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Break Into PE Without MBA | Norland Academy",
    description:
      "Join 300+ aspiring PE professionals. Build proof with our Starter Kit (₹2,999) or 6-week live Cohort (₹25K).",
    type: "website",
  },
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

