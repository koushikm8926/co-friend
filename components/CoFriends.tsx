"use client";

import { useState } from "react";
import { ArrowRight, Heart, Star, BadgeCheck } from "lucide-react";
import { toast } from "sonner";

interface CoFriendCard {
  id: string;
  name: string;
  avatar: string;
  tags: string[];
  rating: number;
  reviews: number;
  price: number;
}

const FEATURED_COFRIENDS: CoFriendCard[] = [
  {
    id: "aarav",
    name: "Aarav",
    avatar: "/images/avatar-aarav.png",
    tags: ["Movies", "Coffee"],
    rating: 4.8,
    reviews: 120,
    price: 499,
  },
  {
    id: "diya",
    name: "Diya",
    avatar: "/images/avatar-diya.png",
    tags: ["Shopping", "Events"],
    rating: 4.9,
    reviews: 96,
    price: 599,
  },
  {
    id: "rohan",
    name: "Rohan",
    avatar: "/images/avatar-rohan.png",
    tags: ["Fitness", "Travel"],
    rating: 4.7,
    reviews: 76,
    price: 549,
  },
  {
    id: "meera",
    name: "Meera",
    avatar: "/images/avatar-meera.png",
    tags: ["Study Buddy", "Cooking"],
    rating: 4.8,
    reviews: 102,
    price: 499,
  },
  {
    id: "kabir",
    name: "Kabir",
    avatar: "/images/avatar-kabir1.png",
    tags: ["Travel", "Trekking"],
    rating: 4.9,
    reviews: 88,
    price: 449,
  },
  {
    id: "kabir2",
    name: "Kabir",
    avatar: "/images/avatar-kabir2.png",
    tags: ["Coffee", "Events"],
    rating: 4.8,
    reviews: 95,
    price: 549,
  },
];

export default function CoFriends({
  onSelectCoFriend,
  onViewAll,
  className = "pt-6 sm:pt-8 pb-14 sm:pb-20",
}: {
  onSelectCoFriend: (name: string) => void;
  onViewAll: () => void;
  className?: string;
}) {
  const [favs, setFavs] = useState<Set<string>>(new Set());

  const toggleFav = (e: React.MouseEvent, id: string, name: string) => {
    e.stopPropagation();
    setFavs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        toast.success(`Saved ${name} to favourites!`);
      }
      return next;
    });
  };

  return (
    <section id="cofriends" className={`bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-10">
          <div>
            <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              FEATURED COFRIENDS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
              Meet Our <span className="text-[#FC0264]">CoFriends</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-md">
              Talented, friendly and verified CoFriends ready to share amazing experiences with you.
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 px-4 py-2 text-xs font-bold text-purple-700 hover:border-purple-300 hover:bg-purple-50 transition-all self-start md:self-auto cursor-pointer"
          >
            <span>View All CoFriends</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* 6 CoFriends Cards Row / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {FEATURED_COFRIENDS.map((cf) => (
            <div
              key={cf.id}
              onClick={() => onSelectCoFriend(cf.name)}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-2.5 sm:p-3 shadow-sm hover:shadow-md hover:border-pink-200 transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Avatar container */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-b from-pink-50/50 to-purple-50/50">
                  <img
                    src={cf.avatar}
                    alt={cf.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Favorite Heart Button */}
                  <button
                    onClick={(e) => toggleFav(e, cf.id, cf.name)}
                    className="absolute top-1.5 right-1.5 grid h-7 w-7 place-items-center rounded-full bg-white/80 text-slate-500 hover:text-pink-500 backdrop-blur-sm shadow-xs transition-transform active:scale-90"
                    aria-label="Favorite"
                  >
                    <Heart
                      size={13}
                      className={favs.has(cf.id) ? "fill-[#FC0264] text-[#FC0264]" : ""}
                    />
                  </button>

                  {/* Verified badge */}
                  <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 rounded-full bg-emerald-500/90 text-white px-1.5 py-0.5 text-[0.6rem] font-bold backdrop-blur-xs">
                    <BadgeCheck size={10} />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-display mt-2.5 text-sm sm:text-base font-extrabold text-slate-900">
                  {cf.name}
                </h3>

                {/* Tags */}
                <div className="mt-1 flex flex-wrap gap-1 text-[0.65rem] text-slate-500">
                  {cf.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-0.5">
                      <span className="text-pink-500">•</span>
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-1 text-xs">
                  <Star size={11} className="fill-amber-400 text-amber-400" />
                  <span className="font-bold text-slate-800">{cf.rating}</span>
                  <span className="text-[0.68rem] text-slate-400">({cf.reviews})</span>
                </div>
              </div>

              {/* Price & Action Button */}
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-50">
                <span className="font-display text-xs sm:text-sm font-extrabold text-slate-900">
                  ₹{cf.price}/hr
                </span>

                <span className="grid h-6 w-6 place-items-center rounded-full bg-purple-600 text-white text-xs group-hover:bg-[#FC0264] transition-colors shadow-xs">
                  ➔
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
