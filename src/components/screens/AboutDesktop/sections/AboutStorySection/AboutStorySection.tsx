import React from "react";
import Image from "next/image";

export const AboutStorySection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding relative self-stretch w-full bg-[#f2f2f2]">
      <div className="flex-col container-responsive items-start gap-12 lg:gap-20 w-full flex relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative self-stretch w-full">
          <div className="flex flex-col items-start gap-6 lg:gap-8 relative flex-1 order-2 lg:order-1">
            <div className="flex flex-col items-start gap-6 lg:gap-8 relative self-stretch w-full">
              <div className="gap-4 self-stretch w-full flex flex-col items-start">
                <span className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                  Our Story
                </span>

                <div className="flex flex-col items-start gap-4 lg:gap-6 relative self-stretch w-full">
                  <h2 className="relative self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#01010a] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] text-balance">
                    Building Excellence Since Day One
                  </h2>

                  <div className="flex flex-col gap-4 lg:gap-6 relative self-stretch w-full">
                    <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      Founded with a vision to revolutionize spring manufacturing, Spring Solutions began as a small workshop with big dreams. Our founders recognized the need for precision-engineered springs that could meet the demanding requirements of modern industry.
                    </p>

                    <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      Over the decades, we've grown from a local manufacturer to a globally recognized leader in spring technology. Our commitment to innovation, quality, and customer satisfaction has remained unwavering throughout our journey.
                    </p>

                    <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      Today, we continue to push the boundaries of what's possible in spring manufacturing, serving industries from automotive to aerospace with the same dedication to excellence that has defined us from the beginning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative order-1 lg:order-2 w-full">
            <Image
              className="w-full h-64 sm:h-80 lg:h-[640px] object-cover rounded-lg"
              alt="Historical view of Spring Solutions manufacturing facility showing evolution with motor systems and gear technology"
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={640}
              height={640}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};