import { NextResponse } from "next/server";



export async function POST(){
    try {
        
        const response= NextResponse.json(
            {
                success:true,
                message:"Logout Succesfully"
            }
        )

        response.cookies.delete("token");

        return response;

    } catch (error) {
        throw error
    }
}