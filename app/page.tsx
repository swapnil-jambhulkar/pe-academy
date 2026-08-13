import Hero from "@/components/sections/Hero";
import CohortTicker from "@/components/sections/CohortTicker";
import WhoThisIsFor from "@/components/sections/WhoThisIsFor";
import WhatIsMissing from "@/components/sections/WhatIsMissing";
import ProgrammeArc from "@/components/sections/ProgrammeArc";
import WhatYouLeaveWith from "@/components/sections/WhatYouLeaveWith";
import InvestmentCommittee from "@/components/sections/InvestmentCommittee";
import FreeBeforeYouApply from "@/components/sections/FreeBeforeYouApply";
import WhoRunsIt from "@/components/sections/WhoRunsIt";
import FinalCTA from "@/components/sections/FinalCTA";
import FloatingCTA from "@/components/ui/floating-cta";
import ScrollProgress from "@/components/ui/scroll-progress";
import SectionRail from "@/components/ui/section-rail";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SectionRail />
      <Hero />
      <CohortTicker />
      <WhoThisIsFor />
      <WhatIsMissing />
      <ProgrammeArc />
      <WhatYouLeaveWith />
      <InvestmentCommittee />
      <FreeBeforeYouApply />
      <WhoRunsIt />
      <FinalCTA />
      <FloatingCTA />
    </>
  );
}
