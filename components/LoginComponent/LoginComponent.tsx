"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { MdLockOutline, MdMailOutline } from "react-icons/md";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useState } from "react";


export default function LoginComponent() {

    const [PasswordView, setPasswordView] = useState(false)

    function ViewHandler() {
        if (PasswordView) {
            setPasswordView(false)
        } else {
            setPasswordView(true)
        }
    }

    return (
        <section className="fixed inset-0 z-50 grid place-items-center px-4 backdrop-blur-sm">
            <Card
                style={{
                    backgroundImage: "url('/Images/login-bg.png')"
                }}
                className="relative mx-auto h-full max-h-110 w-full max-w-105 overflow-hidden rounded-4xl border-3 border-white bg-cover bg-center bg-no-repeat p-0 max-sm:bg-none sm:max-w-3xl"
            >
                <Card className="absolute right-0 flex h-full w-full flex-col items-center gap-0 bg-brand-soft-card-Beige py-4 sm:w-3/5 sm:bg-transparent">

                    <CardHeader className="flex w-full flex-col items-center justify-center p-0">
                        <div className="w-full text-center text-2xl">
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
                        <form action="" className="my-4 flex flex-col gap-3">

                            <div className="flex items-center rounded-lg border border-brand-tan/80 bg-brand-cream/40 px-2">
                                <MdMailOutline className="size-5 shrink-0" />
                                <Input
                                    placeholder="Email address"
                                    className="border-0 text-sm font-semibold text-header-burgundy focus-visible:ring-0 focus-visible:outline-none"
                                />
                            </div>

                            <div className="flex items-center rounded-lg border border-brand-tan/80 bg-brand-cream/40 px-2">
                                <MdLockOutline className="size-5 shrink-0" />

                                <Input
                                    placeholder="Password"
                                    type={PasswordView ? "password" : "text"}
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
                        <button type="button" className="flex-1 rounded-xl border border-brand-tan/80 bg-brand-cream/40 py-1.5 text-xs font-semibold capitalize">
                            google
                        </button>

                        <button type="button" className="flex-1 rounded-xl border border-brand-tan/80 bg-brand-cream/40 py-1.5 text-xs font-semibold capitalize">
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
