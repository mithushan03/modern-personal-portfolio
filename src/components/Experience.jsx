import React from "react";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { portfolio } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Experience() {
  return (
    <section id="experience" className="theme-section section-pad border-y border-white/10">
      <div className="container-shell">
        <SectionHeader eyebrow="Experience" title="Industry exposure." />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {portfolio.experience.map((item, index) => (
            <motion.article
              key={item.company}
              className="rounded-lg border border-white/10 bg-white/[0.05] p-6"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 via-pink-500 to-violet-600">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">{item.company}</h3>
                  <p className="mt-1 font-semibold text-pink-200">{item.role}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-white/42">
                    {item.period}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-7 text-white/68">{item.summary}</p>
              <div className="mt-5 grid gap-3">
                {item.points.map((point) => (
                  <div key={point} className="flex gap-3 text-sm leading-6 text-white/72">
                    <CheckCircle2 className="mt-1 shrink-0 text-pink-300" size={17} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
