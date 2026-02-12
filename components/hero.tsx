import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/images";

function MarqueeTicker() {
  const text = "The future is period-proofed";
  const items = Array.from({ length: 20 }, (_, i) => (
    <span
      key={i}
      className="mx-8 whitespace-nowrap text-sm font-medium uppercase tracking-[0.3em] text-primary"
    >
      {text}
    </span>
  ));

  return (
    <div
      className="overflow-hidden border-y border-border bg-secondary py-3"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max">{items}</div>
    </div>
  );
}

export function Hero() {
  return (
    <>
      <section
        className="relative flex min-h-[90vh] items-center overflow-hidden"
        aria-label="Introduktion"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Modern arbetsplats med Menssäkrads stilrena förvaringsbox"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-32 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="fade-in-up text-balance font-serif text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Stilren forvaring och{" "}
              <span className="text-primary">ekologiska mensskydd</span>
            </h1>
            <p className="fade-in-up-delay-1 mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Snyggt, enkelt och hallbart. Boxen som gor mensskydd sjalvklart
              och alltid nara till hands.
            </p>
            <div className="fade-in-up-delay-2 mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="text-base font-semibold"
              >
                <Link href="/offert">
                  Fa en offert
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-border bg-transparent text-base font-semibold text-foreground hover:bg-secondary hover:text-foreground"
              >
                <Link href="#produkter">Las mer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee ticker - just like the original */}
      <MarqueeTicker />
    </>
  );
}
