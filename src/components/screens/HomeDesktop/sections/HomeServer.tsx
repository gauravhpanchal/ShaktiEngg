import React from "react";
import { HeaderSectiontwo } from "./HeaderSection";
import { MainLayoutSection } from "./MainLayoutSection/MainLayoutSection";
import { ContentLayoutSection } from "./ContentLayoutSection";
import { ContactInfoSection } from "./ContactInfoSection";
import { ContactFormSection } from "./ContactFormSection";
import { ProductShowcaseSection } from "./ProductShowcaseSection";
import { MainContentSection } from "./MainContentSection";

export default function HomeServer() {
  return (
    <main className="flex flex-col w-full">
      <HeaderSectiontwo />
      <ProductShowcaseSection />
      <MainLayoutSection />
      <MainContentSection />
      <ContentLayoutSection />
      <ContactInfoSection />
      <ContactFormSection />
    </main>
  );
}

