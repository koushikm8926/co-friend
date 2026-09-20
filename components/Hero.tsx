"use client";

const SERVICES = [
  { id: "movies", label: "Movies", icon: "🎬" },
  { id: "coffee", label: "Coffee", icon: "☕" },
  { id: "shopping", label: "Shopping", icon: "🛍️" },
  { id: "travel", label: "Travel", icon: "✈️" },
  { id: "fitness", label: "Fitness", icon: "🏋️" },
  { id: "events", label: "Events", icon: "🎉" },
  { id: "more", label: "More", icon: "···" },
];

const TRUST_BADGES = [
  {
    id: "verified",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <path
          d="M10 1.5l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.77l-4.77 2.44.91-5.32L2.27 7.12l5.34-.78L10 1.5z"
          fill="#D91A60"
        />
      </svg>
    ),
    text: "Verified Profiles",
  },
  {
    id: "flexible",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <rect x="3" y="2" width="14" height="16" rx="2" stroke="#7C3AED" strokeWidth="1.5" />
        <path d="M7 6h6M7 10h4" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="14" r="3" fill="#7C3AED" />
        <path d="M13 14l.8.8 1.4-1.4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Flexible Bookings",
  },
  {
    id: "safe",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
        <circle cx="10" cy="8" r="3" stroke="#D91A60" strokeWidth="1.5" />
        <path d="M4 17c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="#D91A60" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="8" r="3" stroke="#D91A60" strokeWidth="1.5" />
        <path d="M14 15c.64-.64 1.49-1 2-1" stroke="#D91A60" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: "Safe Experiences",
  },
];

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
    <section
      id="home"
      aria-label="Hero"
      className="relative w-full bg-white overflow-hidden"
    >
      {/* SEO H1 (visible only to screen readers / crawlers) */}
      <h1 className="sr-only">Find a CoFriend. Share the Moment.</h1>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div
          className="relative flex flex-col lg:flex-row items-stretch min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden"
        >
          {/* ── LEFT: Copy Panel ────────────────────────────────── */}
          <div className="relative z-10 flex flex-col justify-center w-full lg:w-[46%] xl:w-[44%] py-10 lg:py-14 pr-0 lg:pr-8 xl:pr-0">
            {/* Eyebrow */}
            <p
              className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-slate-500 mb-3 sm:mb-4"
              aria-hidden="true"
            >
              Real People.{" "}
              <span className="text-[#D91A60]">Real Connections.</span>
            </p>

            {/* Headline */}
            <div className="mb-4 sm:mb-5">
              <span
                className="block font-display font-extrabold leading-[1.08] text-[2.05rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[2.5rem] xl:text-[3.1rem] text-[#0F172A]"
              >
                Find a CoFriend.
              </span>
              <span
                className="block font-display font-extrabold leading-[1.08] text-[2.05rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[2.5rem] xl:text-[3.1rem]"
                style={{
                  background: "linear-gradient(90deg,#D91A60 0%,#f472b6 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Share the Moment.
              </span>
            </div>

            {/* Sub-headline */}
            <p className="text-sm sm:text-[15px] font-semibold text-slate-800 mb-1.5">
              Life feels better with the right company.
            </p>

            {/* Description */}
            <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed mb-6 sm:mb-7 max-w-[430px]">
              Find verified CoFriends for coffee, movies, shopping, travel,
              fitness, events, study sessions and everyday experiences. Choose
              who you&apos;d like to spend time with, select a service and book
              a time that works for you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-7">
              <button
                id="hero-find-cofriend"
                onClick={onFind}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[13px] sm:text-sm font-bold text-white shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
                style={{
                  background: "linear-gradient(92deg,#8B5CF6 0%,#D91A60 100%)",
                  boxShadow: "0 8px 28px -6px rgba(217,26,96,0.45)",
                }}
                aria-label="Find a CoFriend"
              >
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
                  <path d="M15 15l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Find a CoFriend
                <span aria-hidden="true">→</span>
              </button>

              <button
                id="hero-become-cofriend"
                onClick={onBecome}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[13px] sm:text-sm font-bold border-2 border-[#7C3AED] text-[#7C3AED] bg-white hover:bg-[#7C3AED] hover:text-white active:scale-95 transition-all duration-200 cursor-pointer"
                aria-label="Become a CoFriend"
              >
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                  <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M4 17c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                Become a CoFriend
                <span aria-hidden="true">→</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {TRUST_BADGES.map((badge) => (
                <div key={badge.id} className="flex items-center gap-1.5">
                  {badge.icon}
                  <span className="text-[12px] sm:text-[13px] font-semibold text-slate-600">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Photo Panel ──────────────────────────────── */}
          <div className="relative w-full lg:w-[54%] xl:w-[56%] flex-shrink-0 min-h-[260px] sm:min-h-[340px] lg:min-h-0">
            {/* Fade-in mask on the left edge so it blends into the white copy panel */}
            <div
              className="absolute inset-y-0 left-0 w-24 sm:w-36 lg:w-24 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to right, white 0%, transparent 100%)",
              }}
            />

            {/* Hero photo */}
            <img
              src="/images/hero-bg-clean@2x.png"
              alt="Friends sharing a moment together at a café with Charminar in the background"
              className="absolute inset-0 w-full h-full object-cover object-left-top select-none"
              draggable={false}
            />

            {/* ── Services Dock ─────────────────────────────────── */}
            <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 lg:left-[50%] z-20 pointer-events-auto">
              <div
                className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2.5 rounded-2xl shadow-xl"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.7)",
                  boxShadow: "0 12px 40px -8px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                {SERVICES.map((svc) => (
                  <button
                    key={svc.id}
                    id={`hero-service-${svc.id}`}
                    onClick={() => onOpenComingSoon?.(`${svc.label} service booking`)}
                    title={`${svc.label}${svc.id === "more" ? "" : " — Coming Soon"}`}
                    aria-label={`${svc.label} service`}
                    className="flex flex-col items-center gap-1 px-2.5 sm:px-3.5 py-1 rounded-xl hover:bg-pink-50/80 active:scale-95 transition-all duration-150 cursor-pointer group min-w-[44px] sm:min-w-[52px]"
                  >
                    <span
                      className="text-lg sm:text-xl leading-none"
                      aria-hidden="true"
                    >
                      {svc.icon}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-semibold text-slate-600 group-hover:text-[#D91A60] transition-colors whitespace-nowrap">
                      {svc.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only standalone CTA (extra accessibility layer for very small screens) */}
      <div className="mt-5 flex lg:hidden flex-col gap-2.5 px-4 sm:px-6">
        <div className="flex gap-3">
          <button
            onClick={onFind}
            className="flex-1 rounded-full py-3.5 text-sm font-bold text-white text-center active:scale-95 transition-transform cursor-pointer"
            style={{
              background: "linear-gradient(92deg,#8B5CF6 0%,#D91A60 100%)",
            }}
          >
            🔍 Find a CoFriend →
          </button>
          <button
            onClick={onBecome}
            className="flex-1 rounded-full border-2 border-[#7C3AED] bg-white py-3.5 text-sm font-bold text-[#7C3AED] text-center active:scale-95 transition-transform cursor-pointer"
          >
            👤 Become a CoFriend →
          </button>
        </div>
      </div>
    </section>
  );
}
