import DigitalMenu from "@/components/Digital-Menu";
import DigitalQr from "@/components/Digital-Qr";
import Footer from "@/components/Footer";
import FormSection from "@/components/Form-section";
import HeroSection from "@/components/Hero-section";
import HeroSectionTwo from "@/components/Hero-section-2";
import Navbar from "@/components/Navbar";
import { poppins } from "@/styles/font";

export default function Home() {
  return (
    <main className={` ${poppins.className}`} >
     <Navbar />
     <HeroSection />
     <HeroSectionTwo />
     <DigitalMenu />
     <DigitalQr />
     <FormSection />
     <Footer />
    </main>
  );
}
