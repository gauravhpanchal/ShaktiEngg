import type { Metadata } from "next";
import {
  Archivo,
  Lexend_Deca,
  Manrope,
  IBM_Plex_Sans,
  Montserrat,
  Inter,
  Poppins,
  Space_Grotesk,
  Roboto,
} from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toast";
import { NavigationBarSection } from "@/components/screens/HomeDesktop/sections/NavigationBarSection";
import { FooterSection } from "@/components/screens/HomeDesktop/sections/FooterSection";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

// Main Headings (H1, H2) - Clean, modern, slightly geometric
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Subheadings (H3, H4) - Technical, balanced tone
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

// Navigation Tabs - Neutral and highly readable
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Body Text - Clean and versatile for long-form reading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// CTAs (Buttons, Links) - Slightly rounded, grabs attention
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Product Specs / Labels - Good for numeric or tabular info
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600"],
  display: "swap",
});

// Footnotes / Legal - Neutral and low-contrast
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Shakti Engineers - Precision Engineering Solutions for Industrial Excellence",
    template: "%s | Shakti Engineers",
  },
  description:
    "Shakti Engineers delivers helical geared motors, rotary vibrators, testing machines, bin activators, and vibro separators engineered for maximum performance across pharmaceutical, steel, chemical, food processing, and manufacturing industries. Custom compression, extension, and torsion springs with expert engineering and quality assurance.",
  keywords: [
    "Shakti Engineers",
    "precision engineering",
    "industrial solutions",
    "helical geared motors",
    "rotary vibrators",
    "testing machines",
    "bin activators",
    "vibro separators",
    "pharmaceutical equipment",
    "chemical processing equipment",
    "food processing machinery",
    "manufacturing equipment",
    "industrial excellence",
    "engineering solutions",
    "industrial automation",
    "quality assurance",
    "custom engineering",
    "industrial performance",
  ],
  authors: [{ name: "Shakti Engineers" }],
  creator: "Shakti Engineers",
  publisher: "Shakti Engineers",
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
    title:
      "Shakti Engineers - Precision Engineering Solutions for Industrial Excellence",
    description:
      "Shakti Engineers delivers helical geared motors, rotary vibrators, testing machines, bin activators, and vibro separators engineered for maximum performance across pharmaceutical, steel, chemical, food processing, and manufacturing industries. Custom compression, extension, and torsion springs with expert engineering.",
    siteName: "Shakti Engineers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shakti Engineers - Precision Engineering Solutions for Industrial Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Shakti Engineers - Precision Engineering Solutions for Industrial Excellence",
    description:
      "Shakti Engineers delivers helical geared motors, rotary vibrators, testing machines, bin activators, and vibro separators engineered for maximum performance across pharmaceutical, steel, chemical, food processing, and manufacturing industries.",
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
    <html
      lang="en"
      className={`
        ${archivo.variable}
        ${lexendDeca.variable}
        ${manrope.variable}
        ${ibmPlexSans.variable}
        ${montserrat.variable}
        ${inter.variable}
        ${poppins.variable}
        ${spaceGrotesk.variable}
        ${roboto.variable}
      `}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        <NavigationBarSection />
        <main>{children}</main>
        <SpeedInsights />
        <FooterSection />
        <Toaster />
      </body>
    </html>
  );
}
