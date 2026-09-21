"use client";

import { motion } from "framer-motion";
import { Handshake, Leaf, Users, Gem } from "lucide-react";
import { Reveal } from "./Reveal";

const VALUES = [
  {
    icon: Handshake,
    title: "Respect",
    desc: "We treat everyone with kindness and fairness.",
    bg: "bg-gradient-to-b from-[#FFF5F8] to-[#FFEBF2]",
    border: "border-pink-100/80",
    iconColor: "text-[#E11D48]",
    shadowHover: "rgba(225,29,72,0.12)",
  },
  {
    icon: Leaf,
    title: "Safety",
    desc: "We prioritize a secure and positive environment.",
    bg: "bg-gradient-to-b from-[#F0FDF4] to-[#E2FBEA]",
    border: "border-emerald-100/80",
    iconColor: "text-[#16A34A]",
    shadowHover: "rgba(22,163,74,0.12)",
  },
  {
    icon: Users,
    title: "Authenticity",
    desc: "We encourage genuine connections and honest profiles.",
    bg: "bg-gradient-to-b from-[#FAF5FF] to-[#F3E8FF]",
    border: "border-purple-100/80",
    iconColor: "text-[#9333EA]",
    shadowHover: "rgba(147,51,234,0.12)",
  },
  {
    icon: Gem,
    title: "Meaningful Experiences",
    desc: "We believe in creating moments that truly matter",
    bg: "bg-gradient-to-b from-[#F5F3FF] to-[#EDE9FE]",
    border: "border-violet-100/80",
    iconColor: "text-[#7C3AED]",
    shadowHover: "rgba(124,58,237,0.12)",
  },
];

export default function OurValues({
  className = "pt-4 sm:pt-6 pb-6 sm:pb-8",
}: {
  className?: string;
}) {
  return (
    <section className={`bg-white relative overflow-hidden ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header row: Left Title, Right Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <Reveal>
            <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#64748B] mb-3">
              OUR VALUES
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#0F172A] leading-[1.15] tracking-tight">
              People First. <span className="text-[#D91A60]">Always.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-slate-500 font-normal md:text-right max-w-md">
              The values that guide everything we do at CoFriend.
            </p>
          </Reveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {VALUES.map((val, idx) => (
            <Reveal key={val.title} delay={idx * 0.08}>
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: `0 18px 36px -10px ${val.shadowHover}`,
                }}
                transition={{ duration: 0.25 }}
                className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border ${val.border} ${val.bg} p-7 sm:p-8 flex flex-col items-center text-center shadow-[0_2px_14px_-4px_rgba(0,0,0,0.03)] h-full cursor-default`}
              >
                {/* Icon */}
                <div className={`mb-5 ${val.iconColor}`}>
                  <val.icon className="w-10 h-10 sm:w-11 sm:h-11" strokeWidth={2.2} />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg sm:text-[19px] text-[#0F172A] mb-2 leading-snug">
                  {val.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
