import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

export function CtaSection() {
  return (
    <section
      className="border-y border-primary/20 bg-primary py-24 md:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2
          id="cta-heading"
          className="font-serif text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl"
        >
          Redo att Menss&auml;kra?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
          Oavsett om du vill handla for dig sjalv eller gora din arbetsplats
          mer inkluderande har vi losningen. Bestall startkit eller begar en
          offert idag.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            asChild
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base font-semibold"
          >
            <Link href="/produkter/startkit">
              Bestall ditt startkit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base font-semibold"
          >
            <Link href="/offert">
              <FileText className="mr-2 h-5 w-5" />
              Fa en offert
            </Link>
          </Button>
        </div>
        <p className="mt-8 text-sm text-primary-foreground/60">
          Bolla med kollegorna?{" "}
          <Link
            href="/samtalsunderlag"
            className="underline underline-offset-4 transition-colors hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:outline-none"
          >
            Ladda ner ett samtalsunderlag
          </Link>
        </p>
      </div>
    </section>
  );
}
