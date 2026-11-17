import { NextResponse } from "next/server";
import { SignupUser } from "@/app/api/auth/SignUp/auth.signup";
import { registerSchema } from "@/validations/auth.validation";
import { AppError } from "@/lib/error";
import { successResponse } from "@/lib/api-response";
import { handleApiError } from "@/lib/api-error";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log()
    const input = registerSchema.parse(body);

    const user = await SignupUser(input);

    const token = user.Token;

    return successResponse(user, "Signup successfully", 201, token)


  } catch (error) {
    
    return handleApiError(error)
  }
}