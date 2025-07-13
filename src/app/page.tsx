import { HomeDesktop } from "@/components/screens/HomeDesktop";
import type { Metadata } from "next";
import homepageContent from "@/data/homepage-content.json";

export const metadata: Metadata = {
  title: homepageContent.metadata.pageTitle,
  description: homepageContent.metadata.metaDescription,
  openGraph: {
    title: homepageContent.metadata.pageTitle,
    description: homepageContent.metadata.metaDescription,
    url: "https://spring-solutions.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SHAKTI Industrial Equipment Manufacturing",
      },
    ],
  },
};

export default function Home() {
  return <HomeDesktop />;
}
