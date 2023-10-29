import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.url.includes("_next")) {
    return NextResponse.next();
  }

  if (!req.cookies.get("auth-token") && req.url.endsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (req.cookies.get("auth-token") && req.url.endsWith("/")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}
