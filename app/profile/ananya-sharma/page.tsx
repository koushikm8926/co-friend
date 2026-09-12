"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Star,
  ShieldCheck,
  MapPin,
  Clock,
  CheckCircle2,
  Lock,
  ArrowRight,
  Film,
  Sparkles,
  HeartHandshake,
  Calendar,
  Check,
  ChevronDown,
  Award,
  BookOpen,
  Coffee,
  HelpCircle,
} from "lucide-react";

export default function AnanyaProfilePage() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState("movie");
  const [selectedDate, setSelectedDate] = useState("Sun 02 Mar");
  const [selectedWindow, setSelectedWindow] = useState("Afternoon Matinee (2:00 PM)");
  const [durationHours, setDurationHours] = useState(3);
  const [selectedZone, setSelectedZone] = useState("South City Mall (Prince Anwar Shah Rd)");
  const [activeReviewTab, setActiveReviewTab] = useState("all");

  const hourlyRate =
    selectedService === "movie" ? 350 : selectedService === "gallery" ? 400 : 300;
  const estimatedTotal = hourlyRate * durationHours;

  const handleContinue = () => {
    router.push("/book/date");
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1E2421] font-sans antialiased flex flex-col selection:bg-[#F2DDD7] selection:text-[#832913]">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#EAE8E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
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
              className="text-[#171A19] font-semibold py-1 border-b-2 border-[#A8381E]"
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
              className="bg-[#9E331A] hover:bg-[#852A14] text-white px-4.5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow active:scale-98 flex items-center gap-2"
            >
              <span>Become a CoFriend</span>
            </Link>
            <div className="w-9 h-9 rounded-full bg-[#E5DFD4] border border-[#D5CDBC] flex items-center justify-center text-xs font-semibold text-[#5A5043]">
              <span>JD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb & Booking Status */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#737A76]">
          <div className="flex items-center gap-2">
            <Link href="/available-now" className="hover:underline">
              Kolkata CoFriends
            </Link>
            <span>/</span>
            <span>Cinema & Cultural Arts</span>
            <span>/</span>
            <span className="font-semibold text-[#171A19]">
              Ananya Sharma (JU Arts Fellow)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-800 bg-[#EBF7EE] px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-[#CEEAD6]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Accepting Bookings for This Weekend
            </span>
            <span className="text-[11px] text-[#737A76]">ID: CF-KOL-8842</span>
          </div>
        </div>
      </div>

      {/* Main Profile Grid */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-20 space-y-8">
        {/* Top Profile Hero Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E4DC] shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Avatar Photo */}
            <div className="relative w-36 h-44 sm:w-44 sm:h-52 rounded-2xl overflow-hidden bg-stone-200 shrink-0 border border-[#E0DDD5]">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Ananya Sharma"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-black/65 backdrop-blur-md rounded-lg py-1 px-2 text-[10px] font-bold text-white text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Aadhaar & Police Vetted</span>
              </div>
            </div>

            {/* Profile Info Header */}
            <div className="flex-1 space-y-3.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF0E6] text-[#9E331A] text-[11px] font-bold uppercase tracking-wider border border-[#F6D0C7]">
                  Cultural & Arthouse Companion
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FEF6E9] text-[#B47414] text-[11px] font-bold border border-[#FDE5BE]">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  4.96 (184 verified outings)
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#EBF7EE] text-[#1E7E34] text-[11px] font-bold border border-[#CEEAD6]">
                  Top 1% Companion
                </span>
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#171A19]">
                  Ananya Sharma
                </h1>
                <p className="text-sm sm:text-base font-serif italic text-[#8F6200] mt-0.5">
                  Film Studies Researcher & Cultural Historian
                </p>
              </div>

              {/* 3 Info Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-2.5 bg-[#FAF9F5] rounded-xl border border-[#EDEAE1]">
                  <div className="text-[10px] font-bold uppercase text-[#737A76]">
                    Metro Hub
                  </div>
                  <div className="text-xs font-semibold text-[#171A19] truncate">
                    Kolkata (South City, Quest, Nandan)
                  </div>
                </div>
                <div className="p-2.5 bg-[#FAF9F5] rounded-xl border border-[#EDEAE1]">
                  <div className="text-[10px] font-bold uppercase text-[#737A76]">
                    Languages
                  </div>
                  <div className="text-xs font-semibold text-[#171A19]">
                    English, Bengali, Hindi
                  </div>
                </div>
                <div className="p-2.5 bg-[#FAF9F5] rounded-xl border border-[#EDEAE1]">
                  <div className="text-[10px] font-bold uppercase text-[#737A76]">
                    Starting Retainer
                  </div>
                  <div className="text-xs font-bold text-[#9E331A]">
                    ₹350 <span className="font-normal text-[#737A76]">/ hour</span>
                  </div>
                </div>
              </div>

              {/* Guarantee Disclaimer */}
              <div className="p-3 rounded-xl bg-[#FDF7F5] border border-[#F6DED7] text-xs text-[#555C58] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#9E331A] shrink-0" />
                  <span>
                    <strong>CoFriend Platonic Guarantee:</strong> Zero awkwardness. 100% vetted lifestyle escort & cultural partner with instant escrow-backed refund protection.
                  </span>
                </div>
                <Link
                  href="/how-it-works"
                  className="font-semibold text-[#9E331A] hover:underline shrink-0 text-xs"
                >
                  Read Code of Conduct &gt;
                </Link>
              </div>
            </div>
          </div>

          {/* 4 Photo Gallery Thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-[#F2EFE8]">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-stone-100 group">
              <Image
                src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80"
                alt="Nandan Arthouse"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2 text-[10.5px] font-bold text-white">
                Nandan Arthouse & KIFF
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-stone-100 group">
              <Image
                src="https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=600&q=80"
                alt="CIMA Gallery"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2 text-[10.5px] font-bold text-white">
                CIMA & Kolkata Heritage Walks
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-stone-100 group">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                alt="Literary Cafes"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2 text-[10.5px] font-bold text-white">
                Literary & Cinema Cafes
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-stone-100 group">
              <Image
                src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80"
                alt="South City IMAX"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2 text-[10.5px] font-bold text-white">
                South City & Quest IMAX
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Main Section: Left Story & Services / Right Sticky Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* About Ananya */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E4DC] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif font-bold text-[#171A19]">
                  About Ananya
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF9F5] text-[#555C58] text-[11px] font-semibold border border-[#E7E4DC]">
                  JU Masters in Film Studies
                </span>
              </div>

              <blockquote className="text-sm font-serif italic text-[#8F6200] border-l-2 border-[#B47414] pl-3">
                “Cinema is never meant to be experienced in clinical solitude.”
              </blockquote>

              <p className="text-xs sm:text-sm text-[#555C58] leading-relaxed">
                I am a Film Studies graduate researcher at Jadavpur University with an
                obsessive fascination for Bengal&apos;s Golden Era parallel cinema, French
                New Wave, and 70mm IMAX cinematography. When I am not cataloging
                vintage archival film prints at Nandan or reading feminist visual
                theory, I companion film enthusiasts, solo travellers, and busy
                professionals who simply desire an intellectually engaging, pleasant
                companion for premiere screenings, retrospective film festivals (KIFF),
                or gallery openings across South Kolkata.
              </p>

              <p className="text-xs sm:text-sm text-[#555C58] leading-relaxed">
                Whether you are catching an early morning Christopher Nolan rerun at
                South City IMAX, strolling through CIMA Gallery, or craving a nuanced
                two-hour post-movie conversation over Darjeeling tea at a quiet
                Ballygunge cafe, you will find a warm, perceptive, and thoroughly
                respectful conversationalist.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#F2EFE8]">
                <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#737A76]">
                  Favorite Discussion Themes
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Satyajit Ray Restorations",
                    "A24 Screenplays",
                    "Ritwik Ghatak Retrospectives",
                    "IMAX 70mm Formats",
                    "Bengal Modernist Art",
                    "Kolkata Architectural Walks",
                  ].map((theme) => (
                    <span
                      key={theme}
                      className="px-2.5 py-1 rounded-lg bg-[#FAF9F5] border border-[#E7E4DC] text-xs font-medium text-[#4D5350]"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Curated Companionship Services */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E4DC] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-serif font-bold text-[#171A19]">
                  Curated Companionship Services
                </h3>
                <span className="text-[11px] text-[#737A76]">
                  Select an offering to update booking
                </span>
              </div>

              <div className="space-y-3">
                {/* Service 1 */}
                <div
                  onClick={() => setSelectedService("movie")}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedService === "movie"
                      ? "bg-[#FDF7F5] border-[#9E331A] shadow-xs"
                      : "bg-[#FAF9F5] border-[#E7E4DC] hover:bg-white"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-sm text-[#171A19]">
                        Movie & IMAX CoFriend
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#FEF6E9] text-[#B47414] text-[10px] font-bold">
                        Most Popular
                      </span>
                    </div>
                    <p className="text-xs text-[#555C58]">
                      Accompaniment to blockbuster releases, arthouse screenings at
                      Nandan, KIFF retrospectives, or multiplexes with nuanced pre- &
                      post-show discussion.
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-[#737A76] pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Min 3 hours
                      </span>
                      <span>•</span>
                      <span>South City, Quest, Nandan</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-base font-bold text-[#9E331A]">₹350/hr</div>
                    <span
                      className={`text-[11px] font-semibold ${
                        selectedService === "movie"
                          ? "text-[#9E331A]"
                          : "text-[#737A76]"
                      }`}
                    >
                      {selectedService === "movie" ? "Selected" : "Select"}
                    </span>
                  </div>
                </div>

                {/* Service 2 */}
                <div
                  onClick={() => setSelectedService("gallery")}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedService === "gallery"
                      ? "bg-[#FDF7F5] border-[#9E331A] shadow-xs"
                      : "bg-[#FAF9F5] border-[#E7E4DC] hover:bg-white"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-sm text-[#171A19]">
                        Art Gallery & Heritage Walk
                      </span>
                    </div>
                    <p className="text-xs text-[#555C58]">
                      Guided curatorial perspective across Kolkata&apos;s prominent
                      contemporary galleries (CIMA, Kolkata Centre for Creativity,
                      Victoria Memorial lawn walks).
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-[#737A76] pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Min 2 hours
                      </span>
                      <span>•</span>
                      <span>Curated Art Guide</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-base font-bold text-[#9E331A]">₹400/hr</div>
                    <span
                      className={`text-[11px] font-semibold ${
                        selectedService === "gallery"
                          ? "text-[#9E331A]"
                          : "text-[#737A76]"
                      }`}
                    >
                      {selectedService === "gallery" ? "Selected" : "Select"}
                    </span>
                  </div>
                </div>

                {/* Service 3 */}
                <div
                  onClick={() => setSelectedService("cafe")}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedService === "cafe"
                      ? "bg-[#FDF7F5] border-[#9E331A] shadow-xs"
                      : "bg-[#FAF9F5] border-[#E7E4DC] hover:bg-white"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-sm text-[#171A19]">
                        Literary Cafe Discussions
                      </span>
                    </div>
                    <p className="text-xs text-[#555C58]">
                      Intelligent book exchanges and deep conversations at iconic
                      cafes like Sienna, Oxford Bookstore Cha Bar, or Indian Coffee
                      House College Street.
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-[#737A76] pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Min 2 hours
                      </span>
                      <span>•</span>
                      <span>Books & Brews</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-base font-bold text-[#9E331A]">₹300/hr</div>
                    <span
                      className={`text-[11px] font-semibold ${
                        selectedService === "cafe"
                          ? "text-[#9E331A]"
                          : "text-[#737A76]"
                      }`}
                    >
                      {selectedService === "cafe" ? "Selected" : "Select"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Institutional Trust & Performance Badges */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E4DC] shadow-xs space-y-4">
              <h3 className="text-lg font-serif font-bold text-[#171A19]">
                Institutional Trust & Performance Badges
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-[#FAF9F5] rounded-2xl p-4 text-center border border-[#EDEAE1] space-y-1">
                  <div className="text-xl font-bold font-serif text-[#171A19]">
                    99.4%
                  </div>
                  <div className="text-[10.5px] font-bold text-[#171A19]">
                    Punctuality Score
                  </div>
                  <div className="text-[10px] text-[#737A76]">
                    Arrives 5 mins early
                  </div>
                </div>

                <div className="bg-[#FAF9F5] rounded-2xl p-4 text-center border border-[#EDEAE1] space-y-1">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-[10.5px] font-bold text-[#171A19]">
                    100% Platonic
                  </div>
                  <div className="text-[10px] text-[#737A76]">
                    Zero Incident Logs
                  </div>
                </div>

                <div className="bg-[#FAF9F5] rounded-2xl p-4 text-center border border-[#EDEAE1] space-y-1">
                  <div className="text-xl font-bold font-serif text-[#171A19]">
                    184 Outings
                  </div>
                  <div className="text-[10.5px] font-bold text-[#171A19]">
                    Completed & Vetted
                  </div>
                  <div className="text-[10px] text-[#737A76]">
                    100% Escrow Cleared
                  </div>
                </div>

                <div className="bg-[#FAF9F5] rounded-2xl p-4 text-center border border-[#EDEAE1] space-y-1">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="text-[10.5px] font-bold text-[#171A19]">
                    Top 1% Tier
                  </div>
                  <div className="text-[10px] text-[#737A76]">
                    Elite Concierge Rank
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Outing Experiences (Reviews) */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E7E4DC] shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h3 className="text-xl font-serif font-bold text-[#171A19]">
                  Verified Outing Experiences
                </h3>
                <div className="flex items-center gap-1 bg-[#FAF9F5] p-1 rounded-full border border-[#EDEAE1] text-xs">
                  {["All (184)", "Cinema & IMAX (118)", "Gallery Walks (42)"].map(
                    (tab) => {
                      const tabKey = tab.toLowerCase();
                      const isActive =
                        activeReviewTab === "all"
                          ? tab.startsWith("All")
                          : activeReviewTab === tabKey;
                      return (
                        <button
                          key={tab}
                          onClick={() =>
                            setActiveReviewTab(tab.startsWith("All") ? "all" : tabKey)
                          }
                          className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-colors cursor-pointer ${
                            isActive
                              ? "bg-[#171A19] text-white"
                              : "text-[#555C58] hover:bg-white"
                          }`}
                        >
                          {tab}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              <div className="space-y-4 pt-2">
                {/* Review 1 */}
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#EDEAE1] space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#E5DFD4] text-xs font-bold flex items-center justify-center text-[#5A5043]">
                        SG
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#171A19]">
                          S. Ghosh
                        </div>
                        <div className="text-[10.5px] text-[#737A76]">
                          Senior Architect, Salt Lake Sector V
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#737A76]">12 Feb 2025</span>
                    </div>
                  </div>
                  <div className="text-[11px] font-semibold text-[#9E331A]">
                    🎬 Attended KIFF & Satyajit Ray Retrospective at Nandan
                  </div>
                  <p className="text-xs text-[#555C58] leading-relaxed">
                    “Booking Ananya was the best decision for the festival. None of
                    my colleagues are interested in 1960s restored cinema. She was
                    deeply informed about the camera angles, production history, and
                    Subrata Mitra&apos;s bounce lighting technique. Delightfully
                    polite, completely platonic. 10/10.”
                  </p>
                </div>

                {/* Review 2 */}
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#EDEAE1] space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#E5DFD4] text-xs font-bold flex items-center justify-center text-[#5A5043]">
                        PS
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#171A19]">
                          P. Sen
                        </div>
                        <div className="text-[10.5px] text-[#737A76]">
                          Product Lead, Visiting from Bengaluru
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#737A76]">28 Jan 2025</span>
                    </div>
                  </div>
                  <div className="text-[11px] font-semibold text-[#9E331A]">
                    🍿 South City IMAX Nolan Screening & Sienna Cafe
                  </div>
                  <p className="text-xs text-[#555C58] leading-relaxed">
                    “I was visiting Kolkata on work and had a free Saturday evening.
                    I didn&apos;t want to watch Oppenheimer alone in a quiet city.
                    Ananya arrived exactly on time at South City, held great
                    discussions over coffee beforehand, and shared so much local
                    trivia about South Kolkata&apos;s art scene. Exemplary service.”
                  </p>
                </div>

                {/* Review 3 */}
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#EDEAE1] space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#E5DFD4] text-xs font-bold flex items-center justify-center text-[#5A5043]">
                        RM
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#171A19]">
                          Dr. R. Mukherjee
                        </div>
                        <div className="text-[10.5px] text-[#737A76]">
                          Associate Professor, Delhi
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] text-[#737A76]">14 Jan 2025</span>
                    </div>
                  </div>
                  <div className="text-[11px] font-semibold text-[#9E331A]">
                    🏛 CIMA Contemporary Art Gallery Tour
                  </div>
                  <p className="text-xs text-[#555C58] leading-relaxed">
                    “Outstanding contextual understanding of modern Indian canvases.
                    Having a companion who actually understands aesthetic theory
                    makes public exhibits 10x more rewarding. CoFriend has created
                    something truly respectful and essential for urban India.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sticky Booking Widget (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-[#E7E4DC] shadow-lg space-y-5">
              <div className="flex items-start justify-between pb-3 border-b border-[#F0EEE7]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E331A]">
                    Instant Concierge Reservation
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#171A19]">
                    Book Time with Ananya
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xl font-serif font-bold text-[#9E331A]">
                    ₹{hourlyRate}
                  </div>
                  <span className="text-[10.5px] text-[#737A76]">per hour</span>
                </div>
              </div>

              {/* Service Pill */}
              <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#EDEAE1] text-xs flex items-center justify-between">
                <span className="font-semibold text-[#171A19]">
                  {selectedService === "movie"
                    ? "🎬 Movie & IMAX CoFriend"
                    : selectedService === "gallery"
                    ? "🏛 Art Gallery & Heritage Walk"
                    : "☕ Literary Cafe Discussions"}
                </span>
                <span className="text-[11px] text-[#737A76]">Min 2-3 hrs</span>
              </div>

              {/* 1. Preferred Date */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#171A19]">
                  1. SELECT PREFERRED DATE
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { label: "Fri 28 Feb" },
                    { label: "Sat 01 Mar" },
                    { label: "Sun 02 Mar" },
                    { label: "Mon 03 Mar" },
                  ].map((d) => {
                    const isActive = selectedDate === d.label;
                    return (
                      <button
                        key={d.label}
                        onClick={() => setSelectedDate(d.label)}
                        className={`py-2 px-1 rounded-xl text-[11px] font-semibold text-center transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#9E331A] text-white shadow-xs"
                            : "bg-[#FAF9F5] text-[#555C58] hover:bg-[#EAE7DD] border border-[#EDEAE1]"
                        }`}
                      >
                        {d.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Outing Window */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#171A19]">
                  2. SELECT OUTING WINDOW
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    "Afternoon Matinee (2:00 PM)",
                    "Evening Premiere (6:30 PM)",
                  ].map((win) => {
                    const isActive = selectedWindow === win;
                    return (
                      <button
                        key={win}
                        onClick={() => setSelectedWindow(win)}
                        className={`p-2 rounded-xl text-left font-semibold text-[11px] transition-all cursor-pointer ${
                          isActive
                            ? "bg-[#171A19] text-white"
                            : "bg-[#FAF9F5] text-[#555C58] hover:bg-[#EAE7DD] border border-[#EDEAE1]"
                        }`}
                      >
                        {win}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Duration Hours Counter */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-bold text-[#171A19]">
                    3. OUTING DURATION (HOURS)
                  </label>
                  <span className="text-[10px] text-[#737A76]">
                    Min 2 hrs required
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 bg-[#FAF9F5] rounded-xl border border-[#EDEAE1]">
                  <button
                    onClick={() => setDurationHours(Math.max(2, durationHours - 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-[#E7E4DC] font-bold text-sm hover:bg-gray-100 flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-serif font-bold text-base text-[#171A19]">
                    {durationHours} Hours
                  </span>
                  <button
                    onClick={() => setDurationHours(durationHours + 1)}
                    className="w-8 h-8 rounded-lg bg-white border border-[#E7E4DC] font-bold text-sm hover:bg-gray-100 flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* 4. Outing Zone Dropdown */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#171A19]">
                  4. OUTING ZONE / DESTINATION
                </label>
                <select
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="w-full p-2.5 bg-[#FAF9F5] rounded-xl border border-[#EDEAE1] text-xs font-semibold text-[#171A19] focus:outline-none focus:border-[#9E331A] cursor-pointer"
                >
                  <option>South City Mall (Prince Anwar Shah Rd)</option>
                  <option>Quest Mall INOX (Park Circus)</option>
                  <option>Nandan & Rabindra Sadan Cultural Complex</option>
                  <option>Priya Cinema (Rashbehari Avenue)</option>
                  <option>CIMA Gallery & Sunny Park</option>
                </select>
              </div>

              {/* Cost Summary */}
              <div className="pt-3 border-t border-[#F2EFE8] space-y-1.5 text-xs text-[#555C58]">
                <div className="flex justify-between">
                  <span>
                    ₹{hourlyRate} × {durationHours} hours
                  </span>
                  <span>₹{estimatedTotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-[#1E7E34]">
                  <span>CoFriend Concierge Escrow Fee</span>
                  <span>₹0 (Introductory Free)</span>
                </div>
                <div className="flex justify-between text-[#1E7E34]">
                  <span>Safety & Identity Verification Insurance</span>
                  <span>Included</span>
                </div>
                <div className="flex justify-between font-bold text-[#171A19] pt-2 border-t border-[#EDEAE1] text-sm">
                  <span>Total Estimated Retainer</span>
                  <span className="text-[#9E331A] text-base">
                    ₹{estimatedTotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Continue CTA */}
              <button
                onClick={handleContinue}
                className="w-full bg-[#9E331A] hover:bg-[#852A14] text-white py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Continue to Select Date</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Guarantees */}
              <div className="space-y-1.5 pt-1 text-[10.5px] text-[#555C58]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>
                    100% Escrow Protection: Funds held securely until outing concludes.
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>
                    Full Refund Guarantee: Cancel anytime up to 4 hrs before outing.
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#9E331A] shrink-0" />
                  <span>
                    Strict Platonic Charter: Public venues only. Zero dating ambiguity.
                  </span>
                </div>
              </div>

              {/* Special Itinerary Help */}
              <div className="pt-3 border-t border-[#F2EFE8] flex items-center justify-between text-[11px] text-[#737A76]">
                <span>Have Special Outing Itinerary?</span>
                <button
                  onClick={() =>
                    alert("CoFriend concierge custom booking desk is available 24/7.")
                  }
                  className="font-semibold text-[#9E331A] hover:underline cursor-pointer"
                >
                  Ask Concierge
                </button>
              </div>
            </div>
          </div>
        </div>
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
            </div>
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#171A19]">
                Metro Hubs
              </h4>
              <ul className="space-y-2 text-xs font-medium">
                {["Kolkata", "Mumbai", "Bengaluru", "Delhi NCR", "Hyderabad"].map(
                  (item) => (
                    <li key={item}>
                      <Link href="/services" className="hover:text-[#9E331A]">
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
                {["Safety & Protocol", "Code of Conduct", "Identity Verification", "Emergency Helpline"].map((item) => (
                  <li key={item}>
                    <Link href="/how-it-works" className="hover:text-[#9E331A]">
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
                {["Terms of Service", "Privacy Policy", "Platonic Charter", "Press & Media"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-[#9E331A]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-[#EAE7DD] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#78817D]">
            <div>© 2025 CoFriend Lifestyle Services Pvt. Ltd. All rights reserved.</div>
            <div className="flex items-center gap-1.5 font-medium text-[#555E59]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B47414]" />
              <span>Handcrafted for urban India</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
