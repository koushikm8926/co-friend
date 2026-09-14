"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  Edit3,
  Search,
  Filter,
  Save,
  ArrowLeft,
  Lock,
  Unlock,
  Sparkles,
  Users,
  FileCheck,
  IndianRupee,
  MapPin,
  Star,
  Trash2,
  Plus,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  X,
  Layers,
  Database,
  Sliders,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import {
  useCompanionStore,
  type PartnerApplication,
  type CoFriendItem,
} from "@/lib/companionStore";
import { CITIES, SERVICES } from "@/data/content";

export default function AdminPage() {
  const {
    applications,
    companions,
    isLoaded,
    approveApplication,
    rejectApplication,
    updatePrice,
    updateDetails,
    removeCompanion,
    resetStore,
    refresh,
  } = useCompanionStore();

  // Admin Auth Gate (Simple PIN with 1-click demo unlock)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");

  // Navigation Tabs
  const [activeTab, setActiveTab] = useState<"kyc" | "pricing" | "addCompanion">("kyc");

  // KYC Tab Filters & Search
  const [kycStatusFilter, setKycStatusFilter] = useState<"all" | "pending" | "approved" | "rejected">("all");
  const [kycSearch, setKycSearch] = useState("");

  // KYC Inspector Modal State
  const [selectedApp, setSelectedApp] = useState<PartnerApplication | null>(null);
  const [customApprovePrice, setCustomApprovePrice] = useState<number>(450);
  const [rejectReason, setRejectReason] = useState("");
  const [isRejecting, setIsRejecting] = useState(false);

  // Pricing Tab Search & Editing
  const [pricingSearch, setPricingSearch] = useState("");
  const [editingPrices, setEditingPrices] = useState<Record<string, number>>({});

  // Add Companion Form State
  const [newCompName, setNewCompName] = useState("");
  const [newCompCity, setNewCompCity] = useState(CITIES[0]);
  const [newCompPrice, setNewCompPrice] = useState("450");
  const [newCompTagline, setNewCompTagline] = useState("");
  const [newCompImage, setNewCompImage] = useState("https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80");
  const [newCompServices, setNewCompServices] = useState<string[]>(["Coffee & Conversations"]);

  // Calculate Metrics
  const metrics = useMemo(() => {
    const totalApps = applications.length;
    const pendingApps = applications.filter((a) => a.status === "pending").length;
    const approvedApps = applications.filter((a) => a.status === "approved").length;
    const totalCompanions = companions.length;
    const avgPrice = Math.round(
      companions.reduce((acc, c) => acc + c.price, 0) / (companions.length || 1)
    );
    return { totalApps, pendingApps, approvedApps, totalCompanions, avgPrice };
  }, [applications, companions]);

  // Filtered Applications
  const filteredApps = useMemo(() => {
    return applications.filter((app) => {
      const matchStatus =
        kycStatusFilter === "all" ? true : app.status === kycStatusFilter;
      const q = kycSearch.toLowerCase();
      const matchSearch =
        !q ||
        app.name.toLowerCase().includes(q) ||
        app.id.toLowerCase().includes(q) ||
        app.city.toLowerCase().includes(q) ||
        app.phone.includes(q);
      return matchStatus && matchSearch;
    });
  }, [applications, kycStatusFilter, kycSearch]);

  // Filtered Companions for Pricing Tab
  const filteredCompanions = useMemo(() => {
    return companions.filter((c) => {
      const q = pricingSearch.toLowerCase();
      return (
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.services.some((s) => s.toLowerCase().includes(q))
      );
    });
  }, [companions, pricingSearch]);

  const handleUnlock = () => {
    if (pinInput === "cofriend2026" || pinInput === "admin" || pinInput === "") {
      setIsAuthenticated(true);
      toast.success("Admin access granted");
    } else {
      toast.error("Invalid Admin PIN");
    }
  };

  const handleOpenInspector = (app: PartnerApplication) => {
    setSelectedApp(app);
    setCustomApprovePrice(app.approvedRate || app.requestedRate || 450);
    setRejectReason("");
    setIsRejecting(false);
  };

  const handleApprove = async () => {
    if (!selectedApp) return;
    try {
      await approveApplication(selectedApp.id, Number(customApprovePrice));
      toast.success(`Application for ${selectedApp.name} APPROVED! Companion is now live.`);
      setSelectedApp(null);
    } catch (err) {
      toast.error("Failed to approve application");
    }
  };

  const handleReject = async () => {
    if (!selectedApp) return;
    if (!rejectReason.trim()) {
      toast.error("Please enter a reason for disapproval");
      return;
    }
    try {
      await rejectApplication(selectedApp.id, rejectReason.trim());
      toast.success(`Application for ${selectedApp.name} DISAPPROVED.`);
      setSelectedApp(null);
      setIsRejecting(false);
    } catch (err) {
      toast.error("Failed to reject application");
    }
  };

  const handlePriceSave = async (companionId: string) => {
    const newPrice = editingPrices[companionId];
    if (newPrice === undefined || isNaN(newPrice) || newPrice <= 0) {
      toast.error("Please enter a valid price");
      return;
    }
    try {
      await updatePrice(companionId, Number(newPrice));
      toast.success("Price updated successfully!");
      setEditingPrices((prev) => {
        const next = { ...prev };
        delete next[companionId];
        return next;
      });
    } catch (err) {
      toast.error("Failed to update price");
    }
  };

  const handleCreateCompanion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompName.trim()) {
      toast.error("Companion name is required");
      return;
    }
    const newCompanion: CoFriendItem = {
      id: `manual-${Date.now()}`,
      name: newCompName.trim(),
      city: newCompCity,
      verified: true,
      rating: 5.0,
      reviews: 0,
      availability: "Available Today",
      services: newCompServices,
      price: Number(newCompPrice) || 450,
      tagline: newCompTagline.trim() || `Verified companion in ${newCompCity}`,
      image: newCompImage,
    };
    await updateDetails(newCompanion.id, newCompanion);
    toast.success(`${newCompanion.name} registered as Co-Friend!`);
    setNewCompName("");
    setNewCompTagline("");
    setActiveTab("pricing");
  };

  // Auth Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
        <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-purple-900/50 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
          <div className="text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white shadow-lg">
              <Lock size={28} />
            </div>
            <h1 className="font-display mt-5 text-2xl font-extrabold tracking-tight">
              Co-Friend Admin Portal
            </h1>
            <p className="mt-1 text-xs text-slate-400">
              KYC Document Verification, Price Setup &amp; Freelancer Management
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300">
                Admin PIN / Key
              </label>
              <input
                type="password"
                placeholder="Enter PIN (e.g. cofriend2026)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
                className="mt-1.5 h-12 w-full rounded-xl border border-purple-800/60 bg-slate-800/80 px-4 text-sm font-semibold text-white outline-none focus:border-purple-500"
              />
            </div>

            <button
              onClick={handleUnlock}
              className="btn-brand font-accent flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold text-white shadow-lg cursor-pointer"
            >
              <Unlock size={16} /> Authenticate &amp; Access Admin
            </button>

            <div className="rounded-xl border border-purple-500/20 bg-purple-950/40 p-3 text-center text-xs text-purple-300">
              <p className="font-semibold">Demo Access Enabled</p>
              <p className="text-[0.7rem] text-slate-400 mt-0.5">
                Leave blank or enter <span className="font-mono text-purple-200">cofriend2026</span> to unlock immediately.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
            >
              <ArrowLeft size={13} /> Return to Public Website
            </Link>
          </div>
        </div>
        <Toaster position="top-center" richColors />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-tr from-purple-600 via-violet-600 to-pink-500 text-white shadow-md">
                <Sparkles size={18} />
              </div>
              <div>
                <span className="font-display text-lg font-extrabold text-white tracking-tight">
                  Co-Friend <span className="text-pink-400">Admin</span>
                </span>
                <span className="hidden sm:inline-block ml-2 rounded-md bg-purple-950/70 border border-purple-800/40 px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-purple-300">
                  v2.4 Live
                </span>
              </div>
            </Link>
          </div>

          {/* Quick status & return to live app */}
          <div className="flex items-center gap-3">
            <button
              onClick={refresh}
              title="Refresh database"
              className="grid h-9 w-9 place-items-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 hover:text-white hover:border-slate-700 transition cursor-pointer"
            >
              <RefreshCw size={15} />
            </button>
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-xl border border-purple-600/40 bg-purple-950/40 px-3.5 py-1.5 text-xs font-bold text-purple-300 hover:bg-purple-900/40 transition"
            >
              <span>View Public Site</span>
              <ExternalLink size={13} />
            </Link>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-bold text-slate-400 hover:text-white cursor-pointer"
            >
              Lock
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 space-y-6">
        {/* Metric Cards Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs font-bold">
              <span>Pending KYC Queue</span>
              <Clock size={16} className="text-amber-400" />
            </div>
            <p className="mt-2 font-display text-2xl font-extrabold text-amber-400">
              {metrics.pendingApps}
            </p>
            <p className="mt-0.5 text-[0.68rem] text-slate-500">Awaiting manual approval</p>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs font-bold">
              <span>Total KYC Applications</span>
              <FileCheck size={16} className="text-purple-400" />
            </div>
            <p className="mt-2 font-display text-2xl font-extrabold text-purple-300">
              {metrics.totalApps}
            </p>
            <p className="mt-0.5 text-[0.68rem] text-slate-500">{metrics.approvedApps} approved so far</p>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs font-bold">
              <span>Active Co-Friends</span>
              <Users size={16} className="text-emerald-400" />
            </div>
            <p className="mt-2 font-display text-2xl font-extrabold text-emerald-400">
              {metrics.totalCompanions}
            </p>
            <p className="mt-0.5 text-[0.68rem] text-slate-500">Live in search directory</p>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs font-bold">
              <span>Avg Platform Rate</span>
              <IndianRupee size={16} className="text-pink-400" />
            </div>
            <p className="mt-2 font-display text-2xl font-extrabold text-pink-400">
              ₹{metrics.avgPrice}<span className="text-sm font-medium text-slate-400">/hr</span>
            </p>
            <p className="mt-0.5 text-[0.68rem] text-slate-500">Dynamic pricing active</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("kyc")}
              className={`font-accent flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                activeTab === "kyc"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <FileCheck size={15} />
              <span>KYC Verification Queue</span>
              {metrics.pendingApps > 0 && (
                <span className="rounded-full bg-amber-400 px-1.5 py-0.2 text-[0.62rem] font-extrabold text-slate-950">
                  {metrics.pendingApps}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("pricing")}
              className={`font-accent flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                activeTab === "pricing"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Sliders size={15} />
              <span>Price &amp; Companion Manager</span>
            </button>

            <button
              onClick={() => setActiveTab("addCompanion")}
              className={`font-accent flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                activeTab === "addCompanion"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Plus size={15} />
              <span>Add Companion</span>
            </button>
          </div>

          <button
            onClick={() => {
              if (confirm("Reset demo data to initial defaults?")) {
                resetStore();
                toast.success("Store reset to defaults");
              }
            }}
            className="text-[0.68rem] text-slate-500 hover:text-slate-300 underline cursor-pointer"
          >
            Reset Demo Data
          </button>
        </div>

        {/* TAB 1: KYC VERIFICATION QUEUE */}
        {activeTab === "kyc" && (
          <div className="space-y-4">
            {/* Search and filter toolbar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="relative w-full sm:w-80">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name, phone, city or ID..."
                  value={kycSearch}
                  onChange={(e) => setKycSearch(e.target.value)}
                  className="h-10 w-full rounded-xl border border-slate-700 bg-slate-950 pl-9 pr-3 text-xs font-medium text-white outline-none focus:border-purple-500"
                />
              </div>

              {/* Status pills */}
              <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
                {(["all", "pending", "approved", "rejected"] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => setKycStatusFilter(status)}
                    className={`rounded-xl px-3 py-1.5 text-xs font-bold capitalize transition cursor-pointer ${
                      kycStatusFilter === status
                        ? "bg-purple-600 text-white"
                        : "bg-slate-800/80 text-slate-400 hover:text-white"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Applications list */}
            {filteredApps.length === 0 ? (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-12 text-center text-slate-500">
                <FileCheck size={36} className="mx-auto text-slate-600" />
                <h3 className="mt-3 text-base font-bold text-slate-300">No applications found</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Try adjusting your search query or status filter.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {filteredApps.map((app) => (
                  <div
                    key={app.id}
                    className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg flex flex-col justify-between hover:border-purple-800/60 transition"
                  >
                    <div>
                      {/* Top Header with Status */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={app.selfieUrl}
                            alt={app.name}
                            className="h-14 w-14 rounded-2xl object-cover border-2 border-purple-500/40 shadow"
                          />
                          <div>
                            <h3 className="font-display text-base font-extrabold text-white flex items-center gap-1.5">
                              {app.name}
                              {app.status === "approved" && (
                                <ShieldCheck size={16} className="text-emerald-400" />
                              )}
                            </h3>
                            <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                              <MapPin size={12} className="text-pink-400" /> {app.city} · {app.phone}
                            </p>
                            <p className="font-mono text-[0.65rem] text-purple-400 mt-0.5">
                              ID: {app.id}
                            </p>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div>
                          {app.status === "pending" && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-950/60 border border-amber-500/40 px-3 py-1 text-[0.68rem] font-bold text-amber-300">
                              <Clock size={12} className="animate-spin" /> Pending Review
                            </span>
                          )}
                          {app.status === "approved" && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 px-3 py-1 text-[0.68rem] font-bold text-emerald-300">
                              <CheckCircle2 size={12} /> Approved
                            </span>
                          )}
                          {app.status === "rejected" && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-950/60 border border-rose-500/40 px-3 py-1 text-[0.68rem] font-bold text-rose-300">
                              <XCircle size={12} /> Disapproved
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bio & Services */}
                      <p className="mt-3 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {app.bio}
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {app.services.map((s) => (
                          <span
                            key={s}
                            className="rounded-lg bg-slate-800 px-2 py-0.5 text-[0.65rem] font-semibold text-purple-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* KYC Document Thumbnails */}
                      <div className="mt-3.5 rounded-xl bg-slate-950/60 p-3 border border-slate-800/80">
                        <span className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                          Attached KYC Credentials
                        </span>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="text-center">
                            <img
                              src={app.selfieUrl}
                              alt="Selfie"
                              className="h-16 w-full rounded-lg object-cover border border-slate-700 cursor-pointer hover:opacity-90"
                              onClick={() => handleOpenInspector(app)}
                            />
                            <span className="text-[0.6rem] text-slate-400 mt-1 block">Live Selfie</span>
                          </div>
                          <div className="text-center">
                            <img
                              src={app.aadhaarFrontUrl}
                              alt="Aadhaar Front"
                              className="h-16 w-full rounded-lg object-cover border border-slate-700 cursor-pointer hover:opacity-90"
                              onClick={() => handleOpenInspector(app)}
                            />
                            <span className="text-[0.6rem] text-slate-400 mt-1 block">Aadhaar Front</span>
                          </div>
                          <div className="text-center">
                            <img
                              src={app.aadhaarBackUrl}
                              alt="Aadhaar Back"
                              className="h-16 w-full rounded-lg object-cover border border-slate-700 cursor-pointer hover:opacity-90"
                              onClick={() => handleOpenInspector(app)}
                            />
                            <span className="text-[0.6rem] text-slate-400 mt-1 block">Aadhaar Back</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                      <div className="text-xs">
                        <span className="text-slate-400">Requested Rate: </span>
                        <span className="font-bold text-white">₹{app.approvedRate || app.requestedRate}/hr</span>
                      </div>

                      <button
                        onClick={() => handleOpenInspector(app)}
                        className="btn-brand font-accent inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold text-white shadow cursor-pointer"
                      >
                        <Eye size={14} /> Review &amp; Verify
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: PRICING & COMPANION MANAGER */}
        {activeTab === "pricing" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="relative w-full sm:w-80">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search companion by name, city or service..."
                  value={pricingSearch}
                  onChange={(e) => setPricingSearch(e.target.value)}
                  className="h-10 w-full rounded-xl border border-slate-700 bg-slate-950 pl-9 pr-3 text-xs font-medium text-white outline-none focus:border-purple-500"
                />
              </div>

              <div className="text-xs text-slate-400">
                Total Listed Co-Friends: <span className="font-bold text-white">{filteredCompanions.length}</span>
              </div>
            </div>

            {/* Companion Price Table */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-slate-800 bg-slate-950/80 text-[0.68rem] uppercase tracking-wider text-slate-400">
                    <tr>
                      <th className="py-3.5 px-4">Co-Friend / Person</th>
                      <th className="py-3.5 px-4">City</th>
                      <th className="py-3.5 px-4">Services</th>
                      <th className="py-3.5 px-4">Rating</th>
                      <th className="py-3.5 px-4">Availability</th>
                      <th className="py-3.5 px-4">Hourly Price (₹/hr)</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredCompanions.map((comp) => {
                      const currentVal =
                        editingPrices[comp.id] !== undefined
                          ? editingPrices[comp.id]
                          : comp.price;
                      const hasChanged =
                        editingPrices[comp.id] !== undefined &&
                        editingPrices[comp.id] !== comp.price;

                      return (
                        <tr key={comp.id} className="hover:bg-slate-800/40 transition">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={comp.image}
                                alt={comp.name}
                                className="h-10 w-10 rounded-xl object-cover border border-purple-500/40"
                              />
                              <div>
                                <p className="font-bold text-white flex items-center gap-1">
                                  {comp.name}
                                  {comp.verified && (
                                    <ShieldCheck size={13} className="text-emerald-400" />
                                  )}
                                </p>
                                <p className="text-[0.68rem] text-slate-400 truncate max-w-[180px]">
                                  {comp.tagline}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="py-3 px-4 font-semibold text-slate-300">
                            {comp.city}
                          </td>

                          <td className="py-3 px-4">
                            <div className="flex flex-wrap gap-1 max-w-[200px]">
                              {comp.services.slice(0, 2).map((s) => (
                                <span
                                  key={s}
                                  className="rounded bg-slate-800 px-1.5 py-0.5 text-[0.62rem] font-medium text-purple-300"
                                >
                                  {s}
                                </span>
                              ))}
                              {comp.services.length > 2 && (
                                <span className="text-[0.62rem] text-slate-500">
                                  +{comp.services.length - 2} more
                                </span>
                              )}
                            </div>
                          </td>

                          <td className="py-3 px-4">
                            <span className="inline-flex items-center gap-1 font-bold text-amber-300">
                              <Star size={12} className="fill-amber-400 text-amber-400" />
                              {comp.rating.toFixed(1)}
                            </span>
                            <span className="text-[0.62rem] text-slate-500 block">
                              ({comp.reviews} reviews)
                            </span>
                          </td>

                          <td className="py-3 px-4">
                            <select
                              value={comp.availability}
                              onChange={(e) =>
                                updateDetails(comp.id, { availability: e.target.value })
                              }
                              className="rounded-lg border border-slate-700 bg-slate-950 px-2 py-1 text-[0.7rem] font-semibold text-slate-300 outline-none focus:border-purple-500 cursor-pointer"
                            >
                              <option value="Available Today">Available Today</option>
                              <option value="Available Tomorrow">Available Tomorrow</option>
                              <option value="Available This Weekend">Available This Weekend</option>
                              <option value="Busy / On Leave">Busy / On Leave</option>
                            </select>
                          </td>

                          {/* Hourly Price Edit Box */}
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1.5">
                              <span className="text-slate-400 font-bold">₹</span>
                              <input
                                type="number"
                                min={100}
                                max={5000}
                                step={10}
                                value={currentVal}
                                onChange={(e) =>
                                  setEditingPrices((prev) => ({
                                    ...prev,
                                    [comp.id]: Number(e.target.value),
                                  }))
                                }
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") handlePriceSave(comp.id);
                                }}
                                className="h-8 w-20 rounded-lg border border-purple-800/60 bg-slate-950 px-2 text-xs font-bold text-emerald-400 outline-none focus:border-purple-400"
                              />
                              <span className="text-slate-500">/hr</span>
                            </div>
                          </td>

                          {/* Save / Remove Actions */}
                          <td className="py-3 px-4 text-right space-x-2">
                            {hasChanged ? (
                              <button
                                onClick={() => handlePriceSave(comp.id)}
                                className="font-accent inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-[0.68rem] font-bold text-white hover:bg-emerald-500 cursor-pointer shadow"
                              >
                                <Save size={12} /> Save Price
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  const promptPrice = prompt(
                                    `Update hourly price for ${comp.name}:`,
                                    comp.price.toString()
                                  );
                                  if (promptPrice && !isNaN(Number(promptPrice))) {
                                    updatePrice(comp.id, Number(promptPrice));
                                    toast.success(`Updated ${comp.name}'s price to ₹${promptPrice}/hr`);
                                  }
                                }}
                                className="font-accent inline-flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1 text-[0.68rem] font-semibold text-slate-300 hover:text-white cursor-pointer"
                              >
                                <Edit3 size={11} /> Edit
                              </button>
                            )}

                            <button
                              onClick={() => {
                                if (confirm(`Remove ${comp.name} from active directory?`)) {
                                  removeCompanion(comp.id);
                                  toast.info(`Removed ${comp.name}`);
                                }
                              }}
                              className="text-slate-500 hover:text-rose-400 p-1 cursor-pointer"
                              title="Delete Companion"
                            >
                              <Trash2 size={14} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ADD COMPANION MANUALLY */}
        {activeTab === "addCompanion" && (
          <div className="max-w-2xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-xl">
            <h2 className="font-display text-xl font-extrabold text-white flex items-center gap-2">
              <Plus size={20} className="text-pink-400" /> Add Co-Friend Companion Directly
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Admin can manually add a verified freelancer and set custom hourly pricing.
            </p>

            <form onSubmit={handleCreateCompanion} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newCompName}
                    onChange={(e) => setNewCompName(e.target.value)}
                    placeholder="e.g. Diya Sengupta"
                    className="mt-1 h-11 w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 text-sm text-white outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300">
                    City *
                  </label>
                  <select
                    value={newCompCity}
                    onChange={(e) => setNewCompCity(e.target.value)}
                    className="mt-1 h-11 w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 text-sm text-white outline-none focus:border-purple-500 cursor-pointer"
                  >
                    {CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300">
                    Hourly Price (₹/hr) *
                  </label>
                  <input
                    type="number"
                    min={200}
                    max={5000}
                    required
                    value={newCompPrice}
                    onChange={(e) => setNewCompPrice(e.target.value)}
                    className="mt-1 h-11 w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 text-sm text-white outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300">
                    Profile Photo URL
                  </label>
                  <input
                    type="url"
                    value={newCompImage}
                    onChange={(e) => setNewCompImage(e.target.value)}
                    className="mt-1 h-11 w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 text-sm text-white outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300">
                  Tagline / Bio
                </label>
                <textarea
                  rows={2}
                  value={newCompTagline}
                  onChange={(e) => setNewCompTagline(e.target.value)}
                  placeholder="e.g. Architect by day, cinema lover & South Kolkata street food guide."
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-white outline-none focus:border-purple-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Select Services Offered
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => {
                    const isSelected = newCompServices.includes(s.title);
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          if (isSelected) {
                            if (newCompServices.length > 1) {
                              setNewCompServices(newCompServices.filter((x) => x !== s.title));
                            }
                          } else {
                            setNewCompServices([...newCompServices, s.title]);
                          }
                        }}
                        className={`rounded-full px-3 py-1 text-xs font-semibold transition cursor-pointer ${
                          isSelected
                            ? "bg-purple-600 text-white"
                            : "bg-slate-800 text-slate-400 hover:text-white"
                        }`}
                      >
                        {s.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="btn-brand font-accent flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white shadow-lg cursor-pointer"
                >
                  <Plus size={16} /> Save &amp; Publish Companion
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      {/* KYC INSPECTOR / VERIFICATION MODAL */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <div
            onClick={() => setSelectedApp(null)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />
          <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border border-purple-900/60 bg-[#0E1322] text-white shadow-2xl z-10 overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-purple-800 via-violet-700 to-pink-600 px-6 py-4 flex items-center justify-between shrink-0">
              <div>
                <span className="text-[0.68rem] font-mono font-bold uppercase tracking-wider text-pink-200">
                  {selectedApp.id} · Verification Queue
                </span>
                <h2 className="font-display text-xl font-extrabold text-white">
                  Review KYC: {selectedApp.name}
                </h2>
              </div>
              <button
                onClick={() => setSelectedApp(null)}
                className="grid h-8 w-8 place-items-center rounded-full bg-white/20 hover:bg-white/30 text-white transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Applicant Profile Summary */}
              <div className="grid sm:grid-cols-3 gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Applicant Name</span>
                  <span className="text-base font-bold text-white">{selectedApp.name}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Contact Phone</span>
                  <span className="text-base font-bold text-purple-300">{selectedApp.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">City</span>
                  <span className="text-base font-bold text-white">{selectedApp.city}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Email</span>
                  <span className="font-bold text-slate-200">{selectedApp.email}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Languages</span>
                  <span className="font-bold text-slate-200">{selectedApp.languages || "English, Hindi"}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Requested Rate</span>
                  <span className="font-bold text-emerald-400">₹{selectedApp.requestedRate}/hr</span>
                </div>
              </div>

              {/* Bio & Services */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
                <span className="text-xs font-bold text-slate-400 block mb-1">Companion Bio / Statement:</span>
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;{selectedApp.bio}&rdquo;
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {selectedApp.services.map((s) => (
                    <span key={s} className="rounded-lg bg-purple-950 border border-purple-800/60 px-2.5 py-1 text-xs font-bold text-purple-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* SIDE-BY-SIDE KYC DOCUMENT INSPECTOR */}
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                  <ShieldCheck size={18} className="text-emerald-400" />
                  Facial Match &amp; Aadhaar Card Verification
                </h3>

                <div className="grid md:grid-cols-3 gap-4">
                  {/* 1. Live Selfie */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3 text-center">
                    <span className="text-xs font-bold text-purple-300 block mb-2">
                      1. Live Selfie Portrait
                    </span>
                    <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-purple-500/50 group">
                      <img
                        src={selectedApp.selfieUrl}
                        alt="Live Selfie"
                        className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <span className="text-[0.68rem] text-slate-400 mt-2 block">
                      Matches public profile photo
                    </span>
                  </div>

                  {/* 2. Aadhaar Card Front */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3 text-center">
                    <span className="text-xs font-bold text-purple-300 block mb-2">
                      2. Aadhaar Front Page
                    </span>
                    <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-purple-500/50 group">
                      <img
                        src={selectedApp.aadhaarFrontUrl}
                        alt="Aadhaar Front"
                        className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <span className="text-[0.68rem] text-slate-400 mt-2 block">
                      Verify Name &amp; Photo match
                    </span>
                  </div>

                  {/* 3. Aadhaar Card Back */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3 text-center">
                    <span className="text-xs font-bold text-purple-300 block mb-2">
                      3. Aadhaar Back Page
                    </span>
                    <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-purple-500/50 group">
                      <img
                        src={selectedApp.aadhaarBackUrl}
                        alt="Aadhaar Back"
                        className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                    <span className="text-[0.68rem] text-slate-400 mt-2 block">
                      Verify Address &amp; QR Code
                    </span>
                  </div>
                </div>
              </div>

              {/* Rejection reason box if rejecting */}
              {isRejecting && (
                <div className="rounded-2xl border border-rose-900/60 bg-rose-950/40 p-4 space-y-3">
                  <span className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                    <AlertTriangle size={15} /> Reason for Disapproval / Rejection:
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. Aadhaar image is blurry / Selfie does not match Aadhaar portrait"
                    value={rejectReason}
                    onChange={(e) => setRejectReason(e.target.value)}
                    className="h-11 w-full rounded-xl border border-rose-800 bg-slate-950 px-3.5 text-xs text-white outline-none focus:border-rose-500"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setIsRejecting(false)}
                      className="rounded-xl px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleReject}
                      className="rounded-xl bg-rose-600 px-5 py-2 text-xs font-bold text-white hover:bg-rose-500 cursor-pointer shadow"
                    >
                      Confirm Disapproval
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Action Footer */}
            <div className="border-t border-slate-800 bg-slate-950 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
              {/* Official Pricing Setup */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="text-xs font-bold text-slate-300">Set Official Price:</span>
                <div className="flex items-center gap-1 rounded-xl border border-slate-700 bg-slate-900 px-3 py-1.5">
                  <span className="text-sm font-bold text-emerald-400">₹</span>
                  <input
                    type="number"
                    min={200}
                    max={5000}
                    step={10}
                    value={customApprovePrice}
                    onChange={(e) => setCustomApprovePrice(Number(e.target.value))}
                    className="w-20 bg-transparent text-sm font-bold text-white outline-none"
                  />
                  <span className="text-xs text-slate-400">/hr</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                {!isRejecting && (
                  <button
                    onClick={() => setIsRejecting(true)}
                    className="font-accent rounded-xl border border-rose-800/60 bg-rose-950/40 px-4 py-2.5 text-xs font-bold text-rose-300 hover:bg-rose-900/40 cursor-pointer"
                  >
                    Disapprove
                  </button>
                )}
                <button
                  onClick={handleApprove}
                  className="btn-brand font-accent flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2.5 text-xs font-bold text-white shadow-lg cursor-pointer"
                >
                  <CheckCircle2 size={16} /> Approve &amp; Register Co-Friend
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Toaster position="top-center" richColors />
    </div>
  );
}
