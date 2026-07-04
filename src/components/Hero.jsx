import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { portfolio } from "../data/portfolio.js";

export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const soundUnlockedRef = useRef(false);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    if (!hero || !video) return undefined;

    let heroVisible = true;

    const syncPlayback = () => {
      if (document.hidden || !heroVisible) {
        video.pause();
        return;
      }

      video.muted = !soundUnlockedRef.current;
      video.volume = soundUnlockedRef.current ? 1 : 0;
      video.play().catch(() => {});
    };

    const unlockSound = () => {
      soundUnlockedRef.current = true;
      video.defaultMuted = false;
      video.muted = false;
      video.removeAttribute("muted");
      video.volume = 1;
      video.play().catch(() => {});

      window.setTimeout(() => {
        video.defaultMuted = false;
        video.muted = false;
        video.removeAttribute("muted");
        video.volume = 1;
        syncPlayback();
      }, 80);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
        syncPlayback();
      },
      { threshold: [0, 0.35, 0.7] }
    );

    observer.observe(hero);
    syncPlayback();
    document.addEventListener("visibilitychange", syncPlayback);
    window.addEventListener("pointerdown", unlockSound, { once: true, capture: true });
    window.addEventListener("click", unlockSound, { once: true, capture: true });
    window.addEventListener("keydown", unlockSound, { once: true, capture: true });
    window.addEventListener("touchstart", unlockSound, { once: true, capture: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      window.removeEventListener("pointerdown", unlockSound, true);
      window.removeEventListener("click", unlockSound, true);
      window.removeEventListener("keydown", unlockSound, true);
      window.removeEventListener("touchstart", unlockSound, true);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-ink pt-20"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        src={portfolio.heroVideo}
        poster={portfolio.heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={`${portfolio.name} intro video`}
      />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(244,18,54,0.94)_0%,rgba(223,22,139,0.72)_42%,rgba(8,7,16,0.18)_76%,rgba(8,7,16,0.36)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_16%_20%,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(217,70,239,0.22),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-44 bg-gradient-to-t from-ink/90 to-transparent" />

      <div className="container-shell relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/12 px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-white backdrop-blur">
            EEE + AI/ML + Web
          </div>

          <h1 className="text-5xl font-black leading-[0.98] tracking-tight text-white drop-shadow-2xl sm:text-7xl lg:text-8xl">
            Hi, I'm <span className="block">{portfolio.shortName}</span>
          </h1>

          <p className="mt-4 text-4xl font-black leading-none text-white/20 [-webkit-text-stroke:1px_rgba(255,255,255,0.68)] sm:text-6xl">
            {portfolio.title}
          </p>

          <p className="mt-8 max-w-xl text-lg font-bold leading-8 text-white sm:text-xl">
            {portfolio.tagline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-black text-[#a00958] shadow-xl transition duration-200 hover:-translate-y-0.5"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/45 bg-black/22 px-7 py-3 text-sm font-black text-white backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-black/32"
            >
              Contact Me <Mail size={18} />
            </a>
            <a
              href={portfolio.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/35 bg-white/12 px-7 py-3 text-sm font-black text-white backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/18"
            >
              Download Resume <Download size={18} />
            </a>
          </div>

          <div className="mt-9 grid gap-4 text-sm font-bold text-white sm:grid-cols-3">
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              {portfolio.location}
            </span>
            <span className="flex items-center gap-2">
              <Phone size={18} />
              {portfolio.phone}
            </span>
            <span className="flex items-center gap-2 break-all">
              <Mail size={18} className="shrink-0" />
              {portfolio.email}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
