"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaPinterestP,
    FaArrowRight,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaShieldAlt,
    FaGift,
    FaStar,
    FaTruck,
    FaCheckCircle,
} from "react-icons/fa";
import { GiFlowerEmblem, GiSewingNeedle } from "react-icons/gi";
import { HiOutlineArrowUp } from "react-icons/hi2";

const footerGroups = [
    {
        title: "Shop",
        links: [
            ["New Arrivals", "/new-arrivals"],
            ["Women", "/women"],
            ["Men", "/men"],
            ["Occasion Wear", "/occasion-wear"],
            ["Gift Sets", "/gift-sets"],
        ],
    },
    {
        title: "Customer Care",
        links: [
            ["Contact Us", "/contact"],
            ["Shipping", "/shipping"],
            ["Returns", "/returns"],
            ["Size Guide", "/size-guide"],
            ["Track Order", "/track-order"],
        ],
    },
    {
        title: "Our Services",
        links: [
            ["Custom Tailoring", "/custom-tailoring"],
            ["Personal Consultation", "/consultation"],
            ["Styling Guide", "/styling-guide"],
            ["Bulk Orders", "/bulk-orders"],
            ["Wedding Packages", "/wedding-packages"],
        ],
    },
    {
        title: "Company",
        links: [
            ["About Us", "/about"],
            ["Our Story", "/our-story"],
            ["Careers", "/careers"],
            ["Journal", "/journal"],
            ["Sustainability", "/sustainability"],
        ],
    },
];

const socialLinks = [
    { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
    { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
    { label: "YouTube", href: "https://youtube.com", icon: FaYoutube },
    { label: "Pinterest", href: "https://pinterest.com", icon: FaPinterestP },
];

const benefits = [
    { icon: FaShieldAlt, title: "Exclusive Offers", text: "Member-only privileges" },
    { icon: FaGift, title: "New Arrivals", text: "Discover every edit" },
    { icon: GiSewingNeedle, title: "Fashion Notes", text: "Style, made personal" },
];

export default function Footer() {
    const footerRef = useRef<HTMLElement | null>(null);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "success">("idle");
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const root = footerRef.current;
        if (!root) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("footer-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        root.querySelectorAll("[data-footer-reveal]").forEach((element) => {
            observer.observe(element);
        });

        const handleScroll = () => setShowTop(window.scrollY > 500);

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function handleSubscribe(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!email.trim()) return;

        // Connect this handler to your newsletter API or email service.
        setStatus("success");
        setEmail("");
    }

    return (
        <footer
            ref={footerRef}
            className="relative isolate overflow-hidden bg-footer-background text-footer-foreground"
        >
            {/* Rich burgundy gradient */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-footer-gradient-start via-footer-gradient-middle to-footer-gradient-end"
            />

            {/* Soft central glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-footer-glow"
            />



            {/* Main footer */}
            <div className="mx-auto w-[90%] max-w-content-area pb-6 pt-12  lg:pt-16">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
                    {/* Brand */}
                    <div
                        data-footer-reveal
                        className="footer-reveal lg:col-span-3"
                    >
                        <Link
                            href="/"
                            aria-label="SILAAH homepage"
                            className="group inline-flex items-center gap-2"
                        >
                            <GiFlowerEmblem className="text-4xl text-footer-gold transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110" />
                            <span className="font-serif text-2xl tracking-[0.18em] text-footer-heading">
                                SILAAH
                            </span>
                        </Link>

                        <p className="mt-5 max-w-xs text-sm leading-7 text-footer-muted/70">
                            Celebrating tradition with contemporary fashion for every
                            occasion. Crafted with love, quality, and care.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            {socialLinks.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="group flex size-10 items-center justify-center rounded-full border border-footer-gold/20 bg-white/5 text-footer-social transition-all duration-300 hover:-translate-y-1 hover:border-footer-gold/70 hover:bg-footer-gold hover:text-footer-hover-text hover:shadow-lg hover:shadow-black/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-footer-social"
                                >
                                    <Icon className="transition-transform duration-300 group-hover:scale-110" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link groups */}
                    {footerGroups.map((group, index) => (
                        <nav
                            key={group.title}
                            aria-label={group.title}
                            data-footer-reveal
                            className={cn(
                                "footer-reveal lg:col-span-2",
                                index === 3 && "lg:col-span-1"
                            )}
                        >
                            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold text-footer-heading">
                                {group.title}
                                <span className="h-px flex-1 bg-footer-gold/20" />
                            </h3>

                            <ul className="space-y-3">
                                {group.links.map(([label, href]) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className="group inline-flex items-center gap-2 text-sm text-footer-muted/65 transition-colors duration-300 hover:text-footer-heading focus-visible:text-footer-heading focus-visible:outline-none"
                                        >
                                            <span className="h-px w-0 bg-footer-gold transition-all duration-300 group-hover:w-3" />
                                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                                {label}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}

                    {/* Contact */}
                    <div
                        data-footer-reveal
                        className="footer-reveal sm:col-span-2 lg:col-span-2"
                    >
                        <h3 className="mb-5 text-sm font-semibold text-footer-heading">
                            Need Help?
                        </h3>

                        <div className="space-y-4">
                            <a
                                href="tel:+919876543210"
                                className="group flex items-start gap-3 text-sm text-footer-muted/70 transition-colors hover:text-footer-heading"
                            >
                                <FaPhoneAlt className="mt-1 shrink-0 text-footer-gold transition-transform group-hover:rotate-12" />
                                <span>+91 98765 43210</span>
                            </a>

                            <a
                                href="mailto:support@silaah.in"
                                className="group flex items-start gap-3 break-all text-sm text-footer-muted/70 transition-colors hover:text-footer-heading"
                            >
                                <FaEnvelope className="mt-1 shrink-0 text-footer-gold" />
                                <span>support@silaah.in</span>
                            </a>

                            <div className="flex items-start gap-3 text-sm text-footer-muted/70">
                                <FaMapMarkerAlt className="mt-1 shrink-0 text-footer-gold" />
                                <span>India · Pan India Delivery</span>
                            </div>

                            <div className="border-t border-footer-gold/15 pt-4 text-xs leading-6 text-footer-muted/55">
                                <p>Monday – Saturday</p>
                                <p>10:00 AM – 7:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust strip */}
                <div
                    data-footer-reveal
                    className="footer-reveal mt-12 grid gap-4 border-y border-footer-gold/15 py-6 sm:grid-cols-3 sm:gap-6"
                >
                    {benefits.map(({ icon: Icon, title, text }) => (
                        <div
                            key={title}
                            className="group flex items-center gap-3 rounded-lg p-2 transition-colors duration-300 hover:bg-white/5"
                        >
                            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-footer-gold/25 bg-footer-gold/10 text-xl text-footer-benefit transition-all duration-300 group-hover:scale-110 group-hover:bg-footer-gold group-hover:text-footer-hover-text">
                                <Icon />
                            </span>
                            <span>
                                <span className="block text-sm font-medium text-footer-heading">
                                    {title}
                                </span>
                                <span className="mt-1 block text-xs text-footer-muted/55">
                                    {text}
                                </span>
                            </span>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col gap-4 pt-6 text-xs text-footer-muted/55 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} SILAAH. All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        <Link
                            href="/privacy-policy"
                            className="transition-colors hover:text-footer-heading"
                        >
                            Privacy Policy
                        </Link>
                        <span className="hidden h-3 w-px bg-footer-gold/30 sm:block" />
                        <Link
                            href="/terms"
                            className="transition-colors hover:text-footer-heading"
                        >
                            Terms & Conditions
                        </Link>
                        <span className="hidden h-3 w-px bg-footer-gold/30 sm:block" />
                        <Link
                            href="/shipping"
                            className="transition-colors hover:text-footer-heading"
                        >
                            Shipping & Returns
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll to top */}
            <button
                type="button"
                aria-label="Scroll to top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={cn(
                    "fixed bottom-5 right-5 z-40 flex size-11 items-center justify-center rounded-lg border border-footer-outline/40 bg-footer-button text-xl text-footer-button-text shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-1 hover:bg-footer-gold hover:text-footer-hover-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-footer-outline",
                    showTop
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                )}
            >
                <HiOutlineArrowUp />
            </button>
        </footer >
    );
}