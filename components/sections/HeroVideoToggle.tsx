"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";

type HeroVideoToggleProps = {
  videoId: string;
};

export default function HeroVideoToggle({ videoId }: HeroVideoToggleProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const video = document.getElementById(videoId);
    if (!(video instanceof HTMLVideoElement)) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => {
      const preferStill = media.matches;
      setReducedMotion(preferStill);
      if (preferStill) {
        video.pause();
        setPlaying(false);
      } else if (video.paused) {
        void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      }
    };

    applyPreference();
    media.addEventListener("change", applyPreference);
    return () => media.removeEventListener("change", applyPreference);
  }, [videoId]);

  const togglePlayback = () => {
    const video = document.getElementById(videoId);
    if (!(video instanceof HTMLVideoElement) || reducedMotion) return;
    if (video.paused) {
      void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <button
      type="button"
      onClick={togglePlayback}
      disabled={reducedMotion}
      className="absolute bottom-5 left-5 z-20 inline-flex items-center gap-2 border border-white/80 bg-black/75 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50"
      aria-label={playing ? "Pause background video" : "Play background video"}
    >
      {playing ? <Pause className="h-3.5 w-3.5" aria-hidden /> : <Play className="h-3.5 w-3.5" aria-hidden />}
      <span aria-hidden>{playing ? "Pause" : "Play"}</span>
    </button>
  );
}
