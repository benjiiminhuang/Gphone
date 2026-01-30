
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  imageUrl: string;
  features: string[];
  colors: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum SectionType {
  Hero = 'Hero',
  Bento = 'Bento',
  Specs = 'Specs',
  Chat = 'Chat'
}
