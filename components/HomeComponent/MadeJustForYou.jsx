
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    FiArrowRight,
    FiCheck,
    FiPlay,
    FiUser,
    FiClock,
    FiScissors,
    FiLayers,
    FiX,
    FiVolume2,
} from "react-icons/fi";
import { cn } from "@/lib/utils";

const tailoringServices = [
    {
        title: "Personal Consultation",
        description: "Understand your vision",
        icon: FiUser,
    },
    {
        title: "Fabric Guidance",
        description: "Find your perfect fabric",
        icon: FiLayers,
    },
    {
        title: "Perfect Fitting",
        description: "Tailored to your fit",
        icon: FiClock,
    },
    {
        title: "Design Customization",
        description: "Made uniquely yours",
        icon: FiScissors,
    },
];

export default function MadeJustForYou() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [showStory, setShowStory] = useState(false);

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
                threshold: 0.15,
                rootMargin: "0px 0px -30px 0px",
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!showStory) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setShowStory(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [showStory]);

    return (
        <>
            <section
                ref={sectionRef}
                aria-labelledby="made-for-you-heading"
                className="relative overflow-hidden bg-[#FBF5EE]"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left content */}
                    <div
                        className={cn(
                            "relative flex flex-col justify-center overflow-hidden",
                            "px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14",
                            "transition-all duration-700 ease-out motion-reduce:transition-none",
                            visible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        )}
                    >
                        {/* Decorative background */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -left-16 top-10 size-48 rounded-full bg-[#EAD4C1]/35 blur-3xl"
                        />

                        <div className="relative mx-auto w-full max-w-xl lg:ml-auto lg:mr-0">
                            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#A17A60] sm:text-[10px]">
                                Custom Tailoring
                            </p>

                            <h2
                                id="made-for-you-heading"
                                className="font-serif text-3xl leading-tight tracking-tight text-[#33251F] sm:text-4xl lg:text-5xl"
                            >
                                Made Just{" "}
                                <span className="italic text-[#79283B]">for You</span>
                            </h2>

                            <p className="mt-3 max-w-md text-xs leading-6 text-[#806F63] sm:text-sm">
                                From fabric selection to final fitting, our expert stylists
                                and tailors ensure a perfect outfit that matches your style
                                and occasion.
                            </p>

                            {/* Tailoring services */}
                            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-3">
                                {tailoringServices.map((service, index) => {
                                    const Icon = service.icon;

                                    return (
                                        <div
                                            key={service.title}
                                            className={cn(
                                                "group flex flex-col items-center text-center",
                                                "transition-all duration-500 ease-out motion-reduce:transition-none",
                                                visible
                                                    ? "translate-y-0 opacity-100"
                                                    : "translate-y-5 opacity-0"
                                            )}
                                            style={{
                                                transitionDelay: visible
                                                    ? `${150 + index * 100}ms`
                                                    : "0ms",
                                            }}
                                        >
                                            <span
                                                className={cn(
                                                    "flex size-11 items-center justify-center rounded-full",
                                                    "border border-[#EAD7C6] bg-[#F2E4D8]",
                                                    "text-[#8B5146] transition-all duration-300",
                                                    "group-hover:-translate-y-1 group-hover:border-[#79283B]",
                                                    "group-hover:bg-[#79283B] group-hover:text-white",
                                                    "group-hover:shadow-lg group-hover:shadow-[#79283B]/15"
                                                )}
                                            >
                                                <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
                                            </span>

                                            <h3 className="mt-2.5 text-[10px] font-semibold leading-4 text-[#4B3930] sm:text-[11px]">
                                                {service.title}
                                            </h3>

                                            <p className="mt-1 text-[9px] leading-4 text-[#988477]">
                                                {service.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* CTA */}
                            <div className="mt-7 flex flex-wrap items-center gap-4">
                                <Link
                                    href="/contact"
                                    className={cn(
                                        "group inline-flex items-center justify-center gap-3",
                                        "rounded-sm bg-[#75432F] px-5 py-3",
                                        "text-xs font-medium text-[#FFF8F0]",
                                        "shadow-sm shadow-[#75432F]/10",
                                        "transition-all duration-300",
                                        "hover:-translate-y-0.5 hover:bg-[#79283B]",
                                        "hover:shadow-lg hover:shadow-[#79283B]/20",
                                        "focus-visible:outline-none focus-visible:ring-2",
                                        "focus-visible:ring-[#79283B] focus-visible:ring-offset-2"
                                    )}
                                >
                                    Book a Consultation
                                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>

                                <span className="inline-flex items-center gap-1.5 text-[10px] text-[#8B7768]">
                                    <FiCheck className="text-[#8B5146]" />
                                    Crafted around you
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right craftsmanship image */}
                    <div
                        className={cn(
                            "relative min-h-80 overflow-hidden bg-[#D6B49A]",
                            "sm:min-h-96 lg:min-h-full",
                            "transition-all duration-1000 ease-out motion-reduce:transition-none",
                            visible
                                ? "translate-x-0 opacity-100"
                                : "translate-x-6 opacity-0"
                        )}
                        style={{ transitionDelay: visible ? "150ms" : "0ms" }}
                    >
                        <div className="absolute inset-0">
                            <Image
                                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1600&q=90"
                                alt="Detailed craftsmanship and tailoring work on an elegant garment"
                                fill
                                priority={false}
                                sizes="(max-width: 1023px) 100vw, 50vw"
                                className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105 motion-reduce:transition-none"
                            />
                        </div>

                        {/* Warm image overlay */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#321A18]/40 via-transparent to-[#F8E6D5]/10"
                        />

                        <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-[#FFF8F0]/75 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-[#75432F] backdrop-blur-md sm:left-7 sm:top-7">
                            The Art of Fine Craftsmanship
                        </div>

                        {/* Floating video card */}
                        <button
                            type="button"
                            onClick={() => setShowStory(true)}
                            aria-label="Discover our craftsmanship story"
                            className={cn(
                                "group absolute bottom-5 left-4 flex items-center gap-3",
                                "rounded-full border border-white/30 bg-[#512A2D]/75",
                                "py-2 pl-4 pr-2 text-left text-white backdrop-blur-md",
                                "shadow-xl shadow-[#321A18]/15",
                                "transition-all duration-300 hover:-translate-y-1",
                                "hover:bg-[#79283B]/95 hover:shadow-2xl",
                                "focus-visible:outline-none focus-visible:ring-2",
                                "focus-visible:ring-white focus-visible:ring-offset-2",
                                "focus-visible:ring-offset-[#79283B]",
                                "sm:bottom-7 sm:left-7 sm:gap-5 sm:py-3 sm:pl-5 sm:pr-3"
                            )}
                        >
                            <span>
                                <span className="block font-serif text-sm sm:text-base">
                                    Your Style
                                </span>
                                <span className="block font-serif text-sm italic text-[#F1D7C3] sm:text-base">
                                    Our Craftsmanship
                                </span>
                            </span>

                            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#FFF8F0] text-[#79283B] transition-transform duration-300 group-hover:scale-110 sm:size-11">
                                <FiPlay className="ml-0.5 text-base" />
                            </span>
                        </button>

                        {/* Decorative corner */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute bottom-0 right-0 hidden h-24 w-24 border-b border-r border-white/60 sm:block"
                        />
                    </div>
                </div>
            </section>

            {/* Craftsmanship story modal */}
            {showStory && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#241513]/80 p-4 backdrop-blur-sm"
                    onClick={() => setShowStory(false)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="craftsmanship-modal-heading"
                        className="relative w-full max-w-lg overflow-hidden rounded-xl border border-[#EAD7C6] bg-[#FBF5EE] shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="relative flex min-h-64 items-end overflow-hidden bg-[#D6B49A] sm:min-h-80">
                            <Image
                                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=85"
                                alt="Close-up of a garment being carefully crafted"
                                fill
                                sizes="(max-width: 639px) 100vw, 512px"
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-[#321A18]/80 via-[#321A18]/10 to-transparent" />

                            <div className="relative p-6 sm:p-8">
                                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#F0D2B8]">
                                    Behind Every Detail
                                </p>

                                <h3
                                    id="craftsmanship-modal-heading"
                                    className="mt-2 font-serif text-2xl text-white sm:text-3xl"
                                >
                                    Made with Meaning
                                </h3>

                                <p className="mt-2 max-w-sm text-xs leading-5 text-white/85">
                                    Every fabric, fitting, and finishing detail is chosen to
                                    bring your personal style to life.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                            <div>
                                <p className="font-serif text-base text-[#3D2922]">
                                    Your vision. Our craftsmanship.
                                </p>
                                <p className="mt-1 text-xs text-[#8A776A]">
                                    Begin your custom outfit journey.
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-[#75432F] px-4 py-3 text-xs font-medium text-white transition-colors hover:bg-[#79283B]"
                            >
                                Get Started
                                <FiArrowRight />
                            </Link>
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowStory(false)}
                            aria-label="Close craftsmanship story"
                            className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-[#FFF8F0]/95 text-[#79283B] shadow-md transition-transform hover:rotate-90"
                        >
                            <FiX />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
