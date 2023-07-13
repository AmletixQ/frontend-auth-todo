import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "AmletixQ is the best!" });
}