import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";

// Lazy load sections below the fold for better initial load performance
const Solution = dynamic(() => import("@/components/sections/Solution"), {
  loading: () => <div className="min-h-[400px]" />,
});
const PathwayToInterview = dynamic(() => import("@/components/sections/PathwayToInterview"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Comparison = dynamic(() => import("@/components/sections/Comparison"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Guarantee = dynamic(() => import("@/components/sections/Guarantee"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Instructor = dynamic(() => import("@/components/sections/Instructor"), {
  loading: () => <div className="min-h-[400px]" />,
});
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"), {
  loading: () => <div className="min-h-[400px]" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <PathwayToInterview />
      <Comparison />
      <Testimonials />
      {/* <Outcomes /> */}
      <Guarantee />
      <Instructor />
      <FinalCTA />
    </>
  );
}
