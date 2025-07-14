import React from "react";
import { ContactFormSection } from "./sections/ContactFormSection";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { ContentLayoutSection } from "./sections/ContentLayoutSection";
import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection";
import { MainLayoutSection } from "./sections/MainLayoutSection/MainLayoutSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection";

export const HomeDesktop = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full">
      <HeaderSection />
      <MainLayoutSection />
      <ProductShowcaseSection />
      <MainContentSection />
      <ContentLayoutSection />
      <CustomerTestimonialsSection />
      <ContactFormSection />
      <ContactInfoSection />
    </main>
  );
};
