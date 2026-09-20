"use client";

import { ShieldCheck, Smartphone, Users } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#2452E8] text-white text-[0.72rem] sm:text-[0.78rem] font-medium tracking-wide py-2 px-4 sm:px-6 lg:px-8 border-b border-blue-600/30">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
        {/* Left indicators */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
            </span>
            <span className="font-bold uppercase tracking-wider text-[0.68rem] text-rose-200">
              LIVE NOW
            </span>
          </div>

          <span className="text-blue-300/60 hidden sm:inline">|</span>

          <div className="hidden sm:flex items-center gap-1.5 text-blue-100">
            <Smartphone size={13} className="text-blue-200" />
            <span>Mobile Friendly</span>
          </div>

          <span className="text-blue-300/60 hidden md:inline">|</span>

          <div className="hidden md:flex items-center gap-1.5 text-blue-100">
            <ShieldCheck size={13} className="text-emerald-300" />
            <span>Safe &amp; Secure</span>
          </div>
        </div>

        {/* Center tag */}
        <div className="text-center font-medium text-blue-50 text-[0.72rem] sm:text-[0.78rem] truncate flex items-center gap-2">
          <span className="text-blue-300/60 hidden lg:inline">|</span>
          <span>India&apos;s Most Trusted Social &amp; Lifestyle Rental Support Services Marketplace</span>
        </div>

        {/* Right tag */}
        <div className="hidden lg:flex items-center gap-1.5 text-blue-100 shrink-0 font-medium">
          <Users size={14} className="text-blue-200" />
          <span>Book a Friend for Coffee, Movies, Shopping &amp; More &rsaquo;</span>
        </div>
      </div>
    </div>
  );
}
