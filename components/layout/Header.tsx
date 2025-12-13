"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Starter Kit", href: "/starter-kit" },
  { label: "Resources", href: "/resources" },
  { label: "Cohort", href: "/cohort" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200"
          : "bg-white"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-lg font-heading font-medium text-black tracking-tight uppercase">
                PE Academy
              </span>
              <div className="h-px w-full bg-gray-400 my-1"></div>
              <span className="text-xs font-normal text-gray-600 tracking-wide">
                By Norland Capital
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-sans font-bold text-black hover:text-gray-800 transition-colors uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="default"
              size="default"
              asChild
              className="ml-4 bg-black text-white hover:bg-gray-800 font-bold"
            >
              <Link href="/cohort#apply">APPLY NOW</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-bold text-black hover:text-gray-800 transition-colors uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="default" size="default" asChild className="w-full mt-4 bg-black text-white hover:bg-gray-800 font-bold">
              <Link href="/cohort#apply" onClick={() => setIsMobileMenuOpen(false)}>
                APPLY NOW
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}

