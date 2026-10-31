
"use client"

import type { Dispatch, SetStateAction } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
    { name: "Sarees", count: 120 },
    { name: "Lehengas", count: 86 },
    { name: "Suits", count: 65 },
    { name: "Gowns", count: 40 },
    { name: "Sharara Sets", count: 52 },
    { name: "Dupattas", count: 30 },
    { name: "Men's Collection", count: 110 },
]

const fabrics = [
    { name: "Silk", count: 124 },
    { name: "Georgette", count: 98 },
    { name: "Organza", count: 86 },
    { name: "Chiffon", count: 60 },
    { name: "Velvet", count: 72 },
    { name: "Cotton", count: 45 },
]

const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

const colors = [
    { name: "Maroon", value: "#6B2935" },
    { name: "Pink", value: "#D98D9B" },
    { name: "Peach", value: "#EAB89C" },
    { name: "Green", value: "#667C58" },
    { name: "Beige", value: "#DCC7B2" },
    { name: "Navy", value: "#263A5B" },
    { name: "Brown", value: "#6B5B44" },
]

export type FilterState = {
    categories: string[]
    fabrics: string[]
    sizes: string[]
    colors: string[]
    price: number[]
}

type ProductFiltersProps = {
    filters: FilterState
    setFilters: Dispatch<SetStateAction<FilterState>>
    onApply?: () => void
    onClear?: () => void
    showActions?: boolean
}

export const initialFilters: FilterState = {
    categories: [],
    fabrics: [],
    sizes: [],
    colors: [],
    price: [0, 50000],
}

export default function ProductFilters({
    filters,
    setFilters,
    onApply,
    onClear,
    showActions = false,
}: ProductFiltersProps) {

    const toggleFilter = (
        key: "categories" | "fabrics" | "sizes" | "colors",
        value: string
    ) => {
        setFilters((prev) => ({
            ...prev,
            [key]: prev[key].includes(value)
                ? prev[key].filter((item) => item !== value)
                : [...prev[key], value],
        }))
    }

    const clearFilters = () => {
        setFilters(initialFilters)
        onClear?.()
    }

    return (
        <div className="flex h-full flex-col">

            <div className="flex-1 space-y-6 overflow-y-auto p-4">

                {/* Category */}
                <section className="space-y-3">
                    <h3 className="font-medium text-brand-heading-dark">
                        Category
                    </h3>

                    {categories.map((category) => (
                        <label
                            key={category.name}
                            className="flex cursor-pointer items-center justify-between text-sm"
                        >
                            <span className="flex items-center gap-2">
                                <Checkbox
                                    checked={filters.categories.includes(category.name)}
                                    onCheckedChange={() =>
                                        toggleFilter("categories", category.name)
                                    }
                                />
                                {category.name}
                            </span>

                            <span className="text-brand-Brown">
                                ({category.count})
                            </span>
                        </label>
                    ))}
                </section>

                <Separator />

                {/* Price */}
                <section className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-medium text-brand-heading-dark">
                            Price Range
                        </h3>

                        <span className="text-sm text-brand-muted-rosewood">
                            ₹{filters.price[0].toLocaleString("en-IN")} - ₹
                            {filters.price[1].toLocaleString("en-IN")}
                        </span>
                    </div>

                    <Slider
                        min={0}
                        max={50000}
                        step={500}
                        value={filters.price}
                        onValueChange={(value) =>
                            setFilters((prev) => ({
                                ...prev,
                                price: typeof value === "number"
                                    ? [value, prev.price[1]]
                                    : [...value],
                            }))
                        }
                    />

                    <div className="flex justify-between text-xs text-brand-Brown">
                        <span>₹0</span>
                        <span>₹10K</span>
                        <span>₹30K</span>
                        <span>₹50K</span>
                    </div>
                </section>

                <Separator />

                {/* Size */}
                <section className="space-y-3">
                    <h3 className="font-medium text-brand-heading-dark">
                        Size
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                type="button"
                                onClick={() => toggleFilter("sizes", size)}
                                className={cn(
                                    "h-9 min-w-10 rounded-md border px-3 text-sm transition",
                                    filters.sizes.includes(size)
                                        ? "border-brand-burgundy bg-brand-burgundy text-white"
                                        : "border-brand-beige text-brand-heading-dark hover:border-brand-burgundy"
                                )}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </section>

                <Separator />

                {/* Color */}
                <section className="space-y-3">
                    <h3 className="font-medium text-brand-heading-dark">
                        Color
                    </h3>

                    <div className="flex flex-wrap gap-3">
                        {colors.map((color) => (
                            <button
                                key={color.name}
                                type="button"
                                title={color.name}
                                aria-label={color.name}
                                aria-pressed={filters.colors.includes(color.name)}
                                onClick={() => toggleFilter("colors", color.name)}
                                className={cn(
                                    "flex size-8 items-center justify-center rounded-full border-2 transition",
                                    filters.colors.includes(color.name)
                                        ? "border-brand-burgundy ring-2 ring-brand-burgundy/20"
                                        : "border-transparent"
                                )}
                                style={{ backgroundColor: color.value }}
                            >
                                {filters.colors.includes(color.name) && (
                                    <span className="text-xs text-white">✓</span>
                                )}
                            </button>
                        ))}
                    </div>
                </section>

                <Separator />

                {/* Fabric */}
                <section className="space-y-3">
                    <h3 className="font-medium text-brand-heading-dark">
                        Fabric
                    </h3>

                    {fabrics.map((fabric) => (
                        <label
                            key={fabric.name}
                            className="flex cursor-pointer items-center justify-between text-sm"
                        >
                            <span className="flex items-center gap-2">
                                <Checkbox
                                    checked={filters.fabrics.includes(fabric.name)}
                                    onCheckedChange={() =>
                                        toggleFilter("fabrics", fabric.name)
                                    }
                                />
                                {fabric.name}
                            </span>

                            <span className="text-brand-Brown">
                                ({fabric.count})
                            </span>
                        </label>
                    ))}
                </section>

            </div>

            {showActions && (
                <div className="sticky bottom-0 flex gap-3 border-t border-brand-beige bg-brand-cream p-4">
                    <Button
                        variant="outline"
                        onClick={clearFilters}
                        className="flex-1 border-brand-burgundy text-brand-burgundy"
                    >
                        Clear All
                    </Button>

                    <Button
                        onClick={onApply}
                        className="flex-1 bg-brand-burgundy text-white hover:bg-brand-deep-burgundy"
                    >
                        Apply Filters
                    </Button>
                </div>
            )}
        </div>
    )
}
