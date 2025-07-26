"use client";

import Navbar from "@/components/home/navbar";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import FeaturesSection from "@/components/home/features-section";
import WhyChooseSection from "@/components/home/why-choose-section";
import PricingSection from "@/components/home/pricing-section";
import CTASection from "@/components/home/cta-section";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <WhyChooseSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}