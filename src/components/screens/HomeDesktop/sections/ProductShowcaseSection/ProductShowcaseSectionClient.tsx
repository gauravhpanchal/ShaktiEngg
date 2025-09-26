"use client";

import React from "react";
import { ProductShowcaseSection as ClientSection, ProductShowcaseData } from "./ProductShowcaseSection";

export default function ProductShowcaseSectionClient({ data }: { data: ProductShowcaseData }) {
  return <ClientSection data={data} />;
}

