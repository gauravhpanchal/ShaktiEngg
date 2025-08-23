import { ProductDetailDesktop } from "@/components/screens/ProductDetailDesktop";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Product data
const products = [
  {
    id: 1,
    slug: "helical-geared-motors",
    name: "Shakti-make Helical Geared Motors",
    category: "Motors",
    description:
      "Compact. Efficient. Reliable. Designed for low-speed applications with maximum performance.",
    longDescription:
      "SHREE SHAKTI Geared Motors are designed to deliver maximum efficiency and reliability for low-speed applications across various industries. These compact drive systems combine high-performance electric motors (AC or DC) with precision-engineered gearboxes—Helical, Worm, or Epicyclic—ensuring optimum power transmission and long service life.\n\nManufactured under strict quality control by trained personnel, these motors meet the highest standards of performance and durability.",
    features: [
      "Compact and economical drive for low-speed operations",
      "Single, Double, Triple, and Quadruple reduction options",
      "Mounting types: foot, foot-cum-flange, agitator",
      "Close-grained cast iron housing",
      "Heat-treated alloy steel gears and pinions",
      "Heavy-duty bearings for silent operation",
      "Integral pinion shafts from high-grade alloy steel",
    ],
    applications: [
      "Material handling systems",
      "Packaging machinery",
      "Agitators and mixers",
      "Industrial automation",
      "Conveyors and feeders",
      "Textile and paper industries",
    ],
    specifications: {
      "Motor Type": "Totally enclosed, fan-cooled",
      "Insulation Class": "Class B (Optional: Class F or H)",
      Voltage: "400/440V, 3-phase, 50Hz",
      Protection: "IP55 (custom options available)",
      "Gear Types": "Helical, Worm, Epicyclic",
      "Mounting Options": "Foot, Flange, Agitator",
    },
    images: ["/helical-geared-motor.png", "/helical-geared-motor-2.png"],
  },
  {
    id: 2,
    slug: "rotary-vibrators",
    name: "Shakti-make Rotary Vibrators",
    category: "Material Handling",
    description:
      "Efficient vibratory solutions for material handling, dosing, and compaction across industries.",
    longDescription:
      "SHREE SHAKTI Rotary Vibrators are engineered to handle a wide variety of material handling and processing applications across industries such as Mining, Power, Fertilizers, Chemicals, Pharmaceuticals, and Food Processing. Their enclosed, surface-cooled construction ensures robust, quiet, and long-lasting operation.",
    features: [
      "Robust, enclosed, surface-cooled design",
      "Centrifugal force adjustable from 0 to Max",
      "Available speeds: 2800, 1400, 900, 700 RPM",
      "Heavy-duty bearings ensure long service life",
      "Low-noise operation",
      "IP44 protection (IP55 optional)",
      "Thermal protection available",
    ],
    applications: [
      "Emptying bins and silos",
      "Feeding and mixing",
      "Screening and compaction",
      "Dust removal and ventilation",
      "Dosing and cleaning operations",
      "Process flow control",
    ],
    specifications: {
      Voltage: "400/440V, 3-phase, 50Hz",
      "Vibration Frequency": "2800 / 1400 / 900 / 700 RPM",
      Amplitude: "2mm to 4mm",
      Protection: "IP44 (IP55 optional)",
      Bearings: "Heavy-duty, sealed",
      "Noise Level": "Low",
    },
    images: ["/rotary-vibrator.jpeg", "/rotary-vibrator-2.jpeg"],
  },
  {
    id: 3,
    slug: "bump-jolt-machines",
    name: "Shakti-make Bump & Jolt Machines",
    category: "Testing Equipment",
    description:
      "Test packaging integrity and durability by simulating real-world transport conditions.",
    longDescription:
      "Shakti Engineers' Bump & Jolt Machines simulate road transport and handling conditions to test product durability, packaging integrity, and component strength. Precision bump and jolt mechanisms help manufacturers meet international quality standards with confidence.",
    features: [
      "25mm bump height (customizable)",
      "Adjustable frequency: 60–160 drops/min",
      "Rotary vibrator for horizontal jolts (25–50 jolts/sec)",
      "Integrated cycle counter",
      "Heavy-duty build with premium materials",
      "Separate motors for bump and jolt",
      "Engineered for long operational life",
    ],
    applications: [
      "Packaging material testing",
      "Assembly strength validation",
      "Transport simulation",
      "Quality assurance labs",
      "Weld joint endurance tests",
      "Product R&D testing",
    ],
    specifications: {
      "Bump Height": "25mm (customizable)",
      "Drop Frequency": "60–160 drops/min",
      "Jolt Rate": "25–50 jolts/sec",
      "Motor Control": "Independent for each function",
      Counter: "Integrated cycle counter",
      Construction: "Heavy-duty steel frame",
    },
    images: ["/bump-jolt.png"],
  },
  {
    id: 4,
    slug: "bin-activators",
    name: "Shakti-make Bin Activators",
    category: "Bulk Material Systems",
    description:
      "Ensure uninterrupted discharge from storage bins and prevent material flow issues.",
    longDescription:
      "Shakti Bin Activators are engineered to resolve material flow issues in storage systems by ensuring uninterrupted, uniform discharge of bulk solids. They prevent bridging, rat-holing, and segregation—improving discharge consistency while maintaining product integrity.",
    features: [
      "First-in, first-out discharge",
      "No particle damage",
      "Optimized cone angles",
      "Prevents rat-holing and blockages",
      "Energy efficient and low maintenance",
      "Quick and simple installation",
      "Noise-free operation",
    ],
    applications: [
      "Powder and granule storage",
      "Pharmaceuticals and chemicals",
      "Food-grade silos",
      "Construction material hoppers",
      "Refractory material bins",
      "Steel and cement industries",
    ],
    specifications: {
      "Diameter Range": "300mm – 3600mm",
      "Material Options": "Carbon Steel, 304/316 Stainless Steel",
      "Discharge Volume": "30 to 20,000 liters",
      Finish: "Custom and food-grade finishes",
      Installation: "Steel or concrete bins",
      "Elastic Sleeve": "Optional for food-grade use",
    },
    images: ["/bin.png"],
  },
  {
    id: 5,
    slug: "vibro-separators",
    name: "Shakti-make Vibro Separators",
    category: "Separation Systems",
    description:
      "Versatile separators for classifying and dewatering materials with high throughput.",
    longDescription:
      "Shakti Vibro Separators are versatile systems for separating solids from liquids or classifying solids by size. Their multi-plane vibration ensures high throughput, reduced screen blinding, and efficient operation in minimal space.",
    features: [
      "Supports up to five screens",
      "Handle wet or dry materials",
      "Multi-plane vibration system",
      "Pollution-free operation",
      "Uniform screen tensioning",
      "Adjustable discharge ports",
      "Vibration-free base",
    ],
    applications: [
      "Powder classification",
      "Solid-liquid separation",
      "Granule sizing",
      "Wet slurry dewatering",
      "Food and chemical processing",
      "Metal and mining industries",
    ],
    specifications: {
      "Screen Levels": "Up to 5 (six-size separation)",
      "Material Capability": "Wet, dry, coarse, fine",
      "Power Usage": "Low consumption",
      Mounting: "Floor, bin, or plank",
      "Tensioning System": "Uniform and long-lasting",
      "Base Design": "Vibration-free",
    },
    images: ["/vibro-seperator.jpeg"],
  },

  // ------- NEW PRODUCT: SONZOGNI CAMME INDEXERS ------
  {
    id: 6,
    slug: "sonzogni-camme-mechanical-indexers",
    name: "Sonzogni Camme Mechanical Indexers",
    category: "Automation Components",
    description:
      "High-precision cam-driven indexers for controlled, repeatable, backlash-free rotary and oscillating motion in automation.",
    longDescription:
      "Sonzogni Camme mechanical indexers employ cam-driven mechanisms that convert continuous rotary input into precise, intermittent indexed motion. With zero backlash and engineered cam profiles, these indexers ensure high positioning accuracy, smooth acceleration, and reliable repeatability. They are maintenance-free, compact, and rugged—ideal for automation in harsh industrial settings. Configurations include rotary, oscillating, shaft/flange, and parallel indexers, with a wide range of index steps and torque ratings to match application requirements.",
    features: [
      "Zero-backlash mechanical transmission",
      "High positioning accuracy and repeatability",
      "Handle heavy loads and high-speed indexing",
      "Customizable index steps (2, 4, 6, 8, 12, 24 stations, etc.)",
      "Silent, smooth cam-profiled motion",
      "Maintenance-free options (lubricated for life)",
      "Compact, rigid design",
      "Wide configuration range: shaft, flange, rotary, oscillating drives",
    ],
    applications: [
      "Pharmaceutical & cosmetics: capsule filling, vial handling, rotary inspection",
      "Rotary or linear assembly and pick-and-place machines",
      "Bottle filling, capping, labeling, cartoning, and packaging lines",
      "Food & beverage: container orientation, conveyors",
      "Automotive: engine, gearbox lines, robotic cells",
    ],
    specifications: {
      "Index Steps": "2, 4, 6, 8, 12, 24 (and custom)",
      "Max Torque": "Varies by model (consult specification)",
      "Drive Type": "Mechanical cam, zero backlash",
      "Mounting Options": "Shaft-type, flange-type, parallel, oscillating",
      Maintenance: "Long-life lubrication available",
      Customization: "Index angle, configuration, torque",
    },
    images: ["/sonzogni.png"],
  },

  // ------- NEW PRODUCT: ENZFELDER SCREW JACKS ------
  {
    id: 7,
    slug: "enzfelder-screw-jacks",
    name: "Enzfelder Screw Jacks",
    category: "Mechanical Positioning",
    description:
      "Robust, precise screw jacks for industrial lifting, lowering, and synchronized movement of heavy loads.",
    longDescription:
      "Enzfelder Screw Jacks, engineered in Germany, are mechanical positioning devices designed for safe, precise lifting and lowering of heavy loads in industrial and architectural applications. Using lead or ball screws, they convert rotary motion into controlled linear movement. Self-locking options allow maintenance of position without a brake, and corrosion-resistant models support harsh or outdoor environments. Multiple mounting and drive configurations allow integration into diverse lifting platforms, conveyors, test rigs, solar panels, and more.",
    features: [
      "Handle loads from a few kN up to several hundred kN",
      "Self-locking lead screw versions (hold load with power off)",
      "Corrosion-resistant options for outdoor/washdown use",
      "Upright, inverted, and double jack configurations available",
      "Robust, low-maintenance, precision construction",
    ],
    applications: [
      "Industrial platforms, conveyor adjustment, material handling",
      "<strong>Steel plants</strong>: ladle tilting, furnace doors, rolling mills",
      "<strong>Machine tools</strong>: tool changers, tables, machining centers",
      "Aerospace and test rigs, wind tunnel positioning",
      "Solar trackers, stadium seating, stage lifts, architecture",
    ],
    specifications: {
      "Load Range": "Few kN to several hundred kN",
      "Drive Types": "Lead screw (self-locking) or ball screw (low friction)",
      "Mounting Variants":
        "Upright (standing), inverted (hanging), double jack",
      Material: "Corrosion-resistant options available",
      Operation: "Manual, electric, or motor-driven",
      Customization: "Stroke, speed, mounting options",
    },
    images: ["/enzfelder.png", "/enzfelder-2.png"],
  },
];

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const product = products.find((p) => p.slug === params.slug);

//   if (!product) {
//     return {
//       title: "Product Not Found",
//     };
//   }

//   return {
//     title: `${product.name} - Shakti Engineers`,
//     description: product.description,
//     openGraph: {
//       title: `${product.name} - Shakti Engineers`,
//       description: product.description,
//       url: `https://shakti-engineers.com/products/${product.slug}`,
//       images: [
//         {
//           url: product.images[0],
//           width: 1200,
//           height: 630,
//           alt: product.name,
//         },
//       ],
//     },
//   };
// }

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailDesktop product={product} />;
}
