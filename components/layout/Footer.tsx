import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

const linkGroups = [
  {
    title: "Programmes",
    links: [
      { label: "GCPE", href: "/cohort" },
      { label: "PGP", href: "/pgp" },
      { label: "Day One Simulator", href: "/simulator" },
      { label: "PE Forum", href: "/guild" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "LBO Library", href: "/insights/lbo" },
      { label: "Deal Glossary", href: "/glossary/private-equity-deal-mechanics" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms-of-service" },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/norland-capital-ltd",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:admissions@norlandacademy.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div>
              <h3 className="text-lg font-heading font-medium text-white uppercase tracking-tight">
                Norland Academy
              </h3>
              <p className="mt-1 text-xs text-white/50 tracking-wide">
                By Stator Capital
              </p>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Live deal training for private equity careers.
            </p>
            <div className="flex items-center gap-4 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="text-white/50 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Stator Capital
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:admissions@norlandacademy.com"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              admissions@norlandacademy.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
