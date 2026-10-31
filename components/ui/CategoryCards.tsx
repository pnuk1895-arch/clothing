import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


interface CategoryItem {
    name: string;
    href: string;
    image: string;
    detail: string;
}

interface CategoryCardsProps {
    items: CategoryItem[];
    onNavigate: () => void;
}

export default function CategoryCards({ items, onNavigate }: CategoryCardsProps) {
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
                            loading="eager"
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