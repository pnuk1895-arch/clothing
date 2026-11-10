"use client"

import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";

import {
    LuSprout,
    LuFlower2,
    LuGem,
    LuHeart,
    LuShoppingBag,
} from "react-icons/lu";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";


const whyShopData = [
    {
        id: 1,
        title: "Latest Trends",
        description: "Fresh styles every month",
        icon: LuSprout,
    },
    {
        id: 2,
        title: "Exclusive Designs",
        description: "Unique & limited pieces",
        icon: LuFlower2,
    },
    {
        id: 3,
        title: "Premium Fabrics",
        description: "Finest quality materials",
        icon: LuGem,
    },
    {
        id: 4,
        title: "Multiple Occasions",
        description: "For every celebration",
        icon: LuHeart,
    },
    {
        id: 5,
        title: "Easy Returns",
        description: "Hassle-free exchange",
        icon: LuShoppingBag,
    },
];

export default function WhyShopNewArrival() {
    return (
        <section style={{
            backgroundImage:"url('/Images/NewArrival/WhyShopNewArrival/WhyShopNewArrival.webp')"}} className="bg-cover bg-center bg-no-repeat">

            <div className="mx-auto w-[90%] max-w-content-area">

                {/* heading of the section */}
                <div>
                    <CardHeader className="text-2xl py-4 font-serif sm:text-3xl">
                        Why Shop New Arrival?
                    </CardHeader>
                </div>

                <div className="grid grid-cols-2 grid-rows-3 lg:grid-cols-5 lg:grid-rows-1 lg:py-4 overflow-visible">

                    <TooltipProvider>
                        {
                            whyShopData.map((way) => {
                                const Icon = way.icon;

                                return (
                                    <Tooltip key={String(way.id)}>

                                        <TooltipTrigger>

                                            <Card
                                                id={String(way.id)}
                                                className={cn(
                                                    "group  gap-0 items-center cursor-pointer",
                                                    "border-0 ring-0 shadow-none",
                                                    "transition-colors duration-500",
                                                    "hover:bg-transparent",
                                                    "overflow-visible",
                                                    way.id === whyShopData.length
                                                        ? "max-lg:col-span-2"
                                                        : ""
                                                )}
                                            >

                                                {/* Icon with 3D effect */}
                                                <CardContent className="
                                                    rounded-full p-2 bg-brand-beige
                                                    flex justify-center items-center lg:p-4
                                                    transition-all duration-500 ease-out
                                                    group-hover:scale-110
                                                    group-hover:-translate-y-1
                                                    group-hover:bg-brand-deep-burgundy
                                                    group-hover:shadow-[0px_0px_19px_16px_rgb(210,180,140)]

                                                ">

                                                    <Icon
                                                        className="
                                                            size-4 sm:size-6 lg:size-8
                                                            text-brand-deep-burgundy
                                                            transition-all duration-500 ease-out
                                                            group-hover:text-brand-light-Cream
                                                            group-hover:scale-110
                                                            group-hover:drop-shadow-[0_3px_2px_rgba(0,0,0,0.25)]
                                                        "
                                                    />

                                                </CardContent>

                                                {/* Title with depth effect */}
                                                <CardTitle className="
                                                    text-brand-deep-burgundy
                                                    text-xs sm:text-base lg:text-lg
                                                    transition-all duration-500 ease-out
                                                    group-hover:scale-x-110
                                                    group-hover:drop-shadow-[0_3px_2px_rgba(0,0,0,0.25)]

                                                ">

                                                    {way.title}

                                                </CardTitle>

                                                {/* Description */}
                                                <CardDescription className="
                                                    text-brand-tan
                                                    text-xs sm:text-base lg:text-lg
                                                    transition-all duration-500 ease-out
                                                    group-hover:drop-shadow-[0_3px_2px_rgba(0,0,0,0.25)]
                                                    group-hover:scale-x-105
                                                ">

                                                    {way.description}

                                                </CardDescription>

                                            </Card>

                                        </TooltipTrigger>

                                    </Tooltip>
                                );
                            })
                        }
                    </TooltipProvider>

                </div>
            </div>
        </section>
    );
}
