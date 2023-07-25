import { IEnterUserData, IUser } from "@/interfaces/interfaces";
import db from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export const POST = async (req: Request, res: Response) => {
  const data: IEnterUserData = await req.json();
  const hashedPass = await hash(data.password, 10);

  const response = await db.query<IUser>(
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email",
    [data.email, hashedPass],
  );

  return NextResponse.json(response.rows[0]);
};
