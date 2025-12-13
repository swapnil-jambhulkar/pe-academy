import Link from "next/link";
import { Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = {
  main: [
    { label: "Home", href: "/" },
    { label: "Starter Kit", href: "/starter-kit" },
    { label: "Cohort", href: "/cohort" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/norland-capital-ltd",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/norlandcapital",
    label: "Twitter",
  },
  {
    icon: Mail,
    href: "mailto:contact@norlandcapital.co.uk",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200 mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Logo & Tagline */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-heading font-medium text-black uppercase tracking-tight">PE Academy</h3>
              <div className="h-px w-full bg-gray-400 my-1"></div>
              <p className="text-xs font-normal text-gray-600 tracking-wide">By Norland Capital</p>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Break into Private Equity without the traditional path. Build proof. Get noticed. Land interviews.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h4 className="font-bold text-black mb-4 text-base uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Social & Contact */}
          <div>
            <h4 className="font-bold text-black mb-4 text-base uppercase tracking-wide">Contact</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm font-medium text-gray-700">
              <a
                href="mailto:contact@norlandcapital.co.uk"
                className="hover:text-black transition-colors"
              >
                contact@norlandcapital.co.uk
              </a>
            </p>
            <p className="text-sm font-medium text-gray-700 mt-2">
              <a
                href="https://norlandcapital.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
              >
                norlandcapital.co.uk
              </a>
            </p>
          </div>
        </div>

        {/* Bottom: Copyright & Legal */}
        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm font-medium text-black">
            © {new Date().getFullYear()} Norland Capital. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-black hover:text-gray-700 transition-colors underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

