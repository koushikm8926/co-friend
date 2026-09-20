"use client";

export default function BecomePartner({
  onBecome,
}: {
  onBecome: () => void;
}) {
  return (
    <section id="partner" className="py-8 sm:py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#E11D67] via-[#8B24D7] to-[#EC1D75] px-6 py-8 sm:px-10 sm:py-10 lg:py-12 shadow-xl text-white">
          {/* Subtle background glow/patterns */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.6fr_1.3fr] items-center gap-6 lg:gap-4">
            
            {/* Left Script Calligraphy: Turn Your Free Time Into Meaningful */}
            <div className="hidden lg:flex items-center justify-center">
              <img
                src="/images/callig-turn-your-time.png"
                alt="Turn Your Free Time Into Meaningful"
                className="w-auto h-24 xl:h-28 object-contain drop-shadow-md select-none"
              />
            </div>

            {/* Center Content */}
            <div className="flex flex-col items-center text-center px-2 lg:px-4">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Become a CoFriend
              </h2>

              <p className="mt-2.5 max-w-md text-xs sm:text-sm text-white/95 leading-relaxed font-medium">
                Meet new people, do what you love and earn through your time. <br className="hidden sm:inline" />
                Join a growing community of verified CoFriends.
              </p>

              <button
                onClick={onBecome}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs sm:text-sm font-bold text-[#7C3AED] hover:text-[#D91A60] shadow-md shadow-black/10 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Become a CoFriend</span>
                <span className="font-bold text-sm">➔</span>
              </button>
            </div>

            {/* Right Character & Calligraphy */}
            <div className="relative flex items-center justify-center lg:justify-end gap-3 sm:gap-5 pr-0 lg:pr-4">
              {/* Avatar with accent lines */}
              <div className="relative">
                {/* Hand-drawn SVG action accent lines around beanie */}
                <svg
                  className="absolute -top-3 left-2 w-6 h-6 text-slate-900/90 pointer-events-none select-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="4" y1="18" x2="2" y2="8" />
                  <line x1="12" y1="18" x2="12" y2="4" />
                  <line x1="20" y1="18" x2="22" y2="8" />
                </svg>

                <svg
                  className="absolute -top-3 right-5 w-6 h-6 text-slate-900/90 pointer-events-none select-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="4" y1="18" x2="2" y2="8" />
                  <line x1="12" y1="18" x2="12" y2="4" />
                  <line x1="20" y1="18" x2="22" y2="8" />
                </svg>

                <svg
                  className="absolute top-12 -left-3 w-4 h-4 text-slate-900/90 pointer-events-none select-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="16" y1="4" x2="4" y2="12" />
                  <line x1="16" y1="20" x2="4" y2="12" />
                </svg>

                <img
                  src="/images/banner-girl.png"
                  alt="Become a CoFriend friendly verified companion"
                  className="h-44 sm:h-52 lg:h-56 w-auto object-contain drop-shadow-2xl select-none"
                />
              </div>

              {/* Calligraphy: Good People Great Stories */}
              <div className="shrink-0">
                <img
                  src="/images/callig-good-people-clean.png"
                  alt="Good People Great Stories"
                  className="w-auto h-20 sm:h-24 lg:h-28 object-contain drop-shadow-sm select-none"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
