import { IEnterUserData } from "@/interfaces/interfaces";
import UserService from "@/service/UserService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const client = new UserService({
    host: process.env.POSTGRES_HOST,
    port: 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
  });

  const data: IEnterUserData = await req.json();
  const response = await client.register(data);
  return NextResponse.json(response.message);
}
