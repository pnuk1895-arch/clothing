import { LoginSchema } from "@/validations/auth.validation";
import { NextRequest, NextResponse } from "next/server";
import { userValidate } from "../../auth/Login/auth.Login";
import { handleApiError } from "@/lib/api-error";
import { successResponse } from "@/lib/api-response";


export async function POST(request: NextRequest) {
    try {
        const Body = await request.json()

        const input = LoginSchema.parse(Body)

        const User = await userValidate(input)

        console.log(User.safeUser)
        return successResponse(User.safeUser, "Login Successfully", 200, User.token)

    } catch (error) {
        return handleApiError(error)
    }
}