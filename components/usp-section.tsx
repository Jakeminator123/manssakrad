import { Heart, Calendar, Building2, GraduationCap } from "lucide-react";

const usps = [
  {
    icon: Heart,
    title: "For privatpersoner",
    description:
      "Prenumerera pa ekologiska mensskydd som levereras direkt hem var tredje manad. Aldrig mer tomma skap.",
    href: "/produkter",
    cta: "Utforska produkter",
  },
  {
    icon: Building2,
    title: "For arbetsplatsen",
    description:
      "Gor arbetsplatsen inkluderande med mensskydd pa toaletten. Startkit, prenumeration och faktura.",
    href: "/arbetsplats",
    cta: "Las mer om B2B",
  },
  {
    icon: GraduationCap,
    title: "For skolan",
    description:
      "Sjalvklart ska elever ha tillgang till mensskydd. Losningar for kommuner, skolor och elevhalsa.",
    href: "/skola",
    cta: "Las mer for skolan",
  },
  {
    icon: Calendar,
    title: "Prenumeration",
    description:
      "Valj dina produkter och fa dem levererade automatiskt. Pausa, andra eller avsluta nar du vill.",
    href: "/faq",
    cta: "Sa funkar det",
  },
];

export function UspSection() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="usp-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="usp-heading"
            className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl"
          >
            Boxen som gor mensskydd{" "}
            <span className="text-primary">sjalvklart</span>
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Att erbjuda mensskydd ska vara enkelt. Med var smarta box far ni en
            stilren, palitlig och hallbar losning som gor skillnad direkt i
            vardagen.
          </p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp) => (
            <a
              key={usp.title}
              href={usp.href}
              className="group relative flex flex-col bg-card p-8 transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset focus-visible:outline-none"
            >
              <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <usp.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-card-foreground">
                {usp.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {usp.description}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                {usp.cta}
                <svg
                  className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
