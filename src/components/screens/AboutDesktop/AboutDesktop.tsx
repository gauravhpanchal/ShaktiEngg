import React from "react";
import { AboutHeroSection } from "./sections/AboutHeroSection";
import { AboutStorySection } from "./sections/AboutStorySection";
import { AboutTeamSection } from "./sections/AboutTeamSection";
import { AboutValuesSection } from "./sections/AboutValuesSection";
import { AboutStatsSection } from "./sections/AboutStatsSection";

export const AboutDesktop = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full">
      {/* <AboutHeroSection /> */}
      <AboutStorySection />
      <AboutStatsSection />
      <AboutValuesSection />
      {/* <AboutTeamSection /> */}
    </main>
  );
};
