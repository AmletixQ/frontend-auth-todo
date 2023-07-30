import db from "@/lib/db";
import { getBackendSession } from "@/utils/getBackendSession";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getBackendSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { rows } = await db.query("SELECT * FROM todos WHERE user_id = $1", [
    session.id,
  ]);

  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const session = await getBackendSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body: {
    title: string;
    completed: boolean;
    user_id: number;
  } = await req.json();

  await db.query(
    `INSERT INTO todos (title, completed, user_id) VALUES ($1, $2, $3)`,
    [body.title, body.completed, body.user_id],
  );

  return NextResponse.json({ message: "Success" }, { status: 201 });
}
