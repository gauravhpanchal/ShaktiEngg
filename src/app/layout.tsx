import type { Metadata } from "next";
import { Archivo, Lexend_Deca } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toast";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend-deca",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Spring Solutions - Precision Springs Manufacturing",
    template: "%s | Spring Solutions"
  },
  description: "Leading manufacturer of precision springs for industrial applications. Custom compression, extension, and torsion springs with expert engineering and quality assurance.",
  keywords: [
    "spring manufacturing",
    "precision springs",
    "compression springs",
    "extension springs",
    "torsion springs",
    "industrial springs",
    "custom springs",
    "wire forms",
    "spring engineering"
  ],
  authors: [{ name: "Spring Solutions" }],
  creator: "Spring Solutions",
  publisher: "Spring Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://spring-solutions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spring-solutions.com",
    title: "Spring Solutions - Precision Springs Manufacturing",
    description: "Leading manufacturer of precision springs for industrial applications. Custom compression, extension, and torsion springs with expert engineering.",
    siteName: "Spring Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spring Solutions - Precision Springs Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spring Solutions - Precision Springs Manufacturing",
    description: "Leading manufacturer of precision springs for industrial applications.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${lexendDeca.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}