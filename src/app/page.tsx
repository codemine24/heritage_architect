"use client";

import { HeroSection } from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import WhyChooseSection from "@/components/home/why-choose-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
    </>
  );
}
