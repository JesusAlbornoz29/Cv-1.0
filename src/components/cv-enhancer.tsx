"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Bot, Loader2 } from "lucide-react";
import { enhanceCv } from "@/ai/flows/enhance-cv-flow";
import { useToast } from "@/hooks/use-toast";

interface CvEnhancerProps {
  cvData: string;
  onCvDataChange: (data: string) => void;
}

export function CvEnhancer({ cvData, onCvDataChange }: CvEnhancerProps) {
  const [suggestions, setSuggestions] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleEnhance = () => {
    if (!cvData) {
      toast({
        title: "CV Vacío",
        description: "No hay datos de CV para mejorar. Por favor, importa o pega tu CV.",
        variant: "destructive",
      });
      return;
    }
    startTransition(async () => {
      setSuggestions("");
      try {
        const result = await enhanceCv({ cvData });
        setSuggestions(result.suggestions);
      } catch (error) {
        console.error("Error enhancing CV:", error);
        toast({
          title: "Error de IA",
          description: "No se pudieron generar las sugerencias. Por favor, inténtalo de nuevo.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <section id="cv-enhancer" className="space-y-8">
       <div className="text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Herramienta de Mejora de CV con IA</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
          Pega tu CV actual y deja que nuestra IA te dé sugerencias para destacar.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Tu CV Actual</CardTitle>
            <CardDescription>Edita el texto a continuación como desees.</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={cvData}
              onChange={(e) => onCvDataChange(e.target.value)}
              rows={20}
              placeholder="Pega tu CV aquí..."
              className="h-96"
            />
            <Button onClick={handleEnhance} disabled={isPending} className="mt-4 w-full">
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Mejorar con IA
            </Button>
          </CardContent>
        </Card>
        
        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bot className="mr-2 h-5 w-5" />
              Sugerencias de la IA
            </CardTitle>
            <CardDescription>Recomendaciones para mejorar tu CV.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            {isPending ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-muted-foreground">
                  <Loader2 className="mx-auto h-8 w-8 animate-spin mb-2" />
                  <p>Analizando tu CV...</p>
                </div>
              </div>
            ) : suggestions ? (
                <div className="prose prose-sm max-w-none text-sm whitespace-pre-wrap font-body bg-muted p-4 rounded-md h-full overflow-auto">
                    {suggestions}
                </div>
            ) : (
              <div className="flex items-center justify-center h-full rounded-lg border-2 border-dashed border-border bg-background">
                <div className="text-center text-muted-foreground p-4">
                  <Bot className="mx-auto h-12 w-12 mb-2" />
                  <p>Las sugerencias aparecerán aquí después del análisis.</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
