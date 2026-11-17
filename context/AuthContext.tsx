"use client";

import api from "@/lib/api-axios";
import { isAxiosError } from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export interface ProfileType {
    _id: string;
    name: string;
    email: string;
    PhoneNumber:number;
    address:string;
    IsActive:boolean
}
interface UserType {
    User: boolean;
    setUser: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AuthContextType {
    User: UserType;
    Profile: ProfileType | undefined ;
    setProfile: React.Dispatch<React.SetStateAction<ProfileType | undefined >>;
    checkAuth:()=> Promise<void>
}

export const UserContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {

    const [User, setUser] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
    const [Profile, setProfile] = useState<ProfileType | undefined >()


    async function checkAuth() {

        try {
            const response = await api.get("/api/Profile")

            setProfile(response.data.User)
            setUser(response.data?.success)
            console.log("user:",response.data)

        } catch (error) {
            if(isAxiosError(error))
            {
                setUser(error.response?.data?.success)
                console.log(error.response?.data?.message)
            }

        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        checkAuth()
    },[])

    return (
        <UserContext.Provider value={{ User: { User, setUser, loading, setLoading }, Profile, setProfile, checkAuth }}>
            {children}
        </UserContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(UserContext)

    if (!context)
        throw new Error("Auth must be  use within AuthProvider")

    return context
}












