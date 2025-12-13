"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show after scrolling 50% of page
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 left-8 z-50 hidden lg:block"
        >
          <div className="bg-white border-2 border-black shadow-2xl rounded-lg p-4 max-w-xs">
            <p className="text-sm font-semibold text-black mb-2">
              Ready to break into PE?
            </p>
            <p className="text-xs text-gray-600 mb-3">
              Join 300+ professionals building their PE careers
            </p>
            <Button
              variant="default"
              size="sm"
              asChild
              className="w-full bg-black text-white hover:bg-gray-800 font-semibold"
            >
              <Link href="/cohort#apply">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

