"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail } from "lucide-react";

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

  // Close automatically if resized up to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Header content color: navy when on solid light bg (scrolled, drawer closed), cream otherwise.
  // Important: when the drawer is OPEN, its background is always dark (navy-deep),
  // so the toggle icon must stay cream — never navy-on-navy (that was the "faded X" bug).
  const useDarkIcon = scrolled && !open;

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div
        className={`transition-colors duration-300 ${
          open
            ? "bg-navy-deep"
            : scrolled
            ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(18,41,79,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo — image only, correct aspect ratio (148x80 source) */}
            <Link
              href="/"
              className="relative z-[70] shrink-0 flex items-center"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/images/logo-v2.png"
                alt="AVS Infra"
                width={148}
                height={80}
                priority
                className="h-9 sm:h-11 w-auto object-contain"
              />
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

            {/* Desktop CTA */}
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

            {/* Mobile hamburger — 2 lines, animates to X */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="lg:hidden relative z-[70] h-10 w-10 -mr-2 flex items-center justify-center shrink-0"
            >
              <span
                className={`absolute h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out ${
                  useDarkIcon ? "bg-navy" : "bg-cream"
                } ${open ? "rotate-45 translate-y-0" : "-translate-y-[5px]"}`}
              />
              <span
                className={`absolute h-[2px] w-6 rounded-full transition-all duration-300 ease-in-out ${
                  useDarkIcon ? "bg-navy" : "bg-cream"
                } ${open ? "-rotate-45 translate-y-0" : "translate-y-[5px]"}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer — solid, opaque, opacity-only animation (no clip-path) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 z-50 bg-navy-deep"
          >
            <div className="h-full flex flex-col px-8 pt-24 pb-8 overflow-y-auto nice-scrollbar">
              <nav className="flex flex-col gap-1">
                {LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-4 px-3 -mx-3 rounded-xl border-b border-cream/10 transition-colors duration-200 hover:bg-cream/[0.06] active:bg-gold/10"
                    >
                      <span className="font-display text-3xl text-cream group-hover:text-gold group-active:text-gold transition-colors duration-200">
                        {link.label}
                      </span>
                      <ArrowUpRight
                        size={20}
                        className="text-cream/30 group-hover:text-gold group-hover:translate-x-0.5 group-active:text-gold transition-all duration-200"
                      />
                    </a>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.45 }}
                className="mt-10"
              >
                <a
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex justify-center items-center gap-1.5 rounded-full px-6 py-4 text-sm font-semibold bg-coral text-cream w-full transition-colors duration-200 hover:bg-gold hover:text-navy-deep active:bg-gold active:text-navy-deep"
                >
                  Enquire Now
                  <ArrowUpRight size={16} />
                </a>
                <div className="mt-6 flex flex-col gap-3 text-cream/50 text-sm">
                  <span className="flex items-center gap-2.5">
                    <Phone size={14} className="text-gold shrink-0" /> +91 00000 00000
                  </span>
                  <span className="flex items-center gap-2.5">
                    <Mail size={14} className="text-gold shrink-0" /> info@avsindiainfra.com
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