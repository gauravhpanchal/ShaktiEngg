"use client";

import React, { useState, memo } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sendQuoteEmail, QuoteFormData } from "@/lib/email";
import toast from "react-hot-toast";

interface QuoteModalProps {
  children: React.ReactNode;
}

const QuoteModalComponent = ({ children }: QuoteModalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    productType: "",
    quantity: "",
    timeline: "",
    specifications: "",
    agreeToTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedData = {
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      phone: formData.phone.trim(),
      specifications: formData.specifications.trim(),
    };

    // Validate required fields
    if (!trimmedData.name) {
      toast.error("Please enter your full name");
      return;
    }

    if (!trimmedData.email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!trimmedData.productType) {
      toast.error("Please select a product type");
      return;
    }

    if (!trimmedData.quantity) {
      toast.error("Please select an estimated quantity");
      return;
    }

    if (!trimmedData.specifications) {
      toast.error("Please provide specifications and requirements");
      return;
    }

    if (!formData.agreeToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    setIsSubmitting(true);

    try {
      await sendQuoteEmail(trimmedData);
      toast.success(
        "Quote request submitted successfully! We'll get back to you within 24 hours."
      );
      setIsOpen(false);

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        productType: "",
        quantity: "",
        timeline: "",
        specifications: "",
        agreeToTerms: false,
      });
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast.error(
        "Failed to submit quote request. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    field: keyof QuoteFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto w-[calc(100vw-2rem)] mx-auto rounded-2xl sm:rounded-lg sm:mx-0 sm:w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <DialogHeader>
          <DialogTitle className="font-subheading font-[number:var(--heading-h4-font-weight)] text-[#01010a] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
            Request a Quote
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="quote-name"
                className="font-subheading font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)]"
              >
                Full Name *
              </Label>
              <Input
                id="quote-name"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className=" bg-[#01010a0d] rounded-xl border-transparent focus:border-[#e22023] focus:ring-[#e22023]"
                placeholder="Enter your full name"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="quote-email"
                className="font-subheading font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)]"
              >
                Email Address *
              </Label>
              <Input
                id="quote-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className=" bg-[#01010a0d] rounded-xl border-transparent focus:border-[#e22023] focus:ring-[#e22023]"
                placeholder="Enter your email"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="quote-company"
                className="font-subheading font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)]"
              >
                Company Name
              </Label>
              <Input
                id="quote-company"
                value={formData.company}
                type="text"
                required
                onChange={(e) => handleInputChange("company", e.target.value)}
                className=" bg-[#01010a0d] rounded-xl border-transparent focus:border-[#e22023] focus:ring-[#e22023]"
                placeholder="Enter company name"
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="quote-phone"
                className="font-subheading font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)]"
              >
                Phone Number
              </Label>
              <Input
                id="quote-phone"
                type="tel"
                value={formData.phone}
                required
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className=" bg-[#01010a0d] rounded-xl border-transparent focus:border-[#e22023] focus:ring-[#e22023]"
                placeholder="Enter phone number"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-subheading font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)]">
                Product Type *
              </Label>
              <Select
                required
                onValueChange={(value) =>
                  handleInputChange("productType", value)
                }
                disabled={isSubmitting}
              >
                <SelectTrigger className=" bg-[#01010a0d] rounded-xl border-transparent focus:border-[#e22023] focus:ring-[#e22023]">
                  <SelectValue placeholder="Select product type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="helical-geared-motors">
                    Helical Geared Motors
                  </SelectItem>
                  <SelectItem value="rotary-vibrators">
                    Rotary Vibrators
                  </SelectItem>
                  <SelectItem value="bump-jolt-machines">
                    Bump & Jolt Machines
                  </SelectItem>
                  <SelectItem value="bin-activators">Bin Activators</SelectItem>
                  <SelectItem value="electromagnetic-vibrator-feeder">
                    Electromagnetic Vibrator Feeder
                  </SelectItem>
                  <SelectItem value="sonzogni-camme-mechanical-indexers">
                    Sonzogni Camme Mechanical Indexers
                  </SelectItem>
                  <SelectItem value="enzfelder-screw-jacks">
                    Enzfelder Screw Jacks
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="font-subheading font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)]">
                Estimated Quantity *
              </Label>
              <Select
                required
                onValueChange={(value) => handleInputChange("quantity", value)}
                disabled={isSubmitting}
              >
                <SelectTrigger className=" bg-[#01010a0d] rounded-xl border-transparent focus:border-[#e22023] focus:ring-[#e22023]">
                  <SelectValue placeholder="Select quantity range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-100">1 - 100 pieces</SelectItem>
                  <SelectItem value="101-500">101 - 500 pieces</SelectItem>
                  <SelectItem value="501-1000">501 - 1,000 pieces</SelectItem>
                  <SelectItem value="1001-5000">
                    1,001 - 5,000 pieces
                  </SelectItem>
                  <SelectItem value="5000+">5,000+ pieces</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="font-subheading font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)]">
              Project Timeline
            </Label>
            <Select
              onValueChange={(value) => handleInputChange("timeline", value)}
              disabled={isSubmitting}
            >
              <SelectTrigger className=" bg-[#01010a0d] rounded-xl border-transparent focus:border-[#e22023] focus:ring-[#e22023]">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                <SelectItem value="3-4weeks">3-4 weeks</SelectItem>
                <SelectItem value="1-2months">1-2 months</SelectItem>
                <SelectItem value="3months+">3+ months</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="quote-specifications"
              className="font-subheading font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)]"
            >
              Specifications & Requirements *
            </Label>
            <Textarea
              id="quote-specifications"
              required
              value={formData.specifications}
              onChange={(e) =>
                handleInputChange("specifications", e.target.value)
              }
              placeholder="Please provide details about your products requirements, operating conditions, and any special requirements..."
              className="h-16 bg-[#01010a0d] rounded-xl border-transparent focus:border-[#e22023] focus:ring-[#e22023] resize-none"
              disabled={isSubmitting}
            />
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="quote-terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) =>
                handleInputChange("agreeToTerms", checked as boolean)
              }
              className="w-5 h-5 bg-[#01010a0d] rounded border-transparent mt-0.5"
              disabled={isSubmitting}
            />
            <Label
              htmlFor="quote-terms"
              className="font-legal font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[#01010a] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)] flex-1"
            >
              I agree to the Terms of Service and Privacy Policy, and consent to
              receive communications.
            </Label>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#01010a0d] rounded-[100px] border-b-4 border-[#01010a26] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#01010a] text-[length:var(--text-regular-medium-font-size)] hover:bg-[#01010a1a] transition-colors"
              disabled={isSubmitting}
            >
              <span className="font-cta">Cancel</span>
            </Button>
            <Button
              type="submit"
              disabled={!formData.agreeToTerms || isSubmitting}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#e22023] rounded-[100px] border-b-4 border-[#e8787a] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] hover:bg-[#e8787a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="font-cta">
                {isSubmitting ? "Submitting..." : "Submit Quote Request"}{" "}
              </span>
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const QuoteModal = memo(QuoteModalComponent);
QuoteModal.displayName = "QuoteModal";
