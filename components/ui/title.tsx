import { cn } from "@/lib/utils";
import Link from "next/link";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Title({ SectionDetail }: {
    SectionDetail: {
        TopHeading: string;
        MainTitle: {
            First: string;
            Second?: string;
        }
        MainContent: string;
    }
}) {
    return (
        
            <div className="max-w-2xl">
                <span className="mb-2 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-muted-rosewood sm:text-[11px]">
                    <span className="h-px w-7 bg-brand-tan" />
                    {SectionDetail?.TopHeading}
                </span>

                <h2
                    id="perfect-look-heading"
                    className="font-serif text-3xl font-medium leading-tight tracking-[-0.035em] text-brand-heading-dark sm:text-4xl lg:text-[46px]"
                >
                    {SectionDetail.MainTitle?.First}
                    <span className="italic text-brand-rosewood">
                        {SectionDetail?.MainTitle?.Second}
                    </span>
                </h2>

                <p className="mt-2 max-w-xl text-xs leading-6 text-brand-Brown/80 sm:text-sm">
                    {SectionDetail?.MainContent}
                </p>
            </div>
    )
}
