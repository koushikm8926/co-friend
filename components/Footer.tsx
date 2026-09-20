"use client";

import { CoFriendLogo } from "./ComingSoon";
import { toast } from "sonner";

// Social icon SVGs
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l16 16M4 20L20 4" />
    </svg>
  );
}

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer({
  onNavigate,
  onOpenComingSoon,
}: {
  onNavigate: (id: string) => void;
  onOpenComingSoon: (feature: string) => void;
}) {
  return (
    <footer className="bg-[#080E1E] text-slate-400 pt-14 pb-8 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12">
          
          {/* Column 1: Brand & Tagline & Socials */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 pr-4">
            <div className="cursor-pointer" onClick={() => onNavigate("home")}>
              <CoFriendLogo dark />
            </div>
            
            <p className="mt-4 text-xs leading-relaxed text-slate-400">
              Real people. Real connections. CoFriend brings people together for meaningful experiences, one moment at a time.
            </p>

            <div className="mt-5 flex items-center gap-3 text-slate-400">
              <button
                onClick={() => toast.info("Instagram: @cofriend.india")}
                className="hover:text-pink-400 transition-colors p-1"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </button>
              <button
                onClick={() => toast.info("Facebook: @cofriend.official")}
                className="hover:text-blue-400 transition-colors p-1"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </button>
              <button
                onClick={() => toast.info("X: @cofriend_in")}
                className="hover:text-white transition-colors p-1"
                aria-label="X (Twitter)"
              >
                <XIcon size={16} />
              </button>
              <button
                onClick={() => toast.info("YouTube: @cofriend")}
                className="hover:text-red-400 transition-colors p-1"
                aria-label="YouTube"
              >
                <YoutubeIcon size={16} />
              </button>
              <button
                onClick={() => toast.info("LinkedIn: @cofriend")}
                className="hover:text-sky-400 transition-colors p-1"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("cofriends")}
                  className="hover:text-white transition-colors"
                >
                  CoFriends
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("how-it-works")}
                  className="hover:text-white transition-colors"
                >
                  Safety
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("faq")}
                  className="hover:text-white transition-colors"
                >
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Popular Services
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                "Movies",
                "Coffee",
                "Shopping",
                "Travel",
                "Fitness",
                "Events",
                "Study Buddy",
                "Cooking",
                "Trekking",
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => onOpenComingSoon(`${service} Service Booking`)}
                    className="hover:text-white transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenComingSoon("Help Center")}
                  className="hover:text-white transition-colors"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenComingSoon("Contact Support")}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("how-it-works")}
                  className="hover:text-white transition-colors"
                >
                  Trust &amp; Safety
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenComingSoon("Community Guidelines")}
                  className="hover:text-white transition-colors"
                >
                  Community Guidelines
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenComingSoon("Terms & Conditions")}
                  className="hover:text-white transition-colors"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenComingSoon("Privacy Policy")}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenComingSoon("Cancellation & Refund Policy")}
                  className="hover:text-white transition-colors"
                >
                  Cancellation &amp; Refund Policy
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>© 2024 CoFriend. All rights reserved.</div>
          <div className="flex items-center gap-1">
            <span>Made for Better Connections.</span>
            <span className="text-[#D91A60]">♥</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
