"use client";

import { useState, useEffect, useCallback } from "react";
import { COFRIENDS as DEFAULT_COFRIENDS, type CoFriendItem } from "@/data/content";
export type { CoFriendItem };
import { db, isFirebaseConfigured } from "./firebase";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

export interface PartnerApplication {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  bio: string;
  languages?: string;
  services: string[];
  requestedRate: number;
  selfieUrl: string;
  aadhaarFrontUrl: string;
  aadhaarBackUrl: string;
  status: "pending" | "approved" | "rejected";
  adminNotes?: string;
  approvedRate?: number;
  reviewedAt?: string;
}

const APPLICATIONS_STORAGE_KEY = "co_friend_applications_v1";
const COMPANIONS_STORAGE_KEY = "co_friend_companions_v1";
const STORE_EVENT = "co_friend_store_update";

// Initial mock applications for verification demo
const INITIAL_DEMO_APPLICATIONS: PartnerApplication[] = [
  {
    id: "CF-KYC-782190",
    createdAt: new Date(Date.now() - 3600 * 1000 * 4).toISOString(),
    name: "Aakash Deshmukh",
    email: "aakash.d@example.com",
    phone: "98201 54321",
    city: "Mumbai",
    bio: "Passionate photographer, café hopper & film enthusiast. Love showing people hidden Marine Drive spots.",
    languages: "English, Hindi, Marathi",
    services: ["Coffee & Conversations", "City Tour Guide", "Movie Companion"],
    requestedRate: 450,
    selfieUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    aadhaarFrontUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    aadhaarBackUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    status: "pending",
  },
  {
    id: "CF-KYC-629401",
    createdAt: new Date(Date.now() - 3600 * 1000 * 24).toISOString(),
    name: "Sunaina Rao",
    email: "sunaina.rao@example.com",
    phone: "98450 12890",
    city: "Bengaluru",
    bio: "Fitness trainer, marathon runner and book club regular in Koramangala. Friendly and attentive.",
    languages: "English, Kannada, Hindi",
    services: ["Fitness Buddy", "Coffee & Conversations", "Elder Assistance"],
    requestedRate: 500,
    selfieUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    aadhaarFrontUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    aadhaarBackUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    status: "pending",
  },
];

// Helper to broadcast local changes
function broadcastUpdate() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(STORE_EVENT));
  }
}

// Read from LocalStorage
export function getStoredApplications(): PartnerApplication[] {
  if (typeof window === "undefined") return INITIAL_DEMO_APPLICATIONS;
  try {
    const raw = localStorage.getItem(APPLICATIONS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(
        APPLICATIONS_STORAGE_KEY,
        JSON.stringify(INITIAL_DEMO_APPLICATIONS)
      );
      return INITIAL_DEMO_APPLICATIONS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_DEMO_APPLICATIONS;
  }
}

export function saveStoredApplications(apps: PartnerApplication[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(APPLICATIONS_STORAGE_KEY, JSON.stringify(apps));
    broadcastUpdate();
  } catch (err) {
    console.error("Failed to save applications to localStorage:", err);
  }
}

export function getStoredCompanions(): CoFriendItem[] {
  if (typeof window === "undefined") return DEFAULT_COFRIENDS;
  try {
    const raw = localStorage.getItem(COMPANIONS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(
        COMPANIONS_STORAGE_KEY,
        JSON.stringify(DEFAULT_COFRIENDS)
      );
      return DEFAULT_COFRIENDS;
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_COFRIENDS;
  }
}

export function saveStoredCompanions(companions: CoFriendItem[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(COMPANIONS_STORAGE_KEY, JSON.stringify(companions));
    broadcastUpdate();
  } catch (err) {
    console.error("Failed to save companions to localStorage:", err);
  }
}

// 1. Submit New Application (User Side)
export async function submitPartnerApplication(
  data: Omit<PartnerApplication, "id" | "createdAt" | "status">
): Promise<PartnerApplication> {
  const newId = `CF-KYC-${Math.floor(100000 + Math.random() * 900000)}`;
  const newApp: PartnerApplication = {
    ...data,
    id: newId,
    createdAt: new Date().toISOString(),
    status: "pending",
  };

  // 1. Save to Firestore if connected
  if (isFirebaseConfigured && db) {
    try {
      const docRef = doc(db, "partner_applications", newId);
      await setDoc(docRef, newApp);
    } catch (err) {
      console.warn("Firestore save failed, fallback to local:", err);
    }
  }

  // 2. Save locally
  const current = getStoredApplications();
  const updated = [newApp, ...current];
  saveStoredApplications(updated);

  return newApp;
}

// 2. Approve Application (Admin Side)
export async function approvePartnerApplication(
  applicationId: string,
  approvedRate?: number,
  adminNotes?: string
): Promise<void> {
  const currentApps = getStoredApplications();
  const targetApp = currentApps.find((a) => a.id === applicationId);
  if (!targetApp) return;

  const finalRate = approvedRate || targetApp.requestedRate || 399;
  const reviewedAt = new Date().toISOString();

  // Update application status
  const updatedApps = currentApps.map((a) =>
    a.id === applicationId
      ? {
          ...a,
          status: "approved" as const,
          approvedRate: finalRate,
          adminNotes: adminNotes || "Approved after Aadhaar & selfie verification.",
          reviewedAt,
        }
      : a
  );
  saveStoredApplications(updatedApps);

  // Add companion to live roster
  const companionId = `comp-${targetApp.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${targetApp.id.slice(-4)}`;
  const currentCompanions = getStoredCompanions();

  const newCompanion: CoFriendItem = {
    id: companionId,
    name: targetApp.name,
    city: targetApp.city,
    verified: true,
    rating: 5.0,
    reviews: 1,
    availability: "Available Today",
    services: targetApp.services.length > 0 ? targetApp.services : ["Coffee & Conversations"],
    price: finalRate,
    tagline: targetApp.bio || `Verified companion in ${targetApp.city}`,
    image: targetApp.selfieUrl,
    phone: targetApp.phone,
    email: targetApp.email,
    applicationId: targetApp.id,
  };

  // If already exists, update; otherwise prepend
  const existsIndex = currentCompanions.findIndex((c) => c.applicationId === targetApp.id || c.name === targetApp.name);
  let updatedCompanions: CoFriendItem[];
  if (existsIndex >= 0) {
    updatedCompanions = [...currentCompanions];
    updatedCompanions[existsIndex] = { ...updatedCompanions[existsIndex], ...newCompanion };
  } else {
    updatedCompanions = [newCompanion, ...currentCompanions];
  }
  saveStoredCompanions(updatedCompanions);

  // Sync to Firestore if available
  if (isFirebaseConfigured && db) {
    try {
      await updateDoc(doc(db, "partner_applications", applicationId), {
        status: "approved",
        approvedRate: finalRate,
        adminNotes: adminNotes || "Approved by Admin",
        reviewedAt,
      });
      await setDoc(doc(db, "companions", companionId), newCompanion);
    } catch (err) {
      console.warn("Firestore sync failed:", err);
    }
  }
}

// 3. Reject / Disapprove Application (Admin Side)
export async function rejectPartnerApplication(
  applicationId: string,
  reason: string = "Identity verification requirements could not be confirmed."
): Promise<void> {
  const currentApps = getStoredApplications();
  const reviewedAt = new Date().toISOString();

  const updatedApps = currentApps.map((a) =>
    a.id === applicationId
      ? {
          ...a,
          status: "rejected" as const,
          adminNotes: reason,
          reviewedAt,
        }
      : a
  );
  saveStoredApplications(updatedApps);

  if (isFirebaseConfigured && db) {
    try {
      await updateDoc(doc(db, "partner_applications", applicationId), {
        status: "rejected",
        adminNotes: reason,
        reviewedAt,
      });
    } catch (err) {
      console.warn("Firestore reject sync failed:", err);
    }
  }
}

// 4. Update Price for Individual Companion (Admin Side)
export async function updateCompanionPrice(
  companionId: string,
  newPrice: number
): Promise<void> {
  const currentCompanions = getStoredCompanions();
  const updated = currentCompanions.map((c) =>
    c.id === companionId ? { ...c, price: Number(newPrice) } : c
  );
  saveStoredCompanions(updated);

  if (isFirebaseConfigured && db) {
    try {
      await updateDoc(doc(db, "companions", companionId), {
        price: Number(newPrice),
      });
    } catch (err) {
      console.warn("Firestore price update failed:", err);
    }
  }
}

// 5. Update Full Companion Details (Admin Side)
export async function updateCompanionDetails(
  companionId: string,
  updates: Partial<CoFriendItem>
): Promise<void> {
  const currentCompanions = getStoredCompanions();
  const updated = currentCompanions.map((c) =>
    c.id === companionId ? { ...c, ...updates } : c
  );
  saveStoredCompanions(updated);

  if (isFirebaseConfigured && db) {
    try {
      await updateDoc(doc(db, "companions", companionId), updates);
    } catch (err) {
      console.warn("Firestore details update failed:", err);
    }
  }
}

// 6. Delete / Remove Companion (Admin Side)
export function removeCompanion(companionId: string) {
  const current = getStoredCompanions();
  const updated = current.filter((c) => c.id !== companionId);
  saveStoredCompanions(updated);
}

// 7. Reset to Initial Defaults
export function resetCompanionStore() {
  saveStoredApplications(INITIAL_DEMO_APPLICATIONS);
  saveStoredCompanions(DEFAULT_COFRIENDS);
}

// React Hook to access reactive state everywhere
export function useCompanionStore() {
  const [applications, setApplications] = useState<PartnerApplication[]>([]);
  const [companions, setCompanions] = useState<CoFriendItem[]>(DEFAULT_COFRIENDS);
  const [isLoaded, setIsLoaded] = useState(false);

  const refresh = useCallback(() => {
    setApplications(getStoredApplications());
    setCompanions(getStoredCompanions());
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    refresh();

    // Listen to local events
    const handleUpdate = () => refresh();
    window.addEventListener(STORE_EVENT, handleUpdate);
    window.addEventListener("storage", handleUpdate);

    // Optional Firestore Realtime Listener
    let unsubscribeApps: (() => void) | null = null;
    let unsubscribeCompanions: (() => void) | null = null;

    if (isFirebaseConfigured && db) {
      try {
        const qApps = query(collection(db, "partner_applications"), orderBy("createdAt", "desc"));
        unsubscribeApps = onSnapshot(qApps, (snapshot) => {
          if (!snapshot.empty) {
            const firebaseApps: PartnerApplication[] = [];
            snapshot.forEach((doc) => {
              firebaseApps.push(doc.data() as PartnerApplication);
            });
            setApplications(firebaseApps);
            localStorage.setItem(APPLICATIONS_STORAGE_KEY, JSON.stringify(firebaseApps));
          }
        });

        const qCompanions = query(collection(db, "companions"));
        unsubscribeCompanions = onSnapshot(qCompanions, (snapshot) => {
          if (!snapshot.empty) {
            const firebaseCompanions: CoFriendItem[] = [];
            snapshot.forEach((doc) => {
              firebaseCompanions.push(doc.data() as CoFriendItem);
            });
            setCompanions(firebaseCompanions);
            localStorage.setItem(COMPANIONS_STORAGE_KEY, JSON.stringify(firebaseCompanions));
          }
        });
      } catch (err) {
        console.warn("Firestore listener not connected:", err);
      }
    }

    return () => {
      window.removeEventListener(STORE_EVENT, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
      if (unsubscribeApps) unsubscribeApps();
      if (unsubscribeCompanions) unsubscribeCompanions();
    };
  }, [refresh]);

  return {
    applications,
    companions,
    isLoaded,
    refresh,
    submitApplication: submitPartnerApplication,
    approveApplication: approvePartnerApplication,
    rejectApplication: rejectPartnerApplication,
    updatePrice: updateCompanionPrice,
    updateDetails: updateCompanionDetails,
    removeCompanion,
    resetStore: resetCompanionStore,
  };
}
