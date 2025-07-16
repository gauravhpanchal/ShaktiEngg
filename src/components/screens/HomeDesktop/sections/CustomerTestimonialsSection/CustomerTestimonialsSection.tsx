import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Testimonial data for easy maintenance
const testimonialData = {
  stars: "/stars.svg",
  quote:
    "The quality of products we received exceeded our expectations, enhancing our production efficiency significantly. Their technical expertise and customer service are outstanding!",
  customer: {
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
    name: "John Doe",
    position: "Manufacturing Manager, Acme Corp",
  },
  companyLogo: "/placeholder-logo.svg",
};

export const CustomerTestimonialsSection = (): JSX.Element => {
  return (
    <section className="bg-[#f2f2f2] section-padding px-4 md:px-8 lg:px-16 w-full">
      <div className="container-responsive mx-auto flex flex-col items-center gap-12 lg:gap-20">
        <Card className="border-none shadow-none bg-transparent max-w-4xl w-full">
          <CardContent className="flex flex-col items-center gap-6 lg:gap-8 p-0 text-center">
            <Image
              className="h-auto w-auto"
              alt="Five star customer rating"
              src={testimonialData.stars}
              width={120}
              height={24}
            />

            <blockquote className="font-body text-[#01010a] text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)] text-balance">
              "{testimonialData.quote}"
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-5">
              <Avatar className="w-12 h-12 lg:w-14 lg:h-14">
                <AvatarImage
                  src={testimonialData.customer.avatar}
                  alt={`${testimonialData.customer.name} - Customer testimonial`}
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-center sm:items-start">
                <span className="font-heading-bold font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[#01010a] text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)]">
                  {testimonialData.customer.name}
                </span>
                <span className="font-subheading font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)]">
                  {testimonialData.customer.position}
                </span>
              </div>

              <Separator
                orientation="vertical"
                className="h-12 lg:h-[61px] hidden sm:block"
              />

              <Image
                className="w-24 h-10 lg:w-[120px] lg:h-12"
                alt="Acme Corp company logo"
                src={testimonialData.companyLogo}
                width={120}
                height={48}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
