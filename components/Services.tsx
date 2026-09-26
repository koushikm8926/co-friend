"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export interface ServiceItem {
  id: string;
  name: string;
  icon: string;
  tag?: string;
}

export const POPULAR_SERVICES: ServiceItem[] = [
  { id: "coffee-companion",   name: "Coffee Companion",   icon: "/images/services/coffee-companion.png", tag: "Popular" },
  { id: "dining-companion",   name: "Dining Companion",   icon: "/images/services/dining-companion.png", tag: "Trending" },
  { id: "travel-companion",   name: "Travel Companion",   icon: "/images/services/travel-companion.png", tag: "Top Pick" },
  { id: "movie-companion",    name: "Movie Companion",    icon: "/images/services/movie-companion.png" },
  { id: "shopping-companion", name: "Shopping Companion", icon: "/images/services/shopping-companion.png" },
  { id: "date-companion",     name: "Date Companion",     icon: "/images/services/date-companion.png", tag: "Special" },
  { id: "events-companion",   name: "Events Companion",   icon: "/images/services/events-companion.png" },
  { id: "concert-companion",  name: "Concert Companion",  icon: "/images/services/concert-companion.png" },
  { id: "fitness-companion",  name: "Fitness Companion",  icon: "/images/services/fitness-companion.png" },
  { id: "study-companion",    name: "Study Companion",    icon: "/images/services/study-companion.png" },
  { id: "work-support",       name: "Work Support",       icon: "/images/services/work-support.png" },
  { id: "photography",        name: "Photography",        icon: "/images/services/photography.png" },
];

export default function Services({
  onSelectService,
  onViewAll,
}: {
  onSelectService: (name: string) => void;
  onViewAll?: () => void;
}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Sync scroll position with active index and scroll buttons
  const updateScrollState = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const firstCard = sliderRef.current.children[0] as HTMLElement | undefined;
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 20; // width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(0, index), POPULAR_SERVICES.length - 1));
    }
  }, []);

  const scrollToCard = useCallback((index: number) => {
    if (!sliderRef.current) return;
    const cards = sliderRef.current.children;
    if (cards[index]) {
      const cardEl = cards[index] as HTMLElement;
      sliderRef.current.scrollTo({
        left: cardEl.offsetLeft - 16,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  }, []);

  const slideNext = useCallback(() => {
    const nextIdx = (activeIndex + 1) % POPULAR_SERVICES.length;
    scrollToCard(nextIdx);
  }, [activeIndex, scrollToCard]);

  const slidePrev = useCallback(() => {
    const prevIdx = activeIndex === 0 ? POPULAR_SERVICES.length - 1 : activeIndex - 1;
    scrollToCard(prevIdx);
  }, [activeIndex, scrollToCard]);

  // Automatic slide navigation every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      if (scrollLeft >= scrollWidth - clientWidth - 16) {
        scrollToCard(0);
      } else {
        slideNext();
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, slideNext, scrollToCard]);

  return (
    <section id="services" className="py-12 sm:py-16 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left Titles & Right Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-[#FC0264] text-xs font-bold uppercase tracking-wider mb-2.5">
              <Sparkles size={13} className="text-[#FC0264]" />
              <span>Explore Companions</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A]">
              <span className="text-[#FC0264]">Popular</span> Services
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-normal mt-2 max-w-lg leading-relaxed">
              Find verified companions for any experience — from casual coffee chats to travel getaways.
            </p>
          </Reveal>

          {/* Slider Controls (Next/Prev + Auto Indicator) */}
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-400 mr-1">
                <span
                  className={`inline-block w-2 h-2 rounded-full transition-colors ${
                    isPaused ? "bg-amber-400" : "bg-emerald-500 animate-pulse"
                  }`}
                />
                <span>{isPaused ? "Paused" : "Auto-sliding"}</span>
              </div>

              {/* Prev Button */}
              <button
                type="button"
                onClick={slidePrev}
                aria-label="Previous service"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#FC0264] hover:border-pink-300 hover:bg-pink-50/50 shadow-sm hover:shadow-md transition-all flex items-center justify-center cursor-pointer active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={slideNext}
                aria-label="Next service"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FC0264] text-white hover:bg-[#d90055] shadow-md hover:shadow-lg shadow-pink-500/25 transition-all flex items-center justify-center cursor-pointer active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Horizontal Single-Line Slider Container */}
        <div
          className="relative group/slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Subtle Left & Right Edge Blur Gradients */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-white to-transparent z-10 hidden sm:block" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-white to-transparent z-10 hidden sm:block" />

          {/* Single-Line Scrollable Track */}
          <div
            ref={sliderRef}
            onScroll={updateScrollState}
            className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory py-3 px-1"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {POPULAR_SERVICES.map((service, index) => {
              const isCurrent = activeIndex === index;
              return (
                <div
                  key={service.id}
                  className="w-[210px] sm:w-[240px] md:w-[260px] lg:w-[270px] shrink-0 snap-start flex flex-col"
                >
                  <motion.button
                    type="button"
                    onClick={() => onSelectService(service.name)}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className={`group relative flex flex-col items-center justify-between w-full h-full p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border transition-all duration-300 cursor-pointer text-center ${
                      isCurrent
                        ? "border-pink-300 shadow-[0_12px_32px_-6px_rgba(252,2,100,0.16)] ring-1 ring-[#FC0264]/20"
                        : "border-slate-100 hover:border-pink-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-8px_rgba(252,2,100,0.18)]"
                    }`}
                  >
                    {/* Optional Tag / Badge */}
                    {service.tag && (
                      <span className="absolute top-3.5 right-3.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-pink-50 text-[#FC0264] border border-pink-100/80">
                        {service.tag}
                      </span>
                    )}

                    {/* 3D Illustration Icon */}
                    <div className="w-full flex items-center justify-center h-28 sm:h-32 mb-3 mt-1">
                      <img
                        src={service.icon}
                        alt={service.name}
                        loading="lazy"
                        draggable={false}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm select-none"
                      />
                    </div>

                    {/* Service Name Label & Action */}
                    <div className="w-full mt-auto">
                      <span className="block font-display font-bold text-sm sm:text-base md:text-[17px] text-[#0F172A] group-hover:text-[#FC0264] transition-colors leading-snug">
                        {service.name}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-slate-400 group-hover:text-[#FC0264] mt-1.5 transition-colors">
                        <span>Book now</span>
                        <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </motion.button>
                </div>
              );
            })}
          </div>

          {/* Floating Navigation Chevrons on Desktop */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={slidePrev}
              aria-label="Previous slide"
              className="hidden lg:flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg text-slate-700 hover:text-[#FC0264] hover:border-pink-300 hover:scale-105 transition-all items-center justify-center cursor-pointer active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {canScrollRight && (
            <button
              type="button"
              onClick={slideNext}
              aria-label="Next slide"
              className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg text-slate-700 hover:text-[#FC0264] hover:border-pink-300 hover:scale-105 transition-all items-center justify-center cursor-pointer active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Pagination Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
          {POPULAR_SERVICES.map((service, index) => {
            const isCurrent = activeIndex === index;
            return (
              <button
                key={`dot-${service.id}`}
                type="button"
                onClick={() => scrollToCard(index)}
                aria-label={`Jump to ${service.name}`}
                className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                  isCurrent
                    ? "w-7 sm:w-8 bg-[#FC0264] shadow-sm shadow-pink-500/30"
                    : "w-2 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
