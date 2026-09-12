"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  MapPin,
  Calendar,
  Clock,
  Star,
  CheckCircle2,
  Lock,
  ArrowRight,
  Edit2,
  PhoneCall,
  Sparkles,
  Check,
  X,
  FileText,
} from "lucide-react";

export default function BookSummaryPage() {
  const router = useRouter();
  const [agreedToCharter, setAgreedToCharter] = useState(true);

  const handleProceed = () => {
    if (!agreedToCharter) {
      alert("Please accept the CoFriend Platonic Conduct Charter to proceed.");
      return;
    }
    router.push("/book/checkout");
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

      {/* Stepper Bar */}
      <div className="bg-[#FAFAFD] border-b border-purple-100/80 py-3">
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
              <span>3. Date</span>
            </div>
            <div className="w-4 h-px bg-stone-300 shrink-0" />

            <div className="flex items-center gap-1.5 text-stone-500 shrink-0">
              <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>4. Time</span>
            </div>
            <div className="w-4 h-px bg-stone-300 shrink-0" />

            <div className="flex items-center gap-1.5 text-stone-500 shrink-0">
              <span className="w-5 h-5 rounded-full bg-[#EBF7EE] text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>5. Duration</span>
            </div>
            <div className="w-4 h-px bg-stone-300 shrink-0" />

            <div className="flex items-center gap-1.5 font-bold text-purple-700 shrink-0">
              <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">
                6
              </span>
              <span>6. Summary &amp; Review</span>
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
              <div className="text-[10.5px] font-bold uppercase tracking-widest text-purple-700">
                Step 06 of 7 • Platonic Lifestyle Escrow
              </div>
              <h1 className="text-2xl sm:text-3xl font-outfit font-bold text-[#171A19]">
                Review your booking details
              </h1>
              <p className="text-xs text-[#555C58] leading-relaxed">
                Please check your appointment parameters before proceeding to
                RBI-compliant escrow payment.
              </p>
            </div>

            {/* Booking Details Card */}
            <div className="bg-white rounded-3xl p-6 border border-purple-100/80 shadow-xs space-y-5">
              {/* Host Strip */}
              <div className="p-4 bg-[#FAFAFD] rounded-2xl border border-[#EDEAE1] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
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
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-outfit font-bold text-base text-[#171A19]">
                        Ananya Sharma
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                        Verified Fellow
                      </span>
                    </div>
                    <div className="text-xs text-[#555C58]">
                      ★ 4.96 (42 sessions) • Cinema &amp; Literature Aficionado • Speaks English, Bengali, Hindi
                    </div>
                  </div>
                </div>

                <Link
                  href="/profile/ananya-sharma"
                  className="text-xs font-semibold text-purple-700 hover:underline self-end sm:self-auto"
                >
                  View Profile ↗
                </Link>
              </div>

              {/* Booked Experience */}
              <div className="p-3.5 bg-[#FAF0E6] rounded-2xl border border-[#F6D0C7] text-xs space-y-1">
                <span className="text-[10px] font-bold uppercase text-purple-700">
                  Booked Experience
                </span>
                <div className="font-outfit font-bold text-sm text-[#171A19]">
                  Movie CoFriend — South City Mall / Nandan Arthouse Screening
                </div>
              </div>

              {/* Date & Time Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-[#FAFAFD] rounded-xl border border-[#EDEAE1] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#737A76]">
                      Date
                    </span>
                    <div className="font-bold text-[#171A19] mt-0.5">
                      Sunday, 15 December 2024
                    </div>
                  </div>
                  <Link
                    href="/book/date"
                    className="p-1.5 rounded-lg hover:bg-white text-purple-700"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="p-3.5 bg-[#FAFAFD] rounded-xl border border-[#EDEAE1] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#737A76]">
                      Time Window
                    </span>
                    <div className="font-bold text-[#171A19] mt-0.5">
                      03:30 PM – 06:30 PM (3.0 Hours Duration)
                    </div>
                  </div>
                  <Link
                    href="/book/time"
                    className="p-1.5 rounded-lg hover:bg-white text-purple-700"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Rendezvous Point */}
              <div className="p-3.5 bg-[#FAFAFD] rounded-xl border border-[#EDEAE1] flex items-start justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase text-[#737A76]">
                    Designated Public Rendezvous Point
                  </span>
                  <div className="font-bold text-[#171A19]">
                    In front of Box Office / Cafe Coffee Day, Quest Mall or South City Mall
                  </div>
                  <div className="text-[11px] text-[#737A76]">
                    📍 Kolkata • Public concierge protocol active
                  </div>
                </div>
                <button
                  onClick={() => alert("Specify foyer/gate location modal opening.")}
                  className="text-xs font-semibold text-purple-700 hover:underline shrink-0"
                >
                  Specify Gate/Foyer
                </button>
              </div>

              {/* Session Agenda */}
              <div className="p-3.5 bg-[#FAFAFD] rounded-xl border border-[#EDEAE1] space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-[#737A76]">
                    Session Agenda &amp; Outing Focus
                  </span>
                  <span className="text-[10px] text-emerald-700 font-semibold">
                    Shared with Ananya
                  </span>
                </div>
                <p className="text-[#555C58] italic leading-relaxed">
                  “Watching Satyajit Ray retrospective screening followed by brief coffee discussion at the cinema atrium café.”
                </p>
              </div>
            </div>

            {/* Transparent Escrow & Fee Breakdown */}
            <div className="bg-white rounded-3xl p-6 border border-purple-100/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EEE7]">
                <div>
                  <h3 className="font-outfit font-bold text-base text-[#171A19]">
                    Transparent Escrow &amp; Fee Breakdown
                  </h3>
                  <p className="text-[11px] text-[#737A76]">
                    Protected under RBI-supervised non-interest holding account
                  </p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#EBF7EE] text-[#1E7E34] text-[10px] font-bold">
                  Vault Secured
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-[#555C58]">
                <div className="flex justify-between">
                  <span>Hourly Companion Rate (₹350.00 × 3 hrs)</span>
                  <span className="font-semibold text-[#171A19]">₹1,050.00</span>
                </div>

                <div className="flex justify-between items-center text-[#1E7E34]">
                  <span className="flex items-center gap-1.5">
                    Safety Concierge &amp; Dual OTP Escrow Fee
                    <span className="px-1.5 py-0.2 bg-[#FEF6E9] text-[#B47414] text-[9px] font-bold rounded">
                      Promotional Free
                    </span>
                  </span>
                  <span>
                    <span className="line-through text-[#737A76] mr-1">₹150.00</span>
                    ₹0.00
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Goods &amp; Services Tax (GST 18%) <span className="text-[10px] text-[#737A76]">SAC: 998336 (Lifestyle Booking)</span></span>
                  <span className="font-semibold text-[#171A19]">₹189.00</span>
                </div>

                <div className="flex justify-between items-baseline font-bold text-[#171A19] pt-3 border-t border-[#EDEAE1]">
                  <div>
                    <div className="text-sm">Total Payable Escrow Amount</div>
                    <div className="text-[10px] font-normal text-[#737A76]">
                      Includes all taxes and end-to-end concierge monitoring
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-outfit text-purple-700">
                      ₹1,239.00
                    </span>
                    <div className="text-[10px] font-normal text-emerald-700">
                      Released only after your End OTP approval
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Agreement Checkbox */}
            <div className="p-4 bg-white rounded-2xl border border-purple-100/80 shadow-xs space-y-2 text-xs">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToCharter}
                  onChange={(e) => setAgreedToCharter(e.target.checked)}
                  className="mt-0.5 accent-purple-600 rounded"
                />
                <div className="space-y-0.5">
                  <div className="font-bold text-[#171A19]">
                    I agree to the CoFriend Platonic Conduct Charter &amp; Vault Escrow Rules
                  </div>
                  <p className="text-[11px] text-[#555C58] leading-relaxed">
                    Strictly professional, zero physical contact, curated public venues only. I understand that funds remain locked in vault escrow and will only be disbursed to Ananya Sharma once both parties submit the concluding 4-digit verification code at the end of the meeting.
                  </p>
                </div>
              </label>

              <div className="pt-2 border-t border-[#F0EEE7] flex gap-4 text-[11px]">
                <Link href="/how-it-works" className="font-semibold text-purple-700 hover:underline">
                  📖 Read Platonic Charter
                </Link>
                <Link href="/how-it-works" className="font-semibold text-purple-700 hover:underline">
                  🛡 Escrow Agreement &amp; Refund SLA
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Checkout Gateway Triggers & Maps */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-purple-100/80 shadow-lg space-y-5">
              <div className="space-y-1 pb-3 border-b border-[#F0EEE7]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#737A76]">
                    Payable Now
                  </span>
                  <span className="px-2 py-0.5 bg-stone-100 rounded text-[10px] font-bold text-stone-600">
                    INR
                  </span>
                </div>
                <div className="text-3xl font-outfit font-bold text-[#171A19]">
                  ₹1,239<span className="text-base font-normal text-[#737A76]">.00</span>
                </div>
                <div className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Zero advance release to companion</span>
                </div>
              </div>

              {/* Proceed Button */}
              <button
                onClick={handleProceed}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Proceed to Secure Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[10.5px] text-[#737A76]">
                Supports UPI, RuPay, Visa, Mastercard, Net Banking
              </div>

              {/* Logged in User Pill */}
              <div className="p-2.5 bg-[#FAFAFD] rounded-xl border border-[#EDEAE1] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#E5DFD4] text-[10px] font-bold flex items-center justify-center text-[#5A5043]">
                    SG
                  </div>
                  <div>
                    <div className="font-bold text-[#171A19]">Sourav Ghosh</div>
                    <div className="text-[10.5px] text-[#737A76]">+91 98301 •••••</div>
                  </div>
                </div>
                <span className="text-[10.5px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Logged In
                </span>
              </div>

              {/* Safety & Guarantee Seals (3 cards) */}
              <div className="space-y-2.5 pt-1 text-xs">
                <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#737A76]">
                  Safety &amp; Guarantee Seals
                </div>

                <div className="p-3 bg-[#FAFAFD] rounded-xl border border-[#EDEAE1] flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#171A19]">100% Escrow Protection</div>
                    <p className="text-[10.5px] text-[#555C58]">
                      Funds stay in an institutional escrow vault. Payment is disbursed only when session completion is dual-verified via encrypted OTPs.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#FAFAFD] rounded-xl border border-[#EDEAE1] flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#171A19]">4-Hour Free Cancellation</div>
                    <p className="text-[10.5px] text-[#555C58]">
                      Full instant refund if canceled up to 4 hours prior to Sunday, 03:30 PM. No questions asked.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#FAFAFD] rounded-xl border border-[#EDEAE1] flex items-start gap-2.5">
                  <PhoneCall className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#171A19]">24×7 Emergency Concierge Line</div>
                    <p className="text-[10.5px] text-[#555C58]">
                      Live human support and active location check-ins during your booking window in Kolkata.
                    </p>
                  </div>
                </div>
              </div>

              {/* Planned Venue Enclave Map Visual */}
              <div className="bg-[#FAFAFD] rounded-2xl p-3 border border-[#EDEAE1] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#171A19]">Planned Venue Enclave</span>
                  <span className="text-[10.5px] text-[#737A76]">South Kolkata Zone</span>
                </div>
                <div className="relative aspect-[16/8] rounded-xl overflow-hidden bg-stone-200 border border-stone-300 flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80"
                    alt="South Kolkata Map"
                    fill
                    className="object-cover opacity-60"
                  />
                  <div className="relative bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full shadow-md text-[10.5px] font-bold text-[#171A19] flex items-center gap-1 border border-[#CCD8CD]">
                    <MapPin className="w-3.5 h-3.5 text-purple-700" />
                    <span>South City Mall Complex • Quest Mall Option</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#FAFAFD] border-t border-purple-100/80 pt-10 pb-8 text-[#4D5350]">
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

function Building2({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
      <path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2"/>
      <path d="M18 9h-4"/>
      <path d="M18 13h-4"/>
      <path d="M18 17h-4"/>
      <path d="M10 9H6"/>
      <path d="M10 13H6"/>
      <path d="M10 17H6"/>
    </svg>
  );
}
