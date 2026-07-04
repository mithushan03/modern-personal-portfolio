import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolio } from "../data/portfolio.js";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition duration-300 ${
        scrolled
          ? "border-b border-white/15 bg-[#8f0a55]/72 shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "bg-[#8f0a55]/38 backdrop-blur-md"
      }`}
    >
      <nav className="container-shell flex min-h-16 items-center justify-between">
        <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 via-pink-500 to-violet-600 text-sm font-black shadow-glow">
            M
          </span>
          <span className="text-sm font-black uppercase tracking-[0.2em] text-white">
            {portfolio.shortName}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-white/72 transition hover:bg-white/[0.07] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href={portfolio.resume} target="_blank" rel="noreferrer" className="btn-primary hidden lg:inline-flex">
          Resume
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 bg-white/[0.06] text-white lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#8f0a55]/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/[0.07] hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={portfolio.resume}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="btn-primary mt-2 w-full"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
