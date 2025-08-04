import React from "react";
import { NavigationBarSection } from "../HomeDesktop/sections/NavigationBarSection";
import { FooterSection } from "../HomeDesktop/sections/FooterSection";
import { ContactHeroSection } from "./sections/ContactHeroSection";
import { ContactFormSection } from "../HomeDesktop/sections/ContactFormSection";
import { ContactInfoSection } from "../HomeDesktop/sections/ContactInfoSection";
import { ContactMapSection } from "./sections/ContactMapSection";

export const ContactDesktop = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full">
      {/* <ContactHeroSection /> */}
      <ContactFormSection />
      <ContactInfoSection />
      <ContactMapSection />
    </main>
  );
};
