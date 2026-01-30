
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';
import GeniusChat from './components/GeniusChat';
import Store from './pages/Store';
import Support from './pages/Support';
import Gpad from './pages/Gpad';
import Gwatch from './pages/Gwatch';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'Store':
        return <Store />;
      case 'Support':
        return <Support />;
      case 'Gpad':
        return <Gpad />;
      case 'Gwatch':
        return <Gwatch />;
      case 'Gphone':
      case 'Home':
      default:
        return (
          <>
            <Hero product={PRODUCTS[0]} />
            <section className="bg-neutral-100 text-black py-20">
              <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 animate-in slide-in-from-left-10 duration-1000">
                   <img 
                    src={PRODUCTS[1].imageUrl} 
                    alt={PRODUCTS[1].name} 
                    className="w-full h-auto rounded-3xl shadow-xl"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-6 animate-in slide-in-from-right-10 duration-1000">
                  <h1 className="text-5xl md:text-6xl font-bold tracking-tight">{PRODUCTS[1].name}</h1>
                  <p className="text-2xl font-medium text-neutral-600">{PRODUCTS[1].tagline}</p>
                  <p className="text-lg text-neutral-500 max-w-md">
                    Experience the next generation of Gphone. Beautiful design meets unparalleled performance.
                  </p>
                  <div className="flex items-center space-x-6">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all">
                      Buy
                    </button>
                    <button className="text-blue-600 font-semibold hover:underline">
                      Learn more &gt;
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <FeatureGrid />
            <section className="bg-black py-32 px-6">
              <div className="max-w-screen-xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Which Gphone is right for you?</h2>
                <button onClick={() => setCurrentPage('Store')} className="text-blue-500 text-xl hover:underline">Compare all models &gt;</button>
              </div>
              <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                {PRODUCTS.map(p => (
                  <div key={p.id} className="text-center group">
                    <div className="h-96 overflow-hidden rounded-3xl mb-8 border border-white/5 bg-neutral-900 flex items-center justify-center p-12">
                       <img 
                        src={p.imageUrl} 
                        alt={p.name} 
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex justify-center space-x-2 mb-4">
                      {p.colors.map((c, idx) => (
                        <div key={idx} className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: c }}></div>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                    <p className="text-gray-400 mb-6">{p.description}</p>
                    <p className="text-xl font-bold mb-6">{p.price}</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full font-medium transition-colors mb-4">
                      Buy
                    </button>
                    <div className="border-t border-white/10 pt-6 mt-6">
                      <ul className="space-y-4 text-sm text-gray-300">
                        {p.features.map((f, idx) => (
                          <li key={idx} className="font-medium">{f}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-12">
        {renderPage()}
      </main>
      <Footer />
      <GeniusChat />
    </div>
  );
};

export default App;
