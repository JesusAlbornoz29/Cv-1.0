
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Award, Image as ImageIcon, GraduationCap } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const diplomas = [
  {
    title: "Ingeniería en Computación",
    institution: "Universidad de la República (UDELAR)",
    year: "En curso",
    description: "Formación de grado enfocada en ciencias de la computación, algoritmos, estructuras de datos y desarrollo de software avanzado.",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    isCurrent: true,
  },
  {
    title: "Iniciación al Desarrollo con IA",
    institution: "Big School - Brais Moure",
    year: "2025",
    description: "Especialización en la integración de modelos de inteligencia artificial en flujos de trabajo de desarrollo de software.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Desarrollador de Software énfasis Backend",
    institution: "Universidad Tecnológica del Uruguay - UTEC",
    year: "2024-2025",
    description: "Programa avanzado centrado en arquitectura de servidores, APIs RESTful y gestión de bases de datos escalables.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Desarrollador de Software énfasis Backend",
    institution: "Digital House - Argentina",
    year: "2024-2025",
    description: "Formación intensiva en el ecosistema Java/Spring Boot y despliegue de microservicios.",
    imageUrl: "https://images.unsplash.com/photo-148441785559c-44d60ef39464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },  
  {
    title: "Desarrollador Web Full Stack",
    institution: "Universidad Tecnológica del Uruguay - UTEC",
    year: "2022-2023",
    description: "Capacitación integral en tecnologías front-end (React) y back-end (Node.js), cubriendo todo el ciclo de vida del desarrollo web.",
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Desarrollador de Software",
    institution: "Digital House - Argentina",
    year: "2022-2023",
    description: "Fundamentos sólidos de programación, metodologías ágiles y trabajo en equipo para proyectos tecnológicos.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Bachiller Tecnológico en Informática",
    institution: "Instituto Tecnológico Superior Arias Balparda",
    year: "2016-2020",
    description: "Formación básica técnica en redes, hardware y lógica de programación.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Educación y Diplomas</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Mi formación académica y certificaciones que avalan mi crecimiento profesional.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {diplomas.map((diploma, index) => (
          <Card key={index} className={`transition-all hover:shadow-md border-l-4 ${diploma.isCurrent ? 'border-l-primary' : 'border-l-transparent'}`}>
            <div className="flex flex-col sm:flex-row">
              <div className="p-6 flex-shrink-0 flex justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative w-32 h-32 cursor-pointer group">
                      <Image
                        src={diploma.imageUrl}
                        alt={`Representación de ${diploma.title}`}
                        fill
                        className="object-cover rounded-md"
                      />
                       <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                        <ImageIcon className="text-white h-8 w-8" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-2 bg-transparent border-none shadow-none">
                     <div className="relative w-full aspect-[4/3]">
                       <Image
                          src={diploma.imageUrl}
                          alt={`Diploma de ${diploma.title}`}
                          fill
                          className="object-contain rounded-md"
                        />
                     </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex-grow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle as="h3" className="font-headline text-xl flex items-center gap-2">
                        {diploma.isCurrent && <GraduationCap className="h-5 w-5 text-primary" />}
                        {diploma.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 pt-1 font-medium text-slate-700">
                        <Award className="h-4 w-4 text-primary" />
                        {diploma.institution}
                      </CardDescription>
                    </div>
                    <p className="text-sm font-bold text-primary shrink-0 pt-1">{diploma.year}</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">{diploma.description}</p>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
