import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#e22023] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#01010a] mb-4">
          Product Not Found
        </h2>
        <p className="text-[#01010a] mb-8 max-w-md">
          The product you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button className="px-6 py-2.5 bg-[#e22023] rounded-[100px] border-b-4 border-[#e8787a] text-white hover:bg-[#1414a8] transition-colors">
              View All Products
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              className="px-6 py-2.5 bg-[#01010a0d] rounded-[100px] border-b-4 border-[#01010a26] text-[#01010a] hover:bg-[#01010a1a] transition-colors"
            >
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
