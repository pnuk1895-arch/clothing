
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaInstagram,
  FaPlus,
} from "react-icons/fa";
import { cn } from "@/lib/utils";
import "../../style/HomeStyle/RealFashionMoments.css"

const moments = [
    {
        image:
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=85",
        alt: "Elegant traditional Indian fashion",
        label: "Bridal Elegance",
    },
    {
        image:
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=85",
        alt: "Elegant jewellery and accessories",
        label: "Details That Matter",
    },
    {
        image:
            "https://images.unsplash.com/photo-1583391733956-6c78276477e3?auto=format&fit=crop&w=700&q=85",
        alt: "Contemporary ethnic fashion",
        label: "Festive Glamour",
    },
    {
        image:
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=85",
        alt: "Beautiful occasion wear",
        label: "Timeless Style",
    },
    {
        image:
            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=85",
        alt: "Fashion editorial look",
        label: "Modern Tradition",
    },
    {
        image:
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85",
        alt: "Fashion styling inspiration",
        label: "Everyday Luxury",
    },
    {
        image:
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=85",
        alt: "Fashion inspiration from the community",
        label: "Your Style Story",
    },
];

export default function RealFashionMoments() {
    const galleryRef = useRef(null);
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

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

    const scrollGallery = useCallback((direction) => {
        const gallery = galleryRef.current;

        if (!gallery) return;

        const amount = Math.max(gallery.clientWidth * 0.72, 220);

        gallery.scrollBy({
            left: direction * amount,
            behavior: "smooth",
        });
    }, []);

    const handleScroll = () => {
        const gallery = galleryRef.current;

        if (!gallery) return;

        const firstCard = gallery.querySelector("[data-moment-card]");

        if (!firstCard) return;

        const cardWidth = firstCard.getBoundingClientRect().width;
        const gap = 12;

        setActiveIndex(
            Math.round(gallery.scrollLeft / (cardWidth + gap))
        );
    };

    return (
        <section
            ref={sectionRef}
            aria-labelledby="real-moments-heading"
            className={cn(
                "real-moments-section relative isolate overflow-hidden",
                "py-12 sm:py-14 lg:py-16",
                "text-[#35251F]"
            )}
        >
            {/* Floral background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
            />

            {/* Subtle blend with adjacent sections */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-[#FCF5EE]/70 via-transparent to-[#FCF5EE]/85"
            />

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading and navigation */}
                <div
                    className={cn(
                        "mb-6 flex items-end justify-between gap-4 sm:mb-8",
                        "moment-reveal",
                        visible && "moment-visible"
                    )}
                >
                    <div>
                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A87960] sm:text-xs">
                            Follow Our Style Journey
                        </p>

                        <h2
                            id="real-moments-heading"
                            className="font-serif text-2xl leading-tight tracking-tight text-[#35251F] sm:text-3xl lg:text-4xl"
                        >
                            Real Fashion,{" "}
                            <span className="italic text-[#79283B]">
                                Real Moments
                            </span>
                        </h2>

                        <p className="mt-2 max-w-xl text-xs leading-relaxed text-[#806C60] sm:text-sm">
                            Get inspired by the beautiful moments and styles
                            shared by our community.
                        </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-3">
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="hidden items-center gap-2 text-xs font-semibold text-[#79283B] transition-colors hover:text-[#A87960] sm:flex"
                        >
                            <FaInstagram size={15} />
                            <span>@silaah_official</span>
                        </a>

                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => scrollGallery(-1)}
                                aria-label="Scroll to previous fashion moments"
                                className="group flex size-9 items-center justify-center rounded-full border border-[#DCC7B8] bg-[#FFF9F3]/80 text-[#79283B] transition-all duration-300 hover:border-[#79283B] hover:bg-[#79283B] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#79283B]"
                            >
                                <FaArrowLeft
                                    size={16}
                                    className="transition-transform duration-300 group-hover:-translate-x-0.5"
                                />
                            </button>

                            <button
                                type="button"
                                onClick={() => scrollGallery(1)}
                                aria-label="Scroll to next fashion moments"
                                className="group flex size-9 items-center justify-center rounded-full border border-[#DCC7B8] bg-[#FFF9F3]/80 text-[#79283B] transition-all duration-300 hover:border-[#79283B] hover:bg-[#79283B] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#79283B]"
                            >
                                <FaArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                                />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Horizontal fashion gallery */}
                <div
                    ref={galleryRef}
                    onScroll={handleScroll}
                    className={cn(
                        "moment-gallery flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3",
                        "scroll-smooth",
                        "moment-reveal",
                        visible && "moment-visible"
                    )}
                    style={{ scrollbarWidth: "none" }}
                >
                    {moments.map((moment, index) => {
                        const isLast = index === moments.length - 1;

                        return (
                            <a
                                key={moment.label}
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                data-moment-card
                                aria-label={`Explore ${moment.label}`}
                                className={cn(
                                    "moment-card group relative block shrink-0 snap-start",
                                    "h-36 w-28 overflow-hidden rounded-xl sm:h-48 sm:w-40 lg:h-56 lg:w-44",
                                    "bg-[#EAD8CA] shadow-sm transition-all duration-500",
                                    "hover:-translate-y-1 hover:shadow-xl hover:shadow-[#79283B]/15",
                                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#79283B]"
                                )}
                                style={{ transitionDelay: `${index * 70}ms` }}
                            >
                                <Image
                                    src={moment.image}
                                    alt={moment.alt}
                                    fill
                                    sizes="(max-width: 639px) 112px, (max-width: 1023px) 160px, 176px"
                                    className={cn(
                                        "object-cover transition-transform duration-700 ease-out",
                                        "group-hover:scale-110"
                                    )}
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-[#32151B]/75 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                                {isLast && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#32151B]/65 text-white backdrop-blur-[2px] transition-colors duration-300 group-hover:bg-[#79283B]/80">
                                        <FaPlus size={25} strokeWidth={1.5} />
                                        <span className="mt-2 font-serif text-xl">
                                            +120
                                        </span>
                                        <span className="text-xs tracking-wide">
                                            More Moments
                                        </span>
                                    </div>
                                )}

                                {!isLast && (
                                    <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-xs font-medium tracking-wide">
                                            {moment.label}
                                        </p>
                                        <p className="mt-1 flex items-center gap-1 text-[10px] text-white/80">
                                            <FaInstagram size={11} />
                                            Explore moment
                                        </p>
                                    </div>
                                )}

                                <span className="sr-only">{moment.label}</span>
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Instagram link and scroll indicator */}
                <div className="mt-3 flex items-center justify-between sm:hidden">
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-xs font-medium text-[#79283B]"
                    >
                        <FaInstagram size={14} />
                        @silaah_official
                    </a>

                    <div className="flex items-center gap-1.5">
                        {moments.map((moment, index) => (
                            <span
                                key={moment.label}
                                className={cn(
                                    "h-1.5 rounded-full transition-all duration-300",
                                    activeIndex === index
                                        ? "w-5 bg-[#79283B]"
                                        : "w-1.5 bg-[#D8BFB0]"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
