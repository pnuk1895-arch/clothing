import CommonHero from "@/components/CommonComponent/CommonHero";
import Footer from "@/components/CommonComponent/Footer";
import Header from "@/components/CommonComponent/Header";
import ProductSection from "@/components/CommonComponent/Products/ProductSection";
import BeTheFirstToKnow from "@/components/HomeComponent/BeTheFirstToKnow";
import WhatOurCustomersSay from "@/components/HomeComponent/whatOurCustomerSay";
import CompleteYourLook from "@/components/MenCollectionComponent/CompleteYourLook";
import OccasionThatMatter from "@/components/OccasionComponent/OccasionThatMatter";

const HeroDetail = {
  Image: "/Images/Occasion/HeroImages.png",
  TopHeading: "WOMEN'S COLLECTION ",
  MainTitle: `Moments
   Make Your Story`,
  SubTitle: "",
  MainContent: "From grand Wedding to intimate celebrations. explore ensembles crafted with tradition and a modern touch"
}


export default function OccasionWearPage() {
  return (
    <>
      <Header />
      <main>
        <CommonHero HeroDetail={HeroDetail} className="object-[70%_50%] 2xl:object-[center_40%]" /> 
        <ProductSection />
        <OccasionThatMatter/>
        <CompleteYourLook />
        <WhatOurCustomersSay/>
        <BeTheFirstToKnow />
      </main>
      <Footer />
    </>
  )
}
