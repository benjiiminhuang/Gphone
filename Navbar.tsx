
import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label: string) => {
    setCurrentPage(label);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || currentPage !== 'Home' ? 'apple-blur' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl mx-auto px-6 h-12 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNavClick('Home')} className="text-white hover:opacity-80 transition-opacity">
          <span className="text-xl font-bold tracking-tighter">Gphone</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.label} 
              onClick={() => handleNavClick(link.label)}
              className={`text-[12px] font-normal transition-colors ${currentPage === link.label ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-300 hover:text-white transition-colors">
            <Search size={18} />
          </button>
          <button onClick={() => handleNavClick('Store')} className="text-gray-300 hover:text-white transition-colors">
            <ShoppingBag size={18} />
          </button>
          <button 
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-12 bg-black z-40 p-10 md:hidden flex flex-col space-y-6">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.label} 
              className="text-2xl font-semibold text-white border-b border-gray-800 pb-2 text-left"
              onClick={() => handleNavClick(link.label)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
