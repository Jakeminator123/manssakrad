import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/logo";

const footerLinks = {
  Produkter: [
    { label: "Ekologiska bindor", href: "/produkter/bindor" },
    { label: "Ekologiska tamponger", href: "/produkter/tamponger" },
    { label: "Trosskydd", href: "/produkter/trosskydd" },
    { label: "Boxen", href: "/produkter/boxen" },
    { label: "Startkit", href: "/produkter/startkit" },
    { label: "Webshop", href: "https://www.menssakrad.se/webshop" },
  ],
  "For foretag": [
    { label: "Mensskydd pa arbetsplatsen", href: "/arbetsplats" },
    { label: "Mensskydd i skolan", href: "/skola" },
    { label: "Fa en offert", href: "/offert" },
    { label: "Prenumeration", href: "/faq" },
  ],
  Information: [
    { label: "Om oss", href: "/om-oss" },
    { label: "Hallbarhet", href: "/hallbarhet" },
    { label: "Kopguide", href: "/kopguide" },
    { label: "Recensioner", href: "/recensioner" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontakt", href: "/kontakt" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none rounded"
              aria-label="Menssäkrad - Till startsidan"
            >
              <Logo width={160} height={28} />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Sveriges ledande leverantor av ekologiska mensskydd.
              Prenumeration for privatpersoner och kompletta losningar for
              skolor och arbetsplatser.
            </p>
            <address className="mt-6 space-y-3 text-sm not-italic text-muted-foreground">
              <p className="flex items-center gap-2.5">
                <Mail
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />
                <a
                  href="mailto:info@menssakrad.se"
                  className="transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  info@menssakrad.se
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />
                <a
                  href="tel:+46XXXXXXXXX"
                  className="transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  Kontakta oss
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />
                <span>Sverige</span>
              </p>
            </address>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-foreground">
                {category}
              </h3>
              <ul className="mt-4 space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Menss&auml;krad. Alla
            r&auml;ttigheter f&ouml;rbeh&aring;llna.
          </p>
          <div className="flex gap-6">
            <Link
              href="/integritetspolicy"
              className="text-xs text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Integritetspolicy
            </Link>
            <Link
              href="/kopvillkor"
              className="text-xs text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Kopvillkor
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Folj det roda flodet - newsletter bar */}
      <div className="border-t border-border bg-secondary px-4 py-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              Folj det roda flodet
            </span>{" "}
            - Joina revolutionen och fa ibland nyheter, erbjudanden och
            artiklar.
          </p>
          <div className="flex gap-3">
            <Link
              href="/offert"
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Offert
            </Link>
            <Link
              href="https://www.menssakrad.se/webshop"
              className="rounded-md border border-border bg-transparent px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Shop
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
