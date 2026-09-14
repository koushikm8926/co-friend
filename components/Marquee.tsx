"use client";

import { Sparkle } from "lucide-react";
import { MARQUEE_ITEMS } from "@/data/content";

export default function Marquee() {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center">
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={`${key}-${i}`} className="flex items-center">
          <span
            className={`font-display px-8 text-2xl font-extrabold uppercase tracking-tight md:text-3xl ${
              i % 2 === 0 ? "text-slate-900" : "text-gradient"
            }`}
          >
            {item}
          </span>
          <Sparkle size={18} className="shrink-0 fill-pink-400 text-pink-400" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      data-testid="editorial-marquee"
      className="relative overflow-hidden border-y border-purple-100 bg-white/70 py-6 backdrop-blur-sm"
      aria-hidden
    >
      <div className="marquee-track">
        {row("a")}
        {row("b")}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAFAFD] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FAFAFD] to-transparent" />
    </div>
  );
}
