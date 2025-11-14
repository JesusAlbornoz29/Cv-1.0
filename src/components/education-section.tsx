import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const diplomas = [
  {
    title: "Desarrollador Web Full Stack",
    institution: "Coderhouse",
    year: "2023",
    description: "Programa intensivo que cubre las tecnologías front-end y back-end más demandadas, incluyendo React, Node.js, y bases de datos SQL y NoSQL.",
  },
  {
    title: "Bachiller en Ciencias de la Computación",
    institution: "Universidad de Buenos Aires",
    year: "2022",
    description: "Formación académica completa en los fundamentos de la informática, algoritmos, estructuras de datos y paradigmas de programación.",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Educación y Diplomas</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Mi formación y certificaciones más importantes.
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        {diplomas.map((diploma, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                <div>
                  <CardTitle className="font-headline text-xl">{diploma.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 pt-1">
                    <Award className="h-4 w-4" />
                    {diploma.institution}
                  </CardDescription>
                </div>
                <p className="text-sm text-muted-foreground font-medium shrink-0 pt-1">{diploma.year}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{diploma.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
