"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/QuoteModal";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import homepageContent from "@/data/homepage-content.json";

const heroImages = [
  {
    src: "/our-products.png",
    alt: "Precision compression springs and mechanical gears in industrial manufacturing setting",
  },
  {
    src: "/hero-2.png",
    alt: "Industrial machinery gears and precision engineering components with helical motors",
  },
  {
    src: "/hero-4.png",
    alt: "Modern manufacturing facility with advanced motor systems and spring production equipment",
  },
  {
    src: "/hero-3.png",
    alt: "Precision workshop tools with helical gears and motor components for spring manufacturing",
  },
];

export const HeaderSection = (): JSX.Element => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="flex flex-col items-center gap-8 lg:gap-20 section-padding w-full bg-white">
      <div className="flex flex-col container-responsive items-center gap-8 lg:gap-20 w-full">
        <div className="flex flex-col max-w-4xl items-center gap-6 lg:gap-8 w-full text-center">
          <div className="flex flex-col items-center gap-4 lg:gap-6 w-full">
            <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[#01010a] text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)] text-balance">
              {homepageContent.hero.title}
            </h1>

            <p className="text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)] max-w-3xl">
              {homepageContent.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 w-full sm:w-auto">
            <Link
              href={homepageContent.hero.primaryCTA.href}
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto px-6 py-2.5 bg-[#e22023] rounded-[100px] border-b-4 border-[#e8787a] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#e8787a] transition-colors">
                {homepageContent.hero.primaryCTA.text}
              </Button>
            </Link>

            <QuoteModal>
              <Button
                variant="outline"
                className="w-full sm:w-auto px-6 py-2.5 bg-[#01010a0d] rounded-[100px] border-b-4 border-[#01010a26] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#01010a] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#01010a1a] transition-colors"
              >
                {homepageContent.hero.secondaryCTA.text}
              </Button>
            </QuoteModal>
          </div>
        </div>

        <div className="w-full relative">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {heroImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <Image
                      className="w-full h-48 sm:h-64 md:h-80 lg:h-[720px] object-cover rounded-lg"
                      alt={image.alt}
                      src={image.src}
                      width={1260}
                      height={720}
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1260px"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/80 hover:bg-white/90 border-none shadow-lg" />
            <CarouselNext className="right-4 bg-white/80 hover:bg-white/90 border-none shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
