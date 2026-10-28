"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
    FiArrowRight,
    FiArrowUpRight,
    FiChevronLeft,
    FiChevronRight,
} from "react-icons/fi";
import {
    GiFlowerEmblem,
} from "react-icons/gi";
import { cn } from "@/lib/utils";
import Title from "../ui/title";
import Image from "next/image";
import BottomEditorial from "../ui/BottomEditorial";
import ViewAll from "../ui/viewAll"

const occasions = [
    {
        title: "Wedding Wear",
        subtitle: "For the big day",
        image:
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=85",
        href: "/collections/wedding-wear",
        accent: "from-brand-rosewood/15",
    },
    {
        title: "Festive Wear",
        subtitle: "Celebrate in style",
        image:
            "https://images.unsplash.com/photo-1583391733956-6c78276477e8?auto=format&fit=crop&w=700&q=85",
        href: "/collections/festive-wear",
        accent: "from-brand-tan/20",
    },
    {
        title: "Party Wear",
        subtitle: "Make every night special",
        image:
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=85",
        href: "/collections/party-wear",
        accent: "from-brand-Brown/20",
    },
    {
        title: "Engagement",
        subtitle: "Elegant beginnings",
        image:
            "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=700&q=85",
        href: "/collections/engagement",
        accent: "from-brand-beige/25",
    },
    {
        title: "Mehendi",
        subtitle: "Vibrant and joyful",
        image:
            "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=85",
        href: "/collections/mehendi",
        accent: "from-brand-rosewood/15",
    },
    {
        title: "Reception",
        subtitle: "Graceful ensembles",
        image:
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=85",
        href: "/collections/reception",
        accent: "from-brand-tan/20",
    },
];

const SectionDetail = {
    TopHeading: "Shop by occasion",
    MainTitle: {
        First: `Find Your ${" "}`,
        Second: "Perfect Look",
    },
    MainContent: "Outfits curated for every celebration, from intimate gatherings to grand occasions.",
    ViewTitle: "View All Occasions",
}

const BottomDetail = {
    icon: true,
    IconType: GiFlowerEmblem,
    Text: "Crafted for your moments"
}

export default function FindPerfectLook() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);



    //  interaction  observation
    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const scrollCards = (direction: number) => {
        if (!trackRef.current) return;

        const track = trackRef.current;
        const card = track.querySelector("[data-occasion-card]");
        const distance = card ? card.getBoundingClientRect().width + 20 : 280;
        track.scrollBy({
            left: direction * distance,
            behavior: "smooth",
        });
    };

    return (
        <section
            ref={sectionRef}
            aria-labelledby="perfect-look-heading"
            className="relative isolate overflow-hidden bg-brand-cream py-14 sm:py-16 lg:py-20"
        >
            {/* Soft transition from the hero section */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-perfect-look-top-glow"
            />

            {/* Warm decorative glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-32 -z-10 size-80 rounded-full bg-brand-beige/25 blur-[100px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 bottom-0 -z-10 size-96 rounded-full bg-brand-tan/15 blur-[110px]"
            />

            {/* Decorative side ornaments */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-8 top-36 -z-10 hidden select-none font-serif text-[250px] leading-none text-brand-tan/10 lg:block"
            >
                ❧
            </div>
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 bottom-10 -z-10 hidden select-none font-serif text-[250px] leading-none text-brand-tan/10 lg:block"
            >
                ❧
            </div>

            <div className="mx-auto w-[90%] max-w-content-area">
                {/* Section heading */}
                <div
                    className={cn(
                        "mb-7 flex flex-col justify-between h-full gap-5 sm:mb-9 md:flex-row md:items-end",
                        "transition-all duration-700 ease-out",
                        visible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    )}
                >
                    <Title SectionDetail={SectionDetail} />
                    <div className="flex items-center justify-between gap-4 md:flex-col md:items-end lg:self-center md:self-stretch md:pt-5">
                        <ViewAll link="/" Text="View All Occasions" />
                        <div className="flex items-center gap-2 lg:hidden">
                            <button
                                type="button"
                                aria-label="Scroll occasions left"
                                onClick={() => scrollCards(-1)}
                                className="flex size-9 items-center justify-center rounded-full border border-brand-tan/40 bg-white/70 text-brand-Brown shadow-sm transition-all duration-300 hover:border-brand-rosewood hover:bg-brand-rosewood hover:text-white active:scale-95"
                            >
                                <FiChevronLeft size={17} />
                            </button>

                            <button
                                type="button"
                                aria-label="Scroll occasions right"
                                onClick={() => scrollCards(1)}
                                className="flex size-9 items-center justify-center rounded-full border border-brand-tan/40 bg-white/70 text-brand-Brown shadow-sm transition-all duration-300 hover:border-brand-rosewood hover:bg-brand-rosewood hover:text-white active:scale-95"
                            >
                                <FiChevronRight size={17} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Occasion cards */}
                <div
                    ref={trackRef}
                    className={cn(
                        "grid grid-flow-col auto-cols-[72%] gap-4 overflow-x-auto pb-5",
                        "snap-x snap-mandatory scroll-smooth",
                        "sm:auto-cols-[42%] sm:gap-5",
                        "lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-3 lg:gap-5",
                        "xl:grid-cols-6 xl:gap-4",
                        "scrollbar-none [&::-webkit-scrollbar]:hidden"
                    )}
                >
                    {occasions.map((occasion, index) => {
                        // const Icon = occasion.icon;

                        return (
                            <Link
                                key={occasion.title}
                                href={occasion.href}
                                data-occasion-card
                                className={cn(
                                    "group relative snap-start overflow-hidden rounded-t-[999px] rounded-b-xl",
                                    "border border-brand-tan/25 bg-brand-cream/60",
                                    "shadow-brand-soft",
                                    "transition-all duration-700 ease-out",
                                    "hover:-translate-y-2 hover:border-brand-tan/70",
                                    "hover:shadow-brand-soft",
                                    visible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-10 opacity-0"
                                )}
                                style={{
                                    transitionDelay: `${index * 90}ms`,
                                }}
                            >
                                {/* Image */}
                                <div className="relative aspect-[0.79] overflow-hidden rounded-t-[999px] bg-brand-soft-card-Beige">
                                    <Image
                                        src={occasion.image}
                                        alt={`${occasion.title} collection`}
                                        fill
                                        sizes="90vw"
                                        loading="lazy"
                                        className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                                    />

                                    {/* Coordinated image overlays */}
                                    <div
                                        className={cn(
                                            "absolute inset-0 bg-linear-to-t",
                                            occasion.accent,
                                            "via-transparent via-35% to-brand-heading-dark/65"
                                        )}
                                    />

                                    <div className="absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-brand-heading-dark/10 to-transparent" />

                                    {/* Image caption */}
                                    <div className="absolute inset-x-0 bottom-0 p-4 text-center sm:p-5">
                                        <span className="mb-1 block text-[9px] font-medium uppercase tracking-[0.2em] text-white/80 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                            Discover the collection
                                        </span>

                                        <h3 className="font-serif text-xl font-medium leading-tight text-white drop-shadow-sm sm:text-2xl xl:text-lg">
                                            {occasion.title}
                                        </h3>

                                        <p className="mt-1 text-[10px] text-white/85 sm:text-xs">
                                            {occasion.subtitle}
                                        </p>

                                        <span className="mx-auto mt-3 flex size-8 translate-y-3 items-center justify-center rounded-full border border-white/60 bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                            <FiArrowUpRight size={16} />
                                        </span>
                                    </div>
                                </div>

                                {/* Card footer */}
                                <div className="flex items-center justify-between gap-2 bg-occasion-card-footer px-3 py-3 sm:px-4">
                                    <div className="min-w-0">
                                        <p className="truncate text-xs font-semibold text-brand-rosewood sm:text-sm">
                                            {occasion.title}
                                        </p>
                                        <p className="mt-1 truncate text-[10px] text-brand-Brown/75 sm:text-xs">
                                            {occasion.subtitle}
                                        </p>
                                    </div>

                                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-brand-tan/40 text-brand-rosewood transition-all duration-300 group-hover:border-brand-rosewood group-hover:bg-brand-rosewood group-hover:text-white">
                                        <FiArrowRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <BottomEditorial BottomDetail={{ ...BottomDetail, visible }} />
            </div>
        </section>
    );
}
