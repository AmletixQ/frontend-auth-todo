import { ITodoItem } from "@/interfaces/todoTypes";
import db from "@/lib/db";
import { getBackendSession } from "@/utils/getBackendSession";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const session = await getBackendSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body: Record<string, unknown> = await req.json();

  if (Object.hasOwn(body, "completed")) {
    const { rows } = await db.query<ITodoItem>(
      `UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *`,
      [body.completed, +params.id],
    );
    return NextResponse.json(rows[0], { status: 201 });
  }

  return NextResponse.json({});
}

export async function DELETE(_: any, { params }: { params: { id: string } }) {
  const session = await getBackendSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await db.query<ITodoItem>(`DELETE FROM todos WHERE id = $1`, [+params.id]);
  return NextResponse.json({ message: "Success" }, { status: 201 });
}
