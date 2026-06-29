"use client";

import { useSession } from "next-auth/react";

export function useAuth() {
  const { data: session, status } = useSession({ required: false }) as any;

  return {
    user: session?.user || null,
    isAuthenticated: !!session?.user,
    isLoading: status === "loading",
    status,
  };
}
export default useAuth;
