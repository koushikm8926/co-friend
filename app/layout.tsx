import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#7C3AED",
};

export const metadata: Metadata = {
  title: "Co-Friend — Life's Better Together | Book Verified Companions in India",
  description:
    "Co-Friend — India's verified companion marketplace. Book trusted people for movies, coffee, travel, events, elder care, fitness and more. Life's Better Together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans bg-[#FAFAFD] text-[#0F172A] selection:bg-[#7c3aed] selection:text-white">
        {children}
      </body>
    </html>
  );
}
