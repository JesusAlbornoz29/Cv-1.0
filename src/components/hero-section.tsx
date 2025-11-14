"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Link as LinkIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface HeroSectionProps {
  onCvDataExtracted: () => void;
}

export function HeroSection({ onCvDataExtracted }: HeroSectionProps) {
  const [url, setUrl] = useState("");
  const { toast } = useToast();

  const handleImport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      toast({
        title: "URL Requerida",
        description: "Por favor, introduce una URL para importar.",
        variant: "destructive",
      });
      return;
    }
    // Simulate fetching data from URL
    console.log(`Importing from ${url}`);
    toast({
      title: "Importación Exitosa",
      description: "Datos de CV de demostración cargados.",
    });
    onCvDataExtracted();
    setUrl("");
  };

  return (
    <section className="w-full py-20 md:py-32 bg-card border-b">
      <div className="container mx-auto text-center px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Crea tu Portafolio Profesional en Minutos
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Importa tu CV, mejóralo con IA y exhibe tus proyectos. Así de simple.
          </p>
        </div>
        <div className="mt-8 max-w-xl mx-auto">
          <form onSubmit={handleImport} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-grow">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="url"
                placeholder="https://linkedin.com/in/tu-usuario"
                className="w-full pl-10"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                aria-label="Importar CV desde URL"
              />
            </div>
            <Button type="submit" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}} className="hover:opacity-90">
              Importar y Analizar <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <p className="mt-2 text-xs text-muted-foreground">
            Introduce una URL para extraer los datos de tu CV. (Actualmente simulado)
          </p>
        </div>
      </div>
    </section>
  );
}
