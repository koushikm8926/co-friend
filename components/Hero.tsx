"use client";

import { motion } from "framer-motion";
import { Search, UserPlus, Check, Calendar, Users, Sparkles } from "lucide-react";

export default function Hero({
  onFind,
  onBecome,
}: {
  onFind: () => void;
  onBecome: () => void;
}) {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-6">
          
          {/* Left Hero Content */}
          <div className="z-10 pt-4 lg:pt-0 max-w-xl">
            {/* Eyebrow badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                REAL PEOPLE. REAL CONNECTIONS.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.08] tracking-tight text-slate-900">
              Find a CoFriend. <br />
              <span className="text-[#D91A60]">Share the Moment.</span>
            </h1>

            {/* Sub-headline */}
            <div className="mt-5 space-y-2">
              <p className="font-semibold text-slate-800 text-base sm:text-lg">
                Life feels better with the right company.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg">
                Find verified CoFriends for coffee, movies, shopping, travel, fitness, events,
                study sessions and everyday experiences. Choose who you&apos;d like spend time with,
                select a service and book a time that works for you.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onFind}
                className="btn-cofriend-gradient rounded-full px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-pink-500/25 flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Search size={16} />
                <span>Find a CoFriend</span>
                <span className="text-white/80">➔</span>
              </button>

              <button
                onClick={onBecome}
                className="rounded-full border border-purple-200 bg-white px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-bold text-purple-700 hover:border-purple-300 hover:bg-purple-50/70 shadow-sm flex items-center gap-2.5 transition-all active:scale-95 cursor-pointer"
              >
                <UserPlus size={16} className="text-purple-600" />
                <span>Become a CoFriend</span>
                <span className="text-purple-400">➔</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-pink-100 text-[#D91A60]">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>Verified Profiles</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-pink-100 text-[#D91A60]">
                  <Calendar size={12} strokeWidth={2.5} />
                </span>
                <span>Flexible Bookings</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-pink-100 text-[#D91A60]">
                  <Users size={12} strokeWidth={2.5} />
                </span>
                <span>Safe Experiences</span>
              </div>
            </div>
          </div>

          {/* Right Hero Graphic & Calligraphy */}
          <div className="relative w-full overflow-hidden lg:overflow-visible">
            {/* Main Hero Composite Image */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/images/hero-banner.png"
                alt="Friends hanging out together over coffee with city and travel experiences"
                className="w-full h-auto object-cover max-h-[520px] rounded-2xl"
              />

              {/* Top Calligraphy Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-8 bg-white/80 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg border border-white/60 pointer-events-none transform rotate-[-2deg]">
                <p className="font-script text-2xl sm:text-3xl font-bold text-slate-800 leading-tight text-center">
                  Good Company <br />
                  <span className="text-[#D91A60]">Brighter Days</span>
                </p>
              </div>

              {/* Bottom Right Calligraphy Badge */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/85 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg border border-white/60 pointer-events-none transform rotate-[2deg]">
                <p className="font-script text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-1.5">
                  <span>More Experiences Together</span>
                  <span className="text-[#D91A60]">♥</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
