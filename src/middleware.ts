import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  if (!req.cookies.get("auth-token")) {
    return NextResponse.redirect(new URL("/entrance", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard"],
};
