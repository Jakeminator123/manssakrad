import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { CtaSection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/structured-data";
import { Quote, Star, ArrowRight, Building2, GraduationCap, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Recensioner & omdomen",
  description:
    "Las vad vara kunder sager om Menssäkrads ekologiska mensskydd. Omdomen fran arbetsplatser, skolor och privatpersoner i hela Sverige.",
  alternates: { canonical: "/recensioner" },
};

type ReviewCategory = "arbetsplats" | "skola" | "privatperson";

interface Review {
  quote: string;
  author: string;
  role: string;
  company: string;
  category: ReviewCategory;
  rating: number;
}

const reviews: Review[] = [
  {
    quote:
      "Sjalvklart pa en modern arbetsplats. Vi sag en direkt positiv effekt pa arbetsklimatet nar vi mensskyddssakrade vara toaletter.",
    author: "Pia Elfdahl",
    role: "Head of PPMO & Workplace",
    company: "Mysafety",
    category: "arbetsplats",
    rating: 5,
  },
  {
    quote:
      "Mensen ska inte gommas undan. Att ha mensskydd tillgangliga visar att vi bryr oss om alla medarbetares valmaende.",
    author: "Frida Agren",
    role: "Team Leader",
    company: "Oh My Interactive",
    category: "arbetsplats",
    rating: 5,
  },
  {
    quote:
      "En liten investering som ger hogt varde. Bade for jamstalldhet och for medarbetarnas trivsel.",
    author: "Catharina Jacobsen",
    role: "HR-chef",
    company: "Fackforbundet Byggnads",
    category: "arbetsplats",
    rating: 5,
  },
  {
    quote:
      "Boxen ar lagom stor att ha inne pa toaletten dar den behovs! Enkel montering och snyggt resultat.",
    author: "Karolina Nilsson",
    role: "Site Admin",
    company: "Arla Vimmerby/Visby",
    category: "arbetsplats",
    rating: 5,
  },
  {
    quote:
      "En forutsattning for inkludering och jamstalldhet. Vi ar stolta over att vara en mensskydssakrad arbetsplats.",
    author: "Nina Dahlberg",
    role: "HR Manager",
    company: "Solkompaniet",
    category: "arbetsplats",
    rating: 5,
  },
  {
    quote:
      "En sjalvklarhet for en trygg arbetsplats. Vara medarbetare uppskattar det enormt.",
    author: "Maja Smedberg",
    role: "Underhall & service",
    company: "Nolato i Gotene",
    category: "arbetsplats",
    rating: 5,
  },
  {
    quote:
      "Eleverna kanner sig tryggare och mer inkluderade. Det ar en enkel atgard som verkligen gor skillnad.",
    author: "Anna Lindqvist",
    role: "Rektor",
    company: "Solvandsskolan",
    category: "skola",
    rating: 5,
  },
  {
    quote:
      "Vi sag direkt att stressnivan minskade bland eleverna. Ingen behover langre oroa sig for att bli tagen pa sangen.",
    author: "Karin Johansson",
    role: "Elevhalsosamordnare",
    company: "Ostersunds kommun",
    category: "skola",
    rating: 5,
  },
  {
    quote:
      "Kvaliteten ar fantastisk. Jag kanner mig trygg med att produkterna ar ekologiska och fria fran kemikalier.",
    author: "Sara",
    role: "Prenumerant sedan 2023",
    company: "",
    category: "privatperson",
    rating: 5,
  },
  {
    quote:
      "Att slippa tanka pa att kopa mensskydd ar vaert varenda krona. Leveranserna kommer som ett klockverk.",
    author: "Emma",
    role: "Prenumerant sedan 2024",
    company: "",
    category: "privatperson",
    rating: 5,
  },
];

const categoryIcon: Record<ReviewCategory, typeof Building2> = {
  arbetsplats: Building2,
  skola: GraduationCap,
  privatperson: User,
};

const categoryLabel: Record<ReviewCategory, string> = {
  arbetsplats: "Arbetsplats",
  skola: "Skola",
  privatperson: "Privatperson",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} av 5 stjarnor`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={`star-${i}`}
          className={`h-4 w-4 ${
            i < rating ? "fill-primary text-primary" : "fill-muted text-muted"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function RecensionerPage() {
  const averageRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hem", url: "https://www.menssakrad.se" },
          {
            name: "Recensioner",
            url: "https://www.menssakrad.se/recensioner",
          },
        ]}
      />
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section
          className="py-24 md:py-32"
          aria-labelledby="reviews-heading"
        >
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Recensioner</p>
            <h1
              id="reviews-heading"
              className="mt-3 text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
            >
              Vad vara kunder{" "}
              <span className="text-primary">sager</span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Fran storre foretag till enskilda prenumeranter - har ar deras
              ord om att vara Mensskydssakrad.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 shadow-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={`avg-star-${i}`}
                    className="h-5 w-5 fill-primary text-primary"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-foreground">
                {averageRating}
              </span>
              <span className="text-sm text-muted-foreground">
                / 5 ({reviews.length} omdomen)
              </span>
            </div>
          </div>
        </section>

        {/* Reviews grid */}
        <section className="border-t border-border py-24 md:py-32" aria-label="Alla omdomen">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => {
                const Icon = categoryIcon[review.category];
                return (
                  <blockquote
                    key={review.author}
                    className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <StarRating rating={review.rating} />
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        <Icon className="h-3 w-3" aria-hidden="true" />
                        {categoryLabel[review.category]}
                      </span>
                    </div>
                    <Quote
                      className="mb-3 h-6 w-6 text-primary/30"
                      aria-hidden="true"
                    />
                    <p className="flex-1 text-base leading-relaxed text-card-foreground">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                    <footer className="mt-6 border-t border-border pt-4">
                      <cite className="not-italic">
                        <p className="text-sm font-semibold text-card-foreground">
                          {review.author}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {review.role}
                          {review.company && `, ${review.company}`}
                        </p>
                      </cite>
                    </footer>
                  </blockquote>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA to share */}
        <section
          className="border-t border-border bg-secondary py-24 md:py-32"
          aria-labelledby="share-heading"
        >
          <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
            <h2
              id="share-heading"
              className="text-2xl font-bold text-foreground"
            >
              Ar ni ocksa Mensskydssakrade?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Dela ert omdomme med oss sa syns ni har. Vi vill garna hora fran
              alla - arbetsplatser, skolor och privatpersoner.
            </p>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild>
                <a href="mailto:info@menssakrad.se?subject=Omdomme fran kund">
                  Skicka ert omdomme
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/arbetsplats">
                  Mensskydssakra er arbetsplats
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
