
import { SignJWT, jwtVerify } from "jose";

const SecretValue = process.env.JWT_SECRET

if (!SecretValue) {
    throw new Error("JWT_SECRET is missing from environment variables")
}

const secret = new TextEncoder().encode(SecretValue)

interface gentokentype {
    userId: string;
    email: string;
}

// GENERATE TOKEN 
export async function GenToken(data: gentokentype) {
    const token = await new SignJWT({ data })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1d")
        .sign(secret);

    return token
}

export async function VerifyToken(token: string) {

    try {

        const secretKey = new TextEncoder().encode(
            process.env.JWT_SECRET
        )

        const { payload } = await jwtVerify(token, secretKey)

        return payload

    } catch (error) {

       return null

    }

}