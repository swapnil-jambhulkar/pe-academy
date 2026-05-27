import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post Graduate Programme in PE & Deal Engineering (PGP)",
  description:
    "48-week institutional track in private equity and deal engineering. Full GCPE embedded, plus capital markets, legal engineering, and portfolio value creation.",
  openGraph: {
    title: "PGP | Norland Academy",
    description:
      "The 48-week Post Graduate Programme in Private Equity and Deal Engineering. Institutional training on live Norland Capital transactions.",
  },
};

export default function PgpLayout({ children }: { children: React.ReactNode }) {
  return children;
}
