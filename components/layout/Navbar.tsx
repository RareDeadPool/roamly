"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, MapPin, User, LogIn, UserPlus, Globe } from "lucide-react";
import { siteConfig } from "../../config/site";
import Container from "./Container";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full glass border-b border-white/10">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg glow-orange group-hover:scale-105 transition-transform duration-200">
                <Compass className="h-5 w-5 text-white" />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white font-[Outfit]">
                Roam<span className="gradient-text-orange">ly</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {siteConfig.mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold tracking-wide transition-all duration-200 hover:text-white ${
                    isActive
                      ? "text-white border-b-2 border-orange-500 pb-0.5"
                      : "text-white/65 hover:text-white"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Location + Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-white/50 font-medium">
              <Globe className="w-3.5 h-3.5" />
              Worldwide
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/login"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
              <Link
                href="/register"
                className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-xl shadow-lg glow-orange transition-all duration-200"
              >
                <UserPlus className="w-4 h-4" />
                Register
              </Link>
            </div>

            {/* Mobile Nav Drawer */}
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
