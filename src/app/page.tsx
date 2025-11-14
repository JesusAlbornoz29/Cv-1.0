"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { CvEnhancer } from "@/components/cv-enhancer";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";

const DUMMY_CV_DATA = `
Jane Doe
Software Engineer
jane.doe@email.com | 555-555-5555 | linkedin.com/in/janedoe

Summary
Highly motivated software engineer with 5 years of experience in full-stack web development. Proficient in JavaScript, React, and Node.js. Passionate about creating user-friendly applications and solving complex problems.

Experience
Software Engineer, Tech Corp, Anytown, USA (2020 - Present)
- Developed and maintained web applications using React and Node.js.
- Worked with a team to build new features.
- Improved application performance.

Junior Developer, Web Solutions, Anytown, USA (2018 - 2020)
- Assisted in the development of websites.
- Learned about web development best practices.

Education
Bachelor of Science in Computer Science
University of Anytown, 2018

Skills
- JavaScript, HTML, CSS
- React, Node.js, Express
- SQL, MongoDB
- Git, Docker
`;

export default function Home() {
  const [cvData, setCvData] = useState<string>("");

  const handleCvDataExtracted = () => {
    setCvData(DUMMY_CV_DATA);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection onCvDataExtracted={handleCvDataExtracted} />
        <div className="container mx-auto px-4 py-16 md:py-24 space-y-16 md:space-y-24">
          {cvData && <CvEnhancer cvData={cvData} onCvDataChange={setCvData} />}
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
