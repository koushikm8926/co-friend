"use client";

import { useState } from "react";
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";
import { TESTIMONIALS } from "@/data/content";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={15}
          className={i < n ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((i) => (i === 0 ? Math.max(0, TESTIMONIALS.length - 3) : i - 1));
  };

  const next = () => {
    setStartIndex((i) => (i >= TESTIMONIALS.length - 3 ? 0 : i + 1));
  };

  return (
    <section id="reviews" data-testid="customer-reviews-section" className="relative py-20 md:py-28">
      <div className="glow-blob absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-400/15" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            chapter="06"
            eyebrow="Customer Reviews"
            title={
              <>
                Stories from people who stopped <span className="text-gradient">doing life alone.</span>
              </>
            }
          />
          <Reveal delay={0.2} className="pb-1">
            <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-3.5">
              <Stars n={5} />
              <span className="font-accent text-sm font-extrabold text-slate-800">
                4.95 · 1,20,000+ reviews
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-12">
          <div className="w-full" data-testid="testimonials-carousel">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.slice(startIndex, startIndex + 3).concat(
                startIndex + 3 > TESTIMONIALS.length
                  ? TESTIMONIALS.slice(0, (startIndex + 3) % TESTIMONIALS.length)
                  : []
              ).map((t, i) => (
                <figure
                  key={`${t.name}-${i}`}
                  data-testid={`testimonial-card-${i}`}
                  className="card-lift flex h-full flex-col rounded-[1.75rem] border border-purple-100 bg-white p-7 shadow-[0_16px_45px_-22px_rgba(124,58,237,0.3)]"
                >
                  <div className="flex items-center justify-between">
                    <Stars n={t.rating} />
                    <Quote size={26} className="fill-purple-100 text-purple-100" />
                  </div>
                  <blockquote className="mt-5 flex-1 text-[0.92rem] leading-relaxed text-slate-700">
                    &ldquo;{t.comment}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3.5 border-t border-purple-50 pt-5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-purple-100"
                    />
                    <div className="min-w-0">
                      <p className="font-display truncate text-sm font-extrabold text-slate-900">
                        {t.name}
                      </p>
                      <p className="flex items-center gap-1 text-[0.7rem] font-semibold text-slate-500">
                        <MapPin size={11} className="text-pink-500" /> {t.city} · {t.date}
                      </p>
                    </div>
                    <span className="font-accent ml-auto shrink-0 rounded-full bg-purple-50 px-3 py-1 text-[0.62rem] font-extrabold text-purple-700 ring-1 ring-purple-100">
                      {t.service}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button
                data-testid="testimonial-prev-btn"
                onClick={prev}
                aria-label="Previous reviews"
                className="grid h-12 w-12 place-items-center rounded-full border border-purple-200 text-purple-700 transition-all hover:border-purple-500 hover:bg-purple-600 hover:text-white cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                data-testid="testimonial-next-btn"
                onClick={next}
                aria-label="Next reviews"
                className="grid h-12 w-12 place-items-center rounded-full border border-purple-200 text-purple-700 transition-all hover:border-purple-500 hover:bg-purple-600 hover:text-white cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
