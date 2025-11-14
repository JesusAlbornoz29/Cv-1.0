"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { CvEnhancer } from "@/components/cv-enhancer";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { Footer } from "@/components/footer";

const DUMMY_CV_DATA = `
Alfredo Jesus Albornoz
Desarrollador de Software Junior
alfredo.albornoz@email.com | 11-2233-4455 | linkedin.com/in/alfredoalbornoz

Resumen
Desarrollador de software recién graduado con una sólida base en desarrollo full-stack. Apasionado por la tecnología, con ganas de aplicar mis habilidades en JavaScript, React y Node.js para crear soluciones innovadoras y crecer profesionalmente en mi primer empleo.

Educación
Desarrollador Web Full Stack
Coderhouse, 2023

Bachiller en Ciencias de la Computación
Universidad de Buenos Aires, 2022

Habilidades
- JavaScript, HTML, CSS
- React, Node.js, Express
- SQL, MongoDB
- Git, Docker
`;

export default function Home() {
  const [cvData, setCvData] = useState<string>(DUMMY_CV_DATA);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="container mx-auto px-4 py-16 md:py-24 space-y-16 md:space-y-24">
          <CvEnhancer cvData={cvData} onCvDataChange={setCvData} />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
