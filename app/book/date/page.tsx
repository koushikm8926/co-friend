"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Star,
  Info,
  Film,
} from "lucide-react";

export default function BookDatePage() {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState<number>(15);
  const [quickSuggestion, setQuickSuggestion] = useState<string>("tomorrow");

  const handleDayClick = (day: number, status: string) => {
    if (status !== "Booked" && status !== "Past") {
      setSelectedDay(day);
    }
  };

  const handleContinue = () => {
    router.push("/book/time");
  };

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
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4.5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow active:scale-98 flex items-center gap-2"
            >
              <span>Become a CoFriend</span>
            </Link>
            <div className="w-9 h-9 rounded-full bg-[#E5DFD4] border border-[#D5CDBC] flex items-center justify-center text-xs font-semibold text-[#5A5043]">
              <span>JD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Multi-Step Stepper Bar */}
      <div className="bg-[#FAFAFD] border-b border-purple-100/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto gap-3 py-1 text-xs">
            {/* Step 01 */}
            <div className="flex items-center gap-1.5 text-stone-500 shrink-0">
              <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>Step 01: Movie CoFriend</span>
            </div>
            <div className="w-6 h-px bg-stone-300 shrink-0" />

            {/* Step 02 */}
            <div className="flex items-center gap-1.5 text-stone-500 shrink-0">
              <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>Step 02: Ananya S.</span>
            </div>
            <div className="w-6 h-px bg-stone-300 shrink-0" />

            {/* Step 03: Active */}
            <div className="flex items-center gap-1.5 font-bold text-purple-700 shrink-0">
              <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">
                3
              </span>
              <span>ACTIVE STEP: Select Date</span>
            </div>
            <div className="w-6 h-px bg-stone-300 shrink-0" />

            {/* Step 04 */}
            <div className="flex items-center gap-1.5 text-stone-400 shrink-0">
              <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-[10px]">
                4
              </span>
              <span>Step 04: Time Slots</span>
            </div>
            <div className="w-6 h-px bg-stone-300 shrink-0" />

            {/* Step 05 */}
            <div className="flex items-center gap-1.5 text-stone-400 shrink-0">
              <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-[10px]">
                5
              </span>
              <span>Step 05: Duration</span>
            </div>
            <div className="w-6 h-px bg-stone-300 shrink-0" />

            {/* Step 06 */}
            <div className="flex items-center gap-1.5 text-stone-400 shrink-0">
              <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-[10px]">
                6
              </span>
              <span>Step 06: Summary</span>
            </div>
            <div className="w-6 h-px bg-stone-300 shrink-0" />

            {/* Step 07 */}
            <div className="flex items-center gap-1.5 text-stone-400 shrink-0">
              <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-[10px]">
                7
              </span>
              <span>Step 07: Payment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Companion Mini-Header Strip */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="bg-white rounded-2xl p-3 sm:p-4 border border-purple-100/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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
                <h2 className="font-outfit font-bold text-base text-[#171A19]">
                  Ananya Sharma
                </h2>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                  <ShieldCheck className="w-3 h-3" />
                  Aadhaar Verified
                </span>
              </div>
              <div className="text-xs text-[#555C58]">
                Movie CoFriend • Kolkata • <span className="text-purple-700 font-medium">IMAX & Arthouse Film Specialist</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 border-t sm:border-t-0 sm:border-l border-[#F0EEE7] pt-2 sm:pt-0 sm:pl-6 text-xs">
            <div>
              <span className="text-[10px] font-bold uppercase text-[#737A76]">
                Standard Rate
              </span>
              <div className="font-bold text-base text-[#171A19]">
                ₹350 <span className="text-xs font-normal text-[#737A76]">/ hr</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-[#737A76]">
                Min Duration
              </span>
              <div className="font-semibold text-xs text-[#171A19]">
                3 hrs (South Kolkata)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Calendar & Venues (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <div className="text-[10.5px] font-bold uppercase tracking-widest text-purple-700">
                Calendar Reservation
              </div>
              <h1 className="text-2xl sm:text-3xl font-outfit font-bold text-[#171A19]">
                Choose Your Movie Date
              </h1>
              <p className="text-xs text-[#555C58] leading-relaxed">
                Select an available day for your cinema accompaniment in Kolkata.
                Cinema screenings, post-movie discussions, or film festival
                companionships.
              </p>
            </div>

            {/* Quick Suggestions */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-bold uppercase text-[#737A76]">
                Quick Suggestions for Kolkata Screenings
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <button
                  onClick={() => {
                    setQuickSuggestion("today");
                    setSelectedDay(14);
                  }}
                  className={`px-3 py-1.5 rounded-xl border font-semibold transition-all cursor-pointer ${
                    quickSuggestion === "today"
                      ? "bg-[#FAFAFD] border-purple-600 text-purple-700"
                      : "bg-white border-purple-100/80 text-[#555C58]"
                  }`}
                >
                  📅 Today (Sat, 14 Dec) <span className="text-[10px] font-normal text-amber-700">Evening only</span>
                </button>

                <button
                  onClick={() => {
                    setQuickSuggestion("tomorrow");
                    setSelectedDay(15);
                  }}
                  className={`px-3 py-1.5 rounded-xl border font-semibold transition-all cursor-pointer ${
                    quickSuggestion === "tomorrow"
                      ? "bg-purple-600 text-white border-purple-600 shadow-xs"
                      : "bg-white border-purple-100/80 text-[#555C58]"
                  }`}
                >
                  📅 Tomorrow (Sun, 15 Dec) <span className="text-[9.5px] uppercase font-bold bg-white/20 px-1.5 py-0.5 rounded ml-1">RECOMMENDED</span>
                </button>

                <button
                  onClick={() => {
                    setQuickSuggestion("monday");
                    setSelectedDay(16);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-white border border-purple-100/80 text-[#555C58] font-semibold hover:bg-[#FAFAFD] transition-all cursor-pointer"
                >
                  This Monday (16 Dec)
                </button>

                <button
                  onClick={() => {
                    setQuickSuggestion("next_wknd");
                    setSelectedDay(21);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-white border border-purple-100/80 text-[#555C58] font-semibold hover:bg-[#FAFAFD] transition-all cursor-pointer"
                >
                  Next Weekend (21–22 Dec)
                </button>
              </div>
            </div>

            {/* Interactive Month Calendar Box */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-purple-100/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EEE7]">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-outfit font-bold text-[#171A19]">
                    December 2024
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FEF6E9] text-[#B47414] text-[10px] font-bold border border-[#FDE5BE]">
                    Film Fest Season
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 rounded-lg border border-purple-100/80 hover:bg-[#FAFAFD] text-[#555C58]">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 rounded-lg border border-purple-100/80 hover:bg-[#FAFAFD] text-[#555C58]">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 text-center text-[11px] font-bold uppercase text-[#737A76]">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
              </div>

              {/* Calendar Days Matrix */}
              <div className="grid grid-cols-7 gap-2">
                {/* Past days */}
                {[
                  { d: 1, s: "Past" },
                  { d: 2, s: "Past" },
                  { d: 3, s: "Past" },
                  { d: 4, s: "Past" },
                  { d: 5, s: "Past" },
                  { d: 6, s: "Past" },
                  { d: 7, s: "Past" },
                  { d: 8, s: "Past" },
                  { d: 9, s: "Past" },
                  { d: 10, s: "Past" },
                  { d: 11, s: "Past" },
                  { d: 12, s: "Past" },
                  { d: 13, s: "Past" },
                  { d: 14, s: "1 slot left" },
                  { d: 15, s: "CHOSEN" },
                  { d: 16, s: "Avail" },
                  { d: 17, s: "Booked" },
                  { d: 18, s: "Avail" },
                  { d: 19, s: "Matinee only" },
                  { d: 20, s: "Avail" },
                  { d: 21, s: "Avail" },
                  { d: 22, s: "Avail" },
                  { d: 23, s: "Avail" },
                  { d: 24, s: "Booked" },
                  { d: 25, s: "Holiday" },
                  { d: 26, s: "Avail" },
                  { d: 27, s: "Avail" },
                  { d: 28, s: "Avail" },
                  { d: 29, s: "Avail" },
                  { d: 30, s: "Avail" },
                  { d: 31, s: "NYE eve" },
                ].map((item) => {
                  const isSelected = selectedDay === item.d;
                  const isPast = item.s === "Past";
                  const isBooked = item.s === "Booked";

                  return (
                    <button
                      key={item.d}
                      disabled={isPast}
                      onClick={() => handleDayClick(item.d, item.s)}
                      className={`p-2.5 rounded-2xl text-center transition-all flex flex-col items-center justify-between min-h-[62px] cursor-pointer ${
                        isSelected
                          ? "bg-purple-600 text-white shadow-md scale-102"
                          : isPast
                          ? "bg-[#FAFAFD] text-stone-300 opacity-60 cursor-not-allowed"
                          : isBooked
                          ? "bg-[#F5F5F0] text-stone-400 cursor-not-allowed"
                          : item.d === 14
                          ? "bg-[#FAF0E6] text-purple-700 border border-[#F6D0C7]"
                          : "bg-[#F3F6F0] text-[#1E2421] hover:bg-[#E7EDE2] border border-[#DEE5D9]"
                      }`}
                    >
                      <span
                        className={`text-sm font-bold ${
                          isSelected ? "text-white" : ""
                        }`}
                      >
                        {item.d}
                      </span>
                      <span
                        className={`text-[9px] font-semibold truncate ${
                          isSelected
                            ? "text-white/90"
                            : isPast
                            ? "text-stone-300"
                            : item.s === "1 slot left"
                            ? "text-amber-700"
                            : item.s === "Matinee only"
                            ? "text-amber-600"
                            : "text-[#555C58]"
                        }`}
                      >
                        {isSelected ? "CHOSEN" : item.s}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Calendar Legend */}
              <div className="pt-3 border-t border-[#F2EFE8] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#737A76]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
                  <span>Selected Date</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#95B28F]" />
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span>Limited Slots</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                  <span>Fully Booked / Past</span>
                </div>
              </div>
            </div>

            {/* Ananya's Cinema Circuit Box */}
            <div className="bg-[#EFF2EB] rounded-2xl p-4 sm:p-5 border border-[#E2E6DC] space-y-3 text-xs">
              <div className="flex items-start gap-2 text-[#171A19]">
                <Film className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#171A19]">
                    Ananya&apos;s Cinema Circuit for Sun, 15 Dec
                  </h4>
                  <p className="text-[11.5px] text-[#555C58] mt-0.5 leading-relaxed">
                    Ananya is accepting multiplex & arthouse screenings in South
                    Kolkata on this date: <strong>South City IMAX</strong>,{" "}
                    <strong>Quest Mall INOX</strong>, <strong>Nandan Arthouse</strong>,
                    and <strong>Priya Cinema (Rashbehari)</strong>. Pre-show film
                    contextualization included.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#D9DFD2]">
                <div className="text-[10px] font-bold uppercase text-[#737A76] mb-1.5">
                  Recommended Venues in Circuit
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "South City Mall (IMAX Laser)",
                    "Nandan (Kolkata Film Hub)",
                    "Quest INOX (Insignia)",
                    "Priya Cinema",
                  ].map((venue) => (
                    <span
                      key={venue}
                      className="px-2.5 py-1 rounded-lg bg-white border border-[#D5DCD0] text-[11px] font-medium text-[#3D4540] flex items-center gap-1"
                    >
                      <MapPin className="w-3 h-3 text-purple-700" />
                      <span>{venue}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Docket (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-purple-100/80 shadow-lg space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EEE7]">
                <h3 className="font-outfit font-bold text-base text-[#171A19]">
                  Booking Docket
                </h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10.5px] font-bold border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Slot Live
                </span>
              </div>

              {/* Host Mini Profile */}
              <div className="p-3 bg-[#FAFAFD] rounded-2xl border border-[#EDEAE1] flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-stone-200 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                    alt="Ananya Sharma"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-xs">
                  <div className="font-outfit font-bold text-sm text-[#171A19]">
                    Ananya Sharma
                  </div>
                  <div className="text-[#555C58]">Movie & Arthouse Fellow</div>
                  <div className="flex items-center gap-1 text-amber-500 font-semibold text-[11px]">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>4.97 (42 reviews)</span>
                  </div>
                </div>
              </div>

              {/* Docket Specs */}
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-[#555C58]">
                  <span>Activity</span>
                  <span className="font-semibold text-[#171A19]">
                    Movie & IMAX CoFriend
                  </span>
                </div>

                <div className="flex justify-between text-[#555C58]">
                  <span>Metro Region</span>
                  <span className="font-semibold text-[#171A19]">
                    Kolkata (South Zone)
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#FAF0E6] border border-[#F6D0C7] flex items-center justify-between text-xs font-semibold text-purple-700">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    Selected Date
                  </span>
                  <span>Sun, {selectedDay} Dec 2024</span>
                </div>

                <div className="flex justify-between text-[#555C58] pt-1">
                  <span>Base Rate</span>
                  <span className="font-bold text-purple-700">₹350 / hr</span>
                </div>

                <div className="flex justify-between text-[#555C58]">
                  <span>Minimum Engagement</span>
                  <span className="font-medium text-[#171A19]">
                    3 Hours (₹1,050 base)
                  </span>
                </div>
              </div>

              {/* Next Step Notice */}
              <div className="p-2.5 rounded-xl bg-[#FAFAFD] border border-[#EDEAE1] text-[11px] text-[#555C58] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B47414] shrink-0" />
                <span>
                  <strong>NEXT STEP:</strong> Select showtime slot & duration
                </span>
              </div>

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Continue to Time Selection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/profile/ananya-sharma"
                className="block text-center text-xs text-[#737A76] hover:text-[#171A19] font-medium"
              >
                ← Back to Ananya&apos;s Profile
              </Link>

              {/* Trust Badges */}
              <div className="space-y-1.5 pt-2 border-t border-[#F2EFE8] text-[10.5px] text-[#555C58]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>
                    Free cancellation up to 4 hours before meet time. Full refund to source.
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                  <span>
                    Strict platonic & public venues charter strictly maintained.
                  </span>
                </div>
              </div>

              {/* Live Demand Ticker */}
              <div className="p-2 rounded-lg bg-[#FAF5FF] border border-purple-100/80 text-[10.5px] text-purple-700 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#B47414] animate-ping" />
                <span>
                  <strong>High Weekend Demand:</strong> 3 other movie buffs viewed Ananya&apos;s Sunday slots in the last hour.
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#FAFAFD] border-t border-purple-100/80 pt-10 pb-8 text-[#4D5350]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#78817D]">
            <div>
              © 2025 CoFriend Lifestyle Services Pvt. Ltd. Strict Platonic Policy Guaranteed. All rights reserved.
            </div>
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
