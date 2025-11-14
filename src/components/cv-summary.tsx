
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function CvSummary() {
  return (
    <section id="about-me">
        <Card>
            <CardHeader>
                <CardTitle>Resumen Profesional</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                Desarrollador de software recién graduado con una sólida base en desarrollo full-stack. Apasionado por la tecnología, con ganas de aplicar mis habilidades en JavaScript, React y Node.js para crear soluciones innovadoras y crecer profesionalmente en mi primer empleo.
                </p>
            </CardContent>
        </Card>
    </section>
  )
}
