import Header from "@/components/CommonComponent/Header"
import HeroSection from "@/components/HomeComponent/HeroSection"
import FeaturesSection from "@/components/HomeComponent/Features"
import FindPerfectLook from "@/components/HomeComponent/ShopByOcassion"
import CollectionsSection from "@/components/HomeComponent/CollectionGallery"
import OccasionSection from "@/components/HomeComponent/Occasion"
import BestSellingOutfits from "@/components/HomeComponent/BestSellingOutput"
import MadeJustForYou from "@/components/HomeComponent/MadeJustForYou"

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
            </main>
            {/* <Footer/> */}

        </>
    )
}
