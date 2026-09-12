"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  MapPin,
  Star,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Check,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ExploreProfile {
  id: string;
  name: string;
  age: number;
  avatar: string;
  location: string;
  rating: number;
  reviewsCount: number;
  tags: string[];
  languages: string[];
  priceHourly: number;
  minDuration: string;
  statusBadge: string;
  statusBadgeColor: "green" | "gold" | "blue";
  city: string;
  serviceCategory: string;
  feeTier: "under300" | "300to500" | "above500";
}

const ALL_PROFILES: ExploreProfile[] = [
  {
    id: "ananya",
    name: "Ananya Sen",
    age: 27,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    location: "Kolkata • South City & Ballygunge",
    rating: 4.96,
    reviewsCount: 184,
    tags: ["Movie CoFriend", "Art & Heritage"],
    languages: ["English", "Bengali", "Hindi"],
    priceHourly: 350,
    minDuration: "Min. 2 hrs booking",
    statusBadge: "Available Today",
    statusBadgeColor: "green",
    city: "Kolkata",
    serviceCategory: "Cinema & Arts",
    feeTier: "300to500",
  },
  {
    id: "rohan",
    name: "Rohan Nair",
    age: 29,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    location: "Bengaluru • Indiranagar & Koramangala",
    rating: 4.92,
    reviewsCount: 96,
    tags: ["Tech & Coffee Chats", "Board Games"],
    languages: ["English", "Kannada", "Hindi"],
    priceHourly: 450,
    minDuration: "Min. 2 hrs booking",
    statusBadge: "Available Tomorrow",
    statusBadgeColor: "green",
    city: "Bengaluru",
    serviceCategory: "Dining & Social",
    feeTier: "300to500",
  },
  {
    id: "sanya",
    name: "Sanya Kulkarni",
    age: 26,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    location: "Mumbai • Bandra West & Juhu",
    rating: 4.98,
    reviewsCount: 220,
    tags: ["Cinema & IMAX", "Culinary Guide"],
    languages: ["English", "Marathi", "Hindi"],
    priceHourly: 500,
    minDuration: "Min. 3 hrs booking",
    statusBadge: "Available Today",
    statusBadgeColor: "green",
    city: "Mumbai",
    serviceCategory: "Dining & Social",
    feeTier: "300to500",
  },
  {
    id: "vikram",
    name: "Vikram Malhotra",
    age: 31,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    location: "Delhi NCR • Hauz Khas & Saket",
    rating: 4.9,
    reviewsCount: 78,
    tags: ["Heritage Walks", "Dinner Outings"],
    languages: ["English", "Hindi", "Punjabi"],
    priceHourly: 400,
    minDuration: "Min. 2 hrs booking",
    statusBadge: "Next slot: 4 PM",
    statusBadgeColor: "gold",
    city: "Delhi NCR",
    serviceCategory: "Heritage & Culture",
    feeTier: "300to500",
  },
  {
    id: "harika",
    name: "Harika Rao",
    age: 28,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    location: "Hyderabad • Jubilee Hills & Gachibowli",
    rating: 4.95,
    reviewsCount: 112,
    tags: ["Dinner & Cafes", "Art Gallery Companion"],
    languages: ["English", "Telugu", "Hindi"],
    priceHourly: 380,
    minDuration: "Min. 2 hrs booking",
    statusBadge: "Available Today",
    statusBadgeColor: "green",
    city: "Hyderabad",
    serviceCategory: "Cinema & Arts",
    feeTier: "300to500",
  },
  {
    id: "tanmay",
    name: "Tanmay Joshi",
    age: 30,
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    location: "Pune • Baner & Kothrud",
    rating: 4.97,
    reviewsCount: 146,
    tags: ["Trekking & Hiking", "Fitness Outings"],
    languages: ["English", "Marathi", "Hindi"],
    priceHourly: 420,
    minDuration: "Min. 3 hrs booking",
    statusBadge: "This Weekend",
    statusBadgeColor: "green",
    city: "Pune",
    serviceCategory: "Outdoor & Fitness",
    feeTier: "300to500",
  },
  {
    id: "pooja",
    name: "Pooja Hegde",
    age: 27,
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    location: "Bengaluru • Lavelle Road & UB City",
    rating: 4.93,
    reviewsCount: 84,
    tags: ["Curated Shopping", "High Tea Companion"],
    languages: ["English", "Kannada", "Hindi"],
    priceHourly: 550,
    minDuration: "Min. 2 hrs booking",
    statusBadge: "Available Today",
    statusBadgeColor: "green",
    city: "Bengaluru",
    serviceCategory: "Errands & Styling",
    feeTier: "above500",
  },
  {
    id: "devjit",
    name: "Devjit Roy",
    age: 29,
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    location: "Kolkata • Nandan & College Street",
    rating: 4.99,
    reviewsCount: 165,
    tags: ["Cinema & Film Fests", "Bookstore Trails"],
    languages: ["Bengali", "English", "Hindi"],
    priceHourly: 320,
    minDuration: "Min. 2 hrs booking",
    statusBadge: "Tomorrow 5 PM",
    statusBadgeColor: "gold",
    city: "Kolkata",
    serviceCategory: "Cinema & Arts",
    feeTier: "300to500",
  },
];

export default function ExploreCoFriendsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Metros (Pan-India)");
  const [selectedService, setSelectedService] = useState("All Services");
  const [selectedAvailability, setSelectedAvailability] = useState("All Dates");
  const [selectedFee, setSelectedFee] = useState("Any");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedProfile, setSelectedProfile] = useState<ExploreProfile | null>(null);
  const [bookingSent, setBookingSent] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProfiles = useMemo(() => {
    return ALL_PROFILES.filter((p) => {
      const matchSearch =
        searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchCity =
        selectedCity === "All Metros (Pan-India)" || p.city === selectedCity;

      const matchFee =
        selectedFee === "Any" ||
        (selectedFee === "Under ₹300/h" && p.priceHourly < 300) ||
        (selectedFee === "₹300 - ₹500/h" &&
          p.priceHourly >= 300 &&
          p.priceHourly <= 500) ||
        (selectedFee === "₹500+/h" && p.priceHourly > 500);

      const matchLang =
        selectedLanguage === "" ||
        p.languages.some((l) =>
          l.toLowerCase().includes(selectedLanguage.toLowerCase())
        );

      return matchSearch && matchCity && matchFee && matchLang;
    });
  }, [searchQuery, selectedCity, selectedFee, selectedLanguage]);

  return (
    <div className="min-h-screen bg-[#FAFAFD] text-[#1E2421] font-sans antialiased flex flex-col selection:bg-[#F3E8FF] selection:text-[#7C3AED]">
      {/* Top Navbar */}
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
              className="text-[#171A19] font-semibold py-1 border-b-2 border-purple-600"
            >
              Explore CoFriends
            </Link>
            <Link
              href="/available-now"
              className="transition-colors hover:text-[#171A19] py-1"
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

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-8">
        {/* Breadcrumb & Hero Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-medium text-[#737A76]">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&gt;</span>
            <span className="text-[#171A19] font-semibold">Explore CoFriends</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCECE8] border border-[#F6D0C7] text-purple-700 text-[11px] font-bold tracking-wider uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Platonic Lifestyle Concierge • India</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-outfit tracking-tight text-[#171A19]">
                Meet verified CoFriends for your next experience.
              </h1>

              <p className="text-[#555C58] text-xs sm:text-sm max-w-2xl leading-relaxed">
                Discover courteous, passionate, and Aadhaar-verified Indian companions
                across Kolkata, Bengaluru, Mumbai, Delhi NCR, and Hyderabad for art tours,
                premiere cinema, dining, and city leisure.
              </p>
            </div>

            {/* 3 Stat Badges Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-purple-100/80 shadow-xs shrink-0 grid grid-cols-3 gap-4 sm:gap-6 text-center lg:min-w-[420px]">
              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-outfit font-bold text-[#171A19]">
                  1,200+
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#737A76]">
                  Verified Fellows
                </div>
              </div>

              <div className="space-y-0.5 border-x border-[#F0EEE7] px-2">
                <div className="text-xl sm:text-2xl font-outfit font-bold text-[#171A19] flex items-center justify-center gap-1">
                  <span>4.92</span>
                  <span className="text-xs font-normal text-[#737A76]">/5</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#737A76]">
                  Average Rating
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-outfit font-bold text-[#171A19]">
                  18,400+
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#737A76]">
                  Completed Outings
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Multi-Filter Control Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-purple-100/80 shadow-xs space-y-4">
          {/* Search Inputs Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            <div className="md:col-span-6 relative flex items-center">
              <Search className="w-4 h-4 text-[#8A918D] absolute left-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by hobby, interest, cinema, food, outdoor, language..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAFAFD] border border-[#E5E2DA] rounded-xl text-xs sm:text-sm text-[#1E2421] placeholder-[#8A918D] focus:outline-none focus:border-purple-600"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mr-3 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* City Dropdown */}
            <div className="md:col-span-3 flex items-center gap-2 px-3 py-2 bg-[#FAFAFD] rounded-xl border border-[#E5E2DA]">
              <MapPin className="w-4 h-4 text-purple-700 shrink-0" />
              <div className="flex-1 overflow-hidden">
                <div className="text-[9px] font-bold uppercase text-[#737A76]">
                  City:
                </div>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-[#171A19] focus:outline-none cursor-pointer"
                >
                  <option>All Metros (Pan-India)</option>
                  <option>Kolkata</option>
                  <option>Bengaluru</option>
                  <option>Mumbai</option>
                  <option>Delhi NCR</option>
                  <option>Hyderabad</option>
                  <option>Pune</option>
                </select>
              </div>
            </div>

            {/* Service Dropdown */}
            <div className="md:col-span-3 flex items-center gap-2 px-3 py-2 bg-[#FAFAFD] rounded-xl border border-[#E5E2DA]">
              <Sparkles className="w-4 h-4 text-purple-700 shrink-0" />
              <div className="flex-1 overflow-hidden">
                <div className="text-[9px] font-bold uppercase text-[#737A76]">
                  Service:
                </div>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-[#171A19] focus:outline-none cursor-pointer"
                >
                  <option>All Services</option>
                  <option>Cinema & IMAX</option>
                  <option>Dining & Social</option>
                  <option>Outdoor & Fitness</option>
                  <option>Heritage & Culture</option>
                  <option>Curated Shopping</option>
                </select>
              </div>
            </div>
          </div>

          {/* Secondary Filter Chips Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#F2EFE8] text-xs">
            {/* Availability */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-bold uppercase text-[#737A76] mr-1">
                Availability:
              </span>
              {[
                "All Dates",
                "Available Today",
                "Available Tomorrow",
                "This Weekend",
              ].map((item) => {
                const isActive = selectedAvailability === item;
                return (
                  <button
                    key={item}
                    onClick={() => setSelectedAvailability(item)}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                      isActive
                        ? "bg-[#171A19] text-white"
                        : "bg-[#FAFAFD] text-[#555C58] hover:bg-[#EAE7DD] border border-purple-100/80"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Fee */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] font-bold uppercase text-[#737A76] mr-1">
                Fee:
              </span>
              {["Any", "Under ₹300/h", "₹300 - ₹500/h", "₹500+/h"].map((item) => {
                const isActive = selectedFee === item;
                return (
                  <button
                    key={item}
                    onClick={() => setSelectedFee(item)}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                      isActive
                        ? "bg-purple-600 text-white font-semibold"
                        : "bg-[#FAFAFD] text-[#555C58] hover:bg-[#EAE7DD] border border-purple-100/80"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold uppercase text-[#737A76]">
                Sort:
              </span>
              <span className="font-semibold text-[#171A19]">
                Top Rated (Highest Reviews)
              </span>
            </div>
          </div>

          {/* Languages Chips Row */}
          <div className="flex items-center gap-2 pt-2 border-t border-[#F5F3EB] flex-wrap text-xs">
            <span className="text-[10px] font-bold uppercase text-[#737A76]">
              Languages:
            </span>
            {["English", "Hindi", "Bengali", "Kannada", "Marathi", "Telugu"].map(
              (lang) => {
                const isActive = selectedLanguage === lang;
                return (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(isActive ? "" : lang)}
                    className={`px-2.5 py-0.5 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                      isActive
                        ? "bg-[#FCECE8] text-purple-700 font-bold border border-[#F6D0C7]"
                        : "bg-[#FAFAFD] text-[#555C58] hover:bg-[#EAE7DD] border border-purple-100/80"
                    }`}
                  >
                    {lang}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-[#555C58]">
            Showing {filteredProfiles.length} featured CoFriends ready for concierge
            bookings
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EBF7EE] text-[#1E7E34] text-[11px] font-bold border border-[#CEEAD6]">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% In-Person Platonic Safety Monitored
          </span>
        </div>

        {/* Row 1: 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredProfiles.slice(0, 4).map((p) => (
            <ProfileCard
              key={p.id}
              profile={p}
              onBook={() => setSelectedProfile(p)}
            />
          ))}
        </div>

        {/* Middle Banner: Why Urban India Trusts CoFriend.in */}
        <div className="bg-[#FAF5FF] rounded-3xl p-6 sm:p-8 border border-purple-100/80 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-2">
              <div className="text-[10.5px] font-bold uppercase tracking-widest text-[#B47414]">
                The CoFriend Platonic Standard
              </div>
              <h2 className="text-2xl font-outfit font-bold text-[#171A19]">
                Why Urban India Trusts CoFriend.in
              </h2>
              <p className="text-xs text-[#555C58] leading-relaxed">
                We provide dignified social companionship free from awkward
                matrimonial pressure or online dating dynamics.
              </p>
            </div>

            {/* Right 3 Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-4 border border-[#E5E2DA] shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#EBF7EE] text-[#1E7E34] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-outfit font-bold text-[#171A19]">
                  Dual ID Verification
                </h4>
                <p className="text-[11px] text-[#555C58] leading-relaxed">
                  Every CoFriend undergoes government Aadhaar KYC, social
                  background verification, and identity audits.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-[#E5E2DA] shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#FEF6E9] text-[#B47414] flex items-center justify-center">
                  <Lock className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-outfit font-bold text-[#171A19]">
                  Strictly Platonic
                </h4>
                <p className="text-[11px] text-[#555C58] leading-relaxed">
                  Ironclad zero-tolerance code of conduct. Designed solely for
                  shared activities, events, travel, and cultural outings.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-[#E5E2DA] shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-full bg-[#FCECE8] text-purple-700 flex items-center justify-center">
                  <Headphones className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-outfit font-bold text-[#171A19]">
                  Concierge Helpline
                </h4>
                <p className="text-[11px] text-[#555C58] leading-relaxed">
                  Live location check-ins and an active 24×7 support desk
                  supervising all confirmed bookings across metros.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredProfiles.slice(4, 8).map((p) => (
            <ProfileCard
              key={p.id}
              profile={p}
              onBook={() => setSelectedProfile(p)}
            />
          ))}
        </div>

        {/* Pagination & Jump Bar */}
        <div className="bg-white rounded-2xl p-4 border border-purple-100/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-[#737A76]">
            Showing 1-8 of 1,248 verified CoFriends
          </span>

          <div className="flex items-center gap-1.5 font-semibold">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="p-1.5 rounded-lg border border-purple-100/80 hover:bg-[#FAFAFD] text-[#555C58] cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage(1)}
              className={`w-8 h-8 rounded-lg ${
                currentPage === 1
                  ? "bg-purple-600 text-white"
                  : "border border-purple-100/80 text-[#171A19]"
              }`}
            >
              1
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className={`w-8 h-8 rounded-lg ${
                currentPage === 2
                  ? "bg-purple-600 text-white"
                  : "border border-purple-100/80 text-[#171A19]"
              }`}
            >
              2
            </button>
            <button
              onClick={() => setCurrentPage(3)}
              className={`w-8 h-8 rounded-lg ${
                currentPage === 3
                  ? "bg-purple-600 text-white"
                  : "border border-purple-100/80 text-[#171A19]"
              }`}
            >
              3
            </button>
            <span className="px-1 text-[#737A76]">...</span>
            <button
              onClick={() => setCurrentPage(156)}
              className="w-8 h-8 rounded-lg border border-purple-100/80 text-[#171A19]"
            >
              156
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="p-1.5 rounded-lg border border-purple-100/80 hover:bg-[#FAFAFD] text-[#555C58] cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#737A76]">Go to page:</span>
            <input
              type="text"
              defaultValue="1"
              className="w-10 px-2 py-1 border border-purple-100/80 rounded-lg text-center font-semibold text-[#171A19] focus:outline-none"
            />
          </div>
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

      {/* Booking Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#E0DDD5] relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                setSelectedProfile(null);
                setBookingSent(false);
              }}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSent ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-outfit font-bold text-[#171A19]">
                  Request Sent to {selectedProfile.name}!
                </h3>
                <p className="text-xs text-[#555C58] leading-relaxed">
                  {selectedProfile.name} in {selectedProfile.city} will review your
                  activity schedule. An OTP verification handshake will be
                  initiated upon mutual acceptance.
                </p>
                <button
                  onClick={() => {
                    setSelectedProfile(null);
                    setBookingSent(false);
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
                      src={selectedProfile.avatar}
                      alt={selectedProfile.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                      Aadhaar Verified • {selectedProfile.location}
                    </span>
                    <h3 className="text-lg font-outfit font-bold text-[#171A19]">
                      {selectedProfile.name},{" "}
                      <span className="text-sm font-normal text-[#737A76]">
                        Age {selectedProfile.age}
                      </span>
                    </h3>
                    <div className="text-xs font-semibold text-purple-700">
                      ₹{selectedProfile.priceHourly} / hour{" "}
                      <span className="text-[#7A827E] font-normal">
                        ({selectedProfile.minDuration})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#FAFAFD] rounded-xl border border-purple-100/80 text-xs text-[#555C58] space-y-1.5">
                  <div className="flex items-center gap-1.5 font-semibold text-[#171A19]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Platonic Outing Assurance</span>
                  </div>
                  <p>
                    All outings follow strict platonic guidelines with RBI escrow
                    protection.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-xs">
                  <div>
                    <label className="block font-semibold text-[#171A19] mb-1">
                      Outing Plan / Activity
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedProfile.tags.join(" & ")}
                      className="w-full px-3 py-2 rounded-xl border border-[#DCD7CD] bg-white focus:outline-none focus:border-purple-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#171A19] mb-1">
                      Preferred Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      defaultValue="2026-09-14T16:00"
                      className="w-full px-3 py-2 rounded-xl border border-[#DCD7CD] bg-white focus:outline-none focus:border-purple-600"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setBookingSent(true)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer mt-2"
                >
                  Confirm & Request CoFriend
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ProfileCard({
  profile,
  onBook,
}: {
  profile: ExploreProfile;
  onBook: () => void;
}) {
  return (
    <div className="bg-white rounded-2xl border border-purple-100/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
      {/* Thumbnail */}
      <div className="relative aspect-[4/4.8] w-full bg-stone-200 overflow-hidden">
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Status Badge */}
        <div className="absolute top-2.5 left-2.5">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold backdrop-blur-md shadow-xs ${
              profile.statusBadgeColor === "gold"
                ? "bg-amber-400/90 text-amber-950"
                : "bg-black/60 text-white"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                profile.statusBadgeColor === "gold" ? "bg-amber-800" : "bg-emerald-400"
              }`}
            />
            <span>{profile.statusBadge}</span>
          </span>
        </div>

        {/* Bottom Rating on Image */}
        <div className="absolute bottom-2.5 right-2.5">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white">
            <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
            <span>{profile.rating.toFixed(2)}</span>
            <span className="text-stone-300 font-normal">
              ({profile.reviewsCount})
            </span>
          </span>
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-outfit font-bold text-[#171A19]">
                  {profile.name}
                </h3>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              </div>
              <span className="text-xs text-[#737A76]">Age {profile.age}</span>
            </div>
            <div className="text-[11px] text-[#737A76] truncate mt-0.5">
              📍 {profile.location}
            </div>
          </div>

          {/* Activity Tags */}
          <div className="flex flex-wrap gap-1">
            {profile.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-[#FAFAFD] border border-purple-100/80 text-[10px] font-semibold text-[#4D5350]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Languages */}
          <div className="text-[11px] text-[#555C58]">
            Languages: {profile.languages.join(", ")}
          </div>
        </div>

        {/* Price & Book CTA */}
        <div className="pt-3 border-t border-[#F2EFE8] flex items-center justify-between">
          <div>
            <div className="text-base font-bold text-[#171A19]">
              ₹{profile.priceHourly}
              <span className="text-[11px] font-normal text-[#737A76]"> / hr</span>
            </div>
            <div className="text-[10px] text-[#737A76]">{profile.minDuration}</div>
          </div>

          {profile.id === "ananya" ? (
            <Link
              href="/profile/ananya-sharma"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-xs active:scale-98 cursor-pointer text-center"
            >
              Book
            </Link>
          ) : (
            <button
              onClick={onBook}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-xs active:scale-98 cursor-pointer"
            >
              Book
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
