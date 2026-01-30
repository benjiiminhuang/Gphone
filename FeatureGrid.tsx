
import React from 'react';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: "G3 Titan Chip",
      description: "Our fastest chip ever. Pro performance for everything you do.",
      className: "md:col-span-2 bg-neutral-900",
      img: "https://picsum.photos/seed/chip/800/400"
    },
    {
      title: "Vision Pro Camera",
      description: "100MP of pure detail.",
      className: "md:col-span-1 bg-neutral-800",
      img: "https://picsum.photos/seed/lens/400/400"
    },
    {
      title: "All-day Battery",
      description: "Up to 30 hours of video playback.",
      className: "md:col-span-1 bg-neutral-800",
      img: "https://picsum.photos/seed/battery/400/400"
    },
    {
      title: "G-Intelligence",
      description: "Private. Powerful. Personal AI built in.",
      className: "md:col-span-2 bg-neutral-900",
      img: "https://picsum.photos/seed/ai/800/400"
    }
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-white tracking-tight">
          Explore the features.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className={`${f.className} rounded-3xl overflow-hidden group cursor-pointer border border-white/5`}>
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400 max-w-xs">{f.description}</p>
              </div>
              <div className="h-64 relative">
                <img 
                  src={f.img} 
                  alt={f.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
