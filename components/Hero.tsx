"use client";

import { motion } from "framer-motion";


// Stagger container
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.1 },
  },
};

// Slide-up + fade child
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Hero({
  onFind,
  onBecome,
  onOpenComingSoon,
}: {
  onFind: () => void;
  onBecome: () => void;
  onOpenComingSoon?: (feature: string) => void;
}) {
  return (
    <section id="home" aria-label="Hero" className="relative w-full bg-white overflow-hidden">
      {/* SEO H1 */}
      <h1 className="sr-only">Find a CoFriend. Share the Moment.</h1>

      <div className="w-full">
        <div className="relative w-full overflow-hidden bg-white">

          {/* ── BACKGROUND image ─────────────────────────────────── */}
          <motion.img
            src="/images/hero-main.jpg"
            alt=""
            aria-hidden="true"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover object-right select-none pointer-events-none"
            draggable={false}
          />

          {/* White → transparent gradient overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(to right, #ffffff 0%, #ffffff 24%, rgba(255,255,255,0.80) 40%, rgba(255,255,255,0.25) 58%, transparent 74%)",
            }}
          />

          {/* ── CONTENT GRID ─────────────────────────────────────── */}
          <div className="relative z-10 flex flex-col lg:flex-row min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] xl:min-h-[620px]">

            {/* LEFT: Copy Panel */}
            <motion.div
              className="flex flex-col justify-center w-full lg:w-[50%] xl:w-[48%] px-7 sm:px-12 lg:px-14 xl:px-20 py-12 lg:py-16"
              variants={container}
              initial="hidden"
              animate="show"
            >

              {/* Eyebrow */}
              <motion.p
                variants={fadeUp}
                className="text-[11px] sm:text-[13px] font-bold tracking-[0.22em] uppercase text-slate-500 mb-4"
              >
                Real People.{" "}
                <span className="text-[#FC0264]">Real Connections.</span>
              </motion.p>

              {/* Headline */}
              <div className="mb-5 sm:mb-6">
                <motion.span
                  variants={fadeUp}
                  className="block font-display font-extrabold leading-[1.05] tracking-tight text-[2.4rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[3.2rem] xl:text-[4rem] text-[#0F172A]"
                >
                  Find a CoFriend.
                </motion.span>
                <motion.span
                  variants={fadeUp}
                  className="block font-display font-extrabold leading-[1.05] tracking-tight text-[2.4rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[3.2rem] xl:text-[4rem]"
                >
                  <span className="text-pink-gradient">
                    Share the Moment.
                  </span>
                </motion.span>
              </div>

              {/* Sub-headline */}
              <motion.p
                variants={fadeUp}
                className="text-base sm:text-[17px] font-semibold text-slate-800 mb-2"
              >
                Life feels better with the right company.
              </motion.p>

              {/* Body */}
              <motion.p
                variants={fadeUp}
                className="text-[14px] sm:text-[15px] text-slate-500 leading-relaxed mb-7 sm:mb-8 max-w-[480px]"
              >
                Find verified CoFriends for coffee, movies, travel, fitness, and events.
                <br className="hidden sm:inline" /> Choose who you&apos;d like to spend time with and book seamlessly.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-7 sm:mb-8">
                <motion.button
                  id="hero-find-cofriend"
                  onClick={onFind}
                  aria-label="Find a CoFriend"
                  whileHover={{ scale: 1.05, boxShadow: "0 12px 36px -6px rgba(252,2,100,0.55)" }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-[14px] sm:text-[15px] font-bold text-white cursor-pointer whitespace-nowrap"
                  style={{
                    background: "linear-gradient(92deg,#8B5CF6 0%,#FC0264 100%)",
                    boxShadow: "0 8px 28px -6px rgba(252,2,100,0.45)",
                  }}
                >
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
                    <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
                    <path d="M15 15l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Find a CoFriend &nbsp;→
                </motion.button>

                <motion.button
                  id="hero-become-cofriend"
                  onClick={onBecome}
                  aria-label="Become a CoFriend"
                  whileHover={{ scale: 1.05, backgroundColor: "#7C3AED", color: "#fff" }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-[14px] sm:text-[15px] font-bold border-2 border-[#7C3AED] text-[#7C3AED] bg-white transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
                    <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M4 17c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  Become a CoFriend &nbsp;→
                </motion.button>
              </motion.div>
            </motion.div>

            {/* RIGHT: spacer */}
            <div className="hidden lg:flex flex-1" aria-hidden="true" />
          </div>

        </div>
      </div>

      {/* Mobile CTA strip */}
      <motion.div
        className="flex lg:hidden gap-3 px-5 sm:px-7 mt-4 mb-2"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      >
        <motion.button
          onClick={onFind}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="flex-1 rounded-full py-4 text-[15px] font-bold text-white text-center cursor-pointer"
          style={{ background: "linear-gradient(92deg,#8B5CF6 0%,#FC0264 100%)" }}
        >
          🔍 Find a CoFriend →
        </motion.button>
        <motion.button
          onClick={onBecome}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="flex-1 rounded-full border-2 border-[#7C3AED] bg-white py-4 text-[15px] font-bold text-[#7C3AED] text-center cursor-pointer"
        >
          👤 Become a CoFriend →
        </motion.button>
      </motion.div>
    </section>
  );
}
