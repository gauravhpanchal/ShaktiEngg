import React from "react";
import { NavigationBarSection } from "../HomeDesktop/sections/NavigationBarSection";
import { FooterSection } from "../HomeDesktop/sections/FooterSection";
import { AboutHeroSection } from "./sections/AboutHeroSection";
import { AboutStorySection } from "./sections/AboutStorySection";
import { AboutTeamSection } from "./sections/AboutTeamSection";
import { AboutValuesSection } from "./sections/AboutValuesSection";
import { AboutStatsSection } from "./sections/AboutStatsSection";

export const AboutDesktop = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full">
      <NavigationBarSection />
      <AboutHeroSection />
      <AboutStorySection />
      <AboutValuesSection />
      <AboutStatsSection />
      <AboutTeamSection />
      <FooterSection />
    </main>
  );
};