import { NextResponse } from "next/server";
import { SignupUser } from "@/app/api/auth/SignUp/auth.signup";
import { registerSchema } from "@/validations/auth.validation";
import { AppError } from "@/lib/error";
import { successResponse } from "@/lib/api-response";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log()
    const input = registerSchema.parse(body);

    const user = await SignupUser(input);

    const token = user.Token;

    successResponse(user, "Signup successfully", 201, token)


  } catch (error) {
    if (error instanceof AppError) {
      console.log(error.message)
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

    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );

  }
}