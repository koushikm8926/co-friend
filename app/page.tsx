"use client";

import React, { useState } from "react";
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
  UtensilsCrossed,
  Mountain,
  Wine,
  ShoppingBag,
  Landmark,
  Music,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Check,
  X,
  ChevronDown,
  Info,
  Lock,
  Zap,
  PhoneCall,
  Users,
  Compass,
  DollarSign,
  HeartHandshake,
  Activity,
  AlertTriangle,
} from "lucide-react";

interface CompanionProfile {
  id: string;
  name: string;
  avatar: string;
  title: string;
  bio: string;
  priceHourly: number;
  rating: number;
  reviewsCount: number;
  hoursBooked: string;
  specialityTag: string;
  city: string;
  languages: string[];
  responseSpeed: string;
}

const FEATURED_PROFILES: CompanionProfile[] = [
  {
    id: "ananya",
    name: "Ananya S.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    title: "Sociology Student & Cinephile",
    bio: "Love indie movie festivals, museum walks, and discussing literature over hot Darjeeling tea in South Kolkata.",
    priceHourly: 300,
    rating: 4.9,
    reviewsCount: 120,
    hoursBooked: "Booked for 340+ hours",
    specialityTag: "Aadhaar Verified",
    city: "Kolkata",
    languages: ["Hindi", "English", "Bengali"],
    responseSpeed: "Avg 18m reply",
  },
  {
    id: "rohan",
    name: "Rohan M.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    title: "Tech PM & Weekend Trekker",
    bio: "Trail enthusiast and avid board gamer. Always up for Western Ghats hikes, artisan coffee, or tech summits.",
    priceHourly: 350,
    rating: 5.0,
    reviewsCount: 98,
    hoursBooked: "Top Host in Indiranagar",
    specialityTag: "Aadhaar Verified",
    city: "Bengaluru",
    languages: ["English", "Kannada", "Hindi"],
    responseSpeed: "Avg 12m reply",
  },
  {
    id: "priyadarshini",
    name: "Priyadarshini K.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    title: "Art History Scholar & Storyteller",
    bio: "Deep passion for colonial Kolkata heritage, Victoria Memorial strolls, and Kala Ghoda art walk conversations.",
    priceHourly: 400,
    rating: 4.9,
    reviewsCount: 145,
    hoursBooked: "Cultural Historian & Curator",
    specialityTag: "Aadhaar Verified",
    city: "Mumbai",
    languages: ["English", "Marathi", "Hindi"],
    responseSpeed: "Avg 15m reply",
  },
  {
    id: "arjun",
    name: "Arjun V.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    title: "Squash Player & Fitness Enthusiast",
    bio: "Need a tennis or squash partner, or running buddy in Cubbon Park? Let's hit the court and keep the tempo high.",
    priceHourly: 300,
    rating: 4.8,
    reviewsCount: 110,
    hoursBooked: "Badminton & Squash Partner",
    specialityTag: "Aadhaar Verified",
    city: "Delhi NCR",
    languages: ["Hindi", "Telugu", "English"],
    responseSpeed: "Avg 20m reply",
  },
];

export default function HomePage() {
  const [selectedCityTab, setSelectedCityTab] = useState("All Hubs");
  const [hoursPerWeekend, setHoursPerWeekend] = useState(12);
  const [selectedActivity, setSelectedActivity] = useState("Movie & Cinema - Multiplex Premiere");
  const [selectedMetro, setSelectedMetro] = useState("Kolkata (Park St, Salt Lake, South...)");
  const [selectedTime, setSelectedTime] = useState("Today / Tomorrow (Any time)");
  const [bookingProfile, setBookingProfile] = useState<CompanionProfile | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const filteredProfiles =
    selectedCityTab === "All Hubs"
      ? FEATURED_PROFILES
      : FEATURED_PROFILES.filter((p) => p.city === selectedCityTab);

  // Estimator calculation: Hours * 4 weekends * Rs. 350
  const monthlyEarnings = hoursPerWeekend * 4 * 350;

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1E2421] font-sans antialiased flex flex-col selection:bg-[#F2DDD7] selection:text-[#832913]">
      {/* 1. Top Notice Bar */}
      <div className="bg-[#FFF9E6] border-b border-[#F4E3A8] px-4 py-1.5 text-center text-[11px] sm:text-xs font-semibold text-[#8F6200] tracking-wide flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#E59819] shrink-0 animate-pulse" />
        <span>
          100% STRICT PLATONIC & IDENTITY VERIFIED NETWORK • ALL COMPANIONS GO
          THROUGH 4-STEP POLICE & AADHAAR BACKGROUND CHECKS
        </span>
      </div>

      {/* 2. Top Header / Navbar */}
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
              className="text-[#171A19] font-semibold py-1 border-b-2 border-[#A8381E]"
            >
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
            <a
              href="#become-cofriend"
              className="bg-[#9E331A] hover:bg-[#852A14] text-white px-4.5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow active:scale-98 flex items-center gap-2 cursor-pointer"
            >
              <span>Become a CoFriend</span>
            </a>
            <div className="w-9 h-9 rounded-full bg-[#E5DFD4] border border-[#D5CDBC] flex items-center justify-center text-xs font-semibold text-[#5A5043] cursor-pointer hover:bg-[#DDD6C9] transition-colors">
              <span>JD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 space-y-16">
        {/* 3. Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & Trust Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCECE8] border border-[#F6D0C7] text-[#9E331A] text-[11px] font-bold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9E331A]" />
              <span>100% Platonic Social Companionship</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-serif tracking-tight text-[#171A19]">
                Find trusted company for{" "}
                <span className="font-serif italic text-[#9E331A] font-normal">
                  everyday plans
                </span>
                , outings & hobbies across India.
              </h1>
              <p className="text-[#555C58] text-sm sm:text-base leading-relaxed max-w-xl">
                From premiere film screenings in South City to weekend hikes in
                Coorg or spontaneous gallery strolls in Kala Ghoda — book
                vetted, platonic companions on your own terms.
              </p>
            </div>

            {/* Trust Highlights (3 items) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#171A19]">
                <div className="w-2 h-2 rounded-full bg-[#9E331A]" />
                <div>
                  <div className="font-bold">10,000+ HOURS</div>
                  <div className="text-[10.5px] font-normal text-[#737A76]">
                    Accompanied across metros
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#171A19]">
                <div className="w-2 h-2 rounded-full bg-[#1E7E34]" />
                <div>
                  <div className="font-bold">4-STEP ONBOARDING</div>
                  <div className="text-[10.5px] font-normal text-[#737A76]">
                    Aadhaar & Police check
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#171A19]">
                <div className="w-2 h-2 rounded-full bg-[#B47414]" />
                <div>
                  <div className="font-bold">FLAT HOURLY RATES</div>
                  <div className="text-[10.5px] font-normal text-[#737A76]">
                    No hidden surge fees
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Overlays & Floating Notification */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[14/10] bg-stone-200 border border-[#E7E4DC] shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
                alt="Friends having coffee and discussing plans"
                fill
                priority
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

              {/* Top Tag */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Verified Companion Outing</span>
                </span>
              </div>

              {/* Bottom Quote on Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium leading-snug drop-shadow-sm pr-12">
                “A peaceful Saturday morning photography walk in Victoria Memorial
                with an art historian...”
              </div>
            </div>

            {/* Floating Booking Notification Card */}
            <div className="absolute -bottom-6 left-4 sm:left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-[#E2DFD6] flex items-center gap-3 max-w-sm animate-in fade-in slide-in-from-bottom-3 duration-500">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-stone-100 shrink-0 border border-emerald-500">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  alt="Priya S."
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-[#171A19]">
                  Priya S. booked for Art Walk
                </div>
                <div className="text-[11px] text-[#555C58]">
                  Joined by Debabrata for gallery hopping in South Kolkata • ₹350/hr
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Search & Booking Bar (White box with orange accents) */}
        <section
          id="booking-search"
          className="bg-white rounded-3xl shadow-sm border border-[#E5E2DA] p-5 sm:p-6 space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0EEE7] pb-3">
            <div className="flex items-center gap-2">
              <span className="text-[#9E331A] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#9E331A]" />
                Book a Verified CoFriend in 45 Mins
              </span>
            </div>
            <div className="text-xs font-medium text-[#737A76] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Instant matching in 5 metro hubs</span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 items-center">
            {/* Activity Field */}
            <div className="bg-[#FAF9F5] rounded-xl p-2.5 border border-[#E7E4DC] hover:border-[#9E331A] transition-colors">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#737A76] mb-0.5">
                Select Activity / Plan
              </label>
              <select
                value={selectedActivity}
                onChange={(e) => setSelectedActivity(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-[#171A19] focus:outline-none cursor-pointer"
              >
                <option>Movie & Cinema - Multiplex Premiere</option>
                <option>Weekend Dining & Cafes</option>
                <option>Trekking & Mountain Hikes</option>
                <option>Gallery & Art Museum Walks</option>
                <option>Childcare & Playful Mentoring</option>
                <option>Shopping & Wardrobe Styling</option>
                <option>Badminton & Sports Buddy</option>
              </select>
            </div>

            {/* Metro Field */}
            <div className="bg-[#FAF9F5] rounded-xl p-2.5 border border-[#E7E4DC] hover:border-[#9E331A] transition-colors">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#737A76] mb-0.5">
                Select Metro
              </label>
              <select
                value={selectedMetro}
                onChange={(e) => setSelectedMetro(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-[#171A19] focus:outline-none cursor-pointer"
              >
                <option>Kolkata (Park St, Salt Lake, South...)</option>
                <option>Bengaluru (Indiranagar, Koramangala...)</option>
                <option>Mumbai (Bandra, South Bombay...)</option>
                <option>Delhi NCR (Lodhi, HKV, Gurgaon...)</option>
                <option>Hyderabad (Jubilee Hills, Hitec City...)</option>
              </select>
            </div>

            {/* Date & Time Field */}
            <div className="bg-[#FAF9F5] rounded-xl p-2.5 border border-[#E7E4DC] hover:border-[#9E331A] transition-colors">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#737A76] mb-0.5">
                Date & Time
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-[#171A19] focus:outline-none cursor-pointer"
              >
                <option>Today / Tomorrow (Any time)</option>
                <option>This Weekend (Morning 8 AM - 12 PM)</option>
                <option>This Weekend (Evening 5 PM - 9 PM)</option>
                <option>Custom Date (Next 7 Days)</option>
              </select>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setSearchSubmitted(true)}
              className="w-full bg-[#9E331A] hover:bg-[#852A14] text-white py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Find a CoFriend</span>
            </button>
          </div>

          {searchSubmitted && (
            <div className="p-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl text-xs text-[#166534] flex items-center justify-between">
              <span>
                Found <strong>14 verified companions</strong> matching &quot;{selectedActivity}&quot; in {selectedMetro.split("(")[0]}.
              </span>
              <button
                onClick={() => setSearchSubmitted(false)}
                className="text-xs font-bold underline"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Badges Under Search */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-[11.5px] text-[#555C58]">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                100% Aadhaar Verified
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-amber-600" />
                Escrow Paid to CoFriend
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                Instant Booking Available
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Clear OTP Authentication
              </span>
            </div>

            <Link
              href="/services"
              className="text-[#9E331A] font-semibold hover:underline flex items-center gap-1 text-xs"
            >
              <span>Why Trust CoFriend Plans</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </section>

        {/* 5. Section: Bespoke fellows for every lifestyle occasion */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#737A76]">
                Companionship Collections
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171A19]">
                Bespoke fellows for every lifestyle occasion.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#555C58] max-w-md">
              Curated accompaniment formats tailored to your mood, pace, and
              interests. No dating dynamics — strictly curated platonic
              companionship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Movie */}
            <div className="bg-white rounded-2xl border border-[#E7E4DC] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group">
              <div className="relative aspect-[16/10] w-full bg-stone-200 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80"
                  alt="Movie CoFriend"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/65 backdrop-blur-md text-[11px] font-medium text-white">
                    Popular in Cinema
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-serif font-bold text-[#171A19]">
                      Movie CoFriend
                    </h3>
                    <span className="text-xs font-bold text-[#9E331A]">
                      ₹300/hr
                    </span>
                  </div>
                  <p className="text-xs text-[#555C58] leading-relaxed">
                    Enthusiasts for multiplex premieres, regional cinema, indie film
                    festivals, and post-movie discussions.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="text-xs font-semibold text-[#171A19] hover:text-[#9E331A] flex items-center justify-between pt-2 border-t border-[#F2EFE8]"
                >
                  <span>Book for Movie</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Weekend Dinner */}
            <div className="bg-white rounded-2xl border border-[#E7E4DC] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group">
              <div className="relative aspect-[16/10] w-full bg-stone-200 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                  alt="Weekend Dinner"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/65 backdrop-blur-md text-[11px] font-medium text-white">
                    Social Dining
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-serif font-bold text-[#171A19]">
                      Weekend Dinner
                    </h3>
                    <span className="text-xs font-bold text-[#9E331A]">
                      ₹350/hr
                    </span>
                  </div>
                  <p className="text-xs text-[#555C58] leading-relaxed">
                    Rooftop evening companions, street food trails, or quiet
                    coffee conversations in heritage cafes.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="text-xs font-semibold text-[#171A19] hover:text-[#9E331A] flex items-center justify-between pt-2 border-t border-[#F2EFE8]"
                >
                  <span>Book for Dinner</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Trekking & Trails */}
            <div className="bg-white rounded-2xl border border-[#E7E4DC] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group">
              <div className="relative aspect-[16/10] w-full bg-stone-200 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80"
                  alt="Trekking & Trails"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/65 backdrop-blur-md text-[11px] font-medium text-white">
                    Outdoor & Fitness
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-serif font-bold text-[#171A19]">
                      Trekking & Trails
                    </h3>
                    <span className="text-xs font-bold text-[#9E331A]">
                      ₹300/hr
                    </span>
                  </div>
                  <p className="text-xs text-[#555C58] leading-relaxed">
                    Trail-ready buddies to accompany morning hikes, Western Ghats
                    treks, or nature walks.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="text-xs font-semibold text-[#171A19] hover:text-[#9E331A] flex items-center justify-between pt-2 border-t border-[#F2EFE8]"
                >
                  <span>Book for Trekking</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 4: Gallery & Culture */}
            <div className="bg-white rounded-2xl border border-[#E7E4DC] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group">
              <div className="relative aspect-[16/10] w-full bg-stone-200 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=600&q=80"
                  alt="Gallery & Culture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-black/65 backdrop-blur-md text-[11px] font-medium text-white">
                    Heritage & Walk
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-serif font-bold text-[#171A19]">
                      Gallery & Culture
                    </h3>
                    <span className="text-xs font-bold text-[#9E331A]">
                      ₹450/hr
                    </span>
                  </div>
                  <p className="text-xs text-[#555C58] leading-relaxed">
                    Art enthusiasts, museum guides, and heritage architecture lovers
                    to tour cultural districts.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="text-xs font-semibold text-[#171A19] hover:text-[#9E331A] flex items-center justify-between pt-2 border-t border-[#F2EFE8]"
                >
                  <span>Book for Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Section: Featured Verified CoFriends */}
        <section id="featured-companions" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#737A76]">
                Handpicked Professionals
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171A19]">
                Featured Verified CoFriends
              </h2>
            </div>

            {/* City Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#EAE7DD] p-1 rounded-full border border-[#D5D0C2]">
              {["All Hubs", "Kolkata", "Bengaluru", "Mumbai", "Delhi NCR"].map(
                (tab) => {
                  const isActive = selectedCityTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setSelectedCityTab(tab)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#171A19] text-white shadow-xs"
                          : "text-[#4A544D] hover:text-[#171A19] hover:bg-white/60"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* Profile Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProfiles.map((profile) => (
              <div
                key={profile.id}
                className="bg-white rounded-2xl border border-[#E7E4DC] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
              >
                {/* Photo Thumbnail */}
                <div className="relative aspect-[4/4.5] w-full bg-stone-200 overflow-hidden">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-700/80 backdrop-blur-md text-[10px] font-semibold text-white">
                      <ShieldCheck className="w-3 h-3" />
                      {profile.specialityTag}
                    </span>
                  </div>

                  <div className="absolute top-2.5 right-2.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white">
                      <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                      {profile.rating.toFixed(1)} ({profile.reviewsCount})
                    </span>
                  </div>

                  {/* Bottom Overlay on Image */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/60 backdrop-blur-md rounded-lg px-2.5 py-1 text-[10.5px] text-white/95 flex items-center justify-between">
                    <span>{profile.hoursBooked}</span>
                    <span className="font-bold text-amber-300">
                      ₹{profile.priceHourly}/hr
                    </span>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-base font-serif font-bold text-[#171A19]">
                        {profile.name}
                      </h3>
                      <span className="text-sm font-bold text-[#9E331A]">
                        ₹{profile.priceHourly}{" "}
                        <span className="text-[10px] font-normal text-[#737A76]">
                          / hr
                        </span>
                      </span>
                    </div>

                    <div className="text-[11px] font-semibold text-[#8F6200]">
                      {profile.title}
                    </div>

                    <p className="text-xs text-[#555C58] line-clamp-3 leading-relaxed">
                      {profile.bio}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F2EFE8] space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] text-[#737A76]">
                      <span>{profile.languages.join(" • ")}</span>
                      <span className="text-emerald-700 font-medium">
                        {profile.responseSpeed}
                      </span>
                    </div>

                    {profile.id === "ananya" ? (
                      <Link
                        href="/profile/ananya-sharma"
                        className="w-full bg-[#9E331A] hover:bg-[#852A14] text-white py-2 rounded-xl text-xs font-semibold transition-all shadow-xs active:scale-98 cursor-pointer text-center block"
                      >
                        Book {profile.name.split(" ")[0]}
                      </Link>
                    ) : (
                      <button
                        onClick={() => setBookingProfile(profile)}
                        className="w-full bg-[#9E331A] hover:bg-[#852A14] text-white py-2 rounded-xl text-xs font-semibold transition-all shadow-xs active:scale-98 cursor-pointer"
                      >
                        Book {profile.name.split(" ")[0]}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#9E331A] hover:underline"
            >
              <span>+ View all 240+ verified companions across India</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 7. Section: How CoFriend.in Works */}
        <section id="how-it-works" className="space-y-8 pt-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#737A76]">
              Seamless & Safe Onboarding
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171A19]">
              How CoFriend.in Works
            </h2>
            <p className="text-xs sm:text-sm text-[#555C58]">
              Book certified companionship in 4 easy steps — from plan selection
              to safe meetup completion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Step 01 */}
            <div className="bg-white rounded-2xl p-5 border border-[#E7E4DC] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-bold text-[#D0C8BA]">
                    01
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#FCECE8] text-[#9E331A] flex items-center justify-center">
                    <Compass className="w-4 h-4" />
                  </span>
                </div>
                <h3 className="text-base font-serif font-bold text-[#171A19]">
                  Choose Service
                </h3>
                <p className="text-xs text-[#555C58] leading-relaxed">
                  Pick your activity: cinema, food trail, museum stroll, hiking,
                  or fitness companion from our curated formats.
                </p>
              </div>
              <div className="pt-2 border-t border-[#F2EFE8] text-[11px] font-semibold text-[#9E331A]">
                View 8 Curated Formats
              </div>
            </div>

            {/* Step 02 */}
            <div className="bg-white rounded-2xl p-5 border border-[#E7E4DC] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-bold text-[#D0C8BA]">
                    02
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#FCECE8] text-[#9E331A] flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </span>
                </div>
                <h3 className="text-base font-serif font-bold text-[#171A19]">
                  Select Your Fellow
                </h3>
                <p className="text-xs text-[#555C58] leading-relaxed">
                  Browse verified profiles, ratings, fluency in languages, and
                  background-check certifications for instant availability.
                </p>
              </div>
              <div className="pt-2 border-t border-[#F2EFE8] text-[11px] font-semibold text-[#1E7E34]">
                100% Aadhaar & Background Checked
              </div>
            </div>

            {/* Step 03 */}
            <div className="bg-white rounded-2xl p-5 border border-[#E7E4DC] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-bold text-[#D0C8BA]">
                    03
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#FCECE8] text-[#9E331A] flex items-center justify-center">
                    <Lock className="w-4 h-4" />
                  </span>
                </div>
                <h3 className="text-base font-serif font-bold text-[#171A19]">
                  Secure Protection
                </h3>
                <p className="text-xs text-[#555C58] leading-relaxed">
                  Pay via escrow. Earnings are released to companion only after
                  completion and safe acknowledgement.
                </p>
              </div>
              <div className="pt-2 border-t border-[#F2EFE8] text-[11px] font-semibold text-[#9E331A]">
                Protected Escrow Payment
              </div>
            </div>

            {/* Step 04 */}
            <div className="bg-white rounded-2xl p-5 border border-[#E7E4DC] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-bold text-[#D0C8BA]">
                    04
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#FCECE8] text-[#9E331A] flex items-center justify-center">
                    <HeartHandshake className="w-4 h-4" />
                  </span>
                </div>
                <h3 className="text-base font-serif font-bold text-[#171A19]">
                  Meet & Share OTP
                </h3>
                <p className="text-xs text-[#555C58] leading-relaxed">
                  Meet at the public venue. Share the 4-digit verification code
                  to start the hourly outing session safely.
                </p>
              </div>
              <div className="pt-2 border-t border-[#F2EFE8] text-[11px] font-semibold text-[#1E7E34]">
                Live GPS + In-App Emergency Button
              </div>
            </div>
          </div>
        </section>

        {/* 8. Section: Built on uncompromising safety and absolute dignity */}
        <section
          id="safety-protocol"
          className="bg-[#EFF2EB] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E2E6DC] space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E3EBE0] text-[#1E7E34] text-xs font-semibold border border-[#CAD8C5]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>4-Step Safety & Dignity Protocol</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171A19] leading-snug">
                Built on uncompromising safety and absolute dignity.
              </h2>

              <p className="text-xs sm:text-sm text-[#555C58] leading-relaxed">
                CoFriend is strictly non-romantic and dedicated to healthy
                companionship. We have established India&apos;s most rigorous safety
                and compliance frameworks to protect both guests and companions.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white text-emerald-600 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#171A19]">
                      Government 20-Point Background Check
                    </h4>
                    <p className="text-[11.5px] text-[#555C58] leading-relaxed">
                      Every fellow undergoes Aadhaar verification, residential
                      address check, emergency contact validation, and past career
                      references.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white text-emerald-600 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#171A19]">
                      In-Public Meetups & Escrow Protection
                    </h4>
                    <p className="text-[11.5px] text-[#555C58] leading-relaxed">
                      Outings take place solely at verified public venues with escrow
                      payments released only on completion.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white text-emerald-600 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#171A19]">
                      24/7 Live Concierge & Emergency Assistance
                    </h4>
                    <p className="text-[11.5px] text-[#555C58] leading-relaxed">
                      Real-time session status tracking, one-tap emergency call
                      support, and behavioral charter enforcement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Safety Onboarding Portal UI Mockup */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-5 sm:p-6 border border-[#E0DDD5] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EEE7]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-[#171A19]">
                    Safety Onboarding Portal
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10.5px] font-bold border border-emerald-200">
                  Status: VETTED & ACTIVE
                </span>
              </div>

              {/* Progress Checklist */}
              <div className="space-y-2">
                {[
                  "1. Government Aadhaar Identity Verified",
                  "2. Police Record & Address Cleared",
                  "3. Platonic Charter Signed & Pledged",
                  "4. In-Person Video & Behavioral Interview Passed",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF9F5] border border-[#EDEAE1] text-xs"
                  >
                    <span className="font-medium text-[#1E2421]">{item}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>
                ))}
              </div>

              {/* Two Trust Subcards */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-[#FEF6E9] border border-[#FDE5BE] space-y-1">
                  <div className="text-[10px] font-bold text-[#B47414] uppercase">
                    Zero Harassment
                  </div>
                  <p className="text-[11px] text-[#6A4B1A] leading-tight">
                    Immediate ban & legal escalation for violation of platonic charter.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#EBF7EE] border border-[#CEEAD6] space-y-1">
                  <div className="text-[10px] font-bold text-[#1E7E34] uppercase">
                    OTP Commencement
                  </div>
                  <p className="text-[11px] text-[#1E5C2C] leading-tight">
                    Sessions start only upon two-factor OTP exchange at public meetup.
                  </p>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#FAF9F5] text-[10.5px] text-[#737A76] text-center border border-[#EDEAE1]">
                Strict Platonic Charter enforced across all activities • Violations
                reported directly to local authorities.
              </div>
            </div>
          </div>
        </section>

        {/* 9. Section: Trusted across India's Metros (Reviews) */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#737A76]">
                User Reviews
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171A19]">
                Trusted across India&apos;s Metros
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#555C58] max-w-md">
              Real experiences from solo travellers, cinephiles, and cultural
              enthusiasts across Indian metros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Review 1 */}
            <div className="bg-white rounded-2xl p-5 border border-[#E7E4DC] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-[13px] text-[#171A19] italic leading-relaxed">
                  “None of my friends wanted to sit through a 3.5-hour European
                  film festival marathon in Nandan. Ananya was on-time, polite,
                  and shared amazing post-movie analysis over chai!”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-[#F2EFE8]">
                <div className="w-8 h-8 rounded-full bg-[#E5DFD4] flex items-center justify-center text-xs font-bold text-[#5A5043]">
                  DG
                </div>
                <div className="text-xs">
                  <div className="font-bold text-[#171A19]">Debasish Ghosh</div>
                  <div className="text-[11px] text-[#737A76]">
                    Kolkata • Attended Cinema Gathering
                  </div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-2xl p-5 border border-[#E7E4DC] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-[13px] text-[#171A19] italic leading-relaxed">
                  “Moved to Bengaluru recently. Needed a confident outdoor
                  companion for the Savandurga sunrise trail on a Saturday.
                  Rohan handled pacing and trailhead logistics flawlessly!”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-[#F2EFE8]">
                <div className="w-8 h-8 rounded-full bg-[#E5DFD4] flex items-center justify-center text-xs font-bold text-[#5A5043]">
                  PS
                </div>
                <div className="text-xs">
                  <div className="font-bold text-[#171A19]">Pooja Sengupta</div>
                  <div className="text-[11px] text-[#737A76]">
                    Bengaluru • Weekend Trekking Outing
                  </div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-2xl p-5 border border-[#E7E4DC] shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-[13px] text-[#171A19] italic leading-relaxed">
                  “Had a reservation at a premier BKC rooftop restaurant, but
                  dining solo felt awkward. Priyadarshini made the entire dinner
                  feel relaxed, respectful, and genuinely memorable.”
                </p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-[#F2EFE8]">
                <div className="w-8 h-8 rounded-full bg-[#E5DFD4] flex items-center justify-center text-xs font-bold text-[#5A5043]">
                  AS
                </div>
                <div className="text-xs">
                  <div className="font-bold text-[#171A19]">Abhijeet Singh</div>
                  <div className="text-[11px] text-[#737A76]">
                    Mumbai • Weekend Rooftop Dining
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Section: Become a Companion CTA Banner & Earnings Estimator */}
        <section
          id="become-cofriend"
          className="bg-[#1B211E] rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-[11px] font-bold tracking-wider uppercase border border-white/15">
                <span>Become a Verified CoFriend in Your Metro</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
                Turn your spare weekend hours & cultural hobbies into honorable
                income.
              </h2>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl">
                Join an exclusive community of respectful, cultured companion
                hosts. Accompany guests to film screenings, gallery walks, food
                trails, and cultural events on your own schedule.
              </p>

              {/* 3 Value Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <div className="text-lg font-bold text-white">₹300 - ₹600</div>
                  <div className="text-[11px] text-stone-300">
                    Hourly Earning Potential
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <div className="text-lg font-bold text-white">Same-Day</div>
                  <div className="text-[11px] text-stone-300">
                    Instant Escrow Payout
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <div className="text-lg font-bold text-white">Flexible</div>
                  <div className="text-[11px] text-stone-300">
                    Choose your own hours
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() =>
                    alert(
                      "Thank you for your interest! The CoFriend host onboarding application form is opening."
                    )
                  }
                  className="bg-[#9E331A] hover:bg-[#B83E20] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-98 cursor-pointer flex items-center gap-2"
                >
                  <span>Apply as a CoFriend</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-stone-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  100% Platonic Policy Guaranteed
                </span>
              </div>
            </div>

            {/* Right Estimator Card */}
            <div className="lg:col-span-5 bg-white text-[#171A19] rounded-2xl p-5 sm:p-6 border border-[#E0DDD5] shadow-lg space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#F0EEE7]">
                <h3 className="text-base font-serif font-bold text-[#171A19]">
                  Earnings Estimator
                </h3>
                <span className="text-[11px] font-bold text-[#9E331A] bg-[#FDF4F1] px-2.5 py-0.5 rounded-full">
                  All Metro Hubs
                </span>
              </div>

              {/* Slider for Weekend Hours */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#555C58] font-medium">
                    Weekend commitment:
                  </span>
                  <span className="font-bold text-[#171A19]">
                    {hoursPerWeekend} hrs / weekend
                  </span>
                </div>
                <input
                  type="range"
                  min={4}
                  max={24}
                  step={2}
                  value={hoursPerWeekend}
                  onChange={(e) => setHoursPerWeekend(Number(e.target.value))}
                  className="w-full accent-[#9E331A] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#737A76]">
                  <span>4 hrs (Part-time)</span>
                  <span>12 hrs</span>
                  <span>24 hrs (Full weekend)</span>
                </div>
              </div>

              {/* Payout Output Box */}
              <div className="bg-[#EFF2EB] rounded-xl p-4 border border-[#DEE3D7] text-center space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#667269]">
                  Estimated Monthly Earnings
                </div>
                <div className="text-3xl font-serif font-bold text-[#171A19]">
                  ₹{monthlyEarnings.toLocaleString("en-IN")}
                  <span className="text-xs font-normal text-[#555C58]">
                    {" "}
                    / month
                  </span>
                </div>
                <p className="text-[10.5px] text-[#555C58] leading-tight pt-1">
                  Based on an avg rate of ₹350/hr across {hoursPerWeekend} weekend
                  hours. Escrow payments disbursed directly to your UPI bank
                  account.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#1E7E34] font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full zero-commission trial period for first 30 days</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 11. Footer */}
      <footer className="bg-[#FAF9F5] border-t border-[#E7E4DC] pt-12 pb-8 text-[#4D5350]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Column 1 */}
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

            {/* Column 2 */}
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
                        className="hover:text-[#9E331A] transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Column 3 */}
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
                    <a href="#safety-protocol" className="hover:text-[#9E331A] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
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

          {/* Bottom Bar */}
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

      {/* Booking Companion Modal */}
      {bookingProfile && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#E0DDD5] relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                setBookingProfile(null);
                setBookingConfirmed(false);
              }}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingConfirmed ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#171A19]">
                  Request Sent to {bookingProfile.name}!
                </h3>
                <p className="text-xs text-[#555C58] leading-relaxed">
                  {bookingProfile.name} typically responds in{" "}
                  <strong>{bookingProfile.responseSpeed}</strong>. An OTP will be
                  generated for your meetup once approved.
                </p>
                <button
                  onClick={() => {
                    setBookingProfile(null);
                    setBookingConfirmed(false);
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
                      src={bookingProfile.avatar}
                      alt={bookingProfile.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                      {bookingProfile.specialityTag} • {bookingProfile.city}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-[#171A19]">
                      {bookingProfile.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#9E331A]">
                      ₹{bookingProfile.priceHourly} / hour{" "}
                      <span className="text-[#7A827E] font-normal">
                        ({profileRating(bookingProfile.rating)} ⭐)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#EDE9E0] text-xs text-[#555C58] space-y-1.5">
                  <div className="flex items-center gap-1.5 font-semibold text-[#171A19]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Platonic Escrow Protection</span>
                  </div>
                  <p>
                    Your payment remains locked in escrow until the meetup is
                    concluded with mutual OTP verification.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-xs">
                  <div>
                    <label className="block font-semibold text-[#171A19] mb-1">
                      Choose Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      defaultValue="2026-09-13T17:00"
                      className="w-full px-3 py-2 rounded-xl border border-[#DCD7CD] bg-white focus:outline-none focus:border-[#9E331A]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-[#171A19] mb-1">
                      Outing Plan / Public Venue
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. South City Mall movie or Victoria Memorial walk"
                      className="w-full px-3 py-2 rounded-xl border border-[#DCD7CD] bg-white focus:outline-none focus:border-[#9E331A]"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setBookingConfirmed(true)}
                  className="w-full bg-[#9E331A] hover:bg-[#852A14] text-white py-3 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer mt-2"
                >
                  Send Booking Request
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function profileRating(val: number) {
  return val.toFixed(1);
}
