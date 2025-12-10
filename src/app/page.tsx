// import Image from "next/image";
import BenefitSection from "@/components/BenefitSection";
import Navbar from "@/components/navbar"
import CitiesSection from "@/features/cities/sections/CitiesSection";
import FreshSpaceSection from "@/features/offices/sections/FreshSpaceSecton";
import Header from "@/components/Header"
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />

      <CitiesSection />
      <BenefitSection />
      <FreshSpaceSection />
    </>

  );
}
