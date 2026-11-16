import CollectionsYouLove from "@/components/CommonComponent/CollectionYouLove";
import CommonHero from "@/components/CommonComponent/CommonHero";
import Footer from "@/components/CommonComponent/Footer";
import Header from "@/components/CommonComponent/Header";
import ProductSection from "@/components/CommonComponent/Products/ProductSection";
import BeTheFirstToKnow from "@/components/HomeComponent/BeTheFirstToKnow";
import FeaturesSection from "@/components/HomeComponent/Features";
import CompleteYourLook from "@/components/MenCollectionComponent/CompleteYourLook";

const HeroDetail = {
  Image: "/Images/Women/HeroImages.png",
  TopHeading: "WOMEN'S COLLECTION ",
  MainTitle: `Grace In
   Every Detail`,
  SubTitle: "",
  MainContent: "Timeless ethnic wear designed for the modern woman. Explore elegant silhouettes, rich fabrics and exquisite craftsmanship."
}

const CollectionDetail = {
  heading: "Shop by Style",
  description: "Discover our most loved categories",
  viewAllHref: "/Women-Collection"
}

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

export default function WomenCollectionPage() {
  return (
    <>
      <Header />
      <main>
        <CommonHero HeroDetail={HeroDetail} className="object-[60%_50%] 2xl:object:[] " />
        <FeaturesSection />
        <ProductSection />
        <CollectionsYouLove collections={collections} CollectionDetail={CollectionDetail} />
        <CompleteYourLook />
        <BeTheFirstToKnow />
      </main>
      <Footer />
    </>
  )
}
