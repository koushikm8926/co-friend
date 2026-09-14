"use client";

import { useState } from "react";
import {
  Users,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  Lock,
  BadgeCheck,
} from "lucide-react";
import { toast } from "sonner";

const COLS = (
  onNavigate: (id: string) => void,
  onPartner: () => void
) => [
  {
    title: "Services",
    links: [
      { label: "Movie Companion", action: () => onNavigate("services") },
      { label: "Coffee & Conversations", action: () => onNavigate("services") },
      { label: "Travel Companion", action: () => onNavigate("services") },
      { label: "Elder Assistance", action: () => onNavigate("services") },
      { label: "All 11 Services", action: () => onNavigate("services") },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", action: () => onNavigate("about") },
      { label: "How It Works", action: () => onNavigate("how-it-works") },
      { label: "Become a Partner", action: onPartner },
      { label: "Careers", action: () => toast.info("Careers page opens in the full app — demo homepage.") },
      { label: "Press Kit", action: () => toast.info("Press kit opens in the full app — demo homepage.") },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", action: () => onNavigate("faq") },
      { label: "Safety Standards", action: () => onNavigate("about") },
      { label: "FAQs", action: () => onNavigate("faq") },
      { label: "Contact Us", action: () => toast.info("Write to hello@cofriend.in — demo homepage.") },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", action: () => toast.info("Legal pages open in the full app — demo homepage.") },
      { label: "Terms of Service", action: () => toast.info("Legal pages open in the full app — demo homepage.") },
      { label: "Refund Policy", action: () => toast.info("Legal pages open in the full app — demo homepage.") },
      { label: "Community Guidelines", action: () => toast.info("Legal pages open in the full app — demo homepage.") },
    ],
  },
];

const SOCIALS = [Instagram, Twitter, Facebook, Linkedin, Youtube];

export default function Footer({
  onNavigate,
  onPartner,
}: {
  onNavigate: (id: string) => void;
  onPartner: () => void;
}) {
  const [email, setEmail] = useState("");
  const cols = COLS(onNavigate, onPartner);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("You're on the list! Welcome to the Co-Friend circle.");
    setEmail("");
  };

  return (
    <footer
      id="contact"
      data-testid="dark-footer"
      className="relative overflow-hidden bg-gradient-to-b from-[#0F0F1A] to-[#080811] text-slate-400"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <div className="glow-blob absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-purple-700/25" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-center">
          <div className="max-w-md">
            <h3 className="font-display text-2xl font-extrabold text-white">
              Get the good stuff first.
            </h3>
            <p className="mt-2 text-sm leading-relaxed">
              New cities, top-rated Co-Friends and member-only offers — once a month, no spam.
            </p>
          </div>
          <form
            onSubmit={subscribe}
            className="flex w-full max-w-md gap-2"
            data-testid="footer-newsletter-form"
          >
            <input
              data-testid="footer-newsletter-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-12 w-full rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-purple-400"
            />
            <button
              data-testid="footer-newsletter-btn"
              type="submit"
              className="btn-brand grid h-12 w-12 shrink-0 place-items-center rounded-full text-white cursor-pointer"
              aria-label="Subscribe"
            >
              <Send size={17} />
            </button>
          </form>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-purple-600 via-violet-600 to-pink-500 text-white shadow-lg shadow-purple-500/30">
                <Users size={20} strokeWidth={2.4} />
              </span>
              <span className="font-display text-[1.35rem] font-extrabold tracking-tight text-white">
                Co<span className="text-gradient">-Friend</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              India&apos;s verified companion marketplace. Real people for real plans — movies, coffee,
              travel, care and everything in between. Life&apos;s better together.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <p className="flex items-center gap-2.5">
                <Mail size={15} className="text-purple-400" /> hello@cofriend.in
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={15} className="text-purple-400" /> +91 98765 43210
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin size={15} className="text-purple-400" /> Koramangala, Bengaluru, India
              </p>
            </div>
            <div className="mt-7 flex gap-3">
              {SOCIALS.map((Icon, i) => (
                <button
                  key={i}
                  data-testid={`footer-social-${i}`}
                  onClick={() =>
                    toast.info("Social profiles open in the full app — demo homepage.")
                  }
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-600 hover:text-white cursor-pointer"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-accent text-xs font-extrabold uppercase tracking-[0.22em] text-white">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <button
                      data-testid={`footer-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                      onClick={l.action}
                      className="text-sm transition-colors duration-200 hover:text-purple-300 cursor-pointer"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs">© 2026 Co-Friend Technologies Pvt. Ltd. Made with care in India.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" /> ID Verified
            </span>
            <span className="flex items-center gap-1.5">
              <Lock size={14} className="text-emerald-400" /> Escrow Payments
            </span>
            <span className="flex items-center gap-1.5">
              <BadgeCheck size={14} className="text-emerald-400" /> Background Checked
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
