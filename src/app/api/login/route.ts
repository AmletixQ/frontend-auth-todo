import { IEnterUserData } from "@/interfaces/interfaces";
import UserService from "@/service/UserService";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const client = new UserService({
    host: process.env.POSTGRES_HOST,
    port: 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
  });

  const { username, password }: IEnterUserData = await req.json();
  const res = await client.login({ username, password });

  if (res.status === 200) {
    const secret: string = process.env.JWT_SECRET || "";
    const token = sign({ username }, secret, { expiresIn: 60 * 60 * 24 * 30 });
    const serialized = serialize("OutSiteJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    return NextResponse.json(
      { message: res.message },
      {
        status: res.status,
        headers: { "Set-cookie": serialized },
      },
    );
  } else {
    return NextResponse.json({ message: res.message }, { status: res.status });
  }
}
