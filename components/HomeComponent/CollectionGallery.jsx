
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import { GiFlowerEmblem } from "react-icons/gi";
import { cn } from "@/lib/utils";

const collections = [
    {
        id: "women",
        eyebrow: "GRACEFUL STYLES FOR EVERY OCCASION",
        title: "Women’s",
        accent: "Collection",
        description:
            "Discover timeless elegance through exquisite sarees, graceful lehengas, and thoughtfully crafted ethnic wear.",
        button: "Explore Women",
        href: "/collections/women",
        image:
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85",
        imageAlt: "Elegant traditional Indian women's ethnic fashion",
        position: "object-[center_35%]",
        theme: "women",
    },
    {
        id: "men",
        eyebrow: "TIMELESS TRADITION, MODERN SOPHISTICATION",
        title: "Men’s",
        accent: "Collection",
        description:
            "Make every occasion memorable with refined sherwanis, elegant ethnic sets, and impeccable festive style.",
        button: "Explore Men",
        href: "/collections/men",
        image:
            "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1400&q=85",
        imageAlt: "Elegant men's formal fashion portrait",
        position: "object-[center_30%]",
        theme: "men",
    },
];

function CollectionCard({ collection, index, visible }) {
    const isWomen = collection.theme === "women";

    return (
        <article
            className={cn(
                "group relative isolate min-h-90 overflow-hidden",
                "rounded-2xl border border-[#DCC7B2]/60",
                "bg-[#EAD9CC] shadow-[0_12px_35px_rgba(65,35,28,0.08)]",
                "transition-all duration-700 ease-out",
                "hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(65,35,28,0.18)]",
                "sm:min-h-105 lg:min-h-110",
                visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
            )}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {/* Full-bleed collection photography */}
            <Image
                src={collection.image}
                alt={collection.imageAlt}
                fill
                priority={index === 0}
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 50vw"
                className={cn(
                    "object-cover transition-transform duration-1000",
                    "ease-out group-hover:scale-105",
                    collection.position
                )}
            />

            {/* Warm image overlay for readable text */}
            <div
                aria-hidden="true"
                className={cn(
                    "absolute inset-0 z-0",
                    isWomen
                        ? "bg-linear-to-r from-[#FAF0E6]/95 via-[#FAF0E6]/65 to-transparent"
                        : "bg-linear-to-r from-[#F3DDC9]/95 via-[#EAD1BC]/70 to-transparent",
                    "transition-opacity duration-500 group-hover:opacity-90"
                )}
            />

            {/* Subtle luxury vignette */}
            <div
                aria-hidden="true"
                className="absolute inset-0 z-0 bg-linear-to-t from-[#2E1718]/25 via-transparent to-white/10"
            />

            {/* Decorative corner detail */}
            <div
                aria-hidden="true"
                className={cn(
                    "pointer-events-none absolute left-5 top-5 z-10",
                    "flex size-10 items-center justify-center rounded-full",
                    "border border-[#B9987A]/50 bg-[#FAF7F2]/55",
                    "text-[#6B3A32] backdrop-blur-sm",
                    "transition-all duration-500",
                    "group-hover:rotate-12 group-hover:bg-[#6B5B44]",
                    "group-hover:text-[#FAF7F2]",
                    "sm:left-7 sm:top-7"
                )}
            >
                {isWomen ? (
                    <GiFlowerEmblem className="text-xl" />
                ) : (
                    <FiStar className="text-xl" />
                )}
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-90 flex-col items-start justify-end p-6 sm:min-h-105 sm:p-8 lg:min-h-110 lg:p-10">
                <span
                    className={cn(
                        "mb-3 text-[9px] font-semibold uppercase tracking-[0.24em]",
                        "text-[#8A5A46] sm:text-[10px]"
                    )}
                >
                    {collection.eyebrow}
                </span>

                <h2
                    className={cn(
                        "max-w-75 font-serif text-3xl font-medium leading-[1.08]",
                        "tracking-[-0.035em] text-[#2E2A24]",
                        "sm:text-4xl lg:text-5xl"
                    )}
                >
                    {collection.title}
                    <span className="mt-1 block italic text-[#7A2638]">
                        {collection.accent}
                    </span>
                </h2>

                <p className="mt-4 max-w-75 text-xs leading-6 text-[#4C3A32] sm:text-sm">
                    {collection.description}
                </p>

                <Link
                    href={collection.href}
                    className={cn(
                        "group/button mt-6 inline-flex items-center gap-3",
                        "rounded-sm border border-[#6B2D3A] bg-[#6B2D3A]",
                        "px-5 py-3 text-xs font-medium text-[#FAF7F2]",
                        "shadow-md shadow-[#6B2D3A]/10",
                        "transition-all duration-300",
                        "hover:border-[#4E1C29] hover:bg-[#4E1C29]",
                        "hover:shadow-lg hover:shadow-[#6B2D3A]/25",
                        "focus-visible:outline-none focus-visible:ring-2",
                        "focus-visible:ring-[#B9987A] focus-visible:ring-offset-2"
                    )}
                >
                    {collection.button}
                    <FiArrowUpRight className="text-base transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-0.5" />
                </Link>

                <span
                    aria-hidden="true"
                    className={cn(
                        "absolute bottom-6 right-6 font-serif text-5xl italic",
                        "text-[#FAF7F2]/70 transition-all duration-500",
                        "group-hover:-translate-y-1 group-hover:text-white/90",
                        "sm:bottom-8 sm:right-8 sm:text-6xl"
                    )}
                >
                    0{index + 1}
                </span>
            </div>

            {/* Fine accent line */}
            <div
                aria-hidden="true"
                className={cn(
                    "absolute bottom-0 left-0 z-20 h-1 w-0",
                    "bg-linear-to-r from-[#7A2638] via-[#B9987A] to-[#EAD9CC]",
                    "transition-all duration-700 group-hover:w-full"
                )}
            />
        </article>
    );
}

export default function CollectionsSection() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

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

    return (
        <section
            ref={sectionRef}
            aria-labelledby="collections-heading"
            className={cn(
                "relative isolate overflow-hidden",
                "bg-linear-to-b from-[#F8F2EB] via-[#F8F2EB] to-[#F5EDE4]",
                "px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
            )}
        >
            {/* Soft transition from the hero above */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-[#FAF7F2] to-transparent"
            />

            {/* Ambient decorative glows */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-20 z-0 size-72 rounded-full bg-[#DCC7B2]/25 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 bottom-0 z-0 size-80 rounded-full bg-[#B9987A]/15 blur-3xl"
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Section heading */}
                <div
                    className={cn(
                        "mb-7 flex flex-col justify-between gap-4 sm:mb-9",
                        "sm:flex-row sm:items-end",
                        "transition-all duration-700",
                        visible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-6 opacity-0"
                    )}
                >
                    <div>
                        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#9B7057] sm:text-[10px]">
                            CURATED FOR YOUR MOMENTS
                        </p>

                        <h2
                            id="collections-heading"
                            className="font-serif text-3xl leading-tight tracking-[-0.035em] text-[#2E2A24] sm:text-4xl lg:text-5xl"
                        >
                            Find Your
                            <span className="ml-2 italic text-[#7A2638]">
                                Signature Style
                            </span>
                        </h2>

                        <p className="mt-3 max-w-xl text-xs leading-6 text-[#6B5B44]/90 sm:text-sm">
                            From timeless traditional elegance to contemporary occasion wear,
                            discover pieces made to make every celebration unforgettable.
                        </p>
                    </div>

                    <Link
                        href="/collections"
                        className="group inline-flex w-fit shrink-0 items-center gap-2 border-b border-[#B9987A] pb-1 text-xs font-medium text-[#6B2D3A] transition-colors hover:border-[#6B2D3A] hover:text-[#2E2A24]"
                    >
                        View All Collections
                        <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </Link>
                </div>

                {/* Collection banners */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4 lg:gap-6">
                    {collections.map((collection, index) => (
                        <CollectionCard
                            key={collection.id}
                            collection={collection}
                            index={index}
                            visible={visible}
                        />
                    ))}
                </div>

                {/* Elegant bottom note */}
                <div
                    className={cn(
                        "mt-7 flex items-center justify-center gap-3",
                        "text-center text-[9px] uppercase tracking-[0.2em]",
                        "text-[#8A6B57] transition-all duration-700 delay-300",
                        visible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                    )}
                >
                    <span className="h-px w-8 bg-[#DCC7B2]" />
                    Crafted for your most beautiful moments
                    <span className="h-px w-8 bg-[#DCC7B2]" />
                </div>
            </div>
        </section>
    );
}
