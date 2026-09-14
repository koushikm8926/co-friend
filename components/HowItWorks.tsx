"use client";

import { ClipboardList, UserSearch, CalendarCheck, PartyPopper } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";
import { STEPS } from "@/data/content";

const ICONS = [ClipboardList, UserSearch, CalendarCheck, PartyPopper];

export default function HowItWorks() {
  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="relative py-20 md:py-28">
      <div className="glow-blob absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-400/15" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          center
          chapter="04"
          eyebrow="How Co-Friend Works"
          title={
            <>
              From &ldquo;I wish someone could join&rdquo; <span className="text-gradient">to booked in four steps.</span>
            </>
          }
        />

        <div className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            className="absolute left-0 right-0 top-10 hidden border-t-2 border-dashed border-purple-200 lg:block"
            aria-hidden
          />
          {STEPS.map((s, i) => {
            const Icon = ICONS[i] || ClipboardList;
            return (
              <Reveal key={s.step} delay={i * 0.12}>
                <div data-testid={`how-step-${s.step}`} className="group relative text-center lg:text-left">
                  <div className="relative mx-auto flex h-20 w-20 items-center justify-center lg:mx-0">
                    <span className="absolute inset-0 rounded-[1.6rem] bg-gradient-to-br from-purple-100 to-pink-100 transition-all duration-500 group-hover:from-purple-600 group-hover:to-pink-500" />
                    <Icon
                      size={30}
                      className="relative text-purple-700 transition-colors duration-500 group-hover:text-white"
                      strokeWidth={1.9}
                    />
                    <span className="font-display absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full bg-white text-xs font-extrabold text-pink-600 shadow-lg ring-1 ring-purple-100">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-display mt-6 text-xl font-extrabold text-slate-900">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
