"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteModal } from "@/components/QuoteModal";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * DYNAMIC PRODUCTS CATALOG SECTION
 *
 * This component displays all products in a dynamic grid layout.
 * The layout automatically adapts to any number of products in the array.
 *
 * TO ADD NEW PRODUCTS:
 * 1. Add your product object to the 'products' array below
 * 2. Include all required fields: id, name, slug, category, description, features, applications, image
 * 3. The component will automatically display the new product in the grid
 *
 * AUTOMATIC FEATURES:
 * - Dynamic grid layout (adapts to any number of products)
 * - Responsive design (carousel on mobile, grid on desktop)
 * - Consistent product card styling
 * - Auto-generated links to individual product pages
 *
 * NO LAYOUT CHANGES NEEDED when adding new products!
 */

const products = [
  // --- NEW PRODUCT: SONZOGNI CAMME INDEXERS ---
  {
    id: 6,
    slug: "sonzogni-camme-mechanical-indexers",
    name: "Sonzogni Camme Mechanical Indexers",
    category: "Automation Components",
    description:
      "High-precision cam-driven indexers for controlled, repeatable, backlash-free rotary and oscillating motion in automation.",
    features: [
      "Zero backlash, high positioning accuracy",
      "Handle heavy loads and high-speed indexing",
      "Silent, smooth cam-profiled motion",
      "Customizable index steps & configurations",
      "Compact, rigid, and low maintenance",
      "Rotary, oscillating, shaft/flange types",
    ],
    applications: [
      "Rotary assembly and pick-&-place machines",
      "Pharmaceutical filling & inspection",
      "Packaging, labeling, cartoning equipment",
      "Food processing conveyors",
      "Automotive assembly lines",
    ],
    image: "/sonzogni.png",
  },

  // --- NEW PRODUCT: ENZFELDER SCREW JACKS ---
  {
    id: 7,
    slug: "enzfelder-screw-jacks",
    name: "Enzfelder Screw Jacks",
    category: "Mechanical Positioning",
    description:
      "Robust, precise screw jacks for industrial lifting, lowering, and synchronized movement of heavy loads.",
    features: [
      "High load capacity models (several kN to hundreds kN)",
      "Self-locking (lead screw) options",
      "Corrosion-resistant configurations",
      "Upright, inverted & double jack variants",
      "Suitable for outdoor, washdown, and custom mounting",
    ],
    applications: [
      "Industrial platforms and conveyor adjustment",
      "Steel plant ladle tilting and rolling mills",
      "Tool changers and machine tool tables",
      "Test rigs and wind tunnel positioning",
      "Stage, solar and agriculture lifting",
    ],
    image: "/enzfelder.png",
  },
  {
    id: 2,
    slug: "rotary-vibrators",
    name: "Shakti-make Rotary Vibrators",
    category: "Material Handling",
    description:
      "Efficient vibratory solutions for material handling, dosing, and compaction across industries.",
    features: [
      "Adjustable centrifugal force",
      "Multiple vibration frequencies",
      "Heavy-duty bearings",
      "Low-noise operation",
    ],
    applications: [
      "Emptying bins and silos",
      "Feeding and mixing",
      "Screening and compaction",
      "Dust removal and cleaning",
    ],
    image: "/rotary-vibrator.jpeg",
  },
  {
    id: 3,
    slug: "bump-jolt-machines",
    name: "Shakti-make Bump & Jolt Machines",
    category: "Testing Equipment",
    description:
      "Test packaging integrity and durability by simulating real-world transport conditions.",
    features: [
      "Customizable bump height",
      "Adjustable drop frequency",
      "Integrated cycle counter",
      "Dual motor system",
    ],
    applications: [
      "Product packaging testing",
      "Assembly validation",
      "Welding joint evaluation",
      "Transportation simulation",
    ],
    image: "/bump-jolt.png",
  },
  {
    id: 1,
    slug: "helical-geared-motors",
    name: "Shakti-make helical-geared-motors",
    category: "Motors",
    description:
      "Compact. Efficient. Reliable. Designed for low-speed applications with maximum performance.",
    features: [
      "Compact and economical drive",
      "Multiple reduction options",
      "Alloy steel gears",
      "Silent operation",
    ],
    applications: [
      "Material handling systems",
      "Packaging machinery",
      "Industrial automation",
      "Conveyors and feeders",
    ],
    image: "/helical-geared-motor-2.png",
  },

  {
    id: 4,
    slug: "bin-activators",
    name: "Shakti-make Bin Activators",
    category: "Bulk Material Systems",
    description:
      "Ensure uninterrupted discharge from storage bins and prevent material flow issues.",
    features: [
      "First-in, first-out discharge",
      "Prevents bridging",
      "Energy efficient",
      "Easy to install",
    ],
    applications: [
      "Powder discharge systems",
      "Silos and hoppers",
      "Food-grade material flow",
      "Pharmaceutical bins",
    ],
    image: "/bin.png",
  },
  {
    id: 5,
    slug: "vibro-separators",
    name: "Shakti-make Vibro Separators",
    category: "Separation Systems",
    description:
      "Versatile separators for classifying and dewatering materials with high throughput.",
    features: [
      "Multi-plane vibration",
      "Supports up to five screens",
      "Pollution-free operation",
      "Long screen life",
    ],
    applications: [
      "Wet and dry separation",
      "Granule classification",
      "Solid-liquid dewatering",
      "Powder grading",
    ],
    image: "/vibro-seperator.jpeg",
  },
];

// Simple Carousel Component
const SimpleCarousel = ({ children }: { children: React.ReactNode[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const totalItems = children.length;

  const goToPrevious = React.useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  }, [totalItems, isTransitioning]);

  const goToNext = React.useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  }, [totalItems, isTransitioning]);

  // Touch handling for mobile
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out -ml-2"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            willChange: "transform",
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 flex-shrink-0"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
        onClick={goToPrevious}
        disabled={isTransitioning}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
        onClick={goToNext}
        disabled={isTransitioning}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  );
};

const ProductCard = ({ product }: { product: (typeof products)[0] }) => (
  <Card className="border-none shadow-lg bg-white group cursor-pointer hover:shadow-xl transition-shadow duration-300">
    <CardContent className="p-0 flex flex-col h-full">
      <Link href={`/products/${product.slug}`}>
        <div className="w-full relative overflow-hidden rounded-t-lg">
          <Image
            className="w-full h-48 sm:h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            alt={`${product.name} - ${product.description} with motor and gear components`}
            src={product.image}
            width={400}
            height={320}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#e22023] font-specs text-white px-3 py-1 rounded-full text-sm font-text-small-semi-bold">
              {product.category}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-col gap-3 mb-4">
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-heading font-[number:var(--heading-h4-font-weight)] text-[#01010a] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)] hover:text-[#e22023] transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="font-body font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
            {product.description}
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <div>
            <h4 className="font-heading-bold font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[#01010a] text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)] mb-2">
              Key Features:
            </h4>
            <ul className="space-y-1">
              {product.features.slice(0, 3).map((feature, index) => (
                <li
                  key={index}
                  className="font-specs font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[#01010a] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)] flex items-center"
                >
                  <span className=" w-1.5 h-1.5 bg-[#e22023] rounded-full mr-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading-bold font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[#01010a] text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)] mb-2">
              Applications:
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.applications.slice(0, 2).map((app, index) => (
                <span
                  key={index}
                  className="bg-[#f2f2f2] font-specs text-[#01010a] px-2 py-1 rounded text-xs font-text-small-normal"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <Link href={`/products/${product.slug}`}>
            <Button
              variant="outline"
              className="w-full px-4 py-2 bg-[#01010a0d] rounded-[100px] border-b-4 border-[#01010a26] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#01010a] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#01010a1a] transition-colors"
            >
              <span className="font-cta">View Details</span>
            </Button>
          </Link>

          <QuoteModal>
            <Button className="w-full px-4 py-2 bg-[#e22023] rounded-[100px] border-b-4 border-[#e8787a] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#e8787a] transition-colors">
              <span className="font-cta">Request Quote</span>
            </Button>
          </QuoteModal>
        </div>
      </div>
    </CardContent>
  </Card>
);

export const ProductsCatalogSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding w-full bg-white">
      <div className="flex-col container-responsive items-start gap-12 lg:gap-20 w-full flex">
        <div className="flex flex-col max-w-4xl items-center gap-4 relative w-full text-center mx-auto">
          <div className="inline-flex items-center relative">
            <span className="font-heading-bold relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              Product Catalog
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 lg:gap-6 relative self-stretch w-full">
            <h2 className="font-heading mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative self-stretch text-[#01010a] [font-style:var(--heading-h2-font-style)] text-balance">
              Explore Our Complete Products Range
            </h2>

            {/* <p className="font-body relative mx-auto font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] max-w-3xl">
              Discover our comprehensive selection of engineered products, each
              designed to meet specific industry requirements and performance
              standards.
            </p> */}
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 lg:gap-16 w-full">
          {/* Mobile Carousel - Simple and lightweight */}
          <div className="block lg:hidden w-full">
            <SimpleCarousel>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </SimpleCarousel>
          </div>

          {/* Desktop Grid - Dynamic layout that adapts to any number of products */}
          <div className="hidden lg:block w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
