import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteModal } from "@/components/QuoteModal";
import Link from "next/link";

export const ProductsCTASection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding relative self-stretch w-full bg-[#f2f2f2]">
      <div className="flex flex-col container-responsive items-center gap-12 lg:gap-20 relative w-full">
        <Card className="w-full border-none shadow-lg bg-white">
          <CardContent className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 lg:p-12">
            <div className="flex flex-col items-start gap-6 lg:gap-8 flex-1">
              <div className="flex flex-col items-start gap-4 lg:gap-6 w-full">
                <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[#01010a] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] text-balance">
                  Need a Custom Quote?
                </h2>

                <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  Our engineering team specializes in creating custom solutions
                  tailored to your exact specifications. From prototype to
                  production, we'll work with you to develop the perfect for
                  your application.
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#e22023] rounded-full"></span>
                    <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      Free engineering consultation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#e22023] rounded-full"></span>
                    <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      Rapid prototyping available
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#e22023] rounded-full"></span>
                    <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      Competitive pricing for all volumes
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6">
                <QuoteModal>
                  <Button className="w-full sm:w-auto px-6 py-2.5 bg-[#e22023] rounded-[100px] border-b-4 border-[#e8787a] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#e8787a] transition-colors">
                    Start Custom Project
                  </Button>
                </QuoteModal>

                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#01010a0d] rounded-[100px] border-b-4 border-[#01010a26] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#01010a] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#01010a1a] transition-colors"
                >
                  Download Catalog
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 lg:gap-6 bg-[#f2f2f2] p-6 lg:p-8 rounded-lg">
              <h3 className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[#01010a] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)] text-center">
                Quick Quote Request
              </h3>

              <div className="flex flex-col gap-3 text-center">
                <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  Get a quote in 24 hours or less
                </p>

                <div className="flex flex-col gap-2 text-sm">
                  <span className="font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[#01010a] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]">
                    📧 shaktiengr@gmail.com
                  </span>
                  <span className="font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[#01010a] text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]">
                    📞 +91 9821034962
                  </span>
                </div>
              </div>

              <QuoteModal>
                <Button className="w-full px-6 py-2.5 bg-[#e22023] rounded-[100px] border-b-4 border-[#e8787a] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#e8787a] transition-colors">
                  Get Quote Now
                </Button>
              </QuoteModal>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
