"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { Footer } from "@/components/footer";
import { CvInfo } from "@/components/cv-info";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="container mx-auto px-4 py-16 md:py-24 space-y-16 md:space-y-24">
          <CvInfo />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
