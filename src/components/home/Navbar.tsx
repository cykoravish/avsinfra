"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone, Mail } from "lucide-react";

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(18,41,79,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 z-50 relative">
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
                scrolled || open ? "text-navy" : "text-cream"
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
            className={`lg:hidden z-50 relative h-10 w-10 flex items-center justify-center ${
              open || scrolled ? "text-navy" : "text-cream"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile drawer — full-screen premium overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 z-40 bg-navy-deep"
          >
            <div className="h-full flex flex-col px-8 pt-28 pb-10 overflow-y-auto">
              <nav className="flex flex-col gap-1">
                {LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.45, delay: 0.15 + i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-4 border-b border-cream/10"
                    >
                      <span className="font-display text-3xl text-cream group-active:text-gold transition-colors">
                        {link.label}
                      </span>
                      <ArrowUpRight
                        size={20}
                        className="text-cream/30 group-active:text-gold transition-colors"
                      />
                    </a>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-auto"
              >
                <a
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex justify-center items-center gap-1.5 rounded-full px-6 py-4 text-sm font-semibold bg-coral text-cream w-full"
                >
                  Enquire Now
                  <ArrowUpRight size={16} />
                </a>
                <div className="mt-6 flex flex-col gap-3 text-cream/50 text-sm">
                  <span className="flex items-center gap-2.5">
                    <Phone size={14} className="text-gold" /> +91 00000 00000
                  </span>
                  <span className="flex items-center gap-2.5">
                    <Mail size={14} className="text-gold" /> info@avsindiainfra.com
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
