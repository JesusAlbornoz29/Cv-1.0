import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Tech Corp",
    period: "2020 - Presente",
    description: "Desarrollé y mantuve aplicaciones web complejas utilizando React y Node.js. Lideré un equipo pequeño en la implementación de nuevas características, resultando en una mejora del 20% en la participación del usuario.",
  },
  {
    role: "Junior Developer",
    company: "Web Solutions",
    period: "2018 - 2020",
    description: "Colaboré en el desarrollo de sitios web para clientes utilizando HTML, CSS y JavaScript. Gané experiencia fundamental en prácticas de desarrollo ágil y control de versiones con Git.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Experiencia Profesional</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Mi trayectoria profesional a lo largo de los años.
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                <div>
                  <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                  <CardDescription className="flex items-center gap-2 pt-1">
                    <Briefcase className="h-4 w-4" />
                    {exp.company}
                  </CardDescription>
                </div>
                <p className="text-sm text-muted-foreground font-medium shrink-0 pt-1">{exp.period}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
