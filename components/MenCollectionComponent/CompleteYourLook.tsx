
"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Button } from "../ui/button"
import {
    Card,
    CardTitle,
    CardDescription,
} from "../ui/card"
import { ArrowRight } from "lucide-react"

const MenAccessories = [
    {
        image: "/Images/Men/MenAccessorie/Brooches.png",
        alt: "Brooches",
        title: "Brooches"
    },
    {
        image: "/Images/Men/MenAccessorie/turban.png",
        alt: "Turban",
        title: "Turban"
    },
    {
        image: "/Images/Men/MenAccessorie/shoes.png",
        alt: "Mojaris",
        title: "Mojaris"
    },
    {
        image: "/Images/Men/MenAccessorie/stoles.png",
        alt: "Stoles",
        title: "Stoles"
    },
]

export default function CompleteYourLook() {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -40px 0px",
            }
        )

        observer.observe(section)

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="grid grid-cols-1 items-start overflow-hidden lg:grid-cols-2 bg-brand-"
        >
            {/* Complete Your Look */}
            <div
                className={`w-[90%] max-w-content-area lg:max-w-[calc(var(--content-area)/2)] mx-auto flex flex-col justify-center self-start py-6 font-serif lg:ml-auto lg:mr-0 transition-all duration-700 ease-out motion-reduce:transition-none ${isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
            >
                {/* Heading and Description */}
                <div className="w-full text-left">
                    <CardTitle className="text-2xl font-medium leading-tight text-brand-heading-dark transition-colors duration-300 hover:text-brand-rosewood sm:text-3xl lg:text-4xl">
                        Complete Your Look
                    </CardTitle>

                    <CardDescription className="mt-2 text-sm font-light leading-relaxed text-brand-muted-rosewood sm:text-base lg:text-lg">
                        Accessories that add the perfect finishing touch.
                    </CardDescription>
                </div>

                {/* Accessories */}
                <div className="mt-6 grid grid-cols-4 items-start gap-2 sm:mt-8 sm:gap-4">
                    {MenAccessories.map((material, index) => (
                        <Card
                            key={index}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            className={`flex min-w-0 flex-col items-center gap-2 border-0 bg-transparent p-2 text-center shadow-none transition-all duration-500 ease-out ${isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-5 opacity-0"
                                }`}
                        >
                            <div className="relative size-16 overflow-visible rounded-full bg-brand-light-Cream transition-transform duration-500 hover:scale-105 sm:size-22 md:size-26 lg:size-30">
                                <Image
                                    src={material.image}
                                    alt={material.alt}
                                    fill
                                    loading="eager"
                                    sizes="(max-width: 640px) 64px, 120px"
                                    className="rounded-full object-cover"
                                />
                            </div>

                            <CardTitle className="text-center text-xs font-medium text-brand-Brown transition-colors duration-300 hover:text-brand-rosewood sm:text-sm lg:text-base">
                                {material.title}
                            </CardTitle>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Custom Tailoring */}
            <div
                className={`relative isolate h-full overflow-visible transition-all duration-1000 ease-out motion-reduce:transition-none ${isVisible
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
            >
                <Image
                    src="/Images/Men/CustomTailoring.webp"
                    alt="Bg-of-custom-tailoring"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="eager"
                    className="absolute object-fit object-right transition-transform duration-1000"
                />

                <div className="relative z-10 mx-auto flex w-[90%] max-w-content-area items-center justify-start py-6 sm:py-8 lg:py-8">
                    <Card className="flex w-5/7 max-w-md flex-col items-start gap-2 overflow-visible border-0 py-4 text-left font-serif  transition-all duration-500 hover:-translate-y-1 sm:gap-3 sm:py-6">
                        <CardTitle className="flex flex-col text-xl font-medium leading-tight text-brand-heading-dark sm:text-3xl lg:text-3xl xl:text-4xl">
                            Custom Tailoring
                            <span>Made For You</span>
                        </CardTitle>

                        <CardDescription className="text-xs font-light leading-relaxed text-brand-muted-rosewood sm:text-base lg:text-lg">
                            From fabric selection to final fitting, get a custom outfit that matches your style and occasion.
                        </CardDescription>

                        <Button className="group my-2 w-fit rounded-lg bg-brand-Brown p-3 text-sm text-brand-cream transition-all duration-300 hover:scale-105 hover:bg-brand-rosewood hover:text-footer-foreground sm:text-base lg:text-lg">
                            Book a Consultation
                            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    )
}
