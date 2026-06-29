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
  title: "Roamly - Real Travel Itineraries & Budget Guides",
  description: "Discover, create, remix, and share real travel itineraries. Uncover hidden gems, get reality checks, and find out what people regret missing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-white">
        {/* ── Fixed full-page mountain background ── */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: "url('/images/snowy-mountain.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        {/* Lighter overlay so mountain is clearly visible */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10"
          style={{
            background:
              "linear-gradient(160deg, rgba(7,14,35,0.30) 0%, rgba(10,20,50,0.22) 40%, rgba(5,10,28,0.45) 100%)",
          }}
        />

        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
