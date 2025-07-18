import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/QuoteModal";
import Link from "next/link";

export const AboutHeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 lg:gap-20 section-padding w-full bg-white">
      <div className="flex flex-col container-responsive items-center gap-8 lg:gap-20 w-full">
        <div className="flex flex-col max-w-4xl items-center gap-6 lg:gap-8 w-full text-center">
          <div className="flex flex-col items-center gap-4 lg:gap-6 w-full">
            <div className="inline-flex items-center relative">
              <span className="font-heading-bold relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                About Us
              </span>
            </div>

            <h1 className="font-heading font-[number:var(--heading-h1-font-weight)] text-[#01010a] text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)] text-balance">
              Driven by Innovation, Strengthened by Experience
            </h1>

            <p className="font-body text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)] max-w-3xl">
              At Shakti Engineers, we believe that engineering excellence,
              combined with unwavering commitment, leads to remarkable results.
              Since our inception in 1978, we have dedicated ourselves to the
              development and manufacturing of reliable, high-performance
              products such as Geared Motors, Rotary Vibrators, and more,
              proudly contributing to India's growth in import substitution and
              industrial advancement.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto px-6 py-2.5 bg-[#e22023] rounded-[100px] border-b-4 border-[#e8787a] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#e8787a] transition-colors">
                <span className="font-cta">Contact Us</span>
              </Button>
            </Link>

            <Link href="/products" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto px-6 py-2.5 bg-[#01010a0d] rounded-[100px] border-b-4 border-[#01010a26] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#01010a] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#01010a1a] transition-colors"
              >
                <span className="font-cta">Our Products</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full relative">
          <Image
            className="w-full h-48 sm:h-64 md:h-80 lg:h-[720px] object-cover rounded-lg"
            alt="Shakti Engineers manufacturing facility with advanced motor equipment, gears, and skilled technicians"
            src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
