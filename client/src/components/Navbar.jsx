import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

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
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-4 border-brand-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-brand-yellow rounded-xl group-hover:rotate-12 transition-transform">
              <GraduationCap size={32} className="text-brand-dark" />
            </div>
            <span className="font-extrabold text-2xl text-brand-dark tracking-tight">Raigad School</span>
          </Link>

          <div className="hidden md:flex space-x-1">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full font-bold transition-all duration-300 ${
                    isActive 
                      ? 'bg-brand-blue text-white shadow-[0_4px_0_#4693D4] -translate-y-1' 
                      : 'text-brand-dark hover:bg-gray-100 hover:-translate-y-1'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-gray-100 text-brand-dark hover:bg-gray-200 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b-4 border-brand-yellow shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-bold transition-all ${
                    isActive 
                      ? 'bg-brand-blue text-white' 
                      : 'text-brand-dark hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
