"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import CoFriends from "@/components/CoFriends";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import BecomePartner from "@/components/BecomePartner";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import Faq from "@/components/FAQ";
import Footer from "@/components/Footer";
import { SearchModal, ProfileModal, PartnerModal } from "@/components/Modals";
import { type CoFriendItem } from "@/data/content";

export default function HomePage() {
  const lenisRef = useRef<Lenis | null>(null);
  const [modal, setModal] = useState<{
    type: "search" | "profile" | "partner" | null;
    payload: any;
  }>({ type: null, payload: null });

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -84, duration: 1.4 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const openModal = useCallback(
    (type: "search" | "profile" | "partner", payload: any = null) =>
      setModal({ type, payload }),
    []
  );
  const closeModal = useCallback(
    () => setModal({ type: null, payload: null }),
    []
  );

  return (
    <div
      className="min-h-screen overflow-x-clip bg-[#FAFAFD] text-slate-900 antialiased"
      data-testid="cofriend-app"
    >
      <div className="grain" aria-hidden />
      <Navbar
        onNavigate={scrollToId}
        onFind={() => openModal("search")}
        onPartner={() => openModal("partner")}
      />
      <main>
        <Hero
          onSearch={(preset) => openModal("search", preset)}
          onExplore={() => scrollToId("services")}
        />
        <Marquee />
        <Services
          onSelect={(service) => openModal("search", { service, location: "" })}
        />
        <CoFriends onView={(p) => openModal("profile", p)} />
        <Stats />
        <HowItWorks />
        <BecomePartner onPartner={() => openModal("partner")} />
        <Testimonials />
        <WhyChoose />
        <Faq />
      </main>
      <Footer onNavigate={scrollToId} onPartner={() => openModal("partner")} />

      <SearchModal
        open={modal.type === "search"}
        preset={modal.type === "search" ? modal.payload : null}
        onOpenChange={(o) => !o && closeModal()}
        onViewProfile={(p) => openModal("profile", p)}
      />
      <ProfileModal
        open={modal.type === "profile"}
        profile={modal.type === "profile" ? (modal.payload as CoFriendItem) : null}
        onOpenChange={(o) => !o && closeModal()}
      />
      <PartnerModal
        open={modal.type === "partner"}
        onOpenChange={(o) => !o && closeModal()}
      />
      <Toaster position="top-center" richColors />
    </div>
  );
}
