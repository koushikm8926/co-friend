"use client";

import { useEffect, useState } from "react";
import { ChevronDown, MapPin, Menu, X } from "lucide-react";
import { CoFriendLogo } from "./ComingSoon";

const CITIES = [
  "Hyderabad",
  "Mumbai",
  "Bengaluru",
  "Delhi NCR",
  "Pune",
  "Chennai",
  "Kolkata",
  "Goa",
  "Jaipur",
];

export default function Navbar({
  onNavigate,
  onOpenComingSoon,
}: {
  onNavigate: (id: string) => void;
  onOpenComingSoon: (feature: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState("Hyderabad");
  const [cityMenuOpen, setCityMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setActiveTab(id);
    setOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white ${
        scrolled
          ? "border-b border-slate-100 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]"
          : "border-b border-slate-100"
      }`}
    >
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Logo & City Dropdown */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => handleNav("home")}
            className="flex items-center text-left cursor-pointer"
          >
            <CoFriendLogo />
          </button>

          {/* City Selector */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setCityMenuOpen(!cityMenuOpen)}
              className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/80 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <MapPin size={13} className="text-[#D91A60]" />
              <span>{city}</span>
              <ChevronDown size={13} className="text-slate-400" />
            </button>

            {cityMenuOpen && (
              <div className="absolute left-0 top-full mt-2 w-44 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl z-50">
                <div className="text-[0.68rem] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                  Select Location
                </div>
                {CITIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCity(c);
                      setCityMenuOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium text-left transition-colors ${
                      city === c
                        ? "bg-pink-50 text-[#D91A60] font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{c}</span>
                    {city === c && <span className="h-1.5 w-1.5 rounded-full bg-[#D91A60]" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          <button
            onClick={() => handleNav("home")}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              activeTab === "home"
                ? "text-[#D91A60] font-bold"
                : "text-slate-700 hover:text-[#D91A60]"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNav("services")}
            className="text-sm font-medium text-slate-700 hover:text-[#D91A60] transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => handleNav("cofriends")}
            className="text-sm font-medium text-slate-700 hover:text-[#D91A60] transition-colors cursor-pointer"
          >
            CoFriends
          </button>
          <button
            onClick={() => handleNav("about")}
            className="text-sm font-medium text-slate-700 hover:text-[#D91A60] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNav("how-it-works")}
            className="text-sm font-medium text-slate-700 hover:text-[#D91A60] transition-colors cursor-pointer"
          >
            Safety
          </button>
          <button
            onClick={() => handleNav("faq")}
            className="text-sm font-medium text-slate-700 hover:text-[#D91A60] transition-colors cursor-pointer"
          >
            FAQs
          </button>
        </nav>

        {/* Right: Login & Sign Up buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenComingSoon("User Login & Account Access")}
            className="rounded-full border border-purple-200 px-5 py-2 text-xs font-bold text-purple-700 hover:border-purple-300 hover:bg-purple-50 transition-all cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => onOpenComingSoon("New User Registration")}
            className="rounded-full bg-[#D91A60] hover:bg-[#c21453] px-5 py-2 text-xs font-bold text-white shadow-md shadow-pink-500/20 transition-all cursor-pointer"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 lg:hidden cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-6 space-y-3 lg:hidden shadow-xl">
          <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-100">
            <MapPin size={15} className="text-[#D91A60]" />
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent text-sm font-semibold text-slate-800 outline-none w-full"
            >
              {CITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => handleNav("home")}
            className="block w-full text-left py-2 text-sm font-semibold text-[#D91A60]"
          >
            Home
          </button>
          <button
            onClick={() => handleNav("services")}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700"
          >
            Services
          </button>
          <button
            onClick={() => handleNav("cofriends")}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700"
          >
            CoFriends
          </button>
          <button
            onClick={() => handleNav("about")}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700"
          >
            About
          </button>
          <button
            onClick={() => handleNav("how-it-works")}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700"
          >
            Safety
          </button>
          <button
            onClick={() => handleNav("faq")}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700"
          >
            FAQs
          </button>

          <div className="flex gap-3 pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setOpen(false);
                onOpenComingSoon("User Login");
              }}
              className="flex-1 rounded-full border border-purple-200 py-2.5 text-xs font-bold text-purple-700 text-center"
            >
              Login
            </button>
            <button
              onClick={() => {
                setOpen(false);
                onOpenComingSoon("Sign Up");
              }}
              className="flex-1 rounded-full bg-[#D91A60] py-2.5 text-xs font-bold text-white text-center shadow-sm"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
