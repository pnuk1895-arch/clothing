
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
    {
        eyebrow: "TRADITION IN EVERY THREAD",
        title: `Celebrate Every `,
        emphasis: "Occasion in Style",
        description:
            "Explore our exquisite collection of ethnic and contemporary outfits crafted for your most memorable moments.",
        image: "/Images/HeroImages/heroImage.webp",
        alt: "Bride wearing an embroidered burgundy bridal lehenga",
        sideTitle: "Timeless Outfits for Your Special Moments",
    },
    {
        eyebrow: "CRAFTED WITH LOVE",
        title: "Elegance That Speaks",
        emphasis: "of You",
        description:
            "Discover thoughtfully designed outfits that bring together timeless Indian craftsmanship and modern elegance.",
        image: "/Images/HeroImages/heroImage2.webp",
        alt: "Elegant Indian occasion-wear fashion",
        sideTitle: "Discover Your Signature Style",
    },
    {
        eyebrow: "YOUR MOMENT, YOUR STYLE",
        title: "Make Every Moment",
        emphasis: "Unforgettable",
        description:
            "From intimate celebrations to grand weddings, find the outfit that makes your moment truly yours.",
        image: "/Images/HeroImages/heroImage3.webp",
        alt: "Luxury ethnic wear for special occasions",
        sideTitle: "Designed for Moments That Matter",
    },
];

const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "500+", label: "Exclusive Designs" },
    { value: "4.8", label: "Customer Rating", rating: true },
    { value: "Pan India", label: "Delivery" },
];

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const element = sectionRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.12 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const slide = slides[activeSlide];

    const goToSlide = (direction: number) => {
        setActiveSlide((current) =>
            (current + direction + slides.length) % slides.length
        );
    };

    return (
        <section
            ref={sectionRef}
            aria-label="SILAAH occasion wear collection"
            className={cn(
                "relative isolate w-full overflow-hidden",
                "min-h-172.5 bg-brand-cream",
                "sm:min-h-185 lg:min-h-190 lg:h-screen",
                "flex items-center"
            )}
        >
            {/* Hero image background */}


            <div className="absolute inset-0 -z-20  overflow-hidden">
                <Image
                    key={slide.image}
                    src={slide.image}
                    alt={slide.alt}
                    loading="eager"
                    fill
                    priority
                    sizes="100vw"
                    className={cn(
                        "object-cover object-[65%_center]",
                        "transition-transform duration-1000 ease-out",
                        "animate-[heroImageIn_900ms_ease-out_both]",
                        "max-lg:object-[40%_center]",
                        "max-md:object-[60%_center]"
                    )}
                />
            </div>


            {/* Ivory overlay keeps text readable */}
            <div
                aria-hidden="true"
                className={cn(
                    "absolute inset-0 right-1/2 -z-10",
                    // "bg-hero-overlay",
                    "max-lg:bg-hero-overlay-tablet",
                    "max-md:bg-hero-overlay-mobile"
                )}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-hero-bottom-fade"
            />

            {/* Soft burgundy accent on the right
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-24 bg-hero-right-accent lg:block"
            /> */}

            {/* Decorative side detail */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 -z-10 hidden h-full w-20 bg-hero-left-accent xl:block"
            />

            <div className="mx-auto w-[90%] max-w-content-area pb-12 pt-28 sm:pb-14 sm:pt-32 lg:pb-20 lg:pt-36">
                <div
                    className={cn(
                        "grid items-center gap-8",
                        "lg:grid-cols-[0.95fr_1.05fr]",
                        "xl:grid-cols-[1fr_1fr]"
                    )}
                >
                    {/* Content */}
                    <div
                        className={cn(
                            "relative z-10 max-w-xl",
                            "transition-all duration-700 ease-out",
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                        )}
                    >
                        <p className="mb-5 inline-flex max-w-full items-center rounded-xl border border-brand-tan/35 bg-linear-to-r from-brand-cream/95 via-brand-light-cream/85 to-brand-beige/55 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-brown shadow-brand-soft backdrop-blur-xl sm:mb-6 sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.28em]">
                            {slide.eyebrow}
                        </p>

                        <h1 className="font-serif text-4xl leading-[1.08] tracking-tight text-brand-heading-dark sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                            {slide.title}
                            <span className="mt-1 block italic text-brand-rosewood">
                                {slide.emphasis}
                            </span>
                        </h1>

                        <p className="mt-5 max-w-md text-sm leading-7 text-brand-heading-dark/85 sm:text-base font-semibold sm:leading-8">
                            {slide.description}
                        </p>

                        {/* Calls to action */}
                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <Link
                                href="/collections"
                                className={cn(
                                    "group inline-flex min-h-11 items-center justify-center gap-2",
                                    "bg-header-burgundy px-5 py-3 text-xs font-medium text-brand-cream",
                                    "transition-all duration-300",
                                    "hover:-translate-y-0.5 hover:bg-brand-rosewood",
                                    "hover:shadow-lg hover:shadow-header-burgundy/20",
                                    "focus-visible:outline-none focus-visible:ring-2",
                                    "focus-visible:ring-brand-tan focus-visible:ring-offset-2"
                                )}
                            >
                                Shop Collection
                                <ArrowRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>

                            <Link
                                href="/occasion-wear"
                                className={cn(
                                    "group inline-flex min-h-11 items-center justify-center gap-2",
                                    "border border-brand-muted-rosewood/70 bg-brand-cream/75",
                                    "px-5 py-3 text-xs font-medium text-header-burgundy",
                                    "backdrop-blur-sm transition-all duration-300",
                                    "hover:-translate-y-0.5 hover:border-header-burgundy",
                                    "hover:bg-header-burgundy hover:text-brand-cream",
                                    "focus-visible:outline-none focus-visible:ring-2",
                                    "focus-visible:ring-brand-tan focus-visible:ring-offset-2"
                                )}
                            >
                                Explore Occasion
                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>
                        </div>

                        {/* Trust statistics */}
                        <div className="mt-9 grid max-w-lg grid-cols-2 gap-x-5 gap-y-5 border-t border-brand-tan/35 pt-5 sm:grid-cols-4 sm:gap-x-4">
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className={cn(
                                        "transition-all duration-500",
                                        isVisible
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-3 opacity-0"
                                    )}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-center gap-1 text-base font-semibold text-brand-rosewood sm:text-lg">
                                        {stat.value}
                                        {stat.rating && (
                                            <Star
                                                size={13}
                                                fill="currentColor"
                                                strokeWidth={1}
                                            />
                                        )}
                                    </div>
                                    <p className="mt-1 text-[10px] leading-4 text-brand-brown/85 sm:text-xs">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right-side slide details and controls */}
                    <div className="relative hidden min-h-95 items-end justify-end lg:flex xl:min-h-110">
                        <div
                            key={slide.sideTitle}
                            className={cn(
                                "mb-20 mr-1 max-w-32 text-right",
                                "animate-[heroTextIn_700ms_ease-out_both]",
                                "text-xs font-bold uppercase leading-6 tracking-[0.18em]",
                                "bg-linear-to-r from-brand-heading-dark/60 via-brand-heading-dark/70 to-brand-heading-dark/80",
                                "bg-clip-text text-transparent"
                            )}
                        >
                            {slide.sideTitle}
                        </div>

                        <div className="absolute bottom-2 right-0 flex items-center gap-2">
                            <button
                                type="button"
                                aria-label="Previous hero slide"
                                onClick={() => goToSlide(-1)}
                                className={cn(
                                    "flex size-10 items-center justify-center rounded-full",
                                    "border border-brand-beige bg-brand-cream/90 text-brand-rosewood",
                                    "transition-all duration-300",
                                    "hover:scale-105 hover:bg-header-burgundy hover:text-brand-cream",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-tan"
                                )}
                            >
                                <ArrowLeft size={17} />
                            </button>

                            {slides.map((item, index) => (
                                <button
                                    type="button"
                                    key={item.eyebrow}
                                    aria-label={`Show slide ${index + 1}`}
                                    aria-current={activeSlide === index ? "true" : undefined}
                                    onClick={() => setActiveSlide(index)}
                                    className={cn(
                                        "relative size-11 overflow-hidden rounded-full border-2",
                                        "transition-all duration-300 hover:scale-105",
                                        activeSlide === index
                                            ? "border-brand-rosewood ring-2 ring-brand-cream"
                                            : "border-brand-cream/80 opacity-70 hover:opacity-100"
                                    )}
                                >
                                    <Image
                                        src={item.image}
                                        alt=""
                                        fill
                                        sizes="44px"
                                        className="object-cover object-[65%_center]"
                                    />
                                </button>
                            ))}

                            <button
                                type="button"
                                aria-label="Next hero slide"
                                onClick={() => goToSlide(1)}
                                className={cn(
                                    "flex size-10 items-center justify-center rounded-full",
                                    "border border-brand-beige bg-brand-cream/90 text-brand-rosewood",
                                    "transition-all duration-300",
                                    "hover:scale-105 hover:bg-header-burgundy hover:text-brand-cream",
                                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-tan"
                                )}
                            >
                                <ArrowRight size={17} />
                            </button>
                        </div>
                    </div>

                    {/* Mobile carousel controls */}
                    <div className="flex items-center justify-between lg:hidden">
                        <div className="flex gap-2">
                            {slides.map((item, index) => (
                                <button
                                    key={item.eyebrow}
                                    type="button"
                                    aria-label={`Show slide ${index + 1}`}
                                    aria-current={activeSlide === index ? "true" : undefined}
                                    onClick={() => setActiveSlide(index)}
                                    className={cn(
                                        "h-1.5 rounded-full transition-all duration-300",
                                        activeSlide === index
                                            ? "w-8 bg-brand-rosewood"
                                            : "w-3 bg-brand-tan/60"
                                    )}
                                />
                            ))}
                        </div>

                        <div className="flex gap-2">
                            <button
                                type="button"
                                aria-label="Previous hero slide"
                                onClick={() => goToSlide(-1)}
                                className="flex size-9 items-center justify-center rounded-full border border-brand-beige bg-brand-cream text-brand-rosewood transition hover:bg-header-burgundy hover:text-brand-cream"
                            >
                                <ArrowLeft size={16} />
                            </button>
                            <button
                                type="button"
                                aria-label="Next hero slide"
                                onClick={() => goToSlide(1)}
                                className="flex size-9 items-center justify-center rounded-full border border-brand-beige bg-brand-cream text-brand-rosewood transition hover:bg-header-burgundy hover:text-brand-cream"
                            >
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
