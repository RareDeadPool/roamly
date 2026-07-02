"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Compass, Mail, Lock, LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import Container from "../../components/layout/Container";
import Button from "../../components/shared/Button";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        alert("Invalid email or password");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center py-20 px-4 grid-bg">
      <div className="w-full max-w-md animate-slide-up">
        {/* Glass card */}
        <div className="glass-strong rounded-3xl overflow-hidden p-8 sm:p-10 space-y-7 text-center">
          {/* Logo */}
          <div className="flex flex-col items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-2xl glow-orange">
              <Compass className="h-8 w-8 text-white" />
            </span>
            <h2 className="text-2xl font-black text-white tracking-tight">Welcome back</h2>
            <p className="text-xs text-white/45">Sign in to sync your saved trips and travel collections.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4 text-left">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-white/60 block uppercase tracking-wider">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-white/35 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="traveler@roamly.com"
                  className="input-glass w-full pl-10 pr-4 py-3 text-sm rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-white/60 block uppercase tracking-wider">Password</label>
                <a href="#" className="text-[11px] font-bold text-orange-400 hover:text-orange-300 transition-colors">Forgot password?</a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-white/35 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input-glass w-full pl-10 pr-4 py-3 text-sm rounded-xl"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm hover:from-orange-400 hover:to-orange-500 transition-all duration-300 glow-orange mt-2 disabled:opacity-60"
            >
              <LogIn className="w-4 h-4" />
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <div className="border-t border-white/10 pt-5 text-xs text-white/40">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-bold text-orange-400 hover:text-orange-300 transition-colors">
              Create one now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
