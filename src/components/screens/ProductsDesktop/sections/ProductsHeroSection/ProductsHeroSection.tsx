import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/QuoteModal";

export const ProductsHeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 lg:gap-20 section-padding w-full bg-white">
      <div className="flex flex-col container-responsive items-center gap-8 lg:gap-20 w-full">
        <div className="flex flex-col max-w-4xl items-center gap-6 lg:gap-8 w-full text-center">
          <div className="flex flex-col items-center gap-4 lg:gap-6 w-full">
            <div className="inline-flex items-center relative">
              <span className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                Our Products
              </span>
            </div>

            <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[#01010a] text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)] text-balance">
              Engineered for Performance, Designed for Reliability
            </h1>

            <p className="text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)] max-w-3xl">
              At Shakti Engineers, we are committed to providing high-quality,
              efficient, and reliable engineering solutions to meet the evolving
              needs of various industries. Our products are designed and
              manufactured with precision, using advanced technology and robust
              materials to ensure optimum performance, durability, and low
              maintenance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 w-full sm:w-auto">
            <QuoteModal>
              <Button className="w-full sm:w-auto px-6 py-2.5 bg-[#1717c4] rounded-[100px] border-b-4 border-[#12129c] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#1414a8] transition-colors">
                Request Quote
              </Button>
            </QuoteModal>

            <Button
              variant="outline"
              className="w-full sm:w-auto px-6 py-2.5 bg-[#01010a0d] rounded-[100px] border-b-4 border-[#01010a26] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#01010a] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#01010a1a] transition-colors"
            >
              Download Catalog
            </Button>
          </div>
        </div>

        <div className="w-full relative">
          <Image
            className="w-full h-48 sm:h-64 md:h-80 lg:h-[720px] object-cover rounded-lg"
            alt="Comprehensive display of various products types with motors, gears, and helical components"
            src="/our-products.png"
            width={1260}
            height={720}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1260px"
          />
        </div>
      </div>
    </section>
  );
};
