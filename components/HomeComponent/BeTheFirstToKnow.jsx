
"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  FaArrowRight,
  FaCheckCircle,
  FaGift,
  FaShieldAlt,
  FaTshirt,
} from "react-icons/fa";
import "../../style/HomeStyle/BeTheFirstToKnow.css"

const benefits = [
  {
    icon: FaShieldAlt,
    title: "Exclusive Offers",
  },
  {
    icon: FaGift,
    title: "New Arrivals",
  },
  {
    icon: FaTshirt,
    title: "Fashion Guides",
  },
];

export default function BeTheFirstToKnow() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

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
        threshold: 0.2,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      return;
    }

    // Connect your newsletter API here before treating
    // an email address as successfully subscribed.
    setStatus("success");
    setEmail("");
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="newsletter-title"
      className={cn(
        "newsletter-section relative isolate overflow-hidden",
        "border-y border-[#9E6B4B]/30",
        "text-[#F8E9D8]",
        "transition-colors duration-700"
      )}
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="newsletter-background pointer-events-none absolute inset-0 -z-20"
      />

      {/* Color overlay keeps text readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-[#3B1019]/45 via-[#4B111E]/25 to-[#3B1019]/45"
      />

      <div
        className={cn(
          "mx-auto grid w-full max-w-7xl items-center",
          "gap-8 px-5 py-10 sm:px-8 sm:py-12",
          "lg:grid-cols-[1fr_1.2fr_0.8fr] lg:gap-10",
          "xl:px-12 xl:py-14",
          isVisible
            ? "newsletter-reveal newsletter-visible"
            : "newsletter-reveal"
        )}
      >
        {/* Heading */}
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6AA78]">
            Join our community
          </p>

          <h2
            id="newsletter-title"
            className="font-serif text-3xl leading-tight text-[#FFF3E6] sm:text-4xl"
          >
            Be the First
            <br />
            <span className="font-normal italic text-[#D9AE86]">
              to Know
            </span>
          </h2>

          <p className="mx-auto max-w-sm text-sm leading-6 text-[#F1DCCB]/85 lg:mx-0">
            Discover new arrivals, exclusive offers, styling inspiration,
            and timeless pieces made for your special moments.
          </p>
        </div>

        {/* Subscription form */}
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className={cn(
              "group flex flex-col gap-2 rounded-xl p-2",
              "border border-[#D7B28A]/35 bg-[#FFF8F0]/10",
              "shadow-lg shadow-black/10 backdrop-blur-sm",
              "transition-all duration-300",
              "focus-within:border-[#E7C49B]/80",
              "focus-within:shadow-xl"
            )}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email address
            </label>

            <div className="flex min-w-0 items-center gap-2">
              <input
                id="newsletter-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setStatus("idle");
                }}
                placeholder="Enter your email address"
                className={cn(
                  "min-w-0 flex-1 bg-transparent px-3 py-3",
                  "text-sm text-white placeholder:text-[#E8D0BE]/70",
                  "outline-none"
                )}
              />

              <button
                type="submit"
                className={cn(
                  "inline-flex shrink-0 items-center justify-center gap-2",
                  "rounded-lg bg-[#D7B28A] px-4 py-3",
                  "text-xs font-semibold text-[#411520]",
                  "transition-all duration-300",
                  "hover:bg-[#F0D4B5] hover:shadow-lg",
                  "active:scale-95",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-[#F0D4B5] focus-visible:ring-offset-2",
                  "focus-visible:ring-offset-[#48111E]"
                )}
              >
                <span>Subscribe</span>
                <FaArrowRight
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </form>

          <p
            aria-live="polite"
            className={cn(
              "mt-3 flex min-h-5 items-center justify-center gap-2 text-xs",
              "lg:justify-start",
              status === "error"
                ? "text-[#FFD1C9]"
                : status === "success"
                  ? "text-[#E6D0A9]"
                  : "text-[#E8D0BE]/75"
            )}
          >
            {status === "success" ? (
              <>
                <FaCheckCircle aria-hidden="true" />
                Thank you! Connect your API to complete subscriptions.
              </>
            ) : status === "error" ? (
              "Please enter a valid email address."
            ) : (
              "Be the first to discover something beautiful."
            )}
          </p>
        </div>

        {/* Member benefits */}
        <div className="grid grid-cols-3 gap-3 border-t border-[#D7B28A]/20 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
          {benefits.map(({ icon: Icon, title }, index) => (
            <div
              key={title}
              className={cn(
                "group/benefit flex flex-col items-center gap-3 text-center",
                "transition-transform duration-300 hover:-translate-y-1"
              )}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span
                className={cn(
                  "flex size-11 items-center justify-center rounded-full",
                  "border border-[#D7B28A]/35 bg-[#FFF3E6]/10",
                  "text-lg text-[#D7B28A]",
                  "transition-all duration-300",
                  "group-hover/benefit:border-[#E8C69F]",
                  "group-hover/benefit:bg-[#D7B28A]",
                  "group-hover/benefit:text-[#48111E]",
                  "group-hover/benefit:shadow-lg"
                )}
              >
                <Icon aria-hidden="true" />
              </span>

              <span className="text-xs leading-4 text-[#F6E4D4]">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
