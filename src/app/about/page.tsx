import { AboutDesktop } from "@/components/screens/AboutDesktop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Spring Solutions",
  description: "Learn about Spring Solutions' commitment to precision manufacturing, our experienced team, and decades of expertise in spring engineering and production.",
  openGraph: {
    title: "About Spring Solutions - Precision Manufacturing Experts",
    description: "Learn about our commitment to precision manufacturing and decades of expertise in spring engineering.",
    url: "https://spring-solutions.com/about",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Spring Solutions",
      },
    ],
  },
};

export default function About() {
  return <AboutDesktop />;
}