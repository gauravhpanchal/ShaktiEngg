import homepageContent from "@/data/homepage-content.json";
import React from "react";
import ProductShowcaseClient from "./ProductShowcaseSectionClient";

export function ProductShowcaseServer() {
  // Build only the necessary data subset for the client
  const imageMap = [
    "/sonzogni.jpg",
    "/enzfelder.png",
    "/rotary-vibrator.jpg",
    "/bump-jolt.png",
    "/helical-geared-motor.jpg",
    "/bin.jpg",
    "/Electromagnetic-Vibro-Feeders.png",
  ];

  const products = homepageContent.products.featured.map((product, index) => ({
    id: product.id,
    slug: product.slug,
    name: product.name,
    variant: product.category,
    image: imageMap[index] || imageMap[0],
  }));

  const companyName = homepageContent.company.name;
  const sectionTitle = homepageContent.products.sectionTitle;
  const sectionSubtitle = homepageContent.products.sectionSubtitle;

  return (
    <ProductShowcaseClient
      data={{ companyName, sectionTitle, sectionSubtitle, products }}
    />
  );
}
