"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Private Equity";
  const [isAnimating, setIsAnimating] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsAnimating(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
        
        // Update cursor position
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
    }, 120); // Speed of writing each letter

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black pt-20 overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-6 font-sans font-light">
                Norland Academy
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-semibold text-white mb-8 leading-[1.1] tracking-tight relative">
                Break Into{" "}
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
                  {isAnimating && (
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
                      {/* Chalk cursor */}
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
                        {/* Chalk stick */}
                        <div 
                          className="w-4 h-10 bg-white rounded-full shadow-2xl"
                          style={{
                            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
                            boxShadow: '0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3)'
                          }}
                        ></div>
                        {/* Chalk tip */}
                        <div 
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"
                          style={{
                            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
                          }}
                        ></div>
                        {/* Chalk dust particles */}
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
                <span className="text-white font-normal">Without the Traditional Path</span>
              </h1>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/85 mb-12 max-w-2xl mx-auto font-sans font-normal leading-relaxed"
          >
            Professional training programs designed by industry practitioners.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              variant="default"
              size="lg"
              asChild
              className="w-full sm:w-auto text-base bg-white text-black hover:bg-gray-100 font-medium px-8 py-6"
            >
              <Link href="/cohort#apply">
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto text-base border border-white/40 text-white hover:bg-white/10 hover:border-white/50 font-medium px-8 py-6"
            >
              <Link href="/starter-kit">
                View Curriculum
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-12 max-w-xl mx-auto mt-12"
          >
            <div className="text-center">
              <div className="text-xl font-sans font-medium text-white/80">300+</div>
              <div className="text-xs text-white/50 mt-1">Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-sans font-medium text-white/80">20+</div>
              <div className="text-xs text-white/50 mt-1">Mentees</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-sans font-medium text-white/80">42%</div>
              <div className="text-xs text-white/50 mt-1">Response Rate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
