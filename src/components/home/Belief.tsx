"use client";

import { motion } from "framer-motion";
import { Wind } from "lucide-react";

export default function Belief() {
  return (
    <section className="bg-cream py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-sage/8 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            <Wind size={15} /> Our Belief
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-navy mt-5 leading-[1.12]">
            Tomorrow&rsquo;s luxury
            <br />
            is <span className="italic text-coral">invisible</span>.
          </h2>
          <p className="mt-6 text-ink-soft text-lg leading-relaxed">
            Not every luxury can be seen — like clean air. As cities grow
            denser and pollution becomes an everyday reality, AVS believes
            homes should do more than provide shelter. They should actively
            improve the quality of life.
          </p>
          <p className="mt-5 text-ink text-lg leading-relaxed font-medium">
            Because the greatest investment isn&rsquo;t just in property.
            It&rsquo;s in healthier living.
          </p>
        </motion.div>

        {/* Visual: AQI comparison card — makes the claim tangible, not just text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-6 lg:col-start-7"
        >
          <div className="rounded-3xl bg-navy p-8 sm:p-10">
            <p className="text-cream/50 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
              The Air You Breathe
            </p>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-cream/70">Typical NCR Indoor Air</span>
                  <span className="text-cream/70 font-semibold">Poor</span>
                </div>
                <div className="h-2.5 rounded-full bg-cream/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "82%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full bg-coral"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-cream">Inside an AVS Home</span>
                  <span className="text-gold font-semibold">Healthy</span>
                </div>
                <div className="h-2.5 rounded-full bg-cream/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "28%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full bg-sage-light"
                  />
                </div>
              </div>
            </div>

            <p className="mt-8 text-cream/50 text-sm leading-relaxed border-t border-cream/10 pt-6">
              Purification systems and green planning working together to
              keep every AVS home breathing easy — all year round.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
