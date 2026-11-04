"use client";

import "../../style/HomeStyle/HowItWorks.css";
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
import Title from "../ui/title";
import ViewAll from "../ui/viewAll";

const steps = [
    {
        number: "01",
        title: "Choose Your Outfit",
        description: "Browse our collections or share your style idea.",
        icon: UserRound,
    },
    {
        number: "02",
        title: "Consult Our Experts",
        description: "Get styling advice and customization options.",
        icon: MessageCircle,
    },
    {
        number: "03",
        title: "Get Tailored",
        description: "We craft your outfit with precision and care.",
        icon: ClipboardCheck,
    },
    {
        number: "04",
        title: "Delivered to Your Door",
        description: "Receive your perfect outfit, ready for your special moment.",
        icon: PackageCheck,
    },
];

const SectionDetail = {
    TopHeading: "Simple Steps",
    MainTitle: {
        First: " How It Works"
    },
    MainContent: "From inspiration to your perfect outfit — in just a few thoughtful steps."
}

export default function HowItWorks() {
    const sectionRef = useRef<HTMLElement | null>(null);
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
            className="how-it-works-section relative isolate overflow-hidden bg-brand-light-Cream"
        >
            {/* Soft background wash */}
            <div
                aria-hidden="true"
                className="how-it-works-wash pointer-events-none absolute inset-0 -z-10"
            />

            <div className="relative mx-auto w-[90%] max-w-content-area py-12 sm:py-14 lg:py-16">
                {/* Section heading */}
                <div
                    className={cn(
                        "mb-7 flex flex-col justify-between h-full gap-5 sm:mb-9 md:flex-row md:items-end",
                        "transition-all duration-700 ease-out",
                        visible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    )}>
                    <Title TitleDetail={SectionDetail} />
                    <ViewAll link='/' Text="Learn more" />
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting line — desktop */}
                    <div
                        aria-hidden="true"
                        className="step-connector absolute left-[12%] right-[12%] top-7 hidden h-px bg-brand-beige lg:block"
                    />

                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-6">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <article
                                    key={step.number}
                                    style={{ "--step-index": index } as React.CSSProperties}
                                    className={cn(
                                        "step-card reveal-content group relative",
                                        visible && "is-visible"
                                    )}
                                >
                                    <div className="flex items-start gap-4 lg:flex-col lg:items-start lg:gap-4">
                                        {/* Icon */}
                                        <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-how-it-works-icon-border bg-how-it-works-icon text-how-it-works-icon-foreground shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:border-brand-tan group-hover:bg-brand-rosewood group-hover:text-footer-button-text group-hover:shadow-lg sm:size-16">
                                            <Icon
                                                size={24}
                                                strokeWidth={1.6}
                                                className="transition-transform duration-500 group-hover:scale-110"
                                            />

                                            <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full border border-how-it-works-number-border bg-how-it-works-number text-[9px] font-bold text-brand-rosewood">
                                                {step.number.slice(1)}
                                            </span>
                                        </div>

                                        <div className="min-w-0 flex-1 pb-1 lg:flex-none">
                                            <span className="mb-1 block text-xs font-bold tracking-[0.15em] text-brand-tan">
                                                {step.number}
                                            </span>

                                            <h3 className="text-base font-semibold text-how-it-works-step-title transition-colors duration-300 group-hover:text-brand-rosewood sm:text-lg">
                                                {step.title}
                                            </h3>

                                            <p className="mt-2 max-w-xs text-sm leading-6 text-how-it-works-description">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Mobile connector */}
                                        {index !== steps.length - 1 && (
                                            <ArrowRight
                                                aria-hidden="true"
                                                size={17}
                                                className="mt-5 hidden shrink-0 text-how-it-works-connector sm:hidden"
                                            />
                                        )}
                                    </div>

                                    {/* Decorative hover underline */}
                                    <div className="mt-5 h-px w-0 bg-brand-rosewood transition-all duration-500 group-hover:w-full lg:mt-6" />
                                </article>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile learn-more link */}
                <a
                    href="/custom-services"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-rosewood transition-colors duration-300 hover:text-how-it-works-link-hover sm:hidden"
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
                        "reveal-content mt-9 flex items-center justify-center gap-2 text-center text-xs tracking-wide text-how-it-works-muted sm:mt-12",
                        visible && "is-visible"
                    )}
                >
                    <Sparkles size={14} className="text-how-it-works-sparkle" />
                    <span>Thoughtfully crafted around you</span>
                    <Sparkles size={14} className="text-how-it-works-sparkle" />
                </div>
            </div>
        </section>
    );
}
