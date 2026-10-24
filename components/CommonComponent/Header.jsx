
"use client";


import { cn } from "@/lib/utils"
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Search,
    Menu,
    X,
    Heart,
    ShoppingBag,
    UserRound,
    ChevronDown,
    ChevronRight,
    ArrowUpRight,
    Leaf,
    Sparkles,
    Shirt,
    Gem,
    Scissors,
    Clock3,
    ArrowUpRight as ArrowIcon,
} from "lucide-react";

const NAV_LINKS = [
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Women", href: "/women", menu: "women" },
    { label: "Men", href: "/men", menu: "men" },
    { label: "Occasion Wear", href: "/occasion-wear", menu: "occasion" },
    { label: "Custom Services", href: "/custom-services", menu: "services" },
    { label: "Our Story", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const WOMEN_CATEGORIES = [
    { name: "Sarees", detail: "Timeless elegance", image: "/Images/menu/sarees.webp", href: "/women/sarees" },
    { name: "Lehengas", detail: "For grand occasions", image: "/Images/menu/lehengas.webp", href: "/women/lehengas" },
    { name: "Kurtis & Suits", detail: "Everyday grace", image: "/Images/menu/suits.webp", href: "/women/suits" },
    { name: "Gowns & Dresses", detail: "Modern statements", image: "/Images/menu/gowns.webp", href: "/women/gowns" },
];

const MEN_CATEGORIES = [
    { name: "Sherwanis", detail: "Wedding elegance", image: "/Images/menu/sherwani.webp", href: "/men/sherwanis" },
    { name: "Kurtas", detail: "Traditional comfort", image: "/Images/menu/kurtas.webp", href: "/men/kurtas" },
    { name: "Nehru Jackets", detail: "Refined layering", image: "/Images/menu/jackets.webp", href: "/men/jackets" },
    { name: "Indo-Western", detail: "Contemporary style", image: "/Images/menu/indo-western.webp", href: "/men/indo-western" },
];

const OCCASIONS = [
    { name: "Wedding Wear", href: "/occasion-wear/wedding" },
    { name: "Festive Wear", href: "/occasion-wear/festive" },
    { name: "Party Wear", href: "/occasion-wear/party" },
    { name: "Engagement", href: "/occasion-wear/engagement" },
    { name: "Mehendi", href: "/occasion-wear/mehendi" },
    { name: "Reception", href: "/occasion-wear/reception" },
];

const SEARCH_PRODUCTS = [
    {
        name: "Embroidered Bridal Lehenga",
        price: "₹24,999",
        image: "/Images/products/bridal-lehenga.webp",
        href: "/products/bridal-lehenga",
    },
    {
        name: "Designer Silk Lehenga",
        price: "₹28,499",
        image: "/Images/products/silk-lehenga.webp",
        href: "/products/silk-lehenga",
    },
    {
        name: "Classic Sherwani Set",
        price: "₹12,999",
        image: "/Images/products/sherwani.webp",
        href: "/products/sherwani",
    },
    {
        name: "Pastel Net Lehenga",
        price: "₹22,999",
        image: "/Images/products/pastel-lehenga.webp",
        href: "/products/pastel-lehenga",
    },
];

const POPULAR_SEARCHES = [
    "Lehenga",
    "Saree",
    "Anarkali",
    "Kurti Set",
    "Sherwani",
    "Wedding Wear",
];

function Logo({ light = false, onClick }) {
    return (
        <Link
            href="/"
            aria-label="Silaah home"
            onClick={onClick}
            className={`group flex shrink-0 items-center gap-2 ${light ? "text-[#FAF7F2]" : "text-[#6B5B44]"
                }`}
        >
            <span className="transition-transform duration-500 group-hover:rotate-[-8deg]">
                <Leaf size={29} strokeWidth={1.35} />
            </span>
            <span className="font-serif text-[22px] tracking-[0.16em]">
                SILAAH
            </span>
        </Link>
    );
}

function CategoryCards({ items, onNavigate }) {
    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {items.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    onClick={onNavigate}
                    className="group overflow-hidden rounded-xl border border-[#DCC7B2]/60 bg-[#FAF7F2] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9987A] hover:shadow-lg hover:shadow-[#6B5B44]/10"
                >
                    <div className="relative aspect-[4/4.2] overflow-hidden bg-[#EAD9CC]">
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 180px"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="flex items-center justify-between gap-1 p-3">
                        <div>
                            <p className="font-serif text-sm text-[#2E2A24]">
                                {item.name}
                            </p>
                            <p className="mt-1 text-[11px] text-[#6B5B44]/75">
                                {item.detail}
                            </p>
                        </div>
                        <ArrowUpRight
                            size={15}
                            className="shrink-0 text-[#6B5B44] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </div>
                </Link>
            ))}
        </div>
    );
}

function MegaMenu({ type, onNavigate }) {
    const isWomen = type === "women";
    const isMen = type === "men";
    const isOccasion = type === "occasion";
    const items = isWomen
        ? WOMEN_CATEGORIES
        : isMen
            ? MEN_CATEGORIES
            : [];

    return (
        <div className="absolute left-0 right-0 top-full z-50 hidden px-5 pt-3 lg:block">
            <div className="mx-auto max-w-360 overflow-hidden rounded-2xl border border-[#DCC7B2]/70 bg-[#FAF7F2]/98 shadow-[0_24px_70px_rgba(46,42,36,0.18)] backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-[210px_minmax(0,1fr)_240px] gap-6 p-6 xl:grid-cols-[230px_minmax(0,1fr)_270px]">
                    <aside className="border-r border-[#DCC7B2]/70 pr-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B9987A]">
                            Explore Silaah
                        </p>
                        <h3 className="mt-3 font-serif text-2xl text-[#2E2A24]">
                            {isWomen
                                ? "Women's Collection"
                                : isMen
                                    ? "Men's Collection"
                                    : isOccasion
                                        ? "Dress for the moment"
                                        : "Made for you"}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[#6B5B44]/80">
                            {isWomen
                                ? "Graceful silhouettes, intricate details and timeless occasion wear."
                                : isMen
                                    ? "Traditional craftsmanship with a refined contemporary touch."
                                    : isOccasion
                                        ? "Discover thoughtfully curated styles for every celebration."
                                        : "Personal styling and custom tailoring, designed around you."}
                        </p>

                        <Link
                            href={
                                isWomen
                                    ? "/women"
                                    : isMen
                                        ? "/men"
                                        : isOccasion
                                            ? "/occasion-wear"
                                            : "/custom-services"
                            }
                            onClick={onNavigate}
                            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#6B5B44] px-4 py-2.5 text-xs font-medium text-[#FAF7F2] transition-all duration-300 hover:bg-[#2E2A24] hover:shadow-md"
                        >
                            Explore Collection <ArrowUpRight size={14} />
                        </Link>
                    </aside>

                    <div>
                        {isOccasion ? (
                            <>
                                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#6B5B44]">
                                    Shop by occasion
                                </p>
                                <div className="grid grid-cols-2 gap-3 xl:grid-cols-3">
                                    {OCCASIONS.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={onNavigate}
                                            className="group flex items-center justify-between rounded-lg border border-[#DCC7B2]/50 bg-white/60 px-4 py-3 text-sm text-[#2E2A24] transition-all hover:border-[#B9987A] hover:bg-[#EAD9CC]/60"
                                        >
                                            {item.name}
                                            <ChevronRight
                                                size={15}
                                                className="text-[#B9987A] transition-transform group-hover:translate-x-1"
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </>
                        ) : type === "services" ? (
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { title: "Personal Consultation", icon: UserRound, href: "/custom-services/consultation" },
                                    { title: "Custom Tailoring", icon: Scissors, href: "/custom-services/tailoring" },
                                    { title: "Perfect Fitting", icon: Shirt, href: "/custom-services/fitting" },
                                    { title: "Wedding Styling", icon: Gem, href: "/custom-services/wedding-styling" },
                                ].map(({ title, icon: Icon, href }) => (
                                    <Link
                                        key={title}
                                        href={href}
                                        onClick={onNavigate}
                                        className="group rounded-xl border border-[#DCC7B2]/60 bg-white/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B9987A] hover:bg-[#EAD9CC]/60"
                                    >
                                        <Icon
                                            size={21}
                                            className="mb-3 text-[#8A594C] transition-transform group-hover:scale-110"
                                        />
                                        <p className="font-serif text-base text-[#2E2A24]">
                                            {title}
                                        </p>
                                        <p className="mt-1 text-xs text-[#6B5B44]/70">
                                            Crafted around your style
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <>
                                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#6B5B44]">
                                    Featured categories
                                </p>
                                <CategoryCards items={items} onNavigate={onNavigate} />
                            </>
                        )}
                    </div>

                    <Link
                        href={isMen ? "/men" : isOccasion ? "/occasion-wear" : "/women"}
                        onClick={onNavigate}
                        className="group relative min-h-65 overflow-hidden rounded-xl bg-[#DCC7B2]"
                    >
                        <Image
                            src={
                                isMen
                                    ? "/Images/menu/men-feature.webp"
                                    : "/Images/menu/women-feature.webp"
                            }
                            alt={isMen ? "Silaah men's collection" : "Silaah occasion collection"}
                            fill
                            sizes="270px"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#2E1A19]/85 via-[#2E1A19]/10 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-5 text-[#FAF7F2]">
                            <Sparkles size={18} className="mb-3 text-[#DCC7B2]" />
                            <h4 className="font-serif text-2xl leading-tight">
                                Tradition in
                                <br />
                                Every Thread
                            </h4>
                            <p className="mt-2 text-xs text-white/80">
                                Discover your next special look.
                            </p>
                            <span className="mt-4 inline-flex items-center gap-2 text-xs">
                                Discover More <ArrowUpRight size={14} />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function SearchPanel({ query, setQuery, onClose }) {
    const inputRef = useRef(null);
    const normalizedQuery = query.trim().toLowerCase();

    const filteredProducts = SEARCH_PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(normalizedQuery)
    );

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="fixed inset-0 z-100 overflow-y-auto bg-[#2E2A24]/35 p-3 pt-24 backdrop-blur-sm sm:p-6 sm:pt-28">
            <button
                type="button"
                aria-label="Close search overlay"
                onClick={onClose}
                className="absolute inset-0 -z-10 h-full w-full cursor-default"
            />

            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#DCC7B2]/70 bg-[#FAF7F2] shadow-[0_25px_80px_rgba(46,42,36,0.25)] animate-in fade-in slide-in-from-top-3 duration-200">
                <div className="flex items-center gap-3 border-b border-[#DCC7B2]/70 p-4 sm:p-6">
                    <Search className="shrink-0 text-[#8A594C]" size={21} />
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Escape") onClose();
                            if (event.key === "Enter" && query.trim()) {
                                window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
                            }
                        }}
                        placeholder="Search lehengas, sarees, sherwanis..."
                        aria-label="Search products"
                        className="min-w-0 flex-1 bg-transparent text-sm text-[#2E2A24] outline-none placeholder:text-[#6B5B44]/60 sm:text-base"
                    />
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close search"
                        className="rounded-full p-2 text-[#6B5B44] transition hover:bg-[#EAD9CC]"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="grid md:grid-cols-[190px_minmax(0,1fr)]">
                    <aside className="border-b border-[#DCC7B2]/70 p-4 md:border-b-0 md:border-r sm:p-5">
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B9987A]">
                            Popular searches
                        </p>
                        <div className="flex flex-wrap gap-2 md:flex-col">
                            {POPULAR_SEARCHES.map((term) => (
                                <button
                                    type="button"
                                    key={term}
                                    onClick={() => setQuery(term)}
                                    className="rounded-full border border-[#DCC7B2]/70 bg-white/70 px-3 py-2 text-left text-xs text-[#6B5B44] transition hover:border-[#B9987A] hover:bg-[#EAD9CC]"
                                >
                                    ↗ {term}
                                </button>
                            ))}
                        </div>
                    </aside>

                    <div className="p-4 sm:p-5">
                        <div className="mb-4 flex items-center justify-between gap-3">
                            <h3 className="font-serif text-lg text-[#2E2A24]">
                                {normalizedQuery ? "Search results" : "Trending right now"}
                            </h3>
                            <Link
                                href={`/search?q=${encodeURIComponent(query.trim())}`}
                                onClick={onClose}
                                className="text-xs text-[#8A594C] transition hover:text-[#2E2A24]"
                            >
                                View all results →
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                            {(normalizedQuery ? filteredProducts : SEARCH_PRODUCTS).map(
                                (product) => (
                                    <Link
                                        key={product.name}
                                        href={product.href}
                                        onClick={onClose}
                                        className="group overflow-hidden rounded-xl border border-[#DCC7B2]/60 bg-white/70 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#6B5B44]/10"
                                    >
                                        <div className="relative aspect-4/4.5 overflow-hidden bg-[#EAD9CC]">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                sizes="(max-width: 640px) 45vw, 180px"
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-3">
                                            <p className="line-clamp-2 text-xs leading-5 text-[#2E2A24]">
                                                {product.name}
                                            </p>
                                            <p className="mt-1 text-sm font-semibold text-[#8A594C]">
                                                {product.price}
                                            </p>
                                        </div>
                                    </Link>
                                )
                            )}
                        </div>

                        {normalizedQuery && filteredProducts.length === 0 && (
                            <div className="py-10 text-center">
                                <Search className="mx-auto mb-3 text-[#B9987A]" size={28} />
                                <p className="font-serif text-lg text-[#2E2A24]">
                                    No matching products found
                                </p>
                                <p className="mt-1 text-sm text-[#6B5B44]/75">
                                    Try a different style or category.
                                </p>
                            </div>
                        )}

                        <Link
                            href="/custom-services/consultation"
                            onClick={onClose}
                            className="mt-5 flex flex-col gap-3 rounded-xl bg-[#EAD9CC] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
                        >
                            <div>
                                <h4 className="font-serif text-lg text-[#2E2A24]">
                                    Looking for something special?
                                </h4>
                                <p className="mt-1 text-xs text-[#6B5B44]">
                                    Get personal recommendations from our styling experts.
                                </p>
                            </div>
                            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#6B5B44] px-4 py-2.5 text-xs text-white transition hover:bg-[#2E2A24]">
                                Book Consultation <ArrowUpRight size={14} />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState(null);
    const [query, setQuery] = useState("");
    const headerRef = useRef(null);

    const closeAll = useCallback(() => {
        setActiveMenu(null);
        setSearchOpen(false);
        setMobileOpen(false);
        setMobileExpanded(null);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 35);
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") closeAll();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [closeAll]);

    useEffect(() => {
        if (!activeMenu) return;

        const handleOutsideClick = (event) => {
            if (!headerRef.current?.contains(event.target)) {
                setActiveMenu(null);
            }
        };

        document.addEventListener("pointerdown", handleOutsideClick);
        return () => document.removeEventListener("pointerdown", handleOutsideClick);
    }, [activeMenu]);

    useEffect(() => {
        document.body.style.overflow =
            searchOpen || mobileOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [searchOpen, mobileOpen]);

    const showMenu = (menu) => {
        setActiveMenu((current) => (current === menu ? null : menu));
        setSearchOpen(false);
    };

    const openSearch = () => {
        setSearchOpen(true);
        setActiveMenu(null);
        setMobileOpen(false);
    };

    const mobileMenuItems = [
        { label: "New Arrivals", href: "/new-arrivals" },
        { label: "Women", href: "/women", menu: "women" },
        { label: "Men", href: "/men", menu: "men" },
        { label: "Occasion Wear", href: "/occasion-wear", menu: "occasion" },
        { label: "Custom Services", href: "/custom-services", menu: "services" },
        { label: "Our Story", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    const mobileSubcategories = {
        women: WOMEN_CATEGORIES,
        men: MEN_CATEGORIES,
        occasion: OCCASIONS.map((item) => ({
            ...item,
            detail: "Shop occasion wear",
        })),
        services: [
            { name: "Personal Consultation", href: "/custom-services/consultation" },
            { name: "Custom Tailoring", href: "/custom-services/tailoring" },
            { name: "Perfect Fitting", href: "/custom-services/fitting" },
        ],
    };

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-50 isolate w-full">
                {/* Animated background */}
                <div
                    aria-hidden="true"
                    className={cn(
                        "pointer-events-none absolute inset-0 -z-10",
                        "bg-linear-to-r from-[#2E2A24]/95 via-[#6B5B44]/95 to-[#2E2A24]/95",
                        "backdrop-blur-xl transition-opacity duration-700 ease-in-out",
                        scrolled ? "opacity-100 shadow-lg" : "opacity-0 shadow-none"
                    )}
                />
                {/* Announcement strip */}
                <div
                    className={`hidden h-7 items-center justify-center border-b border-white/10 bg-linear-to-r from-[#42151F] via-[#6B2935] to-[#35151A] text-[10px] font-medium tracking-wide text-[#FAF7F2] transition-all duration-500 sm:flex ${scrolled ? "opacity-0 -translate-y-full h-0 overflow-hidden" : ""
                        }`}
                >
                    <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
                        <span className="flex items-center gap-1.5">
                            <Sparkles size={11} className="text-[#DCC7B2]" />
                            Free Shipping on Orders Above ₹2999
                        </span>
                        <span className="hidden items-center gap-1.5 md:flex">
                            <Scissors size={11} className="text-[#DCC7B2]" />
                            Custom Tailoring Available
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Gem size={11} className="text-[#DCC7B2]" />
                            Easy Returns <span className="opacity-50">|</span> Secure Payments
                        </span>
                    </div>
                </div>

                {/* Main navigation */}
                <div
                    className={`relative transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled
                        ? "border-b border-[#DCC7B2]/70 bg-linear-to-r from-[#FAF7F2]/95 via-[#F8EEE5]/95 to-[#EAD9CC]/95 shadow-[0_8px_30px_rgba(46,42,36,0.10)] backdrop-blur-2xl"
                        : "border-b border-white/15 bg-linear-to-b from-[#2E2A24]/10 to-transparent"
                        }`}
                >
                    <div className="mx-auto flex h-16.5 max-w-screen-2xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-19 lg:px-8">
                        {/* Mobile menu trigger */}
                        <button
                            type="button"
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileOpen}
                            onClick={() => {
                                setMobileOpen((value) => !value);
                                setActiveMenu(null);
                                setSearchOpen(false);
                            }}
                            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#DCC7B2]/30 lg:hidden"
                        >
                            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
                        </button>

                        {/* Logo */}
                        <div className="lg:min-w-36">
                            <Logo onClick={closeAll} />
                        </div>

                        {/* Desktop links */}
                        <nav
                            aria-label="Main navigation"
                            className="hidden flex-1 items-center justify-center min-[1120px]:gap-2 xl:gap-4 lg:flex"
                        >
                            {NAV_LINKS.map((item) => (
                                <div key={item.label} className="relative">
                                    <Link
                                        href={item.href}
                                        aria-haspopup={item.menu ? "true" : undefined}
                                        aria-expanded={
                                            item.menu ? activeMenu === item.menu : undefined
                                        }
                                        onMouseEnter={() => {
                                            if (item.menu) setActiveMenu(item.menu);
                                            else setActiveMenu(null);
                                        }}
                                        onFocus={() => {
                                            if (item.menu) setActiveMenu(item.menu);
                                        }}
                                        onClick={(event) => {
                                            if (item.menu) {
                                                event.preventDefault();
                                                showMenu(item.menu);
                                            } else {
                                                closeAll();
                                            }
                                        }}
                                        className="group relative inline-flex items-center gap-1 rounded-full px-1.5 py-3 text-[14px] font-medium transition-colors duration-300 xl:text-[16px] 2xl:px-3 text-[#2E2A24] hover:text-[#8A594C]"
                                    >
                                        {item.label}
                                        {item.menu && (
                                            <ChevronDown
                                                size={14}
                                                className={`transition-transform duration-300 ${activeMenu === item.menu ? "rotate-180" : ""
                                                    }`}
                                            />
                                        )}
                                        <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
                                    </Link>
                                </div>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex shrink-0 items-center gap-0 sm:gap-1 min-[1130px]:gap-5 xl:gap-5 ">
                            <button
                                type="button"
                                aria-label="Search products"
                                onClick={openSearch}
                                className="group inline-flex size-9 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#DCC7B2]/30 sm:size-10"
                            >
                                <Search
                                    className="transition-transform size-6 duration-300 group-hover:scale-110  xl:size-6 "
                                />
                            </button>

                            <Link
                                href="/account"
                                aria-label="My account"
                                className="hidden size-9 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#DCC7B2]/30 sm:inline-flex"
                            >
                                <UserRound  className="size-5 xl:size-6 " />
                            </Link>

                            <Link
                                href="/wishlist"
                                aria-label="Wishlist"
                                className="hidden size-9 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#DCC7B2]/30 sm:inline-flex"
                            >
                                <Heart
                                    className="transition-transform duration-300 hover:scale-110 xl:size-6 "
                                />
                            </Link>

                            <Link
                                href="/cart"
                                aria-label="Shopping bag"
                                className="relative inline-flex size-9 items-center justify-center rounded-full transition-all duration-300 hover:bg-[#DCC7B2]/30 sm:size-10"
                            >
                                <ShoppingBag className="size-5 xl:size-6 " />
                                <span className="absolute right-0.5 top-0.5 flex size-4 items-center justify-center rounded-full bg-[#6B5B44] text-[9px] font-semibold text-white ring-2 ring-[#FAF7F2]">
                                    0
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Desktop mega menu */}
                    {activeMenu && (
                        <MegaMenu type={activeMenu} onNavigate={closeAll} />
                    )}
                </div>
            </header>

            {/* Search overlay */}
            {searchOpen && (
                <SearchPanel
                    query={query}
                    setQuery={setQuery}
                    onClose={() => setSearchOpen(false)}
                />
            )}

            {/* Mobile drawer */}
            <div
                className={`fixed inset-0 z-90 lg:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                aria-hidden={!mobileOpen}
            >
                <button
                    type="button"
                    tabIndex={mobileOpen ? 0 : -1}
                    aria-label="Close navigation menu"
                    onClick={() => setMobileOpen(false)}
                    className={`absolute inset-0 bg-[#2E2A24]/50 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"
                        }`}
                />

                <aside
                    className={`absolute inset-y-0 left-0 flex w-[min(88vw,390px)] flex-col bg-[#FAF7F2] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="flex h-17.5 shrink-0 items-center justify-between border-b border-[#DCC7B2]/70 px-5">
                        <Logo onClick={closeAll} />
                        <button
                            type="button"
                            aria-label="Close menu"
                            onClick={() => setMobileOpen(false)}
                            className="rounded-full p-2 text-[#6B5B44] transition hover:bg-[#EAD9CC]"
                        >
                            <X size={21} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-4 py-5">
                        <div className="mb-5 rounded-xl bg-linear-to-r from-[#42151F] to-[#6B2935] p-4 text-[#FAF7F2]">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#DCC7B2]">
                                Tradition meets modern style
                            </p>
                            <p className="mt-2 font-serif text-2xl leading-tight">
                                Elegance for
                                <br />
                                every occasion.
                            </p>
                            <Link
                                href="/occasion-wear"
                                onClick={closeAll}
                                className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#FAF7F2] px-3.5 py-2 text-xs text-[#6B2935]"
                            >
                                Explore Collection <ArrowUpRight size={14} />
                            </Link>
                        </div>

                        <nav aria-label="Mobile navigation" className="space-y-1">
                            {mobileMenuItems.map((item) => (
                                <div key={item.label}>
                                    {item.menu ? (
                                        <>
                                            <button
                                                type="button"
                                                aria-expanded={mobileExpanded === item.menu}
                                                onClick={() =>
                                                    setMobileExpanded((current) =>
                                                        current === item.menu ? null : item.menu
                                                    )
                                                }
                                                className={`flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-sm transition-colors ${mobileExpanded === item.menu
                                                    ? "bg-[#EAD9CC] text-[#6B2935]"
                                                    : "text-[#2E2A24] hover:bg-[#EAD9CC]/60"
                                                    }`}
                                            >
                                                {item.label}
                                                <ChevronDown
                                                    size={17}
                                                    className={`transition-transform duration-300 ${mobileExpanded === item.menu ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>

                                            <div
                                                className={`grid transition-[grid-template-rows,opacity] duration-300 ${mobileExpanded === item.menu
                                                    ? "grid-rows-[1fr] opacity-100"
                                                    : "grid-rows-[0fr] opacity-0"
                                                    }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="mb-2 ml-3 border-l border-[#DCC7B2] pl-3">
                                                        {(mobileSubcategories[item.menu] || []).map(
                                                            (subitem) => (
                                                                <Link
                                                                    key={subitem.name}
                                                                    href={subitem.href}
                                                                    onClick={closeAll}
                                                                    className="flex items-center justify-between rounded-r-lg px-3 py-3 text-xs text-[#6B5B44] transition hover:bg-[#EAD9CC]/60 hover:text-[#42151F]"
                                                                >
                                                                    {subitem.name}
                                                                    <ChevronRight size={14} />
                                                                </Link>
                                                            )
                                                        )}
                                                        <Link
                                                            href={item.href}
                                                            onClick={closeAll}
                                                            className="block px-3 py-3 text-xs font-semibold text-[#8A594C]"
                                                        >
                                                            View All {item.label} →
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={closeAll}
                                            className="flex items-center justify-between rounded-lg px-3 py-3.5 text-sm text-[#2E2A24] transition-colors hover:bg-[#EAD9CC]/60 hover:text-[#6B2935]"
                                        >
                                            {item.label}
                                            <ChevronRight size={16} className="text-[#B9987A]" />
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>

                    <div className="shrink-0 border-t border-[#DCC7B2]/70 bg-[#F8EEE5] p-4">
                        <div className="grid grid-cols-3 gap-2">
                            {[
                                { label: "Account", href: "/account", Icon: UserRound },
                                { label: "Wishlist", href: "/wishlist", Icon: Heart },
                                { label: "Orders", href: "/orders", Icon: Clock3 },
                            ].map(({ label, href, Icon }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    onClick={closeAll}
                                    className="flex flex-col items-center gap-2 rounded-xl py-3 text-xs text-[#6B5B44] transition hover:bg-[#EAD9CC]"
                                >
                                    <Icon size={19} />
                                    {label}
                                </Link>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={openSearch}
                            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-[#DCC7B2] bg-[#FAF7F2] py-3 text-sm text-[#6B5B44] transition hover:border-[#B9987A] hover:bg-[#EAD9CC]/50"
                        >
                            <Search size={17} /> Search Collection
                        </button>
                    </div>
                </aside>
            </div>
        </>
    );
}
