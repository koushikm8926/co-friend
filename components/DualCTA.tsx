"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export default function DualCTA({
  onFind,
  onBecome,
}: {
  onFind?: () => void;
  onBecome?: () => void;
}) {
  return (
    <section className="pt-4 sm:pt-6 pb-6 sm:pb-8 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* ── CARD 1: LOOKING FOR COMPANY? ────────────────────── */}
          <Reveal>
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 22px 42px -12px rgba(225,29,72,0.18)" }}
              transition={{ duration: 0.25 }}
              className="relative overflow-hidden rounded-[26px] sm:rounded-[32px] border border-pink-100 bg-gradient-to-r from-[#FFF5F8] via-[#FFEBF2] to-[#FFDEEB] p-6 sm:p-8 flex items-center justify-between min-h-[220px] sm:min-h-[240px] shadow-[0_4px_20px_-4px_rgba(236,72,153,0.12)] h-full"
            >
              {/* Copy & CTA */}
              <div className="flex-1 z-10 pr-2 sm:pr-4 flex flex-col items-start">
                <h3 className="font-display font-extrabold text-2xl sm:text-[27px] text-[#FF136A] tracking-tight mb-2 sm:mb-2.5">
                  Looking for Company?
                </h3>
                <p className="text-xs sm:text-[14px] text-slate-600 leading-relaxed mb-5 max-w-[290px] font-normal">
                  Find a CoFriend for your next movie, coffee, travel, workout or any other experience.
                </p>

                {onFind ? (
                  <motion.button
                    onClick={onFind}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-[14px] font-bold text-white shadow-md shadow-pink-500/30 cursor-pointer whitespace-nowrap"
                    style={{ background: "linear-gradient(92deg, #7C3AED 0%, #D91A60 100%)" }}
                  >
                    Find a CoFriend <ArrowRight size={15} />
                  </motion.button>
                ) : (
                  <Link href="/#cofriends">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-[14px] font-bold text-white shadow-md shadow-pink-500/30 cursor-pointer whitespace-nowrap"
                      style={{ background: "linear-gradient(92deg, #7C3AED 0%, #D91A60 100%)" }}
                    >
                      Find a CoFriend <ArrowRight size={15} />
                    </motion.span>
                  </Link>
                )}
              </div>

              {/* 3D Character Illustration flush to edge */}
              <div className="relative -mr-6 sm:-mr-8 -my-6 sm:-my-8 w-[140px] sm:w-[195px] md:w-[215px] self-stretch shrink-0 overflow-hidden flex items-end justify-center">
                <div className="absolute inset-y-0 left-0 w-8 pointer-events-none bg-gradient-to-r from-[#FFEBF2] to-transparent z-10" />
                <img
                  src="/images/about/cta-girl-company.jpg"
                  alt="Looking for Company"
                  className="w-full h-full object-cover object-top select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            </motion.div>
          </Reveal>

          {/* ── CARD 2: WANT TO BECOME A COFRIEND? ──────────────── */}
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 22px 42px -12px rgba(124,58,237,0.18)" }}
              transition={{ duration: 0.25 }}
              className="relative overflow-hidden rounded-[26px] sm:rounded-[32px] border border-purple-100 bg-gradient-to-r from-[#FAF7FF] via-[#F3EEFF] to-[#E9E1FF] p-6 sm:p-8 flex items-center justify-between min-h-[220px] sm:min-h-[240px] shadow-[0_4px_20px_-4px_rgba(124,58,237,0.12)] h-full"
            >
              {/* Copy & CTA */}
              <div className="flex-1 z-10 pr-2 sm:pr-4 flex flex-col items-start">
                <h3 className="font-display font-extrabold text-2xl sm:text-[27px] text-[#5B21B6] tracking-tight mb-2 sm:mb-2.5">
                  Want to Become a CoFriend?
                </h3>
                <p className="text-xs sm:text-[14px] text-slate-600 leading-relaxed mb-5 max-w-[290px] font-normal">
                  Share your interests, meet new people and earn through your time.
                </p>

                {onBecome ? (
                  <motion.button
                    onClick={onBecome}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-[14px] font-bold text-white shadow-md shadow-purple-500/30 cursor-pointer whitespace-nowrap"
                    style={{ background: "linear-gradient(92deg, #5B21B6 0%, #7C3AED 100%)" }}
                  >
                    Become a CoFriend <ArrowRight size={15} />
                  </motion.button>
                ) : (
                  <Link href="/">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-[14px] font-bold text-white shadow-md shadow-purple-500/30 cursor-pointer whitespace-nowrap"
                      style={{ background: "linear-gradient(92deg, #5B21B6 0%, #7C3AED 100%)" }}
                    >
                      Become a CoFriend <ArrowRight size={15} />
                    </motion.span>
                  </Link>
                )}
              </div>

              {/* 3D Character Illustration flush to edge */}
              <div className="relative -mr-6 sm:-mr-8 -my-6 sm:-my-8 w-[140px] sm:w-[195px] md:w-[215px] self-stretch shrink-0 overflow-hidden flex items-end justify-center">
                <div className="absolute inset-y-0 left-0 w-8 pointer-events-none bg-gradient-to-r from-[#F3EEFF] to-transparent z-10" />
                <img
                  src="/images/about/cta-boy-become.jpg"
                  alt="Become a CoFriend"
                  className="w-full h-full object-cover object-top select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            </motion.div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

