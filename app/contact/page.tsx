import type { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Norland Academy for admissions, programme, and partnership enquiries. Email admissions@norlandacademy.com.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Norland Academy",
    description: "Admissions, programme, and partnership enquiries for Norland Academy.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
