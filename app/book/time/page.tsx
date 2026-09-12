"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Check,
  ShieldCheck,
  Clock,
  MapPin,
  ArrowRight,
  Star,
  Sparkles,
  Lock,
  Calendar,
  Ticket,
} from "lucide-react";

export default function BookTimePage() {
  const router = useRouter();
  const [selectedSlot, setSelectedSlot] = useState<string>("03:30 PM");

  const handleContinue = () => {
    router.push("/book/duration");
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

      {/* Stepper Bar */}
      <div className="bg-[#FAF9F5] border-b border-[#EAE7DD] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto gap-3 py-1 text-xs">
            <div className="flex items-center gap-1.5 text-stone-500 shrink-0">
              <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>01. Service Cinema</span>
            </div>
            <div className="w-6 h-px bg-stone-300 shrink-0" />

            <div className="flex items-center gap-1.5 text-stone-500 shrink-0">
              <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>02. CoFriend Ananya S.</span>
            </div>
            <div className="w-6 h-px bg-stone-300 shrink-0" />

            <div className="flex items-center gap-1.5 text-stone-500 shrink-0">
              <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>03. Date Sun, 15 Dec</span>
            </div>
            <div className="w-6 h-px bg-stone-300 shrink-0" />

            <div className="flex items-center gap-1.5 font-bold text-[#9E331A] shrink-0">
              <span className="w-5 h-5 rounded-full bg-[#9E331A] text-white flex items-center justify-center text-[10px]">
                4
              </span>
              <span>04. Time Slot Active Selection</span>
            </div>
            <div className="w-6 h-px bg-stone-300 shrink-0" />

            <div className="flex items-center gap-1.5 text-stone-400 shrink-0">
              <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-[10px]">
                5
              </span>
              <span>05. Duration Hours</span>
            </div>
            <div className="w-6 h-px bg-stone-300 shrink-0" />

            <div className="flex items-center gap-1.5 text-stone-400 shrink-0">
              <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-[10px]">
                6
              </span>
              <span>06. Summary Review</span>
            </div>
            <div className="w-6 h-px bg-stone-300 shrink-0" />

            <div className="flex items-center gap-1.5 text-stone-400 shrink-0">
              <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-[10px]">
                7
              </span>
              <span>07. Payment Escrow Pay</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Companion Header Strip */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="bg-white rounded-2xl p-3 sm:p-4 border border-[#E7E4DC] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-stone-200 shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt="Ananya Sharma"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif font-bold text-base text-[#171A19]">
                  Ananya Sharma
                </h2>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                  <ShieldCheck className="w-3 h-3" />
                  Aadhaar Verified
                </span>
              </div>
              <div className="text-xs text-[#555C58]">
                Movie & Cultural CoFriend • 4.97★ (42 bookings) • Quest Mall & South Kolkata Hub
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t sm:border-t-0 sm:border-l border-[#F0EEE7] pt-2 sm:pt-0 sm:pl-6 text-xs">
            <div>
              <span className="text-[10px] font-bold uppercase text-[#737A76]">
                Selected Date
              </span>
              <div className="font-bold text-sm text-[#171A19] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#9E331A]" />
                Sunday, 15 Dec 2024
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-[#737A76]">
                Base Rate
              </span>
              <div className="font-bold text-sm text-[#9E331A]">₹350/hr</div>
            </div>
            <Link
              href="/book/date"
              className="text-xs font-semibold text-[#9E331A] hover:underline"
            >
              Edit Date 📅
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 cols): Time Windows */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <div className="text-[10.5px] font-bold uppercase tracking-widest text-[#9E331A]">
                Step 04 of 07
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#171A19]">
                Select Start Time
              </h1>
              <p className="text-xs text-[#555C58] leading-relaxed">
                Choose your preferred encounter kickoff time. Ananya accepts
                appointments across matinee, evening, and weekend prime
                screenings with a guaranteed 15-minute prior vestibule meet.
              </p>
            </div>

            {/* Pro Tip Box */}
            <div className="p-3.5 bg-[#FAF7EE] rounded-2xl border border-[#EAE5D8] text-xs text-[#555C58] flex items-start gap-2.5">
              <div className="p-1.5 bg-[#FEF6E9] rounded-lg text-[#B47414] shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 font-bold text-[#171A19]">
                  <span>Cinema & Screening Synchronization Note</span>
                  <span className="px-1.5 py-0.2 bg-[#9E331A] text-white text-[9px] font-bold rounded">
                    PRO TIP
                  </span>
                </div>
                <p className="text-[11.5px] text-[#6A5734] leading-relaxed">
                  Booking for an ongoing movie showtime? Choose a start time 15–20
                  minutes before curtain-up for smooth real-time OTP verification,
                  ticketing collection, and picking up concession snacks together.
                </p>
              </div>
            </div>

            {/* 1. Morning Window */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E7E4DC] shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#F0EEE7]">
                <div className="flex items-center gap-2">
                  <span className="text-base">☕</span>
                  <h3 className="font-serif font-bold text-sm text-[#171A19]">
                    Morning Window
                  </h3>
                  <span className="text-xs text-[#737A76]">(10:00 AM – 01:00 PM)</span>
                </div>
                <span className="text-[11px] font-semibold text-amber-700">
                  1 Slot Left
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedSlot("10:30 AM")}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedSlot === "10:30 AM"
                      ? "bg-[#9E331A] text-white border-[#9E331A] shadow-xs"
                      : "bg-[#FAF9F5] border-[#EDEAE1] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">10:30 AM</span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        selectedSlot === "10:30 AM"
                          ? "bg-white"
                          : "bg-emerald-500"
                      }`}
                    />
                  </div>
                  <div
                    className={`text-[10.5px] mt-1 ${
                      selectedSlot === "10:30 AM"
                        ? "text-stone-200"
                        : "text-[#737A76]"
                    }`}
                  >
                    Early Bird Cinema / Cafe Breakfast
                  </div>
                  <div
                    className={`text-[10px] font-semibold mt-1 ${
                      selectedSlot === "10:30 AM"
                        ? "text-white"
                        : "text-emerald-700"
                    }`}
                  >
                    Available
                  </div>
                </button>

                <div className="p-3.5 rounded-2xl border border-stone-200 bg-stone-100/70 text-left opacity-60 cursor-not-allowed">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-stone-400">
                      11:45 AM
                    </span>
                    <Lock className="w-3.5 h-3.5 text-stone-400" />
                  </div>
                  <div className="text-[10.5px] text-stone-400 mt-1">
                    Reserved by another member
                  </div>
                  <div className="text-[10px] font-semibold text-stone-400 mt-1">
                    Booked
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Afternoon & Matinee Window (Recommended) */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#9E331A]/30 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#F0EEE7]">
                <div className="flex items-center gap-2">
                  <span className="text-base">☀️</span>
                  <h3 className="font-serif font-bold text-sm text-[#171A19]">
                    Afternoon & Matinee
                  </h3>
                  <span className="text-xs text-[#737A76]">(01:00 PM – 05:00 PM)</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#9E331A] text-white text-[10px] font-bold">
                  Recommended for Cinema
                </span>
              </div>
              <p className="text-[11px] text-[#737A76]">
                Optimal slot synchronizations for Inox Quest, South City PVR, and Priya Cinema Sunday matinees.
              </p>

              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedSlot("02:15 PM")}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedSlot === "02:15 PM"
                      ? "bg-[#9E331A] text-white border-[#9E331A] shadow-xs"
                      : "bg-[#FAF9F5] border-[#EDEAE1] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">02:15 PM</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div
                    className={`text-[10px] mt-1 line-clamp-2 ${
                      selectedSlot === "02:15 PM"
                        ? "text-stone-200"
                        : "text-[#737A76]"
                    }`}
                  >
                    Ideal for Quest Mall IMAX (02:40 PM show)
                  </div>
                  <div
                    className={`text-[10px] font-semibold mt-1 ${
                      selectedSlot === "02:15 PM"
                        ? "text-white"
                        : "text-emerald-700"
                    }`}
                  >
                    Available
                  </div>
                </button>

                {/* 03:30 PM Selected Card */}
                <button
                  onClick={() => setSelectedSlot("03:30 PM")}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedSlot === "03:30 PM"
                      ? "bg-[#9E331A] text-white border-[#9E331A] shadow-md scale-102"
                      : "bg-[#FAF9F5] border-[#EDEAE1] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">03:30 PM</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-white ring-2 ring-white/40" />
                  </div>
                  <div
                    className={`text-[10px] mt-1 ${
                      selectedSlot === "03:30 PM"
                        ? "text-stone-200 font-medium"
                        : "text-[#737A76]"
                    }`}
                  >
                    Prime Matinee Curtain
                  </div>
                  <div className="flex items-center justify-between mt-1 text-[10px]">
                    <span
                      className={
                        selectedSlot === "03:30 PM"
                          ? "text-white font-bold"
                          : "text-[#737A76]"
                      }
                    >
                      Standard Rate
                    </span>
                    <span
                      className={`font-bold ${
                        selectedSlot === "03:30 PM"
                          ? "text-amber-300"
                          : "text-emerald-700"
                      }`}
                    >
                      Active
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedSlot("04:45 PM")}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedSlot === "04:45 PM"
                      ? "bg-[#9E331A] text-white border-[#9E331A] shadow-xs"
                      : "bg-[#FAF9F5] border-[#EDEAE1] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">04:45 PM</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div
                    className={`text-[10px] mt-1 ${
                      selectedSlot === "04:45 PM"
                        ? "text-stone-200"
                        : "text-[#737A76]"
                    }`}
                  >
                    Matches sunset theater arrivals
                  </div>
                  <div
                    className={`text-[10px] font-semibold mt-1 ${
                      selectedSlot === "04:45 PM"
                        ? "text-white"
                        : "text-emerald-700"
                    }`}
                  >
                    Available
                  </div>
                </button>
              </div>
            </div>

            {/* 3. Evening & Prime Hours */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E7E4DC] shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#F0EEE7]">
                <div className="flex items-center gap-2">
                  <span className="text-base">🌙</span>
                  <h3 className="font-serif font-bold text-sm text-[#171A19]">
                    Evening & Prime Hours
                  </h3>
                  <span className="text-xs text-[#737A76]">(05:00 PM – 09:00 PM)</span>
                </div>
                <span className="text-[11px] font-semibold text-amber-700">
                  High Demand
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedSlot("06:00 PM")}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedSlot === "06:00 PM"
                      ? "bg-[#9E331A] text-white border-[#9E331A] shadow-xs"
                      : "bg-[#FAF9F5] border-[#EDEAE1] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">06:00 PM</span>
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                  </div>
                  <div
                    className={`text-[10px] mt-1 ${
                      selectedSlot === "06:00 PM"
                        ? "text-stone-200"
                        : "text-[#737A76]"
                    }`}
                  >
                    Evening premiere & coffee run
                  </div>
                  <div
                    className={`text-[10px] font-semibold mt-1 ${
                      selectedSlot === "06:00 PM"
                        ? "text-amber-300"
                        : "text-amber-700"
                    }`}
                  >
                    Filling Fast
                  </div>
                </button>

                <button
                  onClick={() => setSelectedSlot("07:15 PM")}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedSlot === "07:15 PM"
                      ? "bg-[#9E331A] text-white border-[#9E331A] shadow-xs"
                      : "bg-[#FAF9F5] border-[#EDEAE1] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">07:15 PM</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div
                    className={`text-[10px] mt-1 ${
                      selectedSlot === "07:15 PM"
                        ? "text-stone-200"
                        : "text-[#737A76]"
                    }`}
                  >
                    Prime dinner & movie screening
                  </div>
                  <div
                    className={`text-[10px] font-semibold mt-1 ${
                      selectedSlot === "07:15 PM"
                        ? "text-white"
                        : "text-emerald-700"
                    }`}
                  >
                    Available
                  </div>
                </button>

                <button
                  onClick={() => setSelectedSlot("08:30 PM")}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedSlot === "08:30 PM"
                      ? "bg-[#9E331A] text-white border-[#9E331A] shadow-xs"
                      : "bg-[#FAF9F5] border-[#EDEAE1] hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">08:30 PM</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div
                    className={`text-[10px] mt-1 ${
                      selectedSlot === "08:30 PM"
                        ? "text-stone-200"
                        : "text-[#737A76]"
                    }`}
                  >
                    Late night wrap-up
                  </div>
                  <div
                    className={`text-[10px] font-semibold mt-1 ${
                      selectedSlot === "08:30 PM"
                        ? "text-white"
                        : "text-[#737A76]"
                    }`}
                  >
                    Max 2 hrs cap
                  </div>
                </button>
              </div>
            </div>

            {/* Intended Meeting Point */}
            <div className="bg-white rounded-2xl p-4 border border-[#E7E4DC] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF0E6] text-[#9E331A] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#171A19]">
                    Intended Meeting Point: Quest Mall Cinema Lobby
                  </div>
                  <div className="text-[11px] text-[#737A76]">
                    33 Syed Amir Ali Avenue, Park Circus, Kolkata • CoFriend will wait at the 5th floor concession stand
                  </div>
                </div>
              </div>
              <button
                onClick={() => alert("Change Venue modal opening.")}
                className="text-xs font-semibold text-[#9E331A] hover:underline shrink-0"
              >
                Change Venue
              </button>
            </div>
          </div>

          {/* Right Column (5 cols): Booking Summary */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-[#E7E4DC] shadow-lg space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EEE7]">
                <h3 className="font-serif font-bold text-base text-[#171A19]">
                  Booking Summary
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 text-[10.5px] font-bold">
                  DRAFT
                </span>
              </div>

              {/* Mini Profile */}
              <div className="p-3 bg-[#FAF9F5] rounded-2xl border border-[#EDEAE1] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-stone-200 shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                      alt="Ananya Sharma"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-sm text-[#171A19]">
                      Ananya Sharma
                    </div>
                    <div className="text-[11px] text-[#737A76]">
                      South Kolkata • Cinema Companion
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-[#171A19]">
                  <span>4.97</span>
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                </div>
              </div>

              {/* Summary Breakdown */}
              <div className="space-y-2.5 text-xs text-[#555C58]">
                <div className="flex justify-between">
                  <span>Selected Service</span>
                  <span className="font-semibold text-[#171A19]">
                    Movie CoFriend
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Date</span>
                  <span className="font-semibold text-[#171A19]">
                    Sun, 15 Dec 2024
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#FAF0E6] border border-[#F6D0C7] flex items-center justify-between text-xs font-semibold text-[#9E331A]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    Start Time
                  </span>
                  <span>{selectedSlot} (Selected)</span>
                </div>

                <div className="flex justify-between">
                  <span>Estimated Window</span>
                  <span className="font-medium text-[#171A19]">
                    {selectedSlot} onwards
                  </span>
                </div>

                <div className="flex justify-between pt-1">
                  <span>Base Hourly Fee</span>
                  <span className="font-bold text-[#9E331A]">₹350 / hr</span>
                </div>
              </div>

              {/* Real-time OTP Handshake Box */}
              <div className="p-3 rounded-xl bg-[#EFF2EB] border border-[#DEE3D7] text-xs text-[#555C58] space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#171A19]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Real-time OTP Handshake</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Meeting activates strictly when you verify Ananya&apos;s 4-digit
                  token at Quest Mall entrance.
                </p>
              </div>

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                className="w-full bg-[#9E331A] hover:bg-[#852A14] text-white py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Continue to Select Duration</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/book/date"
                className="block text-center text-xs text-[#737A76] hover:text-[#171A19] font-medium"
              >
                ← Change Date (Currently Sun, 15 Dec)
              </Link>

              {/* Have You Booked Tickets Box */}
              <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#EDEAE1] space-y-1 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-[#171A19]">
                  <Ticket className="w-4 h-4 text-[#B47414]" />
                  <span>Have You Booked Tickets?</span>
                </div>
                <p className="text-[11px] text-[#737A76] leading-tight">
                  You can enter your BookMyShow or INOX booking ID on the next step
                  so Ananya can coordinate seat adjacent check-in seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Protocol Strip */}
      <div className="bg-[#FAF9F5] border-t border-[#EAE7DD] py-3 text-xs text-[#737A76]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px]">
          <span className="flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            Escrow Payment Protocol: Your card is not charged until the meet begins.
          </span>
          <span>Free Cancellation up to 2 hrs before slot</span>
        </div>
      </div>
    </div>
  );
}
