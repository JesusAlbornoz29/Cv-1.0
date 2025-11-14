import React from "react";
import { Badge } from "@/components/ui/badge";
import {   Code,
  Server,
  Flame,
  Leaf,
  Package,
  Boxes,
  Database,
  FileCode,
  Palette,
  Bold,
  Wind,
  Cloud,
  Cog,
  Wrench,
  Layers,
  Send,
  Bug,
  TestTube, } from "lucide-react";

const skills = [
    // Backend
  { category: "Backend Development", name: "Java", icon: <Flame /> },
  { category: "Backend Development", name: "Spring Boot", icon: <Leaf /> },
  { category: "Backend Development", name: "Maven", icon: <Package /> },
  { category: "Backend Development", name: "Hibernate", icon: <Boxes /> },
  { category: "Backend Development", name: "Node.js", icon: <Server /> },
  { category: "Backend Development", name: "Python", icon: <Code /> },
  { category: "Backend Development", name: "MySQL", icon: <Database /> },
  { category: "Backend Development", name: "MongoDB", icon: <Database /> },
  { category: "Backend Development", name: "PostgreSQL", icon: <Database /> },

  // Frontend
  { category: "Frontend Development", name: "JavaScript", icon: <Code /> },
  { category: "Frontend Development", name: "HTML", icon: <FileCode /> },
  { category: "Frontend Development", name: "CSS", icon: <Palette /> },
  { category: "Frontend Development", name: "SASS", icon: <Palette /> },
  { category: "Frontend Development", name: "React", icon: <Code /> },
  { category: "Frontend Development", name: "Next.js", icon: <Code /> },
  { category: "Frontend Development", name: "Bootstrap", icon: <Bold /> },
  { category: "Frontend Development", name: "Tailwind CSS", icon: <Wind /> },

  // DevOps
  { category: "DevOps & Infrastructure", name: "Docker", icon: <Cog /> },
  { category: "DevOps & Infrastructure", name: "Jenkins", icon: <Wrench /> },
  { category: "DevOps & Infrastructure", name: "AWS", icon: <Cloud /> },
  { category: "DevOps & Infrastructure", name: "Terraform", icon: <Layers /> },
  { category: "DevOps & Infrastructure", name: "Ansible", icon: <Wrench /> },
  { category: "DevOps & Infrastructure", name: "Google Cloud", icon: <Cloud /> },

  // QA & Testing
  { category: "QA & Testing", name: "Postman", icon: <Send /> },
  { category: "QA & Testing", name: "Debugging", icon: <Bug /> },
  { category: "QA & Testing", name: "JUnit", icon: <TestTube /> },

];

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Habilidades y Tecnologías</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Las herramientas que uso para construir aplicaciones modernas y eficientes.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <Badge
            key={skill.name}
            variant="secondary"
            className="text-sm sm:text-base px-4 py-2 flex items-center gap-2 border bg-card shadow-sm hover:bg-muted transition-colors cursor-default"
          >
            {React.cloneElement(skill.icon, { className: 'h-5 w-5 text-primary' })}
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </section>
  );
}
