
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

import { cn } from "@/lib/utils";

export interface Collection {
  id: string;
  title: string;
  startingPrice: string;
  image: string;
  imageAlt: string;
  href: string;
}


interface CollectionDetail {
  heading?: string;
  description?: string;
  viewAllHref: string;
  className?: string
}

interface CollectionsYouLoveProps {
  collections: Collection[];
  CollectionDetail: CollectionDetail

}

export default function CollectionsYouLove({
  collections,
  CollectionDetail
}: CollectionsYouLoveProps) {
  return (
    <section
      aria-labelledby="collections-heading"
      className={cn(
        "w-full overflow-hidden bg-collections-section",
        CollectionDetail.className,
      )}
    >
      <div className="mx-auto max-w-content-area w-[90%] py-8 md:py-10 ">

        {/* Section heading */}
        <div className="mb-5 flex items-end justify-between gap-4 sm:mb-7">

          <div className="space-y-1.5">
            <h2
              id="collections-heading"
              className="font-serif text-2xl text-brand-heading-dark sm:text-3xl lg:text-4xl"
            >
              {CollectionDetail.heading}
            </h2>

            <p className="text-sm font-semibold leading-relaxed text-brand-Brown sm:text-base lg:text-lg">
              {CollectionDetail.description}
            </p>
          </div>

          <Link
            href={CollectionDetail.viewAllHref}
            className="group hidden shrink-0 gap-1 p-0 text-xs font-medium text-brand-burgundy hover:text-brand-rosewood sm:inline-flex"
          >
            View All
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Collection cards */}
        <div
          className={cn(
            "flex gap-3 overflow-x-auto pb-3",
            "snap-x snap-mandatory scrollbar-none",
            "sm:gap-4",
            "md:grid md:grid-cols-2 md:overflow-visible",
            "lg:grid-cols-4"
          )}
        >
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              href={collection.href}
              className={cn(
                "group relative block w-4/5 shrink-0 snap-start",
                "overflow-hidden rounded-md",
                "bg-brand-beige",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-brand-burgundy focus-visible:ring-offset-2",
                "transition-shadow duration-500 hover:shadow-brand-soft",
                "sm:w-3/5",
                "md:w-auto"
              )}
              aria-label={`Explore ${collection.title}, starting at ${collection.startingPrice}`}
            >
              {/* Collection image */}
              <div className="relative aspect-video overflow-hidden">

                <Image
                  src={collection.image}
                  alt={collection.imageAlt}
                  fill
                  sizes="(max-width: 639px) 80vw, (max-width: 767px) 60vw, (max-width: 1023px) 45vw, 25vw"
                  className={cn(
                    "object-cover object-center",
                    "transition-transform duration-700 ease-out",
                    "group-hover:scale-110"
                  )}
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-brand-deep-burgundy/80 via-brand-deep-burgundy/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Wishlist icon */}
                <span
                  className={cn(
                    "absolute right-3 top-3 z-10",
                    "flex size-8 items-center justify-center",
                    "rounded-full bg-brand-light-Cream/80",
                    "text-brand-burgundy backdrop-blur-sm",
                    "transition-all duration-300",
                    "group-hover:bg-brand-burgundy group-hover:text-brand-light-Cream"
                  )}
                  aria-hidden="true"
                >
                  <Heart className="size-4 transition-transform duration-300 group-hover:scale-110" />
                </span>

                {/* Collection details */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4">

                  <h3 className="font-serif text-base text-white transition-transform duration-300 group-hover:-translate-y-1 sm:text-lg">
                    {collection.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-white/90">
                    From {collection.startingPrice}
                  </p>

                </div>

                {/* Hover indicator */}
                <span className="absolute bottom-4 right-4 z-10 flex size-8 translate-y-3 items-center justify-center rounded-full bg-brand-light-Cream text-brand-burgundy opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-3 flex justify-end sm:hidden">
          <Link
            href={CollectionDetail.viewAllHref}
            className="gap-1 p-0 text-xs font-medium text-brand-burgundy flex"
          >
            View All Collections
            <ArrowRight className="size-4 transition-transform duration-300 " />
          </Link>
        </div>

      </div>
    </section>
  );
}
