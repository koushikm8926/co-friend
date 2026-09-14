"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  MapPin,
  Star,
  ArrowRight,
  ShieldCheck,
  CalendarCheck,
  PartyPopper,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { type CoFriendItem } from "@/data/content";
import { useCompanionStore } from "@/lib/companionStore";
export { PartnerApplyModal as PartnerModal } from "./PartnerApplyModal";

function DialogWrapper({
  open,
  onClose,
  maxWidth = "max-w-xl",
  children,
  testId,
}: {
  open: boolean;
  onClose: () => void;
  maxWidth?: string;
  children: React.ReactNode;
  testId?: string;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

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
            data-testid={testId}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full ${maxWidth} overflow-hidden rounded-[1.75rem] border border-purple-100 bg-white shadow-2xl z-10`}
          >
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute right-4 top-4 z-20 grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/30 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function SearchModal({
  open,
  onOpenChange,
  preset,
  onViewProfile,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preset: { service?: string; location?: string } | null;
  onViewProfile: (profile: CoFriendItem) => void;
}) {
  const { companions } = useCompanionStore();

  const list = useMemo(() => {
    if (!preset?.service) return companions.slice(0, 6);
    const matches = companions.filter((p) => p.services.includes(preset.service!));
    return (matches.length ? matches : companions).slice(0, 6);
  }, [preset, companions]);

  return (
    <DialogWrapper
      open={open}
      onClose={() => onOpenChange(false)}
      testId="search-modal"
      maxWidth="max-w-xl"
    >
      <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-pink-500 px-7 py-6 text-white">
        <h2 className="font-display text-xl font-extrabold text-white">
          Co-Friends near you
        </h2>
        <p className="text-sm text-white/80 mt-1">
          {preset?.service || "Any service"}
          {preset?.location ? ` · ${preset.location}` : " · All cities"} — top verified matches
        </p>
      </div>
      <div className="max-h-[55vh] space-y-3 overflow-y-auto p-5">
        {list.map((p) => (
          <div
            key={p.id}
            data-testid={`search-result-${p.id}`}
            className="flex items-center gap-4 rounded-2xl border border-purple-100 bg-white p-4 transition-all duration-300 hover:border-purple-300 hover:shadow-lg"
          >
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="h-16 w-16 rounded-2xl object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1.5 font-display text-sm font-extrabold text-slate-900">
                {p.name}
                <BadgeCheck size={15} className="shrink-0 text-emerald-500" />
              </p>
              <p className="mt-0.5 flex items-center gap-1 text-xs font-semibold text-slate-500">
                <MapPin size={11} className="text-pink-500" /> {p.city}
                <span className="mx-1">·</span>
                <Star size={11} className="fill-amber-400 text-amber-400" />
                {p.rating.toFixed(1)} ({p.reviews})
              </p>
              <p className="mt-1 truncate text-[0.7rem] text-slate-500">
                {p.services.join(" · ")}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-display text-sm font-extrabold text-slate-900">
                ₹{p.price}/hr
              </p>
              <button
                data-testid={`search-view-btn-${p.id}`}
                onClick={() => onViewProfile(p)}
                className="font-accent mt-1.5 inline-flex items-center gap-1 rounded-full bg-purple-600 px-3.5 py-1.5 text-[0.65rem] font-bold text-white transition-all hover:bg-purple-700 cursor-pointer"
              >
                View <ArrowRight size={11} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="flex items-center justify-center gap-2 border-t border-purple-50 px-5 py-4 text-[0.7rem] font-semibold text-slate-500">
        <ShieldCheck size={13} className="text-emerald-500" />
        All Co-Friends are government-ID &amp; background verified
      </p>
    </DialogWrapper>
  );
}

export function ProfileModal({
  open,
  onOpenChange,
  profile,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  profile: CoFriendItem | null;
}) {
  const [booked, setBooked] = useState(false);
  const [hours, setHours] = useState(2);
  const [date, setDate] = useState("");
  const { companions } = useCompanionStore();

  // Pick freshest price/data if companion changed in store
  const activeProfile = useMemo(() => {
    if (!profile) return null;
    return companions.find((c) => c.id === profile.id) || profile;
  }, [profile, companions]);

  useEffect(() => {
    if (open) {
      setBooked(false);
      setHours(2);
      setDate("");
    }
  }, [open, profile]);

  if (!activeProfile) return null;

  return (
    <DialogWrapper
      open={open}
      onClose={() => onOpenChange(false)}
      testId="profile-modal"
      maxWidth="max-w-2xl"
    >
      {booked ? (
        <div className="flex flex-col items-center px-8 py-14 text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-xl">
            <PartyPopper size={28} />
          </span>
          <h3 className="font-display mt-6 text-2xl font-extrabold text-slate-900">
            Booking request sent!
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
            {activeProfile.name} has been notified and usually confirms within 15 minutes. Your booking ID is{" "}
            <span className="font-extrabold text-purple-700">
              CF-{Math.floor(10000 + Math.random() * 89999)}
            </span>
            . Payment stays in escrow until your meetup is complete.
          </p>
          <button
            data-testid="booking-done-btn"
            onClick={() => onOpenChange(false)}
            className="btn-brand font-accent mt-7 rounded-full px-8 py-3 text-sm font-bold text-white cursor-pointer"
          >
            Done
          </button>
        </div>
      ) : (
        <>
          <div className="relative h-60 overflow-hidden">
            <img
              src={activeProfile.image}
              alt={activeProfile.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
              <div>
                <h2 className="font-display flex items-center gap-2 text-2xl font-extrabold text-white">
                  {activeProfile.name}
                  <BadgeCheck size={20} className="text-emerald-400" />
                </h2>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-white/80 mt-1">
                  <MapPin size={14} /> {activeProfile.city} · {activeProfile.availability}
                </p>
              </div>
              <div className="rounded-2xl bg-white/95 px-4 py-2.5 text-center shadow-xl">
                <p className="flex items-center gap-1 text-lg font-extrabold text-slate-900">
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                  {activeProfile.rating.toFixed(1)}
                </p>
                <p className="text-[0.62rem] font-bold text-slate-500">
                  {activeProfile.reviews} reviews
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-7">
            <p className="text-sm leading-relaxed text-slate-600">
              {activeProfile.tagline}. Verified with Aadhaar, video selfie and background check.
              Responds within 10 minutes on average.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {activeProfile.services.map((s) => (
                <span
                  key={s}
                  className="font-accent rounded-full bg-purple-50 px-3.5 py-1.5 text-[0.7rem] font-bold text-purple-700 ring-1 ring-purple-100"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-3 rounded-2xl border border-purple-100 bg-purple-50/50 p-5 sm:grid-cols-2">
              <label className="block">
                <span className="font-accent text-[0.65rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Date
                </span>
                <input
                  data-testid="booking-date-input"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-1.5 h-11 w-full rounded-xl border border-purple-200 bg-white px-3.5 text-sm font-semibold text-slate-800 outline-none focus:border-purple-500"
                />
              </label>
              <label className="block">
                <span className="font-accent text-[0.65rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Duration
                </span>
                <select
                  data-testid="booking-hours-select"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="mt-1.5 h-11 w-full rounded-xl border border-purple-200 bg-white px-3.5 text-sm font-semibold text-slate-800 outline-none focus:border-purple-500 cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6].map((h) => (
                    <option key={h} value={h}>
                      {h} hour{h > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                Total{" "}
                <span className="font-display text-2xl font-extrabold text-slate-900">
                  ₹{(activeProfile.price * hours).toLocaleString("en-IN")}
                </span>
                <span className="block text-[0.65rem] font-semibold text-emerald-600">
                  Free cancellation till 4 hrs before
                </span>
              </p>
              <button
                data-testid="book-now-btn"
                onClick={() => {
                  if (!date) {
                    toast.error("Pick a date for your booking first");
                    return;
                  }
                  setBooked(true);
                  toast.success(`Booking request sent to ${activeProfile.name}`);
                }}
                className="btn-brand font-accent flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white cursor-pointer"
              >
                <CalendarCheck size={16} /> Book Now
              </button>
            </div>
          </div>
        </>
      )}
    </DialogWrapper>
  );
}
