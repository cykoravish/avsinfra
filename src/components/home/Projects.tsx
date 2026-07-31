"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Building2 } from "lucide-react";

const PROJECTS = [
  { name: "AVS City Palace", type: "Residential" },
  { name: "AVS City Square", type: "Commercial" },
  { name: "AVS City Centre", type: "Commercial" },
  { name: "AVS High Street", type: "Commercial" },
  { name: "Surya Heights", type: "Residential" },
  { name: "Sangwan Heights", type: "Residential" },
  { name: "Sangwan City", type: "Aligarh" },
];

export default function Projects() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Our Projects
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-navy mt-5 leading-[1.12]">
              Crafted with purpose.
            </h2>
          </div>
          <p className="text-ink-soft max-w-sm leading-relaxed">
            From residential communities to commercial destinations — every
            project shares one philosophy: places people genuinely enjoy
            living, working and growing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-3">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.name}
              href="/residential"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-center justify-between gap-4 rounded-xl border border-navy/10 px-6 py-5 hover:bg-navy hover:border-navy transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <Building2
                  size={20}
                  className="text-sage group-hover:text-gold transition-colors duration-300"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="font-display text-lg text-navy group-hover:text-cream transition-colors duration-300">
                    {p.name}
                  </p>
                  <p className="text-xs text-ink-soft group-hover:text-cream/50 uppercase tracking-wide transition-colors duration-300">
                    {p.type}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-navy/30 group-hover:text-gold transition-colors duration-300"
              />
            </motion.a>
          ))}
        </div>

        {/* Upcoming landmark highlight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-6 rounded-2xl relative overflow-hidden px-8 py-10 sm:px-12 sm:py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <Image
            src="https://images.unsplash.com/photo-1757125505346-2d71c70e6003?auto=format&fit=crop&w=1600&q=80"
            alt="Upcoming AVS landmark development"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/60" />
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Upcoming Landmark
            </span>
            <p className="font-display text-2xl sm:text-3xl text-cream mt-3">
              Country Inn by AVS High Street
            </p>
            <p className="text-cream/60 mt-2 max-w-md">
              Poised to become one of the largest hotels in Raj Nagar
              Extension.
            </p>
          </div>
          <a
            href="/commercial"
            className="relative inline-flex items-center gap-1.5 rounded-full bg-cream text-navy px-6 py-3 font-semibold text-sm shrink-0 hover:bg-gold transition-colors w-fit"
          >
            Learn More <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
