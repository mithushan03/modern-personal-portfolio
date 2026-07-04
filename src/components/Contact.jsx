import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { portfolio } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

const socialIcons = {
  Github,
  Linkedin,
  Instagram
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitMail = (event) => {
    event.preventDefault();
    const subject = form.subject || "Portfolio inquiry";
    const body = encodeURIComponent(`Hi Mithushan,\n\n${form.message}\n\nFrom: ${form.name}`);
    window.location.href = `mailto:${portfolio.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="theme-section section-pad">
      <div className="container-shell">
        <SectionHeader eyebrow="Contact" title="Let's build something useful." />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="grid gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <ContactItem icon={Mail} label="Email" value={portfolio.email} href={`mailto:${portfolio.email}`} />
            <ContactItem icon={Phone} label="Phone" value={portfolio.phone} href={`tel:${portfolio.phone.replace(/\s/g, "")}`} />
            <ContactItem icon={MapPin} label="Location" value={portfolio.location} />

            <div className="rounded-lg border border-white/10 bg-white/[0.05] p-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/42">
                Social Links
              </p>
              <div className="flex flex-wrap gap-3">
                {portfolio.socials.map((social) => {
                  const Icon = socialIcons[social.icon] || Github;
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-white/75 transition hover:-translate-y-0.5 hover:border-pink-300/45 hover:text-white"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submitMail}
            className="rounded-lg border border-white/10 bg-white/[0.05] p-5 sm:p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-white/78">
                Name
                <input
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  className="min-h-12 rounded-lg border border-white/10 bg-ink/70 px-4 text-white outline-none transition focus:border-pink-300/60"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-white/78">
                Subject
                <input
                  name="subject"
                  value={form.subject}
                  onChange={updateField}
                  className="min-h-12 rounded-lg border border-white/10 bg-ink/70 px-4 text-white outline-none transition focus:border-pink-300/60"
                  placeholder="Project inquiry"
                  required
                />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-semibold text-white/78">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                rows={7}
                className="rounded-lg border border-white/10 bg-ink/70 px-4 py-3 text-white outline-none transition focus:border-pink-300/60"
                placeholder="Tell me about your idea"
                required
              />
            </label>
            <button type="submit" className="btn-primary mt-5 w-full sm:w-auto">
              Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.05] p-5 transition hover:border-pink-300/35">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-violet-600">
        <Icon size={21} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/42">{label}</p>
        <p className="mt-1 break-words text-sm font-bold text-white sm:text-base">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
