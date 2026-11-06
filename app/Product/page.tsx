
"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import {
  Heart,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ShoppingBag,
  CalendarDays,
  Star,
  ShieldCheck,
  Scissors,
  Shirt,
  Truck,
  PackageCheck,
  RefreshCw,
  WashingMachine,
  Ban,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

// Product images
const productImages = [
  {
    id: 1,
    src: "/Images/Products/Sherwani/front.webp",
    alt: "Front view of embroidered sherwani",
  },
  {
    id: 2,
    src: "/Images/Products/Sherwani/detail.webp",
    alt: "Sherwani embroidery detail",
  },
  {
    id: 3,
    src: "/Images/Products/Sherwani/back.webp",
    alt: "Back view of sherwani",
  },
  {
    id: 4,
    src: "/Images/Products/Sherwani/fabric.webp",
    alt: "Sherwani fabric close-up",
  },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const colors = [
  { name: "Ivory", value: "#F2DFC5" },
  { name: "Burgundy", value: "#70202E" },
  { name: "Beige", value: "#D9B99A" },
];

const benefits = [
  {
    title: "Custom Tailoring",
    description: "For the perfect fit",
    icon: Scissors,
  },
  {
    title: "Premium Fabric",
    description: "Luxurious & comfortable",
    icon: Shirt,
  },
  {
    title: "Secure Payment",
    description: "100% safe & trusted",
    icon: ShieldCheck,
  },
];

const careInstructions = [
  { title: "Dry Clean Only", icon: WashingMachine },
  { title: "Do Not Bleach", icon: Ban },
  { title: "Low Heat Iron", icon: Shirt },
  { title: "Hang in Shade", icon: CheckCircle2 },
];

const reviewData = [
  {
    id: 1,
    name: "Aman K.",
    initial: "A",
    title: "Beautiful Craftsmanship!",
    description:
      "The embroidery and fit are just perfect. Wore it for my wedding and got so many compliments.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rohit S.",
    initial: "R",
    title: "Great Quality",
    description:
      "Premium fabric, rich look and very comfortable to wear.",
    rating: 5,
  },
];

const ratingDistribution = [
  { stars: 5, percentage: 72 },
  { stars: 4, percentage: 18 },
  { stars: 3, percentage: 6 },
  { stars: 2, percentage: 2 },
  { stars: 1, percentage: 2 },
];

export default function ProductDetailsSection() {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Ivory");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("product");

  const currentImage = productImages[activeImage];

  const previousImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setActiveImage((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-brand-cream">

      <div className="mx-auto w-[92%] max-w-content-area">

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 py-4 text-xs text-brand-Brown sm:gap-3 sm:text-sm">
          <span className="hover:text-brand-rosewood cursor-pointer transition-colors">
            Home
          </span>
          <ChevronRight className="size-3" />
          <span className="hover:text-brand-rosewood cursor-pointer transition-colors">
            Men
          </span>
          <ChevronRight className="size-3" />
          <span className="hover:text-brand-rosewood cursor-pointer transition-colors">
            Sherwanis
          </span>
          <ChevronRight className="size-3" />
          <span className="font-semibold text-brand-rosewood">
            Embroidered Sherwani
          </span>
        </div>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">

          {/* Product Gallery */}
          <div className="flex min-w-0 flex-col gap-3 sm:flex-row">

            {/* Desktop / Tablet Thumbnails */}
            <div className="hidden w-20 shrink-0 flex-col items-center gap-2 sm:flex lg:w-24">

              <button
                onClick={previousImage}
                aria-label="Previous thumbnail"
                className="flex size-8 items-center justify-center text-brand-heading-dark transition-colors hover:text-brand-rosewood"
              >
                <ChevronUp />
              </button>

              <div className="flex w-full flex-col gap-3">
                {productImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setActiveImage(index)}
                    aria-label={`View image ${index + 1}`}
                    className={cn(
                      "relative aspect-3/4 w-full overflow-hidden rounded-xl border-2 transition-all duration-300 hover:border-brand-rosewood",
                      activeImage === index
                        ? "border-brand-rosewood ring-2 ring-brand-rosewood/20"
                        : "border-transparent"
                    )}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="96px"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={nextImage}
                aria-label="Next thumbnail"
                className="flex size-8 items-center justify-center text-brand-heading-dark transition-colors hover:text-brand-rosewood"
              >
                <ChevronDown />
              </button>
            </div>

            {/* Main Image */}
            <div className="group relative min-w-0 flex-1">

              <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-brand-light-Cream sm:aspect-4/5 lg:aspect-4/5">

                <Image
                  key={currentImage.src}
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 65vw, 40vw"
                  className="object-cover object-top transition-all duration-700 group-hover:scale-[1.03]"
                />

                {/* Wishlist */}
                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  aria-label="Add to wishlist"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="absolute right-3 top-3 size-10 rounded-full bg-brand-cream/95 text-brand-rosewood shadow-md transition-all duration-300 hover:scale-110 hover:bg-white"
                >
                  <Heart
                    className={cn(
                      "size-5 transition-all",
                      isWishlisted && "fill-brand-rosewood"
                    )}
                  />
                </Button>

                {/* Fullscreen Image */}
                <Dialog>
                  <DialogTrigger>
                    <Button
                      type="button"
                      variant="secondary"
                      size="icon"
                      aria-label="View full image"
                      className="absolute bottom-3 right-3 size-10 rounded-full bg-brand-cream/95 text-brand-rosewood shadow-md transition-all hover:scale-110 hover:bg-white"
                    >
                      <Maximize2 className="size-5" />
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl border-brand-beige bg-brand-cream p-2">
                    <div className="relative aspect-4/5 max-h-[85vh] w-full">
                      <Image
                        src={currentImage.src}
                        alt={currentImage.alt}
                        fill
                        sizes="90vw"
                        className="object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Mobile Image Navigation */}
                <div className="absolute inset-y-1/2 flex w-full -translate-y-1/2 justify-between px-2 sm:hidden">
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={previousImage}
                    aria-label="Previous image"
                    className="size-9 rounded-full bg-brand-cream/95"
                  >
                    <ChevronLeft />
                  </Button>

                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={nextImage}
                    aria-label="Next image"
                    className="size-9 rounded-full bg-brand-cream/95"
                  >
                    <ChevronRight />
                  </Button>
                </div>
              </div>

              {/* Mobile Horizontal Thumbnail Carousel */}
              <div className="flex items-center gap-2 overflow-x-auto py-2 scrollbar-none sm:hidden">
                {productImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setActiveImage(index)}
                    aria-label={`View image ${index + 1}`}
                    className={cn(
                      "relative aspect-3/4 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300",
                      activeImage === index
                        ? "border-brand-rosewood"
                        : "border-transparent"
                    )}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="flex min-w-0 flex-col gap-4 lg:py-2">

            <div>
              <h1 className="font-serif text-2xl font-medium text-brand-deep-burgundy sm:text-3xl lg:text-4xl">
                Embroidered Sherwani
              </h1>

              <p className="mt-2 text-sm leading-relaxed text-brand-heading-dark sm:text-base">
                A regal sherwani with intricate hand embroidery,
                perfect for weddings and grand celebrations.
              </p>
            </div>

            {/* Price */}
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-serif text-2xl font-semibold text-brand-deep-burgundy sm:text-3xl">
                ₹34,999
              </h2>
              <span className="text-xs text-brand-Brown sm:text-sm">
                Inclusive of all taxes
              </span>
            </div>

            {/* Rating */}
            <button
              type="button"
              onClick={() => setActiveTab("reviews")}
              className="flex w-fit items-center gap-2 text-sm transition-opacity hover:opacity-75 sm:gap-3"
            >
              <span className="flex text-amber-600">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-current sm:size-5"
                  />
                ))}
              </span>
              <span className="text-brand-heading-dark">
                (128 Reviews)
              </span>
            </button>

            <div className="border-t border-brand-beige/80" />

            {/* Color Selection */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-brand-heading-dark sm:text-base">
                Color: {selectedColor}
              </h3>

              <div className="flex items-center gap-4">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color.name)}
                    aria-label={`Select ${color.name}`}
                    className={cn(
                      "size-9 rounded-full border-2 border-transparent p-1 transition-all duration-300 hover:scale-110",
                      selectedColor === color.name &&
                      "border-brand-rosewood"
                    )}
                  >
                    <span
                      className="block size-full rounded-full border border-black/10"
                      style={{ backgroundColor: color.value }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-brand-heading-dark sm:text-base">
                  Size: {selectedSize}
                </h3>

                <button
                  type="button"
                  className="flex items-center gap-2 text-xs font-medium text-brand-deep-burgundy underline underline-offset-4 transition-colors hover:text-brand-tan sm:text-sm"
                >
                  <Shirt className="size-4" />
                  Size Guide
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "flex h-10 min-w-12 items-center justify-center rounded-lg border border-brand-beige px-3 text-sm transition-all duration-300 hover:border-brand-rosewood hover:text-brand-rosewood",
                      selectedSize === size
                        ? "border-brand-rosewood bg-brand-deep-burgundy text-brand-cream hover:bg-brand-rosewood hover:text-brand-cream"
                        : "bg-transparent text-brand-heading-dark"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-[1fr_auto] gap-2 sm:grid-cols-[1fr_auto_1fr]">

              <Button
                type="button"
                className="h-12 gap-2 bg-brand-deep-burgundy text-sm text-brand-cream transition-all duration-300 hover:bg-brand-rosewood hover:shadow-brand-soft sm:text-base"
              >
                <ShoppingBag className="size-5" />
                Add to Cart
              </Button>

              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Add to wishlist"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="size-12 border-brand-rosewood text-brand-rosewood transition-all duration-300 hover:scale-105 hover:bg-brand-light-Cream"
              >
                <Heart
                  className={cn(
                    "size-5",
                    isWishlisted && "fill-brand-rosewood"
                  )}
                />
              </Button>

              <Button
                type="button"
                variant="outline"
                className="col-span-2 h-12 gap-2 border-brand-rosewood text-xs text-brand-deep-burgundy transition-all duration-300 hover:bg-brand-light-Cream sm:col-span-1 sm:text-sm"
              >
                <CalendarDays className="size-5" />
                Book a Consultation
              </Button>
            </div>

            {/* Product Benefits */}
            <div className="grid grid-cols-3 divide-x divide-brand-beige border-y border-brand-beige/70 py-4">

              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="group flex flex-col items-center gap-2 px-1 text-center transition-all duration-300 sm:flex-row sm:justify-center sm:text-left sm:px-2"
                  >
                    <Icon className="size-6 shrink-0 text-brand-tan transition-transform duration-300 group-hover:scale-110 group-hover:text-brand-rosewood sm:size-7" />

                    <div>
                      <p className="text-xxs font-semibold text-brand-heading-dark sm:text-xs lg:text-sm">
                        {benefit.title}
                      </p>
                      <p className="mt-0.5 text-[9px] text-brand-Brown sm:text-xs">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-8 border-t border-brand-beige/70 pt-5 sm:mt-10">

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            {/* Tab Navigation */}
            <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-none bg-transparent p-0 sm:grid-cols-4 sm:gap-2">

              <TabsTrigger
                value="product"
                className="relative rounded-none border-b-2 border-transparent bg-transparent px-1 py-3 font-serif text-xs text-brand-heading-dark shadow-none transition-all hover:text-brand-rosewood data-[state=active]:border-brand-rosewood data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-brand-deep-burgundy data-[state=active]:shadow-none sm:text-sm lg:text-base"
              >
                Product Details
              </TabsTrigger>

              <TabsTrigger
                value="fabric"
                className="rounded-none border-b-2 border-transparent bg-transparent px-1 py-3 font-serif text-xs text-brand-heading-dark shadow-none transition-all hover:text-brand-rosewood data-[state=active]:border-brand-rosewood data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-brand-deep-burgundy data-[state=active]:shadow-none sm:text-sm lg:text-base"
              >
                Fabric & Care
              </TabsTrigger>

              <TabsTrigger
                value="shipping"
                className="rounded-none border-b-2 border-transparent bg-transparent px-1 py-3 font-serif text-xs text-brand-heading-dark shadow-none transition-all hover:text-brand-rosewood data-[state=active]:border-brand-rosewood data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-brand-deep-burgundy data-[state=active]:shadow-none sm:text-sm lg:text-base"
              >
                Shipping & Returns
              </TabsTrigger>

              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent bg-transparent px-1 py-3 font-serif text-xs text-brand-heading-dark shadow-none transition-all hover:text-brand-rosewood data-[state=active]:border-brand-rosewood data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-brand-deep-burgundy data-[state=active]:shadow-none sm:text-sm lg:text-base"
              >
                Reviews (128)
              </TabsTrigger>

            </TabsList>

            {/* Product Details */}
            <TabsContent value="product" className="mt-5 animate-in fade-in-50 duration-500">
              <div className="grid gap-4 rounded-xl bg-brand-light-Cream/60 p-4 sm:grid-cols-2 sm:p-6">

                <p className="text-sm leading-relaxed text-brand-heading-dark sm:text-base">
                  This embroidered sherwani blends timeless craftsmanship
                  with modern elegance. Designed for special occasions,
                  it features intricate detailing, a refined silhouette,
                  and a royal finish that makes a lasting impression.
                </p>

                <Card className="border-0 bg-brand-beige/20 shadow-none">
                  <CardContent className="p-4">
                    <ul className="space-y-2 text-xs text-brand-heading-dark sm:text-sm">
                      <li><strong>Fit:</strong> Regular Fit</li>
                      <li><strong>Pattern:</strong> Embroidered</li>
                      <li><strong>Neck:</strong> Mandarin Collar</li>
                      <li><strong>Sleeve:</strong> Full Sleeve</li>
                      <li><strong>Occasion:</strong> Wedding, Reception, Festive</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Fabric & Care */}
            <TabsContent value="fabric" className="mt-5 animate-in fade-in-50 duration-500">
              <Card className="overflow-hidden border-brand-beige bg-transparent shadow-none">
                <CardContent className="grid gap-5 p-3 sm:grid-cols-2 sm:p-5">

                  <div className="relative aspect-video overflow-hidden rounded-lg sm:aspect-auto">
                    <Image
                      src="/Images/Products/Sherwani/fabric.webp"
                      alt="Premium sherwani fabric and embroidery"
                      fill
                      sizes="(max-width: 640px) 90vw, 40vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col justify-center gap-5">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-brand-deep-burgundy">
                        Fabric & Care
                      </h3>

                      <div className="mt-3 flex items-center gap-3">
                        <Shirt className="size-8 shrink-0 text-brand-rosewood" />
                        <div>
                          <p className="text-sm font-semibold">Fabric</p>
                          <p className="text-xs text-brand-Brown sm:text-sm">
                            Premium Silk Blend with Intricate Embroidery
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-3 text-sm font-semibold text-brand-heading-dark">
                        Care Instructions
                      </h4>

                      <div className="grid grid-cols-2 gap-4">
                        {careInstructions.map((care) => {
                          const Icon = care.icon;

                          return (
                            <div
                              key={care.title}
                              className="flex items-center gap-2 transition-colors hover:text-brand-rosewood"
                            >
                              <Icon className="size-6 shrink-0 text-brand-rosewood" />
                              <span className="text-xs text-brand-heading-dark sm:text-sm">
                                {care.title}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Shipping & Returns */}
            <TabsContent value="shipping" className="mt-5 animate-in fade-in-50 duration-500">
              <Card className="border-brand-beige bg-brand-light-Cream/40 shadow-none">
                <CardContent className="grid grid-cols-1 gap-5 p-4 sm:grid-cols-3 sm:p-6">

                  <div className="flex items-center gap-3">
                    <Truck className="size-8 shrink-0 text-brand-rosewood" />
                    <div>
                      <h3 className="text-sm font-semibold">Shipping</h3>
                      <p className="text-xs text-brand-Brown">
                        Free shipping across India. Delivery in 3–7 business days.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-brand-beige sm:border-x sm:px-4">
                    <PackageCheck className="size-8 shrink-0 text-brand-rosewood" />
                    <div>
                      <h3 className="text-sm font-semibold">Returns</h3>
                      <p className="text-xs text-brand-Brown">
                        Easy 7-day returns on unworn items.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <RefreshCw className="size-8 shrink-0 text-brand-rosewood" />
                    <div>
                      <h3 className="text-sm font-semibold">Exchange</h3>
                      <p className="text-xs text-brand-Brown">
                        Size exchange available within 7 days.
                      </p>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </TabsContent>

            {/* Reviews */}
            <TabsContent value="reviews" className="mt-5 animate-in fade-in-50 duration-500">
              <div className="grid gap-5 rounded-xl border border-brand-beige bg-brand-light-Cream/30 p-4 lg:grid-cols-[0.9fr_1.1fr_2fr] lg:p-6">

                {/* Overall Rating */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-serif text-lg font-semibold text-brand-deep-burgundy">
                    Reviews (128)
                  </h3>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="font-serif text-5xl text-brand-rosewood">
                      4.8
                    </span>

                    <div>
                      <div className="flex text-amber-600">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className="size-4 fill-current"
                          />
                        ))}
                      </div>
                      <p className="mt-1 text-xxs text-brand-Brown sm:text-xs">
                        Based on 128 Reviews
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rating Distribution */}
                <div className="flex flex-col justify-center gap-2 border-brand-beige lg:border-x lg:px-5">
                  {ratingDistribution.map((rating) => (
                    <div
                      key={rating.stars}
                      className="flex items-center gap-2"
                    >
                      <span className="w-3 text-xs font-medium">
                        {rating.stars}
                      </span>

                      <Star className="size-3 fill-amber-500 text-amber-500" />

                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-brand-beige/50">
                        <div
                          className="h-full rounded-full bg-brand-rosewood transition-all duration-700"
                          style={{ width: `${rating.percentage}%` }}
                        />
                      </div>

                      <span className="w-8 text-right text-xs text-brand-Brown">
                        {rating.percentage}%
                      </span>
                    </div>
                  ))}
                </div>

                {/* Customer Reviews */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {reviewData.map((review) => (
                    <Card
                      key={review.id}
                      className="border-brand-beige bg-transparent shadow-none transition-all duration-300 hover:-translate-y-1 hover:bg-brand-light-Cream hover:shadow-brand-soft"
                    >
                      <CardContent className="p-3 sm:p-4">

                        <div className="flex items-center gap-2">
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-beige font-serif text-brand-deep-burgundy">
                            {review.initial}
                          </div>

                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-brand-heading-dark">
                              {review.name}
                            </p>

                            <div className="flex items-center gap-1">
                              <CheckCircle2 className="size-3 text-green-700" />
                              <span className="text-xxs text-brand-Brown">
                                Verified Purchase
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 flex text-amber-600">
                          {Array.from({ length: review.rating }).map((_, index) => (
                            <Star
                              key={index}
                              className="size-3 fill-current"
                            />
                          ))}
                        </div>

                        <h4 className="mt-2 text-sm font-semibold text-brand-deep-burgundy">
                          {review.title}
                        </h4>

                        <p className="mt-1 text-xs leading-relaxed text-brand-Brown">
                          {review.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
