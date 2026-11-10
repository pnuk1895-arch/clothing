

"use client";


import Image from "next/image";
import { cn } from "@/lib/utils";

type HeroDetail = {
  Image: string;
  TopHeading: string;
  MainTitle: string;
  SubTitle?:string;
  MainContent: string;
};

export default function CommonHero({
  HeroDetail,
  className,
}: {
  HeroDetail: HeroDetail;
  className?:string
}) {
  return (
    <section
      className={cn(
        "relative isolate flex w-full items-center overflow-hidden",
        "min-h-70 sm:min-h-100 lg:min-h-110 2xl:min-h-130",
        "bg-brand-cream"
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HeroDetail.Image}
          alt="Silaah clothing Brand banner"
          fill
          loading="eager"
          sizes="100vw"
          className={cn("object-cover ",
            className
          )}
        />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto h-full w-[90%] max-w-content-area py-10 sm:py-12 lg:py-20">
        <div
          className={cn(
            "relative h-full",
            "w-full sm:w-4/5 md:w-3/4 lg:w-1/2",
            "space-y-2 rounded-2xl",
            "mt-4 sm:mt-6"
          )}
        >
          {/* Top Heading */}
          <p className="w-fit rounded-full px-2 text-xxs font-semibold uppercase tracking-widest text-brand-muted-rosewood sm:text-sm lg:text-base text-glow ">
            {HeroDetail.TopHeading}
          </p>

          {/* Main Headingbg-brand-light-Cream/30  */}
          <h1
            className={cn(
              "w-fit rounded-md px-2",
              "font-serif text-2xl font-medium leading-tight text-brand-heading-dark ",
              "sm:text-5xl md:text-5xl lg:text-6xl rounded-full text-glow whitespace-pre-line "
            )}
          >
            {HeroDetail.MainTitle}
          </h1>

          {/* Description */}
          <p className="rounded-full w-fit px-2 text-xs font-bold leading-relaxed text-brand-heading-dark/80 sm:text-lg lg:text-xl text-glow ">
            {HeroDetail.SubTitle}
          </p>

          <p className="w-60 px-2 text-xxs font-semibold rounded-full leading-relaxed text-brand-heading-dark/80 sm:w-full sm:text-base lg:text-lg text-glow ">
           {HeroDetail.MainContent}
          </p>
        </div>
      </div>
    </section >
  );
}
