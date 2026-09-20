"use client";

import { Search, ArrowRight } from "lucide-react";

export default function BottomCTA({
  onFind,
}: {
  onFind: () => void;
}) {
  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FFF0F5] via-[#FAF5FF] to-[#FFF0F5] border border-pink-100/90 px-6 py-8 sm:px-10 sm:py-10 shadow-sm">
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr_1fr] items-center gap-6 text-center md:text-left">
            
            {/* Left: Paper Airplane Vector Illustration */}
            <div className="flex items-center justify-center md:justify-start">
              <div className="relative">
                <svg
                  width="130"
                  height="70"
                  viewBox="0 0 130 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="overflow-visible"
                >
                  {/* Dashed curved trail with loop */}
                  <path
                    d="M10 60 C 25 60, 35 45, 50 35 C 65 25, 75 10, 60 15 C 45 20, 45 45, 75 35 C 95 28, 110 20, 118 18"
                    stroke="#D91A60"
                    strokeWidth="1.75"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                  />
                  {/* Paper airplane */}
                  <g transform="translate(108, 6) rotate(15) scale(0.85)">
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

            {/* Center: Main Message & Action Button */}
            <div className="flex flex-col items-center text-center">
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Good Company <span className="text-[#D91A60]">Is Just a Click Away.</span>
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md">
                Coffee, movies, shopping, travel or simply spending quality time — find a CoFriend for your next experience.
              </p>

              <button
                onClick={onFind}
                className="btn-cofriend-gradient mt-5 rounded-full px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-pink-500/25 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Search size={15} />
                <span>Find a CoFriend</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Right: Calligraphy Script */}
            <div className="flex items-center justify-center md:justify-end">
              <div className="text-center md:text-right">
                <p className="font-script text-2xl sm:text-3xl font-bold text-[#7C3AED] leading-snug">
                  More <br />
                  Experiences <br />
                  <span className="text-[#D91A60] inline-flex items-center gap-1">
                    Together ♥
                  </span>
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
