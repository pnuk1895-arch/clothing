import CollectionsYouLove from "@/components/CommonComponent/CollectionYouLove";
import CommonHero from "@/components/CommonComponent/CommonHero";
import Footer from "@/components/CommonComponent/Footer";
import Header from "@/components/CommonComponent/Header";
import ProductSection from "@/components/CommonComponent/Products/ProductSection";
import BeTheFirstToKnow from "@/components/HomeComponent/BeTheFirstToKnow";
import FeaturesSection from "@/components/HomeComponent/Features";
import CompleteYourLook from "@/components/MenCollectionComponent/CompleteYourLook";

const HeroDetail={
   Image: "/Images/Men/HeroImage/HeroImage.webp",
    TopHeading: "MEN COLLECTION",
    MainTitle: `Tradition
     Meets Modernity`,
    SubTitle: "",
    MainContent: "Timeless silhousttes, refined details and modern comfort - crafted for today's man."
}

const CollectionDetail={
  heading:"Shop by Look",
  description:"Curated styles for every occasion",
  viewAllHref:"/Men-Collection"
}

export const collections= [
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

export default function MenCollectionPage() {
  return (
    <>
      <Header/>
      <main>
        <CommonHero HeroDetail={HeroDetail} className="object-[60%_top] 2xl:object-[center_40%]"/>
        <FeaturesSection/>
        <ProductSection/>
        <CollectionsYouLove collections={collections} CollectionDetail={CollectionDetail} />
        <CompleteYourLook/>
        <BeTheFirstToKnow/>
      </main>
      <Footer/>
    </>
  )
}
