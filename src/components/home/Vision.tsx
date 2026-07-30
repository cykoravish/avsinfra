"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="bg-navy-deep py-28 sm:py-36 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-80 w-[40rem] rounded-full bg-sage/10 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-gold"
        >
          Our Vision
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl text-cream mt-6 leading-[1.1]"
        >
          Building cities that{" "}
          <span className="italic text-sage-light">breathe</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          The future of urban living won&rsquo;t be defined by taller
          skylines. It will be defined by healthier ones. Because the future
          deserves more than buildings — it deserves better living.
        </motion.p>
      </div>
    </section>
  );
}
