"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteModal } from "@/components/QuoteModal";
import { ArrowLeft, ArrowRight } from "lucide-react";
import homepageContent from "@/data/homepage-content.json";

// Product data from JSON with motor/gear images
const imageMap = [
  "/sonzogni.png",
  "/enzfelder.png",
  "/rotary-vibrator.jpeg",
  "/bump-jolt.png",
  "/helical-geared-motor.png",
  "/bin.png",
  "/vibro-seperator.jpeg",
];

// Product data from JSON with motor/gear images - moved to component level
const getProducts = () =>
  homepageContent.products.featured.map((product, index) => ({
    id: product.id,
    slug: product.slug,
    name: product.name,
    variant: product.category,
    // Images are mapped from imageMap array based on product index
    image: imageMap[index] || imageMap[0], // Fallback to first image if index exceeds array
  }));

type ProductType = ReturnType<typeof getProducts>[0];

// Memoized ProductCard component to prevent unnecessary re-renders
const ProductCard = React.memo(({ product }: { product: ProductType }) => {
  const handleImageError = React.useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      // Fallback to a default product image if the specific image doesn't exist
      e.currentTarget.src = "/default-product.png";
    },
    []
  );

  return (
    <Card className="border-none shadow-none bg-transparent group cursor-pointer">
      <CardContent className="p-0 flex flex-col items-start gap-4">
        <Link href={`/products/${product.slug}`} className="w-full">
          <div className="w-full relative overflow-hidden rounded-lg">
            <Image
              className="w-full h-64 sm:h-80 lg:h-[350px] object-cover transition-transform duration-300 md:group-hover:scale-105"
              alt={`${product.name} - ${product.variant} products manufacturing with motor components`}
              src={product.image}
              width={400}
              height={486}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
              onError={handleImageError}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </Link>

        <div className="flex flex-col items-start gap-2 w-full">
          <div className="flex flex-col items-start w-full">
            <Link href={`/products/${product.slug}`}>
              <h3 className="w-full mt-[-1.00px] line-clamp-1 font-text-medium-semi-bold font-[number:var(--text-medium-semi-bold-font-weight)] text-[#01010a] text-[length:var(--text-medium-semi-bold-font-size)] tracking-[var(--text-medium-semi-bold-letter-spacing)] leading-[var(--text-medium-semi-bold-line-height)] [font-style:var(--text-medium-semi-bold-font-style)] hover:text-[#e22023] transition-colors">
                {product.name}
              </h3>
            </Link>
            <p className="w-full font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[#01010a] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
              {product.variant}
            </p>
          </div>

          {/* Get Quote Button */}
          <QuoteModal>
            <Button className="w-full mt-2 px-4 py-2 bg-[#e22023] rounded-[100px] border-b-4 border-[#e8787a] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#e8787a] transition-colors">
              Get Quote
            </Button>
          </QuoteModal>
        </div>
      </CardContent>
    </Card>
  );
});

ProductCard.displayName = "ProductCard";

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
            transform: `translateX(-${currentIndex * 80}%)`,
            willChange: "transform",
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="pl-2 basis-4/5 sm:basis-3/5 flex-shrink-0"
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
        className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full touch-manipulation"
        onClick={goToPrevious}
        disabled={isTransitioning}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full touch-manipulation"
        onClick={goToNext}
        disabled={isTransitioning}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  );
};

export const ProductShowcaseSection = (): JSX.Element => {
  // Memoize products array to prevent unnecessary re-renders
  const products = React.useMemo(() => getProducts(), []);

  return (
    <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding w-full bg-white">
      <div className="flex-col container-responsive items-start gap-12 lg:gap-20 w-full flex">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8 w-full">
          <div className="max-w-2xl gap-4 flex-1 flex flex-col items-start">
            <div className="inline-flex items-center w-full">
              <span className="font-subheading font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                {homepageContent.company.name}
              </span>
            </div>

            <div className="flex flex-col items-start gap-4 w-full">
              <h2 className="w-full font-subheading font-[number:var(--heading-h2-font-weight)] text-[#01010a] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] text-balance">
                {homepageContent.products.sectionTitle}
              </h2>

              <p className="w-full font-body font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                {homepageContent.products.sectionSubtitle}
              </p>
            </div>
          </div>

          <Link href="/products">
            <Button
              variant="outline"
              className="w-full lg:w-auto px-6 py-2.5 bg-[#01010a0d] rounded-[100px] border-b-4 [border-bottom-style:solid] border-[#01010a26] hover:bg-[#01010a1a] transition-colors"
            >
              <span className="font-cta font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[#01010a] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                View All Products
              </span>
            </Button>
          </Link>
        </div>

        <div className="flex flex-col items-start gap-8 lg:gap-16 w-full">
          {/* Mobile Carousel - Simple and lightweight */}
          <div className="block md:hidden w-full">
            <SimpleCarousel>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </SimpleCarousel>
          </div>

          {/* Desktop Grid - Dynamic layout that adapts to any number of products */}
          <div className="hidden md:block w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 w-full">
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
