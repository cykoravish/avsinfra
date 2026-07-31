"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const STATS = [
  { value: "12+", label: "Years of Experience", sub: "Delivering thoughtfully planned developments." },
  { value: "5000+", label: "Happy Customers", sub: "Families and investors who believe in AVS." },
  { value: "150+", label: "Professionals", sub: "Working together to shape better communities." },
];

export default function About() {
  return (
    <section id="about" className="bg-navy py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-sage/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              About AVS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-cream mt-5 leading-[1.12]">
              Building better lives since 2014.
            </h2>
            <p className="mt-6 text-cream/70 text-lg leading-relaxed">
              For over a decade, AVS has created developments that combine
              intelligent planning, quality construction and lasting value.
              Today, we&rsquo;re creating communities designed for the way
              people will live tomorrow — where wellness, sustainability and
              modern infrastructure exist together.
            </p>
            <p className="mt-4 text-cream/70 text-lg leading-relaxed">
              Because great homes shouldn&rsquo;t simply keep pace with
              changing times. They should shape them.
            </p>
          </motion.div>

          {/* Visual: building image + floating legacy badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 lg:col-start-8 relative"
          >
            <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1757125505346-2d71c70e6003?auto=format&fit=crop&w=1200&q=80"
                alt="An AVS residential development with green rooftop"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -left-8 h-32 w-32 sm:h-36 sm:w-36 rounded-full bg-navy-deep border border-gold/30 flex flex-col items-center justify-center text-center shadow-xl">
              <p className="font-display text-3xl sm:text-4xl text-gold">12+</p>
              <p className="mt-1 text-cream/60 text-[10px] uppercase tracking-[0.1em] leading-tight px-2">
                Years building trust
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid sm:grid-cols-3 gap-10 sm:gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="border-t border-cream/15 pt-6"
            >
              <p className="font-display text-5xl text-gold">{s.value}</p>
              <p className="mt-3 text-cream font-semibold text-[15px]">
                {s.label}
              </p>
              <p className="mt-1.5 text-cream/55 text-sm leading-relaxed">
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
