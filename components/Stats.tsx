"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Users, Smile, LayoutGrid, MapPin, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { STATS } from "@/data/content";

const ICONS = [Users, Smile, LayoutGrid, MapPin, Star];

function Counter({
  value,
  decimals = 0,
  suffix = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) =>
        setDisplay(
          decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-IN")
        ),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref} data-testid="stat-value">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      data-testid="platform-statistics-section"
      className="relative overflow-hidden bg-[#0F0F1A] py-16 md:py-24"
    >
      <div className="glow-blob absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-purple-600/30" />
      <div className="glow-blob absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-pink-600/25" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="font-accent text-xs font-extrabold uppercase tracking-[0.3em] text-pink-400">
            03 · By the numbers
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Trusted at a scale that speaks for itself
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-5">
          {STATS.map((s, i) => {
            const Icon = ICONS[i] || Users;
            return (
              <Reveal key={s.label} delay={i * 0.09} className="text-center">
                <div
                  data-testid={`stat-${s.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="group"
                >
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-pink-400 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-500 group-hover:text-white">
                    <Icon size={21} />
                  </span>
                  <p className="font-display mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                  </p>
                  <p className="font-accent mt-2 text-[0.8rem] font-bold uppercase tracking-[0.18em] text-slate-400">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
