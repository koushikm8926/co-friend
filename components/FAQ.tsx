"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

interface FAQItem { q: string; a: string; }

const FAQ_COL_1: FAQItem[] = [
  { q: "What is CoFriend?", a: "CoFriend is India's most trusted social and lifestyle rental support services marketplace. We connect verified individuals to accompany you for coffee, movies, shopping, city tours, fitness, study sessions, and events." },
  { q: "Are CoFriends verified?", a: "Yes, 100%. Every CoFriend completes mandatory government identity verification (Aadhaar / PAN), photo verification, phone and email validation, and background screening before being listed." },
  { q: "How does booking work?", a: "Simply browse verified CoFriends by city and category, choose your preferred companion, pick a date and time, and confirm your booking securely. All meetups take place in public venues." },
];

const FAQ_COL_2: FAQItem[] = [
  { q: "Is CoFriend a dating platform?", a: "No, absolutely not. CoFriend is strictly a platonic companionship and lifestyle assistance platform for activities like movies, travel, fitness, and events. Romantic or inappropriate requests are strictly prohibited and result in an immediate permanent ban." },
  { q: "How are payments handled?", a: "All payments are processed securely through RBI-compliant escrow payment gateways. Your payment is held safely until your scheduled session completes." },
  { q: "Can I become a CoFriend?", a: "Yes! If you are friendly, dependable, and enjoy meeting new people or showing them around your city, you can apply to become a verified CoFriend and earn flexible hourly income." },
];

function AccordionItem({ item, id, isOpen, onToggle }: { item: FAQItem; id: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden"
      whileHover={{ borderColor: "rgba(252,2,100,0.3)", boxShadow: "0 4px 20px -6px rgba(252,2,100,0.12)" }}
      transition={{ duration: 0.2 }}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-5 sm:p-6 text-left font-bold text-slate-900 hover:text-[#FC0264] transition-colors cursor-pointer"
      >
        <span className="text-sm sm:text-base pr-4">{item.q}</span>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-100 text-slate-600 shrink-0">
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-sm sm:text-[15px] text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ({
  onViewAll,
  className = "pt-6 sm:pt-8 pb-10 sm:pb-14",
}: {
  onViewAll: () => void;
  className?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId((curr) => (curr === id ? null : id));

  return (
    <section id="faq" className={`bg-[#FFFFFF] ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-6 sm:pb-8">
          <Reveal>
            <div>
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-slate-400">
                QUICK ANSWERS
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-sm sm:text-base text-slate-500">
                Have more questions? Check our complete FAQ page.
              </span>
              <motion.button
                onClick={onViewAll}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 px-5 py-2.5 text-sm font-bold text-purple-700 hover:border-purple-300 hover:bg-purple-50 transition-all self-start sm:self-auto cursor-pointer"
              >
                <span>View All FAQs</span>
                <ArrowRight size={14} />
              </motion.button>
            </div>
          </Reveal>
        </div>

        {/* 2-Column Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            {FAQ_COL_1.map((item, i) => {
              const id = `col1-${i}`;
              return (
                <Reveal key={id} delay={i * 0.08}>
                  <AccordionItem item={item} id={id} isOpen={openId === id} onToggle={() => toggle(id)} />
                </Reveal>
              );
            })}
          </div>
          <div className="space-y-3">
            {FAQ_COL_2.map((item, i) => {
              const id = `col2-${i}`;
              return (
                <Reveal key={id} delay={i * 0.08 + 0.04}>
                  <AccordionItem item={item} id={id} isOpen={openId === id} onToggle={() => toggle(id)} />
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
