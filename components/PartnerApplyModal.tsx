"use client";

import { useEffect, useState, useRef } from "react";
import {
  Sparkles,
  Camera,
  FileCheck,
  ShieldCheck,
  Upload,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowLeft,
  X,
  AlertCircle,
  Copy,
  ExternalLink,
  Lock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { CITIES, SERVICES } from "@/data/content";
import {
  submitPartnerApplication,
  type PartnerApplication,
  getStoredApplications,
} from "@/lib/companionStore";

export function PartnerApplyModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedApp, setSubmittedApp] = useState<PartnerApplication | null>(null);

  // Step 1 State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState(CITIES[0]);
  const [bio, setBio] = useState("");
  const [languages, setLanguages] = useState("English, Hindi");
  const [price, setPrice] = useState("450");
  const [pickedServices, setPickedServices] = useState<Set<string>>(
    new Set(["Coffee & Conversations", "Movie Companion"])
  );

  // Step 2 State (Documents)
  const [selfieUrl, setSelfieUrl] = useState<string>("");
  const [aadhaarFrontUrl, setAadhaarFrontUrl] = useState<string>("");
  const [aadhaarBackUrl, setAadhaarBackUrl] = useState<string>("");
  const [consent, setConsent] = useState(true);

  // File input refs
  const selfieInputRef = useRef<HTMLInputElement | null>(null);
  const aadhaarFrontInputRef = useRef<HTMLInputElement | null>(null);
  const aadhaarBackInputRef = useRef<HTMLInputElement | null>(null);

  // Lookup existing application by phone or ID
  const [lookupMode, setLookupMode] = useState(false);
  const [lookupQuery, setLookupQuery] = useState("");
  const [lookupResult, setLookupResult] = useState<PartnerApplication | null>(null);

  useEffect(() => {
    if (open) {
      // Don't wipe if already on step 3 to keep tracking ID accessible
      if (step !== 3) {
        setStep(1);
        setIsSubmitting(false);
        setLookupMode(false);
        setLookupResult(null);
      }
    }
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const toggleService = (s: string) => {
    setPickedServices((prev) => {
      const next = new Set(prev);
      if (next.has(s)) {
        if (next.size > 1) next.delete(s);
        else toast.error("Please pick at least one service");
      } else {
        next.add(s);
      }
      return next;
    });
  };

  const handleFileUpload = (
    file: File,
    setter: (val: string) => void,
    label: string
  ) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error(`${label} is too large. Max 5MB allowed.`);
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setter(e.target.result as string);
        toast.success(`${label} uploaded successfully!`);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleStep1Next = () => {
    if (name.trim().length < 2) {
      toast.error("Please enter your full legal name");
      return;
    }
    if (phone.trim().length < 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    if (email.trim().length < 5 || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (pickedServices.size === 0) {
      toast.error("Please select at least 1 service you want to offer");
      return;
    }
    setStep(2);
  };

  const handleSubmit = async () => {
    if (!selfieUrl) {
      toast.error("Please upload your live selfie / profile photo");
      return;
    }
    if (!aadhaarFrontUrl) {
      toast.error("Please upload the front page of your Aadhaar card");
      return;
    }
    if (!aadhaarBackUrl) {
      toast.error("Please upload the back page of your Aadhaar card");
      return;
    }
    if (!consent) {
      toast.error("Please confirm the document consent declaration");
      return;
    }

    setIsSubmitting(true);
    try {
      const application = await submitPartnerApplication({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        city,
        bio: bio.trim() || `Verified friendly companion in ${city}.`,
        languages: languages.trim(),
        services: Array.from(pickedServices),
        requestedRate: Number(price) || 450,
        selfieUrl,
        aadhaarFrontUrl,
        aadhaarBackUrl,
      });

      setSubmittedApp(application);
      setStep(3);
      toast.success("Application submitted for verification!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLookup = () => {
    const q = lookupQuery.trim().toLowerCase();
    if (!q) {
      toast.error("Enter your Application ID or Phone number");
      return;
    }
    const all = getStoredApplications();
    const match = all.find(
      (a) =>
        a.id.toLowerCase() === q ||
        a.phone.replace(/[^0-9]/g, "").includes(q.replace(/[^0-9]/g, ""))
    );
    if (match) {
      setLookupResult(match);
    } else {
      toast.error("No application found with that ID or Phone number");
      setLookupResult(null);
    }
  };

  const copyId = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Application ID copied to clipboard!");
  };

  // Sample quick test fill helper
  const fillSampleKyc = () => {
    setSelfieUrl("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80");
    setAadhaarFrontUrl("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80");
    setAadhaarBackUrl("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80");
    toast.info("Sample KYC documents loaded for testing");
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onOpenChange(false)}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-purple-100/30 bg-white shadow-2xl z-10 max-h-[92vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={() => onOpenChange(false)}
            aria-label="Close dialog"
            className="absolute right-4 top-4 z-20 grid h-8 w-8 place-items-center rounded-full bg-white/20 text-white backdrop-blur hover:bg-white/30 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-purple-700 via-violet-600 to-pink-500 px-6 sm:px-8 py-5 text-white shrink-0">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[0.7rem] font-bold text-white backdrop-blur">
                <Sparkles size={13} className="text-pink-200" /> Co-Friend Partner &amp; Freelancer Onboarding
              </span>
              <button
                type="button"
                onClick={() => setLookupMode(!lookupMode)}
                className="text-[0.7rem] font-bold text-white/90 underline hover:text-white mr-8 cursor-pointer"
              >
                {lookupMode ? "New Application" : "Check Status"}
              </button>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold text-white mt-1.5">
              {lookupMode
                ? "Track Application Status"
                : step === 3
                ? "Application Under Verification"
                : "Join as a Verified Companion"}
            </h2>
            <p className="text-xs sm:text-sm text-white/80 mt-0.5">
              {lookupMode
                ? "Check the real-time manual review status of your KYC application"
                : step === 1
                ? "Step 1 of 2: Personal details & hourly rate preference"
                : step === 2
                ? "Step 2 of 2: Selfie & Aadhaar Card (Front + Back) verification"
                : "Your profile has been queued for Trust & Safety verification"}
            </p>
          </div>

          {/* Status Lookup View */}
          {lookupMode ? (
            <div className="overflow-y-auto p-6 space-y-5">
              <div className="rounded-2xl border border-purple-100 bg-purple-50/50 p-4">
                <label className="block">
                  <span className="font-accent text-[0.7rem] font-bold uppercase tracking-wider text-slate-600">
                    Application ID or Registered Phone
                  </span>
                  <div className="mt-2 flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. CF-KYC-782190 or 9820154321"
                      value={lookupQuery}
                      onChange={(e) => setLookupQuery(e.target.value)}
                      className="flex-1 h-11 rounded-xl border border-purple-200 bg-white px-3.5 text-sm font-semibold text-slate-800 outline-none focus:border-purple-500"
                    />
                    <button
                      onClick={handleLookup}
                      className="btn-brand font-accent px-5 rounded-xl text-xs font-bold text-white cursor-pointer"
                    >
                      Track
                    </button>
                  </div>
                </label>
              </div>

              {lookupResult && (
                <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-400">Application Reference</p>
                      <p className="font-mono text-base font-bold text-purple-700">{lookupResult.id}</p>
                    </div>
                    <div>
                      {lookupResult.status === "pending" && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 ring-1 ring-amber-200">
                          <Clock size={13} className="animate-spin" /> Under Verification
                        </span>
                      )}
                      {lookupResult.status === "approved" && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
                          <CheckCircle2 size={13} /> Approved &amp; Active
                        </span>
                      )}
                      {lookupResult.status === "rejected" && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700 ring-1 ring-rose-200">
                          <AlertCircle size={13} /> Disapproved / Incomplete
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs border-t border-purple-50 pt-3">
                    <div>
                      <span className="text-slate-400 block font-semibold">Applicant Name</span>
                      <span className="font-bold text-slate-800">{lookupResult.name}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">City</span>
                      <span className="font-bold text-slate-800">{lookupResult.city}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">Services</span>
                      <span className="font-bold text-slate-800">{lookupResult.services.join(", ")}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">Hourly Rate</span>
                      <span className="font-bold text-slate-800">₹{lookupResult.approvedRate || lookupResult.requestedRate}/hr</span>
                    </div>
                  </div>

                  {lookupResult.adminNotes && (
                    <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-600 border border-slate-200/60">
                      <span className="font-bold text-slate-800">Admin Review Note: </span>
                      {lookupResult.adminNotes}
                    </div>
                  )}

                  {lookupResult.status === "approved" && (
                    <div className="rounded-xl bg-emerald-50 p-3 text-xs text-emerald-800 border border-emerald-200/60 flex items-center gap-2">
                      <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
                      <span>Congratulations! Your profile is verified and active in the Co-Friend companion directory.</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : step === 1 ? (
            /* STEP 1: Personal & Services Form */
            <div className="overflow-y-auto p-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="font-accent text-[0.68rem] font-bold uppercase tracking-wider text-slate-600">
                    Full Legal Name *
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Aarav Sharma"
                    className="mt-1.5 h-11 w-full rounded-xl border border-purple-200 bg-white px-3.5 text-sm font-semibold text-slate-800 outline-none focus:border-purple-500"
                  />
                </label>

                <label className="block">
                  <span className="font-accent text-[0.68rem] font-bold uppercase tracking-wider text-slate-600">
                    Phone Number (WhatsApp) *
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98765 43210"
                    className="mt-1.5 h-11 w-full rounded-xl border border-purple-200 bg-white px-3.5 text-sm font-semibold text-slate-800 outline-none focus:border-purple-500"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="font-accent text-[0.68rem] font-bold uppercase tracking-wider text-slate-600">
                    Email Address *
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. aarav@gmail.com"
                    className="mt-1.5 h-11 w-full rounded-xl border border-purple-200 bg-white px-3.5 text-sm font-semibold text-slate-800 outline-none focus:border-purple-500"
                  />
                </label>

                <label className="block">
                  <span className="font-accent text-[0.68rem] font-bold uppercase tracking-wider text-slate-600">
                    Your City *
                  </span>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="mt-1.5 h-11 w-full rounded-xl border border-purple-200 bg-white px-3.5 text-sm font-semibold text-slate-800 outline-none focus:border-purple-500 cursor-pointer"
                  >
                    {CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="font-accent text-[0.68rem] font-bold uppercase tracking-wider text-slate-600">
                    Languages Spoken
                  </span>
                  <input
                    type="text"
                    value={languages}
                    onChange={(e) => setLanguages(e.target.value)}
                    placeholder="e.g. English, Hindi, Bengali"
                    className="mt-1.5 h-11 w-full rounded-xl border border-purple-200 bg-white px-3.5 text-sm font-semibold text-slate-800 outline-none focus:border-purple-500"
                  />
                </label>

                <label className="block">
                  <span className="font-accent text-[0.68rem] font-bold uppercase tracking-wider text-slate-600">
                    Desired Hourly Price (₹/hr) *
                  </span>
                  <div className="relative mt-1.5">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">₹</span>
                    <input
                      type="number"
                      min={250}
                      max={2500}
                      step={50}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="h-11 w-full rounded-xl border border-purple-200 bg-white pl-8 pr-3.5 text-sm font-semibold text-slate-800 outline-none focus:border-purple-500"
                    />
                  </div>
                </label>
              </div>

              <label className="block">
                <span className="font-accent text-[0.68rem] font-bold uppercase tracking-wider text-slate-600">
                  Short Bio / Tagline (Shown on your profile)
                </span>
                <textarea
                  rows={2}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="e.g. Passionate about art galleries, local cafés, and road trips. Good listener and punctual."
                  className="mt-1.5 w-full rounded-xl border border-purple-200 bg-white p-3 text-sm font-semibold text-slate-800 outline-none focus:border-purple-500 resize-none"
                />
              </label>

              <div>
                <span className="font-accent text-[0.68rem] font-bold uppercase tracking-wider text-slate-600">
                  Services you would like to offer *
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleService(s.title)}
                      className={`font-accent rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer ${
                        pickedServices.has(s.title)
                          ? "btn-brand text-white shadow-sm"
                          : "border border-purple-200 bg-white text-slate-600 hover:border-purple-400"
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleStep1Next}
                  className="btn-brand font-accent flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold text-white shadow-lg cursor-pointer"
                >
                  Proceed to KYC Document Upload <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ) : step === 2 ? (
            /* STEP 2: KYC & Document Upload Form */
            <div className="overflow-y-auto p-6 space-y-5">
              <div className="flex items-center justify-between rounded-xl bg-purple-50 px-4 py-2.5 border border-purple-100">
                <p className="text-xs font-bold text-purple-900 flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-emerald-500" /> Mandatory 3-Point KYC Verification
                </p>
                <button
                  type="button"
                  onClick={fillSampleKyc}
                  className="text-[0.68rem] font-bold text-purple-700 underline hover:text-purple-900 cursor-pointer"
                >
                  Use sample docs for demo
                </button>
              </div>

              {/* 1. Live Selfie / Profile Photo */}
              <div className="rounded-2xl border border-purple-100 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Camera size={16} className="text-purple-600" /> 1. Live Selfie / Profile Photo *
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Clear frontal portrait with good lighting. This will be your verified public profile image.
                    </p>
                  </div>
                  <input
                    ref={selfieInputRef}
                    type="file"
                    accept="image/*"
                    capture="user"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileUpload(file, setSelfieUrl, "Live Selfie");
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => selfieInputRef.current?.click()}
                    className="font-accent inline-flex items-center gap-1.5 rounded-xl border border-purple-300 bg-purple-50 px-3.5 py-2 text-xs font-bold text-purple-700 hover:bg-purple-100 cursor-pointer"
                  >
                    <Upload size={13} /> {selfieUrl ? "Change Photo" : "Upload Selfie"}
                  </button>
                </div>

                {selfieUrl && (
                  <div className="mt-3 flex items-center gap-3">
                    <img
                      src={selfieUrl}
                      alt="Selfie preview"
                      className="h-20 w-20 rounded-2xl object-cover border-2 border-emerald-400 shadow-md"
                    />
                    <div className="text-xs">
                      <span className="inline-flex items-center gap-1 font-bold text-emerald-600">
                        <CheckCircle2 size={13} /> Selfie attached
                      </span>
                      <p className="text-slate-400 text-[0.68rem] mt-0.5">Ready for facial match verification</p>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Aadhaar Card Front Page */}
              <div className="rounded-2xl border border-purple-100 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <FileCheck size={16} className="text-purple-600" /> 2. Aadhaar Card (Front Page) *
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Front side showing full name, clear photograph &amp; Aadhaar number.
                    </p>
                  </div>
                  <input
                    ref={aadhaarFrontInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileUpload(file, setAadhaarFrontUrl, "Aadhaar Front");
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => aadhaarFrontInputRef.current?.click()}
                    className="font-accent inline-flex items-center gap-1.5 rounded-xl border border-purple-300 bg-purple-50 px-3.5 py-2 text-xs font-bold text-purple-700 hover:bg-purple-100 cursor-pointer"
                  >
                    <Upload size={13} /> {aadhaarFrontUrl ? "Change Front" : "Upload Front"}
                  </button>
                </div>

                {aadhaarFrontUrl && (
                  <div className="mt-3 flex items-center gap-3">
                    <img
                      src={aadhaarFrontUrl}
                      alt="Aadhaar front preview"
                      className="h-16 w-28 rounded-xl object-cover border-2 border-emerald-400 shadow-md"
                    />
                    <div className="text-xs">
                      <span className="inline-flex items-center gap-1 font-bold text-emerald-600">
                        <CheckCircle2 size={13} /> Aadhaar Front attached
                      </span>
                      <p className="text-slate-400 text-[0.68rem] mt-0.5">Government ID verified</p>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Aadhaar Card Back Page */}
              <div className="rounded-2xl border border-purple-100 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <FileCheck size={16} className="text-purple-600" /> 3. Aadhaar Card (Back Page) *
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Back side showing permanent residential address and official QR barcode.
                    </p>
                  </div>
                  <input
                    ref={aadhaarBackInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileUpload(file, setAadhaarBackUrl, "Aadhaar Back");
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => aadhaarBackInputRef.current?.click()}
                    className="font-accent inline-flex items-center gap-1.5 rounded-xl border border-purple-300 bg-purple-50 px-3.5 py-2 text-xs font-bold text-purple-700 hover:bg-purple-100 cursor-pointer"
                  >
                    <Upload size={13} /> {aadhaarBackUrl ? "Change Back" : "Upload Back"}
                  </button>
                </div>

                {aadhaarBackUrl && (
                  <div className="mt-3 flex items-center gap-3">
                    <img
                      src={aadhaarBackUrl}
                      alt="Aadhaar back preview"
                      className="h-16 w-28 rounded-xl object-cover border-2 border-emerald-400 shadow-md"
                    />
                    <div className="text-xs">
                      <span className="inline-flex items-center gap-1 font-bold text-emerald-600">
                        <CheckCircle2 size={13} /> Aadhaar Back attached
                      </span>
                      <p className="text-slate-400 text-[0.68rem] mt-0.5">Address proof verified</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Declaration & Consent */}
              <label className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-3 text-xs text-slate-600 border border-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded text-purple-600 cursor-pointer"
                />
                <span>
                  I solemnly declare that the Aadhaar and selfie uploaded belong to me and understand that manual verification will be conducted by the Co-Friend safety team prior to account activation.
                </span>
              </label>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="font-accent inline-flex items-center justify-center gap-1.5 rounded-full border border-purple-200 bg-white px-6 py-3.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  <ArrowLeft size={14} /> Back
                </button>
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="btn-brand font-accent flex-1 flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold text-white shadow-lg cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Clock size={16} className="animate-spin" /> Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit for Verification <Lock size={15} />
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            /* STEP 3: "Application Under Verification" Screen */
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-center">
              <div className="relative mx-auto w-20 h-20">
                <span className="absolute inset-0 rounded-full bg-amber-400/20 animate-ping" />
                <div className="relative grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500 text-white shadow-xl">
                  <Clock size={36} />
                </div>
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-1 text-xs font-bold text-amber-800 ring-1 ring-amber-300">
                  <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" /> Application Under Verification
                </span>
                <h3 className="font-display mt-3 text-2xl font-extrabold text-slate-900">
                  Your Application is Under Manual Verification!
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-slate-900">{submittedApp?.name || name}</span>. Your selfie, Aadhaar card front &amp; back, and companion credentials have been securely stored and sent to the admin verification queue.
                </p>
              </div>

              {/* Reference Box */}
              <div className="rounded-2xl border border-purple-100 bg-purple-50/70 p-4 max-w-md mx-auto text-left shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Application Tracking ID
                  </span>
                  <button
                    onClick={() => copyId(submittedApp?.id || "CF-KYC-PENDING")}
                    className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900 cursor-pointer"
                  >
                    <Copy size={13} /> Copy
                  </button>
                </div>
                <p className="font-mono text-lg font-extrabold text-purple-900 mt-1">
                  {submittedApp?.id || "CF-KYC-PENDING"}
                </p>

                {/* Timeline status steps */}
                <div className="mt-4 space-y-2.5 border-t border-purple-200/60 pt-3 text-xs">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>1. Application &amp; KYC Uploaded</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-700 font-bold">
                    <Clock size={14} className="text-amber-500 animate-spin shrink-0" />
                    <span>2. Aadhaar &amp; Selfie Facial Match (In Queue)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 font-medium">
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-slate-300 grid place-items-center text-[0.55rem] shrink-0">3</span>
                    <span>3. Admin Manual Approval &amp; Rate Activation</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className="btn-brand font-accent rounded-full px-8 py-3 text-sm font-bold text-white shadow-md cursor-pointer w-full sm:w-auto"
                >
                  Got It, Done
                </button>
                <a
                  href="/admin"
                  target="_blank"
                  rel="noreferrer"
                  className="font-accent inline-flex items-center justify-center gap-1.5 rounded-full border border-purple-200 bg-white px-6 py-3 text-xs font-bold text-purple-700 hover:bg-purple-50 cursor-pointer w-full sm:w-auto"
                >
                  Open Admin Panel <ExternalLink size={13} />
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
