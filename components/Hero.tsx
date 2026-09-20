"use client";

const SERVICES = [
  { id: "movies",   label: "Movies",   icon: "🎬" },
  { id: "coffee",   label: "Coffee",   icon: "☕" },
  { id: "shopping", label: "Shopping", icon: "🛍️" },
  { id: "travel",   label: "Travel",   icon: "✈️" },
  { id: "fitness",  label: "Fitness",  icon: "🏋️" },
  { id: "events",   label: "Events",   icon: "🎉" },
  { id: "more",     label: "More",     icon: "···" },
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
    <section id="home" aria-label="Hero" className="relative w-full bg-white">
      {/* SEO H1 */}
      <h1 className="sr-only">Find a CoFriend. Share the Moment.</h1>

      <div className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-8 py-2 sm:py-3 lg:py-4">
        {/* ── Outer container – clips the rounded card ─────────── */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-sm border border-slate-100">

          {/* ── BACKGROUND: photo stretched full-width ────────────── */}
          <img
            src="/images/hero-bg-clean@2x.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-right select-none pointer-events-none"
            draggable={false}
          />

          {/* White → transparent gradient so left-side text stays legible */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #ffffff 0%, #ffffff 28%, rgba(255,255,255,0.82) 44%, rgba(255,255,255,0.35) 60%, transparent 78%)",
            }}
          />

          {/* ── CONTENT GRID ─────────────────────────────────────── */}
          <div className="relative z-10 flex flex-col lg:flex-row min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] xl:min-h-[540px]">

            {/* LEFT: Copy Panel (sits on the white left half of banner) */}
            <div className="flex flex-col justify-center w-full lg:w-[46%] xl:w-[44%] px-6 sm:px-9 lg:px-10 xl:px-14 py-10 lg:py-14">

              {/* Eyebrow */}
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 mb-3">
                Real People.{" "}
                <span className="text-[#D91A60]">Real Connections.</span>
              </p>

              {/* Headline */}
              <div className="mb-4 sm:mb-5">
                <span className="block font-display font-extrabold leading-[1.07] tracking-tight text-[2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[2.6rem] xl:text-[3.2rem] text-[#0F172A]">
                  Find a CoFriend.
                </span>
                <span
                  className="block font-display font-extrabold leading-[1.07] tracking-tight text-[2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[2.6rem] xl:text-[3.2rem]"
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

              {/* Body */}
              <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed mb-6 sm:mb-7 max-w-[400px]">
                Find verified CoFriends for coffee, movies, shopping, travel,
                fitness, events, study sessions and everyday experiences.
                Choose who you&apos;d like to spend time with, select a service
                and book a time that works for you.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-6 sm:mb-7">
                <button
                  id="hero-find-cofriend"
                  onClick={onFind}
                  aria-label="Find a CoFriend"
                  className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-bold text-white active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
                  style={{
                    background: "linear-gradient(92deg,#8B5CF6 0%,#D91A60 100%)",
                    boxShadow: "0 8px 28px -6px rgba(217,26,96,0.45)",
                  }}
                >
                  <svg viewBox="0 0 20 20" fill="none" className="w-[15px] h-[15px]" aria-hidden="true">
                    <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
                    <path d="M15 15l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Find a CoFriend &nbsp;→
                </button>

                <button
                  id="hero-become-cofriend"
                  onClick={onBecome}
                  aria-label="Become a CoFriend"
                  className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-bold border-2 border-[#7C3AED] text-[#7C3AED] bg-white hover:bg-[#7C3AED] hover:text-white active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  <svg viewBox="0 0 20 20" fill="none" className="w-[15px] h-[15px]" aria-hidden="true">
                    <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M4 17c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  Become a CoFriend &nbsp;→
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <div className="flex items-center gap-1.5">
                  <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                    <path d="M9 1.5l2.15 4.36 4.8.7-3.48 3.39.82 4.79L9 12.4l-4.29 2.34.82-4.79L2.05 6.56l4.8-.7L9 1.5z" fill="#D91A60" />
                  </svg>
                  <span className="text-[12px] sm:text-[13px] font-semibold text-slate-600">Verified Profiles</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                    <rect x="2.5" y="1.5" width="13" height="15" rx="2" stroke="#7C3AED" strokeWidth="1.5" />
                    <path d="M6 5.5h6M6 9h4" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="13" cy="13" r="3" fill="#7C3AED" />
                    <path d="M11.8 13l.7.8 1.4-1.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[12px] sm:text-[13px] font-semibold text-slate-600">Flexible Bookings</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <svg viewBox="0 0 18 18" fill="none" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                    <circle cx="7" cy="6.5" r="3" stroke="#D91A60" strokeWidth="1.5" />
                    <path d="M2 16c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#D91A60" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="13" cy="6.5" r="2.5" stroke="#D91A60" strokeWidth="1.5" />
                    <path d="M11.5 14c.5-.5 1.2-.8 1.5-.8" stroke="#D91A60" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-[12px] sm:text-[13px] font-semibold text-slate-600">Safe Experiences</span>
                </div>
              </div>
            </div>

            {/* RIGHT: spacer so the background image shows through */}
            <div className="hidden lg:flex flex-1" aria-hidden="true" />
          </div>

          {/* ── SERVICES DOCK – pinned to bottom-right of the card ── */}
          <div className="absolute bottom-5 sm:bottom-6 right-3 sm:right-5 lg:right-6 z-20 pointer-events-auto">
            <div
              className="flex items-center divide-x divide-slate-200/70 px-1.5 py-2.5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.90)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                boxShadow: "0 12px 40px -8px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)",
                border: "1px solid rgba(255,255,255,0.75)",
              }}
            >
              {SERVICES.map((svc) => (
                <button
                  key={svc.id}
                  id={`hero-service-${svc.id}`}
                  onClick={() => onOpenComingSoon?.(`${svc.label} service booking`)}
                  title={`${svc.label}${svc.id === "more" ? "" : " — Coming Soon"}`}
                  aria-label={`${svc.label} service`}
                  className="flex flex-col items-center gap-[3px] px-3 sm:px-4 py-0.5 rounded-xl hover:bg-pink-50/80 active:scale-95 transition-all duration-150 cursor-pointer group"
                >
                  <span className="text-xl sm:text-2xl leading-none" aria-hidden="true">
                    {svc.icon}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-slate-700 group-hover:text-[#D91A60] transition-colors whitespace-nowrap">
                    {svc.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile fallback CTA strip (shown only below lg breakpoint) */}
      <div className="flex lg:hidden gap-3 px-4 sm:px-6 mt-4 mb-2">
        <button
          onClick={onFind}
          className="flex-1 rounded-full py-3.5 text-sm font-bold text-white text-center active:scale-95 transition-transform cursor-pointer"
          style={{ background: "linear-gradient(92deg,#8B5CF6 0%,#D91A60 100%)" }}
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
    </section>
  );
}
