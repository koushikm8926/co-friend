"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

interface ServiceItem {
  id: string;
  name: string;
  icon: string;
}

const POPULAR_SERVICES: ServiceItem[] = [
  { id: "coffee-companion",   name: "Coffee Companion",   icon: "/images/services/coffee-companion.png" },
  { id: "dining-companion",   name: "Dining Companion",   icon: "/images/services/dining-companion.png" },
  { id: "travel-companion",   name: "Travel Companion",   icon: "/images/services/travel-companion.png" },
  { id: "movie-companion",    name: "Movie Companion",    icon: "/images/services/movie-companion.png" },
  { id: "shopping-companion", name: "Shopping Companion", icon: "/images/services/shopping-companion.png" },
  { id: "date-companion",     name: "Date Companion",     icon: "/images/services/date-companion.png" },
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
  return (
    <section id="services" className="py-14 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="text-[#FC0264]">Popular</span>{" "}
              <span className="text-[#0F172A]">Services</span>
            </h2>
          </Reveal>
        </div>

        {/* 12-Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {POPULAR_SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.04}>
              <motion.button
                onClick={() => onSelectService(service.name)}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex flex-col items-center justify-between w-full h-full p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-100 hover:border-pink-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-8px_rgba(252,2,100,0.18)] transition-all duration-300 cursor-pointer"
              >
                {/* 3D Illustration Icon */}
                <div className="w-full flex items-center justify-center h-28 sm:h-32 mb-3">
                  <img
                    src={service.icon}
                    alt={service.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-108 select-none"
                    draggable={false}
                  />
                </div>

                {/* Service Name Label */}
                <span className="font-display font-bold text-sm sm:text-base md:text-[17px] text-[#0F172A] group-hover:text-[#FC0264] transition-colors leading-snug">
                  {service.name}
                </span>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
