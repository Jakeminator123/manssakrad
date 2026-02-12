"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Sjalvklart pa en modern arbetsplats.",
    author: "Pia Elfdahl",
    role: "Head of PPMO & Workplace",
    company: "Mysafety",
  },
  {
    quote: "Mensen ska inte gommas undan.",
    author: "Frida Agren",
    role: "Team Leader",
    company: "Oh My Interactive",
  },
  {
    quote: "En liten investering som ger hogt varde.",
    author: "Catharina Jacobsen",
    role: "HR-chef",
    company: "Fackforbundet Byggnads",
  },
  {
    quote: "Boxen ar lagom stor att ha inne pa toaletten dar den behovs!",
    author: "Karolina Nilsson",
    role: "Site Admin",
    company: "Arla Vimmerby/Visby",
  },
  {
    quote: "En forutsattning for inkludering.",
    author: "Nina Dahlberg",
    role: "HR Manager",
    company: "Solkompaniet",
  },
  {
    quote: "En sjalvklarhet for en trygg arbetsplats.",
    author: "Maja Smedberg",
    role: "Underhall & service",
    company: "Nolato i Gotene",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const totalPages = Math.ceil(testimonials.length / 3);

  const goNext = () => setCurrent((prev) => (prev + 1) % totalPages);
  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + totalPages) % totalPages);

  const visibleTestimonials = testimonials.slice(
    current * 3,
    current * 3 + 3
  );

  return (
    <section
      className="border-y border-border bg-secondary py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Hjaltarna som leder arbetet framat
            </p>
            <h2
              id="testimonials-heading"
              className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl"
            >
              Vad vara kunder sager
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              aria-label="Foregaende omdomem"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              aria-label="Nasta omdomem"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {visibleTestimonials.map((t) => (
            <blockquote
              key={t.author}
              className="flex flex-col rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/30"
            >
              <p className="flex-1 font-serif text-xl font-medium leading-relaxed text-card-foreground italic">
                {'"'}{t.quote}{'"'}
              </p>
              <footer className="mt-8 border-t border-border pt-4">
                <cite className="not-italic">
                  <p className="text-sm font-semibold text-card-foreground">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Mobile dots */}
        <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={`dot-${i}`}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                current === i
                  ? "w-6 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Visa sida ${i + 1} av ${totalPages}`}
              aria-current={current === i ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
