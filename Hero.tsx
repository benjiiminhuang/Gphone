import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Product } from './types';

interface HeroProps {
  product: Product;
}

const Hero: React.FC<HeroProps> = ({ product }) => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient">
      <div className="z-10 text-center px-4 max-w-4xl mx-auto space-y-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <h2 className="text-sm md:text-lg font-semibold text-orange-500 tracking-wider uppercase">New</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
          {product.name}
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-gradient">
          {product.tagline}
        </p>
        
        <div className="flex items-center justify-center space-x-6 pt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105">
            Learn more
          </button>
          <button className="text-blue-500 hover:underline flex items-center font-medium">
            Buy <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="mt-12 w-full max-w-5xl px-6 animate-in zoom-in fade-in duration-1000 delay-300">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-auto object-cover rounded-t-3xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
