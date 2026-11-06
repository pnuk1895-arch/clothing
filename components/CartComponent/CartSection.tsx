"use client"

import { Diamond, Lock, Minus, PackageCheck, Plus, Scissors, ShieldCheck, TicketPercent, Trash2, Truck } from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const Items = [
    {
        id: 1,
        Image: "/Images/Occasion/OccasionThatMatter/items/wedding.png",
        ProductName: "Emboridered Sherwani",
        Color: "Ivory",
        size: "M",
        Amount: "34,999"
    },
    {
        id: 2,
        Image: "/Images/Occasion/OccasionThatMatter/items/wedding.png",
        ProductName: "Emboridered Sherwani",
        Color: "Ivory",
        size: "M",
        Amount: "34,999"
    },
    {
        id: 3,
        Image: "/Images/Occasion/OccasionThatMatter/items/wedding.png",
        ProductName: "Emboridered Sherwani",
        Color: "Ivory",
        size: "M",
        Amount: "34,999"
    },
];

const billData = {
    "Subtotal (3 items)": "₹ 45,497",
    Shipping: "Free",
    "Estimated Tax (GST)": "₹ 5,459"
};

const benefits = [
    {
        id: 1,
        title: "Free Shipping",
        description: "Across India",
        icon: Truck,
    },
    {
        id: 2,
        title: "Secure Payment",
        description: "100% safe & trusted",
        icon: ShieldCheck,
    },
    {
        id: 3,
        title: "Custom Tailoring",
        description: "Perfect fit for you",
        icon: Scissors,
    },
    {
        id: 4,
        title: "Easy Returns",
        description: "Hassle-free process",
        icon: PackageCheck,
    },
];


export default function CartSection() {
    return (
        <section>
            <div className="min-h-17 sm:min-h-24 lg:min-h-26" />

            <div className="max-w-content-area w-[90%] mx-auto">
                <div className="flex flex-col justify-start pt-3">
                    {/* heading */}
                    <div className="flex items-end gap-2">
                        <h3 className="text-xl sm:text-3xl lg:text-3xl font-semibold font-serif text-header-burgundy">
                            Your Cart
                        </h3>
                        <p className="pb-1 text-xs sm:text-base">(3 items)</p>
                    </div>

                    <div className="relative mt-1 flex w-36 items-center justify-center sm:w-40">
                        <span className="h-px flex-1 bg-brand-tan" />
                        <Diamond className="mx-1 size-4 shrink-0 text-brand-tan" />
                        <span className="h-px flex-1 bg-brand-tan" />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-4">
                    <div className="w-full flex-4">

                        {/* your cart */}
                        <div className="border rounded-lg border-brand-tan my-2 px-2 py-2">
                            {Items.map((item, index) => {
                                return (
                                    <Card
                                        key={item.id}
                                        className={cn(
                                            "group flex flex-row gap-2 sm:gap-3 py-2 rounded-lg transition-colors duration-300 hover:bg-brand-light-Cream/40",
                                            Items.length === (index + 1) ? "" : "border-b border-brand-beige"
                                        )}
                                    >
                                        {/* image */}
                                        <div className="relative overflow-hidden size-20 sm:size-24 lg:size-28 rounded-xl shrink-0">
                                            <Image
                                                src={item.Image}
                                                alt={item.ProductName}
                                                fill
                                                loading="eager"
                                                sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
                                                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="flex flex-col w-full min-w-0">
                                            <CardTitle className="text-xs sm:text-base lg:text-base font-bold transition-colors duration-300 group-hover:text-brand-rosewood">
                                                {item.ProductName}
                                            </CardTitle>

                                            <div className="flex flex-wrap gap-1 text-xxs sm:text-sm font-semibold text-brand-Brown">
                                                <p>Color: {item.Color}</p>
                                                <span className="border-l border-brand-tan" />
                                                <p>Size: {item.size}</p>
                                            </div>

                                            <div className="flex flex-row justify-between items-start shrink-0 pt-1">
                                                <div className="text-sm sm:text-lg lg:text-lg font-bold">
                                                    <p>₹ {item.Amount}</p>
                                                </div>

                                                <div className="flex flex-row items-center gap-2 sm:gap-4">
                                                    <div className="flex flex-row items-center gap-2 sm:gap-3 border border-black/50 rounded-lg px-1 hover:border-brand-rosewood transition-colors duration-300">
                                                        <button className="text-brand-Brown hover:text-brand-rosewood transition-colors duration-200">
                                                            <Minus size={14} />
                                                        </button>
                                                        <div className="text-xs sm:text-base">2</div>
                                                        <button className="text-brand-Brown hover:text-brand-rosewood transition-colors duration-200">
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>

                                                    <div className="cursor-pointer text-brand-Brown hover:text-red-700 transition-colors duration-300">
                                                        <Trash2 className="size-4 sm:size-5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>

                        <div className="flex flex-row justify-between py-1">
                            <div className="flex flex-row gap-1 items-center">
                                <BiLeftArrowAlt className="size-4 sm:size-6" />
                                <button className="underline underline-offset-4 text-xxs sm:text-sm font-semibold hover:text-brand-rosewood transition-colors duration-300">
                                    Continue Shopping
                                </button>
                            </div>

                            <div className="flex flex-row gap-2 items-center hover:text-red-700 transition-colors duration-300 cursor-pointer">
                                <Trash2 className="size-3.5 sm:size-5" />
                                <button className="underline underline-offset-4 text-xxs sm:text-sm font-semibold">
                                    Clear Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <Card className="flex-2 rounded-lg border border-brand-tan/65 my-2 p-0 bg-brand-light-Cream/20 gap-0">
                        <div className="rounded-t-lg py-2 px-[5%] bg-brand-light-Cream">
                            <p className="text-lg sm:text-xl lg:text-2xl font-bold">
                                Order Summary
                            </p>
                        </div>

                        <div className="px-[5%] border-b border-brand-tan/65">
                            <div className="py-2 flex flex-col gap-1 border-b border-brand-beige/65">
                                {Object.entries(billData).map(([key, value]) => (
                                    <div
                                        key={key}
                                        className="flex flex-row justify-between px-2 text-xs sm:text-base font-semibold"
                                    >
                                        <p>{key}</p>
                                        <p>{value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between text-lg sm:text-2xl font-bold py-1.5">
                                <p>Total</p>
                                <p>₹ 50,956</p>
                            </div>
                        </div>

                        <div className="px-[4%] py-3">
                            <div className="bg-brand-light-Cream rounded-xl px-2 py-3">
                                <div className="flex gap-2 items-center">
                                    <TicketPercent
                                        strokeWidth={1.5}
                                        className="size-5 sm:size-6 shrink-0"
                                    />
                                    <p className="text-xs sm:text-base font-semibold">
                                        Have a Coupon Code?
                                    </p>
                                </div>

                                <form action="" className="flex gap-2 h-8 sm:h-10 mt-1.5">
                                    <input
                                        type="text"
                                        placeholder="Enter Coupon Code"
                                        className="min-w-0 flex-3 border border-brand-tan rounded-lg pl-2 sm:pl-3 text-xs sm:text-sm placeholder:text-xxs sm:placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-brand-rosewood transition-shadow duration-300"
                                    />

                                    <button
                                        type="submit"
                                        className="flex-1 bg-footer-gradient-start text-white rounded-lg w-full py-1.5 text-xs sm:text-sm hover:bg-brand-rosewood transition-colors duration-300"
                                    >
                                        Apply
                                    </button>
                                </form>
                            </div>

                            <button className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-footer-gradient-start text-white mt-3 rounded-lg text-sm sm:text-base font-semibold py-2 hover:bg-brand-rosewood hover:shadow-brand-soft transition-all duration-300">
                                Proceed to Checkout
                                <BiRightArrowAlt className="size-5 sm:size-6" />
                            </button>

                            <div className="my-2">
                                <div className="flex justify-center items-center gap-2 py-2">
                                    <Lock className="size-3.5 sm:size-4" />
                                    <p className="font-semibold text-xs sm:text-sm">
                                        Secure Checkout
                                    </p>
                                </div>

                                <div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                {/* dilevary process  */}
                <div
                    aria-label="Shopping benefits"
                    className={cn(
                        "my-4 w-full border-y border-brand-beige/70"
                    )}
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4">

                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;

                            return (
                                <Card
                                    key={benefit.id}
                                    className={cn(
                                        "group relative flex flex-row items-center justify-center gap-2 rounded-none border-0 bg-transparent px-2 py-4 shadow-none transition-all duration-300 hover:bg-brand-light-Cream/60 sm:gap-3 sm:py-5 lg:py-6",

                                        // Vertical separator for desktop
                                        index !== benefits.length - 1 &&
                                        "lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-3/5 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-brand-beige/80",

                                        // Vertical separator for mobile/tablet
                                        index % 2 === 0 &&
                                        "after:absolute after:right-0 after:top-1/2 after:h-3/5 after:w-px after:-translate-y-1/2 after:bg-brand-beige/80",

                                        // Horizontal separator for mobile/tablet
                                        index < 2 &&
                                        "before:absolute before:bottom-0 before:left-3 before:right-3 before:h-px before:bg-brand-beige/70 lg:before:hidden"
                                    )}
                                >
                                    <CardContent className="flex items-center gap-2 p-0 sm:gap-3">

                                        {/* Icon */}
                                        <div className="flex size-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-beige/30 sm:size-11">
                                            <Icon
                                                strokeWidth={1.4}
                                                className="size-6 text-brand-tan transition-all duration-300 group-hover:text-brand-rosewood sm:size-7"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex min-w-0 flex-col gap-0.5">
                                            <h3 className="text-xs font-semibold text-brand-heading-dark transition-colors duration-300 group-hover:text-brand-rosewood sm:text-sm lg:text-base">
                                                {benefit.title}
                                            </h3>

                                            <p className="text-xxs leading-relaxed text-brand-Brown sm:text-xs">
                                                {benefit.description}
                                            </p>
                                        </div>

                                    </CardContent>
                                </Card>
                            );
                        })}

                    </div>
                </div>
            </div>
        </section>
    );
}