import React from "react";
import Image from "next/image";

export const AboutStorySection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding relative self-stretch w-full bg-white">
      <div className="flex-col container-responsive items-start gap-12 lg:gap-20 w-full flex relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative self-stretch w-full">
          <div className="flex flex-col items-start gap-6 lg:gap-8 relative flex-1 order-2 lg:order-1">
            <div className="flex flex-col items-start gap-6 lg:gap-8 relative self-stretch w-full">
              <div className="gap-4 self-stretch w-full flex flex-col items-start">
                <span className="font-heading-bold relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                  Our Story
                </span>

                <div className=" flex flex-col items-start gap-4 lg:gap-6 relative self-stretch w-full">
                  <h2 className="font-heading relative self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#01010a] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] text-balance">
                    Our Journey of Innovation and Growth
                  </h2>

                  <div className="flex flex-col gap-4 lg:gap-6 relative self-stretch w-full">
                    <p className="font-body relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      Shakti Engineers was founded in 1978 by Late Shri. G. S.
                      Ghorpade, a visionary engineer driven by a passion for
                      innovation and self-reliance. A graduate in Electrical
                      Engineering from M.S. University of Baroda (1958), Shri
                      Ghorpade began his professional journey with Kirloskar
                      Brothers Limited, Kirloskarvadi, where he worked in their
                      Tool and Industrial Engineering Division for over two
                      years, gaining valuable industry experience.
                    </p>

                    <p className="font-body relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      In 1962, he joined Industrial Electrical Equipments Co. as
                      a Partner, where he played a pivotal role in developing
                      numerous special-purpose electric motors, addressing niche
                      industrial requirements and building a reputation for
                      technical ingenuity. However, driven by an entrepreneurial
                      spirit and a desire for more dynamic challenges, he
                      transitioned to his desire for meaningful, hands-on
                      engineering work gave birth to Shakti Engineers. Since
                      then, the company has been at the forefront of import
                      substitution, development, and manufacturing of critical
                      products like Geared Motors, Electrical Rotary Vibrators,
                      and other engineered solutions for diverse industrial
                      applications.
                    </p>

                    <p className="font-body relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      Mr. G.S.GHORPADE passed away in 2022 !!! He attended
                      office till his last day !!! Today, his legacies are
                      carried forward by his Son and Grandson Shrikant
                      G.Ghorpade and Mayuresh S Ghorpade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative order-1 lg:order-2 w-full">
            <Image
              className="w-full h-64 sm:h-80 lg:h-[640px] object-cover rounded-lg"
              alt="Historical view of Shakti Engineers manufacturing facility showing evolution with motor systems and gear technology"
              src="/factory-2.jpeg"
              width={1200}
              height={800}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              priority={true}
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>
      </div>
    </section>
  );
};
