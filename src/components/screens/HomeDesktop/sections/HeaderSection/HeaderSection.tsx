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

const heroImages = [
  {
    src: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Precision compression springs and mechanical gears in industrial manufacturing setting",
  },
  {
    src: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Industrial machinery gears and precision engineering components with helical motors",
  },
  {
    src: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Modern manufacturing facility with advanced motor systems and spring production equipment",
  },
  {
    src: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Precision workshop tools with helical gears and motor components for spring manufacturing",
  },
];

export const HeaderSection = (): JSX.Element => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="flex flex-col items-center gap-8 lg:gap-20 section-padding w-full bg-white">
      <div className="flex flex-col container-responsive items-center gap-8 lg:gap-20 w-full">
        <div className="flex flex-col max-w-4xl items-center gap-6 lg:gap-8 w-full text-center">
          <div className="flex flex-col items-center gap-4 lg:gap-6 w-full">
            <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[#01010a] text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)] text-balance">
              Precision Springs Crafted for Every Application
            </h1>

            <p className="text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)] max-w-3xl">
              Discover our expertly engineered springs designed to meet the
              highest industry standards. With a commitment to quality and
              innovation, we serve diverse sectors with precision and
              reliability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 w-full sm:w-auto">
            <Link href="/products" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto px-6 py-2.5 bg-[#1717c4] rounded-[100px] border-b-4 border-[#12129c] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#1414a8] transition-colors">
                Learn More
              </Button>
            </Link>

            <QuoteModal>
              <Button
                variant="outline"
                className="w-full sm:w-auto px-6 py-2.5 bg-[#01010a0d] rounded-[100px] border-b-4 border-[#01010a26] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#01010a] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#01010a1a] transition-colors"
              >
                Get Quote
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