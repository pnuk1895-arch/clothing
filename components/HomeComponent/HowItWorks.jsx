
"use client";

import "../../style/HomeStyle/HowItWorks.css"
import { useEffect, useRef, useState } from "react";
import {
    UserRound,
    MessageCircle,
    ClipboardCheck,
    PackageCheck,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
    {
        number: "01",
        title: "Choose Your Outfit",
        description:
            "Browse our collections or share your style idea.",
        icon: UserRound,
    },
    {
        number: "02",
        title: "Consult Our Experts",
        description:
            "Get styling advice and customization options.",
        icon: MessageCircle,
    },
    {
        number: "03",
        title: "Get Tailored",
        description:
            "We craft your outfit with precision and care.",
        icon: ClipboardCheck,
    },
    {
        number: "04",
        title: "Delivered to Your Door",
        description:
            "Receive your perfect outfit, ready for your special moment.",
        icon: PackageCheck,
    },
];

export default function HowItWorks() {
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
                threshold: 0.15,
                rootMargin: "0px 0px -35px 0px",
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            aria-labelledby="how-it-works-heading"
            className="how-it-works-section relative isolate overflow-hidden"
        >
            {/* Soft background wash */}
            <div
                aria-hidden="true"
                className="how-it-works-wash pointer-events-none absolute inset-0 -z-10"
            />

            <div className="relative mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
                {/* Section heading */}
                <div
                    className={cn(
                        "reveal-content mb-9 flex items-start justify-between gap-5 sm:mb-12",
                        visible && "is-visible"
                    )}
                >
                    <div>
                        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#A47B61]">
                            Simple Steps
                        </span>

                        <h2
                            id="how-it-works-heading"
                            className="font-serif text-3xl leading-tight text-[#34251F] sm:text-4xl lg:text-5xl"
                        >
                            How It Works
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-[#76665D] sm:text-base">
                            From inspiration to your perfect outfit — in
                            just a few thoughtful steps.
                        </p>
                    </div>

                    <a
                        href="/custom-services"
                        className="group mt-5 hidden shrink-0 items-center gap-2 text-sm font-semibold text-[#79283B] transition-colors duration-300 hover:text-[#A36C4B] sm:inline-flex"
                    >
                        Learn More
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting line — desktop */}
                    <div
                        aria-hidden="true"
                        className="step-connector absolute left-[12%] right-[12%] top-7 hidden h-px bg-[#DCC4B1] lg:block"
                    />

                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <article
                                    key={step.number}
                                    style={{
                                        "--step-index": index,
                                    }}
                                    className={cn(
                                        "step-card reveal-content group relative",
                                        visible && "is-visible"
                                    )}
                                >
                                    <div className="flex items-start gap-4 lg:flex-col lg:items-start lg:gap-4">
                                        {/* Icon */}
                                        <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-[#EAD8C9] bg-[#F5E6D9] text-[#8A4B3A] shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:border-[#B8896B] group-hover:bg-[#79283B] group-hover:text-[#FFF8F0] group-hover:shadow-lg sm:size-16">
                                            <Icon
                                                size={24}
                                                strokeWidth={1.6}
                                                className="transition-transform duration-500 group-hover:scale-110"
                                            />

                                            <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full border border-[#E9D5C5] bg-[#FFF9F3] text-[9px] font-bold text-[#79283B]">
                                                {step.number.slice(1)}
                                            </span>
                                        </div>

                                        <div className="min-w-0 flex-1 pb-1 lg:flex-none">
                                            <span className="mb-1 block text-xs font-bold tracking-[0.15em] text-[#A47B61]">
                                                {step.number}
                                            </span>

                                            <h3 className="text-base font-semibold text-[#422C25] transition-colors duration-300 group-hover:text-[#79283B] sm:text-lg">
                                                {step.title}
                                            </h3>

                                            <p className="mt-2 max-w-xs text-sm leading-6 text-[#796B61]">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Mobile connector */}
                                        {index !== steps.length - 1 && (
                                            <ArrowRight
                                                aria-hidden="true"
                                                size={17}
                                                className="mt-5 hidden shrink-0 text-[#C3A18B] sm:hidden"
                                            />
                                        )}
                                    </div>

                                    {/* Decorative hover underline */}
                                    <div className="mt-5 h-px w-0 bg-[#79283B] transition-all duration-500 group-hover:w-full lg:mt-6" />
                                </article>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile learn-more link */}
                <a
                    href="/custom-services"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#79283B] transition-colors duration-300 hover:text-[#A36C4B] sm:hidden"
                >
                    Learn More
                    <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </a>

                {/* Subtle finishing detail */}
                <div
                    className={cn(
                        "reveal-content mt-9 flex items-center justify-center gap-2 text-center text-xs tracking-wide text-[#A18A79] sm:mt-12",
                        visible && "is-visible"
                    )}
                >
                    <Sparkles size={14} className="text-[#B38A69]" />
                    <span>Thoughtfully crafted around you</span>
                    <Sparkles size={14} className="text-[#B38A69]" />
                </div>
            </div>
        </section>
    );
}
