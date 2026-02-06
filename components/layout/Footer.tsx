import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

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
    icon: Mail,
    href: "mailto:admissions@norlandacademy.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200 mt-0">
      {/* Mobile Footer - Compact */}
      <div className="md:hidden px-4 py-6">
        {/* Logo + Social Row */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-base font-heading font-medium text-black uppercase tracking-tight">Norland Academy</h3>
            <p className="text-[10px] text-gray-500">Real Deals. Real Feedback.</p>
          </div>
          <div className="flex space-x-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Links Row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs">
          {footerLinks.main.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 text-[10px] text-gray-500">
          <span>© {new Date().getFullYear()} Norland Capital</span>
          <div className="flex gap-3">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-black">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Footer - Full */}
      <div className="hidden md:block container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Logo & Tagline */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-heading font-medium text-black uppercase tracking-tight">Norland Academy</h3>
              <div className="h-px w-full bg-gray-400 my-1"></div>
              <p className="text-xs font-normal text-gray-600 tracking-wide">By Norland Capital</p>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Work on real deals from our pipeline. Get partner-level feedback. Build a portfolio that gets you interviews.
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
                href="mailto:admissions@norlandacademy.com"
                className="hover:text-black transition-colors"
              >
                admissions@norlandacademy.com
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

