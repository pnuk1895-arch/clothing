"use client"

import { ArrowRight, LockKeyhole, Mail, UserRound, Gift, Heart, Package, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { useState, useContext } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Separator } from "../ui/separator";
import { registerSchema } from "@/validations/auth.validation";
import axios from "axios";
import { toast } from "sonner"
import apiCall from "./api";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { CollectAndAuthFrom } from "@/lib/FormData";

const InputData = [
    { placeHolder: "Full Name", Name: "name", InputIcon: UserRound },
    { placeHolder: "mail Address", Name: "email", InputIcon: Mail, },
    { placeHolder: "Password", Name: "password", InputIcon: LockKeyhole, },
    { placeHolder: "Confirm Password", Name: "confirmPassword", InputIcon: LockKeyhole, }
]

export default function SignUpComponent() {

    const [PasswordView, setPasswordView] = useState(false)
    const [CPasswordView, setCPasswordView] = useState(false)
    const router = useRouter()

    const { User } = useAuth();

    function ViewHandler() {
        if (PasswordView) {
            setPasswordView(false)
        } else {
            setPasswordView(true)
        }
    }
    function ConfirmViewHandler() {
        if (CPasswordView) {
            setCPasswordView(false)
        } else {
            setCPasswordView(true)
        }
    }

    async function SubmitHandler(event: React.SubmitEvent<HTMLFormElement>) {
        try {

            // collection fromData 
            const SignUpData = CollectAndAuthFrom(event)

            // Zod validation 
            const result = registerSchema.safeParse(SignUpData);

            if (!result.success) {
                toast.error(result.error.issues[0].message)
                return
            };

            // api call 
            const response = await apiCall(result.data)
            //display success output 
            toast.success(response.data?.message)

            if (response.data?.success) {
                
                User.setUser(true)
                console.log(response.data?.success)
                router.push('/')
            }

        } catch (error) {

            if (axios.isAxiosError(error)) {

                if (error.response?.status === 409) {
                    toast.error(error.response?.data?.message)
                    console.log("User already exists. Please login.");
                    return;
                }
                toast.error(error.response?.data?.message)
            }
            if(error instanceof Error)
            {
                toast.error(error.message)
                return
            }

            toast.error("something went wrongx")
        }
    }
    return (
        <>
            <div className="min-h-16 sm:min-h-24 lg:min-h-26" />

            <section className="py-2 bg-brand-beige/80">
                <div className="max-w-content-area mx-auto w-full grid grid-cols-1 md:grid-cols-[2.5fr_2fr] h-full">
                    {/* left side  */}

                    {/* left side */}
                    <div
                        style={{
                            backgroundImage: "url('/Images/SignUp/SignUp-bg.webp')",
                        }}
                        className="relative flex w-full min-h-105 md:min-h-140 overflow-hidden rounded-2xl bg-cover bg-center md:bg-position-[70%_80%] bg-no-repeat"
                    >
                        {/* Gradient for text readability */}
                        <div className="absolute inset-0 bg-linear-to-r from-[#390e18]/95 via-[#390e18]/75 to-transparent" />

                        {/* Left content */}
                        <div className="relative z-10 flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-16 text-white">

                            <p className="mb-5 text-xs sm:text-sm uppercase tracking-[0.3em] text-[#e9c5a2]">
                                JOIN SILAAH
                            </p>

                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
                                Create Your
                                <br />
                                SILAAH Account
                            </h2>

                            <div className="mt-5 mb-8 h-0.5 w-20 bg-[#e9c5a2]" />

                            <div className="flex flex-col gap-5 text-sm sm:text-base">

                                <div className="flex items-center gap-4">
                                    <Gift className="size-6 shrink-0" strokeWidth={1.5} />
                                    <span>Faster Checkout</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Heart className="size-6 shrink-0" strokeWidth={1.5} />
                                    <span>Save Your Favorites</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Package className="size-6 shrink-0" strokeWidth={1.5} />
                                    <span>Track Your Orders</span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Sparkles className="size-6 shrink-0" strokeWidth={1.5} />
                                    <span>Exclusive Offers &amp; Early Access</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* right side  */}

                    {/* right side */}
                    <div className="flex w-full min-w-0 items-center justify-center px-3 py-5 sm:px-5 sm:py-7 md:px-3 md:py-3 lg:px-6 xl:px-8">

                        <div
                            style={{
                                backgroundImage: "url('/Images/SignUp/signUp-Card-Bg.jpg')",
                            }}
                            className="relative w-full max-w-120 overflow-hidden rounded-2xl bg-cover bg-right bg-no-repeat sm:rounded-3xl md:max-w-none"
                        >

                            {/* Background overlay */}
                            <div className="absolute inset-0 bg-brand-light-Cream/50" />

                            <Card className="relative z-10 my-3 w-full gap-0 border-0 bg-transparent px-0 py-4 shadow-none sm:py-6 lg:py-7">

                                {/* Card heading */}
                                <CardHeader className="flex w-full flex-col items-center justify-center gap-1 px-4 text-center sm:px-6">

                                    <div className="font-serif text-2xl sm:text-3xl">
                                        <p>Silaah</p>
                                    </div>

                                    <CardTitle className="font-serif text-2xl font-bold sm:text-3xl lg:text-4xl">
                                        Create an Account
                                    </CardTitle>

                                    <CardDescription className="text-center text-xs font-semibold sm:text-sm">
                                        Join SILAAH and discover timeless styles
                                    </CardDescription>

                                </CardHeader>

                                {/* Card content */}
                                <CardContent className="w-full px-4 pt-4 sm:px-6 lg:px-7 xl:px-9">

                                    {/* Form */}
                                    <form onSubmit={SubmitHandler} className="space-y-2.5 sm:space-y-3">

                                        {InputData.map((data) => {
                                            const InputIcon = data.InputIcon;

                                            return (
                                                <div
                                                    key={data.Name}
                                                    className="flex min-h-11 w-full items-center gap-2 rounded-xl border border-brand-tan/80 bg-brand-cream/40 px-3 sm:min-h-12 sm:rounded-2xl"
                                                >

                                                    <InputIcon className="size-4 shrink-0 sm:size-5" />

                                                    <Input
                                                        type={
                                                            data.Name === "Password"
                                                                ? PasswordView
                                                                    ? "text"
                                                                    : "password"
                                                                : data.Name === "Confirm Password"
                                                                    ? CPasswordView
                                                                        ? "text"
                                                                        : "password"
                                                                    : data.Name === "Email Address"
                                                                        ? "email"
                                                                        : "text"
                                                        }
                                                        placeholder={data.placeHolder}
                                                        name={data.Name}
                                                        className="h-10 min-w-0 flex-1 border-0 bg-transparent px-1 text-xs shadow-none focus-visible:ring-0 sm:text-sm"
                                                    />

                                                    {data.placeHolder === "Password" ? (
                                                        <button
                                                            type="button"
                                                            onClick={ViewHandler}
                                                            aria-label="Toggle password visibility"
                                                            className="flex shrink-0 items-center justify-center"
                                                        >
                                                            {PasswordView ? (
                                                                <IoEyeOutline className="size-4 cursor-pointer sm:size-5" />
                                                            ) : (
                                                                <IoEyeOffOutline className="size-4 cursor-pointer sm:size-5" />
                                                            )}
                                                        </button>
                                                    ) : data.placeHolder === "Confirm Password" ? (
                                                        <button
                                                            type="button"
                                                            onClick={ConfirmViewHandler}
                                                            aria-label="Toggle confirm password visibility"
                                                            className="flex shrink-0 items-center justify-center"
                                                        >
                                                            {CPasswordView ? (
                                                                <IoEyeOutline className="size-4 cursor-pointer sm:size-5" />
                                                            ) : (
                                                                <IoEyeOffOutline className="size-4 cursor-pointer sm:size-5" />
                                                            )}
                                                        </button>
                                                    ) : null}

                                                </div>
                                            );
                                        })}

                                        {/* Terms & Conditions */}
                                        <div className="flex items-start gap-2 py-2 sm:items-center">

                                            <Input
                                                type="checkbox"
                                                name="Terms"

                                                className="mt-0.5 size-4 shrink-0 sm:mt-0"
                                            />

                                            <div className="text-[11px] leading-relaxed sm:text-xs">
                                                I agree to the{" "}
                                                <Link href="/" className="underline">
                                                    Terms & Conditions
                                                </Link>{" "}
                                                and{" "}
                                                <Link href="/" className="underline">
                                                    Privacy Policy
                                                </Link>
                                            </div>

                                        </div>

                                        {/* Signup button */}
                                        <button
                                            type="submit"
                                            className="flex min-h-11 w-full items-center justify-center gap-3 rounded-2xl bg-brand-deep-burgundy px-4 py-2.5 text-brand-cream transition-opacity hover:opacity-90 sm:min-h-12"
                                        >
                                            <p className="font-serif text-base capitalize sm:text-lg">
                                                Sign up
                                            </p>
                                            <ArrowRight className="size-4 sm:size-5" />
                                        </button>

                                    </form>

                                    {/* Divider */}
                                    <div className="mt-5 flex w-full items-center gap-2 px-1">

                                        <Separator className="flex-1 bg-brand-tan/80" />

                                        <p className="whitespace-nowrap text-[11px] sm:text-xs">
                                            or continue with
                                        </p>

                                        <Separator className="flex-1 bg-brand-tan/80" />

                                    </div>

                                    {/* Social login */}
                                    <div className="grid w-full grid-cols-2 gap-2 py-4 sm:gap-3">

                                        <button
                                            type="button"
                                            className="flex min-h-10 min-w-0 items-center justify-center gap-2 rounded-xl border border-brand-tan/80 bg-brand-cream/40 px-2 py-2 text-xs font-semibold capitalize sm:text-sm"
                                        >
                                            <Icon icon="devicon:google" className="size-5 shrink-0" />
                                            Google
                                        </button>

                                        <button
                                            type="button"
                                            className="flex min-h-10 min-w-0 items-center justify-center gap-2 rounded-xl border border-brand-tan/80 bg-brand-cream/40 px-2 py-2 text-xs font-semibold capitalize sm:text-sm"
                                        >
                                            <Icon icon="devicon:apple" className="size-5 shrink-0" />
                                            Apple
                                        </button>

                                    </div>

                                    {/* Login / Signup */}
                                    <div className="flex flex-wrap items-center justify-center gap-2 text-center">

                                        <p className="text-xs">
                                            Already have an account?
                                        </p>

                                        <button
                                            type="button"
                                            onClick={()=> router.push("/Login")}
                                            className="flex items-center gap-1 text-xs font-semibold text-brand-deep-burgundy"
                                        >
                                            <span>Login</span>
                                            <ArrowRight className="size-4" />
                                        </button>

                                    </div>

                                </CardContent>

                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
