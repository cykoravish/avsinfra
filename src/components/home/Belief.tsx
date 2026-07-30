"use client";

import { motion } from "framer-motion";
import { Wind } from "lucide-react";

export default function Belief() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            <Wind size={15} /> Our Belief
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-navy mt-5 leading-[1.12]">
            Tomorrow&rsquo;s luxury
            <br />
            is <span className="italic text-coral">invisible</span>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-7 lg:col-start-6"
        >
          <p className="text-ink-soft text-lg sm:text-xl leading-relaxed">
            Not every luxury can be seen — like clean air. As cities grow
            denser and pollution becomes an everyday reality, AVS believes
            homes should do more than provide shelter. They should actively
            improve the quality of life.
          </p>
          <p className="mt-6 text-ink text-lg sm:text-xl leading-relaxed font-medium">
            Because the greatest investment isn&rsquo;t just in property.
            It&rsquo;s in healthier living.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
