
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User, Mail, Phone, Linkedin } from "lucide-react";

export function CvInfo() {
  return (
    <section id="about-me" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Sobre Mí</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Un resumen de mi perfil profesional y datos de contacto.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card>
            <CardHeader>
                <CardTitle>Resumen</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                Desarrollador de software recién graduado con una sólida base en desarrollo full-stack. Apasionado por la tecnología, con ganas de aplicar mis habilidades en JavaScript, React y Node.js para crear soluciones innovadoras y crecer profesionalmente en mi primer empleo.
                </p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                    <User className="h-5 w-5 text-primary" />
                    <span>Alfredo Jesus Albornoz</span>
                </div>
                 <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:alfredo.albornoz@email.com" className="hover:underline">
                        alfredo.albornoz@email.com
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>11-2233-4455</span>
                </div>
                <div className="flex items-center gap-4">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a href="https://linkedin.com/in/alfredoalbornoz" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        linkedin.com/in/alfredoalbornoz
                    </a>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  )
}
