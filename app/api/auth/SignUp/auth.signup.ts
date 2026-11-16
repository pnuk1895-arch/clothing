import { connectDB } from "@/lib/db";
import { AppError } from "@/lib/error";
import { GenToken } from "@/lib/jwt";
import { hashPassword } from "@/lib/password";
import { userRespository } from "@/repositories/user.repository";
import type { RegisterInput } from "@/validations/auth.validation";

export async function SignupUser(input: RegisterInput) {

  await connectDB();

  const existingUser = await userRespository.findByEamil(input.email);

  if (existingUser) {
    throw new AppError("User already exists. Please login", 409, "USER_ALREADY_EXISTS");
  }

  const hashedPassword = await hashPassword(input.password);

  const hashConfirmPassword = await hashPassword(input.confirmPassword)

  const user = await userRespository.create({
    name: input.name,
    email: input.email,
    password: hashedPassword,
    confirmPassword:hashConfirmPassword
  });

  const Token = await GenToken({
    userId: user._id.toString(),
    email: user.email
  })

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
    Token:Token
  };
}