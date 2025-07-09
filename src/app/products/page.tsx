import { ProductsDesktop } from "@/components/screens/ProductsDesktop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Spring Solutions",
  description: "Explore our comprehensive range of precision springs including compression, extension, torsion springs, wire forms, and custom solutions for industrial applications.",
  openGraph: {
    title: "Spring Products - Compression, Extension & Torsion Springs",
    description: "Explore our comprehensive range of precision springs for industrial applications.",
    url: "https://spring-solutions.com/products",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spring Solutions Products",
      },
    ],
  },
};

export default function Products() {
  return <ProductsDesktop />;
}