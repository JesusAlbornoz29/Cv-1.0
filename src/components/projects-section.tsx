import { ProjectCard } from "@/components/project-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    title: "Sistema de Turnos",
    description: "Una aplicación web de gestión de turnos que permite a los usuarios solicitar citas médicas rápidamente, generando un número de cita único al instante y gestionando el llamado mediante el cambio de estados de los tickets de los pacientes.",
    image: PlaceHolderImages.find(img => img.id === "project-turnos") || PlaceHolderImages[0],
    liveUrl: "https://sistemadeturno.netlify.app",
    codeUrl: "https://github.com/JesusAlbornoz29/SistemaDeTurnos",
  },
  {
    title: "Rediseño de CV Interactivo",
    description: "Desarrollé un CV dinámico a partir de un modelo estático en HTML y CSS. Utilicé React para implementar componentes interactivos y mejorar la experiencia del usuario, facilitando la edición y actualización de información de manera eficiente.",
    image: PlaceHolderImages.find(img => img.id === "project-cv") || PlaceHolderImages[1],
    liveUrl: "https://cvbasico.netlify.app",
    codeUrl: "https://github.com/JesusAlbornoz29/CV",
  },
  {
    title: "Poke api",
    description: "Uno de mis primeros proyectos consumiendo API, donde visualizo información de Pokémon de manera dinámica.",
    image: PlaceHolderImages.find(img => img.id === "project-poke") || PlaceHolderImages[2],
    liveUrl: "https://pockedexapi2025.netlify.app", 
    codeUrl: "https://github.com/JesusAlbornoz29/PokemonApi",
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-slate-900">Proyectos Destacados</h2>
        <p className="mx-auto max-w-[700px] text-slate-600 md:text-lg">
          Una selección de mis trabajos recientes que demuestran mi capacidad técnica y resolución de problemas.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}