import { IEnterUserData, TUser } from "@/interfaces/interfaces";
import db from "@/lib/db";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { compare } from "bcrypt";
import { cookies } from "next/headers";

export const POST = async (req: Request, res: Response) => {
  const data: IEnterUserData = await req.json();
  const { rows } = await db.query<TUser>(
    `SELECT * FROM users WHERE email='${data.email}'`,
  );

  const user: TUser | null = rows[0];
  if (!user) {
    return NextResponse.json({
      error: "User doesn't exists",
      status: 400,
    });
  }

  const matchPass = await compare(data.password, user.password);
  if (!matchPass) {
    return NextResponse.json({
      error: "Invalid password",
      status: 400,
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      password: matchPass,
    },
    process.env.SUPER_SECRET_KEY!,
    {
      expiresIn: "30d",
    },
  );

  cookies().set("auth-token", token);
  return NextResponse.json({
    id: user.id,
    email: user.email,
  });
};
