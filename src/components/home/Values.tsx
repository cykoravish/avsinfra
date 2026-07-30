"use client";

import { motion } from "framer-motion";
import { Wind, CloudFog, Flower2, Recycle, Compass } from "lucide-react";

const VALUES = [
  {
    icon: Wind,
    title: "Cleaner Indoor Air",
    desc: "Advanced air purification systems designed to create healthier indoor environments.",
  },
  {
    icon: CloudFog,
    title: "Better Outdoor Environment",
    desc: "Specialized outdoor misting systems that help reduce dust and airborne pollutants.",
  },
  {
    icon: Flower2,
    title: "Wellness Landscapes",
    desc: "Ayurvedic gardens, expansive greens and peaceful outdoor spaces designed to restore mind and body.",
  },
  {
    icon: Recycle,
    title: "Sustainable Living",
    desc: "Thoughtful waste management and environmentally responsible planning for cleaner communities.",
  },
  {
    icon: Compass,
    title: "Future-Ready Planning",
    desc: "Communities designed not just for today, but for the next generation.",
  },
];

export default function Values() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            The Difference — Our Values
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-navy mt-5 leading-[1.12]">
            Designed around human well-being.
          </h2>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed">
            Every decision begins with one question:{" "}
            <span className="italic text-navy">
              will this improve everyday life?
            </span>
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-navy/10 rounded-2xl overflow-hidden">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-paper p-7 hover:bg-navy transition-colors duration-400 group"
            >
              <v.icon
                className="text-sage group-hover:text-gold transition-colors duration-400"
                size={26}
                strokeWidth={1.5}
              />
              <p className="mt-5 font-display text-lg text-navy group-hover:text-cream transition-colors duration-400">
                {v.title}
              </p>
              <p className="mt-2.5 text-ink-soft group-hover:text-cream/65 text-sm leading-relaxed transition-colors duration-400">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
