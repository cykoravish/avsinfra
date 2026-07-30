"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-navy-deep">
      {/* Breathing glow — signature element: represents clean air / a single breath */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.7, 0.45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="h-[38rem] w-[38rem] rounded-full bg-sage/30 blur-[110px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute h-72 w-72 rounded-full bg-gold/25 blur-[90px]"
        />
      </div>

      {/* Fine grain gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />

      {/* Skyline silhouette motif (echoes the logo's building mark) */}
      <svg
        className="absolute bottom-0 inset-x-0 w-full h-[38%] opacity-[0.14]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
      >
        <rect x="60" y="120" width="90" height="200" fill="#F0A731" />
        <rect x="170" y="60" width="70" height="260" fill="#FAF6EF" />
        <rect x="260" y="150" width="60" height="170" fill="#F0A731" />
        <rect x="1150" y="90" width="80" height="230" fill="#FAF6EF" />
        <rect x="1250" y="150" width="60" height="170" fill="#F0A731" />
        <rect x="1330" y="40" width="70" height="280" fill="#FAF6EF" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-10 pb-28 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[0.25em] text-xs sm:text-sm text-gold font-semibold mb-6"
        >
          Ensuring Better AQI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-cream text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-7xl font-medium max-w-4xl"
        >
          Building homes that let you{" "}
          <span className="italic text-sage-light">breathe</span>, freely.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-7 max-w-xl text-cream/70 text-base sm:text-lg leading-relaxed"
        >
          Welcome to the future of breathable living — communities designed
          for cleaner air, greener surroundings and everyday wellness.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <a
            href="/contact"
            className="rounded-full bg-coral text-cream px-7 py-3.5 font-semibold text-[15px] hover:bg-gold hover:text-navy-deep transition-colors"
          >
            Enquire Now
          </a>
          <a
            href="#about"
            className="text-cream/85 text-[15px] font-medium border-b border-cream/30 pb-1 hover:border-gold hover:text-gold transition-colors"
          >
            Discover AVS
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/50 z-10"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
