
"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Card, CardDescription, CardTitle, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";

const OccasionItems = [
    {
        Image: "/Images/Occasion/OccasionThatMatter/items/wedding.png",
        alt: "wedding Image",
        Occasion: "Weddings",
        Description: "A Celebration for a lifetime"
    },
    {
        Image: "/Images/Occasion/OccasionThatMatter/items/wedding.png",
        alt: "wedding Image",
        Occasion: "Weddings",
        Description: "A Celebration for a lifetime"
    },
    {
        Image: "/Images/Occasion/OccasionThatMatter/items/wedding.png",
        alt: "wedding Image",
        Occasion: "Weddings",
        Description: "A Celebration for a lifetime"
    },
    {
        Image: "/Images/Occasion/OccasionThatMatter/items/wedding.png",
        alt: "wedding Image",
        Occasion: "Weddings",
        Description: "A Celebration for a lifetime"
    },
    {
        Image: "/Images/Occasion/OccasionThatMatter/items/wedding.png",
        alt: "wedding Image",
        Occasion: "Weddings",
        Description: "A Celebration for a lifetime"
    },
]

export default function OccasionThatMatter() {

    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        observer.observe(section);

        return () => observer.disconnect();

    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative isolate overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/Images/Occasion/OccasionThatMatter/bg-Image.png"
                    alt="bg-design"
                    fill
                    sizes="100vw"
                    className="object-fill"
                />
            </div>

            <div className="py-5 sm:py-8 lg:py-12">

                {/* Heading */}
                <div
                    className={`w-[90%] max-w-content-area mx-auto transition-all duration-700 ease-out motion-reduce:transition-none ${isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                        }`}
                >
                    <CardTitle className="font-serif text-2xl text-brand-heading-dark sm:text-4xl lg:text-5xl">
                        Occasions That Matter
                    </CardTitle>

                    <CardContent className="flex flex-col p-0 sm:pt-2 font-serif text-xs font-light leading-5 text-brand-muted-rosewood sm:text-base tracking-wide sm:leading-6 lg:text-xl">
                        Every Celebration has a story.
                        <span>Find the perfect ensemble for yours.</span>
                    </CardContent>
                </div>

                {/* Occasion Cards */}
                <div className="mt-5 flex 2xl:max-w-content-area 2xl:mx-auto 2xl:w-[90%] w-full flex-nowrap gap-4 overflow-x-auto overflow-y-hidden max-2xl:px-[5%] py-4 scrollbar-none scroll-smooth overscroll-x-contain sm:gap-5 lg:gap-7">

                    {OccasionItems.map((Items, index) => (

                        <Card
                            key={index}
                            style={{
                                transitionDelay: `${index * 100}ms`
                            }}
                            className={`group relative z-10 flex h-60 w-36 shrink-0 snap-start flex-col overflow-hidden rounded-t-full border-0 bg-transparent p-0 shadow-brand-soft transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-brand-soft motion-reduce:transition-none xs:h-64 xs:w-40 sm:h-72 sm:w-48 md:h-80 md:w-52 lg:h-88 lg:w-60 ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                                }`}
                        >

                            {/* Card Image */}
                            <div className="absolute inset-0 overflow-hidden rounded-t-full">

                                <Image
                                    src={Items.Image}
                                    alt={Items.alt}
                                    fill
                                    loading={index === 0 ? "eager" : "lazy"}
                                    sizes="(max-width: 425px) 144px, (max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 208px, 240px"
                                    className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110 motion-reduce:transition-none"
                                />

                            </div>

                            {/* Text Overlay */}
                            <div className="relative z-10 mt-auto flex w-full items-end justify-between gap-2 bg-linear-to-t from-brand-deep-burgundy/95 via-brand-deep-burgundy/45 to-transparent px-3 pb-5 pt-16 transition-all duration-500 group-hover:pb-7 sm:px-4 sm:pb-6">

                                {/* Text */}
                                <div className="min-w-0 flex-1">
                                    <CardTitle className="font-serif text-sm text-brand-cream transition-colors duration-300 group-hover:text-footer-gold sm:text-base lg:text-lg">
                                        {Items.Occasion}
                                    </CardTitle>

                                    <CardDescription className="line-clamp-2 text-xs leading-relaxed text-brand-beige sm:text-sm">
                                        {Items.Description}
                                    </CardDescription>
                                </div>

                                {/* Arrow */}
                                <div className="mb-1 flex size-7 shrink-0 translate-x-0 items-center justify-center rounded-full bg-brand-cream text-brand-rosewood shadow-brand-soft transition-all duration-300 ease-out sm:size-8 lg:translate-x-2 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100">
                                    <ArrowRight className="size-3.5 sm:size-4" />
                                </div>

                            </div>
                        </Card>

                    ))}

                </div>
            </div>
        </section>
    )
}
