import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";


export default function ViewAll({ link, Text }: { link: string; Text: string }) {
    return (
        <Link
            href={link}
            className="group inline-flex items-center gap-2 text-xs font-semibold text-brand-rosewood transition-colors hover:text-brand-heading-dark sm:text-sm whitespace-nowrap "
        >
            {Text}
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
    )
}
