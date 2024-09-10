import ConnectLinks from "@/components/ConnectLinks";
import FooterComponent from "@/components/FooterComponent";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <ConnectLinks />
      <Navbar />
      <HeroSection />
      <Services />
      <Testimonials />
      <FooterComponent />
    </>
  )
}
