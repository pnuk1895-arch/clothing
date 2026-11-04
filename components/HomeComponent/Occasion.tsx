
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FiArrowUpRight,
    FiArrowRight,
    FiUser,
    FiUsers,
    FiScissors,
    FiCalendar,
} from "react-icons/fi";
import { cn } from "@/lib/utils";
import Title from "../ui/title";
import BottomEditorial from "../ui/BottomEditorial";

const services = [
    {
        id: "bridal",
        title: "Bridal Wear",
        description: "Customized bridal outfits",
        icon: FiUser,
        href: "/services/bridal-wear",
    },
    {
        id: "groom",
        title: "Groom Outfits",
        description: "Traditional to contemporary",
        icon: FiScissors,
        href: "/services/groom-outfits",
    },
    {
        id: "family",
        title: "Family Sets",
        description: "Coordinated looks",
        icon: FiUsers,
        href: "/services/family-sets",
    },
    {
        id: "consultation",
        title: "Personal Consultation",
        description: "Expert styling guidance",
        icon: FiCalendar,
        href: "/services/personal-consultation",
    },
];

const SectionDetail = {
    TopHeading: "Your Occasions, Our Expertise",
    MainTitle: {
        First: `Occasion ${" "}`,
        Second: "Services",
    },
    visible: "",
    MainContent: `From weddings to festive gatherings, we provide complete
                            styling solutions to make your moments truly special.`
}

const BottomDetail = {
        Text:"Thoughtfully styled. Beautifully remembered."
}

export default function OccasionServices() {
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
            aria-labelledby="occasion-services-heading"
            className="relative isolate overflow-hidden bg-occasion-services-section py-12  sm:py-14  lg:py-16"
        >
            {/* Subtle background decoration */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 top-10 -z-10 size-64 rounded-full bg-occasion-services-left-glow blur-3xl"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 bottom-0 -z-10 size-72 rounded-full bg-occasion-services-right-glow blur-3xl"
            />

            <div className="mx-auto w-[90%] max-w-content-area">
                <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-12 lg:gap-8">

                    {/* Left: Heading and services */}
                    <div
                        className={cn(
                            "lg:col-span-7",
                            "transition-all duration-700 ease-out motion-reduce:transition-none",
                            visible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        )}
                    >
                        {/* heading  */}
                        <Title TitleDetail={SectionDetail} />


                        {/* Service cards */}
                        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-4 xl:grid-cols-4">
                            {services.map((service, index) => {
                                const Icon = service.icon;

                                return (
                                    <Link
                                        key={service.id}
                                        href={service.href}
                                        className={cn(
                                            "group relative flex min-h-28 flex-col items-center justify-center",
                                            "rounded-lg border border-occasion-services-card bg-occasion-services-card",
                                            "px-2 py-4 text-center sm:min-h-32 sm:px-3",
                                            "transition-all duration-500 ease-out",
                                            "hover:-translate-y-1 hover:border-brand-tan",
                                            "hover:bg-brand-cream hover:shadow-lg hover:shadow-occasion-services-card",
                                            "focus-visible:outline-none focus-visible:ring-2",
                                            "focus-visible:ring-brand-rosewood focus-visible:ring-offset-2",
                                            "motion-reduce:transition-none",
                                            visible
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-5 opacity-0"
                                        )}
                                        style={{
                                            transitionDelay: visible ? `${index * 100}ms` : "0ms",
                                        }}
                                    >
                                        {/* Icon */}
                                        <span className="mb-3 flex size-10 items-center justify-center rounded-full bg-occasion-services-icon text-brand-muted-rosewood transition-all duration-300 group-hover:rotate-3 group-hover:bg-brand-rosewood group-hover:text-white sm:size-11">
                                            <Icon className="text-lg sm:text-xl" />
                                        </span>

                                        <span className="font-serif text-sm text-brand-heading-dark sm:text-base">
                                            {service.title}
                                        </span>

                                        <span className="mt-1 text-xxs leading-4 text-brand-Brown sm:text-[11px]">
                                            {service.description}
                                        </span>

                                        <FiArrowUpRight className="absolute right-2 top-2 text-sm text-brand-muted-rosewood opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Supporting note */}
                        <BottomEditorial BottomDetail={{...BottomDetail,visible}} />
                    </div>

                    {/* Right: Editorial image and consultation card */}
                    <div
                        className={cn(
                            "relative lg:col-span-5",
                            "transition-all duration-1000 ease-out motion-reduce:transition-none",
                            visible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        )}
                        style={{ transitionDelay: visible ? "200ms" : "0ms" }}
                    >
                        <div className="group relative min-h-80 overflow-hidden rounded-xl bg-brand-beige sm:min-h-96 lg:min-h-105 lg:rounded-none ">
                            <Image
                                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85"
                                alt="Elegant couple celebrating a special occasion"
                                fill
                                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 90vw, 42vw"
                                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 motion-reduce:transition-none"
                            />

                            {/* Warm image treatment */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-linear-to-t from-occasion-services-image-shade via-transparent to-occasion-services-image-highlight"
                            />

                            {/* Small editorial label */}
                            <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-occasion-services-label px-3 py-2 text-[9px] font-medium uppercase tracking-[0.18em] text-brand-deep-burgundy backdrop-blur-sm sm:left-6 sm:top-6">
                                Made for your moments
                            </div>

                            {/* Consultation overlay */}
                            <div
                                className={cn(
                                    "absolute inset-x-3 bottom-3 sm:inset-x-auto sm:bottom-5 sm:right-5",
                                    "sm:max-w-64 lg:bottom-6 lg:right-0 lg:translate-x-2",
                                    "rounded-lg border border-brand-beige bg-occasion-services-overlay",
                                    "p-4 shadow-xl shadow-occasion-services-overlay backdrop-blur-md",
                                    "transition-all duration-500",
                                    "group-hover:border-brand-tan sm:p-5"
                                )}
                            >
                                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-brand-tan">
                                    Personal Styling
                                </p>

                                <h3 className="mt-2 font-serif text-xl leading-tight text-brand-heading-dark sm:text-2xl">
                                    Let’s Create
                                    <span className="block italic text-brand-rosewood">
                                        Your Perfect Look
                                    </span>
                                </h3>

                                <p className="mt-2 text-[11px] leading-5 text-brand-Brown sm:text-xs">
                                    Get personalized guidance from our style experts.
                                </p>

                                <Link
                                    href="/contact"
                                    className={cn(
                                        "group/button mt-4 inline-flex w-full items-center justify-center gap-3",
                                        "rounded-sm bg-footer-button px-4 py-3",
                                        "text-xs font-medium text-footer-button-text",
                                        "transition-all duration-300",
                                        "hover:bg-brand-rosewood hover:shadow-md",
                                        "focus-visible:outline-none focus-visible:ring-2",
                                        "focus-visible:ring-brand-rosewood focus-visible:ring-offset-2"
                                    )}
                                >
                                    Book a Consultation
                                    <FiArrowRight className="transition-transform duration-300 group-hover/button:translate-x-1" />
                                </Link>
                            </div>
                        </div>

                        {/* Decorative corner accent */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-2 -left-2 -z-10 hidden h-24 w-24 border-b border-l border-brand-tan sm:block"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
