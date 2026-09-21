"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const EXPERIENCES = [
  {
    title: "Movies",
    image: "/images/about/story-movies.jpg",
  },
  {
    title: "Coffee",
    image: "/images/about/story-coffee.jpg",
  },
  {
    title: "Shopping",
    image: "/images/about/story-shopping.jpg",
  },
  {
    title: "Travel",
    image: "/images/about/story-hiking.jpg",
  },
  {
    title: "Fitness",
    image: "/images/about/story-fitness.jpg",
  },
  {
    title: "Events",
    image: "/images/about/story-concert.jpg",
  },
  {
    title: "Study Buddy",
    image: "/images/about/exp-study.jpg",
  },
  {
    title: "Cooking",
    image: "/images/about/exp-cooking.jpg",
  },
];

export default function WorldOfExperiences() {
  return (
    <section className="pt-14 sm:pt-16 pb-6 sm:pb-8 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header row: Left Title, Right Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <Reveal>
            <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em] text-[#64748B] mb-2 sm:mb-3">
              A WORLD OF EXPERIENCES
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#0F172A] leading-[1.15] tracking-tight">
              So Many Ways to <br className="hidden sm:inline" />
              Spend Time, <span className="text-[#D91A60]">Together.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-slate-500 font-normal md:text-right max-w-sm sm:max-w-md leading-relaxed">
              From everyday plans to special occasions — there&apos;s always a reason to find a CoFriend.
            </p>
          </Reveal>
        </div>

        {/* 8 Experience Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-3.5">
          {EXPERIENCES.map((exp, idx) => (
            <Reveal key={exp.title} delay={idx * 0.05}>
              <Link href="/#cofriends">
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="group relative overflow-hidden rounded-2xl aspect-[1/1.12] sm:aspect-[4/5] bg-slate-900 shadow-md cursor-pointer border border-black/5"
                >
                  {/* Photo */}
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-110"
                    draggable={false}
                    loading="lazy"
                  />

                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Label */}
                  <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3 text-center z-10">
                    <span className="font-display font-bold text-white text-[13px] sm:text-[14px] leading-tight drop-shadow-sm select-none">
                      {exp.title}
                    </span>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
