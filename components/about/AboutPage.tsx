"use client";

import AboutHero from "@/components/about/AboutHero";
import SkillsSection from "@/components/about/SkillsSection";
import ExperienceSection from "@/components/about/ExperienceSection";
import PageTransition from "@/components/PageTransition";

const AboutPage = () => {
  return (
    <PageTransition className="min-h-screen bg-primary text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AboutHero />
        <SkillsSection />
        <ExperienceSection />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
