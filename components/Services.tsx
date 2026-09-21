"use client";

import { ArrowRight, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

interface ServiceCard { id: string; name: string; image: string; }

const SERVICES_LIST: ServiceCard[] = [
  { id: "movies",      name: "Movies",      image: "/images/service-movies.jpg" },
  { id: "coffee",      name: "Coffee",      image: "/images/service-coffee.jpg" },
  { id: "shopping",    name: "Shopping",    image: "/images/service-shopping.jpg" },
  { id: "travel",      name: "Travel",      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80" },
  { id: "fitness",     name: "Fitness",     image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80" },
  { id: "events",      name: "Events",      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80" },
  { id: "study-buddy", name: "Study Buddy", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80" },
  { id: "cooking",     name: "Cooking",     image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80" },
  { id: "trekking",    name: "Trekking",    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80" },
];

export default function Services({ onSelectService, onViewAll }: {
  onSelectService: (name: string) => void;
  onViewAll: () => void;
}) {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-10">
          <Reveal>
            <div>
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-slate-400">
                EXPLORE OUR SERVICES
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Something for <span className="text-[#D91A60]">Every Mood</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <p className="text-sm sm:text-base text-slate-500 max-w-sm">
                From coffee chats to weekend getaways — find a CoFriend for the experiences you love.
              </p>
              <motion.button
                onClick={onViewAll}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 px-5 py-2.5 text-sm font-bold text-purple-700 hover:border-purple-300 hover:bg-purple-50 transition-all self-start sm:self-auto cursor-pointer"
              >
                <span>View All Services</span>
                <ArrowRight size={14} />
              </motion.button>
            </div>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 pt-2">
          {SERVICES_LIST.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.07}>
              <motion.button
                onClick={() => onSelectService(s.name)}
                whileHover={{ y: -4, boxShadow: "0 16px 40px -10px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.97 }}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 text-left shadow-sm cursor-pointer"
              >
                <img src={s.image} alt={s.name} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="font-display text-sm sm:text-base lg:text-lg font-bold text-white tracking-wide">
                    {s.name}
                  </span>
                </div>
              </motion.button>
            </Reveal>
          ))}

          {/* More Services */}
          <Reveal delay={0.63}>
            <motion.button
              onClick={onViewAll}
              whileHover={{ y: -4, boxShadow: "0 16px 40px -10px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.97 }}
              className="group flex flex-col items-center justify-center aspect-[4/3] w-full rounded-2xl bg-[#F8F9FD] border border-slate-200/70 p-4 text-center hover:bg-pink-50/50 hover:border-pink-200 transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-slate-200/60 text-slate-600 group-hover:bg-[#D91A60] group-hover:text-white transition-colors duration-300 mb-2.5">
                <MoreHorizontal size={22} />
              </span>
              <span className="font-display text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#D91A60] transition-colors">
                More Services
              </span>
            </motion.button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
