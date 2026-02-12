import { Leaf, ShieldCheck, Truck, Recycle, Award } from "lucide-react";

const trustItems = [
  { icon: Leaf, label: "100% ekologisk bomull" },
  { icon: ShieldCheck, label: "Certifierade arbetsvillkor" },
  { icon: Truck, label: "Fri frakt over 500 kr" },
  { icon: Recycle, label: "Hallbart producerade" },
  { icon: Award, label: "Svenskt foretag" },
];

export function TrustBar() {
  return (
    <section
      className="border-b border-border bg-background py-5"
      aria-label="Fortroendefaktorer"
    >
      <div className="mx-auto max-w-7xl overflow-x-auto px-4 lg:px-8">
        <ul
          className="flex items-center justify-between gap-8 min-w-max"
          role="list"
        >
          {trustItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2.5 text-sm text-muted-foreground"
            >
              <item.icon
                className="h-4 w-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span className="uppercase tracking-widest text-xs">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
