"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Lifestyle() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={ref}
      className="relative h-[70vh] sm:h-[80vh] overflow-hidden bg-navy-deep"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <motion.div style={{ y }} className="absolute inset-0 h-[110%] -top-[5%]">
          <Image
            src="https://images.pexels.com/photos/12285892/pexels-photo-12285892.jpeg"
            alt="A calm, plant-filled AVS home interior"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-navy-deep/10" />

      <div className="relative h-full flex items-end">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 pb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-gold"
          >
            A Life, Elevated
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl text-cream mt-4 max-w-2xl leading-[1.15]"
          >
            Every room designed to feel a little lighter.
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
