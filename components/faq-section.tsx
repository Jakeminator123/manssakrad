import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Hur fungerar prenumerationen?",
    answer:
      "Du valjer dina produkter och sa levererar vi dem automatiskt var tredje manad. Du kan nar som helst pausa, andra eller avsluta din prenumeration. Inga bindningstider.",
  },
  {
    question: "Vilka betalningsalternativ finns?",
    answer:
      "Vi erbjuder betalning via Klarna (faktura, delbetalning, kort) i var webshop. For B2B-kunder erbjuder vi faktura med 30 dagars betalningsvillkor.",
  },
  {
    question: "Ar era produkter certifierade?",
    answer:
      "Ja, vara mensskydd ar tillverkade av 100% ekologisk bomull. Vi har certifierade arbetsvillkor och kollektivavtal i hela leverantorskedjan. Forvaringarna produceras i Sverige.",
  },
  {
    question: "Hur bestaller jag som foretag eller skola?",
    answer:
      "Kontakta oss for en kostnadsfri offert. Vi hjalper er att definiera behovet och skraddarsyr ett paket. Bestall via offertformular, e-post eller telefon.",
  },
  {
    question: "Kan jag byta eller returnera produkter?",
    answer:
      "Vi erbjuder 14 dagars angerratt enligt konsumentkoplagen. Ooppnade produkter kan returneras. Kontakta oss sa hjalper vi dig.",
  },
  {
    question: "Hur snabbt levererar ni?",
    answer:
      "Vi skickar normalt inom 1-2 arbetsdagar. Leveranstiden ar sedan 1-3 arbetsdagar. Fri frakt pa bestallningar over 500 kr.",
  },
];

export function FaqSection() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Vanliga fragor
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Har du fragor?
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={`faq-${index}`}
              value={`faq-${index}`}
              className="border-border"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <Button
            variant="outline"
            asChild
            className="bg-transparent text-foreground border-border hover:bg-secondary hover:text-foreground"
          >
            <Link href="/faq">
              Se alla fragor
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
