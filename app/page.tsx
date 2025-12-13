import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import PathwayToInterview from "@/components/sections/PathwayToInterview";
import Comparison from "@/components/sections/Comparison";
import Testimonials from "@/components/sections/Testimonials";
import Outcomes from "@/components/sections/Outcomes";
import Guarantee from "@/components/sections/Guarantee";
import Instructor from "@/components/sections/Instructor";
import FinalCTA from "@/components/sections/FinalCTA";

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
