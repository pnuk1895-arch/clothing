"use client"


import CommonHero from "@/components/CommonComponent/CommonHero";
import Footer from "@/components/CommonComponent/Footer";
import Header from "@/components/CommonComponent/Header";
import ProductSection from "@/components/CommonComponent/Products/ProductSection";
import JustLanded from "@/components/NewArrivalComponents/JustLanded";

const SectionDetailHero = {
  Image: "/Images/NewArrival/HeroImage/HeroImage.webp",
  TopHeading: "New Collection",
  MainTitle: "New Arrivals",
  SubTitle: "Fresh styles, timeless traditions.",
  MainContent: " Explore our latest arrivals, thoughtfully designed for your most beautiful moments."

}

import CollectionsYouLove from "@/components/CommonComponent/CollectionYouLove";
import WhyShopNewArrival from "@/components/NewArrivalComponents/WhyShopNewArrival";
import RealFashionMoments from "@/components/HomeComponent/RealFeashionMoment";
import BeTheFirstToKnow from "@/components/HomeComponent/BeTheFirstToKnow";

export const collections = [
  {
    id: "sarees",
    title: "Trending Sarees",
    startingPrice: "₹5,099",
    image: "/images/collections/trending-sarees.webp",
    imageAlt: "Model wearing a traditional designer saree",
    href: "/collections/sarees",
  },
  {
    id: "lehengas",
    title: "Latest Lehengas",
    startingPrice: "₹12,999",
    image: "/images/collections/latest-lehengas.webp",
    imageAlt: "Model wearing an embroidered designer lehenga",
    href: "/collections/lehengas",
  },
  {
    id: "suits",
    title: "Elegant Suits",
    startingPrice: "₹6,999",
    image: "/images/collections/elegant-suits.webp",
    imageAlt: "Model wearing an elegant ethnic suit",
    href: "/collections/suits",
  },
  {
    id: "mens-wear",
    title: "Modern Men's Wear",
    startingPrice: "₹14,999",
    image: "/images/collections/mens-wear.webp",
    imageAlt: "Model wearing traditional men's ethnic wear",
    href: "/collections/mens-wear",
  },
];

const CollectionDetail = {
  heading:"Collections You’ll Love",
  description:"Discover our latest drops across every category.",
  viewAllHref: "/New-Arrival",
}

const moments = [
  {
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=85",
    alt: "Elegant traditional Indian fashion",
    label: "Bridal Elegance",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=85",
    alt: "Elegant jewellery and accessories",
    label: "Details That Matter",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e3?auto=format&fit=crop&w=700&q=85",
    alt: "Contemporary ethnic fashion",
    label: "Festive Glamour",
  },
  {
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=85",
    alt: "Beautiful occasion wear",
    label: "Timeless Style",
  },
  {
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=85",
    alt: "Fashion editorial look",
    label: "Modern Tradition",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85",
    alt: "Fashion styling inspiration",
    label: "Everyday Luxury",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=85",
    alt: "Fashion inspiration from the community",
    label: "Your Style Story",
  },
];
const SectionDetail = {
  topHeading: "From Our Community",
  title: {
    first: `Real People, ${" "}`,
    second: "Real Moments"
  }
}

export default function NewArrivalPage() {
  return (
    <>
      <Header />
      <main >
        <CommonHero HeroDetail={SectionDetailHero} className="object-[70%_top] 2xl:object-[80%_30%]" />
        <ProductSection />
        <JustLanded
          imageSrc="/Images/JustLanded.png"
          imageAlt="just landed"
        />
        <CollectionsYouLove collections={collections} CollectionDetail={CollectionDetail} />
        <WhyShopNewArrival />
        <RealFashionMoments moments={moments} SectionDetail={SectionDetail} />
        <BeTheFirstToKnow />
      </main>
      <Footer />
    </>
  )
}
