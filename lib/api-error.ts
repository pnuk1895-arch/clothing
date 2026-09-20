import { ZodError } from "zod";
import { AppError } from "./error";
import { errorResponse } from "./api-response";

export function handleApiError(error: unknown) {
  if (error instanceof ZodError) {
    return errorResponse("Validation failed", 400, "VALIDATION_ERROR");
  }

  if (error instanceof AppError) {
    return errorResponse(error.message, error.statusCode, error.code);
  }

  console.error("Unhandled API error:", error);

  return errorResponse("Something went wrong", 500, "INTERNAL_SERVER_ERROR");
}
