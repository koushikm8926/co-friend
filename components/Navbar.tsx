"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Users, ArrowRight, Sparkles, Sliders } from "lucide-react";
import { NAV_LINKS } from "@/data/content";

export default function Navbar({
  onNavigate,
  onFind,
  onPartner,
}: {
  onNavigate: (id: string) => void;
  onFind: () => void;
  onPartner: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <header
      data-testid="nav-header"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-purple-100/70 bg-white/85 shadow-[0_8px_30px_-12px_rgba(124,58,237,0.25)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => go("home")}
          data-testid="nav-logo"
          className="flex items-center gap-2.5 cursor-pointer"
          aria-label="Co-Friend home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-purple-600 via-violet-600 to-pink-500 text-white shadow-lg shadow-purple-500/30">
            <Users size={20} strokeWidth={2.4} />
          </span>
          <span className="font-display text-[1.35rem] font-extrabold tracking-tight text-slate-900">
            Co<span className="text-gradient">-Friend</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="font-accent rounded-full px-4 py-2 text-[0.83rem] font-semibold text-slate-600 transition-colors duration-200 hover:bg-purple-50 hover:text-purple-700 cursor-pointer"
            >
              {l.label}
            </button>
          ))}
          <Link
            href="/admin"
            className="font-accent inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[0.75rem] font-bold text-purple-700 bg-purple-50/80 border border-purple-200/80 hover:bg-purple-100 transition-colors ml-1"
          >
            <Sliders size={12} />
            Admin
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            data-testid="nav-become-partner-btn"
            onClick={onPartner}
            className="font-accent flex items-center gap-1.5 rounded-full border border-purple-200 bg-white/80 px-5 py-2.5 text-[0.83rem] font-bold text-purple-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-200 cursor-pointer"
          >
            <Sparkles size={15} />
            Become a Partner
          </button>
          <button
            data-testid="nav-find-cofriend-btn"
            onClick={onFind}
            className="btn-brand font-accent flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[0.83rem] font-bold text-white cursor-pointer"
          >
            Find a Co-Friend
            <ArrowRight size={15} />
          </button>
        </div>

        <button
          data-testid="nav-mobile-menu-btn"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-2xl border border-purple-100 bg-white/80 text-slate-800 lg:hidden cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-purple-100 bg-white/95 backdrop-blur-xl lg:hidden"
            data-testid="nav-mobile-panel"
          >
            <div className="space-y-1 px-5 pb-6 pt-2">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  data-testid={`nav-mobile-link-${l.id}`}
                  onClick={() => go(l.id)}
                  className="font-accent block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-purple-50 cursor-pointer"
                >
                  {l.label}
                </button>
              ))}
              <Link
                href="/admin"
                className="font-accent flex items-center gap-2 w-full rounded-xl px-4 py-3 text-left text-sm font-bold text-purple-700 bg-purple-50/60"
              >
                <Sliders size={15} />
                Admin Portal
              </Link>
              <div className="flex gap-3 pt-3">
                <button
                  data-testid="nav-mobile-partner-btn"
                  onClick={() => {
                    setOpen(false);
                    onPartner();
                  }}
                  className="font-accent flex-1 rounded-full border border-purple-200 px-4 py-3 text-sm font-bold text-purple-700 cursor-pointer"
                >
                  Become a Partner
                </button>
                <button
                  data-testid="nav-mobile-find-btn"
                  onClick={() => {
                    setOpen(false);
                    onFind();
                  }}
                  className="btn-brand font-accent flex-1 rounded-full px-4 py-3 text-sm font-bold text-white cursor-pointer"
                >
                  Find a Co-Friend
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
