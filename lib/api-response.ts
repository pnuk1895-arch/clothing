import { NextResponse } from "next/server";

export function successResponse<T>(
  data: T,
  message = "Request Successful",
  status: number,
  token?: string
) {
  const response = NextResponse.json(
    {
      success: true,
      message,
      data,
    },
    { status },
  );

  if (token) {
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24
    });
  }

  return response
}

export function errorResponse<T>(
  message: string,
  status = 500,
  code = "INTERNAL_SERVER_ERROR",
) {
  return NextResponse.json(
    {
      success: false,
      message,
      code,
    },
    { status },
  );
}
