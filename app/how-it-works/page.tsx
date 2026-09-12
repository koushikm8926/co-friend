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
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Info,
  Lock,
  PhoneCall,
  UserCheck,
  HeartHandshake,
  Shield,
  EyeOff,
  MessageSquare,
  HelpCircle,
  Compass,
  CreditCard,
  Key,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "How does the Dual OTP verification work?",
    answer:
      "When your booking is confirmed, a unique 4-digit Guest OTP is generated in your app. Upon meeting at the public venue, you share this OTP with your CoFriend to commence the session. When the outing concludes, your companion provides their Host OTP to finalize the escrow release safely.",
  },
  {
    question: "Can I extend my booking during an outing?",
    answer:
      "Yes! If both you and your CoFriend agree to extend the outing, you can tap 'Extend Session' in the app. Additional hours are charged at the transparent hourly rate without any surge or penalty fees.",
  },
  {
    question: "What happens if a companion is late or cancels?",
    answer:
      "All bookings are escrow-protected. In the rare event of a cancellation or delay exceeding 15 minutes, you receive an instant 100% refund plus a ₹200 concierge credit, and our team immediately assists in rematching you.",
  },
  {
    question: "Is the service strictly platonic?",
    answer:
      "Absolutely. CoFriend is built exclusively for non-romantic social companionship, hobby accompaniment, cinema outings, and cultural tours. We maintain a zero-tolerance policy against romantic solicitations or inappropriate behavior.",
  },
  {
    question: "How are companions vetted and identity verified?",
    answer:
      "Every companion undergoes a 4-step onboarding pipeline: (1) Government Aadhaar identity verification, (2) Criminal and residential background clearance, (3) In-person video interview evaluating communication and behavioral etiquette, and (4) Mandatory signing of the Platonic Safety Charter.",
  },
];

export default function HowItWorksPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTabCategory, setActiveTabCategory] = useState("Cinema");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1E2421] font-sans antialiased flex flex-col selection:bg-[#F2DDD7] selection:text-[#832913]">
      {/* Top Notice Bar */}
      <div className="bg-[#FFF9E6] border-b border-[#F4E3A8] px-4 py-1.5 text-center text-[11px] sm:text-xs font-semibold text-[#8F6200] tracking-wide flex items-center justify-center gap-2">
        <span>
          🛡 100% STRICT PLATONIC & IDENTITY VERIFIED NETWORK • ALL COMPANIONS GO
          THROUGH 4-STEP POLICE & AADHAAR BACKGROUND CHECKS
        </span>
      </div>

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
              className="transition-colors hover:text-[#171A19] py-1"
            >
              Available Now
            </Link>
            <Link
              href="/how-it-works"
              className="text-[#171A19] font-semibold py-1 border-b-2 border-[#A8381E]"
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
              className="bg-[#9E331A] hover:bg-[#852A14] text-white px-4.5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow active:scale-98 flex items-center gap-2 cursor-pointer"
            >
              <span>Become a CoFriend</span>
            </Link>
            <div className="w-9 h-9 rounded-full bg-[#E5DFD4] border border-[#D5CDBC] flex items-center justify-center text-xs font-semibold text-[#5A5043]">
              <span>JD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 space-y-4 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCECE8] border border-[#F6D0C7] text-[#9E331A] text-[11px] font-bold tracking-wider uppercase">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Platonic Companionship Concierge</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-[46px] leading-tight font-serif tracking-tight text-[#171A19]">
          A better way to find company for your plans.
        </h1>

        <p className="text-[#555C58] text-sm sm:text-base max-w-3xl leading-relaxed">
          CoFriend is India&apos;s premier social companionship platform, connecting you
          to vetted, platonic fellows for events, cinema, gallery walks, wellness
          retreats, and city discoveries on your own schedule.
        </p>

        {/* Verification Banner */}
        <div className="p-3.5 bg-white rounded-2xl border border-[#E7E4DC] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#555C58]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong>100% PLATONIC & IDENTITY VERIFIED NETWORK</strong> • All
              companions undergo rigorous 4-step background checks and code of
              conduct certification.
            </span>
          </div>
          <Link
            href="/services"
            className="text-[#9E331A] font-semibold hover:underline shrink-0 flex items-center gap-1"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Flow: The 5-Step Concierge Flow */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        <section className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAE7DD] pb-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#737A76]">
                Step-by-Step Walkthrough
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171A19]">
                The 5-Step Concierge Flow
              </h2>
            </div>
            <p className="text-xs text-[#737A76] max-w-xs">
              Designed with escrow security, GPS radius bounds, and transparent
              hourly billing.
            </p>
          </div>

          {/* 5 Vertical Flow Rows */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white rounded-3xl p-6 border border-[#E7E4DC] shadow-xs">
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#9E331A] text-white flex items-center justify-center font-serif font-bold text-sm">
                    1
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9E331A]">
                    Step 01
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#171A19]">
                  Choose a Service
                </h3>
                <p className="text-xs sm:text-sm text-[#555C58] leading-relaxed">
                  Select your desired outing format from our curated catalog: Movie
                  Premiere, Rooftop Dining, Western Ghats Trekking, Art Gallery Tour,
                  or City Shopping.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Cinema", "Rooftop Dining", "Heritage Walk", "Trekking & Fitness"].map(
                    (cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveTabCategory(cat)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                          activeTabCategory === cat
                            ? "bg-[#171A19] text-white"
                            : "bg-[#FAF9F5] text-[#555C58] border border-[#E7E4DC]"
                        }`}
                      >
                        {cat}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Visual Mockup for Step 1 */}
              <div className="lg:col-span-6 bg-[#FAF9F5] rounded-2xl p-4 border border-[#EDEAE1] grid grid-cols-2 gap-3">
                <div className="p-3 bg-white rounded-xl border border-[#E5E2DA] shadow-xs space-y-1">
                  <Film className="w-5 h-5 text-[#9E331A]" />
                  <div className="text-xs font-bold text-[#171A19]">Movie CoFriend</div>
                  <div className="text-[10px] text-[#737A76]">Multiplex & Arthouse</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E5E2DA] shadow-xs space-y-1">
                  <HeartHandshake className="w-5 h-5 text-emerald-600" />
                  <div className="text-xs font-bold text-[#171A19]">Dinner & Cafe</div>
                  <div className="text-[10px] text-[#737A76]">Social Food Trails</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E5E2DA] shadow-xs space-y-1">
                  <Compass className="w-5 h-5 text-blue-600" />
                  <div className="text-xs font-bold text-[#171A19]">Trek & Outdoors</div>
                  <div className="text-[10px] text-[#737A76]">Trails & Fitness</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E5E2DA] shadow-xs space-y-1">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <div className="text-xs font-bold text-[#171A19]">Gallery & Culture</div>
                  <div className="text-[10px] text-[#737A76]">Museums & Heritage</div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white rounded-3xl p-6 border border-[#E7E4DC] shadow-xs">
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#9E331A] text-white flex items-center justify-center font-serif font-bold text-sm">
                    2
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9E331A]">
                    Step 02
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#171A19]">
                  Find a Verified CoFriend
                </h3>
                <p className="text-xs sm:text-sm text-[#555C58] leading-relaxed">
                  Browse verified host profiles with real photos, verified Aadhaar
                  badges, spoken languages, authentic reviews, and transparent flat
                  rates.
                </p>
                <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5 pt-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% ID Verified & Interviewed</span>
                </div>
              </div>

              {/* Visual Mockup for Step 2 */}
              <div className="lg:col-span-6 bg-[#FAF9F5] rounded-2xl p-4 border border-[#EDEAE1]">
                <div className="bg-white rounded-xl p-3.5 border border-[#E5E2DA] shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-stone-200 shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                        alt="Arya Sen"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-[#171A19]">Arya Sen</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                          Aadhaar Verified
                        </span>
                      </div>
                      <div className="text-[11px] text-[#555C58]">
                        Sociology & Cinema buff • 4.9 ⭐ (120+)
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#9E331A]">₹350/hr</div>
                    <span className="text-[10px] text-emerald-600 font-medium">
                      Available Today
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white rounded-3xl p-6 border border-[#E7E4DC] shadow-xs">
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#9E331A] text-white flex items-center justify-center font-serif font-bold text-sm">
                    3
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9E331A]">
                    Step 03
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#171A19]">
                  Select Date, Time & Duration
                </h3>
                <p className="text-xs sm:text-sm text-[#555C58] leading-relaxed">
                  Choose your venue location and exact outing hours. Transparent
                  pricing calculates exactly what you pay before checkout with no surge
                  pricing.
                </p>
                <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#EDEAE1] text-xs text-[#555C58]">
                  <strong>Kolkata South City Mall INOX</strong> • Sat, 14 Dec • 4:00 PM (3 hrs)
                </div>
              </div>

              {/* Visual Mockup for Step 3: Estimator */}
              <div className="lg:col-span-6 bg-[#FAF9F5] rounded-2xl p-4 border border-[#EDEAE1] space-y-2 text-xs">
                <div className="flex justify-between font-semibold text-[#171A19] pb-2 border-b border-[#E5E2DA]">
                  <span>Outing Booking Breakdown</span>
                  <span className="text-[#9E331A]">3 Hours Outing</span>
                </div>
                <div className="flex justify-between text-[#555C58]">
                  <span>Companion Base Rate (₹350 × 3 hrs)</span>
                  <span>₹1,050.00</span>
                </div>
                <div className="flex justify-between text-[#555C58]">
                  <span>Safety Concierge & Escrow Protection</span>
                  <span>₹200.00</span>
                </div>
                <div className="flex justify-between font-bold text-[#171A19] pt-2 border-t border-[#E5E2DA] text-sm">
                  <span>Total Payable</span>
                  <span className="text-[#9E331A]">₹1,250.00</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white rounded-3xl p-6 border border-[#E7E4DC] shadow-xs">
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#9E331A] text-white flex items-center justify-center font-serif font-bold text-sm">
                    4
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9E331A]">
                    Step 04
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#171A19]">
                  Book & Pay with Escrow Protection
                </h3>
                <p className="text-xs sm:text-sm text-[#555C58] leading-relaxed">
                  Pay securely via UPI, Card, or Netbanking. Your funds remain
                  locked in escrow and are released only when the outing is safely
                  concluded.
                </p>
                <div className="text-xs text-[#B47414] font-semibold flex items-center gap-1.5">
                  <Lock className="w-4 h-4" />
                  <span>100% Escrow Protected Booking Guarantee</span>
                </div>
              </div>

              {/* Visual Mockup for Step 4 */}
              <div className="lg:col-span-6 bg-[#FAF9F5] rounded-2xl p-4 border border-[#EDEAE1] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div className="text-xs space-y-0.5">
                  <div className="font-bold text-[#171A19]">
                    Protected Escrow Account
                  </div>
                  <p className="text-[11px] text-[#555C58]">
                    Funds held in trust with RBI-regulated banking partners.
                    Disbursed directly post mutual OTP acknowledgement.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white rounded-3xl p-6 border border-[#E7E4DC] shadow-xs">
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#9E331A] text-white flex items-center justify-center font-serif font-bold text-sm">
                    5
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9E331A]">
                    Step 05
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#171A19]">
                  Meet, Complete with Dual OTP & Review
                </h3>
                <p className="text-xs sm:text-sm text-[#555C58] leading-relaxed">
                  Meet at the public venue. Share your 4-digit Guest OTP to start
                  the session. At the end of the outing, your fellow shares their Host
                  OTP to conclude.
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <div className="p-2 rounded-xl bg-[#FCECE8] border border-[#F6D0C7] text-center min-w-[100px]">
                    <div className="text-[9px] font-bold text-[#9E331A]">GUEST OTP</div>
                    <div className="text-lg font-mono font-bold text-[#9E331A]">4892</div>
                  </div>
                  <div className="p-2 rounded-xl bg-[#EBF7EE] border border-[#CEEAD6] text-center min-w-[100px]">
                    <div className="text-[9px] font-bold text-[#1E7E34]">HOST OTP</div>
                    <div className="text-lg font-mono font-bold text-[#1E7E34]">7108</div>
                  </div>
                </div>
              </div>

              {/* Visual Mockup for Step 5 */}
              <div className="lg:col-span-6 bg-[#FAF9F5] rounded-2xl p-4 border border-[#EDEAE1] space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-[#171A19]">
                  <span>Outing Completed Successfully</span>
                  <span className="text-emerald-700">Verified</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[11px] text-[#555C58] italic">
                  “Polite, insightful companion for the film festival. Felt safe,
                  enjoyed the discussions, and would book again!”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Quote Card */}
        <section className="bg-[#FAF7EE] rounded-3xl p-8 border border-[#EAE5D8] text-center max-w-3xl mx-auto space-y-3">
          <div className="text-amber-700 text-xs font-bold tracking-widest uppercase">
            Platonic Charter Policy
          </div>
          <blockquote className="text-lg sm:text-xl font-serif italic text-[#171A19] leading-relaxed">
            “True companionship isn&apos;t transactional or intrusive. It is
            courteous, reliable presence for the moments in life you&apos;d rather
            share.”
          </blockquote>
          <div className="text-xs font-medium text-[#737A76]">
            — CoFriend Editorial & Safety Board
          </div>
        </section>

        {/* 4 Pillars of Safety */}
        <section className="space-y-6">
          <div className="space-y-1 text-center max-w-2xl mx-auto">
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#737A76]">
              Trust Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171A19]">
              Built from the ground up for absolute comfort & safety.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-2xl p-5 border border-[#E7E4DC] shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-full bg-[#EBF7EE] text-[#1E7E34] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#171A19]">
                100% ID & Police Background Check
              </h3>
              <p className="text-xs text-[#555C58] leading-relaxed">
                Govt. Aadhaar validation, permanent residence confirmation, and
                clean police verification for every onboarded host.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E7E4DC] shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-full bg-[#FEF6E9] text-[#B47414] flex items-center justify-center">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#171A19]">
                Real-time Safety Concierge
              </h3>
              <p className="text-xs text-[#555C58] leading-relaxed">
                24/7 dedicated response desk with live session status monitoring and
                one-tap SOS assistance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E7E4DC] shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-full bg-[#EFF2EB] text-[#171A19] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#171A19]">
                Public Locations First
              </h3>
              <p className="text-xs text-[#555C58] leading-relaxed">
                All outings are restricted strictly to commercial public venues,
                multiplexes, verified cafes, and guided tour trails.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#E7E4DC] shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-full bg-[#FCECE8] text-[#9E331A] flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#171A19]">
                Zero-Pressure Guarantee
              </h3>
              <p className="text-xs text-[#555C58] leading-relaxed">
                Strict platonic boundary enforcement. No romantic pressure,
                intrusive questions, or unsolicited contact after the session.
              </p>
            </div>
          </div>
        </section>

        {/* Masked Privacy Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E7E4DC] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F3EB] text-[#4D5350] text-xs font-semibold">
                <EyeOff className="w-3.5 h-3.5 text-[#9E331A]" />
                <span>Privacy by Design</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171A19] leading-snug">
                Your phone number and private records stay shielded. Always.
              </h2>

              <p className="text-xs sm:text-sm text-[#555C58] leading-relaxed">
                All communications take place via our masked in-app concierge
                network. Your personal phone number, home address, and financial
                details are never exposed to companions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#171A19]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Masked In-App Calling</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#171A19]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero Shared Contact Info</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#171A19]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>256-Bit Encrypted Escrow</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#171A19]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>24/7 Concierge Moderation</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 border border-[#E7E4DC]">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
                alt="Friends chatting safely"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="space-y-6 max-w-3xl mx-auto">
          <div className="space-y-1 text-center">
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#737A76]">
              Common Questions
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171A19]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#555C58]">
              Clear, transparent answers to help you book your first outing with confidence.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#E7E4DC] overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF9F5] transition-colors"
                  >
                    <span className="font-serif font-bold text-sm sm:text-base text-[#171A19]">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#9E331A] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#737A76] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#555C58] leading-relaxed border-t border-[#F5F3EB]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-[#9E331A] rounded-3xl p-8 sm:p-10 text-white text-center space-y-5 shadow-lg">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white text-[11px] font-bold uppercase tracking-wider">
            <span>Verified Social Companionship Across India</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight max-w-xl mx-auto">
            Ready to plan your next outing?
          </h2>

          <p className="text-xs sm:text-sm text-stone-200 max-w-lg mx-auto leading-relaxed">
            Experience vetted, platonic companionship for cinema, dining, hiking,
            and cultural outings in your city today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/available-now"
              className="bg-white text-[#9E331A] hover:bg-stone-100 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-98"
            >
              Book a CoFriend in 45 Mins
            </Link>
            <Link
              href="/#become-cofriend"
              className="bg-[#852A14] hover:bg-[#732310] text-white border border-white/20 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-98"
            >
              Apply to Become a CoFriend
            </Link>
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
                      className="hover:text-[#9E331A] transition-colors"
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
    </div>
  );
}
