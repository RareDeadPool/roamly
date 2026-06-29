import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token") || request.cookies.get("__Secure-next-auth.session-token");
  const path = request.nextUrl.pathname;

  const isProtectedRoute = path.startsWith("/dashboard") || path.startsWith("/create");

  // In the prototype/foundation phase, we print a check but don't force redirect 
  // to make checking and exploring pages easier for the user.
  if (isProtectedRoute && !token) {
    // For later implementation:
    // return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/create/:path*"],
};
