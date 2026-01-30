
import React from 'react';
import { GPADS } from '../constants';
import { ChevronRight, Layers, Palette, Cpu } from 'lucide-react';

const Gpad: React.FC = () => {
  const product = GPADS[0];

  return (
    <div className="bg-black text-white min-h-screen animate-in fade-in duration-700">
      {/* Immersive Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#111]">
        <div className="z-10 text-center px-4 mb-12">
          <h2 className="text-lg font-semibold text-orange-500 mb-4 tracking-widest uppercase">New</h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter">Gpad Pro</h1>
          <p className="text-2xl md:text-3xl font-medium text-gradient">Thinpossible.</p>
          <div className="flex items-center justify-center space-x-6 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold">Buy</button>
            <button className="text-blue-500 hover:underline flex items-center font-semibold">Learn more <ChevronRight size={18} /></button>
          </div>
        </div>
        <div className="w-full max-w-6xl px-6">
          <img 
            src={product.imageUrl} 
            alt="Gpad Pro" 
            className="w-full h-auto object-cover rounded-3xl shadow-[0_0_100px_rgba(255,255,255,0.05)]"
          />
        </div>
      </section>

      {/* Creativity Section */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Your imagination’s best friend.</h2>
            <p className="text-xl text-neutral-500 leading-relaxed">
              With the new G-Pencil Pro, every stroke is precise, lag-free, and full of life. From professional illustration to high-end video editing, Gpad Pro handles it all.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="space-y-2">
                <Layers className="text-blue-600" size={32} />
                <h4 className="font-bold">Multitasking</h4>
                <p className="text-sm text-neutral-400">Run three apps side-by-side with G-OS.</p>
              </div>
              <div className="space-y-2">
                <Palette className="text-purple-600" size={32} />
                <h4 className="font-bold">Color Accuracy</h4>
                <p className="text-sm text-neutral-400">P3 wide color for professional workflows.</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" alt="Creativity" />
          </div>
        </div>
      </section>

      {/* Chip Power Section */}
      <section className="py-32 px-6 bg-neutral-900 overflow-hidden">
        <div className="max-w-screen-xl mx-auto text-center">
          <div className="inline-block p-4 rounded-3xl bg-neutral-800 mb-8 border border-white/5">
            <Cpu size={48} className="text-blue-500" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight">Powered by G3.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-neutral-800 p-10 rounded-3xl border border-white/5">
              <h3 className="text-5xl font-bold mb-4">50%</h3>
              <p className="text-neutral-400">Faster CPU performance than the previous generation.</p>
            </div>
            <div className="bg-neutral-800 p-10 rounded-3xl border border-white/5">
              <h3 className="text-5xl font-bold mb-4">2x</h3>
              <p className="text-neutral-400">Graphics performance for demanding creative apps.</p>
            </div>
            <div className="bg-neutral-800 p-10 rounded-3xl border border-white/5">
              <h3 className="text-5xl font-bold mb-4">24h</h3>
              <p className="text-neutral-400">Battery life that keeps up with your longest work days.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gpad;
