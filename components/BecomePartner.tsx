"use client";

import { Wallet, CalendarClock, ShieldCheck, IndianRupee, ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { IMAGES } from "@/data/content";

const PERKS = [
  { icon: IndianRupee, text: "Earn up to ₹45,000/month" },
  { icon: CalendarClock, text: "Flexible hours — you choose" },
  { icon: ShieldCheck, text: "Live tracking & SOS support" },
  { icon: Wallet, text: "Weekly direct payouts" },
];

export default function BecomePartner({
  onPartner,
}: {
  onPartner: () => void;
}) {
  return (
    <section id="partner" data-testid="become-partner-section" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-purple-700 via-violet-600 to-pink-500 shadow-[0_40px_100px_-30px_rgba(124,58,237,0.7)]">
            <div className="dots-pattern absolute inset-0 opacity-30" />
            <div className="glow-blob absolute -right-24 -top-24 h-96 w-96 rounded-full bg-pink-400/40" />
            <div className="glow-blob absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-blue-500/30" />

            <div className="relative grid items-center gap-12 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-accent text-xs font-extrabold tracking-[0.3em] text-pink-200">05</span>
                  <span className="h-px w-10 bg-white/40" />
                  <span className="font-accent text-xs font-bold uppercase tracking-[0.3em] text-white/70">
                    Become a Co-Friend
                  </span>
                </div>
                <h2 className="font-display mt-6 text-3xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
                  Turn your free time &amp; hobbies into real income.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
                  Join 15,000+ verified partners across India. Pick your services, set your own
                  rates and availability, receive bookings, build glowing reviews — and get paid
                  for being great company.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {PERKS.map((p) => (
                    <div
                      key={p.text}
                      className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 backdrop-blur-sm"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/20 text-white">
                        <p.icon size={17} />
                      </span>
                      <span className="font-accent text-[0.8rem] font-bold text-white">{p.text}</span>
                    </div>
                  ))}
                </div>

                <button
                  data-testid="partner-cta-btn"
                  onClick={onPartner}
                  className="font-accent group mt-9 inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-purple-700 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.45)] active:scale-95 cursor-pointer"
                >
                  Become a Partner
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-white/70">
                  <CheckCircle2 size={14} className="text-emerald-300" />
                  Free to apply · Verification in 48 hours · No joining fee
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-md">
                <div className="rotate-3 overflow-hidden rounded-[2rem] border-[6px] border-white/90 shadow-2xl transition-transform duration-700 hover:rotate-0">
                  <img
                    src={IMAGES.partner}
                    alt="Co-Friend partners enjoying time with customers"
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="animate-floaty absolute -left-6 top-8 rounded-2xl bg-white px-5 py-4 shadow-2xl">
                  <p className="font-display text-2xl font-extrabold text-gradient">₹45,000</p>
                  <p className="font-accent text-[0.65rem] font-bold uppercase tracking-wider text-slate-500">
                    Top monthly earnings
                  </p>
                </div>
                <div className="animate-floaty-slow absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-2xl">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white">
                    <CheckCircle2 size={19} />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-slate-900">Booking completed</p>
                    <p className="text-[0.65rem] font-semibold text-slate-500">₹1,347 credited to wallet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
