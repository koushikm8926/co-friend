"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const FAQ_COL_1: FAQItem[] = [
  {
    q: "What is CoFriend?",
    a: "CoFriend is India's most trusted social and lifestyle rental support services marketplace. We connect verified individuals to accompany you for coffee, movies, shopping, city tours, fitness, study sessions, and events.",
  },
  {
    q: "Are CoFriends verified?",
    a: "Yes, 100%. Every CoFriend completes mandatory government identity verification (Aadhaar / PAN), photo verification, phone and email validation, and background screening before being listed.",
  },
  {
    q: "How does booking work?",
    a: "Simply browse verified CoFriends by city and category, choose your preferred companion, pick a date and time, and confirm your booking securely. All meetups take place in public venues.",
  },
];

const FAQ_COL_2: FAQItem[] = [
  {
    q: "Is CoFriend a dating platform?",
    a: "No, absolutely not. CoFriend is strictly a platonic companionship and lifestyle assistance platform for activities like movies, travel, fitness, and events. Romantic or inappropriate requests are strictly prohibited and result in an immediate permanent ban.",
  },
  {
    q: "How are payments handled?",
    a: "All payments are processed securely through RBI-compliant escrow payment gateways. Your payment is held safely until your scheduled session completes.",
  },
  {
    q: "Can I become a CoFriend?",
    a: "Yes! If you are friendly, dependable, and enjoy meeting new people or showing them around your city, you can apply to become a verified CoFriend and earn flexible hourly income.",
  },
];

export default function FAQ({
  onViewAll,
}: {
  onViewAll: () => void;
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((curr) => (curr === id ? null : id));
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-10">
          <div>
            <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              QUICK ANSWERS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-xs sm:text-sm text-slate-500">
              Have more questions? Check our complete FAQ page.
            </span>
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 px-4 py-2 text-xs font-bold text-purple-700 hover:border-purple-300 hover:bg-purple-50 transition-all self-start sm:self-auto cursor-pointer"
            >
              <span>View All FAQs</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* 2-Column Accordion Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Column 1 */}
          <div className="space-y-3">
            {FAQ_COL_1.map((item, i) => {
              const id = `col1-${i}`;
              const isOpen = openId === id;
              return (
                <div
                  key={id}
                  className="rounded-2xl border border-slate-200/80 bg-white transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggle(id)}
                    className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-slate-900 hover:text-[#D91A60] transition-colors cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-100 text-slate-600 shrink-0 ml-2">
                      {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            {FAQ_COL_2.map((item, i) => {
              const id = `col2-${i}`;
              const isOpen = openId === id;
              return (
                <div
                  key={id}
                  className="rounded-2xl border border-slate-200/80 bg-white transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggle(id)}
                    className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-slate-900 hover:text-[#D91A60] transition-colors cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-100 text-slate-600 shrink-0 ml-2">
                      {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
