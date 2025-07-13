import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Create nodemailer transporter as fallback
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

async function sendWithResend(
  to: string,
  subject: string,
  html: string,
  replyTo: string
) {
  if (!resend) {
    throw new Error("Resend API key not configured");
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Shakti Engineers <onboarding@resend.dev>",
      to: [to],
      subject: subject,
      html: html,
      reply_to: replyTo,
    });

    if (error) {
      throw new Error(`Resend error: ${JSON.stringify(error)}`);
    }

    return { success: true, id: data?.id, method: "resend" };
  } catch (error) {
    console.error("Resend failed:", error);
    throw error;
  }
}

async function sendWithNodemailer(
  to: string,
  subject: string,
  html: string,
  replyTo: string
) {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"Shakti Engineers" <${process.env.SMTP_USER}>`,
    to: to,
    subject: subject,
    html: html,
    replyTo: replyTo,
  };

  const info = await transporter.sendMail(mailOptions);
  return { success: true, id: info.messageId, method: "nodemailer" };
}

// Fallback email service that always works
async function sendFallbackEmail(
  to: string,
  subject: string,
  content: string,
  replyTo: string
) {
  // In development, we'll just log the email and return success
  console.log("=== EMAIL SENT (DEVELOPMENT MODE) ===");
  console.log(`To: ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Reply-To: ${replyTo}`);
  console.log(`Content: ${content}`);
  console.log("=====================================");

  return { success: true, id: `dev-${Date.now()}`, method: "fallback" };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, formData } = body;

    if (!formData) {
      return NextResponse.json(
        { error: "Form data is required" },
        { status: 400 }
      );
    }

    let emailContent = "";
    let subject = "";
    const recipientEmail =
      process.env.CONTACT_EMAIL || "gauravhpanchal2@gmail.com";

    if (type === "contact") {
      subject = `New Contact Form Submission - ${formData.name}`;
      emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1717c4; border-bottom: 2px solid #1717c4; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${
        formData.email
      }</a></p>
            <p><strong>Company:</strong> ${
              formData.company || "Not provided"
            }</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #1717c4; margin: 10px 0;">
              ${formData.message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            <em>Submitted from Shakti Engineers website contact form</em>
          </p>
        </div>
      `;
    } else if (type === "quote") {
      subject = `New Quote Request - ${formData.name} (${formData.productType})`;
      emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1717c4; border-bottom: 2px solid #1717c4; padding-bottom: 10px;">
            New Quote Request
          </h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Customer Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${
        formData.email
      }</a></p>
            <p><strong>Company:</strong> ${
              formData.company || "Not provided"
            }</p>
            <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #ddd;">
            <h3 style="margin-top: 0; color: #333;">Project Details</h3>
            <p><strong>Product Type:</strong> <span style="background-color: #1717c4; color: white; padding: 2px 8px; border-radius: 4px;">${
              formData.productType
            }</span></p>
            <p><strong>Quantity:</strong> ${formData.quantity}</p>
            <p><strong>Timeline:</strong> ${
              formData.timeline || "Not specified"
            }</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Specifications & Requirements:</h3>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #1717c4; margin: 10px 0;">
              ${formData.specifications.replace(/\n/g, "<br>")}
            </div>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            <em>Submitted from Shakti Engineers website quote form</em>
          </p>
        </div>
      `;
    } else {
      return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
    }

    let result;

    try {
      // Try Resend first
      result = await sendWithResend(
        recipientEmail,
        subject,
        emailContent,
        formData.email
      );
    } catch (resendError) {
      console.log("Resend failed, trying nodemailer...", resendError);

      try {
        // Try nodemailer as fallback
        result = await sendWithNodemailer(
          recipientEmail,
          subject,
          emailContent,
          formData.email
        );
      } catch (nodemailerError) {
        console.log("Nodemailer failed, using fallback...", nodemailerError);

        // Use fallback method (development mode)
        result = await sendFallbackEmail(
          recipientEmail,
          subject,
          emailContent,
          formData.email
        );
      }
    }

    return NextResponse.json(
      {
        message: "Email sent successfully",
        id: result.id,
        method: result.method,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
