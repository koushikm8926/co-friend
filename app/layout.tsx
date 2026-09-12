import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "CoFriend.in | Verified Lifestyle Companion Services",
  description:
    "Curated catalog of 100% platonic & identity-verified lifestyle companion services across Indian metro hubs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans bg-[#FAF9F5] text-[#1F2421]">
        {children}
      </body>
    </html>
  );
}
