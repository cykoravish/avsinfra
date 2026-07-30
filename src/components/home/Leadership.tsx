"use client";

import { motion } from "framer-motion";

const LEADERS = [
  {
    name: "Ajay Kumar",
    role: "Director",
    bio: "Two decades of experience shaping AVS Group's growth across Delhi NCR — from land acquisition to strategic development.",
  },
  {
    name: "Vivek Tyagi",
    role: "Director",
    bio: "Drives business strategy and project execution, with strengths in quality management and operational excellence.",
  },
  {
    name: "Devendra Singh",
    role: "Director",
    bio: "A visionary entrepreneur behind AVS Group's reputation as a trusted name in Delhi NCR's real estate landscape.",
  },
  {
    name: "Gaurav Arora",
    role: "Director",
    bio: "25+ years across sales, marketing and finance, with an MBA from the University of Bedfordshire, UK.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function Leadership() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Our Leadership
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-navy mt-5 leading-[1.12]">
            The people behind AVS.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERS.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-2xl bg-paper p-7 hover:bg-navy transition-colors duration-400"
            >
              <div className="h-14 w-14 rounded-full bg-navy text-cream group-hover:bg-gold group-hover:text-navy-deep flex items-center justify-center font-display text-lg font-semibold transition-colors duration-400">
                {initials(l.name)}
              </div>
              <p className="mt-6 font-display text-xl text-navy group-hover:text-cream transition-colors duration-400">
                {l.name}
              </p>
              <p className="text-coral group-hover:text-gold text-xs font-semibold uppercase tracking-wide mt-1 transition-colors duration-400">
                {l.role}
              </p>
              <p className="mt-4 text-ink-soft group-hover:text-cream/70 text-sm leading-relaxed transition-colors duration-400">
                {l.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
