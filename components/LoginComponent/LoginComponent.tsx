"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CrossIcon, User } from "lucide-react";
import { MdLockOutline, MdMailOutline } from "react-icons/md";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import api from "@/lib/api-axios";
import axios from "axios";
import { CollectAndAuthFrom } from "@/lib/FormData";
import { LoginSchema } from "@/validations/auth.validation";
import { toast } from "sonner";
import { AppError } from "@/lib/error";
import { useAuth } from "@/context/AuthContext";

export default function LoginComponent() {

    const [PasswordView, setPasswordView] = useState(false)
    const { User, setProfile, Profile} =useAuth();

    const router = useRouter()

    function ViewHandler() {
        if (PasswordView) {
            setPasswordView(false)
        } else {
            setPasswordView(true)
        }
    }

    useEffect(() => {
        const previousOverflow = document.body.style.overflow

        document.body.style.overflow = "hidden"

        return () => {
            document.body.style.overflow = previousOverflow
        }

    })

    function backHandler(e: React.MouseEvent<HTMLDivElement>) {
        if (e.target === e.currentTarget) {
            router.back()
        }
    }

    async function LoginHandler(e: React.SubmitEvent<HTMLFormElement>) {
        try {
            const LoginData = CollectAndAuthFrom(e)

            const data = LoginSchema.safeParse(LoginData)

            if (!data.success) {
                toast.error(data.error.issues[0].message)
            }

            const response = await api.post("/api/Login", data.data)

            toast.success(response.data?.message)
            console.log("login",response.data)
            User.setUser(true)
            setProfile(response.data.data)
            console.log("profile", Profile)
            router.push("/")

        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message ?? error.message)
                console.log("error", error.message, error.stack)
            } else if (error instanceof AppError) {
                toast.error(error.message)
                console.log("error", error.message, error.stack)
            } else if (error instanceof Error) {
                toast.error(error.message)
                console.log(error, "error")
            } else {
                // toast.error(error)
                console.log("error", error)
            }

        }
    }

    return (
        <section onClick={backHandler} className="fixed inset-0 z-50 grid place-items-center px-4 backdrop-blur-sm">
            <Card
                style={{
                    backgroundImage: "url('/Images/login-bg.png')"
                }}
                className="relative mx-auto h-full max-h-110 w-full max-w-105 overflow-hidden rounded-4xl border-3 border-white bg-cover bg-center bg-no-repeat p-0 max-sm:bg-none sm:max-w-3xl"
            >
                <Card className="absolute right-0 flex h-full w-full flex-col items-center gap-0 bg-brand-soft-card-Beige py-4 sm:w-4/7 sm:bg-transparent sm:px-[5%]">

                    <div className="absolute right-3 top-3 flex size-9 cursor-pointer items-center justify-center rounded-full border border-brand-tan/70 bg-brand-cream/70 shadow-sm transition-all duration-300 hover:rotate-90 hover:border-brand-burgundy hover:bg-brand-deep-burgundy group">
                        <RxCross2 onClick={() => router.back()} className="size-5 text-header-burgundy transition-colors duration-300 group-hover:text-brand-cream" />
                    </div>

                    <CardHeader className="flex w-full flex-col items-center justify-center pt-3">
                        <div className="w-full text-center text-4xl">
                            silaah
                        </div>

                        <CardTitle className="text-center text-3xl capitalize">
                            welcome back
                        </CardTitle>

                        <CardDescription className="text-center italic">
                            Login to your SILAAH account
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="w-full px-3">
                        <form onSubmit={LoginHandler} className="my-4 flex flex-col gap-3">

                            <div className="flex items-center rounded-lg border border-brand-tan/80 bg-brand-cream/40 px-2">
                                <MdMailOutline className="size-5 shrink-0" />
                                <Input
                                    placeholder="Email address"
                                    name="email"
                                    className="border-0 text-sm font-semibold text-header-burgundy focus-visible:ring-0 focus-visible:outline-none"
                                />
                            </div>

                            <div className="flex items-center rounded-lg border border-brand-tan/80 bg-brand-cream/40 px-2">
                                <MdLockOutline className="size-5 shrink-0" />

                                <Input
                                    placeholder="Password"
                                    type={PasswordView ? "password" : "text"}
                                    name="password"
                                    className="border-0 text-sm font-semibold text-header-burgundy focus-visible:ring-0 focus-visible:outline-none"
                                />

                                {PasswordView ? (
                                    <IoEyeOutline
                                        className="size-5 shrink-0 cursor-pointer"
                                        onClick={ViewHandler}
                                    />
                                ) : (
                                    <IoEyeOffOutline
                                        className="size-5 shrink-0 cursor-pointer"
                                        onClick={ViewHandler}
                                    />
                                )}
                            </div>

                            <div className="flex items-center justify-between font-semibold">
                                <div className="flex items-center justify-center gap-1">
                                    <Input type="checkbox" className="size-3.5" />
                                    <p className="text-xs">Remember me</p>
                                </div>

                                <button type="button" className="text-xs text-brand-heading-dark">
                                    Forget password?
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-deep-burgundy py-2 text-brand-cream"
                            >
                                <p className="text-base capitalize">login</p>
                                <ArrowRight className="size-4" />
                            </button>
                        </form>
                    </CardContent>

                    <div className="flex w-full items-center gap-2 px-6">
                        <Separator className="flex-1 bg-brand-tan/80" />
                        <p className="whitespace-nowrap text-xs">or continue with</p>
                        <Separator className="flex-1 bg-brand-tan/80" />
                    </div>

                    <div className="flex w-full gap-2 px-4 py-3">
                        <button type="button" className="flex-1 flex items-center justify-center gap-1 rounded-xl border border-brand-tan/80 bg-brand-cream/40 py-1.5 text-xs font-semibold capitalize">
                            <Icon
                                icon="devicon:google"
                                className="size-5"
                            />
                            google
                        </button>

                        <button type="button" className="flex-1 flex items-center justify-center gap-1 rounded-xl border border-brand-tan/80 bg-brand-cream/40 py-1.5 text-xs font-semibold capitalize">
                            <Icon
                                icon="devicon:apple"
                                className="size-5"
                            />
                            apple
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <p className="text-xs">Don't have an account?</p>

                        <button type="button" className="flex items-center text-xs font-semibold">
                            <p>Sign Up</p>
                            <ArrowRight className="size-4" />
                        </button>
                    </div>

                </Card>
            </Card>
        </section>

    )
}
