import { NextResponse } from "next/server";
import { registerUser } from "@/app/api/Services/auth.services";
import { registerSchema } from "@/validations/auth.validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = registerSchema.parse(body);

    const user = await registerUser(input);

    return NextResponse.json(
      {
        success: true,
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Registration failed",
      },
      { status: 500 }
    );
  }
}

