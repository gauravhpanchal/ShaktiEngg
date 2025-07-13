import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "27+",
    label: "Years of Experience",
    description: "Decades of expertise in  manufacturing",
  },
  {
    number: "10M+",
    label: "Products Manufactured",
    description: "Millions of high-quality products delivered worldwide",
  },
  {
    number: "500+",
    label: "Satisfied Clients",
    description: "Companies trust us for their manufacturing needs",
  },
  {
    number: "99.8%",
    label: "Quality Rate",
    description: "Exceptional quality control and precision standards",
  },
];

export const AboutStatsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding relative self-stretch w-full bg-[#f2f2f2]">
      <div className="flex flex-col container-responsive items-center gap-12 lg:gap-20 relative w-full">
        <div className="flex flex-col max-w-4xl items-center gap-4 relative w-full text-center">
          <div className="inline-flex items-center relative">
            <span className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              By the Numbers
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 lg:gap-6 relative self-stretch w-full">
            <h2 className="mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative self-stretch text-[#01010a] [font-style:var(--heading-h2-font-style)] text-balance">
              Our Track Record of Excellence
            </h2>

            <p className="relative mx-auto font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] max-w-3xl">
              These numbers reflect our commitment to excellence and the trust
              our customers place in our manufacturing capabilities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative self-stretch w-full">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="flex-1 border-none shadow-none bg-white"
            >
              <CardContent className="flex flex-col items-center gap-4 lg:gap-6 p-6 lg:p-8 text-center">
                <div className="flex flex-col items-center gap-2 relative self-stretch w-full">
                  <span className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[#e22023] text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                    {stat.number}
                  </span>

                  <h4 className="mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[length:var(--heading-h4-font-size)] text-center tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] relative self-stretch text-[#01010a] [font-style:var(--heading-h4-font-style)]">
                    {stat.label}
                  </h4>
                </div>

                <p className="relative self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
