import { verify } from "jsonwebtoken";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const token = req.headers.get("Authorization")?.split(" ")[1];
  if (!token) {
    return NextResponse.json(null, {
      status: 400,
    });
  }
  try {
    const verifyToken = verify(token, process.env.SUPER_SECRET_KEY!);
    return NextResponse.json(verifyToken);
  } catch (e) {
    return NextResponse.json(null, {
      status: 400,
    });
  }
};
