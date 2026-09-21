"use client";

import { motion } from "framer-motion";
import { ArrowRight, UserPlus, FileText, ShieldCheck, Heart, BadgeCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    num: "1",
    title: "Register",
    desc: "Create your account",
    icon: UserPlus,
  },
  {
    num: "2",
    title: "Submit Details",
    desc: "Provide required information",
    icon: FileText,
  },
  {
    num: "3",
    title: "Identity Verification",
    desc: "Document & selfie verification",
    icon: ShieldCheck,
  },
  {
    num: "4",
    title: "Profile Review",
    desc: "Our team reviews your profile",
    icon: Heart,
    isHeart: true,
  },
  {
    num: "5",
    title: "Approved",
    desc: "Once verified, your profile goes live",
    icon: BadgeCheck,
  },
];

export default function TrustVerification({
  className = "pt-8 sm:pt-10 pb-5 sm:pb-6",
}: {
  className?: string;
}) {
  return (
    <section className={`bg-white relative overflow-hidden ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <Reveal>
            <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#64748B] mb-2 sm:mb-2.5">
              HOW WE VERIFY COFRIENDS
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#0F172A] leading-[1.15] tracking-tight">
              A Trusted Community <br className="hidden sm:inline" />
              <span className="text-[#D91A60]">Starts with Trust.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-slate-500 font-normal md:text-right max-w-sm sm:max-w-md leading-relaxed">
              We follow a structured verification process to ensure a safe and reliable community for everyone on CoFriend.
            </p>
          </Reveal>
        </div>

        {/* 5 Connected Verification Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-2">
          {STEPS.map((step, idx) => (
            <div key={step.title} className="flex flex-col lg:flex-row items-center flex-1 w-full gap-3 lg:gap-2">
              <Reveal delay={idx * 0.06} className="w-full h-full">
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 14px 28px -6px rgba(124,58,237,0.12)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 p-5 sm:p-6 shadow-[0_2px_14px_-4px_rgba(0,0,0,0.04)] flex flex-col items-center text-center h-full min-h-[165px] sm:min-h-[175px] justify-center"
                >
                  {/* Purple Icon Badge */}
                  <div className="w-12 h-12 rounded-2xl bg-[#F3E8FF] flex items-center justify-center text-[#7C3AED] mb-3.5 shadow-sm">
                    <step.icon
                      className={`w-6 h-6 ${step.isHeart ? "fill-current" : ""}`}
                      strokeWidth={2.2}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#0F172A] mb-1 leading-snug">
                    {step.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal max-w-[170px]">
                    {step.desc}
                  </p>
                </motion.div>
              </Reveal>

              {/* Connecting Arrow (between cards, hidden on last item) */}
              {idx < STEPS.length - 1 && (
                <div className="hidden lg:flex items-center justify-center text-[#7C3AED] px-1 shrink-0 select-none">
                  <ArrowRight size={20} strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
