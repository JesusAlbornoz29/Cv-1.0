import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

interface ProjectCardProps {
  title: string;
  description: string;
  image: ImagePlaceholder;
  liveUrl: string;
  codeUrl: string;
}

export function ProjectCard({ title, description, image, liveUrl, codeUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="aspect-video relative overflow-hidden">
           <Image
            src={image.imageUrl}
            alt={description}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
         <h3 className="text-xl font-headline font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 p-6 pt-0">
        <Button variant="outline" asChild>
          <Link href={codeUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Código
          </Link>
        </Button>
        <Button asChild>
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}