"use client";

import { Search, ArrowRight } from "lucide-react";

export default function BottomCTA({
  onFind,
}: {
  onFind: () => void;
}) {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-r from-[#FFF0F5] via-[#FDF4FA] to-[#FFF0F5] border-y border-pink-100/70 py-12 sm:py-16 lg:py-20">
      {/* Background ambient glows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr_1fr] items-center gap-6 sm:gap-8 text-center md:text-left">
          
          {/* Left: Paper Airplane & Dashed Trail */}
          <div className="flex items-center justify-center md:justify-start">
            <div className="relative transform hover:scale-105 transition-transform">
              <svg
                width="140"
                height="75"
                viewBox="0 0 140 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible select-none"
              >
                {/* Dashed curved trail with loop */}
                <path
                  d="M10 65 C 30 65, 40 45, 55 35 C 70 25, 82 8, 65 14 C 48 20, 50 48, 82 38 C 105 30, 120 20, 128 17"
                  stroke="#D91A60"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                />
                {/* Paper airplane */}
                <g transform="translate(118, 5) rotate(18) scale(0.9)">
                  <path
                    d="M0 12 L24 0 L18 24 L11 15 L0 12 Z"
                    fill="#D91A60"
                  />
                  <path
                    d="M18 24 L11 15 L14 18 Z"
                    fill="#BE185D"
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* Center: Main CTA Headline, Subtitle, & Button */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Good Company <span className="text-[#D91A60]">Is Just a Click Away.</span>
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed font-normal">
              Coffee, movies, shopping, travel or simply spending quality time — find a CoFriend for your next experience.
            </p>

            <button
              onClick={onFind}
              className="mt-6 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-pink-500/25 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Search size={16} />
              <span>Find a CoFriend</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Right: Calligraphy Script */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="text-center md:text-right select-none">
              <p className="font-script text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7C3AED] leading-tight">
                More <br />
                Experiences <br />
                <span className="text-[#D91A60] inline-flex items-center gap-1.5">
                  Together ♥
                </span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
