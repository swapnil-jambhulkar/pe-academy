import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starter Kit (Archived)",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function StarterKitLayout({ children }: { children: React.ReactNode }) {
  return children;
}
