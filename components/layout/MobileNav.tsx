"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Compass, PlusCircle, LayoutDashboard, Bookmark, LogIn, UserPlus } from "lucide-react";
import { siteConfig } from "../../config/site";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "explore":
        return <Compass className="w-5 h-5" />;
      case "create":
        return <PlusCircle className="w-5 h-5" />;
      case "dashboard":
        return <LayoutDashboard className="w-5 h-5" />;
      case "collections":
        return <Bookmark className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <div className="md:hidden">
      {/* Trigger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-deep-navy-700 hover:text-brand-orange-600 focus:outline-none transition-colors"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menu Drawer */}
      {isOpen && (
        <div className="fixed inset-0 top-[73px] z-50 w-full h-[calc(100vh-73px)] bg-sand-100/95 backdrop-blur-md border-t border-sand-300 flex flex-col justify-between p-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-6">
            <div className="text-xs uppercase tracking-wider text-deep-navy-400 font-semibold mb-2">
              Navigation
            </div>
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-lg font-medium text-deep-navy-800 hover:text-brand-orange-600 transition-colors py-2"
              >
                <span className="text-brand-teal-600">{getIcon(item.title)}</span>
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 border border-deep-navy-300 rounded-xl text-deep-navy-800 font-medium hover:bg-sand-200 transition-colors"
            >
              <LogIn className="w-4 h-4 text-brand-teal-600" />
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-brand-orange-600 text-white rounded-xl font-medium hover:bg-brand-orange-700 shadow-md shadow-brand-orange-600/10 transition-colors"
            >
              <UserPlus className="w-4 h-4" />
              Register
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
