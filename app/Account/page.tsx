import AcountComponent from "@/components/AccountComponent/Account";
import Footer from "@/components/CommonComponent/Footer";
import Header from "@/components/CommonComponent/Header";


export default function Profile() {
  return (
    <>
      <Header />
      <main>
        <AcountComponent/>
      </main>
      <Footer />
    </>
  )
}
