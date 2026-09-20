"use client";

import { Search, UserCheck, Calendar, Heart, ArrowRight } from "lucide-react";

const STEPS = [
  {
    num: "1",
    icon: Search,
    title: "Choose a Service",
    desc: "Pick the experience you're looking for.",
  },
  {
    num: "2",
    icon: UserCheck,
    title: "Find Your CoFriend",
    desc: "Browse verified profiles and choose your match.",
  },
  {
    num: "3",
    icon: Calendar,
    title: "Book Your Time",
    desc: "Select date, time and make a secure payment.",
  },
  {
    num: "4",
    icon: Heart,
    title: "Meet & Enjoy",
    desc: "Connect and make memorable experiences — safely.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 sm:py-18 bg-[#FFFFFF] border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-12">
          <div>
            <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              SIMPLE STEPS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
              How It Works
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Booking a CoFriend is quick, easy and secure.
          </p>
        </div>

        {/* 4 Steps Row with Connecting Arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative flex flex-col items-center text-center">
                {/* Step circle container */}
                <div className="relative mb-5 flex items-center justify-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-pink-50 border border-pink-200/80 text-[#D91A60] shadow-sm transition-transform hover:scale-105">
                    <Icon size={26} strokeWidth={2.2} />
                  </div>

                  {/* Step number badge */}
                  <span className="absolute -top-1 -left-2 grid h-6 w-6 place-items-center rounded-full bg-white border border-purple-100 text-xs font-bold text-slate-700 shadow-sm">
                    {step.num}
                  </span>
                </div>

                {/* Step Title & Description */}
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-[220px] leading-relaxed">
                  {step.desc}
                </p>

                {/* Connecting arrow for desktop between steps */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-8 text-purple-400 pointer-events-none">
                    <ArrowRight size={20} strokeWidth={1.8} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
