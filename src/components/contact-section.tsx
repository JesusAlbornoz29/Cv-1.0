
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User, Mail, Phone, Linkedin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Contacto</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Ponte en contacto conmigo.
        </p>
      </div>
       <Card className="max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
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
    </section>
  )
}
