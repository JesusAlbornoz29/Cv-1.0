import React from "react";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Cog, Server, PenTool, Wind } from "lucide-react";

const skills = [
  { name: "React", icon: <Code /> },
  { name: "Next.js", icon: <Code /> },
  { name: "Node.js", icon: <Server /> },
  { name: "TypeScript", icon: <Code /> },
  { name: "PostgreSQL", icon: <Database /> },
  { name: "MongoDB", icon: <Database /> },
  { name: "Docker", icon: <Cog /> },
  { name: "Google Cloud", icon: <Cloud /> },
  { name: "Tailwind CSS", icon: <Wind /> },
  { name: "UI/UX Design", icon: <PenTool /> },
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
