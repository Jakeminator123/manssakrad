import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/structured-data";
import {
  ArrowRight,
  FileText,
  CheckCircle2,
  Building2,
  Users,
  Heart,
  TrendingUp,
  Package,
  CreditCard,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mensskydd pa arbetsplatsen",
  description:
    "Gor er arbetsplats inkluderande med Menssäkrads ekologiska mensskydd. Startkit, prenumeration och faktura for foretag. Over 5 663 toaletter menssäkrade.",
  alternates: { canonical: "/arbetsplats" },
};

const benefits = [
  {
    icon: Heart,
    title: "Inkludering & jamstalldhet",
    description:
      "Visa att ni tar medarbetarnas valmaende pa allvar. Mensskydd pa toaletten ar en liten gest med stor effekt.",
  },
  {
    icon: TrendingUp,
    title: "Okad produktivitet",
    description:
      "Inga fler avbrott for att springa till butiken. Era medarbetare kan fokusera pa det som ar viktigt.",
  },
  {
    icon: Users,
    title: "Attraher talang",
    description:
      "En modern arbetsplats som bryr sig om alla. Det marker potentiella medarbetare.",
  },
  {
    icon: Building2,
    title: "Enkel implementation",
    description:
      "Vi hjalper er fran start. Bestall, montera och fyll pa. Prenumeration gor resten.",
  },
];

const packages = [
  {
    name: "Startkit",
    price: "Fran 2 095 kr",
    note: "ex. moms",
    features: [
      "200 ekologiska mensskydd",
      "Förvaringslåda i 5 fårger",
      "Klisterkit for montering",
      "Valj mellan box eller plasthyllor",
    ],
    popular: true,
  },
  {
    name: "Prenumeration",
    price: "Anpassat pris",
    note: "per kvartal",
    features: [
      "Automatisk paafyllning var 3:e manad",
      "Anpassat efter ert behov",
      "Faktura med 30 dagars villkor",
      "Andra eller pausa nar som helst",
    ],
    popular: false,
  },
  {
    name: "Skraddarsytt paket",
    price: "Offert",
    note: "vi aterommer inom 24h",
    features: [
      "For storre arbetsplatser",
      "Anpassade volymer och produktmix",
      "Projektledning vid uppsattning",
      "Dedikerad kontaktperson",
    ],
    popular: false,
  },
];

const caseStudies = [
  {
    company: "Mysafety",
    quote: "Självklart på en modern arbetsplats.",
    author: "Pia Elfdahl",
    role: "Head of PPMO & Workplace",
  },
  {
    company: "Fackförbundet Byggnads",
    quote: "En liten investering som ger högt värde.",
    author: "Catharina Jacobsen",
    role: "HR-chef",
  },
  {
    company: "Solkompaniet",
    quote: "En förutsättning för inkludering och jämställdhet.",
    author: "Nina Dahlberg",
    role: "HR Manager",
  },
];

export default function ArbetsplatsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hem", url: "https://www.menssakrad.se" },
          {
            name: "For arbetsplatsen",
            url: "https://www.menssakrad.se/arbetsplats",
          },
        ]}
      />
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 md:py-32" aria-labelledby="b2b-hero-heading">
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                  For foretag och organisationer
                </p>
                <h1
                  id="b2b-hero-heading"
                  className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
                >
                  Mensskydd pa{" "}
                  <span className="text-primary">arbetsplatsen</span>
                </h1>
                <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  Over 5 663 toaletter menssäkrade. Gor er arbetsplats till en
                  plats dar alla kanner sig trygga och inkluderade med
                  ekologiska mensskydd.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/offert">
                      <FileText className="mr-2 h-5 w-5" />
                      Fa en offert
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/produkter/startkit">
                      Bestall startkit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="https://6swbsh4syynqlumw.public.blob.vercel-storage.com/menssakrad/arbetsplats.jpg"
                  alt="Modern arbetsplats med inkluderande miljo och Menssäkrads mensskyddslosningar"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-y border-border bg-secondary py-24 md:py-32" aria-labelledby="benefits-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2
              id="benefits-heading"
              className="text-center text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            >
              Darfor ska ni <span className="text-primary">menss&auml;kra</span>
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex flex-col items-start rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <b.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 md:py-32" aria-labelledby="how-it-works-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2
              id="how-it-works-heading"
              className="text-center text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            >
              Sa enkelt <span className="text-primary">fungerar det</span>
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "1",
                  icon: Package,
                  title: "Valj paket",
                  desc: "Bestall startkit direkt eller begär en offert for skraddarsytt paket.",
                },
                {
                  step: "2",
                  icon: Truck,
                  title: "Leverans & montering",
                  desc: "Vi levererar snabbt. Montera enkelt med medföljande klisterkit.",
                },
                {
                  step: "3",
                  icon: CreditCard,
                  title: "Prenumeration",
                  desc: "Välj prenumeration for automatisk påfyllning. Faktura var tredje månad.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="relative flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="border-y border-border bg-secondary py-24 md:py-32" aria-labelledby="packages-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2
              id="packages-heading"
              className="text-center text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            >
              Vara <span className="text-primary">paket</span>
            </h2>
            <p className="mt-4 text-center text-lg text-muted-foreground">
              Oavsett storlek pa arbetsplats har vi en losning.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col rounded-xl border bg-card p-8 shadow-sm ${
                    pkg.popular
                      ? "border-primary shadow-md ring-1 ring-primary/20"
                      : "border-border"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Populärast
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-card-foreground">
                    {pkg.name}
                  </h3>
                  <p className="mt-2">
                    <span className="text-3xl font-bold text-foreground">
                      {pkg.price}
                    </span>
                    <span className="ml-1 text-sm text-muted-foreground">
                      {pkg.note}
                    </span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-3" role="list">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-8 w-full"
                    variant={pkg.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/offert">
                      {pkg.price === "Offert"
                        ? "Begär offert"
                        : "Bestall nu"}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="py-24 md:py-32" aria-labelledby="cases-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2
              id="cases-heading"
              className="text-center text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            >
              Foretag som{" "}
              <span className="text-primary">menss&auml;krat</span>
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {caseStudies.map((cs) => (
                <blockquote
                  key={cs.company}
                  className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                  <p className="flex-1 text-lg font-medium leading-relaxed text-card-foreground">
                    &ldquo;{cs.quote}&rdquo;
                  </p>
                  <footer className="mt-6 border-t border-border pt-4">
                    <cite className="not-italic">
                      <p className="text-sm font-semibold text-card-foreground">
                        {cs.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {cs.role}, {cs.company}
                      </p>
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
