"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Compass, User, Mail, Lock, UserPlus } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/dashboard?publish=welcome");
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center py-20 px-4 grid-bg">
      <div className="w-full max-w-md animate-slide-up">
        <div className="glass-strong rounded-3xl p-8 sm:p-10 space-y-7 text-center">
          {/* Logo */}
          <div className="flex flex-col items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-2xl glow-orange">
              <Compass className="h-8 w-8 text-white" />
            </span>
            <h2 className="text-2xl font-black text-white tracking-tight">Join Roamly</h2>
            <p className="text-xs text-white/45">Uncover hidden gems and warn others with reality checks.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleRegisterSubmit} className="space-y-4 text-left">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-white/60 block uppercase tracking-wider">Your Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-white/35 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="input-glass w-full pl-10 pr-4 py-3 text-sm rounded-xl"
                />
              </div>
            </div>

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
              <label className="text-xs font-bold text-white/60 block uppercase tracking-wider">Password</label>
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
              <UserPlus className="w-4 h-4" />
              {loading ? "Creating account…" : "Create Account"}
            </button>
          </form>

          <div className="border-t border-white/10 pt-5 text-xs text-white/40">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-orange-400 hover:text-orange-300 transition-colors">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
