import { NextResponse } from "next/server";
import { SignupUser } from "@/app/api/auth/SignUp/auth.signup";
import { registerSchema } from "@/validations/auth.validation";
import { AppError } from "@/lib/error";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const input = registerSchema.parse(body);

    const user = await SignupUser(input);

    const token = user.Token;

    const response = NextResponse.json(
      {
        success: true,
        message: "Registration successful",
        user,
      },
      { status: 201 }
    );

    console.log("token", token)

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite:"lax",
      path:"/",
      maxAge: 60 * 60 * 24
    });

    return response
    

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