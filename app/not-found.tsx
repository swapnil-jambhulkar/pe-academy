import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="pt-28 pb-20 bg-white min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">404</p>
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-black mb-4">Page not found</h1>
        <p className="text-gray-700 leading-relaxed mb-8">
          That address is not on this site. Use the links below to continue.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button className="bg-black text-white hover:bg-gray-900" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="outline" className="border-black text-black hover:bg-gray-50" asChild>
            <Link href="/pgp">PGP</Link>
          </Button>
          <Button variant="outline" className="border-black text-black hover:bg-gray-50" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
