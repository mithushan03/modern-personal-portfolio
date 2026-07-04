import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import { portfolio } from "../data/portfolio.js";

const socialIcons = {
  Github,
  Linkedin,
  Instagram
};

export default function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[linear-gradient(115deg,#f41236_0%,#df168b_44%,#6d28d9_100%)] py-8">
      <div className="container-shell flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-sm text-white/55">
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </p>
        <div className="flex justify-center gap-3">
          {portfolio.socials.map((social) => {
            const Icon = socialIcons[social.icon] || Github;
            return (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white/65 transition hover:border-pink-300/45 hover:text-white"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
