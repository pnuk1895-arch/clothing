import { connectDB } from "@/lib/db";
import { AppError } from "@/lib/error";
import { GenToken } from "@/lib/jwt";
import { comparePassword } from "@/lib/password";
import { userRespository } from "@/repositories/user.repository";
import { LoginInput } from "@/validations/auth.validation";

export async function userValidate(input: LoginInput) {

        await connectDB();

        const Data = await userRespository.findByEamil(input.email, true)

        if (!Data) {
            throw new AppError("User Does not exist",401, "INVALID_CREDENTIALS")
        }

        const CheckPassword = await comparePassword(input.password, Data.password.toString())

        if (!CheckPassword) {
            throw new AppError("Password is invalid", 401, "INVALID_CREDENTIALS")
        }
        console.log("token")
        const token = await GenToken({ email: Data.email, userId: Data._id.toString() })
        console.log(token)
        if (!token) {
            throw new AppError("Login failed", 401, "INVALID_CREDENTIALS")
            
        }

        const {
            password,
            confirmPassword,
            createdAt,  
            updatedAt,
            __v,
            ...safeUser
        } = Data.toObject();

        return {
            safeUser,
            token
        }




}