"use client";

import { ArrowRight } from "lucide-react";

export default function BecomePartner({
  onBecome,
}: {
  onBecome: () => void;
}) {
  return (
    <section id="partner" className="py-8 sm:py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#D91A60] via-[#C026D3] to-[#7C3AED] px-6 py-8 sm:px-12 sm:py-10 shadow-xl text-white">
          {/* Subtle background glow */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-purple-900/20 blur-2xl" />

          <div className="relative grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center gap-6 text-center md:text-left">
            
            {/* Left Script Calligraphy */}
            <div className="hidden md:block">
              <p className="font-script text-3xl lg:text-4xl text-white/95 leading-tight transform -rotate-6">
                Turn Your <br />
                Free Time Into <br />
                <span className="underline decoration-wavy decoration-white/50">Meaningful</span>
              </p>
            </div>

            {/* Center Content */}
            <div className="flex flex-col items-center text-center px-2">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Become a CoFriend
              </h2>

              <p className="mt-2.5 max-w-md text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                Meet new people, do what you love and earn through your time.
                Join a growing community of verified CoFriends.
              </p>

              <button
                onClick={onBecome}
                className="mt-6 rounded-full bg-white px-7 py-3 text-xs sm:text-sm font-extrabold text-[#7C3AED] hover:text-[#D91A60] shadow-lg shadow-black/15 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Become a CoFriend</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Right Character & Calligraphy */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center">
                <img
                  src="/images/banner-girl.png"
                  alt="Friendly CoFriend member waving peace sign"
                  className="h-36 sm:h-44 w-auto object-contain drop-shadow-xl"
                  onError={(e) => {
                    // Fallback to banner-full crop if needed
                    (e.target as HTMLImageElement).src = "/images/banner_partner_girl_1789888552537.jpg";
                  }}
                />

                {/* Script calligraphy badge next to character */}
                <div className="absolute -right-2 top-2 sm:right-0 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-xl transform rotate-6 border border-white/30 hidden sm:block">
                  <p className="font-script text-lg sm:text-xl font-bold text-white leading-tight">
                    Good People <br /> Great Stories
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
