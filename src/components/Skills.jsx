import React from "react";
import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Skills() {
  return (
    <section id="skills" className="theme-section section-pad">
      <div className="container-shell">
        <SectionHeader eyebrow="Skills" title="Tools and technologies." />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group flex min-h-36 flex-col items-center justify-center rounded-lg border border-white/15 bg-white/[0.08] p-5 text-center transition duration-200 hover:-translate-y-1 hover:border-white/45 hover:bg-white/[0.13] hover:shadow-glow-sm"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.45, delay: index * 0.035 }}
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="mb-5 h-14 w-14 object-contain drop-shadow-lg"
                loading="lazy"
              />
              <h3 className="text-base font-bold text-white">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
