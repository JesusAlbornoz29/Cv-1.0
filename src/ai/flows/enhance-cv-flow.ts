'use server';

/**
 * @fileOverview An AI-powered tool that reviews CV data and provides suggestions for improvement.
 *
 * - enhanceCv - A function that takes CV data as input and returns improvement suggestions.
 * - EnhanceCvInput - The input type for the enhanceCv function.
 * - EnhanceCvOutput - The return type for the enhanceCv function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceCvInputSchema = z.object({
  cvData: z
    .string()
    .describe('The CV data to be reviewed, in plain text format.'),
});
export type EnhanceCvInput = z.infer<typeof EnhanceCvInputSchema>;

const EnhanceCvOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('AI-powered suggestions for improving the CV data.'),
});
export type EnhanceCvOutput = z.infer<typeof EnhanceCvOutputSchema>;

export async function enhanceCv(input: EnhanceCvInput): Promise<EnhanceCvOutput> {
  return enhanceCvFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceCvPrompt',
  input: {schema: EnhanceCvInputSchema},
  output: {schema: EnhanceCvOutputSchema},
  prompt: `You are an AI-powered CV improvement tool. Review the following CV data and provide suggestions for improvement, focusing on clarity, impact, and relevance.\n\nCV Data: {{{cvData}}}\n\nSuggestions:`, 
});

const enhanceCvFlow = ai.defineFlow(
  {
    name: 'enhanceCvFlow',
    inputSchema: EnhanceCvInputSchema,
    outputSchema: EnhanceCvOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
