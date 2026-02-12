import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";
import { IMAGES } from "@/lib/images";

const products = [
  {
    name: "Startkit 100 mensskydd",
    price: "1 749 kr",
    priceNote: "ex. moms",
    description: "Fem olika farger. Allt du behover for att komma igang.",
    badge: "Popularast",
    sku: "MS-STARTKIT-100",
  },
  {
    name: "100 ekologiska bindor",
    price: "499 kr",
    priceNote: "ex. moms",
    description: "Tillverkade av 100% ekologisk bomull. Mjuka och sakra.",
    sku: "MS-BINDOR-100",
  },
  {
    name: "100 ekologiska tamponger",
    price: "279 kr",
    priceNote: "ex. moms",
    description: "Normal absorptionsniva i ekologisk bomull.",
    sku: "MS-TAMPONG-N-100",
  },
  {
    name: "Necessaren 40 mensskydd",
    price: "389 kr",
    priceNote: "ex. moms",
    description: "Kompakt forvaring med 40 ekologiska mensskydd.",
    badge: "Nyhet",
    sku: "MS-NECESSAR-40",
  },
  {
    name: "Trepack trosskydd",
    price: "139 kr",
    priceNote: "ex. moms",
    description: "Diskreta och bekvama trosskydd i ekologisk bomull.",
    sku: "MS-TROSSKYDD-3",
  },
  {
    name: "Plastladan 80 mensskydd",
    price: "899 kr",
    priceNote: "ex. moms",
    description: "Hallbar plastlada med 80 ekologiska mensskydd.",
    sku: "MS-PLASTLADA-80",
  },
];

export function ProductsSection() {
  return (
    <section
      id="produkter"
      className="border-y border-border bg-secondary py-24 md:py-32"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Upptack var webshop
            </p>
            <h2
              id="products-heading"
              className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl"
            >
              Vara produkter
            </h2>
          </div>
          <Button
            variant="outline"
            asChild
            className="bg-transparent text-foreground border-border hover:bg-muted hover:text-foreground"
          >
            <Link href="https://www.menssakrad.se/webshop">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Se alla i webshop
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.sku}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-200 hover:border-primary/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={IMAGES.products}
                  alt={`${product.name} - ekologiska mensskydd`}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {product.badge && (
                  <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground text-xs">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold text-card-foreground">
                  {product.name}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <span className="text-lg font-bold text-foreground">
                      {product.price}
                    </span>
                    <span className="ml-1 text-xs text-muted-foreground">
                      {product.priceNote}
                    </span>
                  </div>
                  <Button size="sm" asChild>
                    <Link href="https://www.menssakrad.se/webshop">
                      Kop nu
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
