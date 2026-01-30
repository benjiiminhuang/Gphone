
import React from 'react';
import { GWATCHES } from '../constants';
import { Activity, Heart, Moon, ShieldCheck, ChevronRight } from 'lucide-react';

const Gwatch: React.FC = () => {
  const product = GWATCHES[0];

  return (
    <div className="bg-black text-white min-h-screen animate-in fade-in duration-700">
      {/* Immersive Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-blue-500/30 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-purple-500/20"></div>
        </div>
        
        <div className="z-10 text-center px-4 space-y-4">
          <h2 className="text-lg font-semibold text-blue-400 tracking-widest uppercase">Series X</h2>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Gwatch</h1>
          <p className="text-2xl md:text-3xl font-medium text-gradient">Smarter. Brighter. Mightier.</p>
          <div className="flex items-center justify-center space-x-6 pt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all">Buy</button>
            <button className="text-blue-500 hover:underline flex items-center font-semibold">Learn more <ChevronRight size={18} /></button>
          </div>
        </div>

        <div className="mt-16 w-full max-w-xl px-6 relative z-10">
          <img 
            src={product.imageUrl} 
            alt="Gwatch Series X" 
            className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-transform duration-1000 hover:scale-105"
          />
        </div>
      </section>

      {/* Health Rings / Stats */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">A healthy leap ahead.</h2>
            <p className="text-xl text-neutral-500 max-w-2xl mx-auto">Gwatch is designed to be your ultimate health companion, monitoring everything from your heart rate to your sleep quality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Activity className="text-orange-500" />, title: "Activity", val: "12,400", unit: "Steps" },
              { icon: <Heart className="text-red-500" />, title: "Heart Rate", val: "72", unit: "BPM" },
              { icon: <Moon className="text-purple-500" />, title: "Sleep", val: "7.5", unit: "Hours" },
              { icon: <ShieldCheck className="text-green-500" />, title: "Oxygen", val: "99", unit: "%" }
            ].map((stat, i) => (
              <div key={i} className="bg-neutral-50 p-10 rounded-3xl border border-neutral-100 flex flex-col items-center text-center">
                <div className="mb-4">{stat.icon}</div>
                <h4 className="text-neutral-400 text-sm font-bold uppercase tracking-wider mb-2">{stat.title}</h4>
                <div className="text-4xl font-bold">{stat.val}</div>
                <div className="text-neutral-400 text-xs mt-1">{stat.unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rugged Design Section */}
      <section className="py-32 px-6 bg-neutral-900 text-white overflow-hidden relative">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
             <img 
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800" 
              alt="Gwatch Design" 
              className="rounded-3xl shadow-2xl opacity-90"
            />
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Tough as you are.</h2>
            <p className="text-xl text-neutral-400">
              The aerospace-grade aluminum case and flat sapphire front crystal are designed to withstand the harshest environments. Whether you’re climbing mountains or diving into the ocean.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span className="font-medium">IP6X Dust Resistant</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span className="font-medium">50m Water Resistance</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span className="font-medium">MIL-STD 810H Certified</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gwatch;
