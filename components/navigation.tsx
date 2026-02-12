"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo, LogoMark } from "@/components/logo";

const navLinks = [
  {
    label: "Produkter",
    href: "/produkter",
    children: [
      { label: "Ekologiska bindor", href: "/produkter/bindor" },
      { label: "Ekologiska tamponger", href: "/produkter/tamponger" },
      { label: "Trosskydd", href: "/produkter/trosskydd" },
      { label: "Boxen", href: "/produkter/boxen" },
      { label: "Startkit", href: "/produkter/startkit" },
    ],
  },
  { label: "For arbetsplatsen", href: "/arbetsplats" },
  { label: "For skolan", href: "/skola" },
  { label: "Hallbarhet", href: "/hallbarhet" },
  { label: "Kopguide", href: "/kopguide" },
  { label: "Recensioner", href: "/recensioner" },
  { label: "FAQ", href: "/faq" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80"
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
        aria-label="Huvudnavigering"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none rounded"
          aria-label="Menssäkrad - Till startsidan"
        >
          <Logo className="hidden sm:block" width={160} height={28} />
          <LogoMark className="sm:hidden" size={36} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      dropdownOpen && "rotate-180"
                    )}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg border border-border bg-card p-1.5 shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-secondary hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm" asChild className="bg-transparent text-foreground border-border hover:bg-secondary hover:text-foreground">
            <Link href="https://www.menssakrad.se/webshop">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Shop
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/offert">Offert</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-secondary lg:hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Stang meny" : "Oppna meny"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="border-t border-border bg-card lg:hidden"
          role="dialog"
          aria-label="Mobilmeny"
        >
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-3 py-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded-md px-6 py-2 text-sm text-card-foreground transition-colors hover:bg-secondary hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm text-card-foreground transition-colors hover:bg-secondary hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="flex flex-col gap-2 pt-3 border-t border-border">
              <Button
                variant="outline"
                asChild
                className="w-full bg-transparent text-foreground border-border hover:bg-secondary hover:text-foreground"
              >
                <Link href="https://www.menssakrad.se/webshop">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Webshop
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/offert">Fa en offert</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
