"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

export interface FAQItem {
  id: number;
  q: string;
  a: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 1,
    q: "What is CoFriend?",
    a: "CoFriend is a rental friend and services platform that connects you with verified CoFriends for genuine companionship, social connections and lifestyle experiences. You can book CoFriends for activities like coffee dates, dining, movies, travel, events and many more — in a safe, respectful and professional environment.",
  },
  {
    id: 2,
    q: "Is CoFriend a dating app?",
    a: "No. CoFriend is not a dating app. It is a rental friend and services platform. Every booking is purely platonic companionship. CoFriend exists to help people form genuine social connections, not transactional or romantic relationships.",
  },
  {
    id: 3,
    q: "Who can join CoFriend?",
    a: "Anyone who is 18 years or older can join CoFriend. Both service seekers and CoFriends (service providers) can create an account after a simple verification process.",
  },
  {
    id: 4,
    q: "What services are available on CoFriend?",
    a: "You can book CoFriends for coffee companionship, dining, movies, travel, events, shopping, exploring the city, exercise partners, hobby activities and many other lifestyle and social experiences.",
  },
  {
    id: 5,
    q: "How does booking work?",
    a: "Browse profiles, choose a CoFriend based on your preferences, select the date, time and duration, make a secure payment and confirm the booking. You will receive all the details and can connect with your CoFriend through our platform.",
  },
  {
    id: 6,
    q: "Is CoFriend safe and genuine?",
    a: "Yes. CoFriend is a safe and trusted platform. All CoFriends go through verification to ensure real profiles. We have strict safety guidelines, secure payments, and a dedicated support team to provide a safe and respectful community for everyone.",
  },
  {
    id: 7,
    q: "How much does it cost to book a CoFriend?",
    a: "The cost depends on the service, activity, location, date, time and the CoFriend you choose. Each profile shows the hourly rate and service details clearly before booking.",
  },
  {
    id: 8,
    q: "How and when do I make the payment?",
    a: "Payments are made securely through our platform using trusted payment methods. The payment is usually processed at the time of booking to confirm your slot. We ensure safe and hassle-free transactions.",
  },
  {
    id: 9,
    q: "Can I choose the location and time?",
    a: "Yes. You can choose your preferred location, date, time and duration while booking. CoFriends are available across major cities in India, and you can check their availability on the platform.",
  },
  {
    id: 10,
    q: "What if I need help or have an issue?",
    a: "Our customer support team is always here to help. You can reach us through the Help section on the website or app. We are committed to providing the best experience and resolving any issues quickly.",
  },
];

export default function FAQ({
  onViewAll,
  className = "pt-12 sm:pt-16 pb-14 sm:pb-20",
}: {
  onViewAll?: () => void;
  className?: string;
}) {
  // First item open by default as shown in reference design
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((curr) => (curr === id ? null : id));
  };

  return (
    <section id="faq" className={`bg-white relative overflow-hidden ${className}`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header matching reference design */}
        <div className="text-center mb-10 sm:mb-12">
          <Reveal>
            {/* Tagline flanked by pink lines */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
              <span className="w-8 sm:w-16 h-[1.5px] bg-[#FC0264]/40" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                RENTAL FRIEND &amp; SERVICES
              </span>
              <span className="w-8 sm:w-16 h-[1.5px] bg-[#FC0264]/40" />
            </div>

            {/* Title with Asked Questions gradient */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A]">
              Frequently{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FC0264] via-[#D91A60] to-[#7C3AED]">
                Asked Questions
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-500 font-normal mt-2.5 max-w-xl mx-auto leading-relaxed">
              Find answers to common questions about CoFriend and our services.
            </p>
          </Reveal>
        </div>

        {/* 10 Stacked FAQ Cards */}
        <div className="space-y-3 sm:space-y-3.5">
          {FAQS.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <Reveal key={item.id} delay={Math.min(idx * 0.04, 0.3)}>
                <motion.div
                  className={`rounded-2xl transition-all duration-300 border bg-white ${
                    isOpen
                      ? "border-pink-200/90 shadow-[0_8px_24px_-6px_rgba(252,2,100,0.12)] bg-gradient-to-b from-pink-50/20 to-white"
                      : "border-slate-100 hover:border-pink-200/70 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_-4px_rgba(252,2,100,0.08)]"
                  }`}
                >
                  {/* Question Button */}
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="group flex w-full items-center justify-between p-4 sm:p-5 text-left cursor-pointer transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 flex-1 pr-2">
                      {/* Pink Number Badge */}
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FC0264] text-white font-display font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-sm shadow-pink-500/25">
                        {item.id}
                      </span>

                      {/* Question Text */}
                      <span className="font-display font-bold text-sm sm:text-base md:text-[17px] text-[#0F172A] group-hover:text-[#FC0264] transition-colors leading-snug">
                        {item.q}
                      </span>
                    </div>

                    {/* Chevron Icon */}
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "text-[#FC0264] rotate-180"
                          : "text-slate-600 group-hover:text-[#FC0264]"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {/* Expandable Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-14 sm:pl-16 pr-5 sm:pr-8 pb-5 pt-0 text-xs sm:text-sm md:text-[14.5px] text-slate-500 leading-relaxed font-normal">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* View All Footer Link if provided */}
        {onViewAll && (
          <Reveal delay={0.2}>
            <div className="mt-8 sm:mt-10 text-center">
              <button
                type="button"
                onClick={onViewAll}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-[#FC0264] transition-colors cursor-pointer"
              >
                <span>Have more questions? Explore our full Knowledge Base</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </Reveal>
        )}

      </div>
    </section>
  );
}
