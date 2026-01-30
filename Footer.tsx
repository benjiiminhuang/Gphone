
import React from 'react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Shop and Learn",
      links: ["Store", "Gphone", "Gpad", "Gwatch", "Gaudio", "Gcomputing"]
    },
    {
      title: "Entertainment",
      links: ["G Music", "G TV+", "G Arcade", "G Fitness+", "G News+"]
    },
    {
      title: "G-Intelligence",
      links: ["Privacy", "Performance", "The Chip", "G-Vision", "G-Genius"]
    },
    {
      title: "About Gphone",
      links: ["Newsroom", "Sustainability", "Accessibility", "Privacy", "Investors", "Events"]
    }
  ];

  return (
    <footer className="bg-neutral-950 text-gray-500 py-16 px-6 border-t border-white/5">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {footerSections.map((section, i) => (
            <div key={i}>
              <h4 className="text-white text-xs font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-xs hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/5 pt-8 text-xs">
          <p className="mb-4">More ways to shop: <a href="#" className="text-blue-500 underline">Find an Gphone Store</a> or <a href="#" className="text-blue-500 underline">other retailer</a> near you. Or call 1-800-MY-GPHONE.</p>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>Copyright © 2024 Gphone Inc. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-gray-800">|</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <span className="text-gray-800">|</span>
              <a href="#" className="hover:text-white transition-colors">Legal</a>
              <span className="text-gray-800">|</span>
              <a href="#" className="hover:text-white transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
