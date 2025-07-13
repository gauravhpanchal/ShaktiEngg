"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteModal } from "@/components/QuoteModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import homepageContent from "@/data/homepage-content.json";

// Product data from JSON with motor/gear images
const imageMap = [
  "/helical-geared-motor.png",
  "/rotary-vibrator.png",
  "/bump-jolt.png",
  "/bin.png",
  "/vibro-seperator.png",
];

const products = homepageContent.products.featured.map((product, index) => ({
  id: product.id,
  slug: product.name
    .toLowerCase()
    .replace(/shakti make /g, "")
    .replace(/\s+/g, "-")
    .replace(/&/g, ""),
  name: product.name,
  variant: product.category,
  image: imageMap[index] || imageMap[0],
}));

const ProductCard = ({ product }: { product: (typeof products)[0] }) => (
  <Card className="border-none shadow-none bg-transparent group cursor-pointer">
    <CardContent className="p-0 flex flex-col items-start gap-4">
      <Link href={`/products/${product.slug}`} className="w-full">
        <div className="w-full relative overflow-hidden rounded-lg">
          <Image
            className="w-full h-64 sm:h-80 lg:h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
            alt={`${product.name} - ${product.variant} products manufacturing with motor components`}
            src={product.image}
            width={400}
            height={486}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="flex flex-col items-start gap-2 w-full">
        <div className="flex flex-col items-start w-full">
          <Link href={`/products/${product.slug}`}>
            <h3 className="w-full mt-[-1.00px] font-text-medium-semi-bold font-[number:var(--text-medium-semi-bold-font-weight)] text-[#01010a] text-[length:var(--text-medium-semi-bold-font-size)] tracking-[var(--text-medium-semi-bold-letter-spacing)] leading-[var(--text-medium-semi-bold-line-height)] [font-style:var(--text-medium-semi-bold-font-style)] hover:text-[#e22023] transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="w-full font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[#01010a] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
            {product.variant}
          </p>
        </div>

        {/* Get Quote Button */}
        <QuoteModal>
          <Button className="w-full mt-2 px-4 py-2 bg-[#e22023] rounded-[100px] border-b-4 border-[#e8787a] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#1414a8] transition-colors">
            Get Quote
          </Button>
        </QuoteModal>
      </div>
    </CardContent>
  </Card>
);

export const ProductShowcaseSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding w-full bg-white">
      <div className="flex-col container-responsive items-start gap-12 lg:gap-20 w-full flex">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8 w-full">
          <div className="max-w-2xl gap-4 flex-1 flex flex-col items-start">
            <div className="inline-flex items-center w-full">
              <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                {homepageContent.company.name}
              </span>
            </div>

            <div className="flex flex-col items-start gap-4 w-full">
              <h2 className="w-full font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#01010a] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] text-balance">
                {homepageContent.products.sectionTitle}
              </h2>

              <p className="w-full font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                {homepageContent.products.sectionSubtitle}
              </p>
            </div>
          </div>

          <Link href="/products">
            <Button
              variant="outline"
              className="w-full lg:w-auto px-6 py-2.5 bg-[#01010a0d] rounded-[100px] border-b-4 [border-bottom-style:solid] border-[#01010a26] hover:bg-[#01010a1a] transition-colors"
            >
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#01010a] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                View All Products
              </span>
            </Button>
          </Link>
        </div>

        <div className="flex flex-col items-start gap-8 lg:gap-16 w-full">
          {/* Mobile Carousel */}
          <div className="block md:hidden w-full">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {products.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="pl-2 md:pl-4 basis-4/5 sm:basis-3/5"
                  >
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:flex flex-col items-start gap-8 lg:gap-16 w-full">
            {/* First row of products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 w-full">
              {products.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Second row of products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 w-full">
              {products.slice(3, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
