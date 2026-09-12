"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  MapPin,
  Calendar,
  Star,
  Clock,
  ShieldCheck,
  Film,
  Sparkles,
  SlidersHorizontal,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Check,
  X,
  ChevronDown,
  Info,
  Lock,
  PhoneCall,
  UserCheck,
  HeartHandshake,
  AlertCircle,
  RotateCcw,
  Sliders,
  Award,
  Zap,
} from "lucide-react";

interface MovieCompanion {
  id: string;
  name: string;
  avatar: string;
  locationArea: string;
  rating: number;
  reviewsCount: number;
  isAvailableToday: boolean;
  minDuration: string;
  bio: string;
  languages: string[];
  matchHighlight: string;
  priceHourly: number;
  badgeLeft: string;
  badgeRight: string;
  badgeRightType: "gold" | "green" | "blue" | "neutral";
  tagType: "Instant Match" | "Quick Reply" | "Top Rated 2024" | "Value Choice";
  zone: string;
  slot: "morning" | "afternoon" | "evening";
}

const KOLKATA_MOVIE_COMPANIONS: MovieCompanion[] = [
  {
    id: "ananya",
    name: "Ananya S.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    locationArea: "South City & Acropolis Area",
    rating: 4.9,
    reviewsCount: 124,
    isAvailableToday: true,
    minDuration: "Min 3 hrs booking",
    bio: "Film studies graduate & arthouse cinema enthusiast. Loves Christopher Nolan, Satyajit Ray, and contemporary world film. Punctual and cultured.",
    languages: ["Bengali (Native)", "English (Fluent)", "Hindi"],
    matchHighlight: "Top matched for weekend South City multiplex screenings (93.5%)",
    priceHourly: 300,
    badgeLeft: "Aadhaar Verified",
    badgeRight: "Top 1% Companion",
    badgeRightType: "gold",
    tagType: "Instant Match",
    zone: "South Kolkata (South City, Quest)",
    slot: "afternoon",
  },
  {
    id: "rahul",
    name: "Rahul D.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    locationArea: "Quest Mall & Forum Area",
    rating: 4.88,
    reviewsCount: 92,
    isAvailableToday: true,
    minDuration: "Min 3 hrs booking",
    bio: "Passionate blockbuster buff. Punctual, respectful conversationalist, and passionate cinema host in South Kolkata. Great for IMAX premieres.",
    languages: ["English (Fluent)", "Hindi (Fluent)", "Bengali (Conversational)"],
    matchHighlight: "Fast 12 min response time in South Kolkata",
    priceHourly: 280,
    badgeLeft: "Vetted Fellow",
    badgeRight: "Background Clear",
    badgeRightType: "green",
    tagType: "Quick Reply",
    zone: "South Kolkata (South City, Quest)",
    slot: "afternoon",
  },
  {
    id: "sreeja",
    name: "Sreeja B.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    locationArea: "Salt Lake & Mani Square",
    rating: 4.95,
    reviewsCount: 156,
    isAvailableToday: false,
    minDuration: "Min 2 hrs booking",
    bio: "Literature student who loves indie cinema, multiplex premieres, post-movie coffee discussions, and international film festival screenings.",
    languages: ["Bengali (Native)", "English (Fluent)"],
    matchHighlight: "Handpicked by curators for film festival companionship",
    priceHourly: 350,
    badgeLeft: "KIFF Delegate",
    badgeRight: "Editor's Choice",
    badgeRightType: "gold",
    tagType: "Top Rated 2024",
    zone: "Salt Lake & Mani Square",
    slot: "evening",
  },
  {
    id: "vikram",
    name: "Vikram K.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    locationArea: "New Town & Central Metro",
    rating: 4.85,
    reviewsCount: 68,
    isAvailableToday: true,
    minDuration: "Min 2 hrs booking",
    bio: "Pop-culture nerd, anime enthusiast, and film festival volunteer. Respectful, well-mannered, and engaging companionship for evening shows.",
    languages: ["English (Fluent)", "Hindi (Fluent)", "Bengali (Fluent)"],
    matchHighlight: "Attended 70+ premiere screenings in New Town & City Centre",
    priceHourly: 250,
    badgeLeft: "Aadhaar Cleared",
    badgeRight: "100% On-Time",
    badgeRightType: "blue",
    tagType: "Value Choice",
    zone: "New Town & City Centre 2",
    slot: "morning",
  },
];

export default function MovieCoFriendPage() {
  const [selectedZones, setSelectedZones] = useState<string[]>([
    "South Kolkata (South City, Quest)",
    "Park Street & Nandan Area",
  ]);
  const [selectedSlot, setSelectedSlot] = useState<"morning" | "afternoon" | "evening">("afternoon");
  const [maxRate, setMaxRate] = useState(400);
  const [selectedDuration, setSelectedDuration] = useState("3 hrs");
  const [selectedLangs, setSelectedLangs] = useState<string[]>(["Bengali", "English"]);
  const [verifiedOnly, setVerifiedOnly] = useState(true);
  const [activeProfileModal, setActiveProfileModal] = useState<MovieCompanion | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const toggleZone = (zone: string) => {
    setSelectedZones((prev) =>
      prev.includes(zone) ? prev.filter((z) => z !== zone) : [...prev, zone]
    );
  };

  const toggleLang = (lang: string) => {
    setSelectedLangs((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const resetFilters = () => {
    setSelectedZones(["South Kolkata (South City, Quest)"]);
    setSelectedSlot("afternoon");
    setMaxRate(500);
    setSelectedDuration("3 hrs");
    setSelectedLangs(["Bengali", "English"]);
    setVerifiedOnly(true);
  };

  const filteredCompanions = useMemo(() => {
    return KOLKATA_MOVIE_COMPANIONS.filter((c) => {
      const matchesRate = c.priceHourly <= maxRate;
      return matchesRate;
    });
  }, [maxRate]);

  return (
    <div className="min-h-screen bg-[#FAFAFD] text-[#1E2421] font-sans antialiased flex flex-col selection:bg-[#F3E8FF] selection:text-[#7C3AED]">
      {/* Top Header / Navbar */}
      <header className="sticky top-0 z-40 bg-[#FAFAFD]/90 backdrop-blur-md border-b border-purple-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-baseline group">
              <span className="font-outfit text-2xl sm:text-3xl font-bold tracking-tight text-[#171A19]">
                CoFriend
              </span>
              <span className="font-sans text-xl font-bold text-purple-600">
                .in
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-[14.5px] font-medium text-[#4D5350]">
            <Link href="/" className="transition-colors hover:text-[#171A19] py-1">
              Home
            </Link>
            <Link
              href="/services"
              className="transition-colors hover:text-[#171A19] py-1"
            >
              Services
            </Link>
            <Link
              href="/explore"
              className="transition-colors hover:text-[#171A19] py-1"
            >
              Explore CoFriends
            </Link>
            <Link
              href="/available-now"
              className="text-[#171A19] font-semibold py-1 border-b-2 border-purple-600"
            >
              Available Now
            </Link>
            <Link
              href="/how-it-works"
              className="transition-colors hover:text-[#171A19] py-1"
            >
              How it Works
            </Link>
            <Link
              href="/book/confirmation"
              className="transition-colors hover:text-[#171A19] py-1"
            >
              My Bookings
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#become-cofriend"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4.5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow active:scale-98 flex items-center gap-2 cursor-pointer"
            >
              <span>Become a CoFriend</span>
            </Link>
            <div className="w-9 h-9 rounded-full bg-[#E5DFD4] border border-[#D5CDBC] flex items-center justify-center text-xs font-semibold text-[#5A5043]">
              <span>JD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Category Banner */}
      <div className="bg-[#FAF5FF] border-b border-purple-100/80 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider uppercase text-[#737A76]">
            <Link href="/services" className="hover:underline text-[#737A76]">
              Concierge Services
            </Link>
            <span>&gt;</span>
            <span className="text-purple-700">Kolkata Metro</span>
            <span>&gt;</span>
            <span className="text-[#171A19]">Cinema & Film Companions</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EBF7EE] text-[#1E7E34] text-[11px] font-semibold border border-[#CEEAD6]">
                <Film className="w-3.5 h-3.5" />
                <span>Curated Catalog • Cinema</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-outfit font-bold text-[#171A19]">
                Movie CoFriend
              </h1>

              <p className="text-xs sm:text-sm text-[#555C58] max-w-2xl leading-relaxed">
                Find a vetted, cultured companion for multiplex premieres, Nandan
                arthouse screenings, and film discussions across Kolkata.
              </p>

              {/* Stats Bar */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#4D5350] pt-1">
                <span className="flex items-center gap-1">
                  <span className="text-purple-700 font-bold">₹300/hr</span> Avg
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-emerald-600" />
                  <strong>140+</strong> verified companions in Kolkata
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-700">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% ID & Criminal Record Cleared
                </span>
              </div>
            </div>

            {/* Metro Demand Status Card */}
            <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-4 border border-[#E2DFD6] shadow-xs shrink-0 lg:max-w-xs space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[10.5px] uppercase tracking-wider text-[#737A76]">
                  Metro Demand Status
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-bold text-[10.5px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  High Fast Booking
                </span>
              </div>
              <p className="text-[11px] text-[#555C58] leading-tight">
                Current peak zones: South City Mall, Quest Mall, City Centre 1 &
                Forum multiplex.
              </p>
              <div className="text-[10px] text-purple-700 font-semibold pt-1 border-t border-[#F0EEE7] flex items-center gap-1">
                <Lock className="w-3 h-3" />
                <span>Strict Platonic Code of Conduct Enforced</span>
              </div>
            </div>
          </div>

          {/* Quick Dropdown Bar */}
          <div className="bg-white rounded-2xl p-2.5 sm:p-3 border border-[#E5E2DA] shadow-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FAFAFD] rounded-xl border border-[#EDEAE1]">
              <MapPin className="w-4 h-4 text-purple-700 shrink-0" />
              <div className="overflow-hidden">
                <div className="text-[9px] font-bold uppercase text-[#737A76]">
                  Location Zone
                </div>
                <div className="font-semibold text-[#171A19] truncate">
                  Kolkata • South & Central
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FAFAFD] rounded-xl border border-[#EDEAE1]">
              <Calendar className="w-4 h-4 text-purple-700 shrink-0" />
              <div className="overflow-hidden">
                <div className="text-[9px] font-bold uppercase text-[#737A76]">
                  Movie Date
                </div>
                <div className="font-semibold text-[#171A19] truncate">
                  Today (Sat, 14 Dec)
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FAFAFD] rounded-xl border border-[#EDEAE1]">
              <Film className="w-4 h-4 text-purple-700 shrink-0" />
              <div className="overflow-hidden">
                <div className="text-[9px] font-bold uppercase text-[#737A76]">
                  Preferred Multiplex
                </div>
                <div className="font-semibold text-[#171A19] truncate">
                  Any South/Central Theater
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FAFAFD] rounded-xl border border-[#EDEAE1]">
              <Sparkles className="w-4 h-4 text-purple-700 shrink-0" />
              <div className="overflow-hidden">
                <div className="text-[9px] font-bold uppercase text-[#737A76]">
                  Language & Film
                </div>
                <div className="font-semibold text-[#171A19] truncate">
                  Bengali, Hindi, English
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Filtered Catalog View */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar Filters */}
          <aside className="lg:col-span-3 space-y-5">
            <div className="bg-white rounded-2xl p-5 border border-purple-100/80 shadow-xs space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EEE7]">
                <span className="font-outfit font-bold text-base text-[#171A19]">
                  Filters
                </span>
                <button
                  onClick={resetFilters}
                  className="text-xs font-semibold text-purple-700 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset all</span>
                </button>
              </div>

              {/* 1. Kolkata Sub-Zones */}
              <div className="space-y-2.5">
                <label className="block text-xs font-bold text-[#171A19]">
                  Kolkata Sub-Zones
                </label>
                <div className="space-y-2 text-xs text-[#555C58]">
                  {[
                    "South Kolkata (South City, Quest)",
                    "Park Street & Nandan Area",
                    "Salt Lake & Mani Square",
                    "New Town & City Centre 2",
                  ].map((z) => {
                    const isChecked = selectedZones.includes(z);
                    return (
                      <label
                        key={z}
                        className="flex items-start gap-2 cursor-pointer select-none"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleZone(z)}
                          className="mt-0.5 accent-purple-600 rounded"
                        />
                        <span
                          className={`${
                            isChecked ? "font-semibold text-[#171A19]" : ""
                          }`}
                        >
                          {z}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 2. Showtime Slot */}
              <div className="space-y-2.5">
                <label className="block text-xs font-bold text-[#171A19]">
                  Showtime Slot
                </label>
                <div className="space-y-1.5">
                  {[
                    { id: "morning", label: "Morning (10 AM - 1 PM)" },
                    { id: "afternoon", label: "Afternoon (2 PM - 5 PM)" },
                    { id: "evening", label: "Evening / Prime (5 PM - 10 PM)" },
                  ].map((slot) => {
                    const isActive = selectedSlot === slot.id;
                    return (
                      <button
                        key={slot.id}
                        onClick={() => setSelectedSlot(slot.id as any)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                          isActive
                            ? "bg-[#171A19] text-white font-semibold"
                            : "bg-[#FAFAFD] text-[#555C58] hover:bg-[#EAE7DD] border border-purple-100/80"
                        }`}
                      >
                        <span>{slot.label}</span>
                        {isActive && <Check className="w-3.5 h-3.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Hourly Rate Slider */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-bold text-[#171A19]">Hourly Rate</label>
                  <span className="font-bold text-purple-700">
                    ₹200 - ₹{maxRate}/hr
                  </span>
                </div>
                <input
                  type="range"
                  min={200}
                  max={500}
                  step={20}
                  value={maxRate}
                  onChange={(e) => setMaxRate(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#737A76]">
                  <span>₹200/hr</span>
                  <span>₹500/hr</span>
                </div>
              </div>

              {/* 4. Minimum Duration */}
              <div className="space-y-2.5">
                <label className="block text-xs font-bold text-[#171A19]">
                  Minimum Duration
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {["2 hrs", "3 hrs", "4+ hrs"].map((dur) => {
                    const isActive = selectedDuration === dur;
                    return (
                      <button
                        key={dur}
                        onClick={() => setSelectedDuration(dur)}
                        className={`py-1.5 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer ${
                          isActive
                            ? "bg-purple-600 text-white"
                            : "bg-[#FAFAFD] text-[#555C58] hover:bg-[#EAE7DD] border border-purple-100/80"
                        }`}
                      >
                        {dur}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 5. Companion Languages */}
              <div className="space-y-2.5">
                <label className="block text-xs font-bold text-[#171A19]">
                  Companion Languages
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {["Bengali", "English", "Hindi"].map((lang) => {
                    const isActive = selectedLangs.includes(lang);
                    return (
                      <button
                        key={lang}
                        onClick={() => toggleLang(lang)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#171A19] text-white"
                            : "bg-[#FAFAFD] text-[#555C58] hover:bg-[#EAE7DD] border border-purple-100/80"
                        }`}
                      >
                        {lang}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 6. Verification & Rating */}
              <div className="space-y-2 pt-2 border-t border-[#F0EEE7] text-xs text-[#555C58]">
                <label className="block font-bold text-[#171A19] mb-1">
                  Verification & Rating
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="accent-purple-600 rounded"
                  />
                  <span>★ 4.8 & above (Top Rated)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-purple-600 rounded" />
                  <span>★ 4.5 & above</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={verifiedOnly}
                    onChange={(e) => setVerifiedOnly(e.target.checked)}
                    className="accent-purple-600 rounded"
                  />
                  <span>Police & Aadhaar Verified Only</span>
                </label>
              </div>
            </div>

            {/* CoFriend Trust Engine Box */}
            <div className="bg-[#EFF2EB] rounded-2xl p-4 border border-[#DEE3D7] space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>CoFriend Trust Engine</span>
              </div>
              <p className="text-[11px] text-[#555C58] leading-tight">
                Zero anonymous accounts. Profiles show real identities, verified photos, emergency contacts, and
                platonic code adherence backed by our 24/7 desk.
              </p>
              <div className="pt-2 border-t border-[#D9DFD2] flex items-center justify-between text-[11px]">
                <span className="font-semibold text-[#171A19]">
                  Safety Hotline:
                </span>
                <span className="font-bold text-purple-700">1800-COFRIEND</span>
              </div>
            </div>
          </aside>

          {/* Right Main Grid */}
          <section className="lg:col-span-9 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <h2 className="text-xl sm:text-2xl font-outfit font-bold text-[#171A19]">
                  Available Movie CoFriends
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FCECE8] text-purple-700 text-xs font-bold border border-[#F6D0C7]">
                  14 Matching
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#737A76]">Sort by:</span>
                <select className="bg-white border border-purple-100/80 rounded-xl px-2.5 py-1.5 font-semibold text-[#171A19] focus:outline-none cursor-pointer">
                  <option>Highest Rated (Top Concierge)</option>
                  <option>Fastest Response Time</option>
                  <option>Price: Low to High</option>
                  <option>Most Movie Bookings</option>
                </select>
              </div>
            </div>

            {/* Cards Grid: 2 Columns on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredCompanions.map((comp) => (
                <div
                  key={comp.id}
                  className="bg-white rounded-2xl border border-purple-100/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  {/* Photo Thumbnail */}
                  <div className="relative aspect-[16/10] w-full bg-stone-200 overflow-hidden">
                    <Image
                      src={comp.avatar}
                      alt={comp.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[10.5px] font-semibold text-emerald-800 shadow-xs border border-emerald-200 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        {comp.badgeLeft}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-400/90 backdrop-blur-md text-[10.5px] font-bold text-amber-950 shadow-xs">
                        {comp.badgeRight}
                      </span>
                    </div>

                    {/* Bottom Info on Image */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white drop-shadow-sm">
                      <div>
                        <h3 className="text-base font-outfit font-bold leading-none">
                          {comp.name}
                        </h3>
                        <span className="text-[10px] text-stone-200">
                          📍 {comp.locationArea}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-xs font-bold">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{comp.rating.toFixed(2)}</span>
                        <span className="text-[10px] font-normal text-stone-300">
                          ({comp.reviewsCount})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      {/* Availability & Duration Status */}
                      <div className="flex items-center justify-between text-xs">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold ${
                            comp.isAvailableToday
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-stone-100 text-stone-600 border border-stone-200"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              comp.isAvailableToday
                                ? "bg-emerald-500 animate-pulse"
                                : "bg-stone-400"
                            }`}
                          />
                          {comp.isAvailableToday
                            ? "Available Today"
                            : "Available Tomorrow"}
                        </span>
                        <span className="text-[#737A76] text-[11px] font-medium">
                          {comp.minDuration}
                        </span>
                      </div>

                      {/* Bio */}
                      <p className="text-xs text-[#555C58] line-clamp-3 leading-relaxed">
                        {comp.bio}
                      </p>

                      {/* Languages */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {comp.languages.map((lang, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-[#FAFAFD] border border-purple-100/80 text-[10.5px] font-medium text-[#4D5350]"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>

                      {/* Match Highlight */}
                      <div className="p-2 rounded-lg bg-[#FAFAFD] border border-[#EDEAE1] text-[11px] text-[#1E7E34] font-medium flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{comp.matchHighlight}</span>
                      </div>
                    </div>

                    {/* Card Footer: Price & CTA */}
                    <div className="pt-3 border-t border-[#F2EFE8] flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold text-[#171A19]">
                          ₹{comp.priceHourly}
                          <span className="text-xs font-normal text-[#737A76]">
                            {" "}
                            / hour
                          </span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700">
                          {comp.tagType}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          href={
                            comp.id === "ananya"
                              ? "/profile/ananya-sharma"
                              : "#"
                          }
                          onClick={(e) => {
                            if (comp.id !== "ananya") {
                              e.preventDefault();
                              setActiveProfileModal(comp);
                            }
                          }}
                          className="px-3 py-1.5 rounded-xl bg-[#FAFAFD] hover:bg-[#EAE7DD] border border-purple-100/80 text-xs font-semibold text-[#171A19] transition-all cursor-pointer"
                        >
                          View Profile
                        </Link>
                        <Link
                          href={
                            comp.id === "ananya"
                              ? "/profile/ananya-sharma"
                              : "#"
                          }
                          onClick={(e) => {
                            if (comp.id !== "ananya") {
                              e.preventDefault();
                              setActiveProfileModal(comp);
                            }
                          }}
                          className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs font-semibold transition-all shadow-xs active:scale-98 flex items-center gap-1 cursor-pointer"
                        >
                          <span>Book Now</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination / Load More Bar */}
            <div className="p-4 bg-[#FAFAFD] rounded-2xl border border-purple-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-[#737A76]">
                Showing 4 of 14 verified CoFriends available for movies in Kolkata
              </span>
              <button
                onClick={() =>
                  alert("Displaying all 14 verified Kolkata movie companions.")
                }
                className="font-semibold text-purple-700 hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-auto"
              >
                <span>Load More CoFriends in Kolkata</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Section: CoFriend 4-Tier Platonic Safety Protocol (3 cards) */}
            <div className="bg-white rounded-3xl p-6 border border-purple-100/80 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base sm:text-lg font-outfit font-bold text-[#171A19]">
                  CoFriend 4-Tier Platonic Safety Protocol
                </h3>
              </div>
              <p className="text-xs text-[#555C58]">
                How we ensure every movie companionship is transparent, non-romantic, and pleasant.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div className="bg-[#FAFAFD] rounded-xl p-3.5 border border-[#EDEAE1] space-y-1.5">
                  <div className="text-xs font-bold text-purple-700 flex items-center gap-1">
                    <span>1. PUBLIC VENUE OTP</span>
                  </div>
                  <p className="text-[11px] text-[#555C58] leading-relaxed">
                    Meetups start strictly in commercial multiplex and cinema lobbies with dual 4-digit OTP exchange.
                  </p>
                </div>

                <div className="bg-[#FAFAFD] rounded-xl p-3.5 border border-[#EDEAE1] space-y-1.5">
                  <div className="text-xs font-bold text-[#1E7E34] flex items-center gap-1">
                    <span>2. ZERO-PHYSICAL CONTACT</span>
                  </div>
                  <p className="text-[11px] text-[#555C58] leading-relaxed">
                    Platonic Charter guidelines apply. Friendly conversation only. Harassment triggers immediate banning.
                  </p>
                </div>

                <div className="bg-[#FAFAFD] rounded-xl p-3.5 border border-[#EDEAE1] space-y-1.5">
                  <div className="text-xs font-bold text-[#B47414] flex items-center gap-1">
                    <span>3. REAL-TIME CONCIERGE SOS</span>
                  </div>
                  <p className="text-[11px] text-[#555C58] leading-relaxed">
                    Fellows check-in upon movie completion. Live concierge desk for immediate assistance.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#FAFAFD] border-t border-purple-100/80 pt-12 pb-8 text-[#4D5350]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-4 pr-4">
              <Link href="/" className="flex items-baseline">
                <span className="font-outfit text-2xl font-bold tracking-tight text-[#171A19]">
                  CoFriend
                </span>
                <span className="font-sans text-lg font-bold text-purple-700">
                  .in
                </span>
              </Link>

              <p className="text-xs text-[#5C6460] leading-relaxed max-w-sm">
                India&apos;s trusted lifestyle and social companionship concierge.
                Offering vetted, platonic fellows for events, cinema, gallery
                walks, wellness retreats, and city discoveries.
              </p>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAFAFD] border border-[#DDD7CC] text-[11px] font-bold tracking-wider text-[#3D4440] uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Aadhaar & Background Verified Network</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#171A19]">
                Metro Hubs
              </h4>
              <ul className="space-y-2 text-xs font-medium">
                {["Kolkata", "Mumbai", "Bengaluru", "Delhi NCR", "Hyderabad"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="/services"
                        className="hover:text-purple-700 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#171A19]">
                Concierge & Trust
              </h4>
              <ul className="space-y-2 text-xs font-medium">
                {[
                  "Safety & Protocol",
                  "Code of Conduct",
                  "Identity Verification",
                  "Concierge Support",
                  "Emergency Helpline",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="/how-it-works"
                      className="hover:text-purple-700 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#171A19]">
                Institutional
              </h4>
              <ul className="space-y-2 text-xs font-medium">
                {[
                  "Terms of Service",
                  "Privacy Policy",
                  "Platonic Charter",
                  "Partner with Us",
                  "Press & Media",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-purple-700 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-purple-100/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#78817D]">
            <div>
              © 2025 CoFriend Lifestyle Services Pvt. Ltd. Strict Platonic Policy
              Guaranteed. All rights reserved.
            </div>
            <div className="flex items-center gap-1.5 font-medium text-[#555E59]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B47414]" />
              <span>Handcrafted for urban India</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Companion Modal */}
      {activeProfileModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#E0DDD5] relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                setActiveProfileModal(null);
                setBookingSuccess(false);
              }}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-outfit font-bold text-[#171A19]">
                  Movie Request Sent!
                </h3>
                <p className="text-xs text-[#555C58] leading-relaxed">
                  {activeProfileModal.name} has received your movie companionship request for{" "}
                  <strong>{activeProfileModal.locationArea}</strong>. You will receive an OTP confirmation code as soon as they accept.
                </p>
                <button
                  onClick={() => {
                    setActiveProfileModal(null);
                    setBookingSuccess(false);
                  }}
                  className="w-full bg-purple-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-purple-700 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                    <Image
                      src={activeProfileModal.avatar}
                      alt={activeProfileModal.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                      {activeProfileModal.badgeLeft} • {activeProfileModal.locationArea}
                    </span>
                    <h3 className="text-lg font-outfit font-bold text-[#171A19]">
                      {activeProfileModal.name}
                    </h3>
                    <div className="text-xs font-semibold text-purple-700">
                      ₹{activeProfileModal.priceHourly} / hour{" "}
                      <span className="text-[#7A827E] font-normal">
                        ({activeProfileModal.rating.toFixed(2)} ⭐)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#FAFAFD] rounded-xl border border-purple-100/80 text-xs text-[#555C58] space-y-1.5">
                  <div className="flex items-center gap-1.5 font-semibold text-[#171A19]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Multiplex Public Meeting Guarantee</span>
                  </div>
                  <p>
                    Outings take place only in multiplex cinema premises with strict adherence to platonic guidelines.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-xs">
                  <div>
                    <label className="block font-semibold text-[#171A19] mb-1">
                      Select Movie & Multiplex Theater
                    </label>
                    <input
                      type="text"
                      defaultValue="Interstellar Re-release • South City Mall INOX"
                      className="w-full px-3 py-2 rounded-xl border border-[#DCD7CD] bg-white focus:outline-none focus:border-purple-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#171A19] mb-1">
                      Showtime & Duration
                    </label>
                    <input
                      type="datetime-local"
                      defaultValue="2026-09-14T17:30"
                      className="w-full px-3 py-2 rounded-xl border border-[#DCD7CD] bg-white focus:outline-none focus:border-purple-600"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setBookingSuccess(true)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer mt-2"
                >
                  Confirm & Request Movie CoFriend
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Users({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
