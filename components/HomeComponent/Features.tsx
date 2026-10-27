"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  LuLeaf,
  LuScissors,
  LuGem,
  LuShieldCheck,
  LuPackageCheck,
} from "react-icons/lu";

const features = [
  {
    title: "Premium Fabrics",
    description: "Quality assured",
    Icon: LuLeaf,
  },
  {
    title: "Custom Tailoring",
    description: "Perfect fit, every time",
    Icon: LuScissors,
  },
  {
    title: "Occasion Experts",
    description: "Styling guidance",
    Icon: LuGem,
  },
  {
    title: "Secure Payments",
    description: "100% safe and reliable",
    Icon: LuShieldCheck,
  },
  {
    title: "Easy Returns",
    description: "Hassle-free exchange",
    Icon: LuPackageCheck,
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef < HTMLElement | null > (null);
  const [isVisible, setIsVisible] = useState < boolean > (false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Silaah shopping benefits"
      className={cn(
        "relative z-10 -mt-8 w-full overflow-hidden",
        "rounded-t-3xl sm:rounded-t-4xl",
        "border-t border-white/40",
        "bg-features-section",
        "backdrop-blur-md",
        "py-6 sm:py-7 lg:py-8"
      )}
    >
      {/* Soft transition from the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-features-top-glow"
      />

      {/* Subtle decorative accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-0 size-40 rounded-full bg-features-left-accent blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 size-40 rounded-full bg-features-right-accent blur-3xl"
      />

      <div className="relative mx-auto grid w-[90%] max-w-content-area grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-7 lg:grid-cols-5 lg:gap-6">
        {features.map(({ title, description, Icon }, index) => (
          <article
            key={title}
            style={{ transitionDelay: `${index * 100}ms` }}
            className={cn(
              "group relative flex min-w-0 items-center gap-3",
              "rounded-xl border border-transparent p-2",
              "transition-all duration-700 ease-out",
              "hover:-translate-y-1 hover:border-brand-tan/60",
              "hover:bg-white/70 hover:shadow-lg hover:shadow-brand-heading-dark/5",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            )}
          >
            {/* Icon */}
            <div
              className={cn(
                "relative flex size-10 shrink-0 items-center justify-center",
                "rounded-full border border-brand-tan/50",
                "bg-features-icon",
                "text-brand-deep-burgundy shadow-sm",
                "transition-all duration-300",
                "group-hover:scale-110 group-hover:border-brand-tan/70",
                "group-hover:bg-brand-deep-burgundy group-hover:text-footer-heading",
                "group-hover:shadow-md group-hover:shadow-brand-deep-burgundy/15",
                "sm:size-11 lg:size-12"
              )}
            >
              <Icon
                aria-hidden="true"
                className="size-5 transition-transform duration-300 group-hover:-rotate-6 sm:size-5"
                strokeWidth={1.6}
              />
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <h3
                className={cn(
                  "text-xs font-semibold capitalize leading-snug",
                  "tracking-tight text-brand-deep-burgundy",
                  "transition-colors duration-300",
                  "group-hover:text-brand-tan",
                  "sm:text-sm"
                )}
              >
                {title}
              </h3>

              <p
                className={cn(
                  "mt-1 text-[10px] leading-relaxed",
                  "text-stone-600 transition-colors duration-300",
                  "group-hover:text-stone-800",
                  "sm:text-xs"
                )}
              >
                {description}
              </p>
            </div>

            {/* Fine separator on desktop */}
            {index !== features.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -right-3 top-1/2 hidden h-8 w-px -translate-y-1/2 bg-brand-tan/50 lg:block"
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
