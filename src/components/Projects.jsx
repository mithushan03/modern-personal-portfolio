import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { portfolio } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";
import { iconMap } from "./icons.js";

export default function Projects() {
  return (
    <section id="projects" className="theme-section section-pad border-y border-white/10">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader eyebrow="Projects" title="Selected engineering builds." align="left" />
          <a href="#contact" className="btn-secondary w-fit">
            Start a Project <ExternalLink size={17} />
          </a>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {portfolio.projects.map((project, index) => {
            const Icon = iconMap[project.icon] || iconMap.Code2;

            return (
              <motion.article
                key={project.title}
                className="group flex min-h-[390px] flex-col rounded-lg border border-white/10 bg-white/[0.05] p-6 transition duration-200 hover:-translate-y-1 hover:border-pink-300/45 hover:bg-white/[0.075] hover:shadow-glow"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 via-pink-500 to-violet-600 shadow-glow-sm">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-black leading-snug text-white">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-white/68">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-white/72"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
