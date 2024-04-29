import bcrypt from "bcrypt";
import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    // Validate request body
    if (!name || !email || !password) {
      return new NextResponse("Missing Info", { status: 400 });
    }

    // Check for duplicate email
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new NextResponse("Email already exists", { status: 400 });
    }

    // Hash the password and create the user
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });
    return NextResponse.json(user,{status:200});
  } catch (error: any) {
    console.log("REGISTRATION ERROR", error);

    if (error.code === "P2002") {
      return new NextResponse("Email already exists", { status: 400 });
    }

    return new NextResponse("Internal Error", { status: 500 });
  }
}
