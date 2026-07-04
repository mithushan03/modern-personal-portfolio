import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, align = "center" }) {
  const centered = align === "center";

  return (
    <motion.div
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-white/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}
