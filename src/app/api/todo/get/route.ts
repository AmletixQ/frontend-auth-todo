import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const user_id = new URL(req.url).searchParams.get("user_id");

  const { rows } = await db.query("SELECT * FROM todos WHERE user_id = $1", [
    user_id,
  ]);
  return NextResponse.json({
    rows,
  });
}
