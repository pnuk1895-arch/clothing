"use client";

import Logo from "../ui/Logo";
import MegaMenu from "../ui/MegaMenu";
import SearchPanel from "../ui/search";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import Link from "next/link";
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
    Sparkles,
    Gem,
    Scissors,
    Clock3,
} from "lucide-react";


type MenuType = "women" | "men" | "occasion" | "services";

type Category = {
    name: string;
    href: string;
    detail?: string;
    image?: string;
};

type NavLinkItem = {
    label: string;
    href: string;
    menu?: MenuType;
};

const MEN_CATEGORIES: Category[] = [
    { name: "Sherwanis", detail: "Wedding elegance", image: "/Images/menu/sherwani.webp", href: "/men/sherwanis" },
    { name: "Kurtas", detail: "Traditional comfort", image: "/Images/menu/kurtas.webp", href: "/men/kurtas" },
    { name: "Nehru Jackets", detail: "Refined layering", image: "/Images/menu/jackets.webp", href: "/men/jackets" },
    { name: "Indo-Western", detail: "Contemporary style", image: "/Images/menu/indo-western.webp", href: "/men/indo-western" },
];

const WOMEN_CATEGORIES: Category[] = [
    { name: "Sarees", detail: "Timeless elegance", image: "/Images/menu/sarees.webp", href: "/women/sarees" },
    { name: "Lehengas", detail: "For grand occasions", image: "/Images/menu/lehengas.webp", href: "/women/lehengas" },
    { name: "Kurtis & Suits", detail: "Everyday grace", image: "/Images/menu/suits.webp", href: "/women/suits" },
    { name: "Gowns & Dresses", detail: "Modern statements", image: "/Images/menu/gowns.webp", href: "/women/gowns" },
];

const OCCASIONS: Category[] = [
    { name: "Wedding Wear", href: "/occasion-wear/wedding" },
    { name: "Festive Wear", href: "/occasion-wear/festive" },
    { name: "Party Wear", href: "/occasion-wear/party" },
    { name: "Engagement", href: "/occasion-wear/engagement" },
    { name: "Mehendi", href: "/occasion-wear/mehendi" },
    { name: "Reception", href: "/occasion-wear/reception" },
];

const NAV_LINKS: NavLinkItem[] = [
    { label: "New Arrivals", href: "/New-Arrival" },
    { label: "Women", href: "/Women-collection", menu: "women" },
    { label: "Men", href: "/Men-collection", menu: "men" },
    { label: "Occasion Wear", href: "/Occasion-Wear", menu: "occasion" },
    { label: "Custom Services", href: "/Custom-Services", menu: "services" },
    { label: "Our Story", href: "/About" },
    { label: "Contact", href: "/Contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<MenuType | null>(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<MenuType | null>(null);
    const [query, setQuery] = useState("");
    const headerRef = useRef<HTMLElement | null>(null);

    const closeAll = useCallback(() => {
        setActiveMenu(null);
        setSearchOpen(false);
        setMobileOpen(false);
        setMobileExpanded(null);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeAll();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [closeAll]);

    useEffect(() => {
        if (!activeMenu) return;

        const handleOutsideClick = (event: PointerEvent) => {
            if (!headerRef.current?.contains(event.target as Node)) {
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

    const showMenu = (menu: MenuType) => {
        setActiveMenu((current) => (current === menu ? null : menu));
        setSearchOpen(false);
    };

    const openSearch = () => {
        setSearchOpen(true);
        setActiveMenu(null);
        setMobileOpen(false);
    };

    const mobileMenuItems = NAV_LINKS;

    const mobileSubcategories: Record<MenuType, Category[]> = {
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
            <header ref={headerRef} className={cn("fixed inset-x-0 top-0 z-50 isolate w-full",
            // scrolled ? "fixed" : "sticky lg:relative" 
            )}>
                {/* Animated background */}
                <div
                    aria-hidden="true"
                    className={cn(
                        "pointer-events-none absolute inset-0 -z-10",
                        "bg-linear-to-r from-brand-heading-dark/95 via-brand-brown/95 to-brand-heading-dark/95",
                        "backdrop-blur-xl transition-opacity duration-700 ease-in-out",
                        scrolled ? "opacity-100 shadow-lg" : "opacity-0 shadow-none"
                    )}
                />

                {/* Announcement strip */}
                <div
                    className={`hidden h-7 items-center justify-center border-b border-white/10 bg-linear-to-r from-brand-heading-dark/90 via-brand-rosewood/80 to-brand-deep-burgundy/90 text-xxs font-medium tracking-wide text-brand-cream transition-all duration-500 sm:flex ${scrolled ? "opacity-0 -translate-y-full h-0 overflow-hidden" : ""}`}
                >
                    <div className="mx-auto flex w-[90%] max-w-content-area items-center justify-between gap-3">
                        <span className="flex items-center gap-1.5">
                            <Sparkles size={11} className="text-brand-beige" />
                            Free Shipping on Orders Above ₹2999
                        </span>
                        <span className="hidden items-center gap-1.5 md:flex">
                            <Scissors size={11} className="text-brand-beige" />
                            Custom Tailoring Available
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Gem size={11} className="text-brand-beige" />
                            Easy Returns <span className="opacity-50">|</span> Secure Payments
                        </span>
                    </div>
                </div>

                {/* Main navigation */}
                <div
                    className={`relative transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled
                            ? "border-b border-brand-beige/70 bg-linear-to-r from-brand-cream/95 via-brand-light-cream/80 to-brand-beige/90 shadow-brand-soft backdrop-blur-xl "
                            : "border-b border-white/15 max-lg:bg-linear-to-r max-lg:from-brand-cream/95 max-lg:via-brand-light-cream/80 max-lg:to-brand-beige/90 max-lg:shadow-brand-soft bg-linear-to-b from-brand-heading-dark/10 to-transparent"
                        }`}
                >
                    <div className="mx-auto w-[90%] flex h-16.5 max-w-content-area items-center justify-between gap-3 lg:h-19">
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
                            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 hover:bg-brand-beige/30 lg:hidden"
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
                            className="hidden flex-1 items-center justify-center min-[1120px]:gap-1 xl:gap-4 lg:flex"
                        >
                            {NAV_LINKS.map((item) => (
                                <div key={item.label} className="relative">
                                    <Link
                                        href={item.href}
                                        aria-haspopup={item.menu ? "true" : undefined}
                                        aria-expanded={item.menu ? activeMenu === item.menu : undefined}
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
                                        className="group relative inline-flex items-center gap-1 rounded-full px-1.5 py-3 text-[14px] font-medium text-brand-heading-dark transition-all duration-300 ease-out xl:text-[16px] 2xl:px-3 whitespace-nowrap hover:scale-114 hover:bg-brand-light-cream hover:text-brand-burgundy hover:filter-[drop-shadow(0_0_10px_var(--color-brand-ten))]"
                                    >
                                        {item.label}
                                        {item.menu && (
                                            <ChevronDown
                                                size={14}
                                                className={`transition-transform duration-300 ${activeMenu === item.menu ? "rotate-180" : ""}`}
                                            />
                                        )}
                                        <span className="absolute inset-x-2 bottom-1 h-0.5 origin-center scale-x-0 rounded-full bg-current opacity-80 shadow-[0_0_8px_currentColor] transition-all duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100" />
                                    </Link>
                                </div>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex shrink-0 items-center gap-0 sm:gap-1 min-[1130px]:gap-5">
                            <button
                                type="button"
                                aria-label="Search products"
                                onClick={openSearch}
                                className="group inline-flex size-9 items-center justify-center rounded-full transition-all duration-300 hover:bg-brand-beige/30 sm:size-10"
                            >
                                <Search className="transition-transform size-6 duration-300 group-hover:scale-110 xl:size-6" />
                            </button>

                            <Link
                                href="/account"
                                aria-label="My account"
                                className="hidden size-9 items-center justify-center rounded-full transition-all duration-300 hover:bg-brand-beige/30 sm:inline-flex"
                            >
                                <UserRound className="size-5 xl:size-6" />
                            </Link>

                            <Link
                                href="/wishlist"
                                aria-label="Wishlist"
                                className="hidden size-9 items-center justify-center rounded-full transition-all duration-300 hover:bg-brand-beige/30 sm:inline-flex"
                            >
                                <Heart className="transition-transform duration-300 hover:scale-110 xl:size-6" />
                            </Link>

                            <Link
                                href="/cart"
                                aria-label="Shopping bag"
                                className="relative inline-flex size-9 items-center justify-center rounded-full transition-all duration-300 hover:bg-brand-beige/30 sm:size-10"
                            >
                                <ShoppingBag className="size-5 xl:size-6" />
                                <span className="absolute right-0.5 top-0.5 flex size-4 items-center justify-center rounded-full bg-brand-brown text-[9px] font-semibold text-white ring-2 ring-red-700">
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
                className={`fixed inset-0 z-90 lg:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
                aria-hidden={!mobileOpen}
            >
                <button
                    type="button"
                    tabIndex={mobileOpen ? 0 : -1}
                    aria-label="Close navigation menu"
                    onClick={() => setMobileOpen(false)}
                    className={`absolute inset-0 bg-brand-heading-dark/50 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
                />

                <aside
                    className={`absolute inset-y-0 left-0 flex w-[min(88vw,390px)] flex-col bg-brand-cream shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="flex h-17.5 shrink-0 items-center justify-between border-b border-brand-beige/70 px-5">
                        <Logo onClick={closeAll} />
                        <button
                            type="button"
                            aria-label="Close menu"
                            onClick={() => setMobileOpen(false)}
                            className="rounded-full p-2 text-brand-brown transition hover:bg-brand-soft-card-beige"
                        >
                            <X size={21} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-4 py-5">
                        <div className="mb-5 rounded-xl bg-linear-to-r from-brand-deep-burgundy/97 to-brand-rosewood/80 p-4 text-brand-cream">
                            <p className="text-xxs uppercase tracking-[0.2em] text-brand-beige">
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
                                className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-cream px-3.5 py-2 text-xs text-brand-rosewood"
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
                                                        current === item.menu ? null : item.menu ?? null
                                                    )
                                                }
                                                className={`flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-sm transition-colors ${mobileExpanded === item.menu
                                                        ? "bg-brand-soft-card-beige text-brand-rosewood"
                                                        : "text-brand-heading-dark hover:bg-brand-soft-card-beige/60"
                                                    }`}
                                            >
                                                {item.label}
                                                <ChevronDown
                                                    size={17}
                                                    className={`transition-transform duration-300 ${mobileExpanded === item.menu ? "rotate-180" : ""}`}
                                                />
                                            </button>

                                            <div
                                                className={`grid transition-[grid-template-rows,opacity] duration-300 ${mobileExpanded === item.menu
                                                        ? "grid-rows-[1fr] opacity-100"
                                                        : "grid-rows-[0fr] opacity-0"
                                                    }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="mb-2 ml-3 border-l border-brand-beige pl-3">
                                                        {(mobileSubcategories[item.menu] || []).map((subitem) => (
                                                            <Link
                                                                key={subitem.name}
                                                                href={subitem.href}
                                                                onClick={closeAll}
                                                                className="flex items-center justify-between rounded-r-lg px-3 py-3 text-xs text-brand-brown transition hover:bg-brand-soft-card-beige/60 hover:text-brand-burgundy"
                                                            >
                                                                {subitem.name}
                                                                <ChevronRight size={14} />
                                                            </Link>
                                                        ))}
                                                        <Link
                                                            href={item.href}
                                                            onClick={closeAll}
                                                            className="block px-3 py-3 text-xs font-semibold text-brand-muted-rosewood"
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
                                            className="flex items-center justify-between rounded-lg px-3 py-3.5 text-sm text-brand-heading-dark transition-colors hover:bg-brand-soft-card-beige/60 hover:text-brand-rosewood"
                                        >
                                            {item.label}
                                            <ChevronRight size={16} className="text-brand-tan" />
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>

                    <div className="shrink-0 border-t border-brand-beige/70 bg-brand-light-cream p-4">
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
                                    className="flex flex-col items-center gap-2 rounded-xl py-3 text-xs text-brand-brown transition hover:bg-brand-soft-card-beige"
                                >
                                    <Icon size={19} />
                                    {label}
                                </Link>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={openSearch}
                            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-brand-beige bg-brand-cream py-3 text-sm text-brand-brown transition hover:border-brand-tan hover:bg-brand-soft-card-beige/50"
                        >
                            <Search size={17} /> Search Collection
                        </button>
                    </div>
                </aside>
            </div>
        </>
    );
}