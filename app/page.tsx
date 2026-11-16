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
// import { useState } from "react"
import api from "@/lib/api-axios"


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
    topHeading: "Follow Our Style Journey",
    title: {
        first: `Real Fashion,${" "}`,
        second: "Real Moments"
    },
    MainContent: "Get inspired by the beautiful moments and styles shared by our community."

}


export default function HomePage() {
    // const [user, setUser] = useState<boolean>(false)

    // async function UserExist() {
    //     try {
    //         const response = await api.get("/api/Profile")
    //         setUser(response.data.success)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <FeaturesSection />
                <FindPerfectLook />
                <CollectionsSection />
                <OccasionSection />
                <BestSellingOutfits />
                <MadeJustForYou />
                <HowItWorks />
                <WhatOurCustomerSay />
                <RealFashionMoments moments={moments} SectionDetail={SectionDetail} />
                <BeTheFirstToKnow />
            </main>
            {/* Footer */}
            <Footer />
        </>
    )
}
