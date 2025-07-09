import { HomeDesktop } from "@/components/screens/HomeDesktop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Precision Springs Manufacturing",
  description: "Discover our expertly engineered springs designed to meet the highest industry standards. With a commitment to quality and innovation, we serve diverse sectors with precision and reliability.",
  openGraph: {
    title: "Spring Solutions - Precision Springs Manufacturing",
    description: "Discover our expertly engineered springs designed to meet the highest industry standards.",
    url: "https://spring-solutions.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spring Solutions Manufacturing",
      },
    ],
  },
};

export default function Home() {
  return <HomeDesktop />;
}