"use client";

import { motion } from "framer-motion";

export default function WelcomeBanner({ className = "" }: { className?: string }) {
  return (
    <section aria-label="Welcome to CoFriend" className={`w-full py-4 sm:py-6 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -2 }}
          className="relative overflow-hidden rounded-2xl md:rounded-full px-5 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 transition-shadow duration-300"
          style={{
            background: "linear-gradient(90deg, #FEF0F5 0%, #FFF8FA 50%, #FEF0F5 100%)",
            border: "1.5px solid rgba(252, 2, 100, 0.20)",
            boxShadow: "0 10px 32px -8px rgba(252, 2, 100, 0.10), 0 2px 10px rgba(0, 0, 0, 0.02)",
          }}
        >
          {/* Subtle background glow */}
          <div
            className="absolute -top-12 -left-12 w-32 h-32 rounded-full pointer-events-none opacity-40 blur-2xl"
            style={{ background: "#FC0264" }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full pointer-events-none opacity-30 blur-2xl"
            style={{ background: "#FC0264" }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-center justify-between gap-3 sm:gap-6 md:gap-8">
            {/* Left: 3-People Community Icon */}
            <div className="shrink-0 flex items-center justify-center">
              <svg
                viewBox="0 0 64 48"
                fill="none"
                className="w-10 h-8 sm:w-13 sm:h-10 md:w-16 md:h-12"
                aria-hidden="true"
              >
                {/* Left person */}
                <circle cx="17" cy="15" r="7.5" fill="#FC0264" />
                <path
                  d="M5 38c0-6.5 5.5-11 12-11 3.2 0 6 1.2 8 3.2-1.5 2.5-2.2 5.5-2.2 8.8H5z"
                  fill="#FC0264"
                />
                {/* Right person */}
                <circle cx="47" cy="15" r="7.5" fill="#FC0264" />
                <path
                  d="M59 38c0-6.5-5.5-11-12-11-3.2 0-6 1.2-8 3.2 1.5 2.5 2.2 5.5 2.2 8.8h17.8z"
                  fill="#FC0264"
                />
                {/* Center front person */}
                <circle cx="32" cy="11" r="9" fill="#FC0264" />
                <path
                  d="M16 39c0-8 7-14.5 16-14.5s16 6.5 16 14.5H16z"
                  fill="#FC0264"
                />
              </svg>
            </div>

            {/* Center: Headline & Subtitle */}
            <div className="flex-1 text-center min-w-0">
              <h2 className="font-display font-extrabold text-[1.35rem] sm:text-2xl md:text-[2rem] leading-tight tracking-tight text-[#0F172A]">
                Welcome to <span className="text-[#FC0264]">CoFriend</span>
              </h2>
              <p className="font-semibold text-[11px] sm:text-[13px] md:text-[15px] text-[#FC0264] mt-1 sm:mt-1.5 tracking-tight sm:tracking-normal leading-snug">
                India&apos;s Most Trusted Social and Lifestyle Professional Rental Services
              </p>
            </div>

            {/* Right: Floating Outlined Hearts */}
            <div className="shrink-0 flex items-center justify-center">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14"
                aria-hidden="true"
              >
                {/* Upper larger tilted heart */}
                <g transform="translate(16, 2) rotate(-14 20 20)">
                  <path
                    d="M20 32 C12 25 4 19 4 11 C4 5 8.5 2 14 2 C17.8 2 20 5 20 8 C20 5 22.2 2 26 2 C31.5 2 36 5 36 11 C36 19 28 25 20 32 Z"
                    stroke="#FC0264"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </g>
                {/* Lower smaller tilted heart */}
                <g transform="translate(34, 30) rotate(-10 14 14) scale(0.72)">
                  <path
                    d="M20 32 C12 25 4 19 4 11 C4 5 8.5 2 14 2 C17.8 2 20 5 20 8 C20 5 22.2 2 26 2 C31.5 2 36 5 36 11 C36 19 28 25 20 32 Z"
                    stroke="#FC0264"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </g>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
