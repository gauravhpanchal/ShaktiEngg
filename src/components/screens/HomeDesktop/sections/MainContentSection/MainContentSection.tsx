import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import homepageContent from "@/data/homepage-content.json";
import Link from "next/link";
import { QuoteModal } from "@/components/QuoteModal";

// Feature data from JSON
const features = homepageContent.benefits.features.map((feature) => ({
  icon: `/${feature.icon}.svg`,
  alt: `${feature.title} icon`,
  text: feature.description,
}));

const MainContentSectionComponent = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding relative self-stretch w-full bg-white">
      <div className="flex-col container-responsive items-start gap-12 lg:gap-20 w-full flex relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative self-stretch w-full">
          {/* Left content column */}
          <div className="flex flex-col items-start gap-6 lg:gap-8 relative flex-1 order-2 lg:order-1">
            <div className="flex flex-col items-start gap-6 lg:gap-8 relative self-stretch w-full">
              {/* Heading section */}
              <div className="gap-4 self-stretch w-full flex flex-col items-start">
                <span className="relative w-fit mt-[-1.00px] font-heading-bold font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                  {homepageContent.company.name}
                </span>

                <div className="flex flex-col items-start gap-4 lg:gap-6 relative self-stretch w-full">
                  <h2 className="relative font-heading self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#01010a] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] text-balance">
                    {homepageContent.benefits.sectionTitle}
                  </h2>

                  <p className="relative font-subheading self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                    {homepageContent.benefits.sectionSubtitle}
                  </p>
                </div>
              </div>

              {/* Features list */}
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="gap-3 lg:gap-4 px-0 py-2 self-stretch w-full flex flex-col items-start">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 lg:gap-4 relative self-stretch w-full"
                    >
                      <Image
                        className="relative w-4 h-4 mt-1 flex-shrink-0"
                        alt={feature.alt}
                        src={feature.icon}
                        width={16}
                        height={16}
                        loading="eager"
                        quality={90}
                        priority
                      />
                      <p className="relative font-body flex-1 mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 relative">
              <Link href="/products">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 relative mt-[-4.00px] mb-[-4.00px] ml-[-4.00px] bg-[#01010a0d] rounded-[100px] border-b-4 [border-bottom-style:solid] border-[#01010a26] hover:bg-[#01010a1a] transition-colors"
                >
                  <span className="font-cta font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#01010a] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    Learn More
                  </span>
                </Button>
              </Link>

              <QuoteModal>
                <Button
                  variant="ghost"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 relative rounded-[100px] hover:bg-[#01010a0d] transition-colors"
                >
                  <span className="font-cta font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#01010a] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    Get Quote
                  </span>
                  <ChevronRightIcon className="w-5 h-5 lg:w-6 lg:h-6" />
                </Button>
              </QuoteModal>
            </div>
          </div>

          {/* Right image column */}
          <div className="flex-1 relative order-1 lg:order-2 w-full">
            <Image
              className="w-full h-64 sm:h-80 lg:h-[640px] object-cover rounded-lg"
              alt="Modern manufacturing facility with precision helical motors and industrial gear systems"
              src="/factory-3.jpeg"
              width={640}
              height={640}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const MainContentSection = memo(MainContentSectionComponent);
MainContentSection.displayName = "MainContentSection";
