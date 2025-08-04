import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

// Contact information data for mapping
const contactMethods = [
  {
    icon: <MailIcon className="h-10 w-10 lg:h-12 lg:w-12" />,
    title: "Email",
    description:
      "Reach out to us for any questions, quotes, or technical support.",
    contact: "shaktiengr@gmail.com",
    href: "mailto:shaktiengr@gmail.com",
  },
  {
    icon: <PhoneIcon className="h-10 w-10 lg:h-12 lg:w-12" />,
    title: "Phone",
    description: "Call us for immediate assistance and technical consultation.",
    contact: "+91 9821034962",
    href: "tel:+919821034962",
  },
  {
    icon: <MapPinIcon className="h-10 w-10 lg:h-12 lg:w-12" />,
    title: "Office",
    description: "Visit us at our headquarters.",
    contact:
      "8F, New Empire I.E. (A), Kondivita Lane,J.B.Nagar, Andheri (E), Mumbai - 400059",
    href: "https://www.google.com/maps/dir//AF%2F8,+New+Empire+Estate,+Ram+Krishna+Mandir+Road,+near+Kondivita+Rd,+J+B,+J+B+Nagar,+Andheri+East,+Mumbai,+Maharashtra+400059/@19.1137008,72.7890161,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7c838e5555555:0xeb432b7d5cb1202d!2m2!1d72.8714178!2d19.1137191?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
  },
];

export const ContactFormSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding relative self-stretch w-full bg-[#f2f2f2]">
      <div className="flex flex-col container-responsive items-center gap-12 lg:gap-20 relative w-full">
        <div className="flex flex-col max-w-4xl items-center gap-4 relative w-full text-center">
          <div className="inline-flex items-center relative">
            <div className="font-heading-bold relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              Contact Us
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 lg:gap-6 relative self-stretch w-full">
            <h2 className="mt-[-1.00px] font-heading font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative self-stretch text-[#01010a] [font-style:var(--heading-h2-font-style)] text-balance">
              Get in Touch
            </h2>

            <p className="relative mx-auto font-body font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] max-w-3xl">
              We&apos;re here to assist you with your Industrial needs. Contact
              us for quotes, technical support, or any questions about our
              products and services.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 lg:gap-16 relative self-stretch w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 items-start relative self-stretch w-full">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="flex-1 border-none shadow-none bg-white p-6 h-full"
              >
                <CardContent className="flex flex-col h-full items-center justify-between gap-4 lg:gap-6 p-6 lg:p-8 text-center">
                  <div className="text-[#e22023]">{method.icon}</div>

                  <div className="flex flex-col items-center gap-4 lg:gap-6 relative self-stretch w-full">
                    <div className="flex flex-col items-center gap-3 lg:gap-4 relative self-stretch w-full">
                      <h4 className="font-heading mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[length:var(--heading-h4-font-size)] text-center tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] relative self-stretch text-[#01010a] [font-style:var(--heading-h4-font-style)]">
                        {method.title}
                      </h4>

                      <p className="relative font-subheading self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {method.description}
                      </p>
                    </div>

                    <a
                      href={method.href}
                      target="_blank"
                      className="relative self-stretch font-text-regular-link font-[number:var(--text-regular-link-font-weight)] text-[#01010a] text-[length:var(--text-regular-link-font-size)] text-center tracking-[var(--text-regular-link-letter-spacing)] leading-[var(--text-regular-link-line-height)] underline [font-style:var(--text-regular-link-font-style)] hover:no-underline transition-all break-words"
                    >
                      {method.contact}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
