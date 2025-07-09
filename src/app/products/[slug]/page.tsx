import { ProductDetailDesktop } from "@/components/screens/ProductDetailDesktop";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Product data
const products = [
  {
    id: 1,
    slug: "compression-springs",
    name: "Compression Springs",
    category: "Standard Springs",
    price: "$45",
    description: "High-quality compression springs designed for various load requirements and applications.",
    longDescription: "Our compression springs are engineered to provide reliable performance under compressive loads. Manufactured using premium materials and precision winding techniques, these springs offer consistent force characteristics and long service life. Available in a wide range of sizes, materials, and load specifications to meet your exact requirements.",
    features: [
      "Custom wire diameters from 0.1mm to 25mm",
      "Various materials available (steel, stainless, music wire)",
      "Precision wound with tight tolerances",
      "100% load tested for quality assurance",
      "Shot peening available for enhanced fatigue life",
      "Custom coatings and finishes available"
    ],
    applications: [
      "Automotive suspension systems",
      "Industrial machinery and equipment",
      "Consumer electronics and appliances",
      "Medical devices and instruments",
      "Aerospace components",
      "Heavy-duty manufacturing equipment"
    ],
    specifications: {
      "Wire Diameter": "0.1mm - 25mm",
      "Materials": "High Carbon Steel, Stainless Steel, Music Wire",
      "Finish Options": "Zinc Plating, Powder Coating, Passivation",
      "Load Range": "1N - 50,000N",
      "Temperature Range": "-40°C to +200°C",
      "Standards": "ISO 9001:2015, ASTM, DIN"
    },
    images: [
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 2,
    slug: "extension-springs",
    name: "Extension Springs",
    category: "Standard Springs",
    price: "$35",
    description: "Precision extension springs with custom hook configurations and load specifications.",
    longDescription: "Extension springs are designed to resist pulling forces and return to their original length when the load is removed. Our extension springs feature precision-formed hooks and loops, ensuring secure attachment and reliable performance in tension applications.",
    features: [
      "Custom hook and loop designs",
      "High tensile strength materials",
      "Corrosion resistant coatings",
      "Fatigue tested for durability",
      "Various end configurations available",
      "Precision load specifications"
    ],
    applications: [
      "Garage doors and counterbalance systems",
      "Exercise equipment and fitness machines",
      "Agricultural machinery",
      "Aerospace components",
      "Automotive applications",
      "Industrial equipment"
    ],
    specifications: {
      "Wire Diameter": "0.2mm - 20mm",
      "Materials": "Music Wire, Stainless Steel, Chrome Silicon",
      "Hook Types": "Machine Hook, Crossover Hook, Side Hook",
      "Load Range": "0.5N - 30,000N",
      "Extension Range": "10% - 300% of free length",
      "Standards": "ISO 9001:2015, ASTM A313"
    },
    images: [
      "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 3,
    slug: "torsion-springs",
    name: "Torsion Springs",
    category: "Specialty Springs",
    price: "$65",
    description: "Custom torsion springs engineered for rotational force applications.",
    longDescription: "Torsion springs store and release angular energy, providing torque when twisted. Our torsion springs are precisely manufactured to deliver consistent rotational force characteristics, making them ideal for applications requiring controlled angular movement.",
    features: [
      "Precise torque control and measurement",
      "Custom leg configurations and angles",
      "High cycle life design",
      "Temperature resistant materials",
      "Various mounting options",
      "Stress-relieved for stability"
    ],
    applications: [
      "Hinges and latches",
      "Counterbalance systems",
      "Automotive components",
      "Industrial equipment",
      "Clothespins and clips",
      "Garage door systems"
    ],
    specifications: {
      "Wire Diameter": "0.3mm - 15mm",
      "Materials": "Music Wire, Stainless Steel, Chrome Vanadium",
      "Leg Configurations": "Straight, Bent, Hooked",
      "Torque Range": "0.1 Nm - 1000 Nm",
      "Angular Deflection": "90° - 720°",
      "Standards": "ISO 9001:2015, DIN 2089"
    },
    images: [
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 4,
    slug: "wire-forms",
    name: "Wire Forms",
    category: "Custom Solutions",
    price: "$55",
    description: "Precision wire forms and custom shapes for specialized applications.",
    longDescription: "Wire forms are custom-shaped components created from various wire materials to meet specific functional requirements. Our wire forming capabilities allow us to create complex geometries and precise shapes for unique applications.",
    features: [
      "Complex geometries and shapes",
      "Multiple bend angles and radii",
      "Tight tolerances and precision",
      "Various wire types and materials",
      "Custom finishing options",
      "Prototype to production volumes"
    ],
    applications: [
      "Display fixtures and retail",
      "Safety components and guards",
      "Electronic contacts and connectors",
      "Mechanical linkages",
      "Automotive clips and fasteners",
      "Medical device components"
    ],
    specifications: {
      "Wire Diameter": "0.5mm - 12mm",
      "Materials": "Steel, Stainless Steel, Brass, Aluminum",
      "Bend Radius": "1x to 10x wire diameter",
      "Tolerance": "±0.1mm standard",
      "Finish Options": "Zinc, Nickel, Powder Coating",
      "Standards": "ISO 9001:2015, Custom specifications"
    },
    images: [
      "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 5,
    slug: "leaf-springs",
    name: "Leaf Springs",
    category: "Heavy Duty",
    price: "$85",
    description: "Robust leaf springs for heavy-duty applications requiring high load capacity.",
    longDescription: "Leaf springs are designed to handle heavy loads while providing controlled deflection. Our leaf springs are manufactured using high-strength steel and advanced heat treatment processes to ensure maximum durability and performance in demanding applications.",
    features: [
      "Multi-leaf design for high loads",
      "Shot peened finish for fatigue resistance",
      "High load capacity design",
      "Stress relieved for dimensional stability",
      "Custom mounting configurations",
      "Progressive or linear rate options"
    ],
    applications: [
      "Vehicle suspension systems",
      "Heavy machinery and equipment",
      "Railway systems and rolling stock",
      "Construction equipment",
      "Agricultural machinery",
      "Industrial material handling"
    ],
    specifications: {
      "Thickness": "3mm - 25mm",
      "Materials": "Spring Steel, Chrome Silicon, Chrome Vanadium",
      "Load Capacity": "500N - 100,000N",
      "Deflection": "10mm - 200mm",
      "Length": "100mm - 2000mm",
      "Standards": "ISO 9001:2015, SAE J510"
    },
    images: [
      "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  },
  {
    id: 6,
    slug: "coil-springs",
    name: "Coil Springs",
    category: "Industrial",
    price: "$75",
    description: "Industrial-grade coil springs for demanding manufacturing environments.",
    longDescription: "Industrial coil springs are engineered for continuous operation in demanding manufacturing environments. These springs provide reliable performance, consistent force characteristics, and long service life in industrial applications.",
    features: [
      "Heavy-duty construction",
      "Consistent performance characteristics",
      "Long service life design",
      "Custom specifications available",
      "High-temperature capabilities",
      "Corrosion resistant options"
    ],
    applications: [
      "Manufacturing equipment",
      "Conveyor systems",
      "Stamping presses",
      "Assembly lines",
      "Packaging machinery",
      "Material handling equipment"
    ],
    specifications: {
      "Wire Diameter": "2mm - 30mm",
      "Materials": "Chrome Silicon, Chrome Vanadium, Stainless Steel",
      "Load Range": "100N - 75,000N",
      "Operating Temperature": "-20°C to +250°C",
      "Coil Diameter": "20mm - 500mm",
      "Standards": "ISO 9001:2015, DIN EN 13906"
    },
    images: [
      "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  }
];

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - Spring Solutions`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Spring Solutions`,
      description: product.description,
      url: `https://spring-solutions.com/products/${product.slug}`,
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailDesktop product={product} />;
}