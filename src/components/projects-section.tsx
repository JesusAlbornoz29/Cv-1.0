import { ProjectCard } from "@/components/project-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    title: "Gestor de Tareas",
    description: "Una aplicación web de gestión de tareas con un diseño moderno y funcionalidades intuitivas para organizar tu trabajo diario.",
    image: PlaceHolderImages[0],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Rastreador de Fitness",
    description: "Una aplicación móvil para seguir tus metas de fitness, registrar entrenamientos y visualizar tu progreso a lo largo del tiempo.",
    image: PlaceHolderImages[1],
    liveUrl: "#",
    codeUrl: "#",
  },
    {
    title: "Plataforma E-commerce",
    description: "Una plataforma de comercio electrónico construida para un negocio local, con un catálogo de productos, carrito de compras y pasarela de pago.",
    image: PlaceHolderImages[2],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Dashboard de Datos",
    description: "Un panel de visualización de datos que muestra las tendencias del mercado con gráficos y tablas interactivas.",
    image: PlaceHolderImages[3],
    liveUrl: "#",
    codeUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Proyectos Destacados</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Una selección de mis trabajos recientes.
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
