import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ContactMapSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-20 border-b-2 section-padding relative self-stretch w-full bg-[#f2f2f2]">
      <div className="flex flex-col container-responsive items-center gap-8 sm:gap-12 lg:gap-20 relative w-full">
        <div className="flex flex-col max-w-4xl items-center gap-4 sm:gap-6 relative w-full text-center px-4 sm:px-0">
          <div className="inline-flex items-center relative">
            <span className="font-heading-bold relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              Visit Us
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-6 relative self-stretch w-full">
            <h2 className="font-subheading mt-[-1.00px] font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative self-stretch text-[#01010a] [font-style:var(--heading-h2-font-style)] text-balance">
              Our Location
            </h2>

            <p className="font-body relative mx-auto font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] max-w-3xl text-sm sm:text-base">
              Visit our state-of-the-art manufacturing facility to see our
              production process firsthand and meet our expert team.
            </p>
          </div>
        </div>

        <Card className="w-full border-none shadow-none bg-white rounded-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] bg-[#f2f2f2] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8617704252088!2d72.8714178!3d19.1137191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c838e5555555%3A0xeb432b7d5cb1202d!2sShakti%20Engineers!5e0!3m2!1sen!2sin!4v1752398030915!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Shakti Engineers Location Map"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 relative self-stretch w-full">
          <Card className="flex-1 h-full border border-gray-100 shadow-md bg-slate-100 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <CardContent className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 lg:p-8 text-center">
              <h4 className="font-subheading font-[number:var(--heading-h4-font-weight)] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] text-[#01010a] [font-style:var(--heading-h4-font-style)]">
                Business Hours
              </h4>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <p className="font-body font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] text-sm sm:text-base">
                  Monday - Friday: 8:00 AM - 6:00 PM
                </p>
                <p className="font-body font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] text-sm sm:text-base">
                  Saturday: 9:00 AM - 2:00 PM
                </p>
                <p className="font-body font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] text-sm sm:text-base">
                  Sunday: Closed
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1 h-full border border-gray-100 shadow-md bg-slate-100 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <CardContent className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 lg:p-8 text-center">
              <h4 className="font-subheading font-[number:var(--heading-h4-font-weight)] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] text-[#01010a] [font-style:var(--heading-h4-font-style)]">
                Parking
              </h4>
              <p className="font-body font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] text-sm sm:text-base">
                Free parking available on-site for all visitors and customers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
