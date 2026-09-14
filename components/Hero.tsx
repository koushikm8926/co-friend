"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  ShieldCheck,
  Star,
  Lock,
  LayoutGrid,
  Sparkles,
  BadgeCheck,
  Search,
  MapPin,
} from "lucide-react";
import { CITIES, SERVICES, IMAGES, TESTIMONIALS } from "@/data/content";
import { EASE } from "./Reveal";

function MaskedLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
      <motion.span
        className="block will-change-transform"
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const TRUST = [
  { icon: ShieldCheck, label: "Verified Profiles" },
  { icon: Star, label: "Real Reviews" },
  { icon: Lock, label: "Secure Booking" },
  { icon: LayoutGrid, label: "11 Services" },
];

export default function Hero({
  onSearch,
  onExplore,
}: {
  onSearch: (preset: { service: string; location: string }) => void;
  onExplore: () => void;
}) {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yMain = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const yA = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      id="home"
      data-testid="hero-section"
      ref={ref}
      className="relative overflow-hidden pt-[110px] md:pt-[130px]"
    >
      <div className="glow-blob absolute -left-32 top-10 h-96 w-96 rounded-full bg-purple-400/25" />
      <div className="glow-blob absolute right-0 top-64 h-[28rem] w-[28rem] rounded-full bg-pink-400/20" />
      <div className="glow-blob absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-400/15" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-16 sm:px-6 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur"
          >
            <Sparkles size={14} className="text-purple-600" />
            <span className="font-accent text-xs font-bold uppercase tracking-[0.18em] text-purple-700">
              India&apos;s most loved companion marketplace
            </span>
          </motion.div>

          <h1 className="font-display mt-7 text-5xl font-extrabold leading-[0.98] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            <MaskedLine delay={0.15}>Life&apos;s Better</MaskedLine>
            <MaskedLine delay={0.28}>
              <span className="relative inline-block">
                <span className="text-gradient">Together.</span>
                <motion.svg
                  viewBox="0 0 220 14"
                  className="absolute -bottom-2 left-0 w-full"
                  initial={{ pathLength: 0 }}
                  aria-hidden
                >
                  <motion.path
                    d="M4 10 C 60 2, 160 2, 216 8"
                    fill="none"
                    stroke="#F43F5E"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 1.15, ease: "easeOut" }}
                  />
                </motion.svg>
              </span>
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            Find trusted, verified people for movies, coffee, shopping, travel, events, elder care,
            fitness and more. Book by the hour, meet safely in public, and turn any plan into a
            memory worth keeping.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.65, ease: EASE }}
            className="mt-9 rounded-[1.6rem] border border-purple-100 bg-white/90 p-3 shadow-[0_24px_60px_-20px_rgba(124,58,237,0.35)] backdrop-blur"
            data-testid="hero-search-box"
          >
            <div className="grid items-center gap-2 md:grid-cols-[1.2fr_1fr_auto]">
              <label className="group relative flex items-center gap-3 rounded-2xl px-4 py-3 transition-colors hover:bg-purple-50/70 cursor-pointer">
                <Search size={18} className="shrink-0 text-purple-500" />
                <span className="w-full">
                  <span className="font-accent block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-slate-400">
                    What are you looking for?
                  </span>
                  <select
                    data-testid="hero-search-service-select"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full cursor-pointer appearance-none bg-transparent text-sm font-semibold text-slate-800 outline-none"
                  >
                    <option value="">Anything fun or helpful</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </span>
                <ChevronDown size={14} className="text-slate-400 pointer-events-none" />
              </label>
              <label className="group relative flex items-center gap-3 rounded-2xl px-4 py-3 transition-colors hover:bg-purple-50/70 md:border-l md:border-purple-100 cursor-pointer">
                <MapPin size={18} className="shrink-0 text-pink-500" />
                <span className="w-full">
                  <span className="font-accent block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Location
                  </span>
                  <select
                    data-testid="hero-search-location-select"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full cursor-pointer appearance-none bg-transparent text-sm font-semibold text-slate-800 outline-none"
                  >
                    <option value="">Anywhere in India</option>
                    {CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </span>
                <ChevronDown size={14} className="text-slate-400 pointer-events-none" />
              </label>
              <button
                data-testid="hero-search-submit-btn"
                onClick={() => onSearch({ service, location })}
                className="btn-brand font-accent flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-sm font-bold text-white cursor-pointer"
              >
                Find a Co-Friend
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {TRUST.map((t) => (
              <span
                key={t.label}
                data-testid={`trust-indicator-${t.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-2 text-sm font-semibold text-slate-600"
              >
                <t.icon size={16} className="text-purple-600" />
                {t.label}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
            style={{ y: yMain }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2.5rem] border-[6px] border-white shadow-[0_40px_90px_-30px_rgba(124,58,237,0.5)]">
              <img
                src={IMAGES.heroMain}
                alt="Friends enjoying a day out together"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 1, delay: 0.7, ease: EASE }}
            style={{ y: yA }}
            className="absolute -left-8 bottom-16 hidden w-40 overflow-hidden rounded-3xl border-4 border-white shadow-2xl sm:block md:w-48"
          >
            <img
              src={IMAGES.heroA}
              alt="Group of friends laughing"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 12 }}
            animate={{ opacity: 1, x: 0, rotate: 8 }}
            transition={{ duration: 1, delay: 0.85, ease: EASE }}
            style={{ y: yB }}
            className="absolute -right-4 top-10 hidden w-36 overflow-hidden rounded-3xl border-4 border-white shadow-2xl sm:block md:w-44"
          >
            <img
              src={IMAGES.heroB}
              alt="Coffee catch-up between friends"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
            className="animate-floaty absolute -left-4 top-14 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-xl shadow-purple-500/15 backdrop-blur-xl md:-left-12"
            data-testid="hero-rating-card"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="font-display mt-1.5 text-2xl font-extrabold text-slate-900">4.95</p>
            <p className="text-[0.7rem] font-semibold text-slate-500">1.2L+ verified reviews</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
            className="animate-floaty-slow absolute -bottom-5 right-2 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 shadow-xl shadow-pink-500/15 backdrop-blur-xl md:right-8"
            data-testid="hero-verified-card"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white">
              <BadgeCheck size={20} />
            </span>
            <div>
              <p className="text-sm font-extrabold text-slate-900">15,000+ Co-Friends</p>
              <p className="text-[0.7rem] font-semibold text-slate-500">
                Aadhaar & background verified
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
