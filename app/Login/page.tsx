import Footer from "@/components/CommonComponent/Footer";
import Header from "@/components/CommonComponent/Header";
import LoginComponent from "@/components/LoginComponent/LoginComponent";



export default function page() {
  return (
    <>
      <Header/>
      <main>
        <LoginComponent/>
      </main>
      <Footer/>
    </>
  )
}


