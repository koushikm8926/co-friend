"use client";

import {
  Film,
  Coffee,
  ShoppingBag,
  Plane,
  Ticket,
  Gamepad2,
  MapPin,
  HeartPulse,
  HandHeart,
  Dumbbell,
  Briefcase,
  ArrowUpRight,
  Wand2,
} from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";
import { SERVICES } from "@/data/content";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  movies: Film,
  coffee: Coffee,
  shopping: ShoppingBag,
  travel: Plane,
  events: Ticket,
  gaming: Gamepad2,
  tours: MapPin,
  medical: HeartPulse,
  elder: HandHeart,
  fitness: Dumbbell,
  networking: Briefcase,
};

const WIDE = new Set([0, 7, 10]);

export default function Services({
  onSelect,
}: {
  onSelect: (serviceTitle: string) => void;
}) {
  return (
    <section id="services" data-testid="popular-services-section" className="relative py-20 md:py-28">
      <div className="glow-blob absolute -right-40 top-40 h-96 w-96 rounded-full bg-violet-400/15" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            chapter="01"
            eyebrow="Popular Services"
            title={
              <>
                Whatever the plan, <span className="text-gradient">there&apos;s a Co-Friend for it.</span>
              </>
            }
            sub="Eleven categories of companionship and assistance — each Co-Friend verified, reviewed and ready to book by the hour."
          />
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-purple-100 bg-white px-5 py-4 shadow-sm">
              <p className="font-display text-3xl font-extrabold text-gradient">11</p>
              <p className="font-accent text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                Categories live
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.id] || Film;
            return (
              <Reveal key={s.id} delay={(i % 4) * 0.07} className={WIDE.has(i) ? "lg:col-span-2" : ""}>
                <button
                  data-testid={`service-card-${s.id}`}
                  onClick={() => onSelect(s.title)}
                  className="card-lift group relative block h-full w-full overflow-hidden rounded-3xl text-left shadow-[0_14px_40px_-16px_rgba(15,23,42,0.25)] cursor-pointer"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/25 to-transparent" />
                  <span className="font-accent absolute left-4 top-4 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                    {s.tag}
                  </span>
                  <span className="font-accent absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-[0.68rem] font-extrabold text-purple-700 shadow-lg">
                    From {s.price}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                    <div>
                      <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
                        <Icon size={19} />
                      </span>
                      <h3 className="font-display text-lg font-bold leading-tight text-white">
                        {s.title}
                      </h3>
                      <p className="mt-0.5 text-xs font-medium text-white/70">{s.blurb}</p>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 translate-y-2 place-items-center rounded-full bg-white text-purple-700 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}

          <Reveal delay={0.1} className="lg:col-span-2">
            <button
              data-testid="service-card-custom"
              onClick={() => onSelect("")}
              className="card-lift group relative flex h-full min-h-[14rem] w-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-violet-600 to-pink-500 p-6 text-left text-white shadow-[0_20px_50px_-16px_rgba(124,58,237,0.6)] cursor-pointer"
            >
              <div className="dots-pattern absolute inset-0 opacity-40" />
              <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-white/20 backdrop-blur">
                <Wand2 size={20} />
              </span>
              <div className="relative">
                <h3 className="font-display text-xl font-extrabold">Something else in mind?</h3>
                <p className="mt-1 text-sm text-white/80">
                  Tell us the plan — we&apos;ll match you with the right person.
                </p>
                <span className="font-accent mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-extrabold text-purple-700 transition-transform duration-300 group-hover:scale-105">
                  Request a match <ArrowUpRight size={14} />
                </span>
              </div>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
