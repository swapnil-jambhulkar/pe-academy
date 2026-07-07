import type { Metadata } from "next";

const title = "The Private Equity Forum | Free PE community by Norland Academy";
const description =
  "A free private equity forum and community. Real deal teardowns, practitioner speakers, member-run chapters in Mumbai and London. Application required, membership free.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/guild" },
  openGraph: {
    title,
    description,
    url: "https://norlandacademy.com/guild",
    type: "website",
    siteName: "Norland Academy",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "The Private Equity Forum by Norland Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GuildLayout({ children }: { children: React.ReactNode }) {
  return children;
}
