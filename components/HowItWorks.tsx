"use client";

import { ArrowRight, LayoutGrid, User, Calendar, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    num: "1",
    title: "Choose a Service",
    desc: "Pick the experience you're looking for.",
    icon: LayoutGrid,
    isFilled: false,
  },
  {
    num: "2",
    title: "Find Your Cofriend",
    desc: "Browse verified profiles and choose your match.",
    icon: User,
    isFilled: true,
  },
  {
    num: "3",
    title: "Book Your Time",
    desc: "Select date, time and make a secure payment.",
    icon: Calendar,
    isFilled: true,
  },
  {
    num: "4",
    title: "Meet & Enjoy",
    desc: "Connect and create memorable experiences — safely.",
    icon: Heart,
    isFilled: true,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-14 sm:pb-18">
          <Reveal>
            <div>
              <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#64748B] mb-2.5">
                HOW IT WORKS
              </p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#0F172A] tracking-tight leading-[1.15]">
                Simple Steps <br />
                to Great <span className="text-[#D91A60]">Experiences.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-slate-500 font-normal sm:text-right max-w-xs leading-relaxed pb-1">
              Booking a CoFriend is quick, easy and secure.
            </p>
          </Reveal>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative">
          {STEPS.map((step, idx) => (
            <Reveal key={step.num} delay={idx * 0.1}>
              <div className="relative flex flex-col items-center text-center group">

                {/* Step Circle with Number Badge */}
                <motion.div
                  className="relative mb-6 flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                >
                  {/* Soft Pink Glow Circle */}
                  <div className="grid h-20 w-20 sm:h-22 sm:w-22 place-items-center rounded-full bg-[#FCE7F3] shadow-sm text-[#D91A60] transition-transform duration-300 group-hover:scale-105">
                    {step.num === "1" && (
                      <LayoutGrid className="w-8 h-8 sm:w-9 sm:h-9" strokeWidth={2.4} />
                    )}
                    {step.num === "2" && (
                      <svg width="34" height="34" viewBox="0 0 24 24" fill="#D91A60" className="sm:w-9 sm:h-9">
                        <circle cx="12" cy="7" r="4.5" />
                        <path d="M4 20c0-4 4-6.5 8-6.5s8 2.5 8 6.5v1H4v-1z" />
                      </svg>
                    )}
                    {step.num === "3" && (
                      <svg width="34" height="34" viewBox="0 0 24 24" fill="#D91A60" className="sm:w-9 sm:h-9">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                        <circle cx="8" cy="12.5" r="1.1" fill="white" />
                        <circle cx="12" cy="12.5" r="1.1" fill="white" />
                        <circle cx="16" cy="12.5" r="1.1" fill="white" />
                        <circle cx="8" cy="16.5" r="1.1" fill="white" />
                        <circle cx="12" cy="16.5" r="1.1" fill="white" />
                        <circle cx="16" cy="16.5" r="1.1" fill="white" />
                      </svg>
                    )}
                    {step.num === "4" && (
                      <Heart className="w-8 h-8 sm:w-9 sm:h-9 fill-current" />
                    )}
                  </div>

                  {/* Number Badge */}
                  <span className="absolute -top-1 -left-2 grid h-7 w-7 place-items-center rounded-full bg-[#EDE9FE] text-xs font-bold text-[#7C3AED] shadow-sm select-none">
                    {step.num}
                  </span>
                </motion.div>

                {/* Title */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 max-w-[210px] leading-relaxed font-normal">
                  {step.desc}
                </p>

                {/* Arrow Connector between steps */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:flex items-center absolute -right-3 top-9 text-[#7C3AED] pointer-events-none">
                    <ArrowRight size={22} strokeWidth={2.5} />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
