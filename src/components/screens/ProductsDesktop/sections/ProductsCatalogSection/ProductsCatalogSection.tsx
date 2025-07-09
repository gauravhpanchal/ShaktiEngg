"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteModal } from "@/components/QuoteModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    slug: "compression-springs",
    name: "Compression Springs",
    category: "Standard Springs",
    description: "High-quality compression springs designed for various load requirements and applications.",
    features: ["Custom wire diameters", "Various materials available", "Precision wound", "Load tested"],
    applications: ["Automotive suspension", "Industrial machinery", "Consumer electronics", "Medical devices"],
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    slug: "extension-springs",
    name: "Extension Springs",
    category: "Standard Springs",
    description: "Precision extension springs with custom hook configurations and load specifications.",
    features: ["Custom hook designs", "High tensile strength", "Corrosion resistant", "Fatigue tested"],
    applications: ["Garage doors", "Exercise equipment", "Agricultural machinery", "Aerospace components"],
    image: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    slug: "torsion-springs",
    name: "Torsion Springs",
    category: "Specialty Springs",
    description: "Custom torsion springs engineered for rotational force applications.",
    features: ["Precise torque control", "Custom leg configurations", "High cycle life", "Temperature resistant"],
    applications: ["Hinges and latches", "Counterbalance systems", "Automotive components", "Industrial equipment"],
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    slug: "wire-forms",
    name: "Wire Forms",
    category: "Custom Solutions",
    description: "Precision wire forms and custom shapes for specialized applications.",
    features: ["Complex geometries", "Multiple bend angles", "Tight tolerances", "Various wire types"],
    applications: ["Display fixtures", "Safety components", "Electronic contacts", "Mechanical linkages"],
    image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    slug: "leaf-springs",
    name: "Leaf Springs",
    category: "Heavy Duty",
    description: "Robust leaf springs for heavy-duty applications requiring high load capacity.",
    features: ["Multi-leaf design", "Shot peened finish", "High load capacity", "Stress relieved"],
    applications: ["Vehicle suspension", "Heavy machinery", "Railway systems", "Construction equipment"],
    image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    slug: "coil-springs",
    name: "Coil Springs",
    category: "Industrial",
    description: "Industrial-grade coil springs for demanding manufacturing environments.",
    features: ["Heavy-duty construction", "Consistent performance", "Long service life", "Custom specifications"],
    applications: ["Manufacturing equipment", "Conveyor systems", "Stamping presses", "Assembly lines"],
    image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => (
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
            <span className="bg-[#1717c4] text-white px-3 py-1 rounded-full text-sm font-text-small-semi-bold">
              {product.category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-col gap-3 mb-4">
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[#01010a] text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)] hover:text-[#1717c4] transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#01010a] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
            {product.description}
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <div>
            <h4 className="font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[#01010a] text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)] mb-2">
              Key Features:
            </h4>
            <ul className="space-y-1">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[#01010a] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)] flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#1717c4] rounded-full mr-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[#01010a] text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)] mb-2">
              Applications:
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.applications.slice(0, 2).map((app, index) => (
                <span key={index} className="bg-[#f2f2f2] text-[#01010a] px-2 py-1 rounded text-xs font-text-small-normal">
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
              View Details
            </Button>
          </Link>
          
          <QuoteModal>
            <Button className="w-full px-4 py-2 bg-[#1717c4] rounded-[100px] border-b-4 border-[#12129c] font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)] hover:bg-[#1414a8] transition-colors">
              Request Quote
            </Button>
          </QuoteModal>
        </div>
      </div>
    </CardContent>
  </Card>
);

export const ProductsCatalogSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 lg:gap-20 section-padding w-full bg-[#f2f2f2]">
      <div className="flex-col container-responsive items-start gap-12 lg:gap-20 w-full flex">
        <div className="flex flex-col max-w-4xl items-center gap-4 relative w-full text-center mx-auto">
          <div className="inline-flex items-center relative">
            <span className="relative w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[#01010a] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              Product Catalog
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 lg:gap-6 relative self-stretch w-full">
            <h2 className="mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] relative self-stretch text-[#01010a] [font-style:var(--heading-h2-font-style)] text-balance">
              Explore Our Complete Spring Range
            </h2>

            <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#01010a] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] max-w-3xl">
              Discover our comprehensive selection of precision-engineered springs, each designed to meet specific industry requirements and performance standards.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-8 lg:gap-16 w-full">
          {/* Mobile Carousel */}
          <div className="block lg:hidden w-full">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {products.map((product) => (
                  <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2">
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:flex flex-col items-start gap-8 lg:gap-16 w-full">
            {/* First row of products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
              {products.slice(0, 3).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Second row of products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
              {products.slice(3, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};