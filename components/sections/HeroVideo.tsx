"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

/**
 * Self-hosted muted loop for the hero media panel.
 * Current asset: investment-committee style boardroom (Pexels, free licence).
 * Pauses to poster when prefers-reduced-motion is set.
 */
type HeroVideoProps = {
  src: string;
  poster: string;
  label: string;
};

export default function HeroVideo({ src, poster, label }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      const preferStill = media.matches;
      setReducedMotion(preferStill);
      const video = videoRef.current;
      if (!video) return;
      if (preferStill) {
        video.pause();
        setPlaying(false);
      } else {
        void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      }
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    if (video.paused) {
      void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="absolute inset-0 bg-gray-100">
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover grayscale-[20%] contrast-[1.04]"
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={label}
        tabIndex={-1}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-black/10" />

      <button
        type="button"
        onClick={togglePlayback}
        disabled={reducedMotion}
        className="absolute bottom-5 left-5 z-20 inline-flex items-center gap-2 border border-white/80 bg-black/75 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur-sm transition hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50"
        aria-label={playing ? "Pause background video" : "Play background video"}
      >
        {playing ? <Pause className="h-3.5 w-3.5" aria-hidden /> : <Play className="h-3.5 w-3.5" aria-hidden />}
        <span aria-hidden>{playing ? "Pause" : "Play"}</span>
      </button>
    </div>
  );
}
