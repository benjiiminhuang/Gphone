
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'gphone-16-pro',
    name: 'Gphone 16 Pro',
    tagline: 'Hello, Intelligence.',
    description: 'The ultimate Gphone with the new G3 Titan chip and a revolutionary 100MP G-Vision camera system.',
    price: 'From $999',
    imageUrl: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800',
    features: ['Titanium design', 'G3 Titan Chip', '100MP Camera', '6.7" Super Retina G'],
    colors: ['#232323', '#f2f2f2', '#3d444c']
  },
  {
    id: 'gphone-16',
    name: 'Gphone 16',
    tagline: 'Simply amazing.',
    description: 'A huge leap in battery life and camera performance. Now in vibrant new finishes.',
    price: 'From $799',
    imageUrl: 'https://images.unsplash.com/photo-1592890678913-e927913b66b6?auto=format&fit=crop&q=80&w=800',
    features: ['Aluminum design', 'G3 Chip', '48MP Camera', '6.1" Retina G'],
    colors: ['#000000', '#ffffff', '#7bb2e8', '#e87ba8']
  }
];

export const GPADS: Product[] = [
  {
    id: 'gpad-pro',
    name: 'Gpad Pro',
    tagline: 'Thinpossible.',
    description: 'The most powerful Gpad ever. Now with the G3 chip and the stunning Ultra Retina G display.',
    price: 'From $899',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
    features: ['Ultra Retina G Display', 'G3 Chip', 'G-Pencil Pro Support', 'Thinnest G device'],
    colors: ['#232323', '#f2f2f2']
  }
];

export const GWATCHES: Product[] = [
  {
    id: 'gwatch-series-x',
    name: 'Gwatch Series X',
    tagline: 'Smarter. Brighter. Mightier.',
    description: 'The world’s most popular watch. Now with advanced health sensors and a carbon neutral finish.',
    price: 'From $399',
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800',
    features: ['Blood Oxygen Sensor', 'ECG App', 'Always-On Display', 'Water Resistant 50m'],
    colors: ['#232323', '#f2f2f2', '#c13b3b']
  }
];

export const NAV_LINKS = [
  { label: 'Store', href: '#' },
  { label: 'Gphone', href: '#' },
  { label: 'Gpad', href: '#' },
  { label: 'Gwatch', href: '#' },
  { label: 'Support', href: '#' }
];
