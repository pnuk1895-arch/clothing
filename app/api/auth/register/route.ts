import { NextResponse } from "next/server";
import { registerUser } from "@/app/api/Services/auth.services";
import { registerSchema } from "@/validations/auth.validation";
import { AppError } from "@/lib/error";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = registerSchema.parse(body);

    const user = await registerUser(input);

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful",
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof AppError) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: error.statusCode }
      );
    }

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { success: false, message: "Invalid registration data" },
        { status: 400 }
      );
    }

    console.error("Registration error:", error);

    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}