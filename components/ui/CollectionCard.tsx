import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import { GiFlowerEmblem } from "react-icons/gi";

type Collection = {
    theme: "women" | "men";
    image: import("next/image").ImageProps["src"];
    imageAlt: string;
    position: string;
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    href: string;
    button: string;
};
type CollectionCardProps = {
    collection: Collection;
    index: number;
    visible: boolean;
};

export default function CollectionCard({ collection, index, visible }: CollectionCardProps) {
    const isWomen = collection.theme === "women";

    return (
        <article
            className={cn(
                "group relative isolate min-h-90 overflow-hidden",
                "rounded-2xl border border-brand-beige/60",
                "bg-collection-card shadow-collection-card",
                "transition-all duration-700 ease-out",
                "hover:-translate-y-1 hover:shadow-collection-card-hover",
                "sm:min-h-105 lg:min-h-110",
                visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
            )}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {/* Full-bleed collection photography */}
            <Image
                src={collection.image}
                alt={collection.imageAlt}
                fill 
                loading="eager"
                priority={index === 0}
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 50vw"
                className={cn(
                    "object-cover transition-transform duration-1000",
                    "ease-out group-hover:scale-105",
                    collection.position,
                    
                )}
            />

            {/* Warm image overlay for readable text */}
            <div
                aria-hidden="true"
                className={cn(
                    "absolute inset-0 z-0",
                    isWomen
                        ? "bg-hero-overlay-tablet"
                        : "bg-hero-overlay-tablet",
                    "transition-opacity duration-500 group-hover:opacity-90"
                )}
            />

            {/* Subtle luxury vignette */}
            <div
                aria-hidden="true"
                className="absolute inset-0 z-0 bg-collection-vignette"
            />

            {/* Decorative corner detail */}
            <div
                aria-hidden="true"
                className={cn(
                    "pointer-events-none absolute left-5 top-5 z-10",
                    "flex size-10 items-center justify-center rounded-full",
                    "border border-brand-tan/50 bg-brand-cream/55",
                    "text-brand-muted-rosewood backdrop-blur-sm",
                    "transition-all duration-500",
                    "group-hover:rotate-12 group-hover:bg-brand-Brown",
                    "group-hover:text-brand-cream",
                    "sm:left-7 sm:top-7"
                )}
            >
                {isWomen ? (
                    <GiFlowerEmblem className="text-xl" />
                ) : (
                    <FiStar className="text-xl" />
                )}
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-90 flex-col items-start justify-end p-6 sm:min-h-105 sm:p-8 lg:min-h-110 lg:p-10">
                <span
                    className={cn(
                        "mb-3 text-[9px] font-semibold uppercase tracking-[0.24em]",
                        "text-brand-muted-rosewood sm:text-xxs"
                    )}
                >
                    {collection.eyebrow}
                </span>

                <h2
                    className={cn(
                        "max-w-75 font-serif text-3xl font-medium leading-[1.08]",
                        "tracking-[-0.035em] text-brand-heading-dark",
                        "sm:text-4xl lg:text-5xl"
                    )}
                >
                    {collection.title}
                    <span className="mt-1 block italic text-brand-rosewood">
                        {collection.accent}
                    </span>
                </h2>

                <p className="mt-4 max-w-75 text-xs leading-6 text-brand-Brown sm:text-sm">
                    {collection.description}
                </p>

                <Link
                    href={collection.href}
                    className={cn(
                        "group/button mt-6 inline-flex items-center gap-3",
                        "rounded-sm border border-brand-rosewood bg-brand-rosewood",
                        "px-5 py-3 text-xs font-medium text-brand-cream",
                        "shadow-md shadow-brand-rosewood/10",
                        "transition-all duration-300",
                        "hover:border-brand-deep-burgundy hover:bg-brand-deep-burgundy",
                        "hover:shadow-lg hover:shadow-brand-rosewood/25",
                        "focus-visible:outline-none focus-visible:ring-2",
                        "focus-visible:ring-brand-tan focus-visible:ring-offset-2"
                    )}
                >
                    {collection.button}
                    <FiArrowUpRight className="text-base transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-0.5" />
                </Link>

                <span
                    aria-hidden="true"
                    className={cn(
                        "absolute bottom-6 right-6 font-serif text-5xl italic",
                        "text-brand-cream/70 transition-all duration-500",
                        "group-hover:-translate-y-1 group-hover:text-white/90",
                        "sm:bottom-8 sm:right-8 sm:text-6xl"
                    )}
                >
                    0{index + 1}
                </span>
            </div>

            {/* Fine accent line */}
            <div
                aria-hidden="true"
                className={cn(
                    "absolute bottom-0 left-0 z-20 h-1 w-0",
                    "bg-collection-accent-line",
                    "transition-all duration-700 group-hover:w-full"
                )}
            />
        </article>
    );
}