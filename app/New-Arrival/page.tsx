import CommonHero from "@/components/CommonComponent/CommonHero";
import Footer from "@/components/CommonComponent/Footer";
import Header from "@/components/CommonComponent/Header";
import ProductSection from "@/components/CommonComponent/Products/ProductSection";
import JustLanded from "@/components/NewArrivalComponents/JustLanded";

const SectionDetail = {
  Image: "/Images/NewArrival/HeroImage/HeroImage.webp",
  TopHeading: "New Collection",
  MainTitle: "New Arrivals",
  SubTitle: "Fresh styles, timeless traditions.",
  MainContent: " Explore our latest arrivals, thoughtfully designed for your most beautiful moments."

}


import type { Collection } from "@/components/NewArrivalComponents/CollectionYouLove";
import CollectionsYouLove from "@/components/NewArrivalComponents/CollectionYouLove";

export const collections: Collection[] = [
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


export default function NewArrivalPage() {
  return (
    <>
      <Header />
      <main >
        <CommonHero SectionDetail={SectionDetail} />
        <ProductSection />
        <JustLanded
          imageSrc="/Images/JustLanded.png"
          imageAlt="just landed"
        />
        <CollectionsYouLove collections={collections} />
      </main>
      <Footer />
    </>
  )
}
