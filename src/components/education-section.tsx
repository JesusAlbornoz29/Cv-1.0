
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Award, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const diplomas = [
  {
    title: "Desarrollador Web Full Stack",
    institution: "Coderhouse",
    year: "2023",
    description: "Programa intensivo que cubre las tecnologías front-end y back-end más demandadas, incluyendo React, Node.js, y bases de datos SQL y NoSQL.",
    imageUrl: "https://picsum.photos/seed/diploma1/800/600",
  },
  {
    title: "Bachiller en Ciencias de la Computación",
    institution: "Universidad de Buenos Aires",
    year: "2022",
    description: "Formación académica completa en los fundamentos de la informática, algoritmos, estructuras de datos y paradigmas de programación.",
    imageUrl: "https://picsum.photos/seed/diploma2/800/600",
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
            <div className="flex">
              <div className="p-6 flex-shrink-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative w-32 h-32 cursor-pointer group">
                      <Image
                        src={diploma.imageUrl}
                        alt={`Diploma de ${diploma.title}`}
                        fill
                        className="object-cover rounded-md"
                        data-ai-hint="diploma certificate"
                      />
                       <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ImageIcon className="text-white h-8 w-8" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-2">
                     <Image
                        src={diploma.imageUrl}
                        alt={`Diploma de ${diploma.title}`}
                        width={1200}
                        height={800}
                        className="object-contain rounded-md"
                      />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex-grow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle as="h3" className="font-headline text-xl">{diploma.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 pt-1">
                        <Award className="h-4 w-4" />
                        {diploma.institution}
                      </CardDescription>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium shrink-0 pt-1">{diploma.year}</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{diploma.description}</p>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
