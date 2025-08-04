import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import homepageContent from "@/data/homepage-content.json";
import Link from "next/link";

// Service features from JSON
const serviceFeatures = homepageContent.industries.sectors
  .slice(0, 3)
  .map((sector) => ({
    icon: "/manufacturing.svg",
    alt: `${sector.name} industry solutions`,
    title: sector.name,
    description: sector.description,
  }));

export const ContentLayoutSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding relative self-stretch w-full bg-[#f2f2f2]">
      <div className="flex flex-col container-responsive items-center gap-12 lg:gap-20 relative w-full">
        <div className="flex flex-col max-w-4xl items-center gap-4 relative w-full text-center">
          <div className="inline-flex items-center relative">
            <span className="font-heading-bold relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              {homepageContent.company.name}
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 lg:gap-6 relative self-stretch w-full">
            <h2 className="mt-[-1.00px] font-heading font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative self-stretch text-[#01010a] [font-style:var(--heading-h2-font-style)] text-balance">
              {homepageContent.industries.sectionTitle}
            </h2>

            <p className="relative font-subheading mx-auto font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] max-w-3xl">
              {homepageContent.industries.sectionSubtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 lg:gap-16 relative self-stretch w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 relative self-stretch w-full">
            {serviceFeatures.map((feature, index) => (
              <Card
                key={index}
                className="flex-1 border-none shadow-none bg-white p-6"
              >
                <CardContent className="flex flex-col items-center gap-4 lg:gap-6 p-0 text-center">
                  <Image
                    className="w-10 h-10 lg:w-12 lg:h-12"
                    alt={feature.alt}
                    src={feature.icon}
                    width={48}
                    height={48}
                  />

                  <div className="flex flex-col items-center gap-4 lg:gap-6 self-stretch w-full">
                    <h4 className="mt-[-1.00px] font-heading font-[number:var(--heading-h4-font-weight)] text-[length:var(--heading-h4-font-size)] text-center tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] self-stretch text-[#01010a] [font-style:var(--heading-h4-font-style)] text-balance">
                      {feature.title}
                    </h4>

                    <p className="self-stretch font-body font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 relative">
          <Link href="/products">
            <Button
              variant="secondary"
              className="w-full font-cta sm:w-auto px-6 py-2.5 bg-[#01010a0d] rounded-[100px] border-b-4 [border-bottom-style:solid] border-[#01010a26] font-text-regular-medium text-[#01010a] hover:bg-[#01010a1a] transition-colors"
            >
              <span className="font-cta">Learn More</span>
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              variant="ghost"
              className="w-full sm:w-auto flex items-center gap-2 rounded-[100px] font-text-regular-medium text-[#01010a] px-2 hover:bg-[#01010a0d] transition-colors"
            >
              <span className="font-cta">Contact Us</span>

              <ChevronRightIcon className="w-5 h-5 lg:w-6 lg:h-6" />
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};
