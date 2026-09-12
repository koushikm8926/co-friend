"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Clock,
  MapPin,
  Calendar,
  Star,
  Info,
  ArrowRight,
  Sparkles,
  Lock,
  MessageSquare,
  Check,
} from "lucide-react";

export default function BookDurationPage() {
  const router = useRouter();
  const [selectedHours, setSelectedHours] = useState<number>(3);

  const baseRate = 350;
  const totalPrice = selectedHours * baseRate;

  const handleContinue = () => {
    router.push("/book/summary");
  };

  const getEndHour = (hours: number) => {
    const startHour = 3; // 3:30 PM
    const startMin = 30;
    const endTotalHours = startHour + hours;
    const period = endTotalHours >= 12 ? "AM" : "PM";
    const formattedHour = endTotalHours.toString().padStart(2, "0");
    return `${formattedHour}:${startMin} ${period}`;
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
              <span>1. Service</span>
            </div>
            <div className="w-4 h-px bg-stone-300 shrink-0" />

            <div className="flex items-center gap-1.5 text-stone-500 shrink-0">
              <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>2. CoFriend</span>
            </div>
            <div className="w-4 h-px bg-stone-300 shrink-0" />

            <div className="flex items-center gap-1.5 text-stone-500 shrink-0">
              <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>3. Date (Sun, 15 Dec)</span>
            </div>
            <div className="w-4 h-px bg-stone-300 shrink-0" />

            <div className="flex items-center gap-1.5 text-stone-500 shrink-0">
              <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>4. Time (03:30 PM)</span>
            </div>
            <div className="w-4 h-px bg-stone-300 shrink-0" />

            <div className="flex items-center gap-1.5 font-bold text-[#9E331A] shrink-0">
              <span className="w-5 h-5 rounded-full bg-[#9E331A] text-white flex items-center justify-center text-[10px]">
                5
              </span>
              <span>5. Duration</span>
            </div>
            <div className="w-4 h-px bg-stone-300 shrink-0" />

            <div className="flex items-center gap-1.5 text-stone-400 shrink-0">
              <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-[10px]">
                6
              </span>
              <span>6. Summary</span>
            </div>
            <div className="w-4 h-px bg-stone-300 shrink-0" />

            <div className="flex items-center gap-1.5 text-stone-400 shrink-0">
              <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-[10px]">
                7
              </span>
              <span>7. Payment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <div className="text-[10.5px] font-bold uppercase tracking-widest text-[#9E331A]">
                Step 05 Companion Schedule
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#171A19]">
                How long will you need companion accompaniment?
              </h1>
              <p className="text-xs text-[#555C58] leading-relaxed">
                Select an extended or standard schedule tailored for your cinematic
                outing and post-screening conversation.
              </p>
            </div>

            {/* Policy Guideline Box */}
            <div className="p-3.5 bg-[#FAF7EE] rounded-2xl border border-[#EAE5D8] text-xs text-[#555C58] flex items-start gap-2.5">
              <div className="p-1.5 bg-[#FEF6E9] rounded-lg text-[#B47414] shrink-0">
                <Info className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <div className="font-bold text-[#171A19]">CINEMA POLICY GUIDELINE</div>
                <p className="text-[11.5px] text-[#6A5734] leading-relaxed">
                  Ananya requires a <strong>minimum booking of 3 hours</strong> for cinema outings to accommodate film runtime, interval pause, and relaxed post-movie reflections.
                </p>
              </div>
            </div>

            {/* Curated Booking Blocks */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-base text-[#171A19]">
                  Curated Booking Blocks
                </h3>
                <span className="text-[11px] font-bold text-[#737A76]">
                  RATE: ₹350 / HOUR
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Block 1: 3 Hours */}
                <div
                  onClick={() => setSelectedHours(3)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    selectedHours === 3
                      ? "bg-[#FDF7F5] border-2 border-[#9E331A] shadow-xs"
                      : "bg-white border-[#E7E4DC] hover:bg-[#FAF9F5]"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-bold text-lg text-[#171A19]">
                        3 Hours
                      </h4>
                      <span className="px-2 py-0.5 rounded-full bg-[#9E331A] text-white text-[10px] font-bold">
                        Minimum
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-[#9E331A]">
                      03:30 PM – 06:30 PM
                    </div>
                    <p className="text-[11px] text-[#555C58] leading-relaxed">
                      Perfect for standard film screenings + relaxed post-movie cafe coffee and review discussions.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#F0EEE7] flex items-center justify-between text-xs">
                    <span className="text-[#737A76]">Tariff (₹350 × 3)</span>
                    <span className="font-serif font-bold text-base text-[#171A19]">
                      ₹1,050
                    </span>
                  </div>
                </div>

                {/* Block 2: 4 Hours */}
                <div
                  onClick={() => setSelectedHours(4)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    selectedHours === 4
                      ? "bg-[#FDF7F5] border-2 border-[#9E331A] shadow-xs"
                      : "bg-white border-[#E7E4DC] hover:bg-[#FAF9F5]"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-bold text-lg text-[#171A19]">
                        4 Hours
                      </h4>
                      <span className="px-2 py-0.5 rounded-full bg-[#FEF6E9] text-[#B47414] text-[10px] font-bold border border-[#FDE5BE]">
                        Most Popular
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-[#9E331A]">
                      03:30 PM – 07:30 PM
                    </div>
                    <p className="text-[11px] text-[#555C58] leading-relaxed">
                      Ideal for extended film festivals, pre-show gallery book browsing, or dinner + movie combination.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#F0EEE7] flex items-center justify-between text-xs">
                    <span className="text-[#737A76]">Tariff (₹350 × 4)</span>
                    <span className="font-serif font-bold text-base text-[#171A19]">
                      ₹1,400
                    </span>
                  </div>
                </div>

                {/* Block 3: 5 Hours */}
                <div
                  onClick={() => setSelectedHours(5)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    selectedHours === 5
                      ? "bg-[#FDF7F5] border-2 border-[#9E331A] shadow-xs"
                      : "bg-white border-[#E7E4DC] hover:bg-[#FAF9F5]"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-bold text-lg text-[#171A19]">
                        5 Hours
                      </h4>
                    </div>
                    <div className="text-xs font-semibold text-[#9E331A]">
                      03:30 PM – 08:30 PM
                    </div>
                    <p className="text-[11px] text-[#555C58] leading-relaxed">
                      Double-bill screenings, film society sessions, or cultural shopping followed by an evening multiplex.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#F0EEE7] flex items-center justify-between text-xs">
                    <span className="text-[#737A76]">Tariff (₹350 × 5)</span>
                    <span className="font-serif font-bold text-base text-[#171A19]">
                      ₹1,750
                    </span>
                  </div>
                </div>

                {/* Block 4: 6 Hours */}
                <div
                  onClick={() => setSelectedHours(6)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    selectedHours === 6
                      ? "bg-[#FDF7F5] border-2 border-[#9E331A] shadow-xs"
                      : "bg-white border-[#E7E4DC] hover:bg-[#FAF9F5]"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-bold text-lg text-[#171A19]">
                        6 Hours
                      </h4>
                    </div>
                    <div className="text-xs font-semibold text-[#9E331A]">
                      03:30 PM – 09:30 PM
                    </div>
                    <p className="text-[11px] text-[#555C58] leading-relaxed">
                      Complete social companionship: Matinee arrival, leisurely South Kolkata stroll, and dinner banquet.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#F0EEE7] flex items-center justify-between text-xs">
                    <span className="text-[#737A76]">Tariff (₹350 × 6)</span>
                    <span className="font-serif font-bold text-base text-[#171A19]">
                      ₹2,100
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Precision Slider */}
            <div className="bg-white rounded-3xl p-5 border border-[#E7E4DC] shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#171A19]">
                    Custom Precision Slider
                  </h4>
                  <p className="text-[11px] text-[#737A76]">
                    Slide dynamically between 3 and 8 continuous hours.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#FAF0E6] text-[#9E331A] font-bold text-xs border border-[#F6D0C7]">
                  Active Duration: {selectedHours} Hours
                </span>
              </div>

              <input
                type="range"
                min={3}
                max={8}
                step={1}
                value={selectedHours}
                onChange={(e) => setSelectedHours(Number(e.target.value))}
                className="w-full accent-[#9E331A] cursor-pointer"
              />

              <div className="flex justify-between text-[10.5px] font-semibold text-[#737A76]">
                <span>3 hrs (Min)</span>
                <span>4 hrs</span>
                <span>5 hrs</span>
                <span>6 hrs</span>
                <span>7 hrs</span>
                <span>8 hrs (Max)</span>
              </div>
            </div>

            {/* Tariff Transparency Breakdown */}
            <div className="bg-white rounded-3xl p-5 border border-[#E7E4DC] shadow-xs space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#F0EEE7]">
                <div className="flex items-center gap-1.5 font-serif font-bold text-sm text-[#171A19]">
                  <span>📋 Tariff Transparency Breakdown</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#EBF7EE] text-[#1E7E34] text-[10px] font-bold">
                  ESCROW PROTECTED
                </span>
              </div>

              <div className="space-y-2 text-[#555C58]">
                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    Base Companion Tariff (₹350/hr × {selectedHours} hrs)
                    <Info className="w-3.5 h-3.5 text-[#737A76]" />
                  </span>
                  <span className="font-semibold text-[#171A19]">
                    ₹{totalPrice.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between items-center text-[#1E7E34]">
                  <span className="flex items-center gap-1">
                    Platonic Concierge &amp; Safety Escrow Guarantee
                    <span className="px-1.5 py-0.2 bg-[#FEF6E9] text-[#B47414] text-[9px] font-bold rounded">
                      ZERO SURCHARGE
                    </span>
                  </span>
                  <span>
                    <span className="line-through text-[#737A76] mr-1">₹250</span>
                    ₹0
                  </span>
                </div>

                <div className="flex justify-between text-[#1E7E34]">
                  <span>Aadhaar Verified Check-in Protocol</span>
                  <span className="font-medium">Included</span>
                </div>

                <div className="flex justify-between items-baseline font-bold text-[#171A19] pt-2 border-t border-[#F0EEE7] text-sm">
                  <div>
                    <div>Total Estimated Accompaniment</div>
                    <div className="text-[10px] font-normal text-[#737A76]">
                      Payable safely upon final confirmation
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-serif text-[#9E331A]">
                      ₹{totalPrice.toLocaleString("en-IN")}
                    </span>
                    <div className="text-[10px] font-normal text-[#737A76]">
                      Taxes &amp; Escrow Included
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Reminder */}
            <div className="p-3 bg-[#FAF9F5] rounded-2xl border border-[#EDEAE1] text-[11px] text-[#555C58] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>Platonic Standard Reminder:</strong> CoFriend.in enforces strict lifestyle boundaries. Accompaniment entails social company, cinephile conversation, cinema navigation, and event companionship only.
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): Companion Docket */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-[#E7E4DC] shadow-lg space-y-5">
              {/* Host Profile */}
              <div className="flex items-center gap-3 pb-3 border-b border-[#F0EEE7]">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-stone-200 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                    alt="Ananya Sharma"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-serif font-bold text-base text-[#171A19]">
                    Ananya Sharma
                  </div>
                  <div className="text-[11px] text-[#737A76]">
                    Cinema, Art &amp; Literary Companion
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 font-semibold text-[10.5px]">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>4.96 (42 cinema outings)</span>
                  </div>
                </div>
              </div>

              {/* Booking Specifications */}
              <div className="space-y-3 text-xs text-[#555C58]">
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#737A76]">
                    Service Experience
                  </span>
                  <div className="font-semibold text-[#171A19] flex items-center gap-1.5 mt-0.5">
                    <span>🎬 Cinema Companion &amp; Discussion</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase text-[#737A76]">
                    Appointment Date
                  </span>
                  <div className="font-semibold text-[#171A19] flex items-center gap-1.5 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-[#9E331A]" />
                    <span>Sun, 15 Dec 2024</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase text-[#737A76]">
                    Time Window &amp; Duration
                  </span>
                  <div className="font-semibold text-[#9E331A] flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#9E331A]" />
                    <span>03:30 PM – {getEndHour(selectedHours)} ({selectedHours} Hours)</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase text-[#737A76]">
                    Selected Hub
                  </span>
                  <div className="font-semibold text-[#171A19] flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#9E331A]" />
                    <span>South Kolkata (Multiplex &amp; Cafe)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-[#737A76] mb-1">
                    <span>Companion Timeline Coverage</span>
                    <span className="font-bold text-[#171A19]">
                      {Math.round((selectedHours / 8) * 100)}% of day window
                    </span>
                  </div>
                  <div className="w-full bg-[#FAF9F5] h-2 rounded-full overflow-hidden border border-[#EDEAE1]">
                    <div
                      className="bg-[#9E331A] h-full rounded-full transition-all"
                      style={{ width: `${(selectedHours / 8) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Total Estimated Cost Box */}
              <div className="p-3.5 bg-[#FAF9F5] rounded-2xl border border-[#EDEAE1] flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase text-[#737A76]">
                    Total Estimated Cost
                  </div>
                  <div className="text-2xl font-serif font-bold text-[#171A19]">
                    ₹{totalPrice.toLocaleString("en-IN")}
                  </div>
                </div>
                <span className="text-[11px] text-[#737A76] font-medium">
                  All inclusive
                </span>
              </div>

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                className="w-full bg-[#9E331A] hover:bg-[#852A14] text-white py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Review Booking Summary</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/book/time"
                className="block text-center text-xs text-[#737A76] hover:text-[#171A19] font-medium"
              >
                ← Change Time
              </Link>

              <div className="pt-2 border-t border-[#F2EFE8] flex items-center justify-center gap-1.5 text-[10.5px] text-[#555C58]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Secure Escrow Deposit Guarantee</span>
              </div>

              {/* Chat Desk Box */}
              <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#EDEAE1] flex items-center justify-between text-xs">
                <div className="space-y-0.5">
                  <div className="font-bold text-[#171A19]">Need custom film festival hours?</div>
                  <div className="text-[10.5px] text-[#737A76]">Speak to Kolkata lifestyle desk</div>
                </div>
                <button
                  onClick={() => alert("Connecting to lifestyle desk agent.")}
                  className="px-2.5 py-1 bg-white border border-[#E7E4DC] rounded-lg text-[11px] font-semibold text-[#171A19] hover:bg-gray-50 cursor-pointer"
                >
                  Chat Desk
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#FAF9F5] border-t border-[#E7E4DC] pt-10 pb-8 text-[#4D5350]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#78817D]">
          <div>
            © 2025 CoFriend Lifestyle Services Pvt. Ltd. Strict Platonic Policy Guaranteed. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-medium text-[#555E59]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B47414]" />
            <span>Handcrafted for urban India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
