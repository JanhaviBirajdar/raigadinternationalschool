import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Sparkles } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Events', path: '/events' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Notification Bar */}
      <div className="bg-brand-navy text-white text-xs sm:text-sm py-1.5 px-4 border-b border-brand-yellow/30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center gap-1.5 bg-brand-coral/90 text-white font-bold px-2 py-0.5 rounded-full text-[11px] tracking-wide">
              <Sparkles size={12} /> CBSE / State Board
            </span>
            <span className="hidden md:inline text-gray-300 font-medium italic">
              "Education is the key to Success"
            </span>
          </div>
          <div className="flex items-center space-x-4 ml-auto text-xs sm:text-sm">
            <a 
              href="https://share.google/BnjgzEawietoNwtBE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-gray-300 hover:text-brand-yellow transition-colors"
            >
              <MapPin size={14} className="text-brand-yellow" />
              <span>Taloja, Panvel</span>
            </a>
            <a 
              href="tel:08169568369" 
              className="flex items-center gap-1.5 text-brand-yellow font-bold hover:underline"
            >
              <Phone size={14} className="text-brand-yellow animate-bounce" />
              <span>081695 68369</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b-4 border-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src={logoImg} 
                alt="RAIGAD INTERNATIONAL school Logo" 
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform" 
              />
              <div className="flex flex-col">
                <span className="font-black text-lg sm:text-xl md:text-2xl text-brand-navy tracking-tight leading-none group-hover:text-brand-coral transition-colors">
                  RAIGAD INTERNATIONAL
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-extrabold text-xs sm:text-sm tracking-widest text-brand-coral uppercase">
                    School
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                    CBSE / State Board
                  </span>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3.5 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                      isActive 
                        ? 'bg-brand-navy text-white shadow-[0_4px_0_#C8102E] -translate-y-0.5' 
                        : 'text-gray-700 hover:text-brand-navy hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/admissions"
                className="ml-2 clay-button bg-brand-coral text-white text-xs px-4 py-2 hover:bg-red-700"
              >
                Apply Now
              </Link>
            </div>

            <div className="lg:hidden flex items-center space-x-2">
              <a 
                href="tel:08169568369"
                className="p-2 rounded-xl bg-brand-yellow/20 text-brand-navy font-bold text-xs flex items-center gap-1"
                aria-label="Call School"
              >
                <Phone size={18} className="text-brand-navy" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-gray-100 text-brand-dark hover:bg-gray-200 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b-4 border-brand-yellow shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="px-4 pt-3 pb-6 space-y-2">
              <div className="p-3 bg-brand-light rounded-xl border border-gray-100 mb-3 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-500">Admissions Helpline</p>
                  <a href="tel:08169568369" className="text-sm font-extrabold text-brand-coral">081695 68369</a>
                </div>
                <span className="text-xs bg-brand-navy text-white font-bold px-2.5 py-1 rounded-full">CBSE / State</span>
              </div>
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
                      isActive 
                        ? 'bg-brand-navy text-white' 
                        : 'text-brand-dark hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className="block text-center mt-3 py-3 rounded-xl font-black text-white bg-brand-coral"
              >
                Apply for Admission
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
