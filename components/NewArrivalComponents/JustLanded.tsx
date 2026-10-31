
"use client";

import Image from "next/image";
import Link from "next/link";
import "../../style/NewArrvial/Justlanded.css";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Gem,
  Heart,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Sparkles,
    title: "New Styles",
  },
  {
    icon: Gem,
    title: "Premium Fabrics",
  },
  {
    icon: BadgeCheck,
    title: "Limited Pieces",
  },
  {
    icon: Heart,
    title: "Made for You",
  },
];

interface JustLandedProps {
  imageSrc: string;
  imageAlt: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  href?: string;
  className?: string;
}

export default function JustLanded({
  imageSrc,
  imageAlt,
  heading = "Just Landed",
  description = "Statement pieces for your next celebration.",
  buttonText = "Explore Collection",
  href = "/New-Arrival",
  className,
}: JustLandedProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="just-landed-heading"
      className={cn(
        "w-full overflow-hidden bg-brand-light-Cream",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto grid max-w-content-area grid-cols-1 md:grid-cols-4",
          "just-landed-reveal",
          isVisible && "just-landed-reveal-visible"
        )}
      >
        {/* Banner image and content */}
        <div className="group relative isolate col-span-1 min-h-64 overflow-hidden sm:min-h-72 md:col-span-3 md:min-h-72 lg:min-h-80">

          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            loading="eager"
            sizes="(max-width: 767px) 100vw, 75vw"
            className={cn(
              "object-cover object-top",
              "transition-transform duration-1000 ease-out",
              "group-hover:scale-105"
            )}
          />

          {/* Soft gradient for text readability */}
          <div className="absolute inset-0 bg-linear-to-r from-brand-light-Cream/90 via-brand-light-Cream/10  to-transparent" />

          {/* Text content */}
          <div className="absolute inset-y-0 left-0 z-10 flex w-3/5 flex-col justify-center gap-3 px-5 sm:px-8 md:w-1/2 md:px-8 lg:px-12">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-muted-rosewood">
              Discover the latest
            </p>

            <h2
              id="just-landed-heading"
              className="font-serif text-4xl leading-none text-brand-heading-dark sm:text-5xl lg:text-6xl"
            >
              {heading}
            </h2>

            <p className="max-w-sm text-xs leading-relaxed text-brand-Brown sm:text-sm">
              {description}
            </p>

            <Link
              href={href}
              className="group/button inline-flex w-fit items-center gap-2 rounded-md bg-brand-burgundy px-4 py-2.5 text-xs font-medium text-brand-light-Cream transition-all duration-300 hover:-translate-y-1 hover:bg-brand-deep-burgundy hover:shadow-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {buttonText}

              <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Desktop benefits panel */}
        <div className="hidden flex-col justify-center gap-6 bg-brand-light-Cream px-5 py-6 md:col-span-1 md:flex lg:px-7">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                style={{ transitionDelay: `${index * 100}ms` }}
                className="group flex items-center gap-3 transition-transform duration-300 hover:translate-x-1"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-rosewood transition-all duration-300 group-hover:bg-brand-burgundy group-hover:text-brand-light-Cream">
                  <Icon
                    className="size-4"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-serif text-xs text-brand-heading-dark lg:text-sm">
                  {benefit.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
