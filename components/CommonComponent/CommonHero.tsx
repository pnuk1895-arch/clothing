
import Image from "next/image";
import { cn } from "@/lib/utils";

type SectionDetail = {
  Image: string;
  TopHeading: string;
  MainTitle: string;
  SubTitle:string;
  MainContent: string;
};

export default function CommonHero({
  SectionDetail,
}: {
  SectionDetail: SectionDetail;
}) {
  return (
    <section
      className={cn(
        "relative isolate flex w-full items-center overflow-hidden",
        "min-h-70 sm:min-h-100 lg:min-h-110 ",
        "bg-brand-cream"
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={SectionDetail.Image}
          alt="Silaah clothing Brand banner"
          fill
          loading="eager"
          sizes="100vw"
          className="object-cover object-[70%_top] 2xl:object-[80%_30%] "
        />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto h-full w-[90%] max-w-content-area py-10 sm:py-12 lg:py-20">
        <div
          className={cn(
            "relative h-full",
            "w-full sm:w-4/5 md:w-3/4 lg:w-1/2",
            "space-y-2 rounded-2xl",
            "p-3 sm:p-5 md:p-6 lg:p-8",
            "mt-4 sm:mt-6"
          )}
        >
          {/* Top Heading */}
          <p className="w-fit rounded-md px-2 text-xxs font-semibold uppercase tracking-widest text-brand-muted-rosewood sm:text-sm lg:text-base">
            {SectionDetail.TopHeading}
          </p>

          {/* Main Heading */}
          <h1
            className={cn(
              "w-fit rounded-md px-2",
              "font-serif text-2xl font-medium leading-tight text-brand-heading-dark ",
              "sm:text-5xl md:text-5xl lg:text-6xl  "
            )}
          >
            {SectionDetail.MainTitle}
          </h1>

          {/* Description */}
          <p className="rounded-md px-2 text-xs font-bold leading-relaxed text-brand-heading-dark/80 sm:text-lg lg:text-xl ">
            {SectionDetail.SubTitle}
          </p>

          <p className="w-60 px-2 text-xxs font-semibold leading-relaxed text-brand-heading-dark/80 sm:w-full sm:text-base lg:text-lg ">
           {SectionDetail.MainContent}
          </p>
        </div>
      </div>
    </section >
  );
}
