import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/structured-data";
import {
  Droplets,
  Clock,
  Leaf,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kopguide - Valj ratt mensskydd",
  description:
    "Hitta det mensskydd som passar dig bast. Jamfor tamponger, bindor och trosskydd efter absorptionsniva, material och komfort.",
  alternates: { canonical: "/kopguide" },
};

const products = [
  {
    name: "Tamponger",
    icon: Droplets,
    absorption: "Normal till Plus",
    material: "100% ekologisk bomull",
    best: "Aktiv livsstil, simning, sport",
    sizes: ["Normal (279 kr/100 st)", "Plus (329 kr/100 st)"],
    pros: [
      "Diskret och bekvam",
      "Bra for en aktiv livsstil",
      "Ekologisk bomull utan kemikalier",
    ],
  },
  {
    name: "Bindor",
    icon: ShieldCheck,
    absorption: "Normal till maxi",
    material: "100% ekologisk bomull",
    best: "Nattanvandning, hogre flode, komfort",
    sizes: ["100 st (499 kr)"],
    pros: [
      "Hog absorptionsformaga",
      "Saker och bekvam",
      "Perfekt for natten",
    ],
  },
  {
    name: "Trosskydd",
    icon: Leaf,
    absorption: "Lagt flode",
    material: "100% ekologisk bomull",
    best: "Daglig frischhet, latt flode, backup",
    sizes: ["Trepack (135 kr)"],
    pros: [
      "Diskreta och tunna",
      "Perfekt som backup",
      "Naturligt material mot huden",
    ],
  },
];

const tips = [
  {
    title: "Borja med ett startkit",
    desc: "Osäker pa vad som passar? Vart startkit innehaller alla tre typer sa du kan testa dig fram.",
  },
  {
    title: "Anpassa efter dag",
    desc: "Manga anvander tamponger dagtid och bindor pa natten. Trosskydd ar perfekta i borjan och slutet av mensen.",
  },
  {
    title: "Prenumerera och slipp tanka",
    desc: "Nar du hittat det som passar kan du prenumerera och fa leverans automatiskt var tredje manad.",
  },
];

export default function KopguidePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hem", url: "https://www.menssakrad.se" },
          { name: "Kopguide", url: "https://www.menssakrad.se/kopguide" },
        ]}
      />
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="py-24 md:py-32" aria-labelledby="guide-heading">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Kopguide</p>
            <h1
              id="guide-heading"
              className="mt-3 text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
            >
              Valj ratt <span className="text-primary">mensskydd</span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Alla ar olika, och det ar bra. Har hjalper vi dig hitta det
              mensskydd som passar just dig - baserat pa absorptionsniva,
              material och livsstil.
            </p>
          </div>
        </section>

        {/* Product comparison */}
        <section className="border-y border-border bg-secondary py-24 md:py-32" aria-labelledby="compare-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2
              id="compare-heading"
              className="sr-only"
            >
              Produktjämförelse
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              {products.map((p) => (
                <div
                  key={p.name}
                  className="flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <p.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {p.name}
                  </h3>

                  <dl className="mt-6 space-y-4">
                    <div>
                      <dt className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                        Absorption
                      </dt>
                      <dd className="mt-1 text-sm text-card-foreground">
                        {p.absorption}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                        Material
                      </dt>
                      <dd className="mt-1 text-sm text-card-foreground">
                        {p.material}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                        Bast for
                      </dt>
                      <dd className="mt-1 text-sm text-card-foreground">
                        {p.best}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                        Storlekar & pris
                      </dt>
                      <dd className="mt-1 space-y-1">
                        {p.sizes.map((s) => (
                          <p key={s} className="text-sm text-card-foreground">
                            {s}
                          </p>
                        ))}
                      </dd>
                    </div>
                  </dl>

                  <ul className="mt-6 flex-1 space-y-2" role="list">
                    {p.pros.map((pro) => (
                      <li
                        key={pro}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {pro}
                      </li>
                    ))}
                  </ul>

                  <Button className="mt-6 w-full" asChild>
                    <Link href="https://www.menssakrad.se/webshop">
                      Kop {p.name.toLowerCase()}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-24 md:py-32" aria-labelledby="tips-heading">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2
                id="tips-heading"
                className="font-serif text-2xl font-bold text-foreground"
              >
                Vara basta tips
              </h2>
            </div>
            <div className="mt-8 space-y-6">
              {tips.map((t, i) => (
                <div
                  key={t.title}
                  className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">
                      {t.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild>
                <Link href="/produkter/startkit">
                  Bestall ett startkit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
