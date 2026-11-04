
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { cn } from "@/lib/utils";
import CollectionCard from "../ui/CollectionCard"
import Title from "../ui/title"
import ViewAll from "../ui/viewAll";

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
            "/Images/collectionImages/women-collection.webp",
        imageAlt: "Elegant traditional Indian women's ethnic fashion",
        position: "object-[76%_90%] ",
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
            "/Images/collectionImages/mens-collection.webp",
        imageAlt: "Elegant men's formal fashion portrait",
        position: "object-[74%_80%] ",
        theme: "men",
    },
] as const;

const SectionDetail = {
    TopHeading: "CURATED FOR YOUR MOMENTS",
    MainTitle: { First: `Our ${" "}`, Second: "Collections" },
    MainContent: `From timeless traditional elegance to contemporary occasion wear,
                    discover pieces made to make every celebration unforgettable.`
}

export default function CollectionsSection() {
    const sectionRef = useRef<HTMLElementTagNameMap["section"] | null>(null);
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
                "bg-collections-section",
                "py-12 sm:py-16  lg:py-20"
            )}
        >
            {/* Soft transition from the hero above */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-collections-top-glow"
            />

            {/* Ambient decorative glows */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-20 z-0 size-72 rounded-full bg-brand-beige/25 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 bottom-0 z-0 size-80 rounded-full bg-brand-tan/15 blur-3xl"
            />

            <div className="relative z-10 mx-auto w-[90%] max-w-content-area">
                {/* Section heading */}
                <div className={cn(
                    "mb-7 flex flex-col justify-between h-full gap-4 sm:mb-9 md:flex-row md:items-end",
                    "transition-all duration-700 ease-out",
                    visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                )}>
                    <Title TitleDetail={SectionDetail} />
                    <ViewAll link="/" Text="View All Collection" />
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
                        "text-brand-muted-rosewood transition-all duration-700 delay-300",
                        visible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                    )}
                >
                    <span className="h-px w-8 bg-brand-beige" />
                    Crafted for your most beautiful moments
                    <span className="h-px w-8 bg-brand-beige" />
                </div>
            </div>
        </section>
    );
}