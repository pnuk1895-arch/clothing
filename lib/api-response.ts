import { NextResponse } from "next/server";

export function successResponse<T>(
  data: T,
  message = "Request Successful",
  status: 200,
) {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
    },
    { status },
  );
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
