"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, LogIn, PenLine, Menu, X } from "lucide-react";
import { siteConfig } from "../../config/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Floating pill navbar ───────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className="flex items-center gap-2 px-4 py-2.5 transition-all duration-300"
          style={{
            background: scrolled
              ? "rgba(247,250,248,0.94)"
              : "rgba(247,250,248,0.82)",
            backdropFilter: "blur(28px) saturate(1.5)",
            WebkitBackdropFilter: "blur(28px) saturate(1.5)",
            borderRadius: "9999px",
            border: "1.5px solid rgba(255,255,255,0.82)",
            boxShadow: scrolled
              ? "8px 10px 28px rgba(89,102,106,0.20), -4px -4px 16px rgba(255,255,255,0.88)"
              : "6px 8px 22px rgba(89,102,106,0.14), -4px -4px 14px rgba(255,255,255,0.80)",
            maxWidth: "900px",
            width: "100%",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-200"
              style={{
                background: "linear-gradient(135deg, #54BFCB, #0F6F78)",
                boxShadow: "3px 3px 10px rgba(15,111,120,0.30), -2px -2px 8px rgba(255,255,255,0.70)",
              }}
            >
              <Compass className="h-4 w-4 text-white" />
            </span>
            <span
              className="text-lg font-extrabold tracking-tight"
              style={{ fontFamily: "'Outfit', sans-serif", color: "#10201C" }}
            >
              Roam
              <span
                style={{
                  background: "linear-gradient(135deg, #54BFCB, #0F6F78)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ly
              </span>
            </span>
          </Link>

          {/* Divider */}
          <div className="hidden lg:block w-px h-5 mx-1" style={{ background: "rgba(89,102,106,0.15)" }} />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {siteConfig.mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{
                    color: active ? "#0F6F78" : "#667572",
                    background: active ? "rgba(84,191,203,0.12)" : "transparent",
                    fontWeight: active ? 700 : 600,
                  }}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/login"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{ color: "#667572" }}
            >
              <LogIn className="w-3.5 h-3.5" />
              Sign in
            </Link>
            <Link
              href="/create"
              className="clay-btn clay-btn-primary !py-2 !px-5 !text-sm"
            >
              <PenLine className="w-3.5 h-3.5" />
              Start Planning
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full transition-all duration-200"
            style={{ color: "#667572", background: "rgba(227,239,236,0.60)" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile drawer ──────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.22 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-3xl p-5 md:hidden"
            style={{
              background: "rgba(247,250,248,0.96)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1.5px solid rgba(255,255,255,0.82)",
              boxShadow: "12px 14px 36px rgba(89,102,106,0.22), -6px -6px 20px rgba(255,255,255,0.88)",
            }}
          >
            <div className="flex flex-col gap-1">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200"
                  style={{
                    color: pathname === item.href ? "#0F6F78" : "#667572",
                    background: pathname === item.href ? "rgba(84,191,203,0.10)" : "transparent",
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div
              className="flex flex-col gap-2 mt-4 pt-4"
              style={{ borderTop: "1px solid rgba(84,191,203,0.15)" }}
            >
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-semibold"
                style={{ color: "#667572" }}
              >
                <LogIn className="w-4 h-4" />
                Sign in
              </Link>
              <Link
                href="/create"
                onClick={() => setMobileOpen(false)}
                className="clay-btn clay-btn-primary justify-center !text-sm"
              >
                <PenLine className="w-4 h-4" />
                Start Planning
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
