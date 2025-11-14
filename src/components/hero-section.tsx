"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeroSection() {

  return (
    <section className="w-full py-20 md:py-32 bg-card border-b">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4 md:px-6">
        <div className="space-y-4 text-center md:text-left">
           <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Alfredo Jesus Albornoz
          </h1>
          <p className="text-2xl font-medium text-foreground">
            Desarrollador de Software
          </p>
          <p className="max-w-xl text-muted-foreground md:text-lg">
            Desarrollador de software recién graduado con una sólida base en desarrollo full-stack. Apasionado por la tecnología y con ganas de aplicar mis habilidades para crear soluciones innovadoras.
          </p>
        </div>
        <div className="relative flex justify-center items-center">
            <Avatar className="w-64 h-64 border-4 border-primary shadow-lg">
                <AvatarImage src="https://picsum.photos/seed/profile/400/400"  data-ai-hint="profile picture" alt="Alfredo Jesus Albornoz" />
                <AvatarFallback>AJA</AvatarFallback>
            </Avatar>
        </div>
      </div>
    </section>
  );
}
