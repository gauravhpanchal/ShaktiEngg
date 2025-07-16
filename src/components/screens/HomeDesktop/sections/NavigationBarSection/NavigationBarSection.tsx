"use client";

import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { QuoteModal } from "@/components/QuoteModal";

export const NavigationBarSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex flex-col items-center w-full bg-white border-b border-[#01010a26] sticky top-0 z-50">
      <div className="flex h-16 lg:h-[72px] items-center justify-between container-responsive w-full">
        {/* Logo - Left side */}
        <div className="flex items-center gap-4 lg:gap-6">
          <Link href="/" className="flex-shrink-0">
            <Image
              className="w-[200px] h-auto aspect-auto lg:w-[220px] lg:h-auto"
              alt="Shakti Engineers"
              src="/logo.svg"
              width={84}
              height={36}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <NavigationMenu className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          <NavigationMenuList className="flex items-center gap-6 lg:gap-8">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    className="font-text-regular-normal text-[#01010a] hover:bg-[#01010a0d] transition-colors"
                  >
                    <span className="font-nav">{item.name}</span>
                  </Button>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Buttons - Right side */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-4">
            <Link href="/contact">
              <Button
                variant="default"
                className="px-3 lg:px-5 py-2 bg-[#01010a0d] rounded-[100px] border-b-4 border-[#01010a26] hover:bg-[#01010a1a] text-sm lg:text-base transition-colors"
              >
                <span className="font-cta font-text-regular-medium text-[#01010a] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)]">
                  Contact
                </span>
              </Button>
            </Link>

            <QuoteModal>
              <Button className="px-3 lg:px-5 py-2 bg-[#e22023] rounded-[100px] border-b-4 border-[#e8787a] hover:bg-[#e8787a] text-sm lg:text-base transition-colors">
                <span className="font-cta font-text-regular-medium text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)]">
                  Get Quote
                </span>
              </Button>
            </QuoteModal>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden w-10 h-10 p-0 flex items-center justify-center rounded-full hover:bg-[#01010a0d] transition-all duration-300"
                aria-label="Open mobile menu"
              >
                <div className="relative w-8 h-8 flex items-center justify-center">
                  {!isMobileMenuOpen ? (
                    <MenuIcon
                      className={`w-6 h-6 transition-all duration-300 `}
                    />
                  ) : (
                    <X
                      className={`w-6 h-6 absolute transition-all duration-300 `}
                    />
                  )}
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full p-0 h-full max-w-none rounded-none border-none shadow-none bg-white fixed inset-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-300"
            >
              {/* Hidden Sheet Title for Accessibility */}
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>

              {/* Mobile Header - Aligned with main header */}
              <div className="flex h-16 items-center justify-between container-responsive w-full border-b border-[#01010a26]">
                <Link
                  href="/"
                  className="flex-shrink-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    className="w-[200px] h-auto aspect-auto"
                    alt="Shakti Engineers"
                    src="/logo.svg"
                    width={84}
                    height={36}
                    priority
                  />
                </Link>
              </div>

              {/* Mobile Menu Content - Centered */}
              <div className="flex flex-col justify-center items-center container-responsive py-0 px-0 h-auto">
                {/* Mobile Navigation Links - Centered */}
                <div className="flex flex-col items-center space-y-8 flex-1 pt-8">
                  {navigationItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-center py-4 px-8 text-[#01010a] font-text-large-semi-bold hover:bg-[#01010a0d] rounded-xl transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-xl font-nav">{item.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA Buttons - Bottom */}
                <div className="flex flex-col items-center gap-4 w-full max-w-sm mt-8 pb-12 px-4">
                  <QuoteModal>
                    <Button
                      className="w-full px-4 py-6 bg-[#e22023] rounded-2xl border-2 border-[#e8787a] hover:bg-[#e8787a] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                      // onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="font-cta font-text-regular-medium text-white text-xl">
                        Get Quote
                      </span>
                    </Button>
                  </QuoteModal>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
