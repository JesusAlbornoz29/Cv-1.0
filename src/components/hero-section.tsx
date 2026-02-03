"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const heroBg = PlaceHolderImages.find(img => img.id === "hero-bg");

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden border-b">
      {/* Background Image with Overlay */}
      {heroBg && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg.imageUrl}
            alt="Technology Background"
            fill
            className="object-cover opacity-10"
            data-ai-hint={heroBg.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        </div>
      )}

      <div className="container relative z-10 mx-auto grid md:grid-cols-2 gap-12 items-center px-4 md:px-6">
        <div className="space-y-4 text-center md:text-left">
           <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Alfredo Jesus Albornoz Manzanares
          </h1>
          <p className="text-2xl font-medium text-foreground">
            Desarrollador de Software | Universidad Tecnológica del Uruguay (UTEC)
          </p>
          <p className="max-w-xl text-muted-foreground md:text-lg">
            Profesional con más de 9 años de experiencia liderando áreas de servicio técnico y soporte IT, especializado en la resolución de problemas y la mejora de procesos. Tras formarme como desarrollador, estoy impulsando mi transición hacia el desarrollo de software, uniendo mi experiencia técnica y de gestión con la creación de soluciones completas y funcionales orientadas al negocio y al usuario.
          </p>
        </div>
        <div className="relative flex justify-center items-center">
            <Avatar className="w-64 h-64 border-4 border-primary shadow-xl bg-card">
                <AvatarImage src="/img/perfil2.jfif" data-ai-hint="profile picture" alt="Alfredo Jesus Albornoz" />
                <AvatarFallback>AJA</AvatarFallback>
            </Avatar>
        </div>
      </div>
    </section>
  );
}