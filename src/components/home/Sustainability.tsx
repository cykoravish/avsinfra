"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AirVent, Recycle, Volume2, Sprout, Trees } from "lucide-react";

const FEATURES = [
  { icon: AirVent, label: "Air Purification System" },
  { icon: Recycle, label: "Eco-Friendly Waste Management" },
  { icon: Volume2, label: "Sound Proof Window Glasses" },
  { icon: Sprout, label: "Ayurvedic Garden" },
  { icon: Trees, label: "Expansive Green Space" },
];

export default function Sustainability() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-sage">
      <Image
        src="https://images.unsplash.com/photo-1759722144257-2925448a51a3?auto=format&fit=crop&w=1800&q=80"
        alt="Green rooftop with bamboo plants, symbolizing sustainable living"
        fill
        sizes="100vw"
        className="object-cover opacity-25 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sage/95 via-sage/90 to-sage" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/80">
            Sustainable Living — Why It Matters
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-cream mt-5 leading-[1.12]">
            Home should be the healthiest place you know.
          </h2>
          <p className="mt-5 text-cream/75 text-lg leading-relaxed">
            People spend most of their lives indoors — often more polluted
            than we imagine when left unmanaged. AVS is introducing calm into
            everyday living.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-full bg-cream/10 border border-cream/20 px-6 py-3.5 backdrop-blur-sm"
            >
              <f.icon size={18} className="text-gold" strokeWidth={1.75} />
              <span className="text-cream text-sm font-medium">
                {f.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
