"use client";

import { Search, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface SearchPanelProps {
    query: string;
    setQuery: (query: string) => void;
    onClose: () => void;
}

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

export default function SearchPanel({
    query,
    setQuery,
    onClose,
}: SearchPanelProps) {
    const inputRef = useRef<HTMLInputElement>(null);
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
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            setQuery(event.target.value)
                        }
                        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
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