import Hero from "@/components/sections/Hero";
import WhoThisIsFor from "@/components/sections/WhoThisIsFor";
import WhatIsMissing from "@/components/sections/WhatIsMissing";
import WhatYouLeaveWith from "@/components/sections/WhatYouLeaveWith";
import InvestmentCommittee from "@/components/sections/InvestmentCommittee";
import FreeBeforeYouApply from "@/components/sections/FreeBeforeYouApply";
import WhoRunsIt from "@/components/sections/WhoRunsIt";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoThisIsFor />
      <WhatIsMissing />
      <WhatYouLeaveWith />
      <InvestmentCommittee />
      <FreeBeforeYouApply />
      <WhoRunsIt />
      <FinalCTA />
    </>
  );
}
