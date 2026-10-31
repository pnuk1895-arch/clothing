
"use client"

import { useState } from "react"
import { SlidersHorizontal } from "lucide-react"
import type { Dispatch, SetStateAction } from "react"

import ProductFilters, {
  type FilterState,
} from "./ProductFilters"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"

type FilterSidebarProps = {
  filters: FilterState
  setFilters: Dispatch<SetStateAction<FilterState>>
  onApply?: () => void
}

export default function FilterSidebar({
  filters,
  setFilters,
  onApply,
}: FilterSidebarProps) {
  const [open, setOpen] = useState(false)

  const activeCount =
    filters.categories.length +
    filters.fabrics.length +
    filters.sizes.length +
    filters.colors.length

  const handleApply = () => {
    onApply?.()
    setOpen(false)
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-brand-beige lg:block">
        <div className="sticky top-24">
          <div className="flex items-center justify-between px-4 py-5">
            <h2 className="font-serif text-lg text-brand-heading-dark">
              Filter & Refine
            </h2>

            <button
              type="button"
              onClick={() =>
                setFilters({
                  categories: [],
                  fabrics: [],
                  sizes: [],
                  colors: [],
                  price: [0, 50000],
                })
              }
              className="text-xs text-brand-burgundy hover:underline"
            >
              Clear All
            </button>
          </div>

          <ProductFilters
            filters={filters}
            setFilters={setFilters}
          />
        </div>
      </aside>

      {/* Tablet and Mobile Filter Button */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                className="gap-2 border-brand-beige text-brand-heading-dark"
              />
            }
          >
            <SlidersHorizontal size={16} />
            Filter & Refine

            {activeCount > 0 && (
              <span className="flex size-5 items-center justify-center rounded-full bg-brand-burgundy text-xs text-white">
                {activeCount}
              </span>
            )}
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex h-full w-full max-w-none flex-col gap-0 overflow-hidden bg-brand-cream p-0 md:w-105 md:max-w-105"
          >
            <SheetHeader className="border-b border-brand-beige px-5 py-4 pr-14">
              <SheetTitle className="font-serif text-xl text-brand-heading-dark">
                Filter & Refine
              </SheetTitle>

              <SheetDescription>
                Find your perfect style.
              </SheetDescription>
            </SheetHeader>

            <div className="min-h-0 flex-1 overflow-y-auto">
              <ProductFilters
                filters={filters}
                setFilters={setFilters}
              />
            </div>

            <div className="flex gap-3 border-t border-brand-beige bg-brand-cream p-4">
              <Button
                variant="outline"
                className="flex-1 border-brand-burgundy text-brand-burgundy"
                onClick={() =>
                  setFilters({
                    categories: [],
                    fabrics: [],
                    sizes: [],
                    colors: [],
                    price: [0, 50000],
                  })
                }
              >
                Clear All
              </Button>

              <Button
                onClick={handleApply}
                className="flex-1 bg-brand-burgundy text-white hover:bg-brand-deep-burgundy"
              >
                Apply Filters
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
