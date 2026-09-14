const img = (id: string, w = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Explore People", id: "explore" },
  { label: "How It Works", id: "how-it-works" },
  { label: "About Us", id: "about" },
];

export const CITIES = [
  "Mumbai",
  "Bengaluru",
  "Delhi NCR",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Kolkata",
  "Goa",
  "Jaipur",
  "Ahmedabad",
];

export const IMAGES = {
  heroMain: img("photo-1659356870699-2c6b511baec9", 1200),
  heroA: img("photo-1529156069898-49953e39b3ac", 560),
  heroB: img("photo-1541990333441-32db7f1571af", 560),
  partner: img("photo-1516742090463-1d5424b21aab", 1100),
};

export interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  price: string;
  blurb: string;
  image: string;
}

export const SERVICES: ServiceItem[] = [
  { id: "movies", title: "Movie Companion", tag: "Popular", price: "₹399/hr", blurb: "Never watch alone again", image: img("photo-1489599849927-2ee91cede3ba", 900) },
  { id: "coffee", title: "Coffee & Conversations", tag: "Trending", price: "₹299/hr", blurb: "Great talks over great brews", image: img("photo-1521017432531-fbd92d768814", 900) },
  { id: "shopping", title: "Shopping Companion", tag: "Style", price: "₹449/hr", blurb: "A second opinion that fits", image: img("photo-1483985988355-763728e1935b", 900) },
  { id: "travel", title: "Travel Companion", tag: "Adventure", price: "₹799/hr", blurb: "Road trips, sorted", image: img("photo-1488646953014-85cb44e25828", 900) },
  { id: "events", title: "Event Companion", tag: "Social", price: "₹599/hr", blurb: "Concerts, fests & weddings", image: img("photo-1492684223066-81342ee5ff30", 900) },
  { id: "gaming", title: "Gaming Companion", tag: "Esports", price: "₹349/hr", blurb: "Squad up in real life", image: img("photo-1511512578047-dfb367046420", 900) },
  { id: "tours", title: "City Tour Guide", tag: "Explore", price: "₹699/hr", blurb: "Hidden gems, local stories", image: img("photo-1477959858617-67f85cf4f1df", 900) },
  { id: "medical", title: "Medical Support", tag: "Essential", price: "₹499/hr", blurb: "Company for appointments", image: img("photo-1576091160399-112ba8d25d1d", 900) },
  { id: "elder", title: "Elder Assistance", tag: "Care", price: "₹499/hr", blurb: "Patient, respectful help", image: img("photo-1544027993-37dbfe43562a", 900) },
  { id: "fitness", title: "Fitness Buddy", tag: "Health", price: "₹399/hr", blurb: "Accountability that shows up", image: img("photo-1571019613454-1cb2f99b2d8b", 900) },
  { id: "networking", title: "Professional Networking", tag: "Career", price: "₹899/hr", blurb: "Warm intros, real rooms", image: img("photo-1556761175-b413da4baf72", 900) },
];

export interface CoFriendItem {
  id: string;
  name: string;
  city: string;
  verified: boolean;
  rating: number;
  reviews: number;
  availability: string;
  services: string[];
  price: number;
  tagline: string;
  image: string;
}

export const COFRIENDS: CoFriendItem[] = [
  {
    id: "priya",
    name: "Priya Sharma",
    city: "Mumbai",
    verified: true,
    rating: 4.9,
    reviews: 214,
    availability: "Available Today",
    services: ["Coffee & Conversations", "Shopping Companion", "Event Companion"],
    price: 449,
    tagline: "Fashion stylist, foodie & Bandra café expert",
    image: img("photo-1659356871522-6da765214efe", 800),
  },
  {
    id: "rohan",
    name: "Rohan Mehta",
    city: "Bengaluru",
    verified: true,
    rating: 4.8,
    reviews: 187,
    availability: "Available This Weekend",
    services: ["Gaming Companion", "City Tour Guide", "Fitness Buddy"],
    price: 399,
    tagline: "Indie gamer, marathoner & Indiranagar local",
    image: img("photo-1645114292307-e9f847b6bb4d", 800),
  },
  {
    id: "ananya",
    name: "Ananya Iyer",
    city: "Delhi NCR",
    verified: true,
    rating: 5.0,
    reviews: 96,
    availability: "Available Tomorrow",
    services: ["Elder Assistance", "Medical Support", "Shopping Companion"],
    price: 549,
    tagline: "Certified caregiver & wonderfully patient listener",
    image: img("photo-1725033489648-a819750348eb", 800),
  },
  {
    id: "vikram",
    name: "Vikram Verma",
    city: "Hyderabad",
    verified: true,
    rating: 4.9,
    reviews: 158,
    availability: "Available Today",
    services: ["Travel Companion", "Movie Companion", "Professional Networking"],
    price: 699,
    tagline: "PM by day, road-trip planner & IMAX regular",
    image: img("photo-1577860756464-3e84ec40c04c", 800),
  },
  {
    id: "kabir",
    name: "Kabir Singh",
    city: "Pune",
    verified: true,
    rating: 4.7,
    reviews: 121,
    availability: "Available Today",
    services: ["Fitness Buddy", "Movie Companion", "City Tour Guide"],
    price: 379,
    tagline: "Powerlifter who knows every FC Road food joint",
    image: img("photo-1507003211169-0a1dd7228f2d", 800),
  },
  {
    id: "meera",
    name: "Meera Krishnan",
    city: "Chennai",
    verified: true,
    rating: 4.9,
    reviews: 143,
    availability: "Available This Weekend",
    services: ["Coffee & Conversations", "Event Companion", "Travel Companion"],
    price: 429,
    tagline: "Carnatic vocalist, beach-walk enthusiast & bookworm",
    image: img("photo-1573496359142-b8d87734a5a2", 800),
  },
];

export const STATS = [
  { value: 15000, suffix: "+", label: "Verified Co-Friends", decimals: 0 },
  { value: 85000, suffix: "+", label: "Happy Customers", decimals: 0 },
  { value: 11, suffix: "", label: "Service Categories", decimals: 0 },
  { value: 24, suffix: "+", label: "Cities Across India", decimals: 0 },
  { value: 4.95, suffix: "/5", label: "Average Rating", decimals: 2 },
];

export const STEPS = [
  {
    step: "01",
    title: "Choose What You Need",
    description: "Pick from 11 verified categories — movies, coffee, travel, elder care, fitness and more.",
  },
  {
    step: "02",
    title: "Find Your Co-Friend",
    description: "Filter by city, rating, price and background verification. Read real reviews first.",
  },
  {
    step: "03",
    title: "Book Your Time",
    description: "Choose a date, duration and public meetup spot. Transparent hourly pricing, instant confirmation.",
  },
  {
    step: "04",
    title: "Meet & Enjoy",
    description: "Connect safely with live trip tracking and SOS support. Rate your experience afterwards.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Kavya Reddy",
    city: "Hyderabad",
    service: "Elder Assistance",
    rating: 5,
    date: "2 days ago",
    comment: "Booked Ananya to accompany my mother to her hospital check-up while I was stuck on a work call. She was patient, polite and sent me updates throughout. Invaluable service.",
    avatar: img("photo-1494790108377-be9c29b29330", 200),
  },
  {
    name: "Siddharth Verma",
    city: "Mumbai",
    service: "Movie Companion",
    rating: 5,
    date: "1 week ago",
    comment: "Wanted to catch the IMAX release but none of my friends were free. Found a movie buddy on Co-Friend — we ended up discussing cinematography over coffee for an hour after.",
    avatar: img("photo-1500648767791-00dcc994a43e", 200),
  },
  {
    name: "Dr. Sunita Patel",
    city: "Bengaluru",
    service: "City Tour Guide",
    rating: 5,
    date: "3 days ago",
    comment: "Just moved to Bengaluru and needed a local to show me Commercial Street and Jayanagar. Rohan was punctual, friendly and completely professional. Felt totally safe.",
    avatar: img("photo-1544005313-94ddf0286df2", 200),
  },
  {
    name: "Arjun Nair",
    city: "Pune",
    service: "Fitness Buddy",
    rating: 5,
    date: "5 days ago",
    comment: "Three months of skipping gym ended the week I booked Kabir. He shows up, pushes me just enough and somehow makes 6am workouts something I look forward to.",
    avatar: img("photo-1506794778202-cad84cf45f1d", 200),
  },
  {
    name: "Ishita Kapoor",
    city: "Delhi NCR",
    service: "Shopping Companion",
    rating: 4,
    date: "1 week ago",
    comment: "Wedding shopping in Chandni Chowk alone sounded terrifying. My Co-Friend knew every lane, bargained like a pro and carried bags without one complaint. Booking again.",
    avatar: img("photo-1534528741775-53994a69daeb", 200),
  },
  {
    name: "Neha Joshi",
    city: "Chennai",
    service: "Coffee & Conversations",
    rating: 5,
    date: "4 days ago",
    comment: "New city, zero friends, too much silence. Meera and I talked books for two hours at a Besant Nagar café. It felt like catching up with an old friend, not meeting a stranger.",
    avatar: img("photo-1438761681033-6461ffad8d80", 200),
  },
];

export const FEATURES = [
  { icon: "ShieldCheck", title: "100% ID-Verified People", description: "Aadhaar verification, video selfie checks and background screening before any profile goes live." },
  { icon: "Star", title: "Genuine Reviews Only", description: "Only customers with completed bookings can review. No fake ratings, ever." },
  { icon: "Lock", title: "Secure Escrow Booking", description: "Payments stay in escrow and release only after your booking completion code is confirmed." },
  { icon: "IndianRupee", title: "Transparent Pricing", description: "Clear hourly rates with zero hidden platform fees. What you see is exactly what you pay." },
  { icon: "LayoutGrid", title: "11 Service Categories", description: "From movie nights to medical visits, elder care to esports — one platform for every plan." },
  { icon: "Headphones", title: "24/7 Human Support", description: "Real people on call across every metro, plus live trip tracking and one-tap SOS." },
];

export const FAQS = [
  {
    q: "Is Co-Friend a dating app?",
    a: "No, absolutely not. Co-Friend is a professional marketplace for booking verified companions for everyday activities — movies, coffee, travel, shopping, elder support, fitness and networking. Anything romantic is strictly prohibited and leads to a permanent ban.",
  },
  {
    q: "How does profile verification work?",
    a: "Every Co-Friend completes mandatory government ID verification (Aadhaar/PAN), a live video selfie match, a background check and reference verification before their profile is published.",
  },
  {
    q: "How are payments handled?",
    a: "All payments are held securely in escrow by Co-Friend and released to the partner only after you verify the booking completion code. Cancellations up to 4 hours before start time get a full automatic refund.",
  },
  {
    q: "Where do meetings take place?",
    a: "All bookings happen in public spaces — malls, theatres, cafés, hospitals, parks and event venues. Both parties can share live trip status with trusted contacts through the app.",
  },
  {
    q: "What does it cost?",
    a: "Co-Friends set their own hourly rates, typically between ₹299 and ₹899 per hour depending on the service and city. You see the full price before you book — no surge, no surprises.",
  },
  {
    q: "Can I earn as a Co-Friend?",
    a: "Yes! If you have a skill, a hobby or simply time and warmth to share, you can apply to become a partner. Verified partners earn up to ₹45,000/month with flexible hours and weekly payouts.",
  },
];

export const MARQUEE_ITEMS = [
  "Verified Profiles",
  "Real Reviews",
  "Secure Booking",
  "11 Service Categories",
  "24+ Cities",
  "4.95 Average Rating",
  "Background Checked",
  "Instant Refunds",
];
