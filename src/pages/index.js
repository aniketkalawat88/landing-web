import DigitalMenu from "@/components/Digital-Menu";
import DigitalQr from "@/components/Digital-Qr";
import Footer from "@/components/Footer";
import FormSection from "@/components/Form-section";
import HeroSection from "@/components/Hero-section";
import HeroSectionTwo from "@/components/Hero-section-2";
import Navbar from "@/components/Navbar";
import { poppins } from "@/styles/font";
import Link from "next/link";
import { ImWhatsapp } from "react-icons/im";

export default function Home() {
  return (
    <main className={` ${poppins.className}`} >
     <Navbar />
     <HeroSection />
      <Link href={`https://api.whatsapp.com/send?phone=9754318246&text=hello%20smart%20digital`} target='_blank' className="fixed text-4xl right-[5vw] "><ImWhatsapp className="text-green-500" /></Link>
     <HeroSectionTwo />
     <DigitalMenu />
     <DigitalQr />
     <FormSection />
     <Footer />
    </main>
  );
}
