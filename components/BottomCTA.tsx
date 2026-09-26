"use client";

import { Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export default function BottomCTA({ onFind }: { onFind: () => void }) {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-r from-[#FFF0F5] via-[#FDF4FA] to-[#FFF0F5] border-y border-pink-100/70 py-14 sm:py-20 lg:py-24">
      {/* Ambient glows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr_1fr] items-center gap-8 text-center md:text-left">

          {/* Left: Paper Airplane */}
          <Reveal>
            <div className="flex items-center justify-center md:justify-start">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="140" height="75" viewBox="0 0 140 75" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible select-none">
                  <path d="M10 65 C 30 65, 40 45, 55 35 C 70 25, 82 8, 65 14 C 48 20, 50 48, 82 38 C 105 30, 120 20, 128 17"
                    stroke="#FC0264" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                  <g transform="translate(118, 5) rotate(18) scale(0.9)">
                    <path d="M0 12 L24 0 L18 24 L11 15 L0 12 Z" fill="#FC0264" />
                    <path d="M18 24 L11 15 L14 18 Z" fill="#BE185D" />
                  </g>
                </svg>
              </motion.div>
            </div>
          </Reveal>

          {/* Center: Headline + CTA */}
          <div className="flex flex-col items-center text-center">
            <Reveal>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Good Company <span className="text-[#FC0264]">Is Just a Click Away.</span>
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed font-normal">
                Coffee, movies, shopping, travel or simply spending quality time — find a CoFriend for your next experience.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <motion.button
                onClick={onFind}
                whileHover={{ scale: 1.06, boxShadow: "0 14px 40px -8px rgba(252,2,100,0.45)" }}
                whileTap={{ scale: 0.96 }}
                className="mt-7 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-9 py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-pink-500/25 flex items-center gap-2.5 cursor-pointer"
              >
                <Search size={18} />
                <span>Find a CoFriend</span>
                <ArrowRight size={16} />
              </motion.button>
            </Reveal>
          </div>

          {/* Right: Script text */}
          <Reveal delay={0.1}>
            <div className="flex items-center justify-center md:justify-end">
              <motion.p
                className="font-script text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#7C3AED] leading-tight text-center md:text-right select-none"
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                More <br />
                Experiences <br />
                <span className="text-[#FC0264] inline-flex items-center gap-1.5">Together ♥</span>
              </motion.p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
