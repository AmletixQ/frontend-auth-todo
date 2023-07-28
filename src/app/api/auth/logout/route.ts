import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function POST() {
  cookies().delete("auth-token");

  return NextResponse.json({
    message: "Success",
  });
}
