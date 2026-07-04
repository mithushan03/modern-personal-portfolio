import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { portfolio } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Education() {
  return (
    <section id="education" className="theme-section section-pad">
      <div className="container-shell">
        <SectionHeader eyebrow="Education" title="Academic foundation and credentials." />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5">
            {portfolio.education.map((item, index) => (
              <motion.article
                key={item.school}
                className="rounded-lg border border-white/10 bg-white/[0.05] p-6"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-violet-600">
                      <GraduationCap size={25} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white">{item.school}</h3>
                      <p className="mt-2 font-semibold text-pink-200">{item.degree}</p>
                    </div>
                  </div>
                  <span className="w-fit rounded-lg border border-pink-300/25 bg-pink-300/10 px-3 py-2 text-xs font-bold text-pink-100">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-5 grid gap-2 text-sm leading-7 text-white/68">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <motion.aside
            className="rounded-lg border border-white/10 bg-white/[0.05] p-6"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/[0.08] text-pink-300">
                <Award size={23} />
              </div>
              <h3 className="text-xl font-black text-white">Certifications</h3>
            </div>
            <div className="grid gap-3">
              {portfolio.certifications.map((certificate) => (
                <div
                  key={certificate}
                  className="rounded-lg border border-white/10 bg-ink/40 p-4 text-sm font-semibold leading-6 text-white/75"
                >
                  {certificate}
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
