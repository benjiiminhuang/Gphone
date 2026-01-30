import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getAI = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const chatWithGenius = async (message: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  const ai = getAI();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are the Gphone Genius, an expert representative for the premium smartphone brand Gphone. 
      The current lineup includes:
      1. Gphone 16 Pro: Titanium design, G3 Titan Chip, 100MP Vision camera, starting at $999.
      2. Gphone 16: Vibrant colors, G3 Chip, 48MP camera, starting at $799.
      Your tone is sophisticated, helpful, concise, and elegant, mirroring the Apple Genius style.
      Never mention other brands like Apple or iPhone unless specifically asked for comparisons, and even then, highlight Gphone's unique G3 Intelligence.
      Focus on privacy, performance, and craftsmanship.`,
    },
  });

  // Since chat.sendMessage takes a simple message string, we rely on the session's internal history tracking 
  // but if we were strictly using the provided SDK pattern for a fresh message:
  const response = await chat.sendMessage({ message });
  return response.text;
};

export const generateMarketingCopy = async (productName: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate a one-sentence elegant marketing slogan for a new high-end phone named ${productName}. Make it sound like Apple's copy.`,
  });
  return response.text;
};
