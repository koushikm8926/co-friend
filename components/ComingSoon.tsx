"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowLeft, Send, CheckCircle2, X, Bell } from "lucide-react";
import { toast } from "sonner";

// CoFriend dual heart logo icon
export function CoFriendLogo({ className = "h-9 w-auto", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/images/cofriend-logo.png"
        alt="CoFriend"
        className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl object-contain shadow-xs shrink-0 select-none"
      />
      <div className="flex flex-col">
        <span className={`font-display text-[1.4rem] sm:text-[1.5rem] font-black tracking-tight leading-none ${dark ? "text-white" : "text-slate-900"}`}>
          <span className="text-[#D91A60]">Co</span>{dark ? "friend" : "friend"}
        </span>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-400 mt-0.5 whitespace-nowrap">
          Social &amp; Lifestyle Companions
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
