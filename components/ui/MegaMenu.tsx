import { ArrowUpRight, ChevronRight, Gem, Scissors, Shirt, Sparkles, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CategoryCards from "@/components/ui/CategoryCards"


const MEN_CATEGORIES = [
    { name: "Sherwanis", detail: "Wedding elegance", image: "https://images.unsplash.com/photo-1783188223691-8a233ee51cd8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", href: "/men/sherwanis" },
    { name: "Kurtas", detail: "Traditional comfort", image: "https://plus.unsplash.com/premium_photo-1691030255948-0276ee6f711e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", href: "/men/kurtas" },
    { name: "Nehru Jackets", detail: "Refined layering", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", href: "/men/jackets" },
    { name: "Indo-Western", detail: "Contemporary style", image: "https://images.unsplash.com/photo-1695461569773-e7c75f38ac3b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", href: "/men/indo-western" },
];

const WOMEN_CATEGORIES = [
    { name: "Sarees", detail: "Timeless elegance", image: "https://images.unsplash.com/photo-1679006831648-7c9ea12e5807?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", href: "/women/sarees" },
    { name: "Lehengas", detail: "For grand occasions", image: "https://images.unsplash.com/photo-1619715613791-89d35b51ff81?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", href: "/women/lehengas" },
    { name: "Kurtis & Suits", detail: "Everyday grace", image: "https://images.unsplash.com/photo-1745313452052-0e4e341f326c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", href: "/women/suits" },
    { name: "Gowns & Dresses", detail: "Modern statements", image: "https://images.unsplash.com/photo-1765871421513-452fe03d15cc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", href: "/women/gowns" },
];
const OCCASIONS = [
    { name: "Wedding Wear", href: "/occasion-wear/wedding" },
    { name: "Festive Wear", href: "/occasion-wear/festive" },
    { name: "Party Wear", href: "/occasion-wear/party" },
    { name: "Engagement", href: "/occasion-wear/engagement" },
    { name: "Mehendi", href: "/occasion-wear/mehendi" },
    { name: "Reception", href: "/occasion-wear/reception" },
];


interface MegaMenuProps {
    type: string;
    onNavigate: () => void;
}

export default function MegaMenu({ type, onNavigate }: MegaMenuProps) {
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
                        <p className="text-xxs font-semibold uppercase tracking-[0.24em] text-[#B9987A]">
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
                                    ? "/Women-Collection"
                                    : isMen
                                        ? "/Men-Collection"
                                        : isOccasion
                                            ? "/Occasion-Wear"
                                            : "/Custom-Services"
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
                                    ? "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1400&q=85"
                                    : "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85"
                            }
                            alt={isMen ? "Silaah men's collection" : "Silaah occasion collection"}
                            fill
                            loading="eager"
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