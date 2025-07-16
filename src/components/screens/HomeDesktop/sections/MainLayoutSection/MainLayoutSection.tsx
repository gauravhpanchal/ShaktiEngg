import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import homepageContent from "@/data/homepage-content.json";
import { QuoteModal } from "@/components/QuoteModal";
import Link from "next/link";

// Feature card data from JSON
const featureCards = homepageContent.capabilities.features.map((feature) => ({
  title: feature.title,
  description: feature.description,
  iconSrc: "/relume.svg",
  iconAlt: `${feature.icon} icon`,
}));

export const MainLayoutSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding relative w-full bg-[#f2f2f2]">
      <div className="flex-col container-responsive items-start gap-12 lg:gap-20 w-full flex">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-8 relative self-stretch w-full">
          {/* Left column - Heading and intro text */}
          <div className="w-full lg:w-[380px] gap-6 lg:gap-8 flex flex-col items-start">
            <div className="flex flex-col items-start gap-4 self-stretch w-full">
              <div className="inline-flex items-center">
                <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                  {homepageContent.company.tagline}
                </span>
              </div>

              <div className="flex flex-col items-start gap-4 lg:gap-6 self-stretch w-full">
                <h2 className="self-stretch mt-[-1.00px] font-subheading font-[number:var(--heading-h2-font-weight)] text-[#01010a] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] text-balance">
                  {homepageContent.capabilities.sectionTitle}
                </h2>

                <p className="self-stretch font-body font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  {homepageContent.capabilities.sectionSubtitle}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-start sm:items-center gap-4 lg:gap-6">
              <Link href="/about">
                <Button
                  variant="outline"
                  className="w-full font-cta sm:w-auto px-6 py-2.5 bg-[#01010a0d] rounded-[100px] border-b-4 [border-bottom-style:solid] border-[#01010a26] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#01010a] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] hover:bg-[#01010a1a] transition-colors"
                >
                  Learn More
                </Button>
              </Link>
              <QuoteModal>
                <Button
                  variant="ghost"
                  className="w-full font-cta sm:w-auto flex items-center gap-2 rounded-[100px] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#01010a] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] hover:bg-[#01010a0d] transition-colors"
                >
                  Get Quote
                  <ChevronRightIcon className="w-5 h-5 lg:w-6 lg:h-6" />
                </Button>
              </QuoteModal>
            </div>
          </div>

          {/* Right column - Feature cards grid */}
          <div className="flex flex-col items-start gap-8 lg:gap-16 flex-1">
            {/* Top row of feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 self-stretch w-full">
              {featureCards.slice(0, 2).map((card, index) => (
                <Card
                  key={index}
                  className="flex-1 border-none bg-transparent shadow-none"
                >
                  <CardContent className="p-0 gap-4 lg:gap-6 flex flex-col items-start">
                    <Image
                      className="w-10 h-10 lg:w-12 lg:h-12"
                      alt={card.iconAlt}
                      src={card.iconSrc}
                      width={48}
                      height={48}
                    />
                    <h4 className="font-subheading font-[number:var(--heading-h4-font-weight)] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] self-stretch text-[#01010a] [font-style:var(--heading-h4-font-style)] text-balance">
                      {card.title}
                    </h4>
                    <p className="self-stretch font-body font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom row of feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 self-stretch w-full">
              {featureCards.slice(2, 4).map((card, index) => (
                <Card
                  key={index}
                  className="flex-1 border-none bg-transparent shadow-none"
                >
                  <CardContent className="p-0 gap-4 lg:gap-6 flex flex-col items-start">
                    <Image
                      className="w-10 h-10 lg:w-12 lg:h-12"
                      alt={card.iconAlt}
                      src={card.iconSrc}
                      width={48}
                      height={48}
                    />
                    <h4 className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] self-stretch text-[#01010a] [font-style:var(--heading-h4-font-style)] text-balance">
                      {card.title}
                    </h4>
                    <p className="self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
