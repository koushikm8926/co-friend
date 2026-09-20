"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  comment: string;
  name: string;
  city: string;
  avatar: string;
}

const REVIEWS: Testimonial[] = [
  {
    id: "1",
    comment:
      "Had an amazing movie experience! My CoFriend was friendly, punctual and made the outing so much more enjoyable. Highly recommended!",
    name: "Priya S.",
    city: "Hyderabad",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "2",
    comment:
      "Booked a coffee companion and ended up having such a meaningful conversation. The platform is super easy to use and very safe.",
    name: "Vikram R.",
    city: "Bengaluru",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "3",
    comment:
      "As someone new to the city, CoFriend helped me explore and meet like-minded people. Great experience and very well managed!",
    name: "Sneha M.",
    city: "Pune",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? REVIEWS.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === REVIEWS.length - 1 ? 0 : i + 1));

  return (
    <section id="about" className="py-14 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-10">
          <div>
            <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              REAL STORIES. REAL CONNECTIONS.
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
              What Our <span className="text-[#D91A60]">Community Says</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs sm:text-sm text-slate-500">
              Thousands of experiences. Countless smiles.
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous review"
                className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-600 hover:border-[#D91A60] hover:text-[#D91A60] transition-colors cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next review"
                className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-600 hover:border-[#D91A60] hover:text-[#D91A60] transition-colors cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div
              key={r.id}
              className="flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <Quote size={24} className="text-[#D91A60]/40 fill-[#D91A60]/20 mb-3" />
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[72px]">
                  &ldquo;{r.comment}&rdquo;
                </p>

                {/* 5 Stars */}
                <div className="mt-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Author info */}
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-50">
                <img
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-pink-100"
                />
                <div>
                  <h4 className="font-display text-sm font-bold text-slate-900">
                    {r.name}
                  </h4>
                  <p className="text-xs text-slate-400">{r.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
