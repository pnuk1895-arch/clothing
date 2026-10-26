
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FiArrowLeft,
    FiArrowRight,
    FiHeart,
    FiShoppingBag,
    FiStar,
} from "react-icons/fi";
import { cn } from "@/lib/utils";

const categories = [
    "All",
    "Sarees",
    "Lehengas",
    "Kurtis",
    "Men",
    "Occasion Wear",
];

const products = [
    {
        id: 1,
        name: "Embroidered Bridal Lehenga",
        category: "Lehengas",
        price: 24999,
        oldPrice: 32999,
        rating: 4.8,
        reviews: 320,
        badge: "BESTSELLER",
        image:
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85",
        href: "/products/embroidered-bridal-lehenga",
    },
    {
        id: 2,
        name: "Designer Silk Saree",
        category: "Sarees",
        price: 8499,
        oldPrice: 10999,
        rating: 4.7,
        reviews: 210,
        badge: "NEW",
        image:
            "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=85",
        href: "/products/designer-silk-saree",
    },
    {
        id: 3,
        name: "Classic Sherwani Set",
        category: "Men",
        price: 12999,
        oldPrice: 16999,
        rating: 4.8,
        reviews: 160,
        badge: "TRENDING",
        image:
            "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=85",
        href: "/products/classic-sherwani-set",
    },
    {
        id: 4,
        name: "Anarkali Suit Set",
        category: "Occasion Wear",
        price: 6999,
        oldPrice: 8999,
        rating: 4.7,
        reviews: 150,
        badge: "",
        image:
            "https://images.unsplash.com/photo-1583391733956-6c78276477e1?auto=format&fit=crop&w=800&q=85",
        href: "/products/anarkali-suit-set",
    },
    {
        id: 5,
        name: "Party Wear Saree",
        category: "Sarees",
        price: 7499,
        oldPrice: 9499,
        rating: 4.6,
        reviews: 120,
        badge: "",
        image:
            "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=800&q=85",
        href: "/products/party-wear-saree",
    },
    {
        id: 6,
        name: "Festive Lehenga Set",
        category: "Lehengas",
        price: 15999,
        oldPrice: 19999,
        rating: 4.9,
        reviews: 185,
        badge: "POPULAR",
        image:
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=85",
        href: "/products/festive-lehenga-set",
    },
    {
        id: 7,
        name: "Elegant Festive Kurti",
        category: "Kurtis",
        price: 2999,
        oldPrice: 3999,
        rating: 4.6,
        reviews: 98,
        badge: "",
        image:
            "https://images.unsplash.com/photo-1597983073493-88cd35cf93c0?auto=format&fit=crop&w=800&q=85",
        href: "/products/elegant-festive-kurti",
    },
];

const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(price);

export default function BestSellingOutfits() {
    const sectionRef = useRef(null);
    const sliderRef = useRef(null);

    const [activeCategory, setActiveCategory] = useState("All");
    const [favorites, setFavorites] = useState([]);
    const [visible, setVisible] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((product) => product.category === activeCategory);

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
            { threshold: 0.12 }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const updateScrollButtons = useCallback(() => {
        const slider = sliderRef.current;

        if (!slider) return;

        setCanScrollLeft(slider.scrollLeft > 5);
        setCanScrollRight(
            slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 5
        );
    }, []);

    useEffect(() => {
        const slider = sliderRef.current;

        if (!slider) return;

        updateScrollButtons();

        slider.addEventListener("scroll", updateScrollButtons, {
            passive: true,
        });

        const resizeObserver = new ResizeObserver(updateScrollButtons);
        resizeObserver.observe(slider);

        return () => {
            slider.removeEventListener("scroll", updateScrollButtons);
            resizeObserver.disconnect();
        };
    }, [updateScrollButtons, activeCategory]);

    const scrollProducts = (direction) => {
        const slider = sliderRef.current;

        if (!slider) return;

        slider.scrollBy({
            left: direction * slider.clientWidth * 0.8,
            behavior: "smooth",
        });
    };

    const toggleFavorite = (productId) => {
        setFavorites((current) =>
            current.includes(productId)
                ? current.filter((id) => id !== productId)
                : [...current, productId]
        );
    };

    return (
        <section
            ref={sectionRef}
            aria-labelledby="bestselling-heading"
            className="best-selling-background relative isolate overflow-hidden py-10 sm:py-12 lg:py-16"
        >
            {/* Top and bottom blending overlay */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-[#FBF5EF]/95 via-[#FBF5EF]/35 to-[#FBF5EF]/95"
            />

            {/* Soft decorative background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 top-16 z-0 size-64 rounded-full bg-[#EAD7C6]/30 blur-3xl"
            />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading and carousel controls */}
                <div
                    className={cn(
                        "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
                        "transition-all duration-700 ease-out motion-reduce:transition-none",
                        visible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-6 opacity-0"
                    )}
                >
                    <div>
                        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#A17A60] sm:text-[10px]">
                            Most Loved
                        </p>

                        <h2
                            id="bestselling-heading"
                            className="font-serif text-3xl leading-tight tracking-tight text-[#30231F] sm:text-4xl"
                        >
                            Bestselling{" "}
                            <span className="italic text-[#79283B]">Outfits</span>
                        </h2>

                        <p className="mt-2 max-w-lg text-xs leading-5 text-[#857267] sm:text-sm">
                            Discover the styles our customers love, made for your most
                            memorable moments.
                        </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:justify-end">
                        {/* Category filters */}
                        <div
                            className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 sm:flex-none sm:flex-wrap sm:justify-end"
                            aria-label="Filter outfits by category"
                        >
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => setActiveCategory(category)}
                                    aria-pressed={activeCategory === category}
                                    className={cn(
                                        "shrink-0 rounded-full px-4 py-2 text-[10px] font-medium",
                                        "transition-all duration-300 sm:text-[11px]",
                                        "focus-visible:outline-none focus-visible:ring-2",
                                        "focus-visible:ring-[#79283B] focus-visible:ring-offset-2",
                                        activeCategory === category
                                            ? "bg-[#75432F] text-white shadow-md shadow-[#75432F]/15"
                                            : "bg-[#F2E6DA] text-[#70594C] hover:bg-[#E8D3C1] hover:text-[#79283B]"
                                    )}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Desktop carousel arrows */}
                        <div className="hidden shrink-0 items-center gap-2 sm:flex">
                            <button
                                type="button"
                                onClick={() => scrollProducts(-1)}
                                disabled={!canScrollLeft}
                                aria-label="Scroll to previous outfits"
                                className={cn(
                                    "flex size-9 items-center justify-center rounded-full border",
                                    "border-[#E2D0C0] bg-[#FFF9F3] text-[#75432F]",
                                    "transition-all duration-300 hover:border-[#79283B]",
                                    "hover:bg-[#79283B] hover:text-white",
                                    "disabled:cursor-not-allowed disabled:opacity-35"
                                )}
                            >
                                <FiArrowLeft />
                            </button>

                            <button
                                type="button"
                                onClick={() => scrollProducts(1)}
                                disabled={!canScrollRight}
                                aria-label="Scroll to next outfits"
                                className={cn(
                                    "flex size-9 items-center justify-center rounded-full border",
                                    "border-[#E2D0C0] bg-[#FFF9F3] text-[#75432F]",
                                    "transition-all duration-300 hover:border-[#79283B]",
                                    "hover:bg-[#79283B] hover:text-white",
                                    "disabled:cursor-not-allowed disabled:opacity-35"
                                )}
                            >
                                <FiArrowRight />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product carousel */}
                <div
                    ref={sliderRef}
                    className={cn(
                        "mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4",
                        "scroll-smooth sm:mt-7 sm:gap-4",
                        "scrollbar-none [&::-webkit-scrollbar]:hidden"
                    )}
                >
                    {filteredProducts.map((product, index) => {
                        const isFavorite = favorites.includes(product.id);

                        return (
                            <article
                                key={product.id}
                                className={cn(
                                    "group relative w-[72%] shrink-0 snap-start",
                                    "overflow-hidden rounded-md border border-[#EBDCCE]",
                                    "bg-[#FFFAF5] shadow-sm shadow-[#543126]/5",
                                    "transition-all duration-500 ease-out",
                                    "hover:-translate-y-1 hover:border-[#D7B9A3]",
                                    "hover:shadow-xl hover:shadow-[#543126]/10",
                                    "motion-reduce:transition-none",
                                    "sm:w-[calc((100%-2rem)/3)]",
                                    "lg:w-[calc((100%-4rem)/5)]",
                                    visible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-7 opacity-0"
                                )}
                                style={{
                                    transitionDelay: visible ? `${index * 80}ms` : "0ms",
                                }}
                            >
                                {/* Product image */}
                                <Link
                                    href={product.href}
                                    aria-label={`View ${product.name}`}
                                    className="relative block aspect-4/5 overflow-hidden bg-[#EAD8C7]"
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        loading="eager"
                                        sizes="(max-width: 639px) 72vw, (max-width: 1023px) 32vw, 20vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                                    />

                                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#2D1715]/20 via-transparent to-[#2D1715]/5 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                                    {product.badge && (
                                        <span className="absolute left-2 top-2 rounded-sm bg-[#79283B] px-2 py-1 text-[8px] font-semibold tracking-wide text-white shadow-sm sm:left-3 sm:top-3 sm:text-[9px]">
                                            {product.badge}
                                        </span>
                                    )}

                                    <button
                                        type="button"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            event.stopPropagation();
                                            toggleFavorite(product.id);
                                        }}
                                        aria-label={
                                            isFavorite
                                                ? `Remove ${product.name} from wishlist`
                                                : `Add ${product.name} to wishlist`
                                        }
                                        aria-pressed={isFavorite}
                                        className={cn(
                                            "absolute right-2 top-2 z-10 flex size-8 items-center",
                                            "justify-center rounded-full border border-white/70",
                                            "bg-[#FFF9F2]/90 text-[#79283B] shadow-sm backdrop-blur-sm",
                                            "transition-all duration-300 hover:scale-110",
                                            "hover:bg-[#79283B] hover:text-white sm:right-3 sm:top-3"
                                        )}
                                    >
                                        <FiHeart
                                            className={cn(
                                                "text-sm transition-transform duration-300",
                                                isFavorite && "scale-110 fill-current"
                                            )}
                                        />
                                    </button>

                                    <span
                                        className={cn(
                                            "absolute inset-x-2 bottom-2 flex items-center",
                                            "justify-center gap-2 rounded-sm bg-[#FFF9F2]/95",
                                            "py-2 text-[10px] font-medium text-[#542F29]",
                                            "opacity-0 shadow-md transition-all duration-300",
                                            "translate-y-2 group-hover:translate-y-0",
                                            "group-hover:opacity-100",
                                            "max-sm:hidden"
                                        )}
                                    >
                                        <FiShoppingBag />
                                        View Outfit
                                    </span>
                                </Link>

                                {/* Product information */}
                                <div className="p-2.5 sm:p-3">
                                    <Link
                                        href={product.href}
                                        className="block truncate font-serif text-xs text-[#382923] transition-colors hover:text-[#79283B] sm:text-sm"
                                    >
                                        {product.name}
                                    </Link>

                                    <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                                        <span className="text-xs font-semibold text-[#79283B] sm:text-sm">
                                            {formatPrice(product.price)}
                                        </span>

                                        <span className="text-[9px] text-[#A99A8E] line-through sm:text-[10px]">
                                            {formatPrice(product.oldPrice)}
                                        </span>
                                    </div>

                                    <div className="mt-2 flex items-center justify-between gap-2 border-t border-[#F0E5DA] pt-2">
                                        <div className="flex min-w-0 items-center gap-1">
                                            <FiStar className="shrink-0 fill-[#D99A35] text-[#D99A35]" />

                                            <span className="text-[10px] font-semibold text-[#4D4038]">
                                                {product.rating}
                                            </span>

                                            <span className="truncate text-[9px] text-[#9B8B7F]">
                                                ({product.reviews})
                                            </span>
                                        </div>

                                        <Link
                                            href={product.href}
                                            aria-label={`Shop ${product.name}`}
                                            className={cn(
                                                "flex size-7 shrink-0 items-center justify-center",
                                                "rounded-sm bg-[#75432F] text-white",
                                                "transition-all duration-300 hover:bg-[#79283B]",
                                                "hover:shadow-md focus-visible:outline-none",
                                                "focus-visible:ring-2 focus-visible:ring-[#79283B]",
                                                "focus-visible:ring-offset-2"
                                            )}
                                        >
                                            <FiShoppingBag className="text-xs" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Mobile carousel controls and progress */}
                <div className="mt-2 flex items-center justify-between gap-4 sm:hidden">
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#EBDCCE]">
                        <div
                            className="h-full rounded-full bg-[#79283B] transition-all duration-300"
                            style={{
                                width: canScrollLeft
                                    ? canScrollRight
                                        ? "60%"
                                        : "100%"
                                    : "35%",
                            }}
                        />
                    </div>

                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() => scrollProducts(-1)}
                            disabled={!canScrollLeft}
                            aria-label="Previous outfits"
                            className="flex size-9 items-center justify-center rounded-full border border-[#E2D0C0] text-[#75432F] transition-colors hover:bg-[#79283B] hover:text-white disabled:opacity-35"
                        >
                            <FiArrowLeft />
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollProducts(1)}
                            disabled={!canScrollRight}
                            aria-label="Next outfits"
                            className="flex size-9 items-center justify-center rounded-full border border-[#E2D0C0] text-[#75432F] transition-colors hover:bg-[#79283B] hover:text-white disabled:opacity-35"
                        >
                            <FiArrowRight />
                        </button>
                    </div>
                </div>

                {/* View all */}
                <div className="mt-5 flex justify-center sm:mt-7 sm:justify-end">
                    <Link
                        href="/shop"
                        className={cn(
                            "group inline-flex items-center gap-2 border-b",
                            "border-[#C7A58E] pb-1 text-xs font-medium text-[#79283B]",
                            "transition-colors duration-300 hover:border-[#79283B]",
                            "hover:text-[#4E202B]"
                        )}
                    >
                        View All Outfits
                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
