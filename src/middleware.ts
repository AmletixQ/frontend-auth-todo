import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token");

  console.log(request.url);
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const jwtStatus = await fetch("http://localhost:3000/api/validate", {
    headers: new Headers({
      Authorization: `Bearer ${token.value}`,
    }),
  }).then((res) => res.json());

  if (!jwtStatus) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (request.url.includes("/login") || request.url.includes("/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
