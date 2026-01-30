import React, { useState } from 'react';
import { PRODUCTS } from './constants';
import { ShoppingCart, Plus } from 'lucide-react';

const Store: React.FC = () => {
  const [category, setCategory] = useState('All');
  const categories = ['All', 'Gphone', 'Gpad', 'Gwatch', 'Accessories'];

  return (
    <div className="bg-neutral-50 text-black min-h-screen pb-20 animate-in fade-in duration-700">
      {/* Header */}
      <header className="max-w-screen-xl mx-auto px-6 pt-20 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900">
              Store. <span className="text-neutral-500">The best way to buy the products you love.</span>
            </h1>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium">Need help? Ask a Gphone Genius.</p>
            <p className="text-blue-600 text-sm hover:underline cursor-pointer">Find a store near you &gt;</p>
          </div>
        </div>
      </header>

      {/* Category Pills */}
      <div className="max-w-screen-xl mx-auto px-6 mb-12 overflow-x-auto">
        <div className="flex space-x-4 min-w-max">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${category === cat ? 'bg-neutral-900 text-white' : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <section className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">The latest. <span className="text-neutral-500">Take a look at what's new.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Highlight Card */}
          <div className="md:col-span-2 bg-white rounded-3xl p-10 shadow-sm border border-neutral-100 flex flex-col md:flex-row items-center justify-between group cursor-pointer overflow-hidden">
            <div className="space-y-4 max-w-sm">
              <span className="text-xs font-bold text-orange-600 uppercase">Limited Time</span>
              <h3 className="text-3xl font-bold">Get $200–$650 in credit when you trade in Gphone 12 or higher.</h3>
              <button className="bg-neutral-900 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-neutral-800 transition-colors">Trade in now</button>
            </div>
            <img 
              src="https://picsum.photos/seed/trade/400/300" 
              className="w-full md:w-auto h-48 object-contain transition-transform duration-500 group-hover:scale-105" 
              alt="Trade in"
            />
          </div>

          {/* Regular Products */}
          {PRODUCTS.map(product => (
            <div key={product.id} className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 flex flex-col items-center justify-between group cursor-pointer hover:shadow-xl transition-all">
               <div className="w-full h-64 mb-6">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="w-full text-left space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <button className="bg-neutral-100 p-2 rounded-full hover:bg-neutral-200">
                    <Plus size={20} />
                  </button>
                </div>
                <p className="text-sm text-neutral-500 line-clamp-2">{product.description}</p>
                <p className="font-bold text-lg pt-4">{product.price}</p>
              </div>
            </div>
          ))}

          {/* Accessory Teaser */}
          <div className="bg-neutral-900 rounded-3xl p-8 text-white flex flex-col justify-between group cursor-pointer overflow-hidden relative">
            <div className="z-10">
              <h3 className="text-2xl font-bold mb-2">New Gphone Cases.</h3>
              <p className="text-neutral-400 text-sm">Choose from a range of stunning new colors.</p>
            </div>
            <div className="h-40 relative z-10">
              <img src="https://picsum.photos/seed/case/300/200" className="absolute bottom-0 right-0 w-3/4 object-contain translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" alt="Cases" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
