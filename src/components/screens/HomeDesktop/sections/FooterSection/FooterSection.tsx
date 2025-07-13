import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

// Data for footer links
const companyLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Careers", href: "/" },
];

const supportLinks = [
  { name: "FAQs", href: "/faq" },
  { name: "Support", href: "/support" },
  // { name: "Testimonials", href: "/testimonials" },
  // { name: "Privacy Policy", href: "/privacy" },
  // { name: "Terms of Use", href: "/terms" },
];

const bottomLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const socialIcons = [
  {
    icon: <FacebookIcon className="w-5 h-5 lg:w-6 lg:h-6" />,
    alt: "Facebook",
    href: "https://facebook.com",
  },
  {
    icon: <InstagramIcon className="w-5 h-5 lg:w-6 lg:h-6" />,
    alt: "Instagram",
    href: "https://instagram.com",
  },
  {
    icon: <TwitterIcon className="w-5 h-5 lg:w-6 lg:h-6" />,
    alt: "X (Twitter)",
    href: "https://twitter.com",
  },
  {
    icon: <LinkedinIcon className="w-5 h-5 lg:w-6 lg:h-6" />,
    alt: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: <YoutubeIcon className="w-5 h-5 lg:w-6 lg:h-6" />,
    alt: "YouTube",
    href: "https://youtube.com",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center gap-6 lg:gap-8 px-4 sm:px-8 lg:px-16 py-12 lg:py-20 self-stretch w-full bg-[#f2f2f2]">
      <div className="flex-col container-responsive items-start gap-12 lg:gap-20 w-full flex">
        <div className="flex-col items-start gap-6 lg:gap-8 flex self-stretch w-full">
          <Card className="w-full border-0 shadow-none bg-transparent">
            <CardContent className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 p-6 lg:p-12">
              <div className="flex-col items-start gap-6 lg:gap-8 flex-1 grow flex">
                <Image
                  className="w-auto h-8 aspect-auto lg:w-auto lg:h-12"
                  alt="Shakti Engineers"
                  src="/logo.png"
                  width={84}
                  height={36}
                />

                <div className="flex flex-col items-start gap-4 lg:gap-6 self-stretch w-full">
                  <div className="flex flex-col items-start gap-1 self-stretch w-full">
                    <div className="self-stretch mt-[-1.00px] font-text-small-semi-bold text-[#01010a] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)]">
                      Address:
                    </div>

                    <div className="self-stretch font-text-small-normal text-[#01010a] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)]">
                      8F, New Empire I.E. (A), Kondivita Lane,J.B.Nagar, Andheri
                      (E), Mumbai - 400059
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-1 self-stretch w-full">
                    <div className="self-stretch mt-[-1.00px] font-text-small-semi-bold text-[#01010a] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)]">
                      Contact:
                    </div>

                    <div className="flex flex-col items-start self-stretch w-full">
                      <a
                        href="tel:1800123456"
                        className="self-stretch mt-[-1.00px] font-text-small-link text-[#01010a] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline hover:no-underline transition-all"
                      >
                        +91 9821034962
                      </a>

                      <a
                        href="mailto:shaktiengr@gmail.com"
                        className="self-stretch font-text-small-link text-[#01010a] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline hover:no-underline transition-all"
                      >
                        shaktiengr@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  {socialIcons.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={`Follow us on ${social.alt}`}
                      className="text-[#01010a] hover:text-[#e22023] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="max-w-full lg:max-w-[400px] items-start gap-6 lg:gap-8 flex-1 grow flex flex-col sm:flex-row lg:flex-row">
                <div className="flex flex-col items-start flex-1 grow">
                  <h3 className="font-text-small-semi-bold text-[#01010a] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] mb-3 lg:mb-4">
                    Company
                  </h3>
                  {companyLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-start px-4 py-2 self-stretch w-full hover:bg-[#01010a0d] rounded transition-colors"
                    >
                      <div className="flex-1 mt-[-1.00px] font-text-small-semi-bold text-[#01010a] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)]">
                        {link.name}
                      </div>
                    </a>
                  ))}
                </div>

                <div className="flex flex-col items-start flex-1 grow">
                  <h3 className="font-text-small-semi-bold text-[#01010a] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] mb-3 lg:mb-4">
                    Support
                  </h3>
                  {supportLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-start px-4 py-2 self-stretch w-full hover:bg-[#01010a0d] rounded transition-colors"
                    >
                      <div className="flex-1 mt-[-1.00px] font-text-small-semi-bold text-[#01010a] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)]">
                        {link.name}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-start gap-6 lg:gap-8 self-stretch w-full">
            <div className="justify-between flex flex-col sm:flex-row items-start sm:items-center gap-4 self-stretch w-full">
              <div className="w-fit mt-[-1.00px] font-text-small-normal text-[#01010a] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap">
                © 2025 Shakti Engineers. All rights reserved.
              </div>

              <div className="flex flex-wrap items-start gap-4 lg:gap-6">
                {bottomLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="w-fit mt-[-1.00px] font-text-small-link text-[#01010a] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap hover:no-underline transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
