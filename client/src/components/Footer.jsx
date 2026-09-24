import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-light pt-16 pb-8 border-t-8 border-brand-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-2 bg-brand-yellow rounded-xl">
                <GraduationCap size={32} className="text-brand-dark" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">Raigad School</span>
            </Link>
            <p className="text-gray-400 font-medium leading-relaxed">
              Empowering young minds through joyful learning, creativity, and modern education in a safe 3D world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-brand-yellow">Quick Links</h3>
            <ul className="space-y-3 font-medium">
              <li><Link to="/about" className="hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-brand-blue transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-brand-blue transition-colors">Admissions</Link></li>
              <li><Link to="/facilities" className="hover:text-brand-blue transition-colors">Facilities</Link></li>
              <li><Link to="/events" className="hover:text-brand-blue transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-brand-green">Contact Us</h3>
            <ul className="space-y-4 font-medium text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="text-brand-green shrink-0 mt-1" size={20} />
                <span>123 Education Lane, Knowledge Park, City 400001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-brand-green shrink-0" size={20} />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-brand-green shrink-0" size={20} />
                <span>hello@raigadschool.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-brand-coral">Newsletter</h3>
            <p className="text-gray-400 font-medium mb-4">Stay updated with our latest events and news!</p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-brand-coral transition-colors font-medium"
              />
              <button className="clay-button bg-brand-coral text-white border-none shadow-[4px_4px_8px_#1a252f,-4px_-4px_8px_#384f65] hover:shadow-[inset_4px_4px_8px_#d9798a,inset_-4px_-4px_8px_#ff9cba]">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-gray-500">
          <p>© {new Date().getFullYear()} Raigad International School. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="text-brand-coral mx-1 fill-brand-coral" /> for students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
