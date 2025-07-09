import { ContactDesktop } from "@/components/screens/ContactDesktop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Spring Solutions",
  description: "Get in touch with Spring Solutions for custom quotes, technical support, and spring manufacturing inquiries. Contact our expert team today.",
  openGraph: {
    title: "Contact Spring Solutions - Get Your Custom Quote",
    description: "Get in touch for custom quotes, technical support, and spring manufacturing inquiries.",
    url: "https://spring-solutions.com/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Spring Solutions",
      },
    ],
  },
};

export default function Contact() {
  return <ContactDesktop />;
}