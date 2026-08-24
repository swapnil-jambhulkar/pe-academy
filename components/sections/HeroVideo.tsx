import Image from "next/image";
import HeroVideoToggle from "@/components/sections/HeroVideoToggle";

/**
 * Server-rendered hero media so the poster and video tag ship in the first HTML
 * with the headline. Play/pause is a small client island on top.
 */
type HeroVideoProps = {
  src: string;
  poster: string;
  label: string;
};

const VIDEO_ID = "hero-ic-video";

export default function HeroVideo({ src, poster, label }: HeroVideoProps) {
  return (
    <div className="absolute inset-0 bg-gray-100">
      <Image
        src={poster}
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover grayscale-[20%] contrast-[1.04]"
      />
      <video
        id={VIDEO_ID}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover grayscale-[20%] contrast-[1.04]"
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
      <HeroVideoToggle videoId={VIDEO_ID} />
    </div>
  );
}
