import UserService from "@/service/UserService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // const client = new UserService({
  //   host: process.env.POSTGRES_HOST,
  //   user: process.env.POSTGRES_USER,
  //   password: process.env.POSTGRES_PASSWORD,
  //   database: process.env.POSTGRES_DATABASE,
  //   port: 5432,
  // });

  const response = await req.json();
  return NextResponse.json({ response });
}
