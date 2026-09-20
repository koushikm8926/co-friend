"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowLeft, Send, CheckCircle2, X, Bell } from "lucide-react";
import { toast } from "sonner";

// CoFriend dual heart logo icon
export function CoFriendLogo({ className = "h-8 w-auto", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-9 w-9 shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Heart 1 */}
        <path
          d="M16 11C11.5817 11 8 14.5817 8 19C8 26.5 19 35 24 38C29 35 40 26.5 40 19C40 14.5817 36.4183 11 32 11C28.5 11 25.5 13.2 24 16.5C22.5 13.2 19.5 11 16 11Z"
          fill="url(#cofriend-heart-grad)"
        />
        {/* Inner glow / highlight heart */}
        <path
          d="M17 14C13.6863 14 11 16.6863 11 20C11 25.5 19.5 32.5 24 35C28.5 32.5 37 25.5 37 20C37 16.6863 34.3137 14 31 14C28.3 14 26 15.8 24.8 18.3C24.4 19 23.6 19 23.2 18.3C22 15.8 19.7 14 17 14Z"
          fill="#FFFFFF"
          fillOpacity="0.25"
        />
        <circle cx="15" cy="8" r="3" fill="#D91A60" />
        <circle cx="33" cy="8" r="3" fill="#E11D48" />
        <defs>
          <linearGradient id="cofriend-heart-grad" x1="8" y1="11" x2="40" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E11D48" />
            <stop offset="0.5" stopColor="#D91A60" />
            <stop offset="1" stopColor="#9333EA" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col">
        <span className={`font-display text-[1.4rem] font-black tracking-tight leading-none ${dark ? "text-white" : "text-slate-900"}`}>
          Co<span className="text-[#D91A60]">friend</span>
        </span>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-400 mt-0.5">
          Social & Lifestyle Companions
        </span>
      </div>
    </div>
  );
}

export function ComingSoonPage({
  title = "This Feature is Coming Soon!",
  description = "We're currently rolling out CoFriend across Indian cities. This screen and service will be live soon with verified profiles and secure booking.",
  backHref = "/",
}: {
  title?: string;
  description?: string;
  backHref?: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubmitted(true);
    toast.success("Thank you! You'll be the first to know when this launches.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#FFF5F8] via-[#FAF5FF] to-white text-slate-900">
      <div className="w-full max-w-lg text-center">
        <div className="flex justify-center mb-8">
          <Link href="/">
            <CoFriendLogo />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(217,26,96,0.15)] border border-pink-100 relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 border border-pink-200 px-4 py-1.5 text-xs font-bold text-[#D91A60] mb-5">
            <Sparkles size={14} className="text-[#D91A60]" />
            <span>COMING SOON</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h1>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {description}
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for early access"
                className="flex-1 rounded-full border border-slate-200 px-5 py-3 text-sm outline-none focus:border-[#D91A60] transition-colors"
              />
              <button
                type="submit"
                className="btn-cofriend-gradient rounded-full px-6 py-3 text-sm font-bold text-white flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Notify Me</span>
                <Send size={14} />
              </button>
            </form>
          ) : (
            <div className="mt-8 flex items-center justify-center gap-2 text-emerald-600 bg-emerald-50 rounded-2xl p-4 font-semibold text-sm">
              <CheckCircle2 size={18} />
              <span>You&apos;re on the priority waitlist!</span>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#D91A60] transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Home Screen</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ComingSoonModal({
  open,
  onClose,
  title = "Coming Soon!",
  feature = "This feature",
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  feature?: string;
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setDone(true);
    toast.success("You're on the early access list!");
    setTimeout(() => {
      onClose();
      setDone(false);
      setEmail("");
    }, 1200);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md rounded-3xl bg-white p-7 sm:p-8 shadow-2xl border border-pink-100 z-10 overflow-hidden text-center"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100 text-[#D91A60] shadow-sm mb-4">
              <Bell size={24} />
            </div>

            <span className="inline-block rounded-full bg-pink-50 border border-pink-200 px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-wider text-[#D91A60] mb-2">
              Coming Soon
            </span>

            <h3 className="font-display text-2xl font-extrabold text-slate-900 tracking-tight">
              {title}
            </h3>

            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {feature} is currently in final preparation and will be available very soon.
            </p>

            {!done ? (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to get notified"
                  className="rounded-full border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#D91A60] transition-colors"
                />
                <button
                  type="submit"
                  className="btn-cofriend-gradient rounded-full py-3 text-sm font-bold text-white shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Get Early Access</span>
                  <Send size={14} />
                </button>
              </form>
            ) : (
              <div className="mt-6 rounded-2xl bg-emerald-50 p-3 text-sm font-bold text-emerald-600 flex items-center justify-center gap-2">
                <CheckCircle2 size={16} />
                <span>Added to early access!</span>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
