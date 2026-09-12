"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  MapPin,
  SlidersHorizontal,
  Star,
  Clock,
  ShieldCheck,
  Film,
  UtensilsCrossed,
  Mountain,
  Wine,
  ShoppingBag,
  Landmark,
  Music,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  X,
  ChevronDown,
} from "lucide-react";

interface CompanionCard {
  id: string;
  category: string;
  categoryTag: string;
  categoryIcon: React.ReactNode;
  categoryPillType: "dark" | "green" | "amber" | "light";
  minDuration: string;
  title: string;
  rating: number;
  reviewsCount: number;
  description: string;
  priceHourly: number;
  imageUrl: string;
  city: string[];
}

interface CityCurations {
  city: string;
  badge: string;
  title: string;
  description: string;
  verifiedCount: number;
  languages: string;
  avgRate: number;
  topNeighborhoods: string;
  neighborhoodDesc: string;
  fastestResponse: string;
  mapCoords: { x: number; y: number; label: string }[];
}

const COMPANIONS: CompanionCard[] = [
  {
    id: "movie",
    category: "Entertainment & Arts",
    categoryTag: "Entertainment",
    categoryIcon: <Film className="w-3.5 h-3.5" />,
    categoryPillType: "light",
    minDuration: "Min 2.5 hrs",
    title: "Movie CoFriend",
    rating: 4.9,
    reviewsCount: 420,
    description:
      "Never watch a premiere alone. Find fellow cinephiles for film festivals, multiplex outings, and post-movie discussions.",
    priceHourly: 300,
    imageUrl:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80",
    city: ["Kolkata", "Bengaluru", "Mumbai", "Delhi NCR", "Hyderabad"],
  },
  {
    id: "childcare",
    category: "Errands & Styling",
    categoryTag: "Aadhaar + Police Checked",
    categoryIcon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />,
    categoryPillType: "green",
    minDuration: "Min 3 hrs",
    title: "Childcare CoFriend",
    rating: 5.0,
    reviewsCount: 210,
    description:
      "Gentle, certified, and vetted companions for kid activities, museum trips, and playful educational engagement.",
    priceHourly: 350,
    imageUrl:
      "https://images.unsplash.com/photo-1596464716127-f2a829822321?auto=format&fit=crop&w=800&q=80",
    city: ["Kolkata", "Bengaluru", "Mumbai", "Delhi NCR", "Hyderabad"],
  },
  {
    id: "cooking",
    category: "Dining & Culinary",
    categoryTag: "Culinary Arts",
    categoryIcon: <UtensilsCrossed className="w-3.5 h-3.5" />,
    categoryPillType: "light",
    minDuration: "Min 2 hrs",
    title: "Cooking CoFriend",
    rating: 4.9,
    reviewsCount: 190,
    description:
      "Explore traditional Indian recipes and culinary weekend workshops with passionate home-chefs and foodies.",
    priceHourly: 400,
    imageUrl:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    city: ["Kolkata", "Bengaluru", "Mumbai", "Delhi NCR"],
  },
  {
    id: "trekking",
    category: "Outdoor & Fitness",
    categoryTag: "Fitness & Trail",
    categoryIcon: <Mountain className="w-3.5 h-3.5" />,
    categoryPillType: "light",
    minDuration: "Min 4 hrs",
    title: "Trekking CoFriend",
    rating: 4.8,
    reviewsCount: 140,
    description:
      "Trail-ready fitness enthusiasts to accompany you on Western Ghats hikes, morning walks, or nature trails.",
    priceHourly: 300,
    imageUrl:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    city: ["Bengaluru", "Mumbai", "Delhi NCR", "Hyderabad"],
  },
  {
    id: "dinner",
    category: "Dining & Culinary",
    categoryTag: "Social Dining",
    categoryIcon: <Wine className="w-3.5 h-3.5" />,
    categoryPillType: "light",
    minDuration: "Min 2 hrs",
    title: "Weekend Dinner CoFriend",
    rating: 4.9,
    reviewsCount: 540,
    description:
      "Discover rooftop cafes, heritage restaurants, and foodie hubs with a courteous companion.",
    priceHourly: 350,
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    city: ["Kolkata", "Bengaluru", "Mumbai", "Delhi NCR", "Hyderabad"],
  },
  {
    id: "shopping",
    category: "Errands & Styling",
    categoryTag: "Styling & Brands",
    categoryIcon: <ShoppingBag className="w-3.5 h-3.5" />,
    categoryPillType: "light",
    minDuration: "Min 2 hrs",
    title: "Shopping & Styling CoFriend",
    rating: 4.7,
    reviewsCount: 180,
    description:
      "Get honest fashion feedback, navigation assistance through bustling bazaars or high-end malls.",
    priceHourly: 250,
    imageUrl:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    city: ["Kolkata", "Bengaluru", "Mumbai", "Delhi NCR"],
  },
  {
    id: "travel",
    category: "Entertainment & Arts",
    categoryTag: "Heritage & Walk",
    categoryIcon: <Landmark className="w-3.5 h-3.5" />,
    categoryPillType: "light",
    minDuration: "Min 3 hrs",
    title: "Travel & City Tour CoFriend",
    rating: 4.9,
    reviewsCount: 610,
    description:
      "Local insiders who know every street corner, historical landmark, and cultural treasure.",
    priceHourly: 450,
    imageUrl:
      "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80",
    city: ["Kolkata", "Bengaluru", "Mumbai", "Delhi NCR", "Hyderabad"],
  },
  {
    id: "concert",
    category: "Entertainment & Arts",
    categoryTag: "Concerts & Gigs",
    categoryIcon: <Music className="w-3.5 h-3.5" />,
    categoryPillType: "light",
    minDuration: "Min 2.5 hrs",
    title: "Event & Concert CoFriend",
    rating: 4.9,
    reviewsCount: 580,
    description:
      "Music festivals, indie gigs, tech summits, or art fairs. Go with an enthusiast who shares your vibe.",
    priceHourly: 350,
    imageUrl:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    city: ["Kolkata", "Bengaluru", "Mumbai", "Delhi NCR", "Hyderabad"],
  },
];

const CATEGORY_TABS = [
  { id: "all", label: "All Services (8)" },
  { id: "Entertainment & Arts", label: "Entertainment & Arts" },
  { id: "Outdoor & Fitness", label: "Outdoor & Fitness" },
  { id: "Dining & Culinary", label: "Dining & Culinary" },
  { id: "Errands & Styling", label: "Errands & Styling" },
];

const METRO_CITIES: Record<string, CityCurations> = {
  Kolkata: {
    city: "Kolkata",
    badge: "Trending Pairing #1",
    title: "Nandan Cinema & Park Street Heritage Dinner",
    description:
      "Spend a classic cultural Sunday in Kolkata. Catch an indie art festival screening at Nandan followed by warm discussions over Chelo Kebabs on historic Park Street.",
    verifiedCount: 48,
    languages: "Bengali & English",
    avgRate: 320,
    topNeighborhoods: "South Kolkata & Salt Lake",
    neighborhoodDesc:
      "Bookings for art gallery walks, Victoria Memorial strolls, and cafe conversations.",
    fastestResponse: "18 mins",
    mapCoords: [
      { x: 42, y: 35, label: "Salt Lake Sector V" },
      { x: 30, y: 55, label: "Park Street" },
      { x: 26, y: 65, label: "Nandan & Rabindra Sadan" },
      { x: 38, y: 80, label: "Ballygunge & Gariahat" },
    ],
  },
  Bengaluru: {
    city: "Bengaluru",
    badge: "Tech & Coffee Trail #1",
    title: "Cubbon Park Walk & Indiranagar Microbrewery",
    description:
      "Start with a serene morning photography walk across Cubbon Park bamboo groves, then explore artisan coffee and microbrewery tastings in Indiranagar 100ft Road.",
    verifiedCount: 64,
    languages: "Kannada & English",
    avgRate: 350,
    topNeighborhoods: "Indiranagar & Koramangala",
    neighborhoodDesc:
      "High demand for board game buddies, live music accompaniments, and tech summit meetups.",
    fastestResponse: "12 mins",
    mapCoords: [
      { x: 35, y: 40, label: "Cubbon Park" },
      { x: 60, y: 45, label: "Indiranagar" },
      { x: 55, y: 70, label: "Koramangala 4th Block" },
      { x: 25, y: 60, label: "Jayanagar" },
    ],
  },
  Mumbai: {
    city: "Mumbai",
    badge: "Sunset & Sea Trail #1",
    title: "Marine Drive Promenade & Kala Ghoda Art Cafe",
    description:
      "Breeze along Queen's Necklace at dusk, browse indie art galleries at Kala Ghoda, and enjoy authentic Parsi cuisine at iconic Britannia & Co.",
    verifiedCount: 82,
    languages: "Hindi, Marathi & English",
    avgRate: 380,
    topNeighborhoods: "Bandra West & South Bombay",
    neighborhoodDesc:
      "Popular for theater companions at NCPA, stand-up comedy shows, and Bandra boutique shopping.",
    fastestResponse: "15 mins",
    mapCoords: [
      { x: 30, y: 30, label: "Bandra Bandstand" },
      { x: 40, y: 65, label: "Marine Drive" },
      { x: 48, y: 75, label: "Kala Ghoda" },
      { x: 52, y: 85, label: "Colaba Causeway" },
    ],
  },
  "Delhi NCR": {
    city: "Delhi NCR",
    badge: "Heritage & Culinary #1",
    title: "Lodhi Art District & Khan Market Bistro Evening",
    description:
      "Discover vibrant mural street art at Lodhi Colony, followed by bookstore browsing and Italian cafe dinners in Khan Market with an art aficionado.",
    verifiedCount: 75,
    languages: "Hindi & English",
    avgRate: 360,
    topNeighborhoods: "Hauz Khas & Connaught Place",
    neighborhoodDesc:
      "Top choices for monument heritage walks, Dilli Haat shopping, and live indie concerts.",
    fastestResponse: "20 mins",
    mapCoords: [
      { x: 45, y: 30, label: "Connaught Place" },
      { x: 48, y: 50, label: "Lodhi Art District" },
      { x: 55, y: 60, label: "Khan Market" },
      { x: 35, y: 75, label: "Hauz Khas Village" },
    ],
  },
  Hyderabad: {
    city: "Hyderabad",
    badge: "Biryani & Heritage #1",
    title: "Charminar Heritage Walk & Jubilee Hills Lounge",
    description:
      "Immerse in Old City culture with legendary Irani chai at Nimrah, followed by sunset drives through Jubilee Hills scenic rock parks and cafes.",
    verifiedCount: 52,
    languages: "Telugu, Hindi & English",
    avgRate: 310,
    topNeighborhoods: "Jubilee Hills & Hitec City",
    neighborhoodDesc:
      "Preferred for weekend badminton partners, food trails, and cultural comedy festivals.",
    fastestResponse: "16 mins",
    mapCoords: [
      { x: 30, y: 40, label: "Hitec City" },
      { x: 45, y: 45, label: "Jubilee Hills" },
      { x: 55, y: 60, label: "Hussain Sagar" },
      { x: 60, y: 80, label: "Charminar Old City" },
    ],
  },
};

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Metro Hubs (India)");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMetro, setSelectedMetro] = useState("Kolkata");
  const [bookingModalCompanion, setBookingModalCompanion] = useState<CompanionCard | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const filteredCompanions = useMemo(() => {
    return COMPANIONS.filter((item) => {
      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      const matchesLocation =
        selectedLocation === "All Metro Hubs (India)" ||
        item.city.includes(selectedLocation);

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [searchQuery, selectedCategory, selectedLocation]);

  const activeCuration = METRO_CITIES[selectedMetro] || METRO_CITIES["Kolkata"];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1E2421] font-sans antialiased flex flex-col selection:bg-[#F2DDD7] selection:text-[#832913]">
      {/* Top Notice Bar */}
      <div className="bg-[#FFF9E6] border-b border-[#F4E3A8] px-4 py-1.5 text-center text-[11px] sm:text-xs font-semibold text-[#8F6200] tracking-wide flex items-center justify-center gap-2">
        <span>🛡 100% STRICT PLATONIC & IDENTITY VERIFIED NETWORK • ALL COMPANIONS GO THROUGH 4-STEP POLICE & AADHAAR BACKGROUND CHECKS</span>
      </div>

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#EAE8E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-baseline group">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#171A19]">
                CoFriend
              </span>
              <span className="font-sans text-xl font-bold text-[#A8381E]">
                .in
              </span>
            </Link>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[14.5px] font-medium text-[#4D5350]">
            <Link
              href="/"
              className="transition-colors hover:text-[#171A19] py-1"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-[#171A19] font-semibold py-1 border-b-2 border-[#A8381E]"
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

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <Link href="/#become-cofriend" className="bg-[#9E331A] hover:bg-[#852A14] text-white px-4.5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow active:scale-98 flex items-center gap-2">
              <span>Become a CoFriend</span>
            </Link>
            <div className="w-9 h-9 rounded-full bg-[#E5DFD4] border border-[#D5CDBC] flex items-center justify-center text-xs font-semibold text-[#5A5043] cursor-pointer hover:bg-[#DDD6C9] transition-colors">
              <span>JD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 space-y-12">
        {/* Breadcrumb & Hero Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-medium text-[#737A76]">
            <Link href="/" className="hover:underline">🏠 Home</Link>
            <span>/</span>
            <span className="text-[#1E2421] font-semibold">Services</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCECE8] border border-[#F6D0C7] text-[#9E331A] text-[11px] font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E331A] animate-pulse"></span>
            <span>Curated Catalog • 100% Platonic & Identity Verified</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-serif tracking-tight text-[#171A19]">
              Find the right{" "}
              <span className="font-serif italic text-[#9E331A] font-normal">
                CoFriend
              </span>{" "}
              for your plans
            </h1>
            <p className="text-[#555C58] text-sm sm:text-base max-w-3xl leading-relaxed">
              Choose from our verified lifestyle companion services. Handpicked,
              background-checked Indian professionals ready to accompany your
              outings, hobbies, and city activities.
            </p>
          </div>
        </div>

        {/* Search & Location Bar */}
        <div className="bg-white rounded-2xl shadow-xs border border-[#E7E4DC] p-2.5 sm:p-3 space-y-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2">
            {/* Search Input */}
            <div className="relative flex-1 flex items-center">
              <Search className="w-4 h-4 text-[#8A918D] absolute left-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by plan, e.g. 'Multiplex movie', 'Weekend trek' ..."
                className="w-full pl-10 pr-4 py-2.5 text-sm text-[#1E2421] placeholder-[#8A918D] bg-transparent focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mr-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="hidden md:block w-px h-8 bg-[#E7E4DC]" />

            {/* Location Dropdown */}
            <div className="relative min-w-[240px]">
              <button
                type="button"
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-[#FAF9F5] rounded-xl transition-colors"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <MapPin className="w-4 h-4 text-[#9E331A] shrink-0" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#8A918D]">
                      Location
                    </div>
                    <div className="text-xs font-semibold text-[#1E2421] truncate">
                      {selectedLocation}
                    </div>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-[#8A918D] shrink-0 ml-2" />
              </button>

              {/* Location Menu Dropdown */}
              {isLocationOpen && (
                <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-xl shadow-lg border border-[#E7E4DC] py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                  {[
                    "All Metro Hubs (India)",
                    "Kolkata",
                    "Bengaluru",
                    "Mumbai",
                    "Delhi NCR",
                    "Hyderabad",
                  ].map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedLocation(city);
                        setIsLocationOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs font-medium transition-colors flex items-center justify-between ${
                        selectedLocation === city
                          ? "bg-[#FDF4F1] text-[#9E331A] font-semibold"
                          : "text-[#3D4440] hover:bg-[#FAF9F5]"
                      }`}
                    >
                      <span>{city}</span>
                      {selectedLocation === city && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#9E331A]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Find Companions Action Button */}
            <button
              onClick={() => {
                const el = document.getElementById("catalog-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#9E331A] hover:bg-[#852A14] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer active:scale-98"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Find Companions</span>
            </button>
          </div>

          {/* Quick Filter Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#F0EEE7]">
            {CATEGORY_TABS.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-[#1E2421] text-white shadow-xs"
                      : "bg-[#F5F3EB] text-[#4F5552] hover:bg-[#EAE7DD] border border-[#E8E5DD]"
                  }`}
                >
                  {tab.id === "all" && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive ? "bg-emerald-400" : "bg-[#8A918D]"
                      }`}
                    />
                  )}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Available Companion Formats Header */}
        <section id="catalog-section" className="space-y-6 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#171A19]">
                Available Companion Formats
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBF7EE] text-[#1E7E34] text-xs font-semibold border border-[#CEEAD6]">
                8 Categories
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F4F1] border border-[#E3E5DF] text-[#555E59] text-[11px] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>
                Strictly non-romantic, certified professional chaperones & buddies
              </span>
            </div>
          </div>

          {/* 8 Cards Grid */}
          {filteredCompanions.length === 0 ? (
            <div className="bg-white rounded-2xl border border-dashed border-[#DDD7CD] p-12 text-center space-y-3">
              <p className="text-base font-semibold text-[#1E2421]">
                No companion format found matching your filters.
              </p>
              <p className="text-xs text-[#7A827E]">
                Try adjusting your search query, location, or service category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedLocation("All Metro Hubs (India)");
                }}
                className="mt-2 text-xs font-semibold text-[#9E331A] hover:underline"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredCompanions.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl border border-[#E7E4DC] overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col group"
                >
                  {/* Card Thumbnail with Badges */}
                  <div className="relative aspect-[16/10] w-full bg-stone-200 overflow-hidden">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Top-Left Category Tag */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      {card.categoryPillType === "green" ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-semibold text-[#1D7438] shadow-xs border border-emerald-100">
                          {card.categoryIcon}
                          <span>{card.categoryTag}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-[11px] font-medium text-white shadow-xs">
                          {card.categoryIcon}
                          <span>{card.categoryTag}</span>
                        </span>
                      )}
                    </div>

                    {/* Bottom-Right Duration Tag */}
                    <div className="absolute bottom-2.5 right-2.5 z-10">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-medium text-white/95">
                        <Clock className="w-2.5 h-2.5" />
                        <span>{card.minDuration}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-serif font-bold text-[#171A19] group-hover:text-[#9E331A] transition-colors leading-snug">
                          {card.title}
                        </h3>
                        <div className="flex items-center gap-1 shrink-0 text-xs font-semibold text-[#1E2421]">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{card.rating.toFixed(1)}</span>
                          <span className="text-[10px] font-normal text-[#7A827E]">
                            ({card.reviewsCount}+)
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-[#555C58] line-clamp-3 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Card Footer: Price & Book Button */}
                    <div className="pt-2 border-t border-[#F2EFE8] flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-[#7A827E] uppercase tracking-wider">
                          Starting at
                        </div>
                        <div className="text-base font-bold text-[#9E331A]">
                          ₹{card.priceHourly}
                          <span className="text-xs font-normal text-[#555C58]">
                            {" "}
                            / hr
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setBookingModalCompanion(card)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FAF9F5] hover:bg-[#F2DDD7] text-[#1E2421] hover:text-[#9E331A] text-xs font-semibold border border-[#E7E4DC] hover:border-[#E5B5A8] transition-all cursor-pointer"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Section: Popular Near You (Sage / Off-White Panel) */}
        <section className="bg-[#EFF2EB] rounded-3xl p-5 sm:p-7 md:p-8 space-y-6 border border-[#E2E6DC]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#667269]">
                Local Curations
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171A19]">
                Popular Near You
              </h2>
              <p className="text-xs sm:text-sm text-[#5C665F]">
                Top trending pairings and verified fellows in India&apos;s leading
                metros.
              </p>
            </div>

            {/* Metro Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#E2E6DC]/80 p-1 rounded-full border border-[#D5DCD0]">
              {Object.keys(METRO_CITIES).map((city) => {
                const isActive = selectedMetro === city;
                return (
                  <button
                    key={city}
                    onClick={() => setSelectedMetro(city)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#9E331A] text-white shadow-xs"
                        : "text-[#4A544D] hover:text-[#171A19] hover:bg-white/60"
                    }`}
                  >
                    {city}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Curation Pairings Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Featured Card */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-6 border border-[#E0DDD5] flex flex-col justify-between shadow-xs space-y-4">
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#FEF6E9] text-[#B47414] text-[11px] font-bold tracking-wide border border-[#FDE5BE]">
                  {activeCuration.badge}
                </span>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#171A19] leading-snug">
                  {activeCuration.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555C58] leading-relaxed">
                  {activeCuration.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-md bg-[#FAF9F5] text-[#3E4541] text-xs font-medium border border-[#E7E4DC]">
                    {activeCuration.verifiedCount} Verified Companions
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#FAF9F5] text-[#3E4541] text-xs font-medium border border-[#E7E4DC]">
                    {activeCuration.languages}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#FAF9F5] text-[#3E4541] text-xs font-medium border border-[#E7E4DC]">
                    Average ₹{activeCuration.avgRate}/hr
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F0EEE7] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setSelectedLocation(activeCuration.city);
                    const el = document.getElementById("catalog-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#9E331A] hover:bg-[#852A14] text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-98"
                >
                  <span>Find {activeCuration.city} Companions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-1.5 text-xs text-[#555C58]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="font-medium">100% Background Check</span>
                </div>
              </div>
            </div>

            {/* Right Map & Neighborhood Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-4 sm:p-5 border border-[#E0DDD5] flex flex-col justify-between shadow-xs space-y-3">
              {/* Visual Map Render with Pins */}
              <div className="relative aspect-[16/9] w-full rounded-xl bg-[#E8EFE9] overflow-hidden border border-[#D8E1D9] flex items-center justify-center p-2">
                <svg
                  className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="grid-pattern-serv"
                      width="24"
                      height="24"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 24 0 L 0 0 0 24"
                        fill="none"
                        stroke="#CAD4CB"
                        strokeWidth="0.8"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-pattern-serv)" />
                  <path
                    d="M 20 180 Q 90 90 180 120 T 320 20"
                    fill="none"
                    stroke="#B4C9D9"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 10 70 Q 120 130 260 80 T 400 130"
                    fill="none"
                    stroke="#D2DFD4"
                    strokeWidth="4"
                  />
                </svg>

                {activeCuration.mapCoords.map((pin, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  >
                    <div className="flex items-center gap-1 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-full shadow-md border border-[#CCD8CD] hover:border-[#9E331A] transition-all">
                      <div className="w-2 h-2 rounded-full bg-[#9E331A] animate-ping opacity-75" />
                      <span className="text-[9.5px] font-bold text-[#1E2421] whitespace-nowrap">
                        {pin.label}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-white/90 text-[10px] font-bold text-[#444D46] shadow-xs">
                  📍 {activeCuration.city} Metro Map
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#8A918D]">
                  Top Neighborhoods
                </div>
                <h4 className="text-base font-serif font-bold text-[#171A19]">
                  {activeCuration.topNeighborhoods}
                </h4>
                <p className="text-xs text-[#555C58] leading-relaxed">
                  {activeCuration.neighborhoodDesc}
                </p>
              </div>

              <div className="pt-2 border-t border-[#F0EEE7] flex items-center justify-between text-xs">
                <div className="text-[#555C58]">
                  Fastest Response:{" "}
                  <span className="font-semibold text-[#171A19]">
                    ~{activeCuration.fastestResponse}
                  </span>
                </div>
                <button
                  onClick={() =>
                    alert(
                      `Displaying interactive verified map zones for ${activeCuration.city}.`
                    )
                  }
                  className="font-semibold text-[#9E331A] hover:underline cursor-pointer"
                >
                  View Area Map
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Institutional Verification Standard */}
        <section className="bg-white rounded-3xl border border-[#E7E4DC] p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8">
            <div className="lg:max-w-xl space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF7EE] text-[#1E7E34] text-xs font-semibold border border-[#CEEAD6]">
                <ShieldCheck className="w-4 h-4 text-[#1E7E34]" />
                <span>Institutional Verification Standard</span>
              </span>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171A19] leading-snug">
                Every companion is personally interviewed and safety-cleared
              </h2>

              <p className="text-xs sm:text-sm text-[#555C58] leading-relaxed">
                We maintain strict platonic charters. Our 4-step onboarding
                screens for professional background, emergency contacts,
                government Aadhaar verification, and behavioral etiquette.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 shrink-0 lg:min-w-[440px]">
              <div className="bg-[#EFF2EB] rounded-2xl p-4 sm:p-5 text-center border border-[#DEE3D7]">
                <div className="text-xl sm:text-2xl font-bold font-serif text-[#171A19]">
                  10,000+
                </div>
                <div className="text-[11px] sm:text-xs text-[#555C58] mt-1 font-medium leading-tight">
                  Accompanied Hours
                </div>
              </div>

              <div className="bg-[#EFF2EB] rounded-2xl p-4 sm:p-5 text-center border border-[#DEE3D7]">
                <div className="text-xl sm:text-2xl font-bold font-serif text-[#171A19]">
                  4.92 / 5
                </div>
                <div className="text-[11px] sm:text-xs text-[#555C58] mt-1 font-medium leading-tight">
                  Client Rating
                </div>
              </div>

              <div className="bg-[#EFF2EB] rounded-2xl p-4 sm:p-5 text-center border border-[#DEE3D7]">
                <div className="text-xl sm:text-2xl font-bold font-serif text-[#171A19]">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs text-[#555C58] mt-1 font-medium leading-tight">
                  Platonic Guarantee
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#FAF9F5] border-t border-[#E7E4DC] pt-12 pb-8 text-[#4D5350]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-4 pr-4">
              <Link href="/" className="flex items-baseline">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#171A19]">
                  CoFriend
                </span>
                <span className="font-sans text-lg font-bold text-[#9E331A]">
                  .in
                </span>
              </Link>

              <p className="text-xs text-[#5C6460] leading-relaxed max-w-sm">
                India&apos;s trusted lifestyle and social companionship concierge.
                Offering vetted, platonic fellows for events, cinema, gallery
                walks, wellness retreats, and city discoveries.
              </p>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF9F5] border border-[#DDD7CC] text-[11px] font-bold tracking-wider text-[#3D4440] uppercase">
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
                      <button
                        onClick={() => {
                          setSelectedMetro(item);
                          setSelectedLocation(item);
                          const el = document.getElementById("catalog-section");
                          el?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="hover:text-[#9E331A] transition-colors text-left cursor-pointer"
                      >
                        {item}
                      </button>
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
                    <a href="#" className="hover:text-[#9E331A] transition-colors">
                      {item}
                    </a>
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
                    <a href="#" className="hover:text-[#9E331A] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-[#EAE7DD] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#78817D]">
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

      {/* Booking Interactive Modal */}
      {bookingModalCompanion && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#E0DDD5] relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                setBookingModalCompanion(null);
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
                <h3 className="text-2xl font-serif font-bold text-[#171A19]">
                  Booking Request Sent!
                </h3>
                <p className="text-xs text-[#555C58] leading-relaxed">
                  Our concierge will match your request with verified, background-checked{" "}
                  <strong className="text-[#171A19]">
                    {bookingModalCompanion.title}
                  </strong>{" "}
                  fellows in your selected city within 15 minutes.
                </p>
                <button
                  onClick={() => {
                    setBookingModalCompanion(null);
                    setBookingSuccess(false);
                  }}
                  className="w-full bg-[#9E331A] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#852A14] transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                    <Image
                      src={bookingModalCompanion.imageUrl}
                      alt={bookingModalCompanion.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E331A]">
                      {bookingModalCompanion.categoryTag}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-[#171A19]">
                      {bookingModalCompanion.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#9E331A]">
                      ₹{bookingModalCompanion.priceHourly} / hour{" "}
                      <span className="text-[#7A827E] font-normal">
                        ({bookingModalCompanion.minDuration})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#EDE9E0] text-xs text-[#555C58] space-y-1.5">
                  <div className="flex items-center gap-1.5 font-semibold text-[#171A19]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Platonic & Verified Safety Protocol</span>
                  </div>
                  <p>
                    All fellows are Aadhaar verified, background checked, and adhere to
                    strict platonic conduct guidelines.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-xs">
                  <div>
                    <label className="block font-semibold text-[#171A19] mb-1">
                      Select Preferred Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      defaultValue="2026-09-13T16:00"
                      className="w-full px-3 py-2 rounded-xl border border-[#DCD7CD] bg-white focus:outline-none focus:border-[#9E331A]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#171A19] mb-1">
                      Activity Notes / Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nandan Cinema indie screening or rooftop dinner"
                      className="w-full px-3 py-2 rounded-xl border border-[#DCD7CD] bg-white focus:outline-none focus:border-[#9E331A]"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setBookingSuccess(true)}
                  className="w-full bg-[#9E331A] hover:bg-[#852A14] text-white py-3 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer mt-2"
                >
                  Confirm & Request Companion
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
