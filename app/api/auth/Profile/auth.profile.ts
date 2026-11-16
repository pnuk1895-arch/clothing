import { connectDB } from "@/lib/db";
import { VerifyToken } from "@/lib/jwt";
import { userRespository } from "@/repositories/user.repository";


export async function CurrentProfile(token: string) {
    try {
        const payload = await VerifyToken(token)

        if(!payload)
        {
            throw new Error("token verification failed")
        }

        const data:unknown= payload.data
        if(
            typeof data !== "object" ||
            data === null ||
            !("email" in data) ||
            !("userId" in data) ||
            typeof data.email !== "string" ||
            typeof data.userId !== "string" 
        )
        {
            throw new Error("invaild payload data")
        }

        const {email, userId}= data

        await connectDB();

        const User=await userRespository.findByEamil(email)

        return User

    } catch (error) {

        throw error

    }

}