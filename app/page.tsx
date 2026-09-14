"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  Calendar,
  Star,
  Clock,
  ShieldCheck,
  Film,
  Coffee,
  ShoppingBag,
  Compass,
  Music,
  HeartHandshake,
  Dumbbell,
  UtensilsCrossed,
  BookOpen,
  PartyPopper,
  Dog,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Check,
  X,
  ChevronDown,
  Info,
  Lock,
  Zap,
  PhoneCall,
  Users,
  DollarSign,
  Activity,
  AlertTriangle,
  Sparkles,
  Shield,
  HelpCircle,
  Sliders,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  LayoutGrid,
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  price: string;
  blurb: string;
  image: string;
  icon: any;
  category: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "movies",
    title: "Movie Companion",
    tag: "Popular",
    price: "₹399/hr",
    blurb: "Never watch alone again — cinema, film festivals & premieres",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    icon: Film,
    category: "Entertainment",
  },
  {
    id: "coffee",
    title: "Coffee & Conversations",
    tag: "Trending",
    price: "₹299/hr",
    blurb: "Great talks, peaceful vibes & venting over your favorite brew",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    icon: Coffee,
    category: "Social",
  },
  {
    id: "shopping",
    title: "Shopping Companion",
    tag: "Top Rated",
    price: "₹349/hr",
    blurb: "Honest style feedback, bag holding & wardrobe curations",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    icon: ShoppingBag,
    category: "Lifestyle",
  },
  {
    id: "city-tour",
    title: "City Tour Guide",
    tag: "Must Try",
    price: "₹449/hr",
    blurb: "Hidden gem spots, local delicacies & historical heritage trails",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    icon: Compass,
    category: "Travel",
  },
  {
    id: "concerts",
    title: "Event & Concert Buddy",
    tag: "Exciting",
    price: "₹499/hr",
    blurb: "Music gigs, stand-up comedy nights & cultural exhibitions",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    icon: Music,
    category: "Entertainment",
  },
  {
    id: "elderly",
    title: "Elder Assistance & Care",
    tag: "High Trust",
    price: "₹299/hr",
    blurb: "Doctor clinic appointments, gentle walks & engaging company",
    image:
      "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=800&q=80",
    icon: HeartHandshake,
    category: "Care",
  },
  {
    id: "fitness",
    title: "Fitness & Gym Partner",
    tag: "Active",
    price: "₹349/hr",
    blurb: "Workout motivation, morning jogs & badminton doubles companion",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    icon: Dumbbell,
    category: "Wellness",
  },
  {
    id: "foodie",
    title: "Dining & Foodie Explorer",
    tag: "Popular",
    price: "₹399/hr",
    blurb: "Explore street food alleys, fine-dining tastings & culinary trails",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    icon: UtensilsCrossed,
    category: "Lifestyle",
  },
  {
    id: "coworking",
    title: "Study & Coworking Buddy",
    tag: "Productive",
    price: "₹249/hr",
    blurb: "Shared focus sessions, library deep-work & café productivity",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    icon: BookOpen,
    category: "Work",
  },
  {
    id: "party-plus-one",
    title: "Wedding & Party Plus-One",
    tag: "Verified",
    price: "₹599/hr",
    blurb: "Well-dressed, polite & charismatic platonic guest accompaniment",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    icon: PartyPopper,
    category: "Social",
  },
  {
    id: "pets",
    title: "Pet Walking & Strolls",
    tag: "Friendly",
    price: "₹249/hr",
    blurb: "Dog park outings, pet friendly café visits & breezy afternoon walks",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    icon: Dog,
    category: "Lifestyle",
  },
];

interface ProfileItem {
  id: string;
  name: string;
  age: number;
  city: string;
  location: string;
  avatar: string;
  rating: number;
  reviews: number;
  priceHourly: number;
  minDuration: string;
  badge: string;
  verified: boolean;
  category: string;
  languages: string[];
  bio: string;
  tags: string[];
}

const PROFILES_DATA: ProfileItem[] = [
  {
    id: "ananya",
    name: "Ananya Sharma",
    age: 24,
    city: "Kolkata",
    location: "South City & Park Street",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    rating: 4.95,
    reviews: 142,
    priceHourly: 300,
    minDuration: "Min 3 hrs",
    badge: "Top 1% Companion",
    verified: true,
    category: "Movie Companion",
    languages: ["Bengali", "English", "Hindi"],
    bio: "Film studies graduate & arthouse cinema enthusiast. Loves Christopher Nolan, Satyajit Ray, and contemporary world film. Punctual, polite and cultured.",
    tags: ["Cinema Buff", "Art & Design", "Coffee Explorer"],
  },
  {
    id: "rohan",
    name: "Rohan Nair",
    age: 27,
    city: "Bengaluru",
    location: "Indiranagar & Koramangala",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 98,
    priceHourly: 350,
    minDuration: "Min 2 hrs",
    badge: "Tech Enthusiast",
    verified: true,
    category: "Coffee & Conversations",
    languages: ["English", "Malayalam", "Kannada"],
    bio: "Product designer and avid runner. Great conversationalist for startup brainstorming, coffee chats, and tech discussions.",
    tags: ["Design & Tech", "Specialty Coffee", "Marathon Runner"],
  },
  {
    id: "sanya",
    name: "Sanya Kulkarni",
    age: 25,
    city: "Mumbai",
    location: "Bandra & Lower Parel",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    rating: 4.92,
    reviews: 116,
    priceHourly: 400,
    minDuration: "Min 3 hrs",
    badge: "Fashion Stylist",
    verified: true,
    category: "Shopping Companion",
    languages: ["English", "Hindi", "Marathi"],
    bio: "NIFT styling alumna. Gives honest, constructive wardrobe advice, thrift shopping guidance, and weekend gallery accompany.",
    tags: ["Fashion & Styling", "High Street Shopping", "Contemporary Art"],
  },
  {
    id: "arjun",
    name: "Arjun Verma",
    age: 28,
    city: "Delhi NCR",
    location: "Connaught Place & Hauz Khas",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    rating: 4.88,
    reviews: 87,
    priceHourly: 320,
    minDuration: "Min 2 hrs",
    badge: "History Buff",
    verified: true,
    category: "City Tour Guide",
    languages: ["English", "Hindi", "Punjabi"],
    bio: "Passionate storyteller and heritage walk host in Old Delhi and monuments. Loves street food photography and book discussions.",
    tags: ["Heritage Walks", "Street Food", "Documentary Film"],
  },
  {
    id: "tanya",
    name: "Tanya Kapoor",
    age: 26,
    city: "Hyderabad",
    location: "Jubilee Hills & Hitec City",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    rating: 4.94,
    reviews: 104,
    priceHourly: 350,
    minDuration: "Min 3 hrs",
    badge: "Concert Lover",
    verified: true,
    category: "Event & Concert Buddy",
    languages: ["English", "Telugu", "Hindi"],
    bio: "Music enthusiast and foodie. Great plus-one for indie music concerts, food festivals, and board game evenings.",
    tags: ["Live Music", "Culinary Explorer", "Board Games"],
  },
  {
    id: "priya",
    name: "Priya Mukherjee",
    age: 29,
    city: "Kolkata",
    location: "Salt Lake & New Town",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    rating: 4.98,
    reviews: 165,
    priceHourly: 300,
    minDuration: "Min 2 hrs",
    badge: "Compassionate Host",
    verified: true,
    category: "Elder Assistance & Care",
    languages: ["Bengali", "English", "Hindi"],
    bio: "Certified clinical psychology counselor. Patient, respectful companion for senior citizens, doctor clinic visits, and park walks.",
    tags: ["Elder Care", "Mindfulness", "Classical Music"],
  },
];

const CITIES = [
  "All Cities",
  "Mumbai",
  "Bengaluru",
  "Delhi NCR",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Goa",
];

const MARQUEE_ITEMS = [
  { text: "INSTANT REFUNDS", gradient: true },
  { text: "VERIFIED PROFILES", gradient: false },
  { text: "REAL REVIEWS", gradient: true },
  { text: "SECURE BOOKING", gradient: false },
  { text: "100% PLATONIC", gradient: true },
  { text: "BACKGROUND CHECKED", gradient: false },
  { text: "ZERO HIDDEN FEES", gradient: true },
  { text: "24/7 SUPPORT", gradient: false },
];

const TESTIMONIALS = [
  {
    name: "Kavya Reddy",
    city: "Hyderabad",
    service: "Elder Assistance",
    rating: 5,
    date: "2 days ago",
    comment:
      "Booked Priya to accompany my mother to her hospital check-up while I was stuck on an urgent work call. She was patient, polite, and sent me updates throughout. Invaluable trust!",
  },
  {
    name: "Aditya Sen",
    city: "Kolkata",
    service: "Movie Companion",
    rating: 5,
    date: "4 days ago",
    comment:
      "None of my friends wanted to watch a 3-hour arthouse screening at South City. Booked Ananya — she was cultured, on time, and our post-film coffee discussion was top notch.",
  },
  {
    name: "Meera Joshi",
    city: "Mumbai",
    service: "Shopping Companion",
    rating: 5,
    date: "1 week ago",
    comment:
      "Sanya helped me pick out festive outfits in Bandra. Honest styling advice with zero awkwardness. Felt like having a fashionable best friend with me!",
  },
  {
    name: "Vikram Malhotra",
    city: "Bengaluru",
    service: "Concert Buddy",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Had an extra pass for an indie rock gig in Indiranagar. Booked a verified CoFriend and had a blast without feeling out of place. 100% safe and verified.",
  },
];

const FAQS = [
  {
    q: "Is Co-Friend a dating or matchmaking app?",
    a: "No, absolutely not. Co-Friend is a professional marketplace strictly for booking verified companions for everyday activities — movies, coffee, travel, shopping, elder support, fitness, and networking. Romantic or inappropriate solicitations are strictly prohibited and result in immediate permanent account banning.",
  },
  {
    q: "How does the Dual-OTP verification handshake work?",
    a: "When your booking is confirmed, a unique 4-digit Start OTP is generated in your dashboard. When you meet at the public venue, you share this code to begin the session. When the outing concludes, your companion provides their End OTP to authorize safe escrow payout.",
  },
  {
    q: "How are Co-Friends vetted and verified?",
    a: "Every single companion undergoes a rigorous 4-step onboarding protocol: 1) Aadhaar biometric KYC verification, 2) Criminal background record check, 3) 1-on-1 video screening interview, and 4) Mandatory platonic safety pledge signing.",
  },
  {
    q: "What is the cancellation and refund policy?",
    a: "All payments are protected in an escrow vault. You receive a 100% full refund with zero cancellation fee up to 4 hours before the scheduled outing time. In case of companion delay exceeding 15 minutes, you receive an instant full refund plus a ₹200 concierge credit.",
  },
  {
    q: "Can I extend my outing session while it is ongoing?",
    a: "Yes! If both you and your Co-Friend agree to continue your conversation or activity, you can tap 'Extend Session' directly in your booking dashboard at the transparent hourly rate.",
  },
];

export default function HomePage() {
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProfile, setActiveModalProfile] = useState<ProfileItem | null>(
    null
  );
  const [modalBookingSuccess, setModalBookingSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const estimatedMonthlyEarnings = useMemo(() => {
    return (hoursPerWeek * 350 * 4).toLocaleString("en-IN");
  }, [hoursPerWeek]);

  const filteredProfiles = useMemo(() => {
    return PROFILES_DATA.filter((p) => {
      const matchCity =
        selectedCity === "All Cities" || p.city.toLowerCase() === selectedCity.toLowerCase();
      const matchCat =
        selectedCategory === "All" || p.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchQuery =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.city.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCity && matchCat && matchQuery;
    });
  }, [selectedCity, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAFAFD] text-[#0F172A] font-sans antialiased flex flex-col selection:bg-[#F3E8FF] selection:text-[#7C3AED] overflow-x-hidden">
      {/* Main Header / Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 bg-[#FAFAFD]/90 backdrop-blur-md transition-all"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-purple-500/25 transition-transform group-hover:scale-105">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="font-outfit text-2xl font-black tracking-tight text-slate-900">
              Co<span className="text-pink-500">-Friend</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[14.5px] font-semibold text-slate-600">
            <Link
              href="/"
              className="text-slate-700 hover:text-purple-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-slate-700 hover:text-purple-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/explore"
              className="text-slate-700 hover:text-purple-600 transition-colors"
            >
              Explore People
            </Link>
            <Link
              href="/how-it-works"
              className="text-slate-700 hover:text-purple-600 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#about"
              className="text-slate-700 hover:text-purple-600 transition-colors"
            >
              About Us
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/#partner"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-purple-200/90 bg-white/80 px-4.5 py-2 text-sm font-bold text-purple-700 hover:bg-purple-50/70 hover:border-purple-300 shadow-xs transition-all"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Become a Partner</span>
            </Link>
            <Link
              href="/explore"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-600 to-pink-500 px-5 py-2 text-sm font-bold text-white shadow-md shadow-purple-500/25 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Find a Co-Friend</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-radial from-purple-100/40 via-purple-50/20 to-[#FAFAFD]">
        {/* Soft Background Accents */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-pink-300/15 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Copy, Search, Trust & Social Proof */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-purple-200/90 bg-white/80 px-4 py-1.5 shadow-xs backdrop-blur-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-pulse" />
                <span className="font-outfit text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-purple-700">
                  India&apos;s most loved companion marketplace
                </span>
              </motion.div>

              {/* Big Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-outfit text-5xl sm:text-6xl lg:text-[70px] font-black tracking-tight text-[#0F172A] leading-[1.04]"
              >
                Life&apos;s Better <br />
                <span className="relative inline-block mt-1">
                  <span className="bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#F43F5E] bg-clip-text text-transparent">
                    Together.
                  </span>
                  {/* Pink / Rose Underline Stroke */}
                  <svg
                    viewBox="0 0 240 18"
                    className="absolute -bottom-2.5 left-0 w-full"
                    fill="none"
                    aria-hidden="true"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                      d="M4 12 C 70 4, 170 4, 236 10"
                      stroke="#F43F5E"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 text-sm sm:text-[15.5px] leading-relaxed max-w-xl font-normal"
              >
                Find trusted, verified people for movies, coffee, shopping, travel, events, elder care, fitness and more. Book by the hour, meet safely in public, and turn any plan into a memory worth keeping.
              </motion.p>

              {/* Floating Search Bar Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3 }}
                className="rounded-2xl md:rounded-[1.6rem] border border-purple-100 bg-white p-2.5 sm:p-3 shadow-[0_20px_45px_-12px_rgba(124,58,237,0.18)]"
              >
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2">
                  {/* Service Input / Select */}
                  <div className="flex-1 flex items-center gap-3 px-3 py-1.5 cursor-pointer relative group">
                    <Search className="w-5 h-5 shrink-0 text-purple-600" />
                    <div className="flex-1 min-w-0">
                      <label className="block text-[9.5px] font-bold uppercase tracking-wider text-slate-400">
                        What are you looking for?
                      </label>
                      <div className="relative flex items-center justify-between">
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-full cursor-pointer appearance-none bg-transparent text-sm font-bold text-slate-800 pr-5 truncate focus:outline-none"
                        >
                          <option value="All">Anything fun or helpf...</option>
                          {SERVICES_DATA.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-0 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-px h-9 bg-slate-100" />

                  {/* Location Input / Select */}
                  <div className="flex-1 flex items-center gap-3 px-3 py-1.5 cursor-pointer relative group border-t md:border-t-0 border-slate-100">
                    <MapPin className="w-5 h-5 shrink-0 text-pink-500" />
                    <div className="flex-1 min-w-0">
                      <label className="block text-[9.5px] font-bold uppercase tracking-wider text-slate-400">
                        Location
                      </label>
                      <div className="relative flex items-center justify-between">
                        <select
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.target.value)}
                          className="w-full cursor-pointer appearance-none bg-transparent text-sm font-bold text-slate-800 pr-5 truncate focus:outline-none"
                        >
                          <option value="All Cities">Anywhere in In...</option>
                          {CITIES.filter((c) => c !== "All Cities").map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-0 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/explore"
                    className="shrink-0 flex items-center justify-center rounded-xl md:rounded-2xl bg-gradient-to-r from-purple-600 via-purple-600 to-pink-500 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-purple-500/25 transition-all hover:opacity-95 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Find a Co-Friend
                  </Link>
                </div>
              </motion.div>

              {/* Trust Indicators Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-slate-700 pt-1"
              >
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-purple-600" />
                  <span>Verified Profiles</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-purple-600" />
                  <span>Real Reviews</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-purple-600" />
                  <span>Secure Booking</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <LayoutGrid className="w-4 h-4 text-purple-600" />
                  <span>11 Services</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Hero Visual Card Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 relative mx-auto w-full max-w-[480px] lg:max-w-none pt-4 pb-6"
            >
              {/* Main Purple Backdrop & Selfie Visual */}
              <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4.3] rounded-[2.6rem] sm:rounded-[3rem] bg-gradient-to-b from-[#7C3AED] via-[#7534E4] to-[#6322C6] shadow-[0_25px_60px_-15px_rgba(124,58,237,0.4)] overflow-hidden">
                {/* Photo Layer */}
                <Image
                  src="https://images.unsplash.com/photo-1659356870699-2c6b511baec9?auto=format&fit=crop&w=1200&q=80"
                  alt="Co-Friends smiling together"
                  fill
                  priority
                  className="object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Card 1: Top-Left 4.95 Rating Badge */}
              <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 z-20 bg-white rounded-2xl p-3 sm:p-3.5 shadow-[0_12px_30px_-6px_rgba(0,0,0,0.15)] border border-slate-50 min-w-[130px]">
                <div className="flex gap-0.5 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-2xl font-black text-slate-900 leading-none">
                  4.95
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold mt-1">
                  1.2L+ verified reviews
                </div>
              </div>

              {/* Floating Card 2: Top-Right Polaroid (Girl with coffee) */}
              <div className="absolute -top-2 -right-3 sm:-top-4 sm:-right-4 z-20 bg-white p-2 rounded-2xl shadow-[0_16px_35px_-8px_rgba(0,0,0,0.22)] rotate-[6deg] hover:rotate-0 transition-transform duration-300 w-28 sm:w-36">
                <div className="relative aspect-[3.4/4] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"
                    alt="Outing friend"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Card 3: Bottom-Left Polaroid (Friends viewpoint) */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-6 z-20 bg-white p-2 rounded-2xl shadow-[0_16px_35px_-8px_rgba(0,0,0,0.22)] -rotate-[4deg] hover:rotate-0 transition-transform duration-300 w-36 sm:w-44">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=500&q=80"
                    alt="Friends sunset view"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Card 4: Bottom-Right 15,000+ Co-Friends Verified Card */}
              <div className="absolute -bottom-3 -right-2 sm:-bottom-5 sm:-right-3 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 px-3.5 sm:px-4 shadow-[0_16px_35px_-8px_rgba(0,0,0,0.18)] border border-white/80 flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#10B981] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
                    15,000+ Co-Friends
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-semibold">
                    Aadhaar &amp; background verified
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infinite Side Scrolling Marquee Banner */}
      <div className="py-5 bg-white border-y border-purple-100/80 overflow-hidden relative shadow-xs">
        <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-10 shrink-0">
              <span
                className={`font-outfit text-base sm:text-lg md:text-xl font-black uppercase tracking-wider ${
                  item.gradient
                    ? "bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                    : "text-[#0F172A]"
                }`}
              >
                {item.text}
              </span>
              <span className="text-pink-500 text-lg sm:text-xl select-none font-black">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Live Stats Bar with Hover Counters */}
      <section className="bg-white border-y border-purple-100 py-8 shadow-xs relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-purple-100">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-3 cursor-default transition-transform"
            >
              <div className="font-outfit text-3xl sm:text-4xl font-extrabold text-purple-700">
                15,000+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                Verified Co-Friends
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-3 cursor-default transition-transform"
            >
              <div className="font-outfit text-3xl sm:text-4xl font-extrabold text-pink-600">
                85,000+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                Completed Outings
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-3 cursor-default transition-transform"
            >
              <div className="font-outfit text-3xl sm:text-4xl font-extrabold text-purple-700">
                24+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                Cities Across India
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-3 cursor-default transition-transform"
            >
              <div className="font-outfit text-3xl sm:text-4xl font-extrabold text-amber-500 flex items-center justify-center gap-1">
                <span>4.95</span>
                <Star className="w-6 h-6 fill-amber-400 text-amber-400 animate-pulse" />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                Average Companion Rating
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services & Categories Section with Interactive Animated Cards */}
      <section id="services" className="py-16 sm:py-24 bg-[#FAFAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Curated Companion Formats</span>
              </div>
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900">
                Explore Services & Activities
              </h2>
              <p className="font-body text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                Choose from 11 verified categories with transparent hourly tariffs and zero hidden fees.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-bold text-sm text-purple-700 hover:text-purple-800 transition-all hover:translate-x-1"
            >
              <span>View All 11 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES_DATA.slice(0, 8).map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl overflow-hidden border border-purple-100/80 shadow-md hover:shadow-xl hover:shadow-purple-500/15 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-purple-700 text-xs font-bold shadow-xs">
                        {srv.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div className="flex items-center gap-1.5 text-xs font-medium">
                        <Icon className="w-4 h-4 text-pink-400 group-hover:rotate-12 transition-transform" />
                        <span>{srv.category}</span>
                      </div>
                      <span className="font-outfit text-sm font-extrabold bg-purple-600/90 px-2.5 py-1 rounded-full backdrop-blur-xs shadow-xs">
                        {srv.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-outfit text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                        {srv.title}
                      </h3>
                      <p className="font-body text-xs text-slate-500 mt-1.5 line-clamp-2">
                        {srv.blurb}
                      </p>
                    </div>

                    <Link
                      href={
                        srv.id === "movies"
                          ? "/available-now"
                          : `/explore?category=${srv.id}`
                      }
                      className="w-full bg-purple-50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white text-purple-700 font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <span>Find {srv.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Co-Friends Directory Section */}
      <section id="explore" className="py-16 sm:py-24 bg-white border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Identity & Police Verified</span>
              </div>
              <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900">
                Top Rated Co-Friends
              </h2>
              <p className="font-body text-slate-600 text-sm sm:text-base mt-2">
                Browse verified individuals ready to accompany you for hobbies, outings, and events.
              </p>
            </div>

            {/* City Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {CITIES.slice(0, 5).map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCity === city
                      ? "bg-purple-600 text-white shadow-sm scale-105"
                      : "bg-purple-50 text-slate-600 hover:bg-purple-100 hover:text-purple-700"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfiles.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-[#FAFAFD] rounded-3xl p-5 border border-purple-100/90 shadow-sm hover:shadow-xl hover:shadow-purple-500/12 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-start gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-200 shrink-0 border-2 border-white shadow-xs group-hover:scale-105 transition-transform">
                      <Image
                        src={p.avatar}
                        alt={p.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Aadhaar Verified</span>
                        </span>
                        <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span>{p.rating}</span>
                          <span className="text-slate-400 font-normal">
                            ({p.reviews})
                          </span>
                        </div>
                      </div>
                      <h3 className="font-outfit text-base font-bold text-slate-900 truncate mt-1 group-hover:text-purple-700 transition-colors">
                        {p.name},{" "}
                        <span className="text-xs font-normal text-slate-500">
                          {p.age} yrs
                        </span>
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-slate-500 truncate">
                        <MapPin className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span>
                          {p.location}, {p.city}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="font-body text-xs text-slate-600 mt-4 line-clamp-2 leading-relaxed">
                    {p.bio}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium bg-white text-slate-600 px-2 py-0.5 rounded-md border border-slate-200 hover:border-purple-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 mt-4 border-t border-purple-100 flex items-center justify-between">
                  <div>
                    <div className="font-outfit text-base font-extrabold text-slate-900">
                      ₹{p.priceHourly}
                      <span className="text-xs font-normal text-slate-500">
                        {" "}
                        / hr
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {p.minDuration}
                    </div>
                  </div>

                  {p.id === "ananya" ? (
                    <Link
                      href="/profile/ananya-sharma"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-98 btn-glow"
                    >
                      Book Ananya
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        setActiveModalProfile(p);
                        setModalBookingSuccess(false);
                      }}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-98 btn-glow cursor-pointer"
                    >
                      Book Now
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold px-6 py-3 rounded-full text-sm transition-all hover:scale-105"
            >
              <span>Explore All Verified Co-Friends</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4-Step How It Works Section with Glowing Animated Step Cards */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-[#FAFAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>Simple, Safe & Transparent</span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900">
              How Co-Friend Works
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base">
              Book a verified companion in 4 frictionless steps with dual-OTP protection and escrow assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                grad: "from-purple-600 to-violet-500",
                shadow: "shadow-purple-500/20",
                title: "Choose Activity & Companion",
                desc: "Filter by activity format, city, spoken languages, and verified reviews to find your match.",
              },
              {
                num: "02",
                grad: "from-violet-600 to-pink-500",
                shadow: "shadow-pink-500/20",
                title: "Set Public Venue & Time",
                desc: "Select your preferred multiplex, café, museum or mall for a safe public outing.",
              },
              {
                num: "03",
                grad: "from-pink-600 to-rose-500",
                shadow: "shadow-rose-500/20",
                title: "Escrow Deposit & Start OTP",
                desc: "Funds remain locked in escrow. Share your 4-digit guest OTP when meeting at the venue.",
              },
              {
                num: "04",
                grad: "from-rose-500 to-amber-500",
                shadow: "shadow-amber-500/20",
                title: "Enjoy Outing & End OTP",
                desc: "Have a great time! Upon safe conclusion, your companion gives their End OTP to release the payout.",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-6 rounded-3xl border border-purple-100 relative shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${step.grad} text-white font-outfit font-extrabold text-xl flex items-center justify-center mb-5 shadow-md ${step.shadow} group-hover:scale-110 transition-transform`}
                >
                  {step.num}
                </div>
                <h3 className="font-outfit text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                  {step.title}
                </h3>
                <p className="font-body text-xs text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Trust Pillars Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5" />
              <span>Safety Above All</span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why Urban India Trusts Co-Friend
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base">
              Built with industry-leading security, identity verification, and strict platonic guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-3xl bg-[#FAFAFD] border border-purple-100 space-y-3 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-slate-900">
                100% Strict Platonic Charter
              </h3>
              <p className="font-body text-xs text-slate-600 leading-relaxed">
                Strict zero-tolerance policy against romantic or inappropriate solicitations. All outings take place in certified public spaces.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-3xl bg-[#FAFAFD] border border-purple-100 space-y-3 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-slate-900">
                Escrow Protected Payments
              </h3>
              <p className="font-body text-xs text-slate-600 leading-relaxed">
                Your payment is held safely in escrow and is only released after you confirm the session with the dual-OTP handshake.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-3xl bg-[#FAFAFD] border border-purple-100 space-y-3 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-slate-900">
                Police & Aadhaar Vetting
              </h3>
              <p className="font-body text-xs text-slate-600 leading-relaxed">
                Companions undergo government identity checks, video interviews, and criminal background verification before listing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Become a Co-Friend / Earnings Section with Interactive Glow Slider */}
      <section id="partner" className="py-16 sm:py-24 bg-[#FAFAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-700 via-violet-600 to-pink-500 shadow-2xl shadow-purple-500/30 text-white p-8 sm:p-12 lg:p-16"
          >
            <div className="dots-pattern-light absolute inset-0 opacity-20 pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-pink-200 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Become a Verified Co-Friend</span>
                </div>
                <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold leading-tight">
                  Turn Your Free Time Into Meaningful Income.
                </h2>
                <p className="font-body text-sm sm:text-base text-purple-100 leading-relaxed">
                  Join India&apos;s most trusted companion network. Accompany people for movies, coffees, city tours, and events on your own schedule.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                    <div className="font-outfit font-extrabold text-xl">₹45k+</div>
                    <div className="text-[11px] text-purple-200 mt-0.5">
                      Monthly Potential
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                    <div className="font-outfit font-extrabold text-xl">Weekly</div>
                    <div className="text-[11px] text-purple-200 mt-0.5">
                      Direct Payouts
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                    <div className="font-outfit font-extrabold text-xl">100%</div>
                    <div className="text-[11px] text-purple-200 mt-0.5">
                      Flexible Hours
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                    <div className="font-outfit font-extrabold text-xl">24/7</div>
                    <div className="text-[11px] text-purple-200 mt-0.5">
                      SOS & Support
                    </div>
                  </div>
                </div>
              </div>

              {/* Earnings Calculator Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl space-y-6 transition-transform"
              >
                <div>
                  <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                    Earnings Calculator
                  </span>
                  <h3 className="font-outfit text-xl font-bold text-slate-900 mt-1">
                    Estimate Your Income
                  </h3>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm font-semibold mb-2">
                    <span className="text-slate-600">Hours available per week:</span>
                    <span className="font-outfit font-extrabold text-purple-700 text-lg">
                      {hoursPerWeek} hrs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="5"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full accent-purple-600 cursor-pointer h-2 bg-purple-100 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>5 hrs/wk (Part-time)</span>
                    <span>40 hrs/wk (Full-time)</span>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100 text-center animate-pulse-glow">
                  <div className="text-xs text-slate-500">
                    Estimated Monthly Earnings:
                  </div>
                  <div className="font-outfit text-3xl font-extrabold text-purple-700 mt-1">
                    ₹{estimatedMonthlyEarnings}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    *Based on average companion tariff of ₹350/hr
                  </div>
                </div>

                <button
                  onClick={() =>
                    alert(
                      "Thank you for your interest! Co-Friend companion registration opens weekly. Check back shortly."
                    )
                  }
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3.5 rounded-2xl text-sm transition-all shadow-md shadow-purple-500/25 active:scale-98 btn-glow cursor-pointer"
                >
                  Apply to Become a Co-Friend
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-purple-600" />
              <span>Real Customer Stories</span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900">
              Loved by 85,000+ Customers
            </h2>
            <p className="font-body text-slate-600 text-sm sm:text-base">
              See how verified Co-Friends bring warmth, confidence, and company to daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-[#FAFAFD] p-6 rounded-3xl border border-purple-100 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="font-body text-xs text-slate-600 leading-relaxed italic">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-100/80">
                  <div className="font-outfit font-bold text-sm text-slate-900">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-purple-600 font-semibold">
                    {t.service} • {t.city}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section with Animated Reveal */}
      <section className="py-16 sm:py-24 bg-[#FAFAFD] border-t border-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-purple-100 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-purple-50/50 transition-colors"
                  >
                    <span className="font-outfit font-bold text-sm sm:text-base text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5 pt-1 font-body text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-purple-50"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal Booking Drawer for Co-Friends */}
      <AnimatePresence>
        {activeModalProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 relative shadow-2xl border border-purple-100"
            >
              <button
                onClick={() => {
                  setActiveModalProfile(null);
                  setModalBookingSuccess(false);
                }}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {modalBookingSuccess ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-outfit text-2xl font-bold text-slate-900">
                    Request Sent to {activeModalProfile.name}!
                  </h3>
                  <p className="font-body text-xs text-slate-600 leading-relaxed">
                    {activeModalProfile.name} will review your session request. Your booking voucher and Dual-OTP handshake will be ready upon confirmation.
                  </p>
                  <div className="pt-2 flex flex-col gap-2">
                    <Link
                      href="/book/confirmation"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl text-xs font-bold hover:from-purple-700 hover:to-pink-700 transition-all text-center btn-glow"
                    >
                      View Booking Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        setActiveModalProfile(null);
                        setModalBookingSuccess(false);
                      }}
                      className="w-full bg-slate-100 text-slate-700 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-200 transition-all cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                      <Image
                        src={activeModalProfile.avatar}
                        alt={activeModalProfile.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                        Aadhaar Verified • {activeModalProfile.city}
                      </span>
                      <h3 className="font-outfit text-lg font-bold text-slate-900">
                        {activeModalProfile.name}
                      </h3>
                      <div className="text-xs font-bold text-purple-700">
                        ₹{activeModalProfile.priceHourly} / hr{" "}
                        <span className="text-slate-400 font-normal">
                          ({activeModalProfile.minDuration})
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100 text-xs text-purple-900 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold">
                      <ShieldCheck className="w-4 h-4 text-purple-600" />
                      <span>Platonic Outing Guarantee</span>
                    </div>
                    <p className="text-[11px] text-purple-700">
                      All outings follow strict platonic guidelines with 100% escrow vault protection.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 text-xs">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Outing Plan / Preferred Activity
                      </label>
                      <input
                        type="text"
                        defaultValue={activeModalProfile.category}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-purple-600"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Preferred Date & Time
                      </label>
                      <input
                        type="datetime-local"
                        defaultValue="2026-09-15T16:00"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-purple-600"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setModalBookingSuccess(true)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-purple-500/25 active:scale-98 cursor-pointer mt-2 btn-glow"
                  >
                    Confirm & Request Companion
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Midnight Slate Footer with Ambient Glows */}
      <footer className="bg-[#0F0F1A] text-slate-300 pt-16 pb-12 border-t border-purple-900/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-outfit font-extrabold text-lg group-hover:scale-105 transition-transform">
                  C
                </div>
                <span className="font-outfit text-2xl font-extrabold text-white tracking-tight">
                  Co-Friend<span className="text-pink-500">.in</span>
                </span>
              </Link>
              <p className="font-body text-xs text-slate-400 leading-relaxed max-w-sm">
                India&apos;s verified platonic companion marketplace. Book trusted, identity-checked people for movies, coffee, travel, events, fitness, and elder assistance.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/40 text-purple-300 text-[11px] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Strict Platonic & Background Verified</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <div className="font-outfit text-sm font-bold uppercase tracking-wider text-white">
                Platform
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <Link href="/services" className="hover:text-purple-400 transition-colors">
                    Services Catalog
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="hover:text-purple-400 transition-colors">
                    Explore Co-Friends
                  </Link>
                </li>
                <li>
                  <Link href="/available-now" className="hover:text-purple-400 transition-colors">
                    Available Now
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-purple-400 transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/book/confirmation" className="hover:text-purple-400 transition-colors">
                    My Bookings
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Cities */}
            <div className="space-y-3">
              <div className="font-outfit text-sm font-bold uppercase tracking-wider text-white">
                Cities
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <Link href="/explore" className="hover:text-purple-400 transition-colors">
                    Mumbai Co-Friends
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="hover:text-purple-400 transition-colors">
                    Bengaluru Co-Friends
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="hover:text-purple-400 transition-colors">
                    Delhi NCR Co-Friends
                  </Link>
                </li>
                <li>
                  <Link href="/available-now" className="hover:text-purple-400 transition-colors">
                    Kolkata Cinema Companions
                  </Link>
                </li>
                <li>
                  <Link href="/explore" className="hover:text-purple-400 transition-colors">
                    Hyderabad & Pune
                  </Link>
                </li>
              </ul>
            </div>

            {/* Safety & Legal */}
            <div className="space-y-3">
              <div className="font-outfit text-sm font-bold uppercase tracking-wider text-white">
                Trust & Safety
              </div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <Link href="/how-it-works" className="hover:text-purple-400 transition-colors">
                    Platonic Policy
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-purple-400 transition-colors">
                    Dual-OTP Protection
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-purple-400 transition-colors">
                    Escrow Vault Guarantee
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-purple-400 transition-colors">
                    Emergency SOS Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © 2025 Co-Friend Lifestyle Services Pvt. Ltd. Life&apos;s Better Together. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Platonic Charter</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
