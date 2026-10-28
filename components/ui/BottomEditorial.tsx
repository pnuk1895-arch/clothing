import { cn } from "@/lib/utils";
import type { IconType } from "react-icons";


export default function BottomEditorial({ BottomDetail }: {
    BottomDetail: {
        visible: boolean;
        Icon?: IconType;
        Text: string;
    }
}) {
    const Icon = BottomDetail.Icon
    return (
        <>
            {/* Bottom editorial accent */}
            < div
                className={
                    cn(
                        "mt-4 flex items-center justify-center gap-3 sm:mt-6",
                        "transition-all duration-700 delay-500",
                        BottomDetail.visible ? "opacity-100" : "opacity-0"
                    )
                }
            >
                <span className="h-px w-12 bg-linear-to-r from-transparent to-brand-tan/70" />
                {
                    Icon && (
                        <Icon className="text-brand-tan" size={15} />
                    )
                }

                <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-brand-muted-rosewood">
                    {BottomDetail.Text}
                </p>
                <span className="h-px w-12 bg-linear-to-l from-transparent to-brand-tan/70" />
            </div >
        </>

    )
}
