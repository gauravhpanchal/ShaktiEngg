export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  productType: string;
  quantity: string;
  timeline?: string;
  specifications: string;
  agreeToTerms: boolean;
}

export async function sendContactEmail(formData: ContactFormData) {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "contact",
      formData,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error("Email API error:", error);
    throw new Error(error.error || "Failed to send email");
  }

  const result = await response.json();
  console.log("Email sent successfully:", result);
  return result;
}

export async function sendQuoteEmail(formData: QuoteFormData) {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "quote",
      formData,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error("Email API error:", error);
    throw new Error(error.error || "Failed to send email");
  }

  const result = await response.json();
  console.log("Quote email sent successfully:", result);
  return result;
}
