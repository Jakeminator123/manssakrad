import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, Users, Factory, ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/images";

const stats = [
  { value: "6 080+", label: "Toaletter mensskrade hittills" },
  { value: "100%", label: "Ekologisk bomull" },
  { value: "Var 3:e", label: "Manad leverans med prenumeration" },
];

export function SustainabilitySection() {
  return (
    <section
      className="py-24 md:py-32"
      aria-labelledby="sustainability-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={IMAGES.hallbarhet}
              alt="Ekologisk bomullsodling - ramaterial for mensskydd"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-border" />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Hallbarhet & schyssta villkor
            </p>
            <h2
              id="sustainability-heading"
              className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            >
              Producerat med omtanke
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Forvaringslosningar tillverkade i Sverige och mensskydd i
              ekologisk bomull, producerade under certifierade och rattvisa
              arbetsvillkor. Hallbarhet ar en sjalvklarhet for oss.
            </p>

            <ul className="mt-8 space-y-4" role="list">
              {[
                { icon: Leaf, text: "100% ekologisk certifierad bomull" },
                { icon: Factory, text: "Producerat i Sverige" },
                { icon: Users, text: "Kvinnoagt och drivet" },
              ].map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <item.icon
                      className="h-4 w-4 text-primary"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            <Button className="mt-8" asChild>
              <Link href="/hallbarhet">
                Las mer om var hallbarhet
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card px-6 py-10 text-center">
              <p className="font-serif text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
