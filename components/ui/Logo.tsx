import { Leaf } from "lucide-react";
import Link from "next/link";

interface LogoProps {
    light?: boolean;
    onClick?: () => void;
}

export default function Logo({ light = false, onClick }: LogoProps) {
    return (
        <Link
            href="/"
            aria-label="Silaah home"
            onClick={onClick}
            className={`group flex shrink-0 items-center gap-2 ${
                light ? "text-[#FAF7F2]" : "text-[#6B5B44]"
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