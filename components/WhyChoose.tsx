"use client";

import { ShieldCheck, Star, Lock, IndianRupee, LayoutGrid, Headphones } from "lucide-react";
import { Reveal, SectionHead } from "./Reveal";
import { FEATURES } from "@/data/content";

const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  ShieldCheck,
  Star,
  Lock,
  IndianRupee,
  LayoutGrid,
  Headphones,
};

export default function WhyChoose() {
  return (
    <section id="about" data-testid="why-choose-section" className="relative py-20 md:py-28">
      <div className="glow-blob absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-400/15" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          center
          chapter="07"
          eyebrow="Why Choose Co-Friend"
          title={
            <>
              Built for trust, <span className="text-gradient">obsessed with safety.</span>
            </>
          }
          sub="Companionship is personal. That's why every layer of Co-Friend — verification, payments, meetups, support — is designed so you can relax and enjoy the moment."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon] || ShieldCheck;
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.09}>
                <div
                  data-testid={`feature-${f.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="card-lift group relative h-full overflow-hidden rounded-[1.75rem] border border-purple-100 bg-white p-7 shadow-[0_14px_40px_-22px_rgba(124,58,237,0.25)] hover:border-purple-300"
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 opacity-60 transition-transform duration-500 group-hover:scale-150" />
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <h3 className="font-display relative mt-6 text-lg font-extrabold text-slate-900">
                    {f.title}
                  </h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-slate-600">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
