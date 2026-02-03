"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const heroBg = PlaceHolderImages.find(img => img.id === "hero-bg");

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden border-b bg-slate-50">
      {/* Background Image with Overlay */}
      {heroBg && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg.imageUrl}
            alt="Technology Background"
            fill
            className="object-cover opacity-30"
            priority
            data-ai-hint={heroBg.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
        </div>
      )}

      <div className="container relative z-10 mx-auto grid md:grid-cols-2 gap-12 items-center px-4 md:px-6">
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-slate-900">
              Alfredo Jesus <span className="text-primary">Albornoz</span>
            </h1>
            <p className="text-2xl font-medium text-slate-600">
              Desarrollador de Software | UTEC
            </p>
          </div>
          <p className="max-w-xl text-slate-700 md:text-lg leading-relaxed font-medium">
            Profesional con más de 9 años de experiencia liderando áreas de soporte IT, ahora transformando mi trayectoria técnica en el desarrollo de software. Tras años de liderazgo y resolución de problemas complejos, busco mi primera oportunidad laboral como Desarrollador de Software para aplicar mis conocimientos en proyectos innovadores.
          </p>
        </div>
        <div className="relative flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl"></div>
              <Avatar className="w-64 h-64 border-8 border-white shadow-2xl relative">
                  <AvatarImage 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=640&h=640" 
                    data-ai-hint="profile picture" 
                    alt="Alfredo Jesus Albornoz" 
                  />
                  <AvatarFallback className="text-4xl bg-primary text-white font-bold">AJA</AvatarFallback>
              </Avatar>
            </div>
        </div>
      </div>
    </section>
  );
}