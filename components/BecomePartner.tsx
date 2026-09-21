"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export default function BecomePartner({ onBecome }: { onBecome: () => void }) {
  return (
    <section
      id="partner"
      className="w-full relative overflow-hidden bg-gradient-to-r from-[#E11D67] via-[#8B24D7] to-[#EC1D75] text-white shadow-md"
      style={{ minHeight: "200px" }}
    >
      {/* Ambient glows */}
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-pink-400/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.6fr_1.3fr] items-stretch gap-6 min-h-[200px] sm:min-h-[220px] lg:min-h-[240px]">

          {/* Left Calligraphy */}
          <Reveal className="hidden lg:flex items-center justify-center select-none py-6">
            <img
              src="/images/callig-turn-your-time.png"
              alt="Turn Your Free Time Into Meaningful"
              className="w-auto h-24 xl:h-28 object-contain drop-shadow-md"
            />
          </Reveal>

          {/* Center Content */}
          <div className="flex flex-col items-center justify-center text-center px-2 lg:px-4 py-8 lg:py-10">
            <Reveal>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[3rem] font-extrabold text-white tracking-tight leading-tight">
                Become a CoFriend
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-md text-sm sm:text-base text-white/95 leading-relaxed font-medium">
                Meet new people, do what you love and earn through your time. <br className="hidden sm:inline" />
                Join a growing community of verified CoFriends.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <motion.button
                onClick={onBecome}
                whileHover={{ scale: 1.07, boxShadow: "0 12px 40px -8px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 text-sm sm:text-base font-bold text-[#7C3AED] hover:text-[#D91A60] shadow-lg shadow-black/15 transition-colors cursor-pointer"
              >
                <span>Become a CoFriend</span>
                <span className="font-bold">➔</span>
              </motion.button>
            </Reveal>
          </div>

          {/* Right: Avatar + Calligraphy */}
          <div className="relative hidden lg:flex items-end justify-end gap-4 pr-0 lg:pr-4 self-stretch">
            <div className="absolute bottom-0 left-0 right-16 flex justify-center">
              <svg className="absolute -top-3 left-1/2 -translate-x-8 w-6 h-6 text-slate-900/90 pointer-events-none select-none"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="18" x2="2" y2="8" /><line x1="12" y1="18" x2="12" y2="4" /><line x1="20" y1="18" x2="22" y2="8" />
              </svg>
              <svg className="absolute -top-3 left-1/2 translate-x-2 w-6 h-6 text-slate-900/90 pointer-events-none select-none"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="18" x2="2" y2="8" /><line x1="12" y1="18" x2="12" y2="4" /><line x1="20" y1="18" x2="22" y2="8" />
              </svg>
              <svg className="absolute top-10 -left-2 w-4 h-4 text-slate-900/90 pointer-events-none select-none"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="16" y1="4" x2="4" y2="12" /><line x1="16" y1="20" x2="4" y2="12" />
              </svg>
              <motion.img
                src="/images/banner-girl.png"
                alt="Become a CoFriend – friendly verified companion"
                className="w-auto object-contain drop-shadow-2xl select-none"
                style={{ height: "250px" }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              />
            </div>
            <div className="self-center shrink-0 select-none ml-auto">
              <img src="/images/callig-good-people-clean.png" alt="Good People Great Stories"
                className="w-auto h-20 sm:h-24 lg:h-28 object-contain drop-shadow-sm" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
