"use client";

import { useCallback, useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WelcomeBanner from "@/components/WelcomeBanner";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import CoFriends from "@/components/CoFriends";
import BecomePartner from "@/components/BecomePartner";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";
import { ComingSoonModal } from "@/components/ComingSoon";

export default function HomePage() {
  const [comingSoonModal, setComingSoonModal] = useState<{
    open: boolean;
    title: string;
    feature: string;
  }>({
    open: false,
    title: "Coming Soon!",
    feature: "This feature",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("coming_soon")) {
        toast.info("Coming Soon! Other screens are not available yet. Only the home screen is active.", {
          duration: 5000,
        });
        const url = new URL(window.location.href);
        url.searchParams.delete("coming_soon");
        window.history.replaceState({}, "", url.pathname);
      }
    }
  }, []);

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const openComingSoon = useCallback((feature: string, title = "Coming Soon!") => {
    setComingSoonModal({
      open: true,
      title,
      feature,
    });
  }, []);

  const closeComingSoon = useCallback(() => {
    setComingSoonModal((prev) => ({ ...prev, open: false }));
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#FC0264] selection:text-white">
      {/* Top Blue Announcement Bar */}
      <TopBar />

      {/* Main Navigation */}
      <Navbar
        onNavigate={scrollToId}
        onOpenComingSoon={(feature) => openComingSoon(feature)}
      />

      {/* Page Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onFind={() => openComingSoon("Find a CoFriend")}
          onBecome={() => openComingSoon("Partner Registration & Profile Creation")}
          onOpenComingSoon={(feature) => openComingSoon(feature)}
        />

        {/* Welcome Trust Banner */}
        <WelcomeBanner className="-mt-3 sm:-mt-4 relative z-20" />

        {/* 2. Explore Our Services */}
        <Services
          onSelectService={(service) => openComingSoon(`${service} Service Booking`)}
          onViewAll={() => openComingSoon("All Services Catalog")}
        />

        {/* 3. Simple Steps - How It Works */}
        <HowItWorks className="pt-10 sm:pt-14 pb-5 sm:pb-6 border-t border-slate-100" />

        {/* 4. Featured CoFriends */}
        <CoFriends
          className="pt-5 sm:pt-6 pb-12 sm:pb-16"
          onSelectCoFriend={(name) => openComingSoon(`Booking session with ${name}`)}
          onViewAll={() => openComingSoon("Complete CoFriends Directory")}
        />

        {/* 5. Become a CoFriend Banner */}
        <BecomePartner
          onBecome={() => openComingSoon("CoFriend Partner Registration")}
        />

        {/* 6. Customer Reviews / Testimonials */}
        <Testimonials />

        {/* 7. FAQ Section */}
        <FAQ
          onViewAll={() => openComingSoon("Extended Knowledge Base & FAQs")}
        />

        {/* 8. Bottom CTA Banner */}
        <BottomCTA
          onFind={() => openComingSoon("Find a CoFriend")}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToId}
        onOpenComingSoon={(feature) => openComingSoon(feature)}
      />

      {/* Reusable Coming Soon Modal */}
      <ComingSoonModal
        open={comingSoonModal.open}
        onClose={closeComingSoon}
        title={comingSoonModal.title}
        feature={comingSoonModal.feature}
      />

      <Toaster position="top-center" richColors />
    </div>
  );
}
