import React from "react";
import { ContactFormSection } from "./sections/ContactFormSection";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { ContentLayoutSection } from "./sections/ContentLayoutSection";
import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection";
import { HeaderSection, HeaderSectiontwo } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection";
import { MainLayoutSection } from "./sections/MainLayoutSection/MainLayoutSection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection";

export const HomeDesktoptwo = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full">
      <HeaderSectiontwo />
      <ProductShowcaseSection />
      <MainLayoutSection />
      <MainContentSection />
      <ContentLayoutSection />
      <CustomerTestimonialsSection />
      <ContactFormSection />
      <ContactInfoSection />
    </main>
  );
};
