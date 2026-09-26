import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, DM_Sans, Caveat } from "next/font/google";
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

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#FC0264",
};

export const metadata: Metadata = {
  title: "CoFriend — Social & Lifestyle Companions | Find a CoFriend. Share the Moment.",
  description:
    "India's Most Trusted Social & Lifestyle Rental Support Services Marketplace. Find verified CoFriends for coffee, movies, shopping, travel, fitness and everyday experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} ${dmSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans bg-[#FFFFFF] text-[#0F172A] selection:bg-[#FC0264] selection:text-white">
        {children}
      </body>
    </html>
  );
}
