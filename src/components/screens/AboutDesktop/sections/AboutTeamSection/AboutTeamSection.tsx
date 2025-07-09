import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "Chief Executive Officer",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Leading Spring Solutions with over 20 years of manufacturing industry experience.",
  },
  {
    name: "Michael Chen",
    position: "Head of Engineering",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Expert in spring design and manufacturing processes with advanced engineering background.",
  },
  {
    name: "Emily Rodriguez",
    position: "Quality Assurance Director",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Ensuring the highest quality standards in every spring we manufacture.",
  },
  {
    name: "David Thompson",
    position: "Operations Manager",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Optimizing production efficiency and managing our state-of-the-art manufacturing facilities.",
  },
];

export const AboutTeamSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding relative self-stretch w-full bg-white">
      <div className="flex flex-col container-responsive items-center gap-12 lg:gap-20 relative w-full">
        <div className="flex flex-col max-w-4xl items-center gap-4 relative w-full text-center">
          <div className="inline-flex items-center relative">
            <span className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                Our Team
              </span>
          </div>

          <div className="flex flex-col items-center gap-4 lg:gap-6 relative self-stretch w-full">
            <h2 className="mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative self-stretch text-[#01010a] [font-style:var(--heading-h2-font-style)] text-balance">
              Meet the Experts Behind Our Success
            </h2>

            <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] max-w-3xl">
              Our experienced leadership team brings decades of expertise in manufacturing, engineering, and quality assurance to deliver exceptional spring solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative self-stretch w-full">
          {teamMembers.map((member, index) => (
            <Card key={index} className="flex-1 border-none shadow-none bg-transparent">
              <CardContent className="flex flex-col items-center gap-4 lg:gap-6 p-0 text-center">
                <Image
                  className="w-full h-64 sm:h-80 lg:h-[320px] object-cover rounded-lg"
                  alt={`${member.name} - ${member.position} at Spring Solutions`}
                  src={member.image}
                  width={320}
                  height={320}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                <div className="flex flex-col items-center gap-3 lg:gap-4 relative self-stretch w-full">
                  <div className="flex flex-col items-center gap-1 relative self-stretch w-full">
                    <h4 className="mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[length:var(--heading-h4-font-size)] text-center tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] relative self-stretch text-[#01010a] [font-style:var(--heading-h4-font-style)]">
                      {member.name}
                    </h4>

                    <span className="relative self-stretch font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[#1717c4] text-[length:var(--text-regular-semi-bold-font-size)] text-center tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                      {member.position}
                    </span>
                  </div>

                  <p className="relative self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {member.description}
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