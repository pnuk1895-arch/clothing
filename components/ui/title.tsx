import { cn } from "@/lib/utils";

export default function title({ SectionDetail }: { SectionDetail: {
    TopHeading: string ; visible: boolean ; MainContent: string;
} }) {
    return (
        <div
            className={cn(
                "mb-7 flex flex-col justify-between gap-4 sm:mb-9",
                "sm:flex-row sm:items-end",
                "transition-all duration-700",
                SectionDetail.visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
            )}
        >
            <div>
                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#9B7057] sm:text-[10px]">
                    {SectionDetail.TopHeading}
                </p>

                <h2
                    id="collections-heading"
                    className="font-serif text-3xl leading-tight tracking-[-0.035em] text-[#2E2A24] sm:text-4xl lg:text-5xl"
                >
                    Find Your
                    <span className="ml-2 italic text-[#7A2638]">
                        Signature Style
                    </span>
                </h2>

                <p className="mt-3 max-w-xl text-xs leading-6 text-[#6B5B44]/90 sm:text-sm">
                    {SectionDetail.MainContent}
                </p>
            </div>

        </div>
    )
}
