"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Residential", href: "/residential" },
  { label: "Commercial", href: "/commercial" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(18,41,79,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/images/logo.png"
              alt="AVS Infra"
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
              priority
            />
            <span
              className={`font-display text-xl tracking-tight font-semibold transition-colors ${
                scrolled ? "text-navy" : "text-cream"
              }`}
            >
              AVS <span className="text-coral">Infra</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-10">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-[15px] font-medium tracking-wide group ${
                  scrolled ? "text-ink-soft" : "text-cream/90"
                } hover:text-coral transition-colors`}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-coral transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="/contact"
            className={`hidden lg:inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              scrolled
                ? "bg-navy text-cream hover:bg-navy-deep"
                : "bg-cream text-navy hover:bg-gold hover:text-navy-deep"
            }`}
          >
            Enquire Now
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`lg:hidden ${scrolled ? "text-navy" : "text-cream"}`}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out bg-cream ${
          open ? "max-h-96 border-t border-navy/10" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-ink font-medium border-b border-navy/5 last:border-none"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="mt-4 inline-flex justify-center items-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold bg-navy text-cream"
          >
            Enquire Now
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
