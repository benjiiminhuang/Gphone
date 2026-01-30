
import React from 'react';
import { Search, Key, Wrench, CreditCard, LifeBuoy, Monitor, Smartphone, Clock } from 'lucide-react';

const Support: React.FC = () => {
  const supportCards = [
    { icon: <Key size={32} className="text-blue-500" />, title: "Forgotten G-ID", desc: "Reset your password or recover your ID." },
    { icon: <Wrench size={32} className="text-orange-500" />, title: "Gphone Repair", desc: "Get your screen fixed or battery replaced." },
    { icon: <CreditCard size={32} className="text-green-500" />, title: "Billing & Subscriptions", desc: "Manage G Music, G TV+, and Arcade." },
    { icon: <LifeBuoy size={32} className="text-purple-500" />, title: "G-Care+", desc: "Check your coverage and start a claim." }
  ];

  return (
    <div className="bg-white text-black min-h-screen animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="bg-neutral-50 pt-24 pb-20 px-6">
        <div className="max-w-screen-md mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Gphone Support</h1>
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for a topic..." 
              className="w-full bg-white border border-neutral-200 rounded-2xl py-4 px-12 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={24} />
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="max-w-screen-xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {supportCards.map((card, idx) => (
            <div key={idx} className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 text-center hover:bg-neutral-100 transition-colors cursor-pointer group">
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform">{card.icon}</div>
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Device Help */}
      <section className="bg-neutral-900 py-24 px-6 text-white overflow-hidden relative">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 max-w-lg relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get support for all your devices.</h2>
            <p className="text-neutral-400 text-lg">Whether it's your Gphone, Gpad, or Gwatch, we're here to help you get the most out of your technology.</p>
            <div className="flex space-x-6">
              <div className="flex flex-col items-center">
                <Smartphone size={40} className="text-blue-500 mb-2" />
                <span className="text-xs">Gphone</span>
              </div>
              <div className="flex flex-col items-center">
                <Monitor size={40} className="text-blue-500 mb-2" />
                <span className="text-xs">Gpad</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock size={40} className="text-blue-500 mb-2" />
                <span className="text-xs">Gwatch</span>
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-80">
            <img src="https://picsum.photos/seed/support-img/800/600" className="w-full h-full object-cover rounded-3xl opacity-80" alt="Support" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Genius Bar Promo */}
      <section className="max-w-screen-xl mx-auto px-6 py-32 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Connect with a Genius.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-neutral-50 p-12 rounded-3xl border border-neutral-100 flex flex-col items-center space-y-4">
            <h3 className="text-2xl font-bold">Chat with us</h3>
            <p className="text-neutral-500">Our experts are online 24/7 to help you troubleshoot.</p>
            <button className="text-blue-600 font-bold hover:underline">Start a chat ></button>
          </div>
          <div className="bg-neutral-50 p-12 rounded-3xl border border-neutral-100 flex flex-col items-center space-y-4">
            <h3 className="text-2xl font-bold">Visit a Store</h3>
            <p className="text-neutral-500">Book a reservation at the Gphone Genius Bar.</p>
            <button className="text-blue-600 font-bold hover:underline">Find a location ></button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
