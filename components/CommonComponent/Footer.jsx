"use client";

import { useEffect, useRef, useState } from "react";
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
    const footerRef = useRef(null);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle");
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

    function handleSubscribe(event) {
        event.preventDefault();

        if (!email.trim()) return;

        // Connect this handler to your newsletter API or email service.
        setStatus("success");
        setEmail("");
    }

    return (
        <footer
            ref={footerRef}
            className="relative isolate overflow-hidden bg-[#21090E] text-[#F9EDE0]"
        >
            {/* Rich burgundy gradient */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-[#5A1021] via-[#310B15] to-[#17070B]"
            />

            {/* Soft central glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(143,57,64,0.28),transparent_65%)]"
            />

           

            {/* Main footer */}
            <div className="mx-auto max-w-7xl px-5 pb-6 pt-12 sm:px-8 lg:px-12 lg:pt-16">
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
                            <GiFlowerEmblem className="text-4xl text-[#DDB995] transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110" />
                            <span className="font-serif text-2xl tracking-[0.18em] text-[#F5D9BE]">
                                SILAAH
                            </span>
                        </Link>

                        <p className="mt-5 max-w-xs text-sm leading-7 text-[#E7D3C8]/70">
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
                                    className="group flex size-10 items-center justify-center rounded-full border border-[#DDB995]/20 bg-white/5 text-[#E8C7A7] transition-all duration-300 hover:-translate-y-1 hover:border-[#DDB995]/70 hover:bg-[#DDB995] hover:text-[#321018] hover:shadow-lg hover:shadow-black/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8C7A7]"
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
                            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold text-[#F5D9BE]">
                                {group.title}
                                <span className="h-px flex-1 bg-[#DDB995]/20" />
                            </h3>

                            <ul className="space-y-3">
                                {group.links.map(([label, href]) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className="group inline-flex items-center gap-2 text-sm text-[#E7D3C8]/65 transition-colors duration-300 hover:text-[#F5D9BE] focus-visible:text-[#F5D9BE] focus-visible:outline-none"
                                        >
                                            <span className="h-px w-0 bg-[#DDB995] transition-all duration-300 group-hover:w-3" />
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
                        <h3 className="mb-5 text-sm font-semibold text-[#F5D9BE]">
                            Need Help?
                        </h3>

                        <div className="space-y-4">
                            <a
                                href="tel:+919876543210"
                                className="group flex items-start gap-3 text-sm text-[#E7D3C8]/70 transition-colors hover:text-[#F5D9BE]"
                            >
                                <FaPhoneAlt className="mt-1 shrink-0 text-[#DDB995] transition-transform group-hover:rotate-12" />
                                <span>+91 98765 43210</span>
                            </a>

                            <a
                                href="mailto:support@silaah.in"
                                className="group flex items-start gap-3 break-all text-sm text-[#E7D3C8]/70 transition-colors hover:text-[#F5D9BE]"
                            >
                                <FaEnvelope className="mt-1 shrink-0 text-[#DDB995]" />
                                <span>support@silaah.in</span>
                            </a>

                            <div className="flex items-start gap-3 text-sm text-[#E7D3C8]/70">
                                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#DDB995]" />
                                <span>India · Pan India Delivery</span>
                            </div>

                            <div className="border-t border-[#DDB995]/15 pt-4 text-xs leading-6 text-[#E7D3C8]/55">
                                <p>Monday – Saturday</p>
                                <p>10:00 AM – 7:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust strip */}
                <div
                    data-footer-reveal
                    className="footer-reveal mt-12 grid gap-4 border-y border-[#DDB995]/15 py-6 sm:grid-cols-3 sm:gap-6"
                >
                    {benefits.map(({ icon: Icon, title, text }) => (
                        <div
                            key={title}
                            className="group flex items-center gap-3 rounded-lg p-2 transition-colors duration-300 hover:bg-white/5"
                        >
                            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#DDB995]/25 bg-[#DDB995]/10 text-xl text-[#E4BD98] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#DDB995] group-hover:text-[#321018]">
                                <Icon />
                            </span>
                            <span>
                                <span className="block text-sm font-medium text-[#F5D9BE]">
                                    {title}
                                </span>
                                <span className="mt-1 block text-xs text-[#E7D3C8]/55">
                                    {text}
                                </span>
                            </span>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col gap-4 pt-6 text-xs text-[#E7D3C8]/55 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} SILAAH. All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        <Link
                            href="/privacy-policy"
                            className="transition-colors hover:text-[#F5D9BE]"
                        >
                            Privacy Policy
                        </Link>
                        <span className="hidden h-3 w-px bg-[#DDB995]/30 sm:block" />
                        <Link
                            href="/terms"
                            className="transition-colors hover:text-[#F5D9BE]"
                        >
                            Terms & Conditions
                        </Link>
                        <span className="hidden h-3 w-px bg-[#DDB995]/30 sm:block" />
                        <Link
                            href="/shipping"
                            className="transition-colors hover:text-[#F5D9BE]"
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
                    "fixed bottom-5 right-5 z-40 flex size-11 items-center justify-center rounded-lg border border-[#E6C5A4]/40 bg-[#70412D] text-xl text-[#FFF3E5] shadow-xl shadow-black/20 transition-all duration-500 hover:-translate-y-1 hover:bg-[#DDB995] hover:text-[#321018] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E6C5A4]",
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