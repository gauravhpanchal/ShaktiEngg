"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Dynamically import the carousel only on client
const Carousel = dynamic(
  () => import("@/components/ui/carousel").then((m) => m.Carousel),
  { ssr: false }
);
const CarouselContent = dynamic(
  () => import("@/components/ui/carousel").then((m) => m.CarouselContent),
  { ssr: false }
);
const CarouselItem = dynamic(
  () => import("@/components/ui/carousel").then((m) => m.CarouselItem),
  { ssr: false }
);
const CarouselNext = dynamic(
  () => import("@/components/ui/carousel").then((m) => m.CarouselNext),
  { ssr: false }
);
const CarouselPrevious = dynamic(
  () => import("@/components/ui/carousel").then((m) => m.CarouselPrevious),
  { ssr: false }
);

export type ProductCardData = {
  id: number | string;
  slug: string;
  name: string;
  variant: string;
  image: string;
};

export function MobileProductCarousel({
  products,
  onQuoteClick,
}: {
  products: ProductCardData[];
  onQuoteClick: () => void;
}) {
  return (
    <div className="block md:hidden w-full">
      <Carousel opts={{ loop: true, align: "start" }} className="w-full">
        <CarouselContent className="-ml-2">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-2 basis-4/5 sm:basis-3/5"
            >
              <Card className="border-none shadow-none bg-transparent group cursor-pointer">
                <CardContent className="p-0 flex flex-col items-start gap-4">
                  <Link href={`/products/${product.slug}`} className="w-full">
                    <div className="w-full relative overflow-hidden rounded-lg">
                      <Image
                        className="w-full h-64 sm:h-80 lg:h-[350px] object-cover transition-transform duration-300 md:group-hover:scale-105"
                        alt={`${product.name} - ${product.variant} products manufacturing with motor components`}
                        src={product.image}
                        width={400}
                        height={486}
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                        decoding="async"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Y3sR1wAAAAASUVORK5CYII="
                      />
                    </div>
                  </Link>

                  <div className="flex flex-col items-start gap-2 w-full">
                    <div className="flex flex-col items-start w-full">
                      <Link href={`/products/${product.slug}`}>
                        <h3 className="w-full mt-[-1.00px] line-clamp-1 font-text-medium-semi-bold font-[number:var(--text-medium-semi-bold-font-weight)] text-[#01010a] text-[length:var(--text-medium-semi-bold-font-size)] tracking-[var(--text-medium-semi-bold-letter-spacing)] leading-[var(--text-medium-semi-bold-line-height)] [font-style:var(--text-medium-semi-bold-font-style)] hover:text-[#e22023] transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="w-full font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[#01010a] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                        {product.variant}
                      </p>
                    </div>

                    <Button
                      onClick={onQuoteClick}
                      className="w-full mt-2 px-4 py-2 bg-[#e22023] rounded-[100px] border-b-4 border-[#e8787a] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#e8787a] transition-colors"
                    >
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
}
