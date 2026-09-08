"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "GCPE", href: "/gcpe" },
  { label: "PGP", href: "/pgp" },
  { label: "Forum", href: "/guild" },
  { label: "Simulator", href: "/simulator" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/pgp") {
      return pathname === "/pgp" || pathname === "/programme" || pathname.startsWith("/pgp/");
    }
    if (href === "/gcpe") {
      return pathname === "/gcpe" || pathname.startsWith("/gcpe/");
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/95 backdrop-blur-sm shadow-md border-b border-white/10"
          : "bg-black border-b border-white/10"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <span className="text-lg font-heading font-medium text-white tracking-tight uppercase group-hover:text-white/90 transition-colors">
                Norland Academy
              </span>
              <div className="h-px w-full bg-white/30 my-1 group-hover:bg-white/50 transition-colors" />
              <span className="text-xs font-normal text-white/70 tracking-wide">
                By Stator Capital
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative text-sm font-sans font-bold uppercase tracking-wide transition-colors py-1",
                  isActive(item.href)
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute left-0 -bottom-0.5 h-px bg-white transition-all duration-300",
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
            <Button
              variant="default"
              size="default"
              asChild
              className="ml-4 bg-white text-black hover:bg-gray-200 font-bold transition-transform hover:-translate-y-0.5"
            >
              <Link href="/apply">Apply</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-1 border-t border-white/10 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block text-sm font-bold uppercase tracking-wide py-2.5 px-1 transition-colors",
                  isActive(item.href) ? "text-white" : "text-white/70 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="default"
              size="default"
              asChild
              className="w-full mt-3 bg-white text-black hover:bg-gray-200 font-bold"
            >
              <Link href="/apply">Apply</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
