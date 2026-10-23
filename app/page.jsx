import Header from "@/components/CommonComponent/Header"
import HeroSection from "@/components/HomeComponent/HeroSection"
import FeaturesSection from "@/components/HomeComponent/Features"
import FindPerfectLook from "@/components/HomeComponent/ShopByOcassion"
import CollectionsSection from "@/components/HomeComponent/CollectionGallery"

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection/>
                <FeaturesSection/>
                <FindPerfectLook/>
                <CollectionsSection/>
            </main>
            {/* <Footer/> */}

        </>
    )
}
