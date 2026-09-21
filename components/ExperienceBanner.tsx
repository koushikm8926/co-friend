"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export default function ExperienceBanner({
  onFind,
}: {
  onFind?: () => void;
}) {
  return (
    <section className="relative w-full overflow-hidden py-10 sm:py-12 lg:py-14">
      {/* Background panoramic mountain sunset image */}
      <img
        src="/images/about/sunset-banner.jpg"
        alt="Mountain sunset panorama"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
        draggable={false}
      />

      {/* Vibrant Sunset Gradient Overlay (matching magenta, purple, golden-orange) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(88, 28, 135, 0.45) 0%, rgba(190, 24, 93, 0.55) 30%, rgba(219, 39, 119, 0.6) 50%, rgba(249, 115, 22, 0.5) 80%, rgba(245, 158, 11, 0.35) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">

          {/* LEFT: Calligraphy "More Experiences Together ♥" */}
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
            <Reveal>
              <motion.div
                initial={{ opacity: 0, x: -20, rotate: -6 }}
                animate={{ opacity: 1, x: 0, rotate: -6 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-script text-3xl sm:text-4xl md:text-[42px] text-[#2E1065] leading-tight select-none text-center lg:text-left drop-shadow-[0_1px_8px_rgba(255,255,255,0.4)]"
              >
                <p>More</p>
                <p>Experiences</p>
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <span>Together</span>
                  <span className="text-[#FF136A] text-2xl sm:text-3xl inline-block drop-shadow-none">♥</span>
                </p>
              </motion.div>
            </Reveal>
          </div>

          {/* CENTER: Main Headline, Subtitle & Button */}
          <div className="w-full lg:w-1/2 text-center flex flex-col items-center">
            <Reveal>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.18] text-white tracking-tight drop-shadow-md">
                Every Great Experience <br className="hidden sm:inline" />
                Starts With the Right Company.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-xs sm:text-sm md:text-[15px] text-white/95 font-normal leading-relaxed mt-3 sm:mt-4 mb-6 sm:mb-7 max-w-lg drop-shadow-sm">
                Coffee, movies, shopping, travel or simply spending quality time — find a CoFriend today.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              {onFind ? (
                <motion.button
                  onClick={onFind}
                  whileHover={{ scale: 1.06, boxShadow: "0 14px 32px -4px rgba(0,0,0,0.35)" }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white text-[#6D28D9] font-bold text-sm sm:text-base shadow-xl cursor-pointer whitespace-nowrap transition-transform"
                >
                  Find a CoFriend <ArrowRight size={17} strokeWidth={2.4} />
                </motion.button>
              ) : (
                <Link href="/#cofriends">
                  <motion.span
                    whileHover={{ scale: 1.06, boxShadow: "0 14px 32px -4px rgba(0,0,0,0.35)" }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white text-[#6D28D9] font-bold text-sm sm:text-base shadow-xl cursor-pointer whitespace-nowrap transition-transform"
                  >
                    Find a CoFriend <ArrowRight size={17} strokeWidth={2.4} />
                  </motion.span>
                </Link>
              )}
            </Reveal>
          </div>

          {/* RIGHT: Calligraphy "Good People Brighter Days ♥" */}
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
            <Reveal delay={0.1}>
              <motion.div
                initial={{ opacity: 0, x: 20, rotate: 6 }}
                animate={{ opacity: 1, x: 0, rotate: 6 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-script text-3xl sm:text-4xl md:text-[42px] text-[#4C0519] leading-tight select-none text-center lg:text-right drop-shadow-[0_1px_8px_rgba(255,255,255,0.4)]"
              >
                <p>Good</p>
                <p>People</p>
                <p>Brighter</p>
                <p className="flex items-center justify-center lg:justify-end gap-2">
                  <span className="relative inline-block">
                    Days
                    <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#FF136A] rounded-full" />
                  </span>
                  <span className="text-[#FF136A] text-2xl sm:text-3xl inline-block drop-shadow-none">♥</span>
                </p>
              </motion.div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
