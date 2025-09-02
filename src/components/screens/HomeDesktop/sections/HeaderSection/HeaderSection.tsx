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
    src: "/helical-geared-motor-2.jpg",
    alt: "Helical Geared Motor",
  },
  {
    src: "/rotary-vibrator-2.jpeg",
    alt: "Electric Rotary Vibrator",
  },
  {
    src: "/sonzogni.png",
    alt: "Precision workshop tools with helical gears and motor components for spring manufacturing",
    object: "contain",
  },
  {
    src: "/enzfelder.png",
    alt: "Precision workshop tools with helical gears and motor components for spring manufacturing",
    object: "contain",
  },
  {
    src: "/electric-actuator.png",
    alt: "Precision workshop tools with helical gears and motor components for spring manufacturing",
  },
  {
    src: "/hero-4.jpeg",
    alt: "Precision workshop tools with helical gears and motor components for spring manufacturing",
  },
  {
    src: "/bump-jolt.png",
    alt: "Industrial machinery gears and precision engineering components with helical motors",
  },
  {
    src: "/Electromagnetic-Vibro-Feeders.png",
    alt: "Industrial machinery gears and precision engineering components with helical motors",
    object: "contain",
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
            <h1 className="font-heading font-[number:var(--heading-h1-font-weight)] text-[#01010a] text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)] text-balance">
              {homepageContent.hero.title}
            </h1>

            <p className="font-body text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)] max-w-3xl">
              {homepageContent.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 w-full sm:w-auto">
            <Link
              href={homepageContent.hero.primaryCTA.href}
              className="w-full sm:w-auto"
            >
              <Button className="w-full font-cta sm:w-auto px-6 py-2.5 bg-[#e22023] rounded-[100px] border-b-4 border-[#e8787a] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#e8787a] transition-colors">
                <span className="font-cta">
                  {homepageContent.hero.primaryCTA.text}
                </span>
              </Button>
            </Link>

            <QuoteModal>
              <Button
                variant="outline"
                className="w-full font-cta sm:w-auto px-6 py-2.5 bg-[#01010a0d] rounded-[100px] border-b-4 border-[#01010a26] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#01010a] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#01010a1a] transition-colors"
              >
                <span className="font-cta">
                  {homepageContent.hero.secondaryCTA.text}
                </span>
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
                      className={`w-full h-48 sm:h-64 md:h-80 lg:h-[720px] object-cover rounded-lg`}
                      alt={image.alt}
                      src={image.src}
                      // objectFit={image.object || "cover"}
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

export const HeaderSectiontwo = (): JSX.Element => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // Auto-rotate background images
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          className={`w-full h-full ${
            heroImages[currentImageIndex].object
              ? "object-contain"
              : "object-cover"
          }`}
          alt={heroImages[currentImageIndex].alt}
          src={heroImages[currentImageIndex].src}
          width={1920}
          height={1080}
          priority={currentImageIndex === 0}
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col container-responsive items-center gap-8 lg:gap-12 w-full section-padding">
        <div className="flex flex-col max-w-4xl items-center gap-6 lg:gap-8 w-full text-center">
          <div className="flex flex-col items-center gap-4 lg:gap-6 w-full">
            <h1 className="font-heading font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)] text-balance drop-shadow-lg">
              {homepageContent.hero.title}
            </h1>

            <p className="font-body text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-white tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)] max-w-3xl drop-shadow-md">
              {homepageContent.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 w-full sm:w-auto">
            <Link
              href={homepageContent.hero.primaryCTA.href}
              className="w-full sm:w-auto"
            >
              <Button className="w-full font-cta sm:w-auto px-6 py-2.5 bg-[#e22023] rounded-[100px] border-b-4 border-[#e8787a] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#e8787a] transition-colors shadow-lg">
                <span className="font-cta">
                  {homepageContent.hero.primaryCTA.text}
                </span>
              </Button>
            </Link>

            <QuoteModal>
              <Button
                variant="outline"
                className="w-full font-cta sm:w-auto px-6 py-2.5 bg-white/20 backdrop-blur-sm rounded-[100px] border-b-4 border-white/30 font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-white/30 transition-colors shadow-lg"
              >
                <span className="font-cta">
                  {homepageContent.hero.secondaryCTA.text}
                </span>
              </Button>
            </QuoteModal>
          </div>
        </div>

        {/* Image indicators */}
        <div className="hidden sm:flex gap-1.5  sm:gap-2 mt-6 sm:mt-8">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-0 h-0 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white shadow-lg"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
