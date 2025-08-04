"use client";

import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import testimonialsContent from "@/data/testimonials-content.json";

// Extract testimonials data from JSON
const { testimonials } = testimonialsContent;

export const CustomerTestimonialsSection = (): JSX.Element => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="bg-white section-padding px-4 md:px-8 lg:px-16 w-full">
      <div className="container-responsive mx-auto flex flex-col items-center gap-12 lg:gap-20">
        {/* Section Header */}
        {/* <div className="text-center max-w-3xl">
          <h2 className="font-heading-bold text-[#01010a] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] mb-4">
            {testimonials.sectionTitle}
          </h2>
          <p className="font-subheading text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)]">
            {testimonials.sectionSubtitle}
          </p>
        </div> */}

        {/* Testimonials Carousel */}
        <div className="w-full max-w-4xl">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.reviews.map((review) => (
                <CarouselItem key={review.id}>
                  <Card className="border-none shadow-none bg-transparent w-full">
                    <CardContent className="flex flex-col items-center gap-6 lg:gap-8 p-0 text-center">
                      {/* Star Rating */}
                      <Image
                        className="h-auto w-auto"
                        alt="Five star customer rating"
                        src="/stars.svg"
                        width={120}
                        height={24}
                      />

                      {/* Quote */}
                      <blockquote className="font-body text-[#01010a] text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)] text-balance">
                        "{review.quote}"
                      </blockquote>

                      {/* Customer Info */}
                      <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-5">
                        <Avatar className="w-12 h-12 lg:w-14 lg:h-14">
                          <AvatarImage
                            src={review.customer.avatar}
                            alt={`${review.customer.name} - Customer testimonial`}
                          />
                          <AvatarFallback>
                            {review.customer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col items-center sm:items-start">
                          <span className="font-heading-bold font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[#01010a] text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)]">
                            {review.customer.name}
                          </span>
                          <span className="font-subheading font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)]">
                            {review.customer.position}
                          </span>
                          <span className="font-subheading font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#666666] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)]">
                            {review.customer.company}
                          </span>
                        </div>

                        {/* <Separator
                          orientation="vertical"
                          className="h-12 lg:h-[61px] hidden sm:block"
                        />

                        <Image
                          className="w-24 h-10 lg:w-[120px] lg:h-12"
                          alt={`${review.customer.company} company logo`}
                          src={review.companyLogo}
                          width={120}
                          height={48}
                        /> */}
                      </div>
                    </CardContent>
                  </Card>
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
