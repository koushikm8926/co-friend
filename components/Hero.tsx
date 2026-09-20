"use client";

import {
  Search,
  UserPlus,
  Check,
  Calendar,
  Users,
  Film,
  Coffee,
  ShoppingBag,
  Plane,
  Dumbbell,
  CalendarDays,
  MoreHorizontal,
} from "lucide-react";

const QUICK_SERVICES = [
  { id: "movies", label: "Movies", icon: Film },
  { id: "coffee", label: "Coffee", icon: Coffee },
  { id: "shopping", label: "Shopping", icon: ShoppingBag },
  { id: "travel", label: "Travel", icon: Plane },
  { id: "fitness", label: "Fitness", icon: Dumbbell },
  { id: "events", label: "Events", icon: CalendarDays },
  { id: "more", label: "More", icon: MoreHorizontal },
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
      className="relative overflow-hidden bg-white pt-6 pb-10 sm:pt-8 sm:pb-14 lg:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[460px] lg:min-h-[480px] xl:min-h-[510px] flex items-center">
          
          {/* Desktop Panoramic Background (Friends + Charminar + Calligraphy) */}
          <div className="absolute inset-0 hidden lg:block overflow-hidden pointer-events-none select-none">
            <img
              src="/images/hero-banner.png"
              alt="Friends hanging out together over coffee with Charminar view"
              className="absolute right-0 top-0 h-full w-full object-cover object-right"
            />
          </div>

          {/* Left Hero Content */}
          <div className="relative z-10 max-w-xl py-4 lg:py-6">
            {/* Eyebrow badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2.5px] w-6 bg-[#D91A60] rounded-full inline-block" />
              <span className="text-[0.7rem] sm:text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                REAL PEOPLE. REAL CONNECTIONS.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-extrabold leading-[1.08] tracking-tight text-slate-900">
              Find a CoFriend. <br />
              <span className="text-[#D91A60]">Share the Moment.</span>
            </h1>

            {/* Sub-headline */}
            <div className="mt-4 sm:mt-5 space-y-2">
              <p className="font-bold text-slate-800 text-base sm:text-lg">
                Life feels better with the right company.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg">
                Find verified CoFriends for coffee, movies, shopping, travel, fitness, events,
                study sessions and everyday experiences. Choose who you&apos;d like to spend time with,
                select a service and book a time that works for you.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5">
              {/* Find a CoFriend CTA */}
              <button
                onClick={onFind}
                className="rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold shadow-lg shadow-pink-500/25 flex items-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Search size={16} />
                <span>Find a CoFriend</span>
                <span className="text-white/80">➔</span>
              </button>

              {/* Become a CoFriend CTA */}
              <button
                onClick={onBecome}
                className="rounded-full border-2 border-purple-600 bg-white hover:bg-purple-50/80 px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold text-purple-700 shadow-sm flex items-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <UserPlus size={16} className="text-purple-600" />
                <span>Become a CoFriend</span>
                <span className="text-purple-600">➔</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-pink-100 text-[#D91A60]">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>Verified Profiles</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-pink-100 text-[#D91A60]">
                  <Calendar size={12} strokeWidth={2.5} />
                </span>
                <span>Flexible Bookings</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-pink-100 text-[#D91A60]">
                  <Users size={12} strokeWidth={2.5} />
                </span>
                <span>Safe Experiences</span>
              </div>
            </div>
          </div>

          {/* Desktop Floating Quick Services Dock */}
          <div className="hidden lg:flex absolute bottom-3 right-4 xl:right-10 z-20 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/80 px-6 py-2.5 items-center gap-5 xl:gap-7">
            {QUICK_SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => onOpenComingSoon?.(`${service.label} service booking`)}
                className="group flex flex-col items-center gap-1 transition-all hover:scale-110 active:scale-95 cursor-pointer px-1 py-1"
                title={`${service.label} - Coming Soon`}
              >
                <div className="text-slate-800 group-hover:text-[#D91A60] transition-colors">
                  <service.icon size={18} strokeWidth={2.2} />
                </div>
                <span className="text-[10.5px] font-semibold text-slate-700 group-hover:text-[#D91A60] transition-colors">
                  {service.label}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Mobile / Tablet Hero Banner & Dock View */}
        <div className="mt-8 block lg:hidden">
          <div className="relative rounded-2xl overflow-hidden shadow-md">
            <img
              src="/images/hero-banner.png"
              alt="Friends hanging out together over coffee with Charminar view"
              className="w-full h-auto object-cover max-h-[360px]"
            />
          </div>

          {/* Mobile Quick Services Dock */}
          <div className="mt-4 flex items-center justify-between gap-1 overflow-x-auto bg-slate-50/90 rounded-2xl p-3 border border-slate-100 shadow-sm scrollbar-none">
            {QUICK_SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => onOpenComingSoon?.(`${service.label} service booking`)}
                className="flex flex-col items-center gap-1 min-w-[50px] p-1.5 rounded-xl hover:bg-white transition-colors cursor-pointer"
              >
                <div className="text-slate-800">
                  <service.icon size={18} strokeWidth={2.2} />
                </div>
                <span className="text-[10px] font-semibold text-slate-700">
                  {service.label}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
