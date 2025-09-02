"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import PageTransition from "@/components/PageTransition";
import SpotlightCaseStudy from "@/components/home/SpotlightCaseStudy";
import ServicesSection from "@/components/home/ServicesSection";
import FinalCTA from "@/components/home/FinalCTA";
import SocialProof from "@/components/home/SocialProof";
import ProcessSection from "@/components/home/ProcessSection";
import AvailabilityBanner from "@/components/home/AvailabilityBanner";

const HomePage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (!mounted) {
    return (
      <div className="min-h-screen bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection heroInView={false} />
        </div>
      </div>
    );
  }

  return (
    <PageTransition className="min-h-screen bg-primary text-white overflow-hidden">
      <div ref={heroRef} className="relative">
        <HeroSection heroInView={heroInView} />
      </div>

      <SocialProof />
      <SpotlightCaseStudy />
      <ServicesSection />
      <ProcessSection />
      <AvailabilityBanner />
      <FinalCTA />
    </PageTransition>
  );
};

export default HomePage;
