"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Compass, User, Mail, Lock, UserPlus } from "lucide-react";
import Container from "../../components/layout/Container";
import Button from "../../components/shared/Button";
import { Card, CardContent } from "../../components/shared/Card";

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
    <div className="py-20 bg-sand-100/30 min-h-[calc(100vh-140px)] flex flex-col justify-center items-center grid-bg">
      <Container className="max-w-md">
        <Card className="border border-sand-300 rounded-3xl overflow-hidden shadow-lg bg-white">
          <CardContent className="p-8 sm:p-10 space-y-6 text-center">
            {/* Logo */}
            <div className="flex flex-col items-center gap-2">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange-500 text-white shadow shadow-brand-orange-500/20">
                <Compass className="h-7 w-7" />
              </span>
              <h2 className="text-2xl font-black text-deep-navy-950">Join Roamly</h2>
              <p className="text-xs text-deep-navy-500">Uncover hidden gems and warn others with reality checks.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleRegisterSubmit} className="space-y-4 text-left">
              <div className="space-y-1">
                <label className="text-xs font-bold text-deep-navy-850 block">Your Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-deep-navy-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-sand-300 rounded-xl focus:outline-none focus:border-brand-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-deep-navy-850 block">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-deep-navy-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="traveler@roamly.com"
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-sand-300 rounded-xl focus:outline-none focus:border-brand-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-deep-navy-850 block">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-deep-navy-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-sand-300 rounded-xl focus:outline-none focus:border-brand-orange-500 transition-colors"
                  />
                </div>
              </div>

              <Button variant="primary" type="submit" loading={loading} className="w-full py-3 mt-6">
                <UserPlus className="w-4 h-4" />
                Create Account
              </Button>
            </form>

            <div className="border-t border-sand-200 pt-4 text-xs text-deep-navy-500">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-brand-orange-600 hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
