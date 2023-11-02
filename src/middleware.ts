import { NextResponse, NextRequest } from "next/server";
import { getMiddlewareSession } from "./lib/session";

export async function middleware(req: NextRequest) {
  if (req.url.includes("_next")) {
    return NextResponse.next();
  }

  const session = await getMiddlewareSession(req.cookies as any);
  if (!session && !req.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  return NextResponse.next();
}
