import React from "react";
import { NavigationBarSection } from "../HomeDesktop/sections/NavigationBarSection";
import { FooterSection } from "../HomeDesktop/sections/FooterSection";
import { ProductsHeroSection } from "./sections/ProductsHeroSection";
import { ProductsCatalogSection } from "./sections/ProductsCatalogSection";
import { ProductsSpecsSection } from "./sections/ProductsSpecsSection";
import { ProductsCTASection } from "./sections/ProductsCTASection";

export const ProductsDesktop = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full">
      <ProductsHeroSection />
      <ProductsCatalogSection />
      <ProductsSpecsSection />
      <ProductsCTASection />
    </main>
  );
};
