"use client";

import { useState } from "react";
import { MessageCircleQuestion, Headset, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHead } from "./Reveal";
import { FAQS } from "@/data/content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((curr) => (curr === i ? null : i));
  };

  return (
    <section id="faq" data-testid="faq-accordion-section" className="relative py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHead
              chapter="08"
              eyebrow="FAQ"
              title={
                <>
                  Questions? <span className="text-gradient">Honest answers.</span>
                </>
              }
              sub="Everything people usually ask before their first booking — safety, verification, pricing and how Co-Friend really works."
            />
            <Reveal delay={0.2} className="mt-10">
              <div className="rounded-[1.75rem] border border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg">
                  <Headset size={22} />
                </span>
                <h3 className="font-display mt-5 text-lg font-extrabold text-slate-900">
                  Still have questions?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Our human support team replies in under 5 minutes, 24/7, in English and 8 Indian languages.
                </p>
                <button
                  data-testid="faq-support-btn"
                  onClick={() =>
                    toast.info("Live chat opens in the full app — this is the demo homepage.")
                  }
                  className="btn-brand font-accent mt-5 rounded-full px-6 py-3 text-xs font-bold text-white cursor-pointer"
                >
                  Chat with Support
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="space-y-4" data-testid="faq-accordion">
              {FAQS.map((f, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    data-testid={`faq-item-${i}`}
                    className={`rounded-2xl border border-purple-100 bg-white px-6 shadow-sm transition-all duration-300 ${
                      isOpen ? "shadow-[0_18px_40px_-20px_rgba(124,58,237,0.35)]" : ""
                    }`}
                  >
                    <button
                      data-testid={`faq-trigger-${i}`}
                      onClick={() => toggle(i)}
                      className="font-display flex w-full items-center justify-between py-5 text-left text-[0.95rem] font-bold text-slate-900 hover:text-purple-700 transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <MessageCircleQuestion size={18} className="shrink-0 text-pink-500" />
                        {f.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-purple-600 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pb-5 pl-8 text-sm leading-relaxed text-slate-600 border-t border-purple-50 pt-3">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
