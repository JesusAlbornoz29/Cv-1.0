import React from "react";
import { Badge } from "@/components/ui/badge";
import { 
  Code,
  Server,
  Flame,
  Leaf,
  Database,
  FileCode,
  Palette,
  Wind,
  Cloud,
  Cog,
  Send,
  TestTube,
  Brain,
  Github,
  GitBranch,
  Terminal,
  Cpu,
  Layers
} from "lucide-react";

const skills = [
  // Backend
  { category: "Backend Development", name: "Java", icon: <Flame /> },
  { category: "Backend Development", name: "Spring Boot", icon: <Leaf /> },
  { category: "Backend Development", name: "Node.js", icon: <Server /> },
  { category: "Backend Development", name: "Python", icon: <Code /> },
  { category: "Backend Development", name: ".NET", icon: <Cpu /> },
  { category: "Backend Development", name: "Go", icon: <Code /> },
  { category: "Backend Development", name: "Firebase", icon: <Flame /> },
  { category: "Backend Development", name: "MySQL", icon: <Database /> },
  { category: "Backend Development", name: "MongoDB", icon: <Database /> },
  { category: "Backend Development", name: "PostgreSQL", icon: <Database /> },

  // Frontend
  { category: "Frontend Development", name: "JavaScript", icon: <Code /> },
  { category: "Frontend Development", name: "TypeScript", icon: <Code /> },
  { category: "Frontend Development", name: "React", icon: <Code /> },
  { category: "Frontend Development", name: "Next.js", icon: <Code /> },
  { category: "Frontend Development", name: "Angular", icon: <Code /> },
  { category: "Frontend Development", name: "HTML5", icon: <FileCode /> },
  { category: "Frontend Development", name: "CSS3", icon: <Palette /> },
  { category: "Frontend Development", name: "Sass", icon: <Palette /> },
  { category: "Frontend Development", name: "Tailwind CSS", icon: <Wind /> },
  { category: "Frontend Development", name: "Figma", icon: <Palette /> },

  // DevOps & Herramientas
  { category: "DevOps & Cloud", name: "Docker", icon: <Cog /> },
  { category: "DevOps & Cloud", name: "Git", icon: <GitBranch /> },
  { category: "DevOps & Cloud", name: "GitHub", icon: <Github /> },
  { category: "DevOps & Cloud", name: "Linux", icon: <Terminal /> },
  { category: "DevOps & Cloud", name: "Google Cloud", icon: <Cloud /> },
  { category: "DevOps & Cloud", name: "AWS", icon: <Cloud /> },
  { category: "DevOps & Cloud", name: "Azure", icon: <Cloud /> },
  
  // IA & QA
  { category: "IA & Testing", name: "NotebookLM", icon: <Brain /> },
  { category: "IA & Testing", name: "Postman", icon: <Send /> },
  { category: "IA & Testing", name: "JUnit", icon: <TestTube /> },
  { category: "Herramientas", name: "Webpack / Babel", icon: <Layers /> },
];

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Habilidades y Tecnologías</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Un arsenal completo de herramientas para el desarrollo de software moderno.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <Badge
            key={skill.name}
            variant="secondary"
            className="text-sm sm:text-base px-4 py-2 flex items-center gap-2 border bg-card shadow-sm hover:bg-muted transition-colors cursor-default"
          >
            {React.cloneElement(skill.icon as React.ReactElement, { className: 'h-5 w-5 text-primary' })}
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </section>
  );
}
