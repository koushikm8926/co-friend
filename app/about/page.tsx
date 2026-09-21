"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import { ComingSoonModal } from "@/components/ComingSoon";
import { Users, Compass, Heart, ShieldCheck, Star, Lock, IndianRupee, LayoutGrid, Headphones, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const VALUES = [
  { icon: ShieldCheck, title: "Trust First",       desc: "Every CoFriend is government-ID verified, photo checked and background screened before going live." },
  { icon: Star,        title: "Real Connections",  desc: "We match you with people who genuinely share your interests — not algorithms chasing clicks." },
  { icon: Lock,        title: "Safe Meetups",      desc: "All sessions happen in public venues. Safety check-ins and 24/7 support keep every experience secure." },
  { icon: IndianRupee, title: "Fair Earnings",     desc: "CoFriends earn honest, flexible income doing things they love, on schedules they control." },
  { icon: LayoutGrid,  title: "Every Mood",        desc: "Movies, coffee, travel, fitness, events, study sessions — we cover every lifestyle need." },
  { icon: Headphones,  title: "Always There",      desc: "Round-the-clock support, dispute resolution and a community team ready whenever you need them." },
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

        <div className="relative z-10 flex flex-col lg:flex-row min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] xl:min-h-[660px]">

          {/* LEFT: Copy */}
          <motion.div
            className="flex flex-col justify-center w-full lg:w-[54%] xl:w-[50%] px-7 sm:px-12 lg:px-14 xl:px-20 py-14 lg:py-20"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow */}
            <motion.p variants={fadeUp} className="text-[12px] sm:text-[13px] font-bold tracking-[0.28em] uppercase text-[#D91A60] mb-5 flex items-center gap-2">
              <span className="block h-px w-6 bg-[#D91A60]" />
              ABOUT COFRIEND
            </motion.p>

            {/* Headline */}
            <motion.div variants={fadeUp} className="mb-5">
              <span className="block font-display font-extrabold leading-[1.04] tracking-tight text-[2.6rem] sm:text-[3.4rem] lg:text-[3.2rem] xl:text-[4.2rem] text-[#0F172A]">
                Real Connections
              </span>
              <span className="block font-display font-extrabold leading-[1.04] tracking-tight text-[2.6rem] sm:text-[3.4rem] lg:text-[3.2rem] xl:text-[4.2rem]">
                for{" "}
                <span style={{ background: "linear-gradient(90deg,#D91A60 0%,#f472b6 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  Real-Life Moments.
                </span>
              </span>
            </motion.div>

            {/* Sub */}
            <motion.p variants={fadeUp} className="text-base sm:text-lg font-semibold text-slate-800 mb-3">
              Life is always better when shared.
            </motion.p>

            {/* Body */}
            <motion.p variants={fadeUp} className="text-[15px] sm:text-[16px] text-slate-500 leading-relaxed mb-8 max-w-[460px]">
              CoFriend is a social and lifestyle companionship marketplace
              that helps you find the right company for the experiences
              you love — coffee, movies, shopping, travel, fitness, events,
              study sessions and more.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
              <Link href="/#cofriends">
                <motion.span
                  whileHover={{ scale: 1.05, boxShadow: "0 12px 36px -6px rgba(217,26,96,0.5)" }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-[15px] sm:text-[16px] font-bold text-white cursor-pointer whitespace-nowrap"
                  style={{ background: "linear-gradient(92deg,#8B5CF6 0%,#D91A60 100%)", boxShadow: "0 8px 28px -6px rgba(217,26,96,0.4)" }}
                >
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" /><path d="M15 15l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  Find a CoFriend &nbsp;→
                </motion.span>
              </Link>
              <button
                onClick={() => openComingSoon("Partner Registration & Profile Creation")}
              >
                <motion.span
                  whileHover={{ scale: 1.05, backgroundColor: "#7C3AED", color: "#fff" }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-[15px] sm:text-[16px] font-bold border-2 border-[#7C3AED] text-[#7C3AED] bg-white transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.8" /><path d="M4 17c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                  Become a CoFriend &nbsp;→
                </motion.span>
              </button>
            </motion.div>

            {/* Tagline */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 text-sm sm:text-base text-slate-600 font-medium">
              <span>For <strong className="text-slate-900 font-bold">Better Moments</strong></span>
              <span className="text-[#D91A60] font-bold text-lg">+</span>
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
                <span className="text-[#D91A60]">Days ♥</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. OUR STORY SECTION (EXACT DESIGN MATCH) ──────── */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* LEFT: Constellation of 6 floating cards with connecting pink threads */}
            <div className="lg:col-span-7 relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center">
              
              {/* Pink SVG connecting lines behind cards */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
                viewBox="0 0 650 500"
                fill="none"
              >
                {/* Coffee to Movies */}
                <path
                  d="M130 110 C 190 70, 240 85, 290 95"
                  stroke="#EC4899"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  opacity="0.85"
                />
                {/* Movies to Shopping */}
                <path
                  d="M340 80 C 400 65, 460 75, 490 120"
                  stroke="#EC4899"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  opacity="0.85"
                />
                {/* Coffee down to Hiking */}
                <path
                  d="M95 190 C 70 250, 85 310, 115 360"
                  stroke="#EC4899"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  opacity="0.85"
                />
                {/* Movies down to Gym */}
                <path
                  d="M310 180 C 315 220, 310 260, 305 300"
                  stroke="#EC4899"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  opacity="0.85"
                />
                {/* Shopping down to Concert */}
                <path
                  d="M480 240 C 475 285, 460 320, 440 350"
                  stroke="#EC4899"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  opacity="0.85"
                />
                {/* Hiking to Gym */}
                <path
                  d="M210 390 C 240 405, 260 395, 280 380"
                  stroke="#EC4899"
                  strokeWidth="2"
                  strokeDasharray="5 3"
                  opacity="0.6"
                />
                {/* Gym to Concert */}
                <path
                  d="M375 370 C 400 375, 420 370, 440 365"
                  stroke="#EC4899"
                  strokeWidth="2"
                  strokeDasharray="5 3"
                  opacity="0.6"
                />
              </svg>

              {/* Grid of the 6 photo cards matching screenshot layout */}
              <div className="relative z-10 w-full max-w-[620px] grid grid-cols-3 gap-3 sm:gap-5">

                {/* Card 1: Coffee (Top Left) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, rotate: 0, zIndex: 30 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group cursor-pointer"
                  style={{ transform: "rotate(-4deg)" }}
                >
                  <img
                    src="/images/about/story-coffee.jpg"
                    alt="Coffee meetup"
                    className="w-full h-28 sm:h-36 lg:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* Card 2: Movies (Top Center - slightly raised) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: -10 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, y: -16, rotate: 0, zIndex: 30 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group cursor-pointer"
                  style={{ transform: "rotate(2deg)" }}
                >
                  <img
                    src="/images/about/story-movies.jpg"
                    alt="Cinema popcorn experience"
                    className="w-full h-32 sm:h-42 lg:h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* Card 3: Shopping (Top Right) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, rotate: 0, zIndex: 30 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group cursor-pointer"
                  style={{ transform: "rotate(3deg)" }}
                >
                  <img
                    src="/images/about/story-shopping.jpg"
                    alt="Shopping day with friend"
                    className="w-full h-28 sm:h-36 lg:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* Card 4: Hiking (Bottom Left) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, rotate: 0, zIndex: 30 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group cursor-pointer"
                  style={{ transform: "rotate(2deg)" }}
                >
                  <img
                    src="/images/about/story-hiking.jpg"
                    alt="Mountain hiking travel"
                    className="w-full h-32 sm:h-42 lg:h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* Card 5: Fitness (Bottom Center) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, rotate: 0, zIndex: 30 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group cursor-pointer"
                  style={{ transform: "rotate(-1deg)" }}
                >
                  <img
                    src="/images/about/story-fitness.jpg"
                    alt="Gym workout companion"
                    className="w-full h-28 sm:h-38 lg:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* Card 6: Concert (Bottom Right - slight tilt perspective) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08, rotate: 0, zIndex: 30 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white group cursor-pointer"
                  style={{ transform: "rotate(-3deg)" }}
                >
                  <img
                    src="/images/about/story-concert.jpg"
                    alt="Music concert festival"
                    className="w-full h-28 sm:h-36 lg:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

              </div>
            </div>

            {/* RIGHT: Text content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <Reveal>
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#64748B] mb-3">
                  OUR STORY
                </p>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-[#0F172A] leading-[1.12] tracking-tight mb-7">
                  A Simple Idea <br />
                  For <span className="text-[#D91A60]">Happier Days.</span>
                </h2>

                <p className="text-[16px] sm:text-[17px] text-slate-600 leading-[1.7] mb-5 font-normal">
                  CoFriend started with a simple thought — some moments in life are just better when shared.
                </p>

                <p className="text-[16px] sm:text-[17px] text-slate-600 leading-[1.7] mb-5 font-normal">
                  Whether it&apos;s a movie, a coffee, a weekend getaway or learning something new, we believe everyone deserves access to safe, reliable and like-minded companionship for the experiences they enjoy.
                </p>

                <p className="text-[16px] sm:text-[17px] text-slate-600 leading-[1.7] font-normal">
                  Today, CoFriend is growing into a trusted community that brings people together — one experience at a time.
                </p>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. OUR PURPOSE SECTION (EXACT DESIGN MATCH) ────── */}
      <section className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-r from-[#FFF5F8] via-[#FAF5FF] to-[#FFF5F8] border-y border-pink-100/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* LEFT: Heading & Description */}
            <div className="lg:col-span-6">
              <Reveal>
                <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#64748B] mb-3">
                  OUR PURPOSE
                </p>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#0F172A] leading-[1.15] tracking-tight mb-5">
                  Connect. <span className="text-[#D91A60]">Experience. Belong.</span>
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
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FCE7F3] flex items-center justify-center text-[#D91A60] shadow-sm group-hover:scale-110 transition-transform duration-300">
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

      {/* ── 4. OUR VALUES ──────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-purple-600 mb-3">WHAT WE STAND FOR</p>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Built on Values That <span className="text-[#D91A60]">Matter</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 50px -12px rgba(124,58,237,0.15)" }}
                  transition={{ duration: 0.25 }}
                  className="group relative rounded-3xl border border-purple-100 bg-white p-8 shadow-sm overflow-hidden"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 opacity-60 transition-transform duration-500 group-hover:scale-150" />
                  <span className="relative grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg mb-6 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                    style={{ height: 52, width: 52 }}>
                    <v.icon size={22} strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-slate-900 mb-3 relative">{v.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed relative">{v.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA BANNER ──────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-[#E11D67] via-[#8B24D7] to-[#EC1D75] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-5">
              Ready to Find Your CoFriend?
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
              Join thousands of people across India who are making every moment more meaningful with CoFriend.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#cofriends">
                <motion.span
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 text-base font-bold text-[#7C3AED] hover:text-[#D91A60] shadow-xl cursor-pointer transition-colors"
                >
                  Get Started <ArrowRight size={18} />
                </motion.span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6. FOOTER BAR ──────────────────────────────────── */}
      <div className="bg-[#080E1E] text-slate-400 text-sm py-6 text-center border-t border-slate-800">
        <span>© 2024 CoFriend. All rights reserved.</span>
        <span className="mx-3 text-slate-700">·</span>
        <Link href="/" className="hover:text-[#D91A60] transition-colors">Back to Home</Link>
      </div>

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
