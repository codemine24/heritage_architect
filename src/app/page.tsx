import AboutSection from "@/components/home/about-section";
import ApproachSection from "@/components/home/approach-section";
import { HeroSection } from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import WhyChooseSection from "@/components/home/why-choose-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <ApproachSection />
      <AboutSection />
    </>
  );
}
