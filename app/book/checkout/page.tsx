"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  ShieldCheck,
  QrCode,
  CreditCard,
  Building2,
  Wallet,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  Star,
  Info,
  ArrowRight,
  PhoneCall,
  Check,
  X,
  Sparkles,
  Film,
} from "lucide-react";

export default function CheckoutPage() {
  const [paymentTab, setPaymentTab] = useState<"upi" | "card" | "netbanking" | "wallet">("upi");
  const [upiId, setUpiId] = useState("");
  const [timerSeconds, setTimerSeconds] = useState(298); // 04:58
  const [isPaidModalOpen, setIsPaidModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}s`;
  };

  const handlePay = () => {
    setIsPaidModalOpen(true);
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
      <div className="bg-[#FAFAFD] border-b border-purple-100/80 py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto gap-3 py-1 text-xs text-stone-500">
            <span className="flex items-center gap-1">1 Service &gt;</span>
            <span className="flex items-center gap-1">2 CoFriend &gt;</span>
            <span className="flex items-center gap-1">3 Date &gt;</span>
            <span className="flex items-center gap-1">4 Time &gt;</span>
            <span className="flex items-center gap-1">5 Duration &gt;</span>
            <span className="flex items-center gap-1">6 Summary &gt;</span>
            <span className="font-bold text-purple-700 flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-purple-700" />
              7. Payment (Active & Secure)
            </span>
          </div>
        </div>
      </div>

      {/* Escrow Encrypted Vault Strip */}
      <div className="bg-[#EBF7EE] border-b border-[#CEEAD6] py-2 text-center text-xs text-[#1E7E34] font-medium px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>
            <strong>Bank-Grade 256-bit Encrypted • Two-Party Escrow Vault.</strong> Funds are only disbursed to Ananya Sharma after you enter the End OTP upon completing the companion service.
          </span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 cols): Payment Options & Vault */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="text-[10.5px] font-bold uppercase tracking-widest text-purple-700">
                  Final Reservation Step
                </div>
                <h1 className="text-2xl sm:text-3xl font-outfit font-bold text-[#171A19]">
                  Checkout & Escrow Guarantee
                </h1>
              </div>
              <div className="text-xs text-[#737A76] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#B47414]" />
                <span>Escrow Session ID: <strong>SES-8891-KOL</strong></span>
              </div>
            </div>

            {/* Payment Methods Card */}
            <div className="bg-white rounded-3xl p-6 border border-purple-100/80 shadow-xs space-y-5">
              <div>
                <h2 className="text-base font-outfit font-bold text-[#171A19]">
                  Select Payment Method
                </h2>
                <p className="text-xs text-[#737A76]">
                  All transactions are backed by RBI-regulated multi-tiered escrow.
                </p>
              </div>

              {/* Tabs */}
              <div className="grid grid-cols-4 gap-2 text-xs">
                <button
                  onClick={() => setPaymentTab("upi")}
                  className={`py-2.5 px-2 rounded-xl font-semibold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    paymentTab === "upi"
                      ? "bg-purple-50 border-2 border-purple-600 text-purple-700"
                      : "bg-[#FAFAFD] border border-[#EDEAE1] text-[#555C58]"
                  }`}
                >
                  <QrCode className="w-4 h-4" />
                  <span>UPI FastPay</span>
                </button>

                <button
                  onClick={() => setPaymentTab("card")}
                  className={`py-2.5 px-2 rounded-xl font-semibold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    paymentTab === "card"
                      ? "bg-purple-50 border-2 border-purple-600 text-purple-700"
                      : "bg-[#FAFAFD] border border-[#EDEAE1] text-[#555C58]"
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Cards</span>
                </button>

                <button
                  onClick={() => setPaymentTab("netbanking")}
                  className={`py-2.5 px-2 rounded-xl font-semibold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    paymentTab === "netbanking"
                      ? "bg-purple-50 border-2 border-purple-600 text-purple-700"
                      : "bg-[#FAFAFD] border border-[#EDEAE1] text-[#555C58]"
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>Net Banking</span>
                </button>

                <button
                  onClick={() => setPaymentTab("wallet")}
                  className={`py-2.5 px-2 rounded-xl font-semibold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                    paymentTab === "wallet"
                      ? "bg-purple-50 border-2 border-purple-600 text-purple-700"
                      : "bg-[#FAFAFD] border border-[#EDEAE1] text-[#555C58]"
                  }`}
                >
                  <Wallet className="w-4 h-4" />
                  <span>Wallets</span>
                </button>
              </div>

              {/* UPI Tab Content */}
              {paymentTab === "upi" && (
                <div className="space-y-4 pt-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#171A19]">
                      Pay via Unified Payments Interface (UPI)
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      ⚡ Instant Auto-Refund Enabled
                    </span>
                  </div>

                  {/* VPA Input */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-semibold text-[#737A76]">
                      Enter your VPA / UPI ID
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="e.g. yourname@oksbi"
                        className="flex-1 px-3.5 py-2.5 rounded-xl border border-[#DCD7CD] bg-[#FAFAFD] text-xs font-semibold text-[#171A19] focus:outline-none focus:border-purple-600"
                      />
                      <button
                        onClick={handlePay}
                        className="px-4 py-2.5 bg-[#832913] hover:bg-[#6e220f] text-white rounded-xl text-xs font-semibold transition-all cursor-pointer"
                      >
                        Verify &amp; Proceed
                      </button>
                    </div>
                    {/* Extension chips */}
                    <div className="flex items-center gap-1.5 text-[11px] text-[#737A76] pt-1 flex-wrap">
                      <span>Popular extensions:</span>
                      {["@okhdfcbank", "@okaxis", "@paytm", "@ybl"].map((ext) => (
                        <button
                          key={ext}
                          onClick={() => setUpiId((prev) => (prev ? prev.split("@")[0] + ext : "username" + ext))}
                          className="px-2 py-0.5 rounded bg-[#FAFAFD] border border-[#EDEAE1] text-[10.5px] font-medium hover:bg-white cursor-pointer"
                        >
                          {ext}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative flex items-center justify-center my-3">
                    <div className="w-full border-t border-[#F0EEE7]" />
                    <span className="bg-white px-3 text-[10px] font-bold uppercase tracking-wider text-[#737A76] absolute">
                      or scan dynamically
                    </span>
                  </div>

                  {/* Dynamic QR Box */}
                  <div className="p-4 bg-[#FAFAFD] rounded-2xl border border-[#EDEAE1] flex flex-col sm:flex-row items-center gap-5">
                    <div className="bg-white p-3 rounded-2xl border border-purple-100/80 shadow-xs text-center space-y-1.5 shrink-0">
                      {/* Styled QR visual */}
                      <div className="w-32 h-32 relative bg-stone-100 rounded-xl flex items-center justify-center p-2 border border-stone-200">
                        <svg className="w-full h-full text-[#171A19]" viewBox="0 0 100 100" fill="currentColor">
                          <rect x="5" y="5" width="25" height="25" fill="#171A19" />
                          <rect x="10" y="10" width="15" height="15" fill="#FAF9F5" />
                          <rect x="13" y="13" width="9" height="9" fill="#171A19" />
                          <rect x="70" y="5" width="25" height="25" fill="#171A19" />
                          <rect x="75" y="10" width="15" height="15" fill="#FAF9F5" />
                          <rect x="78" y="13" width="9" height="9" fill="#171A19" />
                          <rect x="5" y="70" width="25" height="25" fill="#171A19" />
                          <rect x="10" y="75" width="15" height="15" fill="#FAF9F5" />
                          <rect x="13" y="78" width="9" height="9" fill="#171A19" />
                          <rect x="35" y="10" width="10" height="20" fill="#171A19" />
                          <rect x="50" y="15" width="15" height="10" fill="#171A19" />
                          <rect x="35" y="40" width="30" height="30" fill="#9E331A" />
                          <rect x="40" y="45" width="20" height="20" fill="#FAF9F5" />
                          <text x="50" y="58" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#9E331A">₹1.2k</text>
                          <rect x="70" y="40" width="10" height="25" fill="#171A19" />
                          <rect x="85" y="70" width="10" height="25" fill="#171A19" />
                        </svg>
                      </div>
                      <div className="text-[10px] font-bold text-purple-700">
                        Active: {formatTimer(timerSeconds)}
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-[#171A19]">
                        <QrCode className="w-4 h-4 text-purple-700" />
                        <span>Scan via Any Indian UPI App</span>
                      </div>
                      <p className="text-[11.5px] text-[#555C58] leading-relaxed">
                        Open Google Pay, PhonePe, Paytm, CRED, or BHIM on your
                        smartphone. Scan this dynamic code to approve the locked
                        ₹1,239 escrow hold.
                      </p>
                      <div className="flex flex-wrap items-center gap-2 pt-1 text-[10px] font-bold text-[#555C58]">
                        <span className="px-2 py-0.5 rounded bg-white border border-purple-100/80">GPay</span>
                        <span className="px-2 py-0.5 rounded bg-white border border-purple-100/80">PhonePe</span>
                        <span className="px-2 py-0.5 rounded bg-white border border-purple-100/80">Paytm UPI</span>
                        <span className="px-2 py-0.5 rounded bg-white border border-purple-100/80">BHIM</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Trust Compliance Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-white rounded-2xl border border-purple-100/80 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <div className="font-bold text-[#171A19]">RBI AUTHORIZED</div>
                  <div className="text-[10px] text-[#737A76]">Escrow Trustee Mechanism</div>
                </div>
              </div>

              <div className="p-3 bg-white rounded-2xl border border-purple-100/80 flex items-center gap-2.5">
                <Lock className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <div className="font-bold text-[#171A19]">PCI-DSS LEVEL 1</div>
                  <div className="text-[10px] text-[#737A76]">Compliant Gateway Node</div>
                </div>
              </div>

              <div className="p-3 bg-white rounded-2xl border border-purple-100/80 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <div className="font-bold text-[#171A19]">RUPAY CERTIFIED</div>
                  <div className="text-[10px] text-[#737A76]">NPCI Network Tokenized</div>
                </div>
              </div>
            </div>

            {/* How CoFriend Vault Protects You */}
            <div className="bg-[#EFF2EB] rounded-3xl p-5 sm:p-6 border border-[#E2E6DC] space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="font-outfit font-bold text-sm text-[#171A19]">
                  How CoFriend Vault Protects You
                </h3>
                <span className="text-[10.5px] font-bold text-purple-700 uppercase tracking-wider">
                  Platonic Charter Enforced
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-[#D8DFD4] space-y-1 text-center">
                  <div className="font-bold text-[#171A19]">You Pay ₹1,239</div>
                  <div className="text-[10px] text-[#737A76]">Locked in RBI Escrow</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#D8DFD4] space-y-1 text-center">
                  <div className="font-bold text-[#171A19]">Meet & Enjoy Company</div>
                  <div className="text-[10px] text-emerald-700 font-semibold">Zero funds released yet</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#D8DFD4] space-y-1 text-center">
                  <div className="font-bold text-[#171A19]">You Share End OTP</div>
                  <div className="text-[10px] text-[#737A76]">Escrow Vault unlocks</div>
                </div>
              </div>

              <p className="text-[11px] text-[#555C58] text-center leading-tight">
                If the booking does not conclude satisfactorily, your deposit remains frozen under concierge review.
              </p>
            </div>
          </div>

          {/* Right Column (5 cols): Booking Reference & Price Summary */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-purple-100/80 shadow-lg space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EEE7]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#737A76]">
                    Booking Reference
                  </span>
                  <div className="font-outfit font-bold text-base text-[#171A19]">
                    CF-KOL-8829
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FEF6E9] text-[#B47414] text-[10.5px] font-bold border border-[#FDE5BE]">
                  Slot Reserved (12m left)
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
                  <div className="flex items-center gap-1.5 font-outfit font-bold text-sm text-[#171A19]">
                    <span>Ananya Sharma</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-[11px] text-[#737A76]">
                    Cinephile & Cultural Guide • Kolkata
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 font-semibold text-[10.5px]">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>4.94 (48 bookings)</span>
                  </div>
                </div>
              </div>

              {/* Booking Specifications */}
              <div className="space-y-2 text-xs text-[#555C58]">
                <div className="flex items-start gap-2">
                  <Film className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#171A19]">
                      Movie & Film Discussion CoFriend
                    </div>
                    <div className="text-[11px] text-[#737A76]">
                      PVR INOX South City Mall / Nandan Cultural Complex
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <Calendar className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#171A19]">
                      Sun, 15 Dec 2024 • 03:30 PM
                    </div>
                    <div className="text-[11px] text-[#737A76]">
                      3 Hours Allotted Duration (Ends 06:30 PM)
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="pt-3 border-t border-[#F2EFE8] space-y-2 text-xs text-[#555C58]">
                <div className="flex justify-between">
                  <span>Base Companion Rate (3 hrs × ₹350/hr)</span>
                  <span className="font-semibold text-[#171A19]">₹1,050.00</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    GST (18%) &amp; Escrow Guarantee
                    <Info className="w-3 h-3 text-[#737A76]" />
                  </span>
                  <span className="font-semibold text-[#171A19]">₹189.00</span>
                </div>

                <div className="flex justify-between text-[#1E7E34]">
                  <span>Platonic Concierge Insurance</span>
                  <span className="font-semibold">Covered Free</span>
                </div>

                <div className="flex justify-between items-baseline font-bold text-[#171A19] pt-3 border-t border-[#EDEAE1]">
                  <span className="text-sm">Total Payable</span>
                  <span className="text-xl font-outfit text-purple-700">
                    ₹1,239.00
                  </span>
                </div>
              </div>

              {/* Lock Escrow CTA Button */}
              <button
                onClick={handlePay}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>Pay ₹1,239 &amp; Lock Escrow</span>
              </button>

              <div className="p-2.5 rounded-xl bg-[#FAFAFD] border border-[#EDEAE1] text-[10.5px] text-[#555C58] space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#171A19]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Transparent Cancellation:</span>
                </div>
                <p>
                  100% full refund returned automatically to original payment source
                  if cancelled &gt;4 hours prior to 03:30 PM.
                </p>
              </div>

              {/* Payment Assistance */}
              <div className="pt-2 border-t border-[#F2EFE8] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#555C58]">
                  <PhoneCall className="w-4 h-4 text-[#B47414]" />
                  <div>
                    <div className="font-bold text-[#171A19]">Need payment assistance?</div>
                    <div className="text-[10px] text-[#737A76]">Instant Concierge Helpline: +91 33 4002 9119</div>
                  </div>
                </div>
                <button
                  onClick={() => alert("Connecting to CoFriend concierge live agent.")}
                  className="font-bold text-purple-700 text-xs uppercase tracking-wider hover:underline"
                >
                  HELP
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Booking Confirmation / Escrow Locked Modal */}
      {isPaidModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E0DDD5] relative animate-in zoom-in-95 duration-200 space-y-6">
            <button
              onClick={() => setIsPaidModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
                Escrow Locked &amp; Reserved
              </span>
              <h3 className="text-2xl font-outfit font-bold text-[#171A19]">
                You&apos;re Set for Sun, 15 Dec!
              </h3>
              <p className="text-xs text-[#555C58]">
                Your booking with <strong>Ananya Sharma</strong> is locked in RBI escrow.
              </p>
            </div>

            {/* OTP Pair Voucher */}
            <div className="bg-[#FAFAFD] rounded-2xl p-4 border border-[#EDEAE1] space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-[#171A19]">
                <span>Dual-OTP Safety Verification</span>
                <span className="text-purple-700">CF-KOL-8829</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 bg-white rounded-xl border border-[#E5E2DA]">
                  <div className="text-[10px] font-bold text-purple-700 uppercase">
                    Your Guest Start OTP
                  </div>
                  <div className="text-2xl font-mono font-bold text-purple-700 tracking-widest mt-0.5">
                    4892
                  </div>
                  <div className="text-[9.5px] text-[#737A76]">Share at meet kickoff</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#E5E2DA]">
                  <div className="text-[10px] font-bold text-emerald-700 uppercase">
                    Escrow Vault ID
                  </div>
                  <div className="text-base font-mono font-bold text-[#171A19] mt-1 truncate">
                    SES-8891-KOL
                  </div>
                  <div className="text-[9.5px] text-emerald-700 font-medium">₹1,239 Locked</div>
                </div>
              </div>
            </div>

            <div className="text-xs text-[#555C58] space-y-1">
              <div className="font-bold text-[#171A19]">Meeting Location:</div>
              <div>Quest Mall Cinema Lobby (5th Floor Concession Stand)</div>
              <div className="text-[11px] text-[#737A76]">Time: 03:30 PM (Sun, 15 Dec 2024)</div>
            </div>

            <div className="flex gap-3">
              <Link
                href="/book/confirmation"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-center text-xs font-semibold text-white shadow-md"
              >
                View Confirmed Schedule
              </Link>
              <Link
                href="/"
                className="flex-1 py-3 rounded-xl bg-[#FAFAFD] hover:bg-[#EAE7DD] text-center text-xs font-semibold text-[#171A19] border border-purple-100/80"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
