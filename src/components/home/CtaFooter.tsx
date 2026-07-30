"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function CtaFooter() {
  return (
    <>
      {/* CTA */}
      <section className="bg-navy-deep relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 h-72 w-[46rem] rounded-full bg-coral/10 blur-[110px]" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 py-24 sm:py-32 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-6xl text-cream leading-[1.1]"
          >
            The future of living
            <br />
            begins <span className="italic text-gold">here</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-cream/60 text-lg max-w-lg mx-auto"
          >
            Discover communities designed for healthier lifestyles, cleaner
            environments and lasting value.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-coral text-cream px-8 py-4 font-semibold hover:bg-gold hover:text-navy-deep transition-colors"
          >
            Enquire Now <ArrowUpRight size={18} />
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-deep border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt="AVS Infra"
                width={38}
                height={38}
                className="h-9 w-9 object-contain"
              />
              <span className="font-display text-lg text-cream font-semibold">
                AVS <span className="text-coral">Infra</span>
              </span>
            </div>
            <p className="mt-4 text-cream/50 text-sm leading-relaxed">
              Building homes that let you breathe, freely — since 2014.
            </p>
          </div>

          <div>
            <p className="text-cream text-sm font-semibold uppercase tracking-wide mb-4">
              Explore
            </p>
            <ul className="space-y-2.5 text-sm text-cream/55">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><a href="/about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="/residential" className="hover:text-gold transition-colors">Residential</a></li>
              <li><a href="/commercial" className="hover:text-gold transition-colors">Commercial</a></li>
            </ul>
          </div>

          <div>
            <p className="text-cream text-sm font-semibold uppercase tracking-wide mb-4">
              Projects
            </p>
            <ul className="space-y-2.5 text-sm text-cream/55">
              <li>AVS City Palace</li>
              <li>AVS City Square</li>
              <li>Surya Heights</li>
              <li>Sangwan Heights</li>
            </ul>
          </div>

          <div>
            <p className="text-cream text-sm font-semibold uppercase tracking-wide mb-4">
              Get in touch
            </p>
            <ul className="space-y-3 text-sm text-cream/55">
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-gold shrink-0" /> +91 00000 00000
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-gold shrink-0" /> info@avsindiainfra.com
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="text-gold shrink-0" /> Delhi NCR, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 py-6 text-center text-cream/35 text-xs">
          © {new Date().getFullYear()} AVS Infra. All rights reserved.
        </div>
      </footer>
    </>
  );
}
