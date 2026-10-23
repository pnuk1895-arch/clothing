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
    GiDiamondRing,
    GiDress,
    GiFlowerEmblem,
    GiHeartNecklace,
} from "react-icons/gi";
import { cn } from "@/lib/utils";

const occasions = [
    {
        title: "Wedding Wear",
        subtitle: "For the big day",
        image:
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=85",
        icon: GiDiamondRing,
        href: "/collections/wedding-wear",
        accent: "from-[#7B2437]/15",
    },
    {
        title: "Festive Wear",
        subtitle: "Celebrate in style",
        image:
            "https://images.unsplash.com/photo-1583391733956-6c78276477e8?auto=format&fit=crop&w=700&q=85",
        icon: GiFlowerEmblem,
        href: "/collections/festive-wear",
        accent: "from-[#B9987A]/20",
    },
    {
        title: "Party Wear",
        subtitle: "Make every night special",
        image:
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=85",
        icon: GiDress,
        href: "/collections/party-wear",
        accent: "from-[#6B5B44]/20",
    },
    {
        title: "Engagement",
        subtitle: "Elegant beginnings",
        image:
            "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=700&q=85",
        icon: GiDiamondRing,
        href: "/collections/engagement",
        accent: "from-[#DCC7B2]/25",
    },
    {
        title: "Mehendi",
        subtitle: "Vibrant and joyful",
        image:
            "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=85",
        icon: GiFlowerEmblem,
        href: "/collections/mehendi",
        accent: "from-[#7B2437]/15",
    },
    {
        title: "Reception",
        subtitle: "Graceful ensembles",
        image:
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=85",
        icon: GiHeartNecklace,
        href: "/collections/reception",
        accent: "from-[#B9987A]/20",
    },
];

export default function FindPerfectLook() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
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

    const scrollCards = (direction) => {
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
            className="relative isolate overflow-hidden bg-[#FAF7F2] py-14 sm:py-16 lg:py-20"
        >
            {/* Soft transition from the hero section */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-linear-to-b from-[#EAD9CC]/65 via-[#FAF7F2]/80 to-transparent"
            />

            {/* Warm decorative glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-32 -z-10 size-80 rounded-full bg-[#DCC7B2]/25 blur-[100px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 bottom-0 -z-10 size-96 rounded-full bg-[#B9987A]/15 blur-[110px]"
            />

            {/* Decorative side ornaments */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-8 top-36 -z-10 hidden select-none font-serif text-[250px] leading-none text-[#B9987A]/10 lg:block"
            >
                ❧
            </div>
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 bottom-10 -z-10 hidden select-none font-serif text-[250px] leading-none text-[#B9987A]/10 lg:block"
            >
                ❧
            </div>

            <div className="mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-10">
                {/* Section heading */}
                <div
                    className={cn(
                        "mb-7 flex flex-col justify-between gap-5 sm:mb-9 sm:flex-row sm:items-end",
                        "transition-all duration-700 ease-out",
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    )}
                >
                    <div className="max-w-2xl">
                        <span className="mb-2 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9B7356] sm:text-[11px]">
                            <span className="h-px w-7 bg-[#B9987A]" />
                            Shop by occasion
                        </span>

                        <h2
                            id="perfect-look-heading"
                            className="font-serif text-3xl font-medium leading-tight tracking-[-0.035em] text-[#2E2A24] sm:text-4xl lg:text-[46px]"
                        >
                            Find Your{" "}
                            <span className="italic text-[#7B2437]">
                                Perfect Look
                            </span>
                        </h2>

                        <p className="mt-2 max-w-xl text-xs leading-6 text-[#6B5B44]/80 sm:text-sm">
                            Outfits curated for every celebration, from intimate
                            gatherings to grand occasions.
                        </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:justify-end">
                        <Link
                            href="/collections"
                            className="group inline-flex items-center gap-2 text-xs font-semibold text-[#7B2437] transition-colors hover:text-[#2E2A24] sm:text-sm"
                        >
                            View All Occasions
                            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                aria-label="Scroll occasions left"
                                onClick={() => scrollCards(-1)}
                                className="flex size-9 items-center justify-center rounded-full border border-[#B9987A]/40 bg-white/70 text-[#6B5B44] shadow-sm transition-all duration-300 hover:border-[#7B2437] hover:bg-[#7B2437] hover:text-white active:scale-95"
                            >
                                <FiChevronLeft size={17} />
                            </button>

                            <button
                                type="button"
                                aria-label="Scroll occasions right"
                                onClick={() => scrollCards(1)}
                                className="flex size-9 items-center justify-center rounded-full border border-[#B9987A]/40 bg-white/70 text-[#6B5B44] shadow-sm transition-all duration-300 hover:border-[#7B2437] hover:bg-[#7B2437] hover:text-white active:scale-95"
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
                        const Icon = occasion.icon;

                        return (
                            <Link
                                key={occasion.title}
                                href={occasion.href}
                                data-occasion-card
                                className={cn(
                                    "group relative snap-start overflow-hidden rounded-t-[999px] rounded-b-xl",
                                    "border border-[#B9987A]/25 bg-white/60",
                                    "shadow-[0_5px_20px_rgba(107,91,68,0.07)]",
                                    "transition-all duration-700 ease-out",
                                    "hover:-translate-y-2 hover:border-[#B9987A]/70",
                                    "hover:shadow-[0_18px_38px_rgba(107,91,68,0.17)]",
                                    isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-10 opacity-0"
                                )}
                                style={{
                                    transitionDelay: `${index * 90}ms`,
                                }}
                            >
                                {/* Image */}
                                <div className="relative aspect-[0.79] overflow-hidden rounded-t-[999px] bg-[#EAD9CC]">
                                    <img
                                        src={occasion.image}
                                        alt={`${occasion.title} collection`}
                                        loading="lazy"
                                        className="size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                                    />

                                    {/* Coordinated image overlays */}
                                    <div
                                        className={cn(
                                            "absolute inset-0 bg-linear-to-t",
                                            occasion.accent,
                                            "via-transparent via-35% to-[#2E2A24]/65"
                                        )}
                                    />

                                    <div className="absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-[#2E2A24]/10 to-transparent" />

                                    {/* Icon badge */}
                                    <div className="absolute right-3 top-5 flex size-9 translate-y-2 items-center justify-center rounded-full border border-white/50 bg-[#FAF7F2]/85 text-[#7B2437] opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <Icon size={17} />
                                    </div>

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
                                <div className="flex items-center justify-between gap-2 bg-linear-to-b from-[#FFFCF8] to-[#F2E4D8] px-3 py-3 sm:px-4">
                                    <div className="min-w-0">
                                        <p className="truncate text-xs font-semibold text-[#7B2437] sm:text-sm">
                                            {occasion.title}
                                        </p>
                                        <p className="mt-1 truncate text-[10px] text-[#6B5B44]/75 sm:text-xs">
                                            {occasion.subtitle}
                                        </p>
                                    </div>

                                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#B9987A]/40 text-[#7B2437] transition-all duration-300 group-hover:border-[#7B2437] group-hover:bg-[#7B2437] group-hover:text-white">
                                        <FiArrowRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Bottom editorial accent */}
                <div
                    className={cn(
                        "mt-4 flex items-center justify-center gap-3 sm:mt-6",
                        "transition-all duration-700 delay-500",
                        isVisible ? "opacity-100" : "opacity-0"
                    )}
                >
                    <span className="h-px w-12 bg-linear-to-r from-transparent to-[#B9987A]/70" />
                    <GiFlowerEmblem className="text-[#B9987A]" size={15} />
                    <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#9B7356]">
                        Crafted for your moments
                    </p>
                    <span className="h-px w-12 bg-linear-to-l from-transparent to-[#B9987A]/70" />
                </div>
            </div>
        </section>
    );
}
