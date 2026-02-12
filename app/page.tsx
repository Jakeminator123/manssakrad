import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { UspSection } from "@/components/usp-section";
import { ProductsSection } from "@/components/products-section";
import { SustainabilitySection } from "@/components/sustainability-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
  FAQJsonLd,
} from "@/components/structured-data";

const homeFaqs = [
  {
    question: "Hur fungerar prenumerationen?",
    answer:
      "Du väljer dina produkter och så levererar vi dem automatiskt var tredje månad. Du kan när som helst pausa, ändra eller avsluta din prenumeration. Inga bindningstider.",
  },
  {
    question: "Vilka betalningsalternativ finns?",
    answer:
      "Vi erbjuder betalning via Klarna (faktura, delbetalning, kort) i vår webshop. För B2B-kunder erbjuder vi faktura med 30 dagars betalningsvillkor.",
  },
  {
    question: "Är era produkter certifierade?",
    answer:
      "Ja, våra mensskydd är tillverkade av 100% ekologisk bomull. Vi har certifierade arbetsvillkor och kollektivavtal i hela leverantörskedjan.",
  },
  {
    question: "Hur beställer jag som företag eller skola?",
    answer:
      "Kontakta oss för en kostnadsfri offert. Vi hjälper er att definiera behovet och skräddarsyr ett paket.",
  },
  {
    question: "Kan jag byta eller returnera produkter?",
    answer:
      "Vi erbjuder 14 dagars ångerrätt enligt konsumentköplagen. Oöppnade produkter kan returneras.",
  },
  {
    question: "Hur snabbt levererar ni?",
    answer:
      "Vi skickar normalt inom 1-2 arbetsdagar. Leveranstiden är sedan 1-3 arbetsdagar. Fri frakt på beställningar över 500 kr.",
  },
];

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <FAQJsonLd faqs={homeFaqs} />
      <Navigation />
      <main id="main-content" aria-label="Huvudinnehall - Mensskydd for alla">
        <Hero />
        <TrustBar />
        <UspSection />
        <ProductsSection />
        <SustainabilitySection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
