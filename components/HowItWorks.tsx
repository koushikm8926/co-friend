"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const STEPS = [
  { num: "1", title: "Choose a Service",   desc: "Pick the experience you're looking for.",                          iconType: "search" },
  { num: "2", title: "Find Your CoFriend", desc: "Browse verified profiles and choose your match.",                   iconType: "user" },
  { num: "3", title: "Book Your Time",     desc: "Select date, time and make a secure payment.",                     iconType: "calendar" },
  { num: "4", title: "Meet & Enjoy",       desc: "Connect and make memorable experiences — safely.",                 iconType: "heart" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 pb-14 sm:pb-16">
          <Reveal>
            <div>
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-slate-400">
                SIMPLE STEPS
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight">
                How It Works
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-slate-500 font-normal max-w-xs">
              Booking a CoFriend is quick, easy and secure.
            </p>
          </Reveal>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
          {STEPS.map((step, idx) => (
            <Reveal key={step.num} delay={idx * 0.12}>
              <div className="relative flex flex-col items-center text-center">

                {/* Step Circle */}
                <motion.div
                  className="relative mb-6 flex items-center justify-center"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-[#FCE8F0] shadow-md">
                    {step.iconType === "search" && (
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D91A60" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    )}
                    {step.iconType === "user" && (
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="#D91A60" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="7" r="4.5" /><path d="M4 20c0-4 4-6.5 8-6.5s8 2.5 8 6.5v1H4v-1z" />
                      </svg>
                    )}
                    {step.iconType === "calendar" && (
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="#D91A60" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                        <circle cx="8" cy="12.5" r="1" fill="white" /><circle cx="12" cy="12.5" r="1" fill="white" /><circle cx="16" cy="12.5" r="1" fill="white" />
                        <circle cx="8" cy="16.5" r="1" fill="white" /><circle cx="12" cy="16.5" r="1" fill="white" /><circle cx="16" cy="16.5" r="1" fill="white" />
                      </svg>
                    )}
                    {step.iconType === "heart" && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="#D91A60" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    )}
                  </div>
                  <span className="absolute -top-1.5 -left-2.5 grid h-7 w-7 place-items-center rounded-full bg-[#EFE9FA] text-sm font-bold text-[#6D28D9] shadow-sm select-none">
                    {step.num}
                  </span>
                </motion.div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm sm:text-[15px] text-slate-500 max-w-[220px] leading-relaxed font-normal">
                  {step.desc}
                </p>

                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:flex items-center absolute -right-3 top-8 text-[#7C3AED] pointer-events-none">
                    <ArrowRight size={24} strokeWidth={2.2} />
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
