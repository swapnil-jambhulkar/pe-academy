"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const toggleVisibility = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const pct = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
        setIsVisible(pct > 35);
        ticking = false;
      });
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-8 left-4 sm:left-8 z-50 hidden lg:block transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      )}
    >
      <div className="bg-white border-2 border-black shadow-[6px_6px_0_0_#000] p-4 max-w-xs">
        <p className="text-sm font-semibold text-black mb-1">Ready to own a deal?</p>
        <p className="text-xs text-gray-600 mb-3">PGP · Five seats per cohort. By application.</p>
        <Button
          variant="default"
          size="sm"
          asChild
          className="w-full bg-black text-white hover:bg-gray-800 font-semibold"
        >
          <Link href="/apply">
            Apply
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
