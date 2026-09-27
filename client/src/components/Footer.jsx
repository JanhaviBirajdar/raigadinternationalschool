import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart, ExternalLink } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-light pt-16 pb-8 border-t-8 border-brand-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src={logoImg} 
                alt="RAIGAD INTERNATIONAL school Logo" 
                className="h-16 w-auto bg-white p-1 rounded-xl shadow-md group-hover:scale-105 transition-transform" 
              />
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block leading-tight">
                  RAIGAD INTERNATIONAL
                </span>
                <span className="text-sm font-bold text-brand-yellow tracking-widest uppercase">
                  School
                </span>
              </div>
            </Link>
            <p className="text-brand-yellow font-semibold italic text-sm">
              "Education is the key to Success"
            </p>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              Empowering students with holistic education, world-class infrastructure, and values under CBSE & Maharashtra State Board curricula.
            </p>
            <div className="inline-block bg-brand-navy border border-brand-yellow/40 rounded-lg px-3 py-1 text-xs text-gray-300 font-semibold">
              Board: CBSE / State Board
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-brand-yellow uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 font-medium text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-brand-yellow transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-brand-yellow transition-colors">Academics (CBSE/State)</Link></li>
              <li><Link to="/admissions" className="hover:text-brand-yellow transition-colors">Admissions 2026-27</Link></li>
              <li><Link to="/facilities" className="hover:text-brand-yellow transition-colors">Campus Facilities</Link></li>
              <li><Link to="/events" className="hover:text-brand-yellow transition-colors">Events & Activities</Link></li>
              <li><Link to="/faculty" className="hover:text-brand-yellow transition-colors">Faculty & Mentors</Link></li>
              <li><Link to="/contact" className="hover:text-brand-yellow transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-brand-coral uppercase tracking-wider">Reach Us</h3>
            <ul className="space-y-3.5 font-medium text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="text-brand-yellow shrink-0 mt-0.5" size={18} />
                <span className="leading-snug">
                  Koyana Velhe, Ghotkamp Koyana Vele, Taloja, Panvel, Maharashtra 410208
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-brand-yellow shrink-0" size={18} />
                <a href="tel:08169568369" className="hover:text-brand-yellow font-bold text-white transition-colors">
                  081695 68369
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-brand-yellow shrink-0" size={18} />
                <a href="mailto:info@raigadinternationalschool.com" className="hover:text-brand-yellow transition-colors">
                  info@raigadinternationalschool.com
                </a>
              </li>
            </ul>
            <a 
              href="https://share.google/BnjgzEawietoNwtBE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-navy hover:bg-brand-coral border border-brand-yellow/30 text-white font-bold text-xs transition-colors"
            >
              <ExternalLink size={14} /> Open in Google Maps
            </a>
          </div>

          {/* Newsletter / Working Hours */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-brand-yellow uppercase tracking-wider">Visit Hours</h3>
            <p className="text-gray-300 text-sm font-medium mb-3">
              Monday - Saturday: 8:00 AM - 4:00 PM<br/>
              Sunday: Closed
            </p>
            <div className="p-4 bg-gray-900/60 rounded-2xl border border-gray-800">
              <p className="text-xs text-brand-yellow font-bold mb-1">Admissions Open 2026-27</p>
              <p className="text-xs text-gray-400 mb-3">Call our admissions desk directly for brochure and fee structure.</p>
              <a 
                href="tel:08169568369" 
                className="clay-button bg-brand-coral hover:bg-red-700 text-white text-xs block text-center py-2"
              >
                Call: 081695 68369
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-gray-400">
          <p>© {new Date().getFullYear()} RAIGAD INTERNATIONAL school. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0 text-xs">
            <span>CBSE & State Board</span>
            <span className="mx-2">•</span>
            <span className="text-brand-yellow">"Education is the key to Success"</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
