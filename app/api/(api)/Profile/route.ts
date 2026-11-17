import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { CurrentProfile } from "@/app/api/auth/Profile/auth.profile";

export async function GET(request: NextRequest) {
    try {
        // get cookies store
        const CookieStore = await cookies()
        console.log("start")
        // get jwt token
        const token = CookieStore.get("token")?.value

        if (!token) {
            throw new Error("Missing authentication token")
        }

        const User = await CurrentProfile(token)

        return NextResponse.json({
            success: true,
            message: "User have been Registered",
            User
        },
            {
                status: 200
            })

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "User does not exist"
        },
            {
                status:404
            })

    }

}