"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "PE Deals";
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile
    setIsMobile(window.innerWidth < 768);
    
    // Skip animation on mobile
    if (window.innerWidth < 768) {
      setDisplayedText(fullText);
      return;
    }

    setIsAnimating(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
        
        setTimeout(() => {
          if (textRef.current && cursorRef.current) {
            const textRect = textRef.current.getBoundingClientRect();
            const containerRect = textRef.current.parentElement?.getBoundingClientRect();
            if (containerRect) {
              const relativeX = textRect.right - containerRect.left;
              const relativeY = textRect.top - containerRect.top + textRect.height / 2;
              cursorRef.current.style.left = `${relativeX}px`;
              cursorRef.current.style.top = `${relativeY}px`;
            }
          }
        }, 10);
      } else {
        clearInterval(interval);
        setTimeout(() => setIsAnimating(false), 300);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center bg-black pt-16 md:pt-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/[0.02] to-transparent rounded-full blur-2xl"
        />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Floating Particles - Desktop only */}
      <div className="hidden md:block absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              y: [0, -30, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Mobile: Clean & Attractive */}
          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs uppercase tracking-wider text-white/80">Real Deals. Real Access.</span>
              </motion.div>

              <h1 className="text-3xl font-heading font-bold text-white mb-3 leading-tight">
                Work on Real Deals.
              </h1>
              <h1 className="text-3xl font-heading font-bold text-white mb-4 leading-tight">
                <span className="relative">
                  Get Real Feedback.
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-white/60 to-white/20 rounded-full"
                  />
                </span>
              </h1>
              <p className="text-base text-white/70 mb-2">
                No IB background? No Ivy League?
              </p>
              <p className="text-sm text-white/50 mb-8">
                Access live PE deals from our pipeline. Get partner-level feedback.
              </p>

              {/* Value Props */}
              <div className="grid grid-cols-2 gap-3 mb-8 text-left">
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="text-lg font-bold text-white">Real Deals</div>
                  <div className="text-xs text-white/50">From Norland Pipeline</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="text-lg font-bold text-white">Partner Access</div>
                  <div className="text-xs text-white/50">Direct Feedback</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button
                  variant="default"
                  size="lg"
                  asChild
                  className="w-full bg-white text-black hover:bg-gray-100 font-bold py-5 text-base shadow-xl shadow-white/10"
                >
                  <Link href="/cohort">
                    Apply for Access
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full border-white/30 text-white hover:bg-white/10 font-medium py-5 text-base"
                >
                  <Link href="/starter-kit">
                    Start with Starter Kit
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Desktop: Full Animation */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-6 font-sans font-light">
                  Norland Academy — Real Deal Access
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold text-white mb-8 leading-[1.1] tracking-tight relative">
                  Work on Real{" "}
                  <span className="chalk-text relative inline-block" ref={textRef}>
                    {displayedText.split('').map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, y: 5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="inline-block"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </span>
                  <AnimatePresence>
                    {isAnimating && !isMobile && (
                      <motion.div
                        ref={cursorRef}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute pointer-events-none transition-all duration-100 ease-linear"
                        style={{
                          transform: 'translate(-50%, -50%)',
                          zIndex: 10,
                        }}
                      >
                        <motion.div
                          animate={{
                            y: [0, -3, 0],
                            rotate: [0, 8, -8, 0],
                          }}
                          transition={{
                            duration: 0.4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="relative"
                        >
                          <div 
                            className="w-4 h-10 bg-white rounded-full shadow-2xl"
                            style={{
                              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
                              boxShadow: '0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3)'
                            }}
                          ></div>
                          <div 
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"
                            style={{
                              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
                            }}
                          ></div>
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{
                                x: [0, Math.random() * 20 - 10],
                                y: [0, Math.random() * 15 - 5],
                                scale: [0, 1, 0],
                                opacity: [0, 0.6, 0],
                              }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: i * 0.2
                              }}
                              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"
                            ></motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <br />
                  <span className="text-white font-normal">Get Real Feedback</span>
                </h1>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl mx-auto font-sans font-normal leading-relaxed"
            >
              No IB background? No Ivy League? No problem.<br />
              <span className="text-white/60">Work on live deals from our pipeline. Get feedback from a PE partner.</span>
            </motion.p>

            {/* Value Props - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center gap-6 mb-10"
            >
              <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-3">
                <span className="text-white font-semibold">Real Deals</span>
                <span className="text-white/50 ml-2">from Norland Pipeline</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-3">
                <span className="text-white font-semibold">Partner Access</span>
                <span className="text-white/50 ml-2">Direct Feedback</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg px-6 py-3">
                <span className="text-white font-semibold">IC Decisions</span>
                <span className="text-white/50 ml-2">Behind the Scenes</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-row gap-4 justify-center items-center mb-12"
            >
              <Button
                variant="default"
                size="lg"
                asChild
                className="text-base bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6"
              >
                <Link href="/cohort">
                  Apply for Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-base border border-white/40 text-white hover:bg-white/10 hover:border-white/50 font-medium px-8 py-6"
              >
                <Link href="/starter-kit">
                  Start with Starter Kit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Social Proof - Desktop only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-8 max-w-2xl mx-auto pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-white">300+</div>
                <div className="text-xs text-white/50 mt-1">Community Members</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-white">Real</div>
                <div className="text-xs text-white/50 mt-1">Deal Experience</div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-white">Partner</div>
                <div className="text-xs text-white/50 mt-1">Level Mentorship</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
