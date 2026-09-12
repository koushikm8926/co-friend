"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Lock,
  MessageSquare,
  Download,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Check,
  Star,
  Film,
  Key,
  Shield,
  HelpCircle,
} from "lucide-react";

export default function BookingConfirmationPage() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<string[]>([
    "Hi Sourav! Looking forward to Sunday's screening at South City. I'll arrive 15 minutes early near the 5th floor concession stand.",
  ]);
  const [chatInput, setChatInput] = useState("");

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    setChatMessages((prev) => [...prev, chatInput]);
    setChatInput("");
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
              className="text-[#171A19] font-semibold py-1 border-b-2 border-purple-600"
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

      {/* Main Confirmation Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 space-y-8">
        {/* Header Badge & Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex flex-col items-center">
            <div className="w-14 h-14 bg-[#FAF0E6] text-purple-700 rounded-full flex items-center justify-center border-2 border-[#F6D0C7] shadow-sm mb-2">
              <Check className="w-7 h-7 stroke-[2.5]" />
            </div>
            <span className="text-[10.5px] font-bold tracking-widest text-purple-700 uppercase">
              Escrow Protected
            </span>
          </div>

          <div className="space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#737A76]">
              Concierge Reservation Confirmed
            </div>
            <h1 className="text-3xl sm:text-4xl font-outfit font-bold text-[#171A19]">
              Your CoFriend is Booked!
            </h1>
            <p className="text-xs text-[#555C58]">
              <strong>ID: #CF-KOL-8829-DEC</strong> • Payment held in RBI-compliant escrow
            </p>
          </div>
        </div>

        {/* Official Verified Schedule Card */}
        <div className="bg-white rounded-3xl border border-purple-100/80 overflow-hidden shadow-sm">
          <div className="bg-[#FAFAFD] px-5 py-2.5 border-b border-purple-100/80 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 font-bold text-[#171A19]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>OFFICIAL COFRIEND.IN VERIFIED SCHEDULE</span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-800 bg-[#EBF7EE] px-2 py-0.5 rounded-full border border-[#CEEAD6]">
              Strict Platonic Protocol Applied
            </span>
          </div>

          <div className="p-6 sm:p-7 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left Photo & Fellow Details (5 cols) */}
            <div className="md:col-span-5 space-y-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 border border-[#E0DDD5]">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                  alt="Ananya Sharma"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2.5 left-2.5 bg-black/65 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-white flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>ID &amp; Police Cleared</span>
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-black/65 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-white flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>4.96 (42 walks)</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase text-[#737A76]">
                  Selected Lifestyle Fellow
                </span>
                <h3 className="font-outfit font-bold text-lg text-[#171A19]">
                  Ananya Sharma
                </h3>
                <p className="text-xs text-[#555C58] leading-tight">
                  Film Studies alumnus, Satyajit Ray enthusiast &amp; curated art companion • Fluent in English, Bengali, Hindi.
                </p>
                <div className="flex gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded bg-[#FAFAFD] border border-[#EDEAE1] text-[10.5px] font-semibold text-[#4D5350]">
                    Movie CoFriend Outing
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#FAFAFD] border border-[#EDEAE1] text-[10.5px] font-semibold text-[#4D5350]">
                    Cinema &amp; Discussion
                  </span>
                </div>
              </div>
            </div>

            {/* Right Rendezvous & Financial Summary (7 cols) */}
            <div className="md:col-span-7 space-y-4 md:border-l md:border-[#F0EEE7] md:pl-6 text-xs">
              <div className="space-y-1">
                <div className="text-[10px] font-bold uppercase text-[#737A76] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-purple-700" />
                  Meeting Schedule
                </div>
                <div className="font-bold text-base text-[#171A19]">
                  Sunday, 15 December 2024
                </div>
                <div className="text-xs font-semibold text-purple-700">
                  03:30 PM – 06:30 PM (3 Hours Duration)
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <div className="text-[10px] font-bold uppercase text-[#737A76] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-purple-700" />
                  Designated Public Rendezvous
                </div>
                <div className="font-bold text-sm text-[#171A19]">
                  South City Mall / Nandan Cinema
                </div>
                <div className="text-[11px] text-[#555C58]">
                  Prince Anwar Shah Rd / Rabindra Sadan, South Kolkata • Concierge monitored public zone
                </div>
                <div className="p-2 rounded-lg bg-[#FAF0E6] text-purple-700 font-semibold text-[11px] mt-1">
                  📍 Meet at Main Atrium Fountain Desk
                </div>
              </div>

              {/* Financial Recap Box */}
              <div className="p-3.5 bg-[#FAFAFD] rounded-2xl border border-[#EDEAE1] space-y-1.5">
                <div className="flex justify-between text-[#555C58]">
                  <span>Companionship Fee (3 hrs @ ₹350/hr)</span>
                  <span className="font-semibold text-[#171A19]">₹1,050.00</span>
                </div>
                <div className="flex justify-between text-[#555C58]">
                  <span>Safety Escrow &amp; Insurance Protection</span>
                  <span className="font-semibold text-[#171A19]">₹100.00</span>
                </div>
                <div className="flex justify-between text-[#555C58]">
                  <span>GST (18% on facilitation fee)</span>
                  <span className="font-semibold text-[#171A19]">₹89.00</span>
                </div>
                <div className="flex justify-between items-baseline font-bold text-[#171A19] pt-2 border-t border-[#E5E2DA]">
                  <div>
                    <span>Total Amount Authorized</span>
                    <div className="text-[10px] font-normal text-[#737A76]">
                      Locked safely in TrustEscrow Vault
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-outfit text-purple-700">
                      ₹1,239.00
                    </span>
                    <div className="text-[10px] font-bold text-emerald-700">
                      PAID • UPI Autopay
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FAFAFD] px-6 py-2.5 border-t border-purple-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-[#737A76]">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Funds are held under trustee custody and only disbursed after you exchange your 4-digit End OTP.</span>
            </div>
            <span className="font-mono text-[10px]">TXN: TXN-8921-ESCROW-IN</span>
          </div>
        </div>

        {/* Two Stage Handshake Execution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Stage 01 */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-purple-100/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-[#FAF0E6] text-purple-700 text-[10px] font-bold uppercase">
                Stage 01 • Arrival
              </span>
              <Key className="w-4 h-4 text-purple-700" />
            </div>

            <h4 className="font-outfit font-bold text-base text-[#171A19]">
              Start OTP Security Handshake
            </h4>

            <p className="text-xs text-[#555C58] leading-relaxed">
              Your unique 4-digit Start OTP will unlock in your dashboard precisely
              at <strong>03:00 PM (30 minutes prior)</strong>. Share this code with
              Ananya in person at South City Mall to formally commence your booked
              session.
            </p>

            <div className="p-3 bg-[#FAFAFD] rounded-xl border border-[#EDEAE1] flex items-center justify-between">
              <div className="text-[11px] font-semibold text-[#737A76] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#B47414]" />
                <span>Unlocks in 3h 12m</span>
              </div>
              <div className="flex gap-1.5">
                {["4", "8", "9", "2"].map((digit, i) => (
                  <span
                    key={i}
                    className="w-7 h-8 bg-white border border-[#D5DCD0] rounded-lg font-mono font-bold text-sm text-purple-700 flex items-center justify-center shadow-xs"
                  >
                    {digit}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stage 02 */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-purple-100/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBF7EE] text-[#1E7E34] text-[10px] font-bold uppercase">
                Stage 02 • Conclusion
              </span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>

            <h4 className="font-outfit font-bold text-base text-[#171A19]">
              Completion &amp; Escrow Release
            </h4>

            <p className="text-xs text-[#555C58] leading-relaxed">
              At the conclusion of your 3-hour cinema outing (around 06:30 PM),
              simply hand over your End OTP to release payment. If an outing is
              curtailed or rescheduled within terms, concierge protection will
              guarantee fair adjustments.
            </p>

            <div className="p-3 bg-[#FAFAFD] rounded-xl border border-[#EDEAE1] flex items-center justify-between text-xs">
              <span className="font-semibold text-emerald-700 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                Live Escort Monitoring active
              </span>
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                ACTIVE SOS READY
              </span>
            </div>
          </div>
        </div>

        {/* Encrypted In-App Concierge Chat Strip */}
        <div className="bg-white rounded-3xl p-5 border border-purple-100/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF0E6] text-purple-700 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-outfit font-bold text-sm text-[#171A19]">
                Encrypted In-App Concierge Chat Active
              </h4>
              <p className="text-xs text-[#555C58]">
                Coordinate outfit themes, cinema ticket bookings, or specific theatre screen meet-points directly without revealing your personal mobile numbers.
              </p>
            </div>
          </div>

          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="px-4 py-2.5 rounded-xl bg-[#FAFAFD] hover:bg-[#FAF0E6] border border-purple-100/80 hover:border-[#F6D0C7] text-xs font-semibold text-[#171A19] hover:text-purple-700 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-purple-700" />
            <span>Message Ananya</span>
          </button>
        </div>

        {/* In-App Chat Drawer */}
        {chatOpen && (
          <div className="bg-white rounded-3xl p-5 border border-purple-600/30 shadow-lg space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-[#F0EEE7]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-xs text-[#171A19]">
                  Live Concierge Bridge • Ananya Sharma
                </span>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-xs text-[#737A76] hover:text-[#171A19]"
              >
                Close Chat
              </button>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto p-2 bg-[#FAFAFD] rounded-xl text-xs">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2.5 rounded-xl max-w-[85%] ${
                    i % 2 === 0
                      ? "bg-white border border-[#EDEAE1] text-[#171A19] self-start"
                      : "bg-purple-600 text-white ml-auto"
                  }`}
                >
                  {msg}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type a message to coordinate Sunday meetup..."
                className="flex-1 px-3.5 py-2 bg-[#FAFAFD] rounded-xl border border-[#DCD7CD] text-xs text-[#171A19] focus:outline-none focus:border-purple-600"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs font-semibold rounded-xl"
              >
                Send
              </button>
            </div>
          </div>
        )}

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/available-now"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs sm:text-sm font-semibold text-center shadow-md active:scale-98 transition-all flex items-center justify-center gap-2"
          >
            <span>View in My Bookings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={() => alert("Downloading official PDF tax receipt & escrow voucher.")}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-[#FAFAFD] text-[#171A19] border border-purple-100/80 text-xs sm:text-sm font-semibold text-center shadow-xs active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-purple-700" />
            <span>Download PDF Receipt</span>
          </button>
        </div>

        <div className="text-center pt-2">
          <Link
            href="/"
            className="text-xs text-[#737A76] hover:text-[#171A19] font-medium"
          >
            ← Return to Homepage
          </Link>
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
