import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";

const Programmes = dynamic(() => import("@/components/sections/Programmes"), {
  loading: () => <div className="min-h-[400px]" />,
});
const PathwayToInterview = dynamic(() => import("@/components/sections/PathwayToInterview"), {
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

      <div className="md:hidden">
        <Problem />
        <Programmes />
        <Instructor />
        <Guarantee />
        <FinalCTA />
      </div>

      <div className="hidden md:block">
        <Problem />
        <Programmes />
        <PathwayToInterview />
        <Testimonials />
        <Guarantee />
        <Instructor />
        <FinalCTA />
      </div>
    </>
  );
}
