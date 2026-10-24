import { connectDB } from "@/lib/db";
import { AppError } from "@/lib/error";
import { hashPassword } from "@/lib/password";
import { userRespository } from "@/repositories/user.repository";
import type { RegisterInput } from "@/validations/auth.validation";

export async function registerUser(input: RegisterInput) {
  await connectDB();

  const existingUser = await userRespository.findByEamil(input.email);

  if (existingUser) {
    throw new AppError("User already exists", 409, "USER_ALREADY_EXISTS");
  }

  const hashedPassword = await hashPassword(input.password);

  const user = await userRespository.create({
    name: input.name,
    email: input.email,
    password: hashedPassword,
  });

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  };
}