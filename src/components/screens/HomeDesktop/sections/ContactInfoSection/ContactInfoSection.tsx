"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactEmail, ContactFormData } from "@/lib/email";
import toast from "react-hot-toast";

export const ContactInfoSection = (): JSX.Element => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedData = {
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    // Validate required fields
    if (!trimmedData.name) {
      toast.error("Please enter your name");
      return;
    }

    if (!trimmedData.email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!trimmedData.company) {
      toast.error("Please enter your company name");
      return;
    }
    if (!trimmedData.phone) {
      toast.error("Please enter your phone number");
      return;
    }

    if (!trimmedData.message) {
      toast.error("Please provide project details");
      return;
    }

    if (!agreeToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmail(trimmedData);
      toast.success("Message sent successfully! We'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
      setAgreeToTerms(false);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error(
        "Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding relative self-stretch w-full bg-white">
      <div className="flex-col container-responsive items-start gap-12 lg:gap-20 w-full flex relative">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 relative self-stretch w-full">
          <div className="flex-1 grow relative order-2 lg:order-1">
            <Image
              className="w-full h-64 sm:h-96 lg:h-[734px] object-cover rounded-lg"
              alt="Modern manufacturing facility with advanced product production equipment, motors, and gear systems"
              src="/hero-5.png"
              width={600}
              height={734}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>

          <div className="flex flex-col items-start gap-6 lg:gap-8 relative flex-1 grow order-1 lg:order-2">
            <div className="gap-4 self-stretch w-full flex flex-col items-start">
              <div className="inline-flex items-center self-stretch">
                <span className="font-heading-bold font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                  Connect
                </span>
              </div>

              <div className="flex flex-col items-start gap-4 lg:gap-6 self-stretch w-full">
                <h2 className="self-stretch font-subheading font-[number:var(--heading-h2-font-weight)] text-[#01010a] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] text-balance">
                  Request a Quote
                </h2>

                <p className="self-stretch font-body font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  We&#39;d love to hear from you. Get in touch today for a
                  custom quote or technical consultation!
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start gap-4 lg:gap-6 self-stretch w-full"
            >
              <div className="flex flex-col items-start gap-2 self-stretch w-full">
                <label
                  htmlFor="name"
                  className="self-stretch font-specs-medium font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                >
                  Name *
                </label>
                <Input
                  id="name"
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="self-stretch bg-[#01010a0d] rounded-xl border-transparent focus:border-[#e22023] focus:ring-[#e22023]"
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col items-start gap-2 self-stretch w-full">
                <label
                  htmlFor="email"
                  className="self-stretch font-specs-medium font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                >
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="self-stretch bg-[#01010a0d] rounded-xl border-transparent focus:border-[#e22023] focus:ring-[#e22023]"
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col items-start gap-2 self-stretch w-full">
                <label
                  htmlFor="company"
                  className="self-stretch font-specs-medium font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                >
                  Company
                </label>
                <Input
                  id="company"
                  required
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="self-stretch bg-[#01010a0d] rounded-xl border-transparent focus:border-[#e22023] focus:ring-[#e22023]"
                  placeholder="Enter your company name"
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch w-full">
                <label
                  htmlFor="phone"
                  className="self-stretch font-specs-medium font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                >
                  Contact No
                </label>
                <Input
                  id="phone"
                  required
                  type="text"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="self-stretch bg-[#01010a0d] rounded-xl border-transparent focus:border-[#e22023] focus:ring-[#e22023]"
                  placeholder="Enter your contact number"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col items-start gap-2 self-stretch w-full">
                <label
                  htmlFor="message"
                  className="self-stretch font-specs-medium font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                >
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  required
                  typeof="text"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your product requirements, specifications, quantities, and timeline..."
                  className="h-32 lg:h-[100px] self-stretch bg-[#01010a0d] rounded-xl border-transparent font-text-regular-normal text-[#01010a99] focus:border-[#e22023] focus:ring-[#e22023] resize-none"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex items-start gap-3 pb-2 lg:pb-4">
                <Checkbox
                  id="terms"
                  checked={agreeToTerms}
                  onCheckedChange={(checked) =>
                    setAgreeToTerms(checked as boolean)
                  }
                  className="w-5 h-5 bg-[#01010a0d] rounded border-transparent mt-0.5"
                  disabled={isSubmitting}
                />
                <label
                  htmlFor="terms"
                  className="font-text-small-normal font-specs font-[number:var(--text-small-normal-font-weight)] text-[#01010a] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)] flex-1"
                >
                  I agree to the Terms of Service and Privacy Policy, and
                  consent to receive communications about product manufacturing
                  services.
                </label>
              </div>

              <Button
                type="submit"
                disabled={!agreeToTerms || isSubmitting}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#e22023] rounded-[100px] border-b-4 border-[#e8787a] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#e8787a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="font-cta">
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
