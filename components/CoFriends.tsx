"use client";

import { useState } from "react";
import { Heart, MapPin, Star, BadgeCheck, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHead } from "./Reveal";
import { COFRIENDS, type CoFriendItem } from "@/data/content";

const FILTERS = [
  "All",
  "Coffee & Conversations",
  "Travel Companion",
  "Fitness Buddy",
  "Elder Assistance",
];

export default function CoFriends({
  onView,
}: {
  onView: (profile: CoFriendItem) => void;
}) {
  const [filter, setFilter] = useState("All");
  const [favs, setFavs] = useState<Set<string>>(new Set());

  const list =
    filter === "All"
      ? COFRIENDS
      : COFRIENDS.filter((p) => p.services.includes(filter));

  const toggleFav = (e: React.MouseEvent, id: string, name: string) => {
    e.stopPropagation();
    setFavs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        toast.success(`${name} added to your favourites`);
      }
      return next;
    });
  };

  return (
    <section id="explore" data-testid="featured-cofriends-section" className="relative py-20 md:py-28">
      <div className="glow-blob absolute -left-40 top-1/3 h-[26rem] w-[26rem] rounded-full bg-pink-400/15" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          chapter="02"
          eyebrow="Explore People"
          title={
            <>
              Meet some of India&apos;s <span className="text-gradient">top-rated Co-Friends.</span>
            </>
          }
          sub="Real people, real reviews. Every profile is government-ID verified and rated only by customers who completed a booking."
        />

        <Reveal delay={0.15} className="mt-10">
          <div className="flex flex-wrap gap-2.5" data-testid="cofriend-filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                data-testid={`filter-${f === "All" ? "all" : f.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                onClick={() => setFilter(f)}
                className={`font-accent rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 cursor-pointer ${
                  filter === f
                    ? "btn-brand text-white"
                    : "border border-purple-200 bg-white text-slate-600 hover:border-purple-400 hover:text-purple-700"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.09}>
              <article
                data-testid={`profile-card-${p.id}`}
                className="card-lift group overflow-hidden rounded-[1.75rem] border border-purple-100 bg-white shadow-[0_16px_45px_-20px_rgba(124,58,237,0.25)] hover:border-purple-300 hover:shadow-[0_30px_60px_-20px_rgba(124,58,237,0.4)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name}, verified Co-Friend in ${p.city}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <button
                    data-testid={`favourite-btn-${p.id}`}
                    onClick={(e) => toggleFav(e, p.id, p.name)}
                    aria-label={`Favourite ${p.name}`}
                    className={`absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full backdrop-blur-md transition-all duration-300 active:scale-90 cursor-pointer ${
                      favs.has(p.id)
                        ? "bg-pink-500 text-white shadow-lg shadow-pink-500/40"
                        : "bg-white/80 text-slate-700 hover:bg-white"
                    }`}
                  >
                    <Heart size={17} className={favs.has(p.id) ? "fill-white" : ""} />
                  </button>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    {p.verified && (
                      <span className="font-accent flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-wider text-emerald-600 backdrop-blur">
                        <BadgeCheck size={13} /> Verified
                      </span>
                    )}
                    <span className="font-accent flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[0.65rem] font-extrabold text-slate-700 backdrop-blur">
                      <span className="dot-live h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {p.availability}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-extrabold text-slate-900">
                        {p.name}
                      </h3>
                      <p className="mt-0.5 flex items-center gap-1 text-xs font-semibold text-slate-500">
                        <MapPin size={12} className="text-pink-500" /> {p.city}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 px-3 py-2 text-center ring-1 ring-amber-200/70">
                      <p className="flex items-center justify-center gap-1 text-base font-extrabold text-slate-900">
                        <Star size={15} className="fill-amber-400 text-amber-400" />
                        {p.rating.toFixed(1)}
                      </p>
                      <p className="text-[0.62rem] font-bold text-slate-500">
                        {p.reviews} reviews
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-[0.83rem] leading-relaxed text-slate-600">
                    {p.tagline}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.services.map((s) => (
                      <span
                        key={s}
                        className="font-accent rounded-full bg-purple-50 px-3 py-1 text-[0.65rem] font-bold text-purple-700 ring-1 ring-purple-100"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-purple-50 pt-4">
                    <p className="text-sm text-slate-500">
                      <span className="font-display text-xl font-extrabold text-slate-900">
                        ₹{p.price}
                      </span>
                      /hr onwards
                    </p>
                    <button
                      data-testid={`view-profile-btn-${p.id}`}
                      onClick={() => onView(p)}
                      className="btn-brand font-accent flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-bold text-white cursor-pointer"
                    >
                      View Profile <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
