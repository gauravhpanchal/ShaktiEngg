import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const specifications = [
  {
    category: "Materials",
    items: [
      "High Carbon Steel",
      "Stainless Steel (304, 316)",
      "Music Wire",
      "Chrome Silicon",
      "Inconel",
      "Beryllium Copper",
    ],
  },
  {
    category: "Wire Diameters",
    items: [
      "0.1mm - 25mm",
      "Custom sizes available",
      "Precision tolerance ±0.05mm",
      "Various cross-sections",
      "Round, square, rectangular",
      "Special profiles on request",
    ],
  },
  {
    category: "Finishes",
    items: [
      "Zinc Plating",
      "Powder Coating",
      "Passivation",
      "Shot Peening",
      "Stress Relieving",
      "Custom Coatings",
    ],
  },
  {
    category: "Quality Standards",
    items: [
      "ISO 9001:2015 Certified",
      "ASTM Compliance",
      "DIN Standards",
      "100% Load Testing",
      "Dimensional Inspection",
      "Material Certification",
    ],
  },
];

export const ProductsSpecsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding relative self-stretch w-full bg-white">
      <div className="flex flex-col container-responsive items-center gap-12 lg:gap-20 relative w-full">
        <div className="flex flex-col max-w-4xl items-center gap-4 relative w-full text-center">
          <div className="inline-flex items-center relative">
            <span className="font-heading-bold relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              Specifications
            </span>
          </div>

          <div className=" flex flex-col items-center gap-4 lg:gap-6 relative self-stretch w-full">
            <h2 className="font-heading mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative self-stretch text-[#01010a] [font-style:var(--heading-h2-font-style)] text-balance">
              Technical Specifications & Standards
            </h2>

            <p className="font-body relative mx-auto font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] max-w-3xl">
              Our products are manufactured to the highest industry standards
              with precise specifications and quality control measures.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative self-stretch w-full">
          {specifications.map((spec, index) => (
            <Card key={index} className="border-none shadow-lg bg-[#f2f2f2]">
              <CardContent className="flex flex-col gap-4 lg:gap-6 p-6 lg:p-8">
                <h4 className="font-heading font-[number:var(--heading-h4-font-weight)] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] text-[#01010a] [font-style:var(--heading-h4-font-style)]">
                  {spec.category}
                </h4>

                <ul className="space-y-2">
                  {spec.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="font-specs font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] flex items-start"
                    >
                      <span className="w-1.5 h-1.5 bg-[#e22023] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
