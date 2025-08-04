import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: "/high-quality.svg",
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in every products we manufacture, ensuring consistent quality and reliability.",
  },
  {
    icon: "/productivity.svg",
    title: "Innovation Drive",
    description:
      "Continuously investing in new technologies and processes to stay at the forefront of manufacturing.",
  },
  {
    icon: "/support.svg",
    title: "Customer Focus",
    description:
      "Building lasting partnerships through exceptional service, technical support, and customized solutions.",
  },
  {
    icon: "/manufacturing.svg",
    title: "Precision Engineering",
    description:
      "Leveraging decades of expertise to deliver products that meet exact specifications and performance requirements.",
  },
];

export const AboutValuesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding relative self-stretch w-full bg-white">
      <div className="flex flex-col container-responsive items-center gap-12 lg:gap-20 relative w-full">
        <div className="flex flex-col max-w-4xl items-center gap-4 relative w-full text-center">
          <div className="inline-flex items-center relative">
            <span className="font-heading-bold relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              Our Values
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 lg:gap-6 relative self-stretch w-full">
            <h2 className="font-heading mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative self-stretch text-[#01010a] [font-style:var(--heading-h2-font-style)] text-balance">
              The Principles That Guide Us
            </h2>

            <p className="font-body relative mx-auto font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] max-w-3xl">
              Our core values shape everything we do, from the products we
              manufacture to the relationships we build with our customers and
              partners.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative self-stretch w-full">
          {values.map((value, index) => (
            <Card
              key={index}
              className="flex-1 h-full border p-6 border-gray-100 shadow-md bg-slate-100 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="flex flex-col items-center gap-4 lg:gap-6 p-0 text-center">
                <Image
                  className="w-12 h-12 lg:w-16 lg:h-16"
                  alt={`${value.title} icon`}
                  src={value.icon}
                  width={64}
                  height={64}
                />

                <div className="flex flex-col items-center gap-3 lg:gap-4 relative self-stretch w-full">
                  <h4 className="font-subheading mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[length:var(--heading-h4-font-size)] text-center tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] relative self-stretch text-[#01010a] [font-style:var(--heading-h4-font-style)] text-balance">
                    {value.title}
                  </h4>

                  <p className="font-body relative self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {value.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
