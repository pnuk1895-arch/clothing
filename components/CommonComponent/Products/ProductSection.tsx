
"use client"

import { useMemo, useState } from "react"
import { ArrowUpDown } from "lucide-react"

import FilterSidebar from "./FilterSidebar"

type FilterState = {
  categories: string[]
  fabrics: string[]
  sizes: string[]
  colors: string[]
  price: number[]
}

const initialFilters: FilterState = {
  categories: [],
  fabrics: [],
  sizes: [],
  colors: [],
  price: [0, 100000],
}

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Separator } from "@/components/ui/separator"

const products = [
  {
    id: 1,
    name: "Embroidered Velvet Lehenga",
    category: "Lehengas",
    fabric: "Velvet",
    size: ["S", "M", "L"],
    color: "Maroon",
    price: 24099,
    image: "/images/products/lehenga.webp",
  },
  {
    id: 2,
    name: "Designer Silk Saree",
    category: "Sarees",
    fabric: "Silk",
    size: ["S", "M", "L", "XL"],
    color: "Beige",
    price: 8499,
    image: "/images/products/saree.webp",
  },
  {
    id: 3,
    name: "Classic Anarkali Suit",
    category: "Suits",
    fabric: "Georgette",
    size: ["M", "L", "XL"],
    color: "Pink",
    price: 6999,
    image: "/images/products/suit.webp",
  },
  {
    id: 4,
    name: "Elegant Wedding Gown",
    category: "Gowns",
    fabric: "Organza",
    size: ["S", "M", "L"],
    color: "Green",
    price: 15999,
    image: "/images/products/gown.webp",
  },
]

type SortOption = "newest" | "price-low" | "price-high"

export default function ProductSection() {
  const [filters, setFilters] = useState<FilterState>(initialFilters)

  const [sortBy, setSortBy] = useState<SortOption>("newest")

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch =
        filters.categories.length === 0 ||
        filters.categories.includes(product.category)

      const fabricMatch =
        filters.fabrics.length === 0 ||
        filters.fabrics.includes(product.fabric)

      const sizeMatch =
        filters.sizes.length === 0 ||
        filters.sizes.some((size) => product.size.includes(size))

      const colorMatch =
        filters.colors.length === 0 ||
        filters.colors.includes(product.color)

      const priceMatch =
        product.price >= filters.price[0] &&
        product.price <= filters.price[1]

      return (
        categoryMatch &&
        fabricMatch &&
        sizeMatch &&
        colorMatch &&
        priceMatch
      )
    })

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price)
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  }, [filters, sortBy])

  return (
    <section className="mx-auto w-[90%] max-w-content-area py-10">

      <div className="flex flex-col gap-5 lg:flex-row">

        {/* Filter Sidebar / Drawer */}
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
        />

        {/* Products Area */}
        <div className="min-w-0 flex-1">

          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4">

            <div className="flex items-center gap-3">
             

              <p className="text-sm text-brand-Brown">
                <span className="font-semibold text-brand-heading-dark">
                  {filteredProducts.length}
                </span>{" "}
                Products
              </p>
            </div>

            <Select
              value={sortBy}
              onValueChange={(value) =>
                setSortBy(value as SortOption)
              }
            >
              <SelectTrigger className="w-44 border-brand-beige bg-brand-cream">
                <ArrowUpDown size={15} />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">
                  Price: Low to High
                </SelectItem>
                <SelectItem value="price-high">
                  Price: High to Low
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator className="my-5 bg-brand-beige" />

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 xl:grid-cols-3">

              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group min-w-0"
                >
                  <div className="aspect-3/4 overflow-hidden rounded-lg bg-brand-light-Cream">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="space-y-1 pt-3">
                    <h3 className="line-clamp-1 text-sm font-medium text-brand-heading-dark">
                      {product.name}
                    </h3>

                    <p className="text-sm font-semibold text-brand-burgundy">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>
                  </div>
                </article>
              ))}

            </div>
          ) : (
            <div className="flex min-h-64 flex-col items-center justify-center text-center">
              <h3 className="font-serif text-xl text-brand-heading-dark">
                No products found
              </h3>

              <p className="mt-2 text-sm text-brand-Brown">
                Try changing or clearing your filters.
              </p>

              <button
                type="button"
                onClick={() => setFilters(initialFilters)}
                className="mt-4 text-sm text-brand-burgundy underline"
              >
                Clear all filters
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
