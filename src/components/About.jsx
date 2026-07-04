import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Layers } from "lucide-react";
import { portfolio } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

const profileCards = [
  { label: "Engineering", value: "EEE undergraduate", icon: Cpu },
  { label: "Focus", value: "AI/ML + IoT systems", icon: BrainCircuit },
  { label: "Strength", value: "Practical problem solving", icon: Layers }
];

export default function About() {
  return (
    <section id="about" className="theme-section section-pad border-t border-white/10">
      <div className="container-shell">
        <SectionHeader eyebrow="About" title="Engineering ideas into useful software." />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="glass-panel p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-lg leading-8 text-white/76">{portfolio.about}</p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {profileCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  className="glass-panel p-5"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <Icon className="mb-4 text-pink-300" size={28} />
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/42">
                    {card.label}
                  </p>
                  <p className="mt-2 text-lg font-bold text-white">{card.value}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {portfolio.highlights.map((item, index) => (
            <motion.div
              key={item}
              className="rounded-lg border border-pink-300/20 bg-pink-300/[0.07] p-4 text-sm font-semibold text-pink-100"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
