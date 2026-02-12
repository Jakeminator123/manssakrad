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
  GraduationCap,
  Shield,
  BookOpen,
  HeartHandshake,
  Users,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mensskydd i skolan och kommunen",
  description:
    "Sjalvklart ska elever ha tillgang till mensskydd. Losningar for kommuner, skolor och elevhalsa. Upphandlingsvanligt, ekologiskt och enkelt.",
  alternates: { canonical: "/skola" },
};

const reasons = [
  {
    icon: Shield,
    title: "Trygghet for elever",
    description:
      "Ingen elev ska behova missa undervisning eller kanna sig otrygg for att mensen kommer oväntat.",
  },
  {
    icon: Scale,
    title: "Jamstalldhet i praktiken",
    description:
      "Precis som toalettpapper ar en sjalvklarhet bor mensskydd vara det. En enkel atgard med stor symbolik.",
  },
  {
    icon: BookOpen,
    title: "Stodjer elevhälsa",
    description:
      "Mensskydd i skolan ar en del av ett helhetsperspektiv pa elevernas halsa och välmående.",
  },
  {
    icon: HeartHandshake,
    title: "Normaliserar mens",
    description:
      "Genom att gora mensskydd tillgangliga signalerar skolan att mens ar nagot naturligt, inte nagot att gomma.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Kontakta oss",
    desc: "Beskriv er skola, antal toaletter och onskemål. Vi ger er ett forslag.",
  },
  {
    step: "2",
    title: "Offert & beslut",
    desc: "Ni får en tydlig offert. Vi stodjer upphandlingsprocessen vid behov.",
  },
  {
    step: "3",
    title: "Leverans & montering",
    desc: "Vi levererar startkit med forvaringslador och mensskydd. Enkel montering.",
  },
  {
    step: "4",
    title: "Lopande paafyllning",
    desc: "Prenumeration saker att det aldrig tar slut. Faktura per kvartal.",
  },
];

export default function SkolaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hem", url: "https://www.menssakrad.se" },
          {
            name: "For skolan",
            url: "https://www.menssakrad.se/skola",
          },
        ]}
      />
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 md:py-32" aria-labelledby="school-hero-heading">
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                  For skolor och kommuner
                </p>
                <h1
                  id="school-hero-heading"
                  className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
                >
                  Mensskydd i{" "}
                  <span className="text-primary">skolan</span>
                </h1>
                <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  Sjalvklart ska elever ha tillgang till mensskydd. Vi erbjuder
                  losningar anpassade for skolor, kommuner och elevhalsa med
                  ekologiska produkter och enkel administration.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/offert">
                      <FileText className="mr-2 h-5 w-5" />
                      Begär offert for er skola
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/samtalsunderlag">
                      Ladda ner samtalsunderlag
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="https://6swbsh4syynqlumw.public.blob.vercel-storage.com/menssakrad/skola.jpg"
                  alt="Modern svensk skolmiljo med tillgangliga mensskydd for elever"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border" />
              </div>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="border-y border-border bg-secondary py-24 md:py-32" aria-labelledby="why-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2
              id="why-heading"
              className="text-center text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            >
              Darfor behover skolan{" "}
              <span className="text-primary">mensskydd</span>
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <r.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 md:py-32" aria-labelledby="process-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2
              id="process-heading"
              className="text-center text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            >
              Sa gar det <span className="text-primary">till</span>
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {processSteps.map((s) => (
                <div
                  key={s.step}
                  className="relative flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    {s.step}
                  </div>
                  <h3 className="text-base font-semibold text-card-foreground">
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

        {/* For decision makers */}
        <section className="border-t border-border bg-secondary py-24 md:py-32" aria-labelledby="decision-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-primary" aria-hidden="true" />
                <h2
                  id="decision-heading"
                  className="text-2xl font-bold text-card-foreground"
                >
                  For beslutsfattare
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Vi forstar att inforandet av mensskydd i skolan kan innebara
                nya rutiner. Darfor stodjer vi er genom hela processen.
              </p>
              <ul className="mt-6 space-y-3" role="list">
                {[
                  "Upphandlingsvänligt: vi stodjer offertforfarande",
                  "Anpassade volymer for era behov och budget",
                  "Ekologiskt och hållbart - bra for miljon och elever",
                  "Enkel fakturering per kvartal",
                  "Samtalsunderlag att använda internt",
                  "Lokal produktion av forvaringar i Sverige",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="mt-8" asChild>
                <Link href="/offert">
                  Begär offert for er kommun
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
