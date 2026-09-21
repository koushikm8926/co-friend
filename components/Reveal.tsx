"use client";

import React from "react";
import { motion } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  chapter,
  eyebrow,
  title,
  sub,
  dark = false,
  center = false,
}: {
  chapter: string;
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      <Reveal>
        <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
          <span
            className={`font-accent text-xs font-extrabold tracking-[0.3em] ${
              dark ? "text-pink-400" : "text-purple-600"
            }`}
          >
            {chapter}
          </span>
          <span className={`h-px w-10 ${dark ? "bg-white/30" : "bg-purple-300"}`} />
          <span
            className={`font-accent text-xs font-bold uppercase tracking-[0.3em] ${
              dark ? "text-white/60" : "text-slate-500"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`font-display mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem] ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 text-lg leading-relaxed md:text-xl ${
              dark ? "text-white/70" : "text-slate-600"
            }`}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
