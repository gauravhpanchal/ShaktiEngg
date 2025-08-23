"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteModal } from "@/components/QuoteModal";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  applications: string[];
  specifications: Record<string, string | undefined>;
  images: string[];
}

interface ProductDetailDesktopProps {
  product: Product;
}

export const ProductDetailDesktop = ({
  product,
}: ProductDetailDesktopProps): JSX.Element => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <main className="flex flex-col w-full">
      {/* Breadcrumb */}
      <section className="bg-[#f2f2f2] py-4">
        <div className="container-responsive">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-[#01010a] font-nav hover:text-[#e22023] transition-colors"
            >
              Home
            </Link>
            <span className="text-[#01010a]">/</span>
            <Link
              href="/products"
              className="text-[#01010a] font-nav hover:text-[#e22023] transition-colors"
            >
              Products
            </Link>
            <span className="text-[#01010a]">/</span>
            <span className="text-[#e22023] font-nav font-medium">
              {product.name}
            </span>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="bg-white py-4">
        <div className="container-responsive">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[#01010a] hover:text-[#e22023] transition-colors"
          >
            <ChevronLeftIcon className="w-4 h-4" />
            <span className="font-text-regular-medium font-nav">
              Back to Products
            </span>
          </Link>
        </div>
      </section>

      {/* Product Detail */}
      <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding w-full bg-white">
        <div className="flex-col container-responsive items-start gap-12 lg:gap-20 w-full flex">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 relative self-stretch w-full">
            {/* Product Images */}
            <div className="flex flex-col gap-6 flex-1 order-1">
              {/* Main Image */}
              <div className="w-full relative">
                <Image
                  className="w-full h-64 sm:h-96 lg:h-[600px] object-cover rounded-lg"
                  alt={`${product.name} - ${product.description}`}
                  src={product.images[selectedImageIndex]}
                  width={600}
                  height={600}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#e22023] text-white px-3 py-1 rounded-full text-sm font-text-small-semi-bold">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImageIndex === index
                        ? "border-[#e22023]"
                        : "border-transparent hover:border-[#01010a26]"
                    }`}
                  >
                    <Image
                      className="w-full h-20 sm:h-24 lg:h-32 object-cover"
                      alt={`${product.name} view ${index + 1}`}
                      src={image}
                      width={200}
                      height={128}
                      sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16vw, 200px"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-6 lg:gap-8 flex-1 order-2">
              <div className="flex flex-col gap-4">
                <h1 className="font-heading font-[number:var(--heading-h1-font-weight)] text-[#01010a] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                  {product.name}
                </h1>

                <p className="font-body font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  {product.longDescription}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <QuoteModal>
                  <Button className="w-full sm:w-auto px-6 py-3 bg-[#e22023] rounded-[100px] border-b-4 border-[#e8787a] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#e8787a] transition-colors">
                    <span className="font-cta">Get Custom Quote</span>
                  </Button>
                </QuoteModal>

                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto px-6 py-3 bg-[#01010a0d] rounded-[100px] border-b-4 border-[#01010a26] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#01010a] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#01010a1a] transition-colors"
                  >
                    <span className="font-cta">Contact Expert</span>
                  </Button>
                </Link>
              </div>

              {/* Key Features */}
              <Card className="border-none shadow-lg bg-[#f2f2f2]">
                <CardContent className="p-6">
                  <h3 className="font-subheading font-[number:var(--heading-h4-font-weight)] text-[#01010a] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)] mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="font-specsfont-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-[#e22023] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Specifications */}
          <div className="w-full">
            <h2 className="font-subheading font-[number:var(--heading-h2-font-weight)] text-[#01010a] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] mb-8 text-center">
              Technical Specifications
            </h2>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(product.specifications)
                    .filter(([, value]) => value !== undefined)
                    .map(([key, value], index) => (
                      <div key={index} className="flex flex-col gap-2">
                        <span className="font-heading-bold font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[#01010a] text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                          {key}:
                        </span>
                        <span className="font-specs font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                          {value}
                        </span>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Applications */}
          <div className="w-full">
            <h2 className="font-subheading font-[number:var(--heading-h2-font-weight)] text-[#01010a] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] mb-8 text-center">
              Common Applications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.applications.map((application, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg bg-[#f2f2f2] hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <span
                      className="font-specs font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[#01010a] text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]"
                      dangerouslySetInnerHTML={{ __html: application }}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="w-full border-none shadow-lg bg-[#e22023] text-white">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="font-subheading font-[number:var(--heading-h2-font-weight)] text-white text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] mb-4">
                Ready to Get Started?
              </h2>
              <p className="font-body font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-white text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] mb-8 max-w-2xl mx-auto">
                Contact our engineering team for a custom quote or technical
                consultation. We're here to help you find the perfect solution
                for your application.
              </p>
              <div className="flex flex-row gap-4 justify-center">
                <QuoteModal>
                  <Button className="px-8 py-3 bg-white text-[#e22023] rounded-[100px] border-b-4 border-[#f2f2f2] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#f2f2f2] transition-colors">
                    <span className="font-cta">Request Quote</span>
                  </Button>
                </QuoteModal>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-[100px] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-white hover:text-[#e22023] transition-colors"
                  >
                    <span className="font-cta">Contact Us</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};
