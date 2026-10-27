"use client";

import { useEffect, useRef, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Quote,
    Star,
    Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
    name: string;
    location: string;
    occasion: string;
    review: string;
    image: string;
    rating: number;
};

const testimonials: Testimonial[] = [
    {
        name: "Priya Mehta",
        location: "New Delhi, India",
        occasion: "Wedding Collection",
        review:
            "Absolutely loved my outfit! The custom stitching and intricate embroidery made it feel truly special. The entire experience was beautiful.",
        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
        rating: 5,
    },
    {
        name: "Ananya Sharma",
        location: "Jaipur, India",
        occasion: "Custom Tailoring",
        review:
            "The team understood exactly what I wanted. The fabric, fitting, and finishing were exceptional. My outfit was perfect for my special day.",
        image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&q=80",
        rating: 5,
    },
    {
        name: "Rohan Kapoor",
        location: "Mumbai, India",
        occasion: "Groom Collection",
        review:
            "Beautiful craftsmanship and premium quality. My sherwani fitted perfectly, and the styling guidance made the whole process effortless.",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
        rating: 5,
    },
    {
        name: "Kavya Malhotra",
        location: "Chandigarh, India",
        occasion: "Festive Wear",
        review:
            "The detailing was even more beautiful in person. I received so many compliments, and the outfit felt comfortable throughout the event.",
        image:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=160&q=80",
        rating: 5,
    },
    {
        name: "Meera Khanna",
        location: "Gurugram, India",
        occasion: "Designer Lehenga",
        review:
            "From choosing the fabric to the final fitting, every detail was handled with care. SILAAH made my occasion feel even more memorable.",
        image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80",
        rating: 5,
    },
];

const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
};

export default function WhatOurCustomersSay() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [visibleCount, setVisibleCount] = useState(3);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateLayout = () => {
            setVisibleCount(getVisibleCount());
        };

        updateLayout();
        window.addEventListener("resize", updateLayout);

        return () => window.removeEventListener("resize", updateLayout);
    }, []);

    useEffect(() => {
        setActiveIndex((current) =>
            Math.min(current, testimonials.length - visibleCount)
        );
    }, [visibleCount]);

    useEffect(() => {
        const element = sectionRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const maxIndex = testimonials.length - visibleCount;

    const previous = () => {
        setActiveIndex((current) =>
            current <= 0 ? maxIndex : current - 1
        );
    };

    const next = () => {
        setActiveIndex((current) =>
            current >= maxIndex ? 0 : current + 1
        );
    };

    return (
        <section
            ref={sectionRef}
            aria-labelledby="customer-stories-title"
            className={cn(
                "customer-stories-bg relative isolate overflow-hidden",
                "py-14 sm:py-16 lg:py-20"
            )}
        >
            {/* Soft overlay blends the artwork with adjacent sections */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-customer-overlay"
            />

            <div className="mx-auto w-[90%] max-w-content-area">
                {/* Section heading and navigation */}
                <div
                    className={cn(
                        "mb-8 flex items-end justify-between gap-5 sm:mb-10",
                        "transition-all duration-1000",
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    )}
                >
                    <div className="max-w-2xl">
                        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-tan">
                            <Sparkles size={14} />
                            Real stories
                        </span>

                        <h2
                            id="customer-stories-title"
                            className="font-serif text-3xl leading-tight text-brand-heading-dark sm:text-4xl lg:text-5xl"
                        >
                            What Our{" "}
                            <span className="italic text-brand-rosewood">
                                Customers Say
                            </span>
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-brand-muted-rosewood sm:text-base">
                            Real experiences, thoughtful craftsmanship, and
                            unforgettable moments in every outfit.
                        </p>
                    </div>

                    {/* Matching circular left/right controls */}
                    <div className="flex shrink-0 items-center gap-2">
                        <button
                            type="button"
                            onClick={previous}
                            aria-label="Previous customer reviews"
                            className={cn(
                                "group flex size-10 items-center justify-center rounded-full",
                                "border border-brand-beige bg-customer-control text-brand-Brown",
                                "transition-all duration-300",
                                "hover:-translate-x-1 hover:border-brand-rosewood",
                                "hover:bg-brand-rosewood hover:text-white hover:shadow-lg",
                                "focus-visible:outline-none focus-visible:ring-2",
                                "focus-visible:ring-brand-rosewood focus-visible:ring-offset-2"
                            )}
                        >
                            <ArrowLeft
                                size={17}
                                className="transition-transform duration-300 group-hover:-translate-x-0.5"
                            />
                        </button>

                        <button
                            type="button"
                            onClick={next}
                            aria-label="Next customer reviews"
                            className={cn(
                                "group flex size-10 items-center justify-center rounded-full",
                                "border border-brand-beige bg-customer-control text-brand-Brown",
                                "transition-all duration-300",
                                "hover:translate-x-1 hover:border-brand-rosewood",
                                "hover:bg-brand-rosewood hover:text-white hover:shadow-lg",
                                "focus-visible:outline-none focus-visible:ring-2",
                                "focus-visible:ring-brand-rosewood focus-visible:ring-offset-2"
                            )}
                        >
                            <ArrowRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-0.5"
                            />
                        </button>
                    </div>
                </div>

                {/* Testimonial carousel */}
                <div className="overflow-hidden">
                    <div
                        className="flex items-stretch transition-transform duration-700 ease-in-out motion-reduce:transition-none"
                        style={{
                            transform: `translateX(calc(${activeIndex} * -1 * (100% + 1rem) / ${visibleCount}))`,
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <article
                                key={testimonial.name}
                                className={cn(
                                    "group relative flex shrink-0 flex-col",
                                    "w-full min-w-0 pr-0 sm:pr-0",
                                    "rounded-2xl border border-customer-card-border",
                                    "bg-customer-card p-5 shadow-customer-card",
                                    "transition-all duration-500",
                                    "hover:-translate-y-2 hover:border-brand-tan",
                                    "hover:bg-brand-cream hover:shadow-customer-card-hover",
                                    "sm:p-6",
                                    isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-10 opacity-0"
                                )}
                                style={{
                                    width: `calc((100% - ${(visibleCount - 1) * 16}px) / ${visibleCount})`,
                                    marginRight: index === testimonials.length - 1 ? 0 : 16,
                                    transitionDelay: isVisible
                                        ? `${(index % visibleCount) * 120}ms`
                                        : "0ms",
                                }}
                            >
                                {/* Decorative quote */}
                                <Quote
                                    aria-hidden="true"
                                    className="absolute right-5 top-5 size-9 rotate-180 text-customer-quote transition-transform duration-500 group-hover:scale-110 group-hover:text-brand-beige"
                                    strokeWidth={1.5}
                                />

                                {/* Stars */}
                                <div
                                    className="mb-5 flex items-center gap-1"
                                    aria-label={`${testimonial.rating} out of 5 stars`}
                                >
                                    {Array.from({ length: testimonial.rating }).map(
                                        (_, starIndex) => (
                                            <Star
                                                key={starIndex}
                                                size={15}
                                                fill="currentColor"
                                                strokeWidth={1}
                                                className="text-customer-star"
                                            />
                                        )
                                    )}
                                </div>

                                <span className="mb-3 w-fit rounded-full bg-brand-light-Cream px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-muted-rosewood">
                                    {testimonial.occasion}
                                </span>

                                <blockquote className="flex-1 text-sm leading-7 text-brand-Brown sm:text-base">
                                    “{testimonial.review}”
                                </blockquote>

                                <div className="my-5 h-px bg-linear-to-r from-brand-beige via-brand-beige/50 to-transparent" />

                                {/* Customer profile */}
                                <div className="flex items-center gap-3">
                                    <div className="size-12 shrink-0 overflow-hidden rounded-full border-2 border-brand-beige p-0.5">
                                        <img
                                            src={testimonial.image}
                                            alt=""
                                            loading="lazy"
                                            className="size-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="truncate text-sm font-semibold text-brand-heading-dark">
                                            {testimonial.name}
                                        </h3>
                                        <p className="mt-1 text-xs text-brand-muted-rosewood">
                                            Verified customer
                                        </p>
                                        <p className="mt-1 truncate text-xs text-brand-muted-rosewood">
                                            {testimonial.location}
                                        </p>
                                    </div>

                                    <Sparkles
                                        size={17}
                                        className="ml-auto shrink-0 text-brand-tan opacity-60 transition-all duration-300 group-hover:rotate-12 group-hover:opacity-100"
                                    />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Carousel pagination */}
                <div className="mt-8 flex items-center justify-center gap-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Show customer reviews starting at position ${index + 1}`}
                            aria-current={activeIndex === index ? "true" : undefined}
                            className={cn(
                                "h-2 rounded-full transition-all duration-300",
                                activeIndex === index
                                    ? "w-8 bg-brand-rosewood"
                                    : "w-2 bg-brand-beige hover:bg-brand-tan"
                            )}
                        />
                    ))}
                </div>

                <p className="mt-4 text-center text-xs tracking-wide text-brand-muted-rosewood">
                    Crafted with care. Worn with confidence.
                </p>
            </div>
        </section>
    );
}