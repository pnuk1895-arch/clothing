"use client"

import CartSection from "@/components/CartComponent/CartSection";
import Footer from "@/components/CommonComponent/Footer";
import Header from "@/components/CommonComponent/Header";



export default function Cart() {
    return (
        <>
            <Header />
            <main>
                <CartSection/>
            </main>
            <Footer/>
        </>
    )
}
