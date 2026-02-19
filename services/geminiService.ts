import { GoogleGenAI, Type } from "@google/genai";
import { SymptomAnalysisResult } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const analyzeSymptoms = async (symptoms: string): Promise<SymptomAnalysisResult> => {
  if (!apiKey) {
    // Fallback for demo purposes if no key is provided, ensuring the UI still works
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          analysis: "Based on the symptoms described, you may be experiencing signs of hormonal fluctuation common in perimenopause. Fatigue, brain fog, and irregular cycles are classic indicators often overlooked.",
          recommendations: [
            "Prioritize sleep hygiene and magnesium intake.",
            "Discuss hormone therapy options with a specialist.",
            "Consider tracking your symptoms for 2 months."
          ],
          disclaimer: "This is a generated simulation. Please provide a valid API Key for real AI analysis."
        });
      }, 1500);
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a compassionate, expert menopause specialist. 
      Analyze the following user symptoms: "${symptoms}".
      Provide a brief, empathetic analysis of how these might relate to perimenopause or menopause.
      Suggest 3 specific, actionable lifestyle or holistic tips.
      Ensure the tone is professional, authoritative, yet warm.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: {
              type: Type.STRING,
              description: "A paragraph analyzing the symptoms in context of menopause.",
            },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3 distinct actionable tips.",
            },
            disclaimer: {
              type: Type.STRING,
              description: "A mandatory medical disclaimer.",
            }
          },
          required: ["analysis", "recommendations", "disclaimer"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as SymptomAnalysisResult;

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Unable to analyze symptoms at this moment. Please try again later.");
  }
};