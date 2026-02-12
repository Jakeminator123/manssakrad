import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/structured-data";
import {
  Leaf,
  Factory,
  Recycle,
  Heart,
  Globe,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hallbarhet - Ekologiskt & ansvarsfullt",
  description:
    "Sa arbetar Menssäkrad med hallbarhet. Ekologisk bomull, svensk produktion, certifierade arbetsvillkor och minimalt avfall.",
  alternates: { canonical: "/hallbarhet" },
};

const pillars = [
  {
    icon: Leaf,
    title: "Ekologisk bomull",
    description:
      "Alla vara mensskydd ar tillverkade av 100% ekologisk bomull. Ingen klorblekning, inga kemikalier och inga syntetiska material mot huden.",
  },
  {
    icon: Factory,
    title: "Svensk produktion",
    description:
      "Vara forvaringar produceras i Sverige. Kortare transporter, lokal sysselsattning och full kontroll over kvaliteten.",
  },
  {
    icon: Users,
    title: "Certifierade arbetsvillkor",
    description:
      "Vi stallar krav pa hela leverantorskedjan. Kollektivavtal, schyssta loner och sakra arbetsforhallanden ar grundlaggande.",
  },
  {
    icon: Recycle,
    title: "Minimalt avfall",
    description:
      "Vi arbetar aktivt for att minimera forpackningsmaterial och valja atervinningsbara material i hela kedjan.",
  },
  {
    icon: Globe,
    title: "Klimatmedveten logistik",
    description:
      "Genom prenumerationsmodellen optimerar vi leveranser och minskar antalet transporter jamfort med sporadiska kop.",
  },
  {
    icon: Heart,
    title: "Kvinnoagt foretag",
    description:
      "Menssäkrad ags och drivs av kvinnor. Nar du handlar av oss investerar du i ett mer jamstallt foretagande.",
  },
];

const certifications = [
  "100% ekologisk bomull (GOTS-standard)",
  "Ingen klorblekning eller kemiska tillsatser",
  "Forvaringar tillverkade i Sverige",
  "Kollektivavtal for alla anstallda",
  "Socialt certifierad leverantorskedja",
  "Atervinningsbara forpackningsmaterial",
];

export default function HallbarhetPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hem", url: "https://www.menssakrad.se" },
          {
            name: "Hallbarhet",
            url: "https://www.menssakrad.se/hallbarhet",
          },
        ]}
      />
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 md:py-32" aria-labelledby="sustainability-hero-heading">
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Hallbarhet</p>
                <h1
                  id="sustainability-hero-heading"
                  className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
                >
                  Hallbarhet ar{" "}
                  <span className="text-primary">inte forhandlingsbart</span>
                </h1>
                <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  For oss handlar hallbarhet om mer an material. Det handlar
                  om manniskor, processer och att gora ratt i varje steg - fran
                  bomullsfalt till toalettrum.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="https://6swbsh4syynqlumw.public.blob.vercel-storage.com/menssakrad/hallbarhet.jpg"
                  alt="Ekologisk bomullsodling - ratt fran jordens hallbara groda"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border" />
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="border-y border-border bg-secondary py-24 md:py-32" aria-labelledby="pillars-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2
              id="pillars-heading"
              className="text-center text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            >
              Vara sex <span className="text-primary">hallbarhetspelare</span>
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <p.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 md:py-32" aria-labelledby="cert-heading">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2
              id="cert-heading"
              className="text-center text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            >
              Certifieringar &{" "}
              <span className="text-primary">garanti</span>
            </h2>
            <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-sm">
              <ul className="space-y-4" role="list">
                {certifications.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-base">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 text-center">
              <Button asChild>
                <Link href="/produkter">
                  Upptack vara produkter
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
