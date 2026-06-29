"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Sparkles, MapPin, User, LogIn, UserPlus } from "lucide-react";
import { siteConfig } from "../../config/site";
import Container from "./Container";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-sand-300 bg-sand-100/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-deep-navy-900 group">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange-500 text-white shadow-md shadow-brand-orange-500/20 group-hover:scale-105 transition-transform duration-200">
                <Compass className="h-6 w-6 animate-spin-slow" />
              </span>
              <span className="font-extrabold tracking-wide">
                Roam<span className="text-brand-orange-600">ly</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold tracking-wide transition-colors hover:text-brand-orange-600 ${
                    isActive ? "text-brand-orange-600 font-bold" : "text-deep-navy-700"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/login"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-deep-navy-700 hover:text-brand-orange-600 hover:bg-sand-200/50 rounded-xl transition-all"
              >
                <LogIn className="w-4 h-4 text-brand-teal-600" />
                Login
              </Link>
              <Link
                href="/register"
                className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-brand-orange-600 hover:bg-brand-orange-700 rounded-xl shadow-sm hover:shadow shadow-brand-orange-600/10 hover:shadow-brand-orange-600/20 transition-all duration-200"
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
