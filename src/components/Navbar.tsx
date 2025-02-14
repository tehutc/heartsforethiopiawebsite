import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="p-1 rounded-full" style={{ backgroundColor: '#896262' }}>
              <img
                src="/logo.png"
                alt="Covenant Ministry Logo"
                className="h-12 w-12 rounded-full"
              />
            </div>
            <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-wine' : 'text-white'
              }`}>
              Covenant Ministry
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#mission" className={`hover:text-wine transition-colors ${isScrolled ? 'text-wine' : 'text-white'
              }`}>Our Mission</a>
            <a href="#impact" className={`hover:text-wine transition-colors ${isScrolled ? 'text-wine' : 'text-white'
              }`}>2023 Impact</a>
            <a href="#timeline" className={`hover:text-wine transition-colors ${isScrolled ? 'text-wine' : 'text-white'
              }`}>2025 Mission</a>
            <a href="#donate" className="btn-primary">
              Donate Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${isScrolled ? 'text-wine' : 'text-white'
                }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#mission" className="block px-3 py-2 text-wine hover:text-mauve">Our Mission</a>
            <a href="#impact" className="block px-3 py-2 text-wine hover:text-mauve">2023 Impact</a>
            <a href="#timeline" className="block px-3 py-2 text-wine hover:text-mauve">2025 Mission</a>
            <a href="#donate" className="block px-3 py-2 btn-primary text-center">Donate Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;