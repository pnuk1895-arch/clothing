import Header from "@/components/CommonComponent/Header"
import HeroSection from "@/components/HomeComponent/HeroSection"
import FeaturesSection from "@/components/HomeComponent/Features"
import FindPerfectLook from "@/components/HomeComponent/ShopByOcassion"
import CollectionsSection from "@/components/HomeComponent/CollectionGallery"
import OccasionSection from "@/components/HomeComponent/Occasion"
import BestSellingOutfits from "@/components/HomeComponent/BestSellingOutput"
import MadeJustForYou from "@/components/HomeComponent/MadeJustForYou"
import HowItWorks from "@/components/HomeComponent/HowItWorks"
import WhatOurCustomerSay from "@/components/HomeComponent/whatOurCustomerSay"
import RealFashionMoments from "@/components/HomeComponent/RealFeashionMoment"
import BeTheFirstToKnow from "@/components/HomeComponent/BeTheFirstToKnow"
import Footer from "@/components/CommonComponent/Footer"

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection/>
                <FeaturesSection/>
                <FindPerfectLook/>
                <CollectionsSection/>
                <OccasionSection />
                <BestSellingOutfits/>
                <MadeJustForYou/>
                <HowItWorks/>
                <WhatOurCustomerSay/>
                <RealFashionMoments/>
                <BeTheFirstToKnow/>
            </main>
            {/* <Footer/> */}
            <Footer/>
        </>
    )
}
