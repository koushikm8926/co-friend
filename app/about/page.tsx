"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import OurValues from "@/components/OurValues";
import DualCTA from "@/components/DualCTA";
import ExperienceBanner from "@/components/ExperienceBanner";
import TrustVerification from "@/components/TrustVerification";
import WorldOfExperiences from "@/components/WorldOfExperiences";
import { ComingSoonModal } from "@/components/ComingSoon";
import { Users, Compass, Heart, ShieldCheck, Calendar, LayoutGrid, FileText, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const WHY_COFRIEND = [
  {
    icon: ShieldCheck,
    title: "Verified Profiles",
    desc: "Every CoFriend goes through a verification process.",
    bg: "bg-[#EDE9FE]",
    iconColor: "text-[#7C3AED]",
  },
  {
    icon: Calendar,
    title: "Flexible Bookings",
    desc: "Choose the time, date and service that works for you.",
    bg: "bg-[#FCE7F3]",
    iconColor: "text-[#FC0264]",
  },
  {
    icon: LayoutGrid,
    title: "Wide Range of Experiences",
    desc: "From coffee and movies to travel, fitness, study and more.",
    bg: "bg-[#EDE9FE]",
    iconColor: "text-[#7C3AED]",
  },
  {
    icon: FileText,
    title: "Transparent Information",
    desc: "Clear profiles, services and pricing upfront.",
    bg: "bg-[#FCE7F3]",
    iconColor: "text-[#FC0264]",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    desc: "Make informed decisions with genuine feedback.",
    bg: "bg-[#EDE9FE]",
    iconColor: "text-[#7C3AED]",
    fill: true,
  },
  {
    icon: Heart,
    title: "A Safer Community",
    desc: "Built with safety, respect and trust at the core.",
    bg: "bg-[#FCE7F3]",
    iconColor: "text-[#FC0264]",
    fill: true,
  },
];

export default function AboutPage() {
  const [comingSoonModal, setComingSoonModal] = useState<{
    open: boolean;
    title: string;
    feature: string;
  }>({
    open: false,
    title: "Coming Soon!",
    feature: "This feature",
  });

  const openComingSoon = useCallback((feature: string, title = "Coming Soon!") => {
    setComingSoonModal({
      open: true,
      title,
      feature,
    });
  }, []);

  const closeComingSoon = useCallback(() => {
    setComingSoonModal((prev) => ({ ...prev, open: false }));
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased overflow-x-hidden">

      {/* ── TOP HEADER (EXACTLY IDENTICAL ON EVERY SCREEN) ── */}
      {/* Top Blue Announcement Bar */}
      <TopBar />

      {/* Main Navigation */}
      <Navbar
        onOpenComingSoon={(feature) => openComingSoon(feature)}
      />

      {/* ── 1. HERO SECTION ─────────────────────────────────── */}
      <section className="relative w-full bg-white overflow-hidden">
        {/* Background image */}
        <motion.img
          src="/images/hero-about.jpg"
          alt="Friends at sunset"
          aria-hidden="true"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover object-right select-none pointer-events-none"
          draggable={false}
        />

        {/* Left white fade */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          style={{
            background: "linear-gradient(to right, #ffffff 0%, #ffffff 32%, rgba(255,255,255,0.85) 48%, rgba(255,255,255,0.28) 66%, transparent 82%)",
          }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] xl:min-h-[620px]">

          {/* LEFT: Copy */}
          <motion.div
            className="flex flex-col justify-center w-full lg:w-[54%] xl:w-[50%] px-7 sm:px-12 lg:px-14 xl:px-20 py-12 lg:py-16"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow */}
            <motion.p variants={fadeUp} className="text-[11px] sm:text-[13px] font-bold tracking-[0.24em] uppercase text-[#FC0264] mb-4 flex items-center gap-2">
              <span className="block h-px w-6 bg-[#FC0264]" />
              ABOUT COFRIEND
            </motion.p>

            {/* Headline */}
            <motion.div variants={fadeUp} className="mb-4 sm:mb-5">
              <span className="block font-display font-extrabold leading-[1.05] tracking-tight text-[2.4rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[3.2rem] xl:text-[4rem] text-[#0F172A]">
                Real Connections
              </span>
              <span className="block font-display font-extrabold leading-[1.05] tracking-tight text-[2.4rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[3.2rem] xl:text-[4rem]">
                for{" "}
                <span className="text-pink-gradient">
                  Real-Life Moments.
                </span>
              </span>
            </motion.div>

            {/* Sub */}
            <motion.p variants={fadeUp} className="text-base sm:text-[17px] font-semibold text-slate-800 mb-2">
              Life is always better when shared.
            </motion.p>

            {/* Body */}
            <motion.p variants={fadeUp} className="text-[14px] sm:text-[15px] text-slate-500 leading-relaxed mb-6 sm:mb-7 max-w-[460px]">
              CoFriend is a social and lifestyle companionship marketplace
              that helps you find the right company for the experiences
              you love — coffee, movies, shopping, travel, fitness, events,
              study sessions and more.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-6 sm:mb-7">
              <button
                onClick={() => openComingSoon("Find a CoFriend")}
              >
                <motion.span
                  whileHover={{ scale: 1.05, boxShadow: "0 12px 36px -6px rgba(252,2,100,0.5)" }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-[14px] sm:text-[15px] font-bold text-white cursor-pointer whitespace-nowrap"
                  style={{ background: "linear-gradient(92deg,#8B5CF6 0%,#FC0264 100%)", boxShadow: "0 8px 28px -6px rgba(252,2,100,0.4)" }}
                >
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" /><path d="M15 15l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  Find a CoFriend &nbsp;→
                </motion.span>
              </button>
              <button
                onClick={() => openComingSoon("Partner Registration & Profile Creation")}
              >
                <motion.span
                  whileHover={{ scale: 1.05, backgroundColor: "#7C3AED", color: "#fff" }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-[14px] sm:text-[15px] font-bold border-2 border-[#7C3AED] text-[#7C3AED] bg-white transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.8" /><path d="M4 17c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                  Become a CoFriend &nbsp;→
                </motion.span>
              </button>
            </motion.div>

            {/* Tagline */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 text-[13px] sm:text-[14px] text-slate-600 font-medium">
              <span>For <strong className="text-slate-900 font-bold">Better Moments</strong></span>
              <span className="text-[#FC0264] font-bold text-base">+</span>
              <span>For a <strong className="text-slate-900 font-bold">Brighter You</strong></span>
            </motion.div>
          </motion.div>

          {/* RIGHT: spacer + calligraphy */}
          <div className="hidden lg:flex flex-1 relative" aria-hidden="true">
            <motion.div
              className="absolute top-8 right-8 text-right select-none"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <p className="font-script text-2xl xl:text-3xl font-bold text-slate-800 leading-snug"
                style={{ textShadow: "0 2px 12px rgba(255,255,255,0.9)" }}>
                Different <br />People <br />Brighter <br />
                <span className="text-[#FC0264]">Days ♥</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. OUR STORY SECTION (EXACT DESIGN MATCH) ──────── */}
      <section className="py-10 sm:py-14 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* LEFT: Constellation of 6 floating cards with connecting pink threads */}
            <div className="lg:col-span-7 relative flex items-center justify-center py-4 w-full">
              <div className="w-full max-w-[620px] relative">
                <div className="relative w-full aspect-[600/430] min-h-[340px] sm:min-h-[420px] md:min-h-[440px]">
                  
                  {/* Pink SVG connecting lines weaving between cards */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
                    viewBox="0 0 600 430"
                    fill="none"
                  >
                    {/* Left loop around Coffee to Hiking */}
                    <path
                      d="M 60 40 C -15 90, -18 210, 50 275"
                      stroke="#EC4899"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Coffee to Movies */}
                    <path
                      d="M 175 88 C 195 82, 215 85, 235 90"
                      stroke="#EC4899"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Arch from Movies to Shopping */}
                    <path
                      d="M 330 25 C 375 12, 415 30, 435 68"
                      stroke="#EC4899"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Right loop behind Shopping */}
                    <path
                      d="M 520 145 C 565 175, 560 250, 530 288"
                      stroke="#EC4899"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Movies down into Fitness */}
                    <path
                      d="M 285 240 C 290 268, 295 285, 300 300"
                      stroke="#EC4899"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Shopping down into Concert */}
                    <path
                      d="M 465 295 C 470 315, 475 330, 480 345"
                      stroke="#EC4899"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Hiking to Fitness */}
                    <path
                      d="M 215 275 C 232 280, 248 282, 265 285"
                      stroke="#EC4899"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Fitness to Concert */}
                    <path
                      d="M 370 328 C 390 333, 405 330, 420 322"
                      stroke="#EC4899"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Card 1: Coffee (Top Left) */}
                  <motion.div
                    whileHover={{ scale: 1.08, zIndex: 30 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="absolute rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-[3.5px] border-white bg-white cursor-pointer"
                    style={{
                      left: "0%",
                      top: "4%",
                      width: "33%",
                      aspectRatio: "4 / 3",
                      transform: "rotate(-6deg)",
                      zIndex: 1,
                    }}
                  >
                    <img
                      src="/images/about/story-coffee.jpg"
                      alt="Coffee meetup"
                      className="w-full h-full object-cover select-none pointer-events-none"
                      draggable={false}
                      loading="eager"
                    />
                  </motion.div>

                  {/* Card 2: Movies - Popcorn (Top Center, tall) */}
                  <motion.div
                    whileHover={{ scale: 1.08, zIndex: 30 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="absolute rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-[3.5px] border-white bg-white cursor-pointer"
                    style={{
                      left: "30%",
                      top: "0%",
                      width: "32%",
                      aspectRatio: "3 / 4",
                      transform: "rotate(-1deg)",
                      zIndex: 10,
                    }}
                  >
                    <img
                      src="/images/about/story-movies.jpg"
                      alt="Cinema popcorn experience"
                      className="w-full h-full object-cover select-none pointer-events-none"
                      draggable={false}
                      loading="eager"
                    />
                  </motion.div>

                  {/* Card 3: Shopping (Top Right, portrait) */}
                  <motion.div
                    whileHover={{ scale: 1.08, zIndex: 30 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="absolute rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-[3.5px] border-white bg-white cursor-pointer"
                    style={{
                      left: "60%",
                      top: "13%",
                      width: "32%",
                      aspectRatio: "3 / 4",
                      transform: "rotate(4deg)",
                      zIndex: 2,
                    }}
                  >
                    <img
                      src="/images/about/story-shopping.jpg"
                      alt="Shopping day with friend"
                      className="w-full h-full object-cover select-none pointer-events-none"
                      draggable={false}
                      loading="eager"
                    />
                  </motion.div>

                  {/* Card 4: Hiking (Bottom Left, landscape) */}
                  <motion.div
                    whileHover={{ scale: 1.08, zIndex: 30 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="absolute rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-[3.5px] border-white bg-white cursor-pointer"
                    style={{
                      left: "5%",
                      top: "45%",
                      width: "35%",
                      aspectRatio: "4 / 3",
                      transform: "rotate(1deg)",
                      zIndex: 3,
                    }}
                  >
                    <img
                      src="/images/about/story-hiking.jpg"
                      alt="Mountain hiking travel"
                      className="w-full h-full object-cover select-none pointer-events-none"
                      draggable={false}
                      loading="eager"
                    />
                  </motion.div>

                  {/* Card 5: Fitness (Bottom Center, portrait) */}
                  <motion.div
                    whileHover={{ scale: 1.08, zIndex: 30 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="absolute rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-[3.5px] border-white bg-white cursor-pointer"
                    style={{
                      left: "37%",
                      top: "51%",
                      width: "28%",
                      aspectRatio: "3 / 4",
                      transform: "rotate(-2deg)",
                      zIndex: 10,
                    }}
                  >
                    <img
                      src="/images/about/story-fitness.jpg"
                      alt="Gym workout companion"
                      className="w-full h-full object-cover select-none pointer-events-none"
                      draggable={false}
                      loading="eager"
                    />
                  </motion.div>

                  {/* Card 6: Concert (Bottom Right, landscape) */}
                  <motion.div
                    whileHover={{ scale: 1.08, zIndex: 30 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="absolute rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-[3.5px] border-white bg-white cursor-pointer"
                    style={{
                      left: "63%",
                      top: "50%",
                      width: "34%",
                      aspectRatio: "4 / 3",
                      transform: "rotate(-4deg)",
                      zIndex: 4,
                    }}
                  >
                    <img
                      src="/images/about/story-concert.jpg"
                      alt="Music concert festival"
                      className="w-full h-full object-cover select-none pointer-events-none"
                      draggable={false}
                      loading="eager"
                    />
                  </motion.div>

                </div>
              </div>
            </div>

            {/* RIGHT: Text content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <Reveal>
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#64748B] mb-3">
                  OUR STORY
                </p>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] text-[#0F172A] leading-[1.14] tracking-tight mb-6 sm:mb-7">
                  A Simple Idea <br />
                  For <span className="text-[#FC0264]">Happier Days.</span>
                </h2>

                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-[1.75] mb-5 font-normal">
                  CoFriend started with a simple thought — some moments in life are just better when shared.
                </p>

                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-[1.75] mb-5 font-normal">
                  Whether it&apos;s a movie, a coffee, a weekend getaway or learning something new, we believe everyone deserves access to safe, reliable and like-minded companionship for the experiences they enjoy.
                </p>

                <p className="text-[15px] sm:text-[16px] text-slate-600 leading-[1.75] font-normal">
                  Today, CoFriend is growing into a trusted community that brings people together — one experience at a time.
                </p>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. OUR PURPOSE SECTION (EXACT DESIGN MATCH) ────── */}
      <section className="py-10 sm:py-14 relative overflow-hidden bg-gradient-to-r from-[#FFF5F8] via-[#FAF5FF] to-[#FFF5F8] border-y border-pink-100/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* LEFT: Heading & Description */}
            <div className="lg:col-span-6">
              <Reveal>
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#64748B] mb-3">
                  OUR PURPOSE
                </p>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#0F172A] leading-[1.15] tracking-tight mb-5">
                  Connect. <span className="text-[#FC0264]">Experience. Belong.</span>
                </h2>
                <p className="text-base sm:text-[17px] text-slate-600 leading-[1.7] max-w-xl">
                  We exist to make it easier for people to find genuine companionship for everyday experiences. CoFriend is not just about booking a person, it&apos;s about creating opportunities for real conversations, shared interests and memorable moments.
                </p>
              </Reveal>
            </div>

            {/* RIGHT: 3 Pillars (Connect, Experience, Belong) with circular badges */}
            <div className="lg:col-span-6">
              <Reveal delay={0.15}>
                <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-around gap-8 sm:gap-4 bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-sm border border-pink-100/80">

                  {/* Item 1: Connect */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FCE7F3] flex items-center justify-center text-[#FC0264] shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 sm:w-9 sm:h-9" strokeWidth={2.2} />
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#0F172A] mt-4 mb-1">
                      Connect
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-[130px] leading-snug">
                      with like-minded people
                    </p>
                  </motion.div>

                  {/* Vertical Divider */}
                  <div className="hidden sm:block w-px h-24 bg-pink-200/60" />

                  {/* Item 2: Experience */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#EDE9FE] flex items-center justify-center text-[#7C3AED] shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Compass className="w-8 h-8 sm:w-9 sm:h-9" strokeWidth={2.2} />
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#0F172A] mt-4 mb-1">
                      Experience
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-[130px] leading-snug">
                      a world of new possibilities
                    </p>
                  </motion.div>

                  {/* Vertical Divider */}
                  <div className="hidden sm:block w-px h-24 bg-pink-200/60" />

                  {/* Item 3: Belong */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFE4E6] flex items-center justify-center text-[#E11D48] shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-8 h-8 sm:w-9 sm:h-9 fill-current" />
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#0F172A] mt-4 mb-1">
                      Belong
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-[140px] leading-snug">
                      to a growing, positive community
                    </p>
                  </motion.div>

                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. HOW WE VERIFY COFRIENDS (TRUST VERIFICATION FLOW) ── */}
      <TrustVerification />

      {/* ── 5. A WORLD OF EXPERIENCES (8 CATEGORY CARDS) ───── */}
      <WorldOfExperiences />

      {/* ── 5. WHY COFRIEND? (EXACT DESIGN MATCH) ──────────── */}
      <section className="pt-4 sm:pt-6 pb-6 sm:pb-8 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-6 sm:mb-8">
            <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#64748B] mb-2 sm:mb-2.5">
              WHY COFRIEND?
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#0F172A] leading-[1.15] tracking-tight">
              Designed for Real People.{" "}
              <span className="text-[#FC0264]">Real Experiences.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {WHY_COFRIEND.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 12px 30px -8px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 sm:gap-5 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 p-5 sm:p-6 shadow-[0_2px_14px_-4px_rgba(0,0,0,0.04)] h-full"
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${item.bg} flex items-center justify-center ${item.iconColor} shrink-0`}>
                    <item.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${item.fill ? "fill-current" : ""}`} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#0F172A] mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS (EXACT DESIGN MATCH) ──────────── */}
      <HowItWorks className="pt-4 sm:pt-6 pb-6 sm:pb-8 border-t-0" />

      {/* ── 6. OUR VALUES (PEOPLE FIRST. ALWAYS.) ─────────── */}
      <OurValues />

      {/* ── 7. DUAL CTA CARDS (LOOKING FOR COMPANY / BECOME A COFRIEND) ── */}
      <DualCTA
        onFind={() => openComingSoon("Find a CoFriend")}
        onBecome={() => openComingSoon("CoFriend Partner Registration")}
      />

      {/* ── 8. EXPERIENCE BANNER (EVERY GREAT EXPERIENCE STARTS WITH...) ── */}
      <ExperienceBanner
        onFind={() => openComingSoon("Find a CoFriend")}
      />

      {/* Footer (Same on every screen) */}
      <Footer
        onOpenComingSoon={(feature) => openComingSoon(feature)}
      />

      {/* Coming Soon Modal */}
      <ComingSoonModal
        open={comingSoonModal.open}
        onClose={closeComingSoon}
        title={comingSoonModal.title}
        feature={comingSoonModal.feature}
      />
    </div>
  );
}
