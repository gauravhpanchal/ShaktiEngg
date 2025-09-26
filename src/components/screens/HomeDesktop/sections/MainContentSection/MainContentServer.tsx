import React from "react";
import homepageContent from "@/data/homepage-content.json";
import { MainContentSection, MainContentData } from "./MainContentSection";

export default function MainContentServer() {
  const data: MainContentData = {
    companyName: homepageContent.company.name,
    benefits: {
      sectionTitle: homepageContent.benefits.sectionTitle,
      sectionSubtitle: homepageContent.benefits.sectionSubtitle,
      features: homepageContent.benefits.features,
    },
  };

  return <MainContentSection data={data} />;
}

