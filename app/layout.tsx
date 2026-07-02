import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Roamly — Real Travel Itineraries & Honest Travel Stories",
  description:
    "Discover, create, remix, and share real travel itineraries. Uncover hidden gems, get honest reality checks, and find out what people regret missing.",
  keywords:
    "travel itinerary, India travel, budget travel, hidden gems, travel community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans" style={{ backgroundColor: "#EEF5F4", color: "#10201C" }}>
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
