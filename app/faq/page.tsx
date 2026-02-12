import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/structured-data";
import { Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Vanliga fragor (FAQ)",
  description:
    "Svar pa vanliga fragor om Menssäkrads prenumeration, leverans, produkter, B2B-losningar och returnering. Allt du behover veta.",
  alternates: { canonical: "/faq" },
};

const faqCategories = [
  {
    title: "Prenumeration",
    faqs: [
      {
        question: "Hur fungerar prenumerationen?",
        answer:
          "Du valjer dina produkter och sa levererar vi dem automatiskt var tredje manad. Du kan nar som helst pausa, andra eller avsluta din prenumeration. Inga bindningstider.",
      },
      {
        question: "Kan jag pausa eller andra min prenumeration?",
        answer:
          "Absolut! Du kan nar som helst pausa, andra produktval eller avsluta din prenumeration. Kontakta oss via e-post sa hjalper vi dig direkt.",
      },
      {
        question: "Hur ofta levereras prenumerationen?",
        answer:
          "Standardleveransen sker var tredje manad. Vi kan aven anpassa intervallet efter dina onskemål.",
      },
    ],
  },
  {
    title: "Bestallning & betalning",
    faqs: [
      {
        question: "Vilka betalningsalternativ finns?",
        answer:
          "I var webshop erbjuder vi betalning via Klarna (faktura, delbetalning, kort). For B2B-kunder erbjuder vi faktura med 30 dagars betalningsvillkor.",
      },
      {
        question: "Finns det fri frakt?",
        answer:
          "Ja, vi erbjuder fri frakt pa bestallningar over 500 kr exklusive moms.",
      },
      {
        question: "Hur lång ar leveranstiden?",
        answer:
          "Vi skickar normalt inom 1-2 arbetsdagar. Leveranstiden ar sedan 1-3 arbetsdagar beroende pa var i landet du befinner dig.",
      },
    ],
  },
  {
    title: "Produkter & material",
    faqs: [
      {
        question: "Ar era produkter certifierade?",
        answer:
          "Ja, vara mensskydd ar tillverkade av 100% ekologisk bomull. Vi har certifierade arbetsvillkor och kollektivavtal i hela leverantorskedjan. Forvaringarna produceras i Sverige.",
      },
      {
        question: "Vilka absorptionsnivåer finns?",
        answer:
          "Våra tamponger finns i Normal och Plus. Bindorna har hög absorptionsförmåga och trosskydden ar for lättare flode. Se var kopguide for rekommendationer.",
      },
      {
        question: "Innehåller produkterna nagra kemikalier?",
        answer:
          "Nej, vara produkter ar fria fran klorblekning, parfym, kemiska tillsatser och syntetiska material. Bara ren ekologisk bomull.",
      },
    ],
  },
  {
    title: "Retur & reklamation",
    faqs: [
      {
        question: "Kan jag returnera produkter?",
        answer:
          "Vi erbjuder 14 dagars ångerrätt enligt konsumentkoplagen. Ooppnade produkter kan returneras. Kontakta oss sa hjalper vi dig.",
      },
      {
        question: "Vad gor jag om jag fatt felaktiga produkter?",
        answer:
          "Kontakta oss direkt via e-post eller telefon. Vi skickar ratt produkter och ordnar returfrakten - helt utan kostnad for dig.",
      },
    ],
  },
  {
    title: "For foretag & skolor",
    faqs: [
      {
        question: "Hur bestaller jag som foretag?",
        answer:
          "Kontakta oss for en kostnadsfri offert. Vi hjalper er att definiera behovet och skraddarsyr ett paket. Vi fakturerar och levererar direkt.",
      },
      {
        question: "Kan ni hantera upphandlingsprocesser?",
        answer:
          "Ja, vi stodjer offertforfarande och kan anpassa oss efter era upphandlingskrav. Vi har erfarenhet av bade privat och offentlig sektor.",
      },
      {
        question: "Hur mycket kostar det for en arbetsplats?",
        answer:
          "Det beror pa storlek och behov. Vart startkit borjar fran 2 095 kr ex. moms. Prenumeration kostar fran 279 kr per kvartal. Begär en offert for exakt pris.",
      },
    ],
  },
];

const allFaqs = faqCategories.flatMap((cat) => cat.faqs);

export default function FaqPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Hem", url: "https://www.menssakrad.se" },
          { name: "FAQ", url: "https://www.menssakrad.se/faq" },
        ]}
      />
      <FAQJsonLd faqs={allFaqs} />
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="py-24 md:py-32" aria-labelledby="faq-page-heading">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Vanliga fragor</p>
            <h1
              id="faq-page-heading"
              className="mt-3 text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
            >
              Vanliga <span className="text-primary">fragor</span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Hittar du inte svaret? Kontakta oss garna pa{" "}
              <a
                href="mailto:info@menssakrad.se"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                info@menssakrad.se
              </a>
            </p>
          </div>
        </section>

        {/* FAQ categories */}
        <section className="border-t border-border py-12 md:py-20">
          <div className="mx-auto max-w-3xl px-4 lg:px-8 space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.title}>
                <h2 className="mb-4 text-xl font-bold text-foreground">
                  {cat.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {cat.faqs.map((faq, idx) => (
                    <AccordionItem
                      key={`${cat.title}-${idx}`}
                      value={`${cat.title}-${idx}`}
                      className="rounded-xl border border-border bg-card px-6 shadow-sm data-[state=open]:shadow-md"
                    >
                      <AccordionTrigger className="py-5 text-left text-base font-semibold text-card-foreground hover:text-primary hover:no-underline [&[data-state=open]>svg]:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-t border-border bg-secondary py-24 md:py-32" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
            <Mail
              className="mx-auto mb-4 h-10 w-10 text-primary"
              aria-hidden="true"
            />
            <h2
              id="contact-heading"
              className="text-2xl font-bold text-foreground"
            >
              Hittar du inte svaret?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Vi svarar garna pa alla fragor. Skicka ett mejl eller besok var
              webshop.
            </p>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild>
                <a href="mailto:info@menssakrad.se">
                  <Mail className="mr-2 h-4 w-4" />
                  Kontakta oss
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/kopguide">
                  Las var kopguide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
