"use client";

import { ArrowRight, MoreHorizontal } from "lucide-react";

interface ServiceCard {
  id: string;
  name: string;
  image: string;
}

const SERVICES_LIST: ServiceCard[] = [
  {
    id: "movies",
    name: "Movies",
    image: "/images/service-movies.jpg",
  },
  {
    id: "coffee",
    name: "Coffee",
    image: "/images/service-coffee.jpg",
  },
  {
    id: "shopping",
    name: "Shopping",
    image: "/images/service-shopping.jpg",
  },
  {
    id: "travel",
    name: "Travel",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "fitness",
    name: "Fitness",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "events",
    name: "Events",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "study-buddy",
    name: "Study Buddy",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cooking",
    name: "Cooking",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "trekking",
    name: "Trekking",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Services({
  onSelectService,
  onViewAll,
}: {
  onSelectService: (name: string) => void;
  onViewAll: () => void;
}) {
  return (
    <section id="services" className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-8">
          <div>
            <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              EXPLORE OUR SERVICES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1.5 tracking-tight">
              Something for <span className="text-[#D91A60]">Every Mood</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
              From coffee chats to weekend getaways — find a CoFriend for the experiences you love.
            </p>
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 px-4 py-2 text-xs font-bold text-purple-700 hover:border-purple-300 hover:bg-purple-50 transition-all self-start sm:self-auto cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* 10 Services Grid (5 columns on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 pt-2">
          {SERVICES_LIST.map((s) => (
            <button
              key={s.id}
              onClick={() => onSelectService(s.name)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 text-left shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <img
                src={s.image}
                alt={s.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="font-display text-sm sm:text-base font-bold text-white tracking-wide">
                  {s.name}
                </span>
              </div>
            </button>
          ))}

          {/* 10th Card: More Services */}
          <button
            onClick={onViewAll}
            className="group flex flex-col items-center justify-center aspect-[4/3] w-full rounded-2xl bg-[#F8F9FD] border border-slate-200/70 p-4 text-center hover:bg-pink-50/50 hover:border-pink-200 transition-all duration-300 shadow-sm cursor-pointer"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-200/60 text-slate-600 group-hover:bg-[#D91A60] group-hover:text-white transition-colors duration-300 mb-2">
              <MoreHorizontal size={20} />
            </span>
            <span className="font-display text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#D91A60] transition-colors">
              More Services
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
